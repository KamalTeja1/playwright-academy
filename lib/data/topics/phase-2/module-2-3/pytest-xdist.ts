import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-xdist",
  title: "Parallel Tests with pytest-xdist",
  summary:
    "Use pytest-xdist to distribute tests across worker processes.",
  whyItMatters:
    "Parallel workers can reduce test time for a large suite, provided the tests do not depend on shared state or execution order.",
  notes: `pytest-xdist is a plugin for running tests across multiple worker processes.

### Install the plugin

~~~bash
python -m pip install pytest-xdist
~~~

### Choose a worker count

~~~bash
python -m pytest -n 2
~~~

This asks pytest-xdist to use two workers. To let the plugin choose a worker count based on the machine:

~~~bash
python -m pytest -n auto
~~~

### Keep tests independent

~~~python
def test_addition():
    assert 2 + 3 == 5

def test_uppercase():
    assert "pytest".upper() == "PYTEST"
~~~

Independent tests are easier to run in parallel. Tests that rely on a shared file, database record, or execution order can interfere with one another.

### Understand worker processes

Workers are separate processes. A session-scoped fixture can run once per worker, not necessarily once for the entire distributed test run. Do not rely on process memory as shared state between workers.

Use unique temporary resources and isolate external data when tests run in parallel.

### The takeaway

Use xdist to distribute independent tests across workers. Start with a small worker count and fix shared-state or ordering assumptions before increasing parallelism.`,
  handsOn: `Run a small independent suite in parallel.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-xdist
~~~

### Step 2: Create tests/test_parallel.py

~~~python
def test_addition():
    assert 10 + 5 == 15

def test_string_length():
    assert len("pytest") == 6

def test_list_membership():
    assert "python" in ["python", "pytest"]
~~~

### Step 3: Run with two workers

~~~bash
python -m pytest -n 2
~~~

The result should show three passing tests. The order of output can differ because workers run separately.

### Deliverable

Keep the tests. Explain why shared mutable state can cause trouble when tests run in parallel.`,
  challenge: `Try parallel execution with an independent test suite.

1. Write at least four tests with assert statements
2. Install pytest-xdist
3. Run the tests with two workers
4. Run them again with a different worker count
5. Identify any test that assumes shared state or a particular order

Then explain why a session-scoped fixture may be created once per worker rather than once for the whole run.`,
  proTips: [
    "Use -n 2 to begin with a small worker count.",
    "Keep tests independent of execution order.",
    "Use unique temporary paths and isolated external records.",
    "Remember that workers are separate processes.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming worker processes share Python memory",
      fix: "Use explicit external coordination only when shared state is required.",
    },
    {
      mistake: "Running order-dependent tests in parallel",
      fix: "Make each test independent of other tests and their execution order.",
    },
    {
      mistake: "Assuming a session fixture runs only once across all workers",
      fix: "A session-scoped fixture may be created once in each worker process.",
    },
    {
      mistake: "Increasing workers before checking for shared resources",
      fix: "Start with a small worker count and isolate files or records first.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Independent tests for parallel execution",
      code: `def test_addition():
    assert 10 + 5 == 15

def test_string_length():
    assert len("pytest") == 6`,
    },
    {
      language: "bash",
      title: "Run tests with two workers",
      code: `python -m pytest -n 2`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-xdist Documentation",
      url: "https://pytest-xdist.readthedocs.io/en/stable/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "plugins", "parallel-testing"],
};

export default topic;
