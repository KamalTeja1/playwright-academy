import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "what-are-fixtures",
  title: "What Are Fixtures?",
  summary:
    "Use pytest fixtures to provide reusable data and setup to tests.",
  whyItMatters:
    "Fixtures reduce repeated setup and make it clear what each test needs before it runs.",
  notes: `A fixture provides a test with data or a resource it needs. Define one with pytest.fixture and request it by using its name as a test function argument.

### Define and request a fixture

~~~python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "active": True}

def test_user_is_active(sample_user):
    assert sample_user["active"] is True
~~~

pytest runs the fixture and passes its returned value to the test. The test does not call the fixture directly.

### Share setup across tests

~~~python
import pytest

@pytest.fixture
def numbers():
    return [2, 3, 5]

def test_number_count(numbers):
    assert len(numbers) == 3

def test_number_sum(numbers):
    assert sum(numbers) == 10
~~~

Each test requests the fixture by name. By default, a function-scoped fixture runs separately for each test that uses it.

### Fixtures can depend on other fixtures

~~~python
import pytest

@pytest.fixture
def user_name():
    return "Asha"

@pytest.fixture
def sample_user(user_name):
    return {"name": user_name, "active": True}

def test_user_name(sample_user):
    assert sample_user["name"] == "Asha"
~~~

pytest resolves the dependency and supplies user_name to sample_user.

### Choose fixtures for shared setup

A fixture is useful when multiple tests need the same preparation or when a test needs a named resource. Keep simple, one-off values in the test when extracting them would make the example harder to follow.

### The takeaway

Define a fixture with pytest.fixture, then request it as a test argument. pytest handles calling it and supplying its value.`,
  handsOn: `Create a fixture that provides a test user.

### Step 1: Create tests/test_users.py

~~~python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "role": "tester"}

def test_user_has_name(sample_user):
    assert sample_user["name"] == "Asha"

def test_user_has_role(sample_user):
    assert sample_user["role"] == "tester"
~~~

### Step 2: Run the tests

~~~bash
python -m pytest
~~~

### Deliverable

Keep the tests. Explain how pytest knows to provide sample_user to each test.`,
  challenge: `Create a fixture that returns a list of three fictional test users.

1. Give each user a name and a role
2. Write one test that checks the number of users
3. Write another test that checks one user's role
4. Request the fixture by name in both tests
5. Run both tests with pytest

Then explain why a fixture can be more useful than repeating the same setup in every test.`,
  proTips: [
    "Request a fixture by using its name as a test parameter.",
    "Use fixtures for reusable setup or resources.",
    "Keep fixture names descriptive.",
    "Let pytest resolve fixture dependencies.",
  ],
  commonMistakes: [
    {
      mistake: "Calling a fixture function directly from a test",
      fix: "Request the fixture by adding its name as a test parameter.",
    },
    {
      mistake: "Forgetting the pytest.fixture decorator",
      fix: "Decorate the function with pytest.fixture.",
    },
    {
      mistake: "Repeating the same complex setup across several tests",
      fix: "Move reusable setup into a fixture.",
    },
    {
      mistake: "Creating a fixture for a value used only once when it adds confusion",
      fix: "Keep simple local values in the test when that is clearer.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Provide a value with a fixture",
      code: `import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "active": True}

def test_user_is_active(sample_user):
    assert sample_user["active"] is True`,
    },
    {
      language: "python",
      title: "Use one fixture in two tests",
      code: `import pytest

@pytest.fixture
def numbers():
    return [2, 3, 5]

def test_count(numbers):
    assert len(numbers) == 3

def test_sum(numbers):
    assert sum(numbers) == 10`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Fixtures",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "fixtures", "testing"],
};

export default topic;
