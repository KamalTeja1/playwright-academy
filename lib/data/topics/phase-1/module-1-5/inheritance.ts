import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "inheritance",
  title: "Inheritance",
  summary:
    "Create a specialized class from a base class and reuse or customize its behavior.",
  whyItMatters:
    "Inheritance can share common behavior across related test models, but deep hierarchies make changes harder to understand.",
  notes: `Inheritance lets a class reuse behavior from another class.

### Define a base class

~~~python
class Page:
    def __init__(self, url):
        self.url = url

    def open(self):
        return f"Opening {self.url}"
~~~

### Create a specialized class

~~~python
class LoginPage(Page):
    def submit(self):
        return "Submitting login form"

page = LoginPage("https://example.test/login")
print(page.open())
print(page.submit())
~~~

LoginPage inherits Page. It can use the inherited __init__ and open method, and it can add its own methods.

### Override a method

A subclass can provide a method with the same name to specialize behavior.

~~~python
class Page:
    def description(self):
        return "Generic page"

class LoginPage(Page):
    def description(self):
        return "Login page"

print(LoginPage().description())
~~~

The subclass method is used for a LoginPage object.

### Check the relationship

~~~python
page = LoginPage()
print(isinstance(page, LoginPage))
print(isinstance(page, Page))
~~~

Both checks are true because LoginPage is a Page.

### Keep inheritance meaningful

Use inheritance when the subclass truly is a kind of the base class and can be used where the base class is expected. Avoid creating a base class only to save a few lines of code.

Deep chains can make it difficult to find where behavior comes from. Prefer a small hierarchy with a clear relationship.

The next topic introduces super(), which lets an override call behavior from its parent class.

### The takeaway

Inheritance creates an “is-a” relationship. A subclass can reuse and specialize a base class, but the relationship should make sense to callers.`,
  handsOn: `Model two page types.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch inheritance_lab.py
~~~

### Step 2: Add a base and subclass

~~~python
class Page:
    def __init__(self, url):
        self.url = url

    def open(self):
        return f"Opening {self.url}"

class LoginPage(Page):
    def submit(self):
        return "Submitting login form"

login = LoginPage("https://example.test/login")
print(login.open())
print(login.submit())
print(isinstance(login, Page))
~~~

### Step 3: Add another subclass

Create a SearchPage with a search method. Keep the shared URL and open behavior in Page.

### Deliverable

Explain which behavior is inherited and why LoginPage is a kind of Page.`,
  challenge: `Create a base TestPage class and two subclasses, LoginPage and SearchPage.

1. Store a URL in the base class
2. Add a shared method that describes the page
3. Give each subclass one distinct method
4. Override the description in one subclass
5. Check each object with isinstance

Then explain when the subclasses can be treated as TestPage objects, and when inheritance would be the wrong relationship.`,
  proTips: [
    "Use inheritance for a genuine is-a relationship.",
    "Keep base classes focused and small.",
    "Override behavior only when the subclass needs different behavior.",
    "Avoid deep inheritance chains that obscure where behavior comes from.",
  ],
  commonMistakes: [
    {
      mistake: "Using inheritance only to avoid repeating a few lines",
      fix: "Use a helper function or composition if there is no genuine is-a relationship.",
    },
    {
      mistake: "Assuming a subclass only has its own methods",
      fix: "A subclass also receives accessible behavior from its base classes.",
    },
    {
      mistake: "Overriding a method with an incompatible meaning",
      fix: "Keep the subclass usable wherever the base class is expected.",
    },
    {
      mistake: "Building a long hierarchy too early",
      fix: "Start with a small design and add inheritance only when it clarifies the model.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Reuse base-class behavior",
      code: `class Page:
    def __init__(self, url):
        self.url = url

    def open(self):
        return f"Opening {self.url}"

class LoginPage(Page):
    def submit(self):
        return "Submitting login form"

page = LoginPage("https://example.test/login")
print(page.open())
print(page.submit())`,
    },
    {
      language: "python",
      title: "Override inherited behavior",
      code: `class Page:
    def description(self):
        return "Generic page"

class LoginPage(Page):
    def description(self):
        return "Login page"

print(LoginPage().description())`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Inheritance",
      url: "https://docs.python.org/3/tutorial/classes.html#inheritance",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "inheritance", "classes"],
};

export default topic;