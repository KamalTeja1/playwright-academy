import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-reports",
  title: "Test Reports",
  summary:
    "Read pytest's terminal summary and save test results in a machine-readable or HTML report.",
  whyItMatters:
    "Reports make test outcomes easier to review, share, and use in continuous integration.",
  notes: `pytest prints a summary in the terminal by default. You can also save test results to a report file.

### Read the terminal summary

~~~bash
python -m pytest -v
~~~

The output lists tests and shows a final count of passed, failed, skipped, and other outcomes.

### Create a JUnit XML report

pytest supports JUnit XML reports without an extra plugin. Create the output folder first:

~~~bash
mkdir -p reports
python -m pytest --junitxml=reports/results.xml
~~~

The XML report is useful for continuous integration systems that can display test results.

### Create an HTML report

The pytest-html plugin adds HTML report support. Install it in the active environment:

~~~bash
python -m pip install pytest-html
~~~

Then run:

~~~bash
mkdir -p reports
python -m pytest --html=reports/report.html --self-contained-html
~~~

The report includes test outcomes and details that help you investigate failures.

### Keep reports useful

Choose a report format that fits the person or system that will read it. Do not treat a generated report as proof that the tests are correct; review failures and ensure the expected tests were collected.

### The takeaway

Use the terminal summary for quick feedback, JUnit XML for compatible tools, and an HTML plugin when a browsable report is helpful.`,
  handsOn: `Generate a JUnit XML report.

### Step 1: Create tests/test_report.py

~~~python
def test_addition():
    assert 2 + 3 == 5

def test_string_is_uppercase():
    assert "pytest".upper() == "PYTEST"
~~~

### Step 2: Make a reports folder and run pytest

~~~bash
mkdir -p reports
python -m pytest -v --junitxml=reports/results.xml
~~~

### Step 3: Inspect the report

Open reports/results.xml as text. Find the test count and test case entries.

### Optional: Create an HTML report

Install pytest-html in the active environment, then run:

~~~bash
python -m pip install pytest-html
python -m pytest --html=reports/report.html --self-contained-html
~~~

### Deliverable

Keep the tests and generated report. Explain who might consume a JUnit XML report and when an HTML report could be useful.`,
  challenge: `Create a small test file and generate two report formats.

1. Write at least two passing tests with assert statements
2. Run pytest with verbose terminal output
3. Save a JUnit XML report in a reports directory
4. If pytest-html is installed, also create a self-contained HTML report
5. Inspect the terminal summary and one generated report

Then explain why a report does not replace checking which tests were collected and whether failures were addressed.`,
  proTips: [
    "Use the terminal summary for a quick local check.",
    "Create the report directory before writing a report file.",
    "Use JUnit XML when a tool expects that format.",
    "Install optional report plugins in the project environment.",
  ],
  commonMistakes: [
    {
      mistake: "Writing a report into a directory that does not exist",
      fix: "Create the output directory before running pytest.",
    },
    {
      mistake: "Assuming pytest-html is part of pytest",
      fix: "Install the optional pytest-html plugin in the active environment.",
    },
    {
      mistake: "Ignoring failures because a report file was created",
      fix: "Read the outcome summary and investigate failed tests.",
    },
    {
      mistake: "Assuming a report proves all intended tests ran",
      fix: "Check collection and test counts as well as the report contents.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A small reportable test suite",
      code: `def test_addition():
    assert 2 + 3 == 5

def test_uppercase():
    assert "pytest".upper() == "PYTEST"`,
    },
    {
      language: "bash",
      title: "Write a JUnit XML report",
      code: `mkdir -p reports
python -m pytest --junitxml=reports/results.xml`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Creating JUnit XML Reports",
      url: "https://docs.pytest.org/en/stable/how-to/output.html#creating-junitxml-format-files",
    },
    {
      title: "pytest-html Documentation",
      url: "https://pytest-html.readthedocs.io/en/latest/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "reports", "testing"],
};

export default topic;
