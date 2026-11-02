import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "fixture-params",
  title: "Parametrizing Fixtures",
  summary:
    "Run a test with several fixture-provided values using the params option.",
  whyItMatters:
    "Parameterized fixtures let the same test check several configurations while keeping setup and expected behaviour together.",
  notes: `A fixture can provide different values on separate test runs. Pass those values with the params option.

### Give a fixture several values

~~~python
import pytest

@pytest.fixture(params=["chromium", "firefox"])
def browser_name(request):
    return request.param

def test_browser_name_is_supported(browser_name):
    assert browser_name in {"chromium", "firefox"}
~~~

pytest runs the test once for each parameter. The request fixture exposes the current value as request.param.

### Add readable IDs

~~~python
import pytest

@pytest.fixture(
    params=["chromium", "firefox"],
    ids=["chromium", "firefox"],
)
def browser_name(request):
    return request.param

def test_browser_name_is_text(browser_name):
    assert isinstance(browser_name, str)
~~~

IDs appear in test names and make reports easier to read.

### Parameterize related values

A fixture can also provide tuples or other objects:

~~~python
import pytest

@pytest.fixture(
    params=[(2, 3, 5), (4, 6, 10)],
    ids=["small-sum", "larger-sum"],
)
def addition_case(request):
    return request.param

def test_addition_case(addition_case):
    left, right, expected = addition_case
    assert left + right == expected
~~~

Each parameter must be valid input for every test that requests the fixture.

### Keep the combinations useful

Fixture parameters multiply the number of test runs. Use a small set of values that checks meaningful behaviour rather than every possible combination.

### The takeaway

Use params on a fixture when several tests should share the same set of cases. Use request.param to access the current case, and add IDs to make reports clear.`,
  handsOn: `Run a test with two fixture values.

### Step 1: Create tests/test_fixture_params.py

~~~python
import pytest

@pytest.fixture(
    params=["chromium", "firefox"],
    ids=["chromium", "firefox"],
)
def browser_name(request):
    return request.param

def test_browser_name_is_supported(browser_name):
    assert browser_name in {"chromium", "firefox"}
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

pytest runs the test once for each browser value. The IDs appear in the test names.

### Deliverable

Keep the test. Explain how many test cases ran and where the current parameter comes from.`,
  challenge: `Create a fixture that provides three pairs of numbers and their expected sums.

1. Pass the cases through the fixture params option
2. Give each case a readable ID
3. Use request.param to return the current case
4. Write one test that checks every case
5. Run pytest with verbose output

Then explain why an excessively large parameter list can make a suite slow.`,
  proTips: [
    "Use fixture params when several tests should share the same cases.",
    "Read the current case from request.param.",
    "Add IDs so each parameterized test is easy to identify.",
    "Choose cases that cover meaningful behaviour.",
  ],
  commonMistakes: [
    {
      mistake: "Reading a fixture parameter from the wrong place",
      fix: "Use request.param inside the parameterized fixture.",
    },
    {
      mistake: "Providing values that do not match what the test expects",
      fix: "Keep fixture parameters in a consistent, documented shape.",
    },
    {
      mistake: "Creating a very large parameter list without a clear need",
      fix: "Use a focused set of cases that checks important behaviour.",
    },
    {
      mistake: "Leaving parameter IDs unclear in a large test report",
      fix: "Provide readable IDs for cases that would otherwise be hard to identify.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Run a test for each fixture value",
      code: `import pytest

@pytest.fixture(params=["chromium", "firefox"])
def browser_name(request):
    return request.param

def test_browser_name_is_text(browser_name):
    assert isinstance(browser_name, str)`,
    },
    {
      language: "python",
      title: "Parameterize complete test cases",
      code: `import pytest

@pytest.fixture(params=[(2, 3, 5), (4, 6, 10)])
def addition_case(request):
    return request.param

def test_addition_case(addition_case):
    left, right, expected = addition_case
    assert left + right == expected`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Fixture Parametrization",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#parametrizing-fixtures",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "parametrization"],
};

export default topic;
