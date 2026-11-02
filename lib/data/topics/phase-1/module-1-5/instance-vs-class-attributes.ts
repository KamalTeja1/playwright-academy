import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "instance-vs-class-attributes",
  title: "Instance and Class Attributes",
  summary:
    "Distinguish per-object state from attributes shared through a class.",
  whyItMatters:
    "Knowing where an attribute lives prevents accidental state sharing and makes object behavior easier to predict.",
  notes: `An instance attribute belongs to one object. A class attribute is defined on the class and can be shared or looked up by its instances.

### Instance attributes

~~~python
class TestUser:
    def __init__(self, name):
        self.name = name

first = TestUser("Priya")
second = TestUser("Arjun")

print(first.name)
print(second.name)
~~~

Each object has its own name.

### Class attributes

~~~python
class TestUser:
    account_type = "standard"

    def __init__(self, name):
        self.name = name

first = TestUser("Priya")
second = TestUser("Arjun")

print(first.account_type)
print(second.account_type)
~~~

Neither instance defines account_type, so Python finds it on the class.

### Attribute lookup and shadowing

An instance can define an attribute with the same name as a class attribute.

~~~python
first.account_type = "admin"

print(first.account_type)
print(second.account_type)
print(TestUser.account_type)
~~~

The assignment creates or updates an instance attribute. It does not change the class attribute.

### Use class attributes for shared constants

~~~python
class BrowserConfig:
    supported_browsers = ("chromium", "firefox", "webkit")
~~~

A tuple is a useful choice for data intended to remain fixed.

### Be careful with mutable class attributes

A mutable class attribute is shared by instances unless an instance shadows it.

~~~python
class TestRun:
    results = []
~~~

Appending to first.results changes that shared list. For per-run data, initialize a separate list on each instance instead.

### The takeaway

Use instance attributes for data that varies per object. Use class attributes for genuinely shared values, especially constants, and avoid shared mutable state unless it is intentional.`,
  handsOn: `Explore attribute lookup.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch attributes_lab.py
~~~

### Step 2: Compare attributes

~~~python
class TestUser:
    account_type = "standard"

    def __init__(self, name):
        self.name = name

first = TestUser("Priya")
second = TestUser("Arjun")

print(first.name, second.name)
print(first.account_type, second.account_type)

first.account_type = "admin"
print(first.account_type, second.account_type)
print(TestUser.account_type)
~~~

### Step 3: Inspect the instance

Print first.__dict__ and second.__dict__. Notice which attributes are stored directly on each instance.

### Deliverable

Keep the script. Explain why assigning first.account_type did not change TestUser.account_type.`,
  challenge: `Create a BrowserConfig class with a class attribute containing the supported browser names and instance attributes for browser and headless mode.

1. Create two configurations
2. Show that each configuration has its own browser and headless values
3. Read the supported browser names from both instances
4. Add an instance attribute with the same name and observe which value is used
5. Explain why a shared mutable list can cause surprising behavior

Use an immutable tuple for the supported-browser constant.`,
  proTips: [
    "Use self.value for per-instance state.",
    "Use ClassName.value when referring clearly to a class-level value.",
    "Prefer immutable values for class constants.",
    "Inspect an instance's __dict__ to see its directly stored attributes.",
  ],
  commonMistakes: [
    {
      mistake: "Putting per-user or per-test data on the class",
      fix: "Initialize it on self so each instance gets its own value.",
    },
    {
      mistake: "Assuming assignment through an instance changes the class attribute",
      fix: "That assignment usually creates an instance attribute that shadows it.",
    },
    {
      mistake: "Using a mutable class attribute for per-instance data",
      fix: "Create a fresh list or dictionary in __init__.",
    },
    {
      mistake: "Expecting every attribute to appear in an instance's __dict__",
      fix: "Class attributes are stored on the class unless shadowed by the instance.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A class constant and instance-specific values",
      code: `class BrowserConfig:
    supported = ("chromium", "firefox", "webkit")

    def __init__(self, browser):
        self.browser = browser

config = BrowserConfig("chromium")
print(config.browser)
print(config.supported)`,
    },
    {
      language: "python",
      title: "Avoid shared mutable instance state",
      code: `class TestRun:
    def __init__(self):
        self.results = []

first = TestRun()
second = TestRun()
first.results.append("PASS")
print(first.results)
print(second.results)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Class and Instance Variables",
      url: "https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "attributes", "state"],
};

export default topic;