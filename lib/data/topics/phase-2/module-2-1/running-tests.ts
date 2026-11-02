import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "running-tests",
  title: "Running Tests",
  summary:
    "Run all tests, choose a file or test, and use common pytest command-line options.",
  whyItMatters:
    "Targeted runs make feedback quicker while you work. Running the full suite before sharing changes checks that other tests still pass.",
  notes: `pytest can run a whole project or a specific selection of tests.

### Run all discovered tests

~~~bash
python -m pytest
~~~

Run this from the project root. pytest discovers test files and reports passed and failed tests.

### Run a file

~~~bash
python -m pytest tests/test_math.py
~~~

This is useful while working on one area.

### Run a specific test

Use the file path, then two colons and the test name:

~~~bash
python -m pytest tests/test_math.py::test_add_two_numbers
~~~

You can also select a test class and method:

~~~bash
python -m pytest tests/test_math.py::TestTotals::test_addition
~~~

### Choose a useful output style

~~~bash
python -m pytest -v
python -m pytest -q
~~~

Verbose mode lists individual tests. Quiet mode reduces the output.

### Select tests by name

~~~bash
python -m pytest -k "addition"
~~~

The expression is matched against collected test names. Use quotes so the shell passes the complete expression to pytest.

### Stop after a failure

~~~bash
python -m pytest -x
~~~

This stops after the first failing test. It can help you focus on the first failure, but run the full suite later.

### The takeaway

Start with the smallest relevant test selection for quick feedback. Run the full suite before you consider the work complete.`,
  handsOn: `Try several ways to run the same tests.

### Step 1: Create tests/test_math.py

~~~python
def test_addition():
    assert 2 + 3 == 5

def test_multiplication():
    assert 4 * 3 == 12
~~~

### Step 2: Run the file

~~~bash
python -m pytest tests/test_math.py
~~~

### Step 3: Run one test

~~~bash
python -m pytest tests/test_math.py::test_addition
~~~

### Step 4: Change the output

Run with -v, then run with -q. Notice how the output changes.

### Deliverable

Keep the test file. Write down the command that ran one test and the command that ran the whole project.`,
  challenge: `Create a test file with three clearly named tests.

1. Run the full test suite
2. Run only the file
3. Run only one test by its node ID
4. Run tests whose names match a keyword using -k
5. Run with -x and explain when stopping at the first failure is useful

Keep the assertions valid so the commands complete successfully.`,
  proTips: [
    "Use python -m pytest to run the pytest installed for the active interpreter.",
    "Pass a file path or node ID to narrow a run.",
    "Use -k to select tests by name.",
    "Run the full suite after targeted checks.",
  ],
  commonMistakes: [
    {
      mistake: "Running a test selection from the wrong project directory",
      fix: "Run from the project root or provide the correct path.",
    },
    {
      mistake: "Using a test function name without its file path",
      fix: "Use a node ID such as tests/test_math.py::test_addition.",
    },
    {
      mistake: "Forgetting shell quotes around a -k expression",
      fix: "Quote the full selection expression.",
    },
    {
      mistake: "Treating a targeted run as a replacement for the full suite",
      fix: "Use targeted runs during development and run the complete suite before sharing.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Tests with useful names",
      code: `def test_total_includes_tax():
    assert 100 + 10 == 110

def test_discount_reduces_price():
    assert 100 - 15 == 85`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — How to Invoke pytest",
      url: "https://docs.pytest.org/en/stable/how-to/usage.html",
    },
    {
      title: "pytest Documentation — Command-Line Flags",
      url: "https://docs.pytest.org/en/stable/reference/reference.html#command-line-flags",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "command-line", "testing"],
};

export default topic;
