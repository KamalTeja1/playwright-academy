import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "conftest-py",
  title: "The conftest.py File",
  summary:
    "Share pytest fixtures across test files by defining them in conftest.py.",
  whyItMatters:
    "A shared conftest.py keeps common fixtures in one place and makes them available without repeating imports.",
  notes: `pytest uses conftest.py files to share fixtures and test configuration with tests in the same directory tree.

### Share a fixture in a test directory

A simple project can look like this:

~~~text
project/
    tests/
        conftest.py
        test_users.py
        test_orders.py
~~~

Define a fixture in tests/conftest.py:

~~~python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "role": "tester"}
~~~

Both test_users.py and test_orders.py can request sample_user as a test parameter. They do not need to import it.

### Fixtures are available to child directories

A conftest.py applies to tests in its directory and below it.

~~~text
tests/
    conftest.py
    unit/
        test_math.py
    integration/
        test_api.py
~~~

The fixture in tests/conftest.py is available to tests in both child directories. A conftest.py inside one child directory can provide fixtures specific to that area.

### Keep conftest focused

Put shared fixtures and pytest hooks in conftest.py. Keep ordinary helper functions in normal Python modules, where they can be imported explicitly.

Avoid placing all test setup in one large conftest.py. A fixture should be shared only when multiple tests genuinely need it.

### No manual import required

pytest discovers conftest.py during test collection. Importing fixtures from conftest.py directly can cause confusing behaviour and is not the normal pattern.

### The takeaway

Put reusable test fixtures in a conftest.py within the directory tree that needs them. pytest discovers the file and makes its fixtures available to matching tests.`,
  handsOn: `Share a fixture across two test files.

### Step 1: Create this layout

~~~text
tests/
    conftest.py
    test_users.py
    test_labels.py
~~~

### Step 2: Add tests/conftest.py

~~~python
import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "role": "tester"}
~~~

### Step 3: Add tests/test_users.py

~~~python
def test_user_has_name(sample_user):
    assert sample_user["name"] == "Asha"
~~~

### Step 4: Add tests/test_labels.py

~~~python
def test_user_role_is_text(sample_user):
    assert isinstance(sample_user["role"], str)
~~~

### Step 5: Run pytest from the project root

~~~bash
python -m pytest
~~~

### Deliverable

Keep the three files. Explain why neither test file imports sample_user.`,
  challenge: `Create a small test tree with a shared fixture.

1. Put a fixture in tests/conftest.py
2. Request it from a test in tests/unit/
3. Request it from a test in tests/integration/
4. Run pytest from the project root
5. Add a fixture to a child conftest.py and check which tests can use it

Then explain how a conftest.py fixture's directory scope works.`,
  proTips: [
    "Place shared fixtures in the conftest.py nearest to the tests that use them.",
    "pytest discovers conftest.py automatically.",
    "Do not import fixtures from conftest.py into test modules.",
    "Keep shared conftest files focused and manageable.",
  ],
  commonMistakes: [
    {
      mistake: "Importing a fixture directly from conftest.py",
      fix: "Request the fixture by name as a test parameter.",
    },
    {
      mistake: "Putting a fixture in a conftest.py outside the tests' directory tree",
      fix: "Place the file in a directory that is an ancestor of the tests.",
    },
    {
      mistake: "Adding every test helper to one large conftest.py",
      fix: "Keep shared fixtures focused and move ordinary helpers into importable modules.",
    },
    {
      mistake: "Expecting a child conftest.py fixture to be available to sibling directories",
      fix: "A child conftest.py applies to tests in its own directory tree.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Define a shared fixture",
      code: `import pytest

@pytest.fixture
def sample_user():
    return {"name": "Asha", "role": "tester"}`,
    },
    {
      language: "python",
      title: "Request the shared fixture",
      code: `def test_user_has_name(sample_user):
    assert sample_user["name"] == "Asha"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Sharing Fixtures Across Multiple Files",
      url: "https://docs.pytest.org/en/stable/how-to/fixtures.html#sharing-fixtures-across-multiple-files-modules",
    },
    {
      title: "pytest Documentation — conftest.py",
      url: "https://docs.pytest.org/en/stable/reference/fixtures.html#conftest-py-sharing-fixtures-across-multiple-files",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "fixtures", "conftest"],
};

export default topic;
