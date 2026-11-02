import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "request-fixture",
  title: "The request Fixture",
  summary:
    "Use pytest's request fixture to inspect the current test and access fixture context.",
  whyItMatters:
    "The request fixture gives setup code context about the test or fixture that requested it, which helps build adaptable fixtures.",
  notes: `pytest's built-in request fixture provides information about the current test and the fixture request.

### Read the current test name

~~~python
def test_name_is_available(request):
    assert request.node.name == "test_name_is_available"
~~~

request.node represents the collected test item.

### Read a marker from a test

~~~python
import pytest

@pytest.mark.region("north")
def test_region_marker(request):
    marker = request.node.get_closest_marker("region")
    assert marker is not None
    assert marker.args == ("north",)
~~~

The marker must be registered in pytest.ini to avoid an unknown-marker warning:

~~~text
[pytest]
markers =
    region(value): label a test with a region
~~~

### Use request in a fixture

~~~python
import pytest

@pytest.fixture
def test_label(request):
    return request.node.name

def test_label_contains_test_name(test_label):
    assert test_label.startswith("test_")
~~~

A fixture can inspect the node that requested it. This is useful for context-aware setup, but keep the fixture's behaviour predictable.

### Access fixture context

The request object also provides information about the active fixture, configuration, and test. More advanced attributes are useful when a fixture needs to adapt to a test's metadata.

### Prefer explicit parameters when possible

The request fixture is powerful, but it can make setup less obvious if overused. Prefer a direct fixture parameter or a small explicit fixture when it expresses the requirement more clearly.

### The takeaway

Request is itself a built-in fixture. Use it when setup genuinely needs information about the test or fixture context.`,
  handsOn: `Use request to read the current test name.

### Step 1: Create tests/test_request_context.py

~~~python
import pytest

@pytest.fixture
def current_test_name(request):
    return request.node.name

def test_fixture_sees_its_requesting_test(current_test_name):
    assert current_test_name == "test_fixture_sees_its_requesting_test"
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Step 3: Read a registered marker

Add the following to pytest.ini:

~~~text
[pytest]
markers =
    area(name): identify a test area
~~~

Mark a test with pytest.mark.area("accounts"), then use request.node.get_closest_marker("area") in the test and assert its argument.

### Deliverable

Keep the test and configuration. Explain what request.node represents.`,
  challenge: `Create a fixture that reads a marker from the test requesting it.

1. Register a custom marker with one argument in pytest.ini
2. Apply the marker to one test
3. Use request.node.get_closest_marker inside a fixture
4. Return the marker argument from the fixture
5. Assert that the test receives the expected value

Then explain why this fixture should handle the case where a test has no such marker.`,
  proTips: [
    "Use request.node to inspect the current test item.",
    "Use get_closest_marker to read a marker from a test.",
    "Register custom markers in pytest configuration.",
    "Use request only when fixture behavior needs test context.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming every test has a particular marker",
      fix: "Check whether get_closest_marker returned a marker before reading its arguments.",
    },
    {
      mistake: "Using request in a test without requesting it as a parameter",
      fix: "Add request to the test or fixture function parameters.",
    },
    {
      mistake: "Reading test context when a direct fixture value would be clearer",
      fix: "Prefer explicit setup unless context-aware behavior is needed.",
    },
    {
      mistake: "Using an unregistered custom marker",
      fix: "Register the marker and describe it in pytest.ini.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Read a test's node name",
      code: `def test_request_has_node_name(request):
    assert request.node.name == "test_request_has_node_name"`,
    },
    {
      language: "python",
      title: "Read a marker safely",
      code: `import pytest

@pytest.mark.area("accounts")
def test_area_marker(request):
    marker = request.node.get_closest_marker("area")
    assert marker is not None
    assert marker.args == ("accounts",)`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — The request Fixture",
      url: "https://docs.pytest.org/en/stable/reference/reference.html#request",
    },
    {
      title: "pytest Documentation — Marking Test Functions",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "request"],
};

export default topic;
