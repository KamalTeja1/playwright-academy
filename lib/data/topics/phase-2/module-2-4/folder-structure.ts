import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "folder-structure",
  title: "Organizing Test Folders",
  summary:
    "Arrange application code and tests in a predictable project structure.",
  whyItMatters:
    "A clear layout helps pytest discover tests and makes a growing suite easier to navigate.",
  notes: `A test project should make it easy to find application code, tests, and configuration.

### A simple layout

~~~text
project/
    src/
        calculator.py
    tests/
        test_calculator.py
    pytest.ini
~~~

For a small project, your application module can also sit at the project root:

~~~text
project/
    calculator.py
    tests/
        test_calculator.py
~~~

### Use discoverable test names

pytest recognises files such as test_calculator.py by default. Put test functions in these files and start their names with test_.

~~~python
def add(left, right):
    return left + right

def test_add_returns_sum():
    assert add(2, 3) == 5
~~~

### Keep shared setup in the right place

Place fixtures shared by a test directory in its conftest.py. Keep test-specific helpers close to the tests that use them.

### Run from the project root

~~~bash
python -m pytest
~~~

Running from the root makes paths and configuration easier to manage. If your project uses a src layout, configure the package installation or import path so tests can import the application code consistently.

### Grow the layout as needed

A larger project may divide tests by feature:

~~~text
tests/
    accounts/
        test_login.py
    orders/
        test_checkout.py
    conftest.py
~~~

Choose a structure that helps people find tests. Avoid creating folders that add navigation without grouping related work.

### The takeaway

Keep application code, tests, and configuration easy to locate. Use pytest's naming patterns and run the suite from the project root.`,
  handsOn: `Organize a tiny project and run its tests.

### Step 1: Create a project layout

~~~bash
mkdir -p structure-practice/tests
cd structure-practice
~~~

### Step 2: Create calculator.py

~~~python
def add(left, right):
    return left + right
~~~

### Step 3: Create tests/test_calculator.py

~~~python
from calculator import add

def test_add_returns_sum():
    assert add(2, 3) == 5
~~~

### Step 4: Run from the project root

~~~bash
python -m pytest
~~~

### Deliverable

Keep the files. Explain why the test filename and function name are discoverable by pytest.`,
  challenge: `Create a small project layout for two related features.

1. Put application modules in a clear location
2. Put tests under a tests directory
3. Use discoverable filenames and test function names
4. Add a conftest.py only if a fixture is shared
5. Run pytest from the project root

Then explain how your layout would help a teammate find the test for one feature.`,
  proTips: [
    "Keep tests in a dedicated tests directory.",
    "Use pytest's default filename and function naming patterns.",
    "Group tests by feature when the suite grows.",
    "Run pytest from the project root so configuration is found.",
  ],
  commonMistakes: [
    {
      mistake: "Mixing test files and application code without a clear reason",
      fix: "Use a predictable layout that makes each kind of file easy to find.",
    },
    {
      mistake: "Naming files so pytest does not discover them",
      fix: "Use test_*.py or *_test.py unless the project config says otherwise.",
    },
    {
      mistake: "Creating a conftest.py for values used by only one test",
      fix: "Keep one-off setup local and share fixtures only when useful.",
    },
    {
      mistake: "Running tests from a directory that misses project configuration",
      fix: "Run pytest from the project root or pass the configuration explicitly.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A small project structure",
      code: `project/
    calculator.py
    tests/
        test_calculator.py
    pytest.ini`,
    },
    {
      language: "python",
      title: "A discoverable test",
      code: `from calculator import add

def test_add_returns_sum():
    assert add(2, 3) == 5`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Good Integration Practices",
      url: "https://docs.pytest.org/en/stable/explanation/goodpractices.html",
    },
    {
      title: "pytest Documentation — Test Discovery",
      url: "https://docs.pytest.org/en/stable/explanation/goodpractices.html#test-discovery",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "organization", "project-structure"],
};

export default topic;
