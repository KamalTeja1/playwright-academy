import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "fixture-scopes",
  title: "Fixture Scopes",
  summary:
    "Choose how often pytest creates and tears down a fixture with its scope.",
  whyItMatters:
    "Fixture scope controls reuse and cleanup. The right scope can save time while keeping tests isolated.",
  notes: `A fixture's scope determines how long its value is reused. By default, fixtures have function scope.

### Function scope

~~~python
import pytest

@pytest.fixture
def sample_list():
    return []

def test_first_list_is_empty(sample_list):
    assert sample_list == []

def test_second_list_is_empty(sample_list):
    assert sample_list == []
~~~

The fixture is created separately for each test. This is a good default because one test cannot change the value seen by another.

### Module scope

~~~python
import pytest

@pytest.fixture(scope="module")
def shared_label():
    return "practice"
~~~

A module-scoped fixture is created once for the test module that uses it, then reused by its tests.

### Other scopes

pytest supports these fixture scopes:

- function: once per test function
- class: once per test class
- module: once per Python test module
- package: once per package
- session: once for the test session

Broader scopes can reduce setup cost, but they also share state for longer.

### Choose a scope deliberately

Use function scope when tests need fresh, isolated data. Use a broader scope when setup is expensive and the resource can safely be shared. A test that mutates shared state can make later tests order-dependent.

A fixture cannot depend on a fixture with a narrower scope. For example, a session-scoped fixture cannot request a function-scoped fixture because the session fixture lives longer.

### The takeaway

Start with function scope. Broaden it only when the resource is safe to reuse and the setup cost justifies sharing it.`,
  handsOn: `Observe function-scoped fixture isolation.

### Step 1: Create tests/test_scopes.py

~~~python
import pytest

@pytest.fixture
def values():
    return []

def test_first_test_changes_its_values(values):
    values.append("first")
    assert values == ["first"]

def test_second_test_gets_fresh_values(values):
    assert values == []
~~~

### Step 2: Run the tests

~~~bash
python -m pytest -v
~~~

Both tests pass because the default function scope creates a fresh list for each test.

### Step 3: Try a broader scope

Change the fixture to module scope and run the tests again. Observe why sharing mutable state can cause tests to depend on execution order. Restore function scope afterward.

### Deliverable

Keep the isolated version. Explain how the scope changes when pytest creates the fixture.`,
  challenge: `Create two tests that request a fixture containing a mutable dictionary.

1. Use the default function scope and show that each test gets an independent dictionary
2. Change the scope to module and observe the effect of sharing
3. Restore a design that keeps the tests independent
4. Run both tests with pytest

Then describe one case where a broader scope could be appropriate and one risk it introduces.`,
  proTips: [
    "Use function scope as the safe default.",
    "Use a broader scope when setup is costly and sharing is safe.",
    "Avoid mutable shared state that makes tests order-dependent.",
    "Make sure a fixture does not depend on a narrower-scoped fixture.",
  ],
  commonMistakes: [
    {
      mistake: "Choosing session scope just to make setup run less often",
      fix: "Use a broader scope only when sharing the resource is safe.",
    },
    {
      mistake: "Mutating a shared fixture value in tests",
      fix: "Use function scope or create independent values for each test.",
    },
    {
      mistake: "Making a broad-scoped fixture depend on a narrow-scoped fixture",
      fix: "Align fixture dependencies so their scopes are compatible.",
    },
    {
      mistake: "Assuming fixture scope changes the test function's lifetime",
      fix: "Scope controls fixture creation and reuse, not how often pytest runs the test.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Fresh data for each test",
      code: `import pytest

@pytest.fixture
def values():
    return []

def test_append_value(values):
    values.append("item")
    assert values == ["item"]

def test_values_start_empty(values):
    assert values == []`,
    },
    {
      language: "python",
      title: "Reuse an immutable module value",
      code: `import pytest

@pytest.fixture(scope="module")
def sample_label():
    return "practice"

def test_label_is_text(sample_label):
    assert isinstance(sample_label, str)`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Fixture Scopes",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#fixture-scopes",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "fixtures", "scope"],
};

export default topic;
