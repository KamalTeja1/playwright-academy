import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "classes-objects",
  title: "Classes and Objects",
  summary:
    "Define a class as a blueprint and create objects that hold data and provide behavior.",
  whyItMatters:
    "Classes help organize related data and actions into reusable models for pages, test users, and other test resources.",
  notes: `A class describes a kind of thing. An object is one particular thing made from that description.

### Define a class

~~~python
class User:
    pass
~~~

The class name conventionally uses CapWords. The pass statement gives the class an empty body.

### Create objects

~~~python
class User:
    pass

first_user = User()
second_user = User()

print(type(first_user).__name__)
print(first_user is second_user)
~~~

Calling the class creates an object. Each call creates a separate object.

### Add data and behavior

~~~python
class User:
    def describe(self):
        return f"{self.name} ({self.role})"

first_user = User()
first_user.name = "Priya"
first_user.role = "tester"

print(first_user.describe())
~~~

A function defined in a class is a method. When called through an object, Python supplies that object as the first argument.

The parameter is conventionally named self. It refers to the current object.

### Give objects their data when they are created

Assigning attributes afterward works, but it is easy to forget one. The next topic introduces __init__ to set up new objects consistently.

### Compare objects and dictionaries

A dictionary is convenient for flexible records:

~~~python
user = {"name": "Priya", "role": "tester"}
~~~

A class is useful when a particular kind of object has expected data and behavior:

~~~python
class User:
    def describe(self):
        return f"{self.name} ({self.role})"
~~~

Choose the simplest structure that fits. Not every collection of values needs a class.

### Attributes

An attribute is a value accessed through a dot, such as user.name or user.describe. Objects can have data attributes and methods.

### The takeaway

A class defines a kind of object. Create an instance by calling the class, and use methods to describe behavior related to that object.`,
  handsOn: `Create a tiny user model.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
mkdir -p oop-lab
cd oop-lab
touch classes_lab.py
~~~

### Step 2: Define a class

~~~python
class TestUser:
    def describe(self):
        return f"{self.name} is a {self.role}"

user = TestUser()
user.name = "Asha"
user.role = "reviewer"

print(user.describe())
~~~

### Step 3: Make another object

Create a second TestUser, give it different attributes, and call describe on both.

### Step 4: Compare identity

Print whether the two objects are the same object using is.

### Deliverable

Keep the script. Explain what the class describes, what each object represents, and what self refers to inside describe.`,
  challenge: `Create a BrowserSession class with a method that returns a short description.

1. Make two separate objects
2. Give each a different browser name and starting URL
3. Print each description
4. Show that changing one object's data does not change the other object's data

Then explain:

- What is the difference between a class and an object?
- What is a method?
- Why is self the first parameter in an instance method?

Keep this exercise small; the next topic covers initializing data.`,
  proTips: [
    "Use CapWords for class names.",
    "Use a class when related state and behavior belong together.",
    "Remember that calling a class creates an instance.",
    "Use self as the conventional first parameter for instance methods.",
  ],
  commonMistakes: [
    {
      mistake: "Confusing a class with an instance",
      fix: "The class describes a kind of object; an instance is one object created from it.",
    },
    {
      mistake: "Forgetting self in an instance method",
      fix: "Declare self first so Python can pass the current instance.",
    },
    {
      mistake: "Assuming two calls to a class return the same object",
      fix: "Each call normally creates a distinct instance.",
    },
    {
      mistake: "Using a class for a simple value that needs no behavior",
      fix: "Prefer a plain value or dictionary when that is all the task needs.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Create and use an object",
      code: `class TestUser:
    def describe(self):
        return f"{self.name} is a {self.role}"

user = TestUser()
user.name = "Asha"
user.role = "reviewer"
print(user.describe())`,
    },
    {
      language: "python",
      title: "Create distinct instances",
      code: `class Browser:
    pass

chrome = Browser()
firefox = Browser()

print(chrome is firefox)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Classes",
      url: "https://docs.python.org/3/tutorial/classes.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "oop", "classes", "objects"],
};

export default topic;