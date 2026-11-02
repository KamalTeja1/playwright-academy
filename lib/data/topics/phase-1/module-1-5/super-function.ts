import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "super-function",
  title: "The super() Function",
  summary:
    "Call the next implementation in the method resolution order, commonly to extend inherited initialization.",
  whyItMatters:
    "Calling super() helps subclasses reuse base-class setup without duplicating it or hard-coding the parent class name.",
  notes: `super() gives access to the next implementation of a method in the method resolution order.

### Extend initialization

~~~python
class Page:
    def __init__(self, url):
        self.url = url

class LoginPage(Page):
    def __init__(self, url, title):
        super().__init__(url)
        self.title = title

page = LoginPage("https://example.test/login", "Sign in")
print(page.url)
print(page.title)
~~~

LoginPage uses the base initializer to set url, then initializes its additional title attribute.

### Extend a method

~~~python
class Page:
    def description(self):
        return f"Page: {self.url}"

class LoginPage(Page):
    def description(self):
        base_description = super().description()
        return f"{base_description} (login)"

page = LoginPage()
page.url = "/login"
print(page.description())
~~~

The override adds to the inherited result rather than replacing it entirely.

### Why use super()?

Calling Page.__init__(self, url) names a particular parent directly. super() follows Python's method resolution order, which matters when a class has multiple bases and when methods are cooperatively designed.

### Use it consistently

In a hierarchy where multiple classes participate in initialization, each class should call super() consistently and pass along the arguments it does not consume. Multiple inheritance has additional rules, so keep examples simple until those rules are needed.

### The takeaway

Use super() when extending inherited behavior. It delegates to the next implementation in the method resolution order rather than simply meaning “call my parent.”`,
  handsOn: `Extend a base page initializer.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch super_lab.py
~~~

### Step 2: Add the classes

~~~python
class Page:
    def __init__(self, url):
        self.url = url

class LoginPage(Page):
    def __init__(self, url, title):
        super().__init__(url)
        self.title = title

page = LoginPage("/login", "Sign in")
print(page.url)
print(page.title)
~~~

### Step 3: Add an override

Give Page a description method. Override it in LoginPage, call super().description(), and add the login-specific detail.

### Deliverable

Explain which attributes the base initializer sets and which the subclass sets.`,
  challenge: `Create a base ApiResource class and a specialized UserResource.

1. Let the base initializer store a resource path
2. Let the subclass accept and store a resource name
3. Use super() to initialize the base part
4. Override a method and include the base method's result
5. Explain why direct calls such as ApiResource.__init__(self, path) are less flexible in a hierarchy

Keep the class hierarchy shallow.`,
  proTips: [
    "Use super() to extend inherited initialization and behavior.",
    "Call super() before using attributes initialized by the base method.",
    "Remember that super() follows method resolution order.",
    "Keep cooperative multiple inheritance consistent if you use it.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting to initialize the base-class state",
      fix: "Call super().__init__(...) when the subclass provides its own initializer.",
    },
    {
      mistake: "Calling super without parentheses in modern Python",
      fix: "Use super() in ordinary instance methods.",
    },
    {
      mistake: "Assuming super() always means the direct parent",
      fix: "It resolves the next class in the method resolution order.",
    },
    {
      mistake: "Calling the base implementation and then overwriting its result accidentally",
      fix: "Store or return the result deliberately when extending a method.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Reuse base initialization",
      code: `class Page:
    def __init__(self, url):
        self.url = url

class LoginPage(Page):
    def __init__(self, url, title):
        super().__init__(url)
        self.title = title

page = LoginPage("/login", "Sign in")
print(page.url, page.title)`,
    },
    {
      language: "python",
      title: "Extend an inherited method",
      code: `class Page:
    def description(self):
        return "Generic page"

class LoginPage(Page):
    def description(self):
        return f"{super().description()} (login)"

print(LoginPage().description())`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Multiple Inheritance and super()",
      url: "https://docs.python.org/3/tutorial/classes.html#multiple-inheritance",
    },
    {
      title: "Python Docs — super",
      url: "https://docs.python.org/3/library/functions.html#super",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "oop", "super", "inheritance"],
};

export default topic;