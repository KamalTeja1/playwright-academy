import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "composition-vs-inheritance",
  title: "Composition vs. Inheritance",
  summary:
    "Choose between an is-a relationship and building an object from smaller collaborating objects.",
  whyItMatters:
    "Favoring the right relationship keeps test frameworks flexible and prevents class hierarchies from carrying unrelated responsibilities.",
  notes: `Inheritance models an “is-a” relationship. Composition models a “has-a” relationship: an object contains or uses another object.

### Inheritance: a specialized kind of object

~~~python
class Page:
    def open(self):
        return "Opening page"

class LoginPage(Page):
    pass
~~~

A LoginPage is a Page, so inheriting common page behavior may make sense.

### Composition: use a collaborator

~~~python
class Browser:
    def open(self, url):
        return f"Opening {url}"

class LoginPage:
    def __init__(self, browser, url):
        self.browser = browser
        self.url = url

    def open(self):
        return self.browser.open(self.url)
~~~

A LoginPage has a Browser it uses. It is not itself a browser.

### Swap collaborators

~~~python
class RecordingBrowser:
    def open(self, url):
        return f"Would open {url}"

page = LoginPage(RecordingBrowser(), "/login")
print(page.open())
~~~

The page can work with another object that provides the needed behavior. This can make testing and substitution easier.

### A practical choice

Ask:

- Is the specialized object genuinely a kind of the base class?
- Does it need to substitute for that base class?
- Or does it mainly need to use another object's behavior?

Use inheritance for clear specialization. Use composition when an object delegates work to a collaborator or combines separate responsibilities.

Neither approach is always best. Start with the simplest design that represents the relationship accurately.

### The takeaway

Inheritance says “is-a”; composition says “has-a” or “uses-a.” Prefer the relationship that makes the code's behavior and responsibilities easiest to understand.`,
  handsOn: `Give a page a browser collaborator.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch composition_lab.py
~~~

### Step 2: Add the classes

~~~python
class Browser:
    def open(self, url):
        return f"Opening {url}"

class LoginPage:
    def __init__(self, browser, url):
        self.browser = browser
        self.url = url

    def open(self):
        return self.browser.open(self.url)

page = LoginPage(Browser(), "/login")
print(page.open())
~~~

### Step 3: Substitute a collaborator

Create a RecordingBrowser whose open method returns a message without opening anything. Pass it to LoginPage and run the same page method.

### Deliverable

Explain why LoginPage has a Browser rather than being a Browser.`,
  challenge: `Model a TestReport that uses a Formatter collaborator.

1. Define a formatter with a method that formats a result
2. Pass the formatter into TestReport
3. Let the report delegate formatting to it
4. Create a second formatter with a different output style
5. Use both with the same report interface

Then describe one example where inheritance would be clearer and one where composition is clearer.`,
  proTips: [
    "Use inheritance when the subclass can stand in for its base class.",
    "Use composition to delegate work to a collaborator.",
    "Composition makes it easier to replace one collaborator with another.",
    "Choose relationships based on meaning, not on reducing line count.",
  ],
  commonMistakes: [
    {
      mistake: "Inheriting from a class because it has a convenient method",
      fix: "Use composition or a helper if the new class is not truly a kind of that class.",
    },
    {
      mistake: "Making a class responsible for unrelated behavior",
      fix: "Move that behavior into a collaborator and delegate to it.",
    },
    {
      mistake: "Assuming composition automatically makes code flexible",
      fix: "Keep collaborator interfaces small and use substitution where it is useful.",
    },
    {
      mistake: "Treating the choice as an absolute rule",
      fix: "Use the simplest relationship that accurately models the design.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Delegate to a collaborator",
      code: `class Browser:
    def open(self, url):
        return f"Opening {url}"

class LoginPage:
    def __init__(self, browser, url):
        self.browser = browser
        self.url = url

    def open(self):
        return self.browser.open(self.url)

print(LoginPage(Browser(), "/login").open())`,
    },
    {
      language: "python",
      title: "Substitute a test collaborator",
      code: `class RecordingBrowser:
    def open(self, url):
        return f"Would open {url}"

class LoginPage:
    def __init__(self, browser, url):
        self.browser = browser
        self.url = url

    def open(self):
        return self.browser.open(self.url)

print(LoginPage(RecordingBrowser(), "/login").open())`,
    },
  ],
  furtherReading: [
    {
      title: "Python Tutorial — Inheritance",
      url: "https://docs.python.org/3/tutorial/classes.html#inheritance",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "oop", "composition", "inheritance"],
};

export default topic;