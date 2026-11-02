import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "dunder-methods",
  title: "Dunder Methods",
  summary:
    "Customize how objects work with Python syntax by implementing selected special methods.",
  whyItMatters:
    "A few well-chosen special methods make test models easier to inspect, compare, and use with built-in operations.",
  notes: `Dunder means “double underscore.” Special methods have names such as __init__ and __str__. Python calls them to implement common operations.

### String representations

~~~python
class TestCase:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"TestCase: {self.name}"

    def __repr__(self):
        return f"TestCase(name={self.name!r})"

case = TestCase("login")
print(str(case))
print(repr(case))
~~~

__str__ aims to be readable for people. __repr__ aims to be useful when inspecting the object. A helpful repr often includes enough information to understand or recreate the value.

### Compare objects

~~~python
class TestCase:
    def __init__(self, name):
        self.name = name

    def __eq__(self, other):
        if not isinstance(other, TestCase):
            return NotImplemented
        return self.name == other.name

print(TestCase("login") == TestCase("login"))
~~~

Returning NotImplemented for an unsupported comparison lets Python try the other operand's comparison behavior.

### Support length

~~~python
class TestSuite:
    def __init__(self, cases):
        self.cases = list(cases)

    def __len__(self):
        return len(self.cases)

suite = TestSuite(["login", "search"])
print(len(suite))
~~~

### Follow the expected contract

Special methods connect to built-in syntax and functions. Their return types and behavior need to match Python's expectations. For example, __len__ returns a non-negative integer.

Implement only methods that improve the class interface. Defining many special methods without a clear need can make a class harder to understand.

### The takeaway

Special methods customize familiar operations such as printing, equality, and len(). Implement them to follow Python's expected behavior and return contracts.`,
  handsOn: `Make a test suite printable and countable.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch dunder_lab.py
~~~

### Step 2: Define a class

~~~python
class TestSuite:
    def __init__(self, cases):
        self.cases = list(cases)

    def __str__(self):
        return f"TestSuite with {len(self.cases)} cases"

    def __len__(self):
        return len(self.cases)

suite = TestSuite(["login", "search", "cart"])
print(suite)
print(len(suite))
~~~

### Step 3: Add equality

Define when two suites should be considered equal. Compare two with the same cases and two with different cases.

### Deliverable

Explain which Python operations call __str__, __len__, and __eq__.`,
  challenge: `Create a TestResult class.

1. Store a test name and outcome
2. Implement __str__ for a readable display
3. Implement __repr__ with useful debugging detail
4. Implement __eq__ to compare results by both fields
5. Return NotImplemented when comparing with an unrelated type

Then explain why special methods should follow Python's expected contracts.`,
  proTips: [
    "Implement only the special methods your class needs.",
    "Use __str__ for a readable display and __repr__ for useful inspection.",
    "Return NotImplemented for unsupported equality comparisons.",
    "Follow the required return type for each special method.",
  ],
  commonMistakes: [
    {
      mistake: "Naming a special method with only one underscore",
      fix: "Use the exact method name, such as __str__ or __len__.",
    },
    {
      mistake: "Returning text from __len__",
      fix: "__len__ must return a non-negative integer.",
    },
    {
      mistake: "Returning False for every unrelated comparison type",
      fix: "Return NotImplemented when the comparison is not supported.",
    },
    {
      mistake: "Making __repr__ misleading or unhelpful",
      fix: "Include clear identifying values useful for debugging.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Readable and inspectable representations",
      code: `class TestCase:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"TestCase: {self.name}"

    def __repr__(self):
        return f"TestCase(name={self.name!r})"

case = TestCase("login")
print(str(case))
print(repr(case))`,
    },
    {
      language: "python",
      title: "Support len()",
      code: `class TestSuite:
    def __init__(self, cases):
        self.cases = list(cases)

    def __len__(self):
        return len(self.cases)

print(len(TestSuite(["login", "search"])))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Data Model — Special Method Names",
      url: "https://docs.python.org/3/reference/datamodel.html#special-method-names",
    },
    {
      title: "Python Tutorial — Special Method Names",
      url: "https://docs.python.org/3/tutorial/classes.html#special-method-names",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "dunder", "special-methods"],
};

export default topic;