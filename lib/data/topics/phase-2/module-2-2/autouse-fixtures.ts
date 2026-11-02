import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "autouse-fixtures",
  title: "Autouse Fixtures",
  summary:
    "Apply a fixture automatically to tests in its scope when every test needs the same setup.",
  whyItMatters:
    "Autouse fixtures can remove repetitive setup, but their hidden effect should be reserved for setup that genuinely applies to every test.",
  notes: `An autouse fixture runs automatically for tests in its scope. Tests do not need to request it as an argument.

### Define an autouse fixture

~~~python
import pytest

@pytest.fixture(autouse=True)
def common_setup():
    settings = {"ready": True}
    assert settings["ready"] is True

def test_feature_one():
    assert 2 + 3 == 5

def test_feature_two():
    assert "pytest".upper() == "PYTEST"
~~~

The fixture runs for both tests even though neither test names common_setup.

### Use autouse narrowly

Autouse is useful for lightweight setup or cleanup that every test in a scope needs, such as resetting shared state. It can also make test requirements less visible, because the test signature does not show the dependency.

If only some tests need a resource, prefer a normal fixture and request it explicitly.

### Autouse follows fixture scope

An autouse fixture uses function scope by default. You can set another supported scope, but consider carefully what shared effects it introduces.

Autouse fixtures can also depend on other fixtures. pytest resolves those dependencies when the autouse fixture runs.

### The takeaway

Use autouse only when every test in the relevant scope truly needs the fixture. Prefer explicit fixture arguments when they make a test's requirements clearer.`,
  handsOn: `Run a small autouse fixture for every test in a file.

### Step 1: Create tests/test_autouse.py

~~~python
import pytest

@pytest.fixture(autouse=True)
def common_setup():
    state = {"ready": True}
    assert state["ready"] is True

def test_addition():
    assert 4 + 5 == 9

def test_text():
    assert "hello".upper() == "HELLO"
~~~

### Step 2: Run pytest

~~~bash
python -m pytest -v
~~~

The fixture runs before each test even though neither test requests it by name.

### Step 3: Compare with an explicit fixture

Remove autouse=True and add common_setup as a parameter to one test. Run the tests again and notice which test requests the fixture explicitly.

### Deliverable

Keep the version that best communicates the setup. Explain when an autouse fixture is helpful and when it hides a dependency.`,
  challenge: `Create an autouse fixture that resets a simple module-level list before each test.

1. Mark the fixture as autouse
2. Add two tests that check the list starts empty
3. Change one test to append a value
4. Verify the next test still starts with an empty list
5. Explain why automatic setup can be less visible than a fixture parameter

Keep the fixture limited to the tests that genuinely need it.`,
  proTips: [
    "Use autouse only when all tests in its scope need the setup.",
    "Keep automatic fixture behavior small and predictable.",
    "Use explicit fixture parameters when they make dependencies clearer.",
    "Consider the fixture scope before introducing shared state.",
  ],
  commonMistakes: [
    {
      mistake: "Making a fixture autouse when only a few tests need it",
      fix: "Use an explicit fixture parameter for tests that need the resource.",
    },
    {
      mistake: "Adding hidden setup that changes unrelated tests",
      fix: "Keep autouse fixtures narrow in scope and effect.",
    },
    {
      mistake: "Assuming autouse changes fixture scope automatically",
      fix: "Set the fixture scope explicitly when a broader lifetime is needed.",
    },
    {
      mistake: "Using autouse to hide complex test dependencies",
      fix: "Request important resources explicitly so each test shows what it needs.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Run common setup automatically",
      code: `import pytest

@pytest.fixture(autouse=True)
def common_setup():
    state = {"ready": True}
    assert state["ready"] is True

def test_ready_value():
    assert 2 + 3 == 5`,
    },
    {
      language: "python",
      title: "Request a fixture explicitly",
      code: `import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha"}

def test_user_name(sample_user):
    assert sample_user["name"] == "Asha"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Autouse Fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#autouse-fixtures-fixtures-you-don-t-have-to-request",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "fixtures", "autouse"],
};

export default topic;
