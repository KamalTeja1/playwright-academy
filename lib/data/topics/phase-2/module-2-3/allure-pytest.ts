import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "allure-pytest",
  title: "Allure Reports with allure-pytest",
  summary:
    "Add Allure metadata to pytest tests and generate results for an Allure report.",
  whyItMatters:
    "Allure results can organise test runs with titles, steps, and details that help teams review failures.",
  notes: `allure-pytest connects pytest to the Allure reporting framework.

### Install the adapter

~~~bash
python -m pip install allure-pytest
~~~

The adapter writes result files. To generate and open an interactive report, install the separate Allure command-line tool as well.

### Add a title and step

~~~python
import allure

@allure.title("Add two numbers")
def test_addition():
    with allure.step("Calculate the total"):
        total = 2 + 3

    with allure.step("Check the expected result"):
        assert total == 5
~~~

The decorators and context managers add readable information to the report.

### Generate result files

~~~bash
python -m pytest --alluredir=allure-results
~~~

The directory contains result data for the run. It is not itself the interactive report.

With the Allure command-line tool installed, generate and open a report:

~~~bash
allure serve allure-results
~~~

### Keep report output separate

Generated result directories can contain machine-produced files. Keep them out of source control unless the project intentionally stores them.

### The takeaway

Use allure-pytest to add report metadata and create Allure result files. The Allure command-line tool is a separate installation used to generate or serve the report.`,
  handsOn: `Add a title and steps to a pytest test.

### Step 1: Install the adapter

~~~bash
python -m pip install allure-pytest
~~~

### Step 2: Create tests/test_allure_example.py

~~~python
import allure

@allure.title("Check a simple total")
def test_total():
    with allure.step("Calculate the total"):
        total = 20 + 22

    with allure.step("Compare with the expected value"):
        assert total == 42
~~~

### Step 3: Run pytest and write Allure results

~~~bash
python -m pytest --alluredir=allure-results
~~~

### Step 4: View an interactive report

If the separate Allure command-line tool is installed, run:

~~~bash
allure serve allure-results
~~~

### Deliverable

Keep the test. Explain the difference between the result files and the interactive report.`,
  challenge: `Create an Allure-instrumented pytest test.

1. Install allure-pytest
2. Add a descriptive Allure title
3. Divide the test into two named steps
4. Include an assert statement in the test
5. Run pytest with an Allure results directory
6. If the Allure command-line tool is available, serve the report

Then explain why installing the Python adapter alone may not provide the Allure command-line tool.`,
  proTips: [
    "Use Allure titles and steps to make reports easier to navigate.",
    "Generate result files with the --alluredir option.",
    "Install the Allure command-line tool separately to serve an interactive report.",
    "Keep generated output separate from test source files.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming allure-pytest includes the Allure command-line tool",
      fix: "Install the Python adapter and command-line tool separately.",
    },
    {
      mistake: "Treating the results directory as the finished interactive report",
      fix: "Use the Allure command-line tool to generate or serve the report.",
    },
    {
      mistake: "Running a test with no assertions",
      fix: "Include checks that verify the behaviour under test.",
    },
    {
      mistake: "Committing generated report output unintentionally",
      fix: "Keep result directories out of version control unless the project requires them.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Add Allure steps to a test",
      code: `import allure

@allure.title("Add two numbers")
def test_addition():
    with allure.step("Calculate the total"):
        total = 2 + 3
    with allure.step("Check the result"):
        assert total == 5`,
    },
    {
      language: "bash",
      title: "Write and serve Allure results",
      code: `python -m pytest --alluredir=allure-results
allure serve allure-results`,
    },
  ],
  furtherReading: [
    {
      title: "Allure pytest Documentation",
      url: "https://allurereport.org/docs/pytest/",
    },
    {
      title: "allure-pytest on PyPI",
      url: "https://pypi.org/project/allure-pytest/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "plugins", "allure", "reports"],
};

export default topic;
