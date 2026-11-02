import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-ids",
  title: "Readable Parameter IDs",
  summary:
    "Give parameterized test cases descriptive IDs so collection output and failures are easier to understand.",
  whyItMatters:
    "Clear case names help you identify which input failed, especially when a test runs across many values or configurations.",
  notes: `pytest includes parameter values in parameterized test IDs. You can provide clearer names with ids.

### Set IDs in a parametrization

~~~python
import pytest

@pytest.mark.parametrize(
    "text, expected",
    [
        ("", 0),
        ("hello", 5),
    ],
    ids=["empty", "five-letters"],
)
def test_text_length(text, expected):
    assert len(text) == expected
~~~

Run with -v to see IDs in the collected test names.

### Use an ID function

An ID function can generate a name from each parameter value.

~~~python
import pytest

def value_id(value):
    return f"number-{value}"

@pytest.mark.parametrize(
    "number",
    [2, 4, 6],
    ids=value_id,
)
def test_number_is_even(number):
    assert number % 2 == 0
~~~

For multiple arguments, provide one ID for each case tuple. A callable receives parameter values and can return a string or None.

### Set IDs on a fixture

~~~python
import pytest

@pytest.fixture(
    params=["chromium", "firefox"],
    ids=["chromium", "firefox"],
)
def browser(request):
    return request.param

def test_browser_name(browser):
    assert isinstance(browser, str)
~~~

### Keep IDs concise

IDs should help distinguish cases, not repeat the entire input. Use names that remain useful in test reports and command-line selections.

### The takeaway

Use explicit IDs when the default parameter representation is unclear. Readable IDs make verbose output and failures easier to scan.`,
  handsOn: `Add readable IDs to a parameterized test.

### Step 1: Create tests/test_ids.py

~~~python
import pytest

@pytest.mark.parametrize(
    "text, expected",
    [
        ("", 0),
        ("hello", 5),
        ("pytest", 6),
    ],
    ids=["empty", "hello", "pytest"],
)
def test_text_length(text, expected):
    assert len(text) == expected
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

Inspect the displayed test names and identify the case IDs.

### Deliverable

Keep the test. Explain how the IDs make it easier to locate a failing case.`,
  challenge: `Create a parameterized test for a function that converts a string to an integer.

1. Include valid cases with clearly different meanings
2. Assign an explicit ID to each case
3. Run pytest with -v
4. Select one case by its node ID
5. Explain why a useful ID can be better than a long raw parameter value

Keep invalid-input cases for a separate exception-testing example unless your test is designed to expect them.`,
  proTips: [
    "Use ids to make parameterized cases easy to recognise.",
    "Keep IDs short and distinct.",
    "Use -v to inspect parameter IDs.",
    "An ID function can create names consistently for many values.",
  ],
  commonMistakes: [
    {
      mistake: "Providing a different number of IDs than test cases",
      fix: "Provide one ID for each parameter set.",
    },
    {
      mistake: "Using IDs that do not distinguish similar cases",
      fix: "Choose concise names that explain how the cases differ.",
    },
    {
      mistake: "Assuming IDs change the values passed to the test",
      fix: "IDs affect case names; the original parameter values still reach the test.",
    },
    {
      mistake: "Using a complex ID function that hides the case meaning",
      fix: "Keep generated names predictable and readable.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Name each parameter case",
      code: `import pytest

@pytest.mark.parametrize(
    "text, expected",
    [("", 0), ("hello", 5)],
    ids=["empty", "hello"],
)
def test_text_length(text, expected):
    assert len(text) == expected`,
    },
    {
      language: "python",
      title: "Generate IDs from values",
      code: `import pytest

def value_id(value):
    return f"number-{value}"

@pytest.mark.parametrize("number", [2, 4], ids=value_id)
def test_number_is_even(number):
    assert number % 2 == 0`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — IDs for Parameterized Tests",
      url: "https://docs.pytest.org/en/stable/example/parametrize.html#different-options-for-test-ids",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "parametrization", "test-ids"],
};

export default topic;
