import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "using-markers",
  title: "Using Built-in Markers",
  summary:
    "Use pytest markers such as skip, xfail, and parametrize to describe and control tests.",
  whyItMatters:
    "Markers add useful meaning to tests and let pytest handle known conditions consistently.",
  notes: `A marker adds metadata or behaviour to a test. pytest includes markers for parametrization, skips, and expected failures.

### Parametrize a test

~~~python
import pytest

@pytest.mark.parametrize("number", [2, 4, 6])
def test_number_is_even(number):
    assert number % 2 == 0
~~~

pytest runs the test once per value.

### Skip a test

~~~python
import pytest

@pytest.mark.skip(reason="Feature is not available in this environment")
def test_optional_feature():
    assert 2 + 3 == 5
~~~

Use skip when the test cannot run meaningfully.

### Mark an expected failure

~~~python
import pytest

@pytest.mark.xfail(reason="Known issue")
def test_known_issue():
    assert 2 + 2 == 5
~~~

An xfail keeps a known failure visible in the report. It is not a replacement for investigating the issue.

### Apply a marker to a class

A marker placed on a test class can apply to its test methods:

~~~python
import pytest

@pytest.mark.skip(reason="Example group is unavailable")
class TestOptionalArea:
    def test_one(self):
        assert True
~~~

### Understand marker scope

Markers can affect a single function or a group of tests. Use them deliberately and provide a reason when the marker changes whether a test runs.

Custom markers need registration in pytest configuration. That topic is covered separately.

### The takeaway

Use built-in markers to parameterize, skip, or mark expected failures. Make their purpose clear so test reports explain what happened.`,
  handsOn: `Use parametrization and a skip marker.

### Step 1: Create tests/test_built_in_markers.py

~~~python
import pytest

@pytest.mark.parametrize("number", [2, 4, 6])
def test_number_is_even(number):
    assert number % 2 == 0

@pytest.mark.skip(reason="Practice example of a skipped test")
def test_optional_example():
    assert 1 + 1 == 2
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

Notice the separate parameter cases and the skipped test.

### Deliverable

Keep the test file. Explain the difference between parametrizing a test and skipping it.`,
  challenge: `Create a test file that uses three built-in markers.

1. Use parametrize to run one assertion with several values
2. Use skipif for a condition that is known before the test runs
3. Use xfail for one deliberately documented expected failure
4. Run pytest in verbose mode
5. Explain each outcome in the report

Keep each marker on the smallest test scope that makes sense.`,
  proTips: [
    "Use markers to make test intent visible.",
    "Add a reason when skipping or marking an expected failure.",
    "Use parametrize for repeated checks with different inputs.",
    "Apply class-level markers only when they genuinely fit every method.",
  ],
  commonMistakes: [
    {
      mistake: "Using a skip marker to hide a failure",
      fix: "Fix the problem or document a genuine reason the test cannot run.",
    },
    {
      mistake: "Marking a test xfail without explaining why",
      fix: "Add a short reason that identifies the known issue or limitation.",
    },
    {
      mistake: "Applying a marker to more tests than intended",
      fix: "Place the marker on the smallest relevant scope.",
    },
    {
      mistake: "Assuming parametrize is only a label",
      fix: "It creates a separate test case for each supplied parameter set.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Parameterize one test",
      code: `import pytest

@pytest.mark.parametrize("number", [2, 4, 6])
def test_number_is_even(number):
    assert number % 2 == 0`,
    },
    {
      language: "python",
      title: "Document an expected failure",
      code: `import pytest

@pytest.mark.xfail(reason="Known issue")
def test_known_issue():
    assert 2 + 2 == 5`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Marking Test Functions",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
    {
      title: "pytest Documentation — Skip and Xfail",
      url: "https://docs.pytest.org/en/stable/how-to/skipping.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "markers", "organization"],
};

export default topic;
