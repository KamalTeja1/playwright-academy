import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "init-method",
  title: "The __init__ Method",
  summary:
    "Initialize each new object with the data it needs, using the special __init__ method.",
  whyItMatters:
    "Consistent initialization prevents half-configured test objects and makes required data clear where an object is created.",
  notes: `The __init__ method runs automatically after Python creates a new instance. It is commonly used to set that instance's initial attributes.

### Initialize an object

~~~python
class TestUser:
    def __init__(self, name, role):
        self.name = name
        self.role = role

user = TestUser("Priya", "tester")
print(user.name)
print(user.role)
~~~

When you call TestUser with two values, Python creates an instance and passes it to __init__ as self. The other values are name and role.

### Required and optional values

~~~python
class BrowserConfig:
    def __init__(self, browser, headless=True):
        self.browser = browser
        self.headless = headless

config = BrowserConfig("chromium")
print(config.headless)
~~~

The default applies when the caller omits headless.

Avoid mutable defaults such as lists or dictionaries. A default object is created once and can be shared across instances.

~~~python
class TestRun:
    def __init__(self, results=None):
        self.results = [] if results is None else results
~~~

### Validate input during initialization

~~~python
class RetryPolicy:
    def __init__(self, attempts):
        if type(attempts) is not int or attempts < 1:
            raise ValueError("attempts must be a positive integer")
        self.attempts = attempts
~~~

Reject invalid state early, using an exception that describes the problem.

### __init__ does not create the instance

Python creates the object first, then calls __init__ to initialize it. In ordinary application code, you usually only need to define __init__.

### The takeaway

Use __init__ to establish the required state of each instance. Make required inputs explicit, use safe defaults, and validate data when appropriate.`,
  handsOn: `Build an initialized test account.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch init_lab.py
~~~

### Step 2: Define the class

~~~python
class TestAccount:
    def __init__(self, username, role="guest"):
        self.username = username
        self.role = role

    def summary(self):
        return f"{self.username}: {self.role}"

admin = TestAccount("admin-user", "admin")
guest = TestAccount("guest-user")

print(admin.summary())
print(guest.summary())
~~~

### Step 3: Add validation

Reject an empty username with ValueError. Try constructing an invalid account and observe what happens.

### Deliverable

Keep the script. Identify which values are required, which has a default, and when initialization runs.`,
  challenge: `Create a TestCase class with a required name and an optional tags collection.

1. Store the name and tags on each instance
2. Use a safe default so two instances do not share a mutable list
3. Add a method that adds a tag
4. Reject a blank name
5. Show that adding a tag to one instance does not change the other

Then explain why a list should not be used directly as a default argument.`,
  proTips: [
    "Set instance attributes in __init__.",
    "Make required constructor arguments explicit.",
    "Use None when you need to create a fresh mutable value per instance.",
    "Raise a clear exception for invalid initial data.",
  ],
  commonMistakes: [
    {
      mistake: "Spelling the method init without the surrounding double underscores",
      fix: "The special method name is exactly __init__.",
    },
    {
      mistake: "Forgetting self when assigning an instance attribute",
      fix: "Use self.attribute = value to store data on the instance.",
    },
    {
      mistake: "Using a shared list or dictionary as a default",
      fix: "Default to None and create a new collection inside __init__.",
    },
    {
      mistake: "Returning a value from __init__",
      fix: "__init__ initializes the instance and should return None implicitly.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Initialize required and optional attributes",
      code: `class BrowserConfig:
    def __init__(self, browser, headless=True):
        self.browser = browser
        self.headless = headless

config = BrowserConfig("chromium")
print(config.browser, config.headless)`,
    },
    {
      language: "python",
      title: "Create a fresh list per instance",
      code: `class TestRun:
    def __init__(self, results=None):
        self.results = [] if results is None else results

first = TestRun()
second = TestRun()
first.results.append("PASS")
print(first.results)
print(second.results)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — A First Look at Classes",
      url: "https://docs.python.org/3/tutorial/classes.html#a-first-look-at-classes",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "oop", "init", "initialization"],
};

export default topic;