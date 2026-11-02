import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "yielding-fixtures",
  title: "Yielding Fixtures",
  summary:
    "Use yield fixtures to provide a resource and run reliable cleanup afterward.",
  whyItMatters:
    "Temporary resources and shared state need cleanup even when tests fail. Yield fixtures make that lifecycle clear.",
  notes: `A yielding fixture runs setup before yield, provides a value to the test, then continues with teardown after the test finishes.

### Provide a value and clean it up

~~~python
import pytest

@pytest.fixture
def resource_state():
    state = {"open": True}
    yield state
    state["open"] = False

def test_resource_is_open(resource_state):
    assert resource_state["open"] is True
~~~

pytest runs the setup code before yield and passes the yielded value into the test. When the test finishes, pytest resumes the fixture and runs the cleanup code.

### Use try and finally for reliable cleanup

~~~python
import pytest

@pytest.fixture
def resource_state():
    state = {"open": True}
    try:
        yield state
    finally:
        state["open"] = False

def test_resource_is_open(resource_state):
    assert resource_state["open"] is True
~~~

The finally block runs as pytest tears down the fixture, including when the test fails.

### Understand setup failure

Code after yield cannot run if setup fails before reaching yield. If a fixture creates several resources, arrange setup and cleanup so each successfully created resource can be released.

Use a separate fixture for each independently managed resource when that makes the lifecycle clearer.

### Teardown order

When one fixture depends on another, pytest tears them down in reverse setup order. This lets a dependent fixture clean up before the fixture it depends on.

### Use context managers where possible

A file opened with a with statement already has a clear cleanup boundary. A fixture can use that context manager to provide the file contents or another value while the resource is open.

### The takeaway

Use yield to provide a fixture value and run teardown afterward. Keep setup and cleanup close together, and account for setup that might fail before yield.`,
  handsOn: `Use a yielding fixture to manage a resource state.

### Step 1: Create tests/test_yielding.py

~~~python
import pytest

@pytest.fixture
def resource_state():
    state = {"open": True}
    try:
        yield state
    finally:
        state["open"] = False

def test_resource_is_open_during_test(resource_state):
    assert resource_state["open"] is True
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Step 3: Observe teardown

Temporarily add a print inside the finally block. Run pytest and observe that teardown runs after the test. Remove the print afterward.

### Deliverable

Keep the test. Explain what happens before yield, what value reaches the test, and when finally runs.`,
  challenge: `Create a yielding fixture that prepares a temporary directory and cleans up a small marker file.

1. Use tmp_path to create the directory and file
2. Yield the directory to a test
3. Use try and finally to remove the marker file
4. Assert the marker exists during the test
5. Run pytest and explain what happens if the test assertion fails

Then describe why code after yield cannot clean up a resource when setup fails before reaching yield.`,
  proTips: [
    "Put setup before yield and teardown after it.",
    "Use try and finally when cleanup must run after a test failure.",
    "Keep independently managed resources in separate fixtures when that clarifies cleanup.",
    "Use context managers for resources that already support them.",
  ],
  commonMistakes: [
    {
      mistake: "Putting teardown before yield",
      fix: "Place cleanup after yield so pytest runs it after the test.",
    },
    {
      mistake: "Assuming cleanup after yield runs when setup fails before yield",
      fix: "Register cleanup as soon as each resource is created.",
    },
    {
      mistake: "Combining unrelated resource lifecycles in one fixture",
      fix: "Use separate fixtures when each resource needs independent setup and teardown.",
    },
    {
      mistake: "Using return when the fixture needs teardown",
      fix: "Use yield to provide the value and continue with cleanup afterward.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Provide a resource and clean it up",
      code: `import pytest

@pytest.fixture
def resource_state():
    state = {"open": True}
    try:
        yield state
    finally:
        state["open"] = False

def test_resource_is_open(resource_state):
    assert resource_state["open"] is True`,
    },
    {
      language: "python",
      title: "Clean up a temporary marker",
      code: `import pytest

@pytest.fixture
def marker_file(tmp_path):
    path = tmp_path / "marker.txt"
    path.write_text("ready", encoding="utf-8")
    try:
        yield path
    finally:
        path.unlink(missing_ok=True)

def test_marker_exists(marker_file):
    assert marker_file.read_text(encoding="utf-8") == "ready"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Yield Fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#yield-fixtures-recommended",
    },
    {
      title: "pytest Documentation — Fixture Teardown",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#teardown-cleanup-aka-fixture-finalization",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "teardown"],
};

export default topic;
