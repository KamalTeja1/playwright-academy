import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "dataclasses",
  title: "Dataclasses",
  summary:
    "Use dataclasses to reduce boilerplate for classes that primarily store structured data.",
  whyItMatters:
    "Test cases, configuration values, and result records often need predictable fields without handwritten initialization and representation methods.",
  notes: `A dataclass can generate common methods for a class whose main purpose is to store data.

### Define a dataclass

~~~python
from dataclasses import dataclass

@dataclass
class TestCase:
    name: str
    expected_status: int

case = TestCase("login", 200)
print(case)
print(case.name)
~~~

The decorator generates an initializer and a useful representation by default. The annotations describe the fields; Python does not automatically validate their types at runtime.

### Default values

~~~python
from dataclasses import dataclass

@dataclass
class BrowserConfig:
    browser: str
    headless: bool = True

config = BrowserConfig("chromium")
print(config)
~~~

Fields without defaults must come before fields with defaults.

### Use default_factory for mutable values

~~~python
from dataclasses import dataclass, field

@dataclass
class TestRun:
    results: list[str] = field(default_factory=list)
~~~

default_factory creates a new list for each instance. Do not use a shared list as a dataclass field default.

### Equality and immutability

By default, dataclasses generate equality comparisons using their fields.

~~~python
first = TestCase("login", 200)
second = TestCase("login", 200)
print(first == second)
~~~

Use frozen=True when instances should not be reassigned after creation:

~~~python
@dataclass(frozen=True)
class Endpoint:
    path: str
~~~

A frozen dataclass prevents ordinary attribute reassignment; it does not deeply freeze mutable objects stored in its fields.

### When to use a dataclass

Use one when the class mainly represents data. Use a regular class when you need more control over initialization, attribute access, or behavior. Dataclasses do not replace validation when your application needs it.

### The takeaway

Dataclasses generate common data-oriented methods. Use field annotations, safe factories for mutable defaults, and explicit validation where needed.`,
  handsOn: `Represent a test case as a dataclass.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice/oop-lab
touch dataclass_lab.py
~~~

### Step 2: Define and use the dataclass

~~~python
from dataclasses import dataclass, field

@dataclass
class TestCase:
    name: str
    expected_status: int
    tags: list[str] = field(default_factory=list)

first = TestCase("login", 200)
second = TestCase("search", 200)

first.tags.append("smoke")
print(first)
print(second)
print(first == TestCase("login", 200, ["smoke"]))
~~~

### Step 3: Check independent defaults

Confirm that adding a tag to first does not change second.

### Deliverable

Explain which methods the decorator provides and why default_factory is used for tags.`,
  challenge: `Create a dataclass named TestResult.

1. Include a test name, outcome, and duration
2. Give it a list of tags using default_factory
3. Create two instances and confirm their tag lists are independent
4. Compare two results with equal fields
5. Make a separate frozen dataclass for an endpoint

Then explain why type annotations do not by themselves validate runtime input.`,
  proTips: [
    "Use dataclasses for records whose main purpose is storing data.",
    "Use field(default_factory=...) for mutable defaults.",
    "Remember that annotations do not automatically enforce runtime types.",
    "Use frozen=True when ordinary field reassignment should be prevented.",
  ],
  commonMistakes: [
    {
      mistake: "Using a mutable list directly as a dataclass default",
      fix: "Use field(default_factory=list) to create a fresh list per instance.",
    },
    {
      mistake: "Assuming annotations validate constructor inputs",
      fix: "Add explicit validation if runtime checks are required.",
    },
    {
      mistake: "Putting a required field after a defaulted field",
      fix: "Place fields without defaults before fields with defaults.",
    },
    {
      mistake: "Expecting frozen=True to deeply freeze nested values",
      fix: "It prevents ordinary attribute reassignment but does not freeze contained mutable objects.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Generate common methods",
      code: `from dataclasses import dataclass

@dataclass
class TestCase:
    name: str
    expected_status: int

first = TestCase("login", 200)
second = TestCase("login", 200)
print(first)
print(first == second)`,
    },
    {
      language: "python",
      title: "Give each instance its own list",
      code: `from dataclasses import dataclass, field

@dataclass
class TestRun:
    results: list[str] = field(default_factory=list)

first = TestRun()
second = TestRun()
first.results.append("PASS")
print(first.results)
print(second.results)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — dataclasses",
      url: "https://docs.python.org/3/library/dataclasses.html",
    },
    {
      title: "Python Tutorial — Data Classes",
      url: "https://docs.python.org/3/tutorial/classes.html#dataclasses",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "oop", "dataclasses", "classes"],
};

export default topic;