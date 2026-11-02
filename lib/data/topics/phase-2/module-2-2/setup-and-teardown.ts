import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "setup-and-teardown",
  title: "Fixture Setup and Teardown",
  summary:
    "Use yield fixtures to prepare a resource and clean it up after a test.",
  whyItMatters:
    "Tests often create temporary resources. Reliable cleanup keeps one test from affecting another.",
  notes: `Some tests need setup before they run and cleanup afterward. A fixture can use yield to separate these two parts.

### Set up and clean up

~~~python
import pytest

@pytest.fixture
def temporary_record():
    record = {"name": "sample", "saved": True}
    yield record
    record["saved"] = False

def test_record_is_available(temporary_record):
    assert temporary_record["saved"] is True
~~~

pytest runs the fixture code before yield first. It passes the yielded value to the test. After the test finishes, pytest resumes the fixture and runs the cleanup code.

### Cleanup runs after a test failure

The code after yield runs when the test finishes, including when its assertion fails. This makes yield fixtures useful for releasing resources.

~~~python
import pytest

@pytest.fixture
def resource():
    state = {"open": True}
    yield state
    state["open"] = False

def test_resource_is_open(resource):
    assert resource["open"] is True
~~~

### Register cleanup before risky setup

If setup can fail before reaching yield, cleanup after yield has not been registered yet. Keep setup steps small, and register cleanup as soon as the resource exists.

For multiple independently created resources, consider using pytest's request.addfinalizer or separate fixtures so each successful setup has its own cleanup.

### Use context managers when available

Many Python resources already support with statements, which close or release them automatically. A fixture can provide a resource created and managed by a context manager.

### The takeaway

Use yield when a fixture needs teardown. Put setup before yield and cleanup after it, and make sure cleanup is registered if setup can fail partway through.`,
  handsOn: `Build a fixture that marks a resource as open, then cleans it up.

### Step 1: Create tests/test_resource.py

~~~python
import pytest

@pytest.fixture
def resource_state():
    state = {"open": True}
    yield state
    state["open"] = False

def test_resource_starts_open(resource_state):
    assert resource_state["open"] is True
~~~

### Step 2: Run the test

~~~bash
python -m pytest
~~~

### Step 3: Add a temporary check

For practice, add a print after yield to observe that fixture teardown runs after the test. Remove the print when finished.

### Deliverable

Keep the test. Explain which fixture statements run before the test and which run afterward.`,
  challenge: `Create a yield fixture for a temporary list used as a test log.

1. Create the list before yield
2. Yield it to the test
3. Add a cleanup step that clears the list
4. Write a test that appends an entry and asserts the entry exists
5. Run the test and explain when cleanup executes

Then explain why cleanup is important even when a test fails.`,
  proTips: [
    "Put setup before yield and teardown after it.",
    "Use yield fixtures to release resources after a test.",
    "Prefer context managers when the resource already supports them.",
    "Keep setup and cleanup focused on one resource.",
  ],
  commonMistakes: [
    {
      mistake: "Returning from a fixture that also needs teardown",
      fix: "Use yield to provide the value and continue with cleanup afterward.",
    },
    {
      mistake: "Putting cleanup before yield",
      fix: "Place teardown code after yield so pytest runs it after the test.",
    },
    {
      mistake: "Assuming cleanup runs when setup fails before yield",
      fix: "Register cleanup once the resource exists and keep setup steps safe.",
    },
    {
      mistake: "Skipping cleanup because the test passed",
      fix: "Release resources for passing and failing tests alike.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Run teardown after the test",
      code: `import pytest

@pytest.fixture
def resource():
    state = {"open": True}
    yield state
    state["open"] = False

def test_resource_is_open(resource):
    assert resource["open"] is True`,
    },
    {
      language: "python",
      title: "Use a context manager inside a fixture",
      code: `import pytest

@pytest.fixture
def sample_file(tmp_path):
    path = tmp_path / "sample.txt"
    path.write_text("hello", encoding="utf-8")
    yield path
    path.unlink(missing_ok=True)

def test_file_contains_text(sample_file):
    assert sample_file.read_text(encoding="utf-8") == "hello"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Yield Fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#yield-fixtures-recommended",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "teardown"],
};

export default topic;
