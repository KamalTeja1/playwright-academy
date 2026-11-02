import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "selective-runs",
  title: "Selecting Which Tests to Run",
  summary:
    "Choose tests by path, node ID, keyword, or marker expression.",
  whyItMatters:
    "Selective runs shorten feedback while developing and help you focus on a feature or test category.",
  notes: `pytest can run a selected part of a suite instead of collecting and running every test.

### Select a directory or file

~~~bash
python -m pytest tests/accounts
python -m pytest tests/test_login.py
~~~

A path tells pytest which part of the project to collect.

### Select one test with a node ID

~~~bash
python -m pytest tests/test_login.py::test_valid_user_can_sign_in
~~~

A node ID uses the file path followed by :: and the test name. For a class method, include the class name too.

### Select by keyword

~~~bash
python -m pytest -k "login"
~~~

The -k option matches test names and other collected node names. Use quotes around expressions containing spaces or operators.

### Select by marker

~~~bash
python -m pytest -m slow
python -m pytest -m "not slow"
~~~

Marker selection is useful when your project has registered categories such as slow or integration.

### Check what would run

~~~bash
python -m pytest --collect-only tests/accounts
~~~

Collection mode shows the selected tests without executing them.

### Use selection carefully

A targeted run is useful during development, but it does not replace a full-suite run before sharing changes. A test selection that matches no tests can also finish without checking the behaviour you intended, so inspect the output.

### The takeaway

Use paths, node IDs, -k, and -m to focus a run. Confirm that pytest selected the tests you expected, then run the full suite when appropriate.`,
  handsOn: `Run a selected test from a small suite.

### Step 1: Create tests/test_math.py

~~~python
def test_addition():
    assert 2 + 3 == 5

def test_multiplication():
    assert 4 * 3 == 12
~~~

### Step 2: Run only the file

~~~bash
python -m pytest tests/test_math.py
~~~

### Step 3: Run one test by node ID

~~~bash
python -m pytest tests/test_math.py::test_addition
~~~

### Step 4: Select by keyword

~~~bash
python -m pytest -k "multiplication"
~~~

### Deliverable

Keep the tests. Write down which command you would use to run one test and which command you would use to check the whole suite.`,
  challenge: `Create tests for two small features and practise selective runs.

1. Run one file by path
2. Run one test by node ID
3. Use -k to select a test by part of its name
4. Use --collect-only with a path to inspect selection
5. Run the full suite and compare its test count

Then explain why a successful targeted run does not show that unrelated tests still pass.`,
  proTips: [
    "Use a node ID for a precise single-test run.",
    "Use -k for test names matching a keyword expression.",
    "Use -m to select tests by registered markers.",
    "Check collection output when a selection behaves unexpectedly.",
  ],
  commonMistakes: [
    {
      mistake: "Using a node ID without the test file path",
      fix: "Use a path and test name such as tests/test_login.py::test_valid_login.",
    },
    {
      mistake: "Forgetting to quote a compound -k or -m expression",
      fix: "Quote the full expression so the shell passes it to pytest.",
    },
    {
      mistake: "Assuming a targeted run checks the entire suite",
      fix: "Run all tests before sharing changes.",
    },
    {
      mistake: "Ignoring that a selection matched no tests",
      fix: "Inspect the collection summary and confirm the intended tests were selected.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Tests with selectable names",
      code: `def test_addition():
    assert 2 + 3 == 5

def test_multiplication():
    assert 4 * 3 == 12`,
    },
    {
      language: "bash",
      title: "Run one test and select by keyword",
      code: `python -m pytest tests/test_math.py::test_addition
python -m pytest -k "multiplication"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — How to Invoke pytest",
      url: "https://docs.pytest.org/en/stable/how-to/usage.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "selective-runs", "organization"],
};

export default topic;
