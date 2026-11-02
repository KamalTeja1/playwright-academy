import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "installing-pytest",
  title: "Installing pytest",
  summary: "Install pytest in a project environment and run a small test.",
  whyItMatters:
    "A separate environment keeps project tools organised and helps teammates reproduce the same test setup.",
  notes: `pytest is a Python testing framework. Install it in the virtual environment for your project.

### Create and activate a virtual environment

~~~bash
python3 -m venv .venv
source .venv/bin/activate
~~~

On Windows PowerShell, activate it with:

~~~bash
.venv\\Scripts\\Activate.ps1
~~~

### Install pytest

~~~bash
python -m pip install pytest
python -m pytest --version
~~~

Using python -m pip installs pytest for the Python interpreter you are using.

### Write a first test

Create a file named test_math.py:

~~~python
def add(left, right):
    return left + right

def test_add_two_numbers():
    assert add(2, 3) == 5
~~~

Run it from the project directory:

~~~bash
python -m pytest
~~~

pytest reports the test result in the terminal. The test passes when the assertion is true.

### Keep the setup reproducible

For a small project, record pytest in a requirements file:

~~~text
pytest
~~~

Save it as requirements.txt. Another environment can install the listed packages with:

~~~bash
python -m pip install -r requirements.txt
~~~

### The takeaway

Install pytest in the active project environment and run it with python -m pytest. This keeps the test runner connected to the Python interpreter your project uses.`,
  handsOn: `Install pytest and run one passing test.

### Step 1: Create and activate an environment

~~~bash
mkdir pytest-practice
cd pytest-practice
python3 -m venv .venv
source .venv/bin/activate
python -m pip install pytest
~~~

### Step 2: Create test_math.py

~~~python
def multiply(left, right):
    return left * right

def test_multiply_two_numbers():
    assert multiply(4, 3) == 12
~~~

### Step 3: Run the test

~~~bash
python -m pytest
~~~

### Deliverable

Keep the test file. Explain why the environment should be active when you install and run pytest.`,
  challenge: `Create a small test file with a function that converts minutes to seconds.

1. Write a conversion function
2. Write a test function whose name starts with test_
3. Use assert to check a known result
4. Install pytest in a virtual environment
5. Run the test with python -m pytest

Then explain why recording pytest as a project dependency helps another person run the tests.`,
  proTips: [
    "Create a virtual environment for each project.",
    "Use python -m pip so installation uses the active interpreter.",
    "Run pytest with python -m pytest.",
    "Record project dependencies so the setup can be reproduced.",
  ],
  commonMistakes: [
    {
      mistake: "Installing pytest into a different Python environment",
      fix: "Activate the project environment and use python -m pip.",
    },
    {
      mistake: "Assuming pytest is included with Python",
      fix: "Install pytest in the environment before running tests.",
    },
    {
      mistake: "Running pytest from an unrelated directory",
      fix: "Run it from the project root or pass the test path explicitly.",
    },
    {
      mistake: "Naming a test file without a discoverable pattern",
      fix: "Start its name with test_ or end it with _test.py.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A first pytest test",
      code: `def add(left, right):
    return left + right

def test_add_two_numbers():
    assert add(2, 3) == 5`,
    },
    {
      language: "python",
      title: "Test a conversion",
      code: `def minutes_to_seconds(minutes):
    return minutes * 60

def test_minutes_to_seconds():
    assert minutes_to_seconds(2) == 120`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Installation and Getting Started",
      url: "https://docs.pytest.org/en/stable/getting-started.html",
    },
    {
      title: "Python Docs — venv",
      url: "https://docs.python.org/3/library/venv.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "installation", "testing"],
};

export default topic;
