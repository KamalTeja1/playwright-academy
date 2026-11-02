import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "property-decorator",
  title: "The property Decorator",
  summary:
    "Expose computed or validated behavior through attribute-style access with property.",
  whyItMatters:
    "Properties let a class keep a simple public interface while validating assignments or computing a value when it is read.",
  notes: `A property lets code access a method using attribute syntax. It is useful when reading or assigning a value needs controlled behavior.

### A read-only computed value

~~~python
class TestResult:
    def __init__(self, passed, total):
        self.passed = passed
        self.total = total

    @property
    def pass_rate(self):
        if self.total == 0:
            return 0
        return self.passed / self.total

result = TestResult(8, 10)
print(result.pass_rate)
~~~

Callers use result.pass_rate, not result.pass_rate().

### Validate assignments with a setter

~~~python
class BrowserConfig:
    def __init__(self, timeout):
        self.timeout = timeout

    @property
    def timeout(self):
        return self._timeout

    @timeout.setter
    def timeout(self, value):
        if type(value) is not int or value <= 0:
            raise ValueError("timeout must be a positive integer")
        self._timeout = value
~~~

The leading underscore signals that _timeout is intended as an internal implementation attribute. It is a convention, not a security boundary.

During initialization, self.timeout = timeout uses the setter, so the same validation applies there.

### A read-only property

If there is a @property but no setter, assigning to that property raises AttributeError.

Use this for a value that should be calculated from other state or not directly changed by callers.

### When to use properties

Use a property when attribute-style access is natural and the extra behavior is small and predictable. Use an ordinary method when the operation is substantial, requires arguments, or has noticeable side effects.

### The takeaway

A property can preserve a simple attribute interface while centralizing computation or validation. Avoid surprising work in property getters.`,
  handsOn: `Validate a timeout using a property.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch property_lab.py
~~~

### Step 2: Define the class

~~~python
class BrowserConfig:
    def __init__(self, timeout):
        self.timeout = timeout

    @property
    def timeout(self):
        return self._timeout

    @timeout.setter
    def timeout(self, value):
        if type(value) is not int or value <= 0:
            raise ValueError("timeout must be a positive integer")
        self._timeout = value

config = BrowserConfig(30)
print(config.timeout)

config.timeout = 45
print(config.timeout)
~~~

### Step 3: Try invalid values

Try assigning 0 and a string. Observe the exception. Restore a valid timeout.

### Deliverable

Keep the script. Explain why the public name is timeout while the stored attribute is _timeout.`,
  challenge: `Create a TestResult class with passed and total counts.

1. Validate that both counts are non-negative integers
2. Reject a passed count greater than total
3. Add a read-only pass_rate property
4. Return 0 when total is zero
5. Demonstrate valid and invalid data

Then explain why pass_rate is a property rather than a stored value, and when an ordinary method would be clearer.`,
  proTips: [
    "Use @property for computed values that read like attributes.",
    "Pair a property setter with the matching property name.",
    "Store the value under a different internal name, commonly with a leading underscore.",
    "Keep property getters quick and free of surprising side effects.",
  ],
  commonMistakes: [
    {
      mistake: "Calling a property like a method",
      fix: "Read it as object.value, without parentheses.",
    },
    {
      mistake: "Assigning to a property that has no setter",
      fix: "Add a setter only when the value is meant to be assigned.",
    },
    {
      mistake: "Having a setter assign to the property again",
      fix: "Store the value on a separate internal attribute to avoid recursion.",
    },
    {
      mistake: "Putting slow or side-effecting work in a getter",
      fix: "Use an ordinary method for substantial operations.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Compute a value with a property",
      code: `class TestResult:
    def __init__(self, passed, total):
        self.passed = passed
        self.total = total

    @property
    def pass_rate(self):
        return 0 if self.total == 0 else self.passed / self.total

result = TestResult(8, 10)
print(result.pass_rate)`,
    },
    {
      language: "python",
      title: "Validate assignments",
      code: `class BrowserConfig:
    def __init__(self, timeout):
        self.timeout = timeout

    @property
    def timeout(self):
        return self._timeout

    @timeout.setter
    def timeout(self, value):
        if type(value) is not int or value <= 0:
            raise ValueError("timeout must be positive")
        self._timeout = value

config = BrowserConfig(30)
config.timeout = 45`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — property",
      url: "https://docs.python.org/3/library/functions.html#property",
    },
    {
      title: "Python Tutorial — Property",
      url: "https://docs.python.org/3/library/functions.html#property",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "property", "validation"],
};

export default topic;