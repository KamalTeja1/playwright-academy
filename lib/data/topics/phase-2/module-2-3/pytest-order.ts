import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-order",
  title: "Ordering Tests with pytest-order",
  summary:
    "Use pytest-order markers to control test order when a project has a justified ordering requirement.",
  whyItMatters:
    "Most tests should be independent, but some workflows need a defined sequence. pytest-order makes that sequence explicit while highlighting the coupling.",
  notes: `pytest-order is a plugin that lets you assign an order to tests.

### Install the plugin

~~~bash
python -m pip install pytest-order
~~~

### Assign order numbers

~~~python
import pytest

@pytest.mark.order(1)
def test_create_sample():
    assert {"created": True}["created"] is True

@pytest.mark.order(2)
def test_check_sample():
    sample = {"created": True}
    assert sample["created"] is True
~~~

The marker tells the plugin how to order the marked tests. Keep each test's setup clear; ordering alone does not share state between tests.

### Run and inspect the order

~~~bash
python -m pytest -v
~~~

pytest-order supports several ways to describe order. Use the documented marker syntax for the plugin version installed in your environment.

### Prefer independent tests

A test suite is easier to debug and run in parallel when tests do not depend on execution order. If one test requires data created by another, consider a fixture that creates the data for each test instead.

Use explicit ordering only when the sequence itself is part of the behaviour being tested or there is another strong reason.

### The takeaway

pytest-order can control execution order, but it does not replace fixtures or test isolation. Prefer independent tests and use ordering sparingly.`,
  handsOn: `Mark two tests with an explicit order.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-order
~~~

### Step 2: Create tests/test_order.py

~~~python
import pytest

@pytest.mark.order(1)
def test_first_independent_check():
    assert 2 + 3 == 5

@pytest.mark.order(2)
def test_second_independent_check():
    assert "pytest".upper() == "PYTEST"
~~~

### Step 3: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

### Deliverable

Keep the tests. Explain why assigning an order does not make one test's local variables available to another test.`,
  challenge: `Create two independent tests and assign them order markers.

1. Install pytest-order
2. Use distinct marker order values
3. Run pytest with verbose output
4. Confirm the tests still set up their own data
5. Explain how a fixture could remove a dependency if the second test needed data similar to the first

Do not use test ordering just to hide a shared-state problem.`,
  proTips: [
    "Use ordering only when the sequence is genuinely required.",
    "Keep tests independent where possible.",
    "Use fixtures to prepare data each test needs.",
    "Check the plugin documentation for supported ordering syntax.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming order markers share variables between tests",
      fix: "Use fixtures or explicit storage when a test needs data.",
    },
    {
      mistake: "Using ordering to hide test coupling",
      fix: "Refactor setup so each test can run independently when possible.",
    },
    {
      mistake: "Relying on an implicit order without marking or documenting it",
      fix: "Use explicit ordering only when there is a clear requirement.",
    },
    {
      mistake: "Using pytest-order without installing it",
      fix: "Install the plugin in the active pytest environment.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Mark tests with order values",
      code: `import pytest

@pytest.mark.order(1)
def test_first_check():
    assert 2 + 3 == 5

@pytest.mark.order(2)
def test_second_check():
    assert "pytest".upper() == "PYTEST"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-order Documentation",
      url: "https://pytest-order.readthedocs.io/en/stable/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "test-order"],
};

export default topic;
