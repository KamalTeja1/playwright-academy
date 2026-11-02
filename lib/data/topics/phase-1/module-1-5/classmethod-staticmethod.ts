import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "classmethod-staticmethod",
  title: "Class Methods and Static Methods",
  summary:
    "Choose instance methods, class methods, and static methods based on what a method needs to access.",
  whyItMatters:
    "The right method type makes constructors and helper functions clearer about whether they use an instance or the class.",
  notes: `Most methods receive an instance as their first argument. Python also supports methods that receive the class or receive neither automatically.

### Instance methods

An ordinary method receives self.

~~~python
class BrowserConfig:
    def __init__(self, browser):
        self.browser = browser

    def describe(self):
        return f"Browser: {self.browser}"
~~~

Use an instance method when the behavior needs that object's state.

### Class methods

The @classmethod decorator makes the class the first argument, conventionally named cls.

~~~python
class BrowserConfig:
    def __init__(self, browser):
        self.browser = browser

    @classmethod
    def default(cls):
        return cls("chromium")

config = BrowserConfig.default()
print(config.browser)
~~~

A class method is often a named alternative constructor. Calling cls rather than hard-coding BrowserConfig also works when a subclass inherits the method.

### Static methods

The @staticmethod decorator adds no automatic self or cls argument.

~~~python
class BrowserConfig:
    @staticmethod
    def is_supported(browser):
        return browser in ("chromium", "firefox", "webkit")
~~~

Call it through the class or an instance. Use a static method when the helper belongs conceptually with the class but needs no instance or class state.

### Choose the simplest fit

- Instance method: needs data from one object
- Class method: needs the class, often to construct an instance
- Static method: needs neither automatic argument

A helper that has no meaningful relationship to the class may be clearer as a module-level function.

### The takeaway

Choose the method type based on the data it needs. Decorators change what Python passes automatically; they do not make a method inherently more powerful.`,
  handsOn: `Give a config class three kinds of behavior.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch method_types_lab.py
~~~

### Step 2: Define the class

~~~python
class BrowserConfig:
    supported = ("chromium", "firefox", "webkit")

    def __init__(self, browser):
        self.browser = browser

    def describe(self):
        return f"Browser: {self.browser}"

    @classmethod
    def default(cls):
        return cls("chromium")

    @staticmethod
    def is_supported(browser):
        return browser in ("chromium", "firefox", "webkit")

config = BrowserConfig.default()
print(config.describe())
print(BrowserConfig.is_supported("webkit"))
print(BrowserConfig.is_supported("unknown"))
~~~

### Step 3: Identify the arguments

For each method, identify whether Python supplies self, cls, or neither.

### Deliverable

Keep the script. Explain why default is a class method and is_supported can be a static method.`,
  challenge: `Create a RetryPolicy class.

1. Store the retry count on each instance
2. Add an instance method that describes one policy
3. Add a class method that creates a conservative default policy
4. Add a static method that checks whether a retry count is a positive integer
5. Demonstrate all three methods

Then explain when a module-level helper would be preferable to a static method.`,
  proTips: [
    "Use @classmethod when behavior needs the class or creates an instance.",
    "Use @staticmethod only when no automatic instance or class argument is needed.",
    "Keep self and cls as the conventional first parameter names.",
    "Prefer a module-level function when the helper does not belong to the class.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting cls as the first parameter of a class method",
      fix: "Declare the class method with cls first.",
    },
    {
      mistake: "Expecting a static method to receive self automatically",
      fix: "A static method receives only the arguments supplied by the caller.",
    },
    {
      mistake: "Hard-coding the class name in an alternative constructor",
      fix: "Return cls(...) so inherited class methods can construct the subclass.",
    },
    {
      mistake: "Using a decorator without understanding the method's needs",
      fix: "Decide whether the method needs instance state, class state, or neither.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Alternative constructor",
      code: `class BrowserConfig:
    def __init__(self, browser):
        self.browser = browser

    @classmethod
    def default(cls):
        return cls("chromium")

print(BrowserConfig.default().browser)`,
    },
    {
      language: "python",
      title: "Static validation helper",
      code: `class RetryPolicy:
    @staticmethod
    def valid_attempts(attempts):
        return type(attempts) is int and attempts > 0

print(RetryPolicy.valid_attempts(3))
print(RetryPolicy.valid_attempts(0))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Class and Instance Variables",
      url: "https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables",
    },
    {
      title: "Python Docs — Built-in Functions: classmethod and staticmethod",
      url: "https://docs.python.org/3/library/functions.html",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "classmethod", "staticmethod"],
};

export default topic;