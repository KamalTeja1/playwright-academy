import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-cov",
  title: "Coverage with pytest-cov",
  summary:
    "Measure which parts of a Python module are executed during pytest runs.",
  whyItMatters:
    "Coverage can reveal code that tests never exercise, helping you identify gaps in a test suite.",
  notes: `pytest-cov connects pytest with coverage.py to report which code was executed during a test run.

### Install the plugin

~~~bash
python -m pip install pytest-cov
~~~

### Create a small module

Save this as calculator.py:

~~~python
def add(left, right):
    return left + right

def subtract(left, right):
    return left - right
~~~

Create tests/test_calculator.py:

~~~python
from calculator import add

def test_add():
    assert add(2, 3) == 5
~~~

### Run with coverage

~~~bash
python -m pytest --cov=calculator --cov-report=term-missing
~~~

The report shows which lines in calculator.py ran and which executable lines were missed.

### Create an HTML report

~~~bash
python -m pytest --cov=calculator --cov-report=html
~~~

This creates an htmlcov directory. Open htmlcov/index.html to inspect the report in a browser.

### Coverage is a guide

A high coverage percentage does not prove that tests check correct behaviour. A line can run without its result being asserted. Use the report to find untested code, then write meaningful assertions.

### The takeaway

Use coverage to identify code your tests did not execute. Treat it as a guide to missing checks, not as a measure of test quality by itself.`,
  handsOn: `Measure coverage for a small module.

### Step 1: Install pytest-cov

~~~bash
python -m pip install pytest-cov
~~~

### Step 2: Create calculator.py

~~~python
def add(left, right):
    return left + right

def subtract(left, right):
    return left - right
~~~

### Step 3: Create tests/test_calculator.py

~~~python
from calculator import add

def test_add():
    assert add(2, 3) == 5
~~~

### Step 4: Run coverage

~~~bash
python -m pytest --cov=calculator --cov-report=term-missing
~~~

Notice that subtract is not covered.

### Step 5: Add and run a test for subtract

~~~python
from calculator import add, subtract

def test_add():
    assert add(2, 3) == 5

def test_subtract():
    assert subtract(5, 2) == 3
~~~

Run the coverage command again and compare the report.

### Deliverable

Keep the module and tests. Explain why coverage alone does not prove the test checks the right result.`,
  challenge: `Use pytest-cov to identify an untested branch or function.

1. Create a small Python module with at least two functions
2. Write a test that covers only one function
3. Run pytest-cov with a terminal report that shows missing lines
4. Add a meaningful test for the uncovered behaviour
5. Run coverage again and compare

Then explain why line coverage is useful but does not measure whether assertions are strong.`,
  proTips: [
    "Use --cov with the module or package you want to measure.",
    "Use --cov-report=term-missing to see unexecuted lines.",
    "Use the HTML report to inspect coverage in a browser.",
    "Write meaningful assertions; executing a line is not enough.",
  ],
  commonMistakes: [
    {
      mistake: "Measuring coverage for the wrong module path",
      fix: "Pass the importable module or package name to --cov.",
    },
    {
      mistake: "Assuming high coverage means all behaviours are checked",
      fix: "Review assertions and add tests for meaningful outcomes and branches.",
    },
    {
      mistake: "Ignoring missing lines in the report",
      fix: "Use missing-line details to find code that needs a useful test.",
    },
    {
      mistake: "Treating a coverage percentage as a required quality score",
      fix: "Use coverage as diagnostic information alongside test design and review.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Module and test for a coverage run",
      code: `def add(left, right):
    return left + right

def subtract(left, right):
    return left - right

def test_add():
    assert add(2, 3) == 5`,
    },
    {
      language: "bash",
      title: "Show missed lines",
      code: `python -m pytest --cov=calculator --cov-report=term-missing`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-cov Documentation",
      url: "https://pytest-cov.readthedocs.io/en/latest/",
    },
    {
      title: "coverage.py Documentation",
      url: "https://coverage.readthedocs.io/en/latest/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "plugins", "coverage"],
};

export default topic;
