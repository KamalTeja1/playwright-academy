import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-html",
  title: "HTML Reports with pytest-html",
  summary:
    "Install pytest-html and generate a self-contained HTML report from a test run.",
  whyItMatters:
    "A browsable report makes test outcomes easier to review and share with people who do not need terminal output.",
  notes: `pytest-html is a plugin that creates an HTML report from a pytest run.

### Install the plugin

~~~bash
python -m pip install pytest-html
~~~

Install it in the same environment where you run pytest.

### Create an HTML report

~~~bash
mkdir -p reports
python -m pytest --html=reports/report.html --self-contained-html
~~~

The self-contained option stores report assets in the HTML file, which makes it easier to share as one file.

### Write a test to report

~~~python
def test_total_is_calculated():
    assert 20 + 22 == 42

def test_name_is_normalized():
    assert "  Asha  ".strip() == "Asha"
~~~

The report includes the test outcomes and details about failures. Open reports/report.html in a browser to inspect it.

### Understand what the report means

A report records a test run. It does not prove that the correct tests were collected or that the tests cover every requirement. Read the summary and investigate failures.

### The takeaway

Use pytest-html when a browsable report is useful. Generate it from the same test run you want to review, then inspect the outcomes rather than treating the file's existence as success.`,
  handsOn: `Create a self-contained HTML report.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-html
~~~

### Step 2: Create tests/test_report.py

~~~python
def test_sum():
    assert sum([2, 3]) == 5

def test_uppercase():
    assert "pytest".upper() == "PYTEST"
~~~

### Step 3: Run pytest and save a report

~~~bash
mkdir -p reports
python -m pytest --html=reports/report.html --self-contained-html
~~~

### Step 4: Open the report

Open reports/report.html in a browser and find the test summary.

### Deliverable

Keep the test file and report. Explain what the self-contained option adds.`,
  challenge: `Generate a self-contained HTML report for a small test suite.

1. Write at least two tests with assert statements
2. Install pytest-html in the active Python environment
3. Create a reports directory
4. Run pytest with the HTML report options
5. Open the report and find the outcome for each test

Then explain why a generated report does not replace checking test collection and failures.`,
  proTips: [
    "Install pytest-html in the environment used to run pytest.",
    "Use a self-contained report when sharing one HTML file is convenient.",
    "Keep generated reports in a dedicated output directory.",
    "Review the test outcomes and failures in the report.",
  ],
  commonMistakes: [
    {
      mistake: "Running pytest in an environment without pytest-html installed",
      fix: "Install the plugin in the active test environment.",
    },
    {
      mistake: "Saving the report into a directory that does not exist",
      fix: "Create the output directory before running pytest.",
    },
    {
      mistake: "Assuming a generated report means every test passed",
      fix: "Read the report summary and investigate any failures.",
    },
    {
      mistake: "Sharing a report without its separate assets",
      fix: "Use the self-contained option when you need one portable HTML file.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A small reportable test suite",
      code: `def test_sum():
    assert sum([2, 3]) == 5

def test_uppercase():
    assert "pytest".upper() == "PYTEST"`,
    },
    {
      language: "bash",
      title: "Generate an HTML report",
      code: `mkdir -p reports
python -m pytest --html=reports/report.html --self-contained-html`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-html Documentation",
      url: "https://pytest-html.readthedocs.io/en/latest/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "html-report"],
};

export default topic;
