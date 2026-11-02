import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "indirect-parametrization",
  title: "Indirect Parametrization",
  summary:
    "Pass parameter values through a fixture so each case can prepare its own resource.",
  whyItMatters:
    "Indirect parametrization separates test case descriptions from resource setup, which is useful when each input needs preparation.",
  notes: `Indirect parametrization sends a parameter value to a fixture instead of directly to the test function.

### Route a value through a fixture

~~~python
import pytest

@pytest.fixture
def prepared_user(request):
    return {"name": request.param, "active": True}

@pytest.mark.parametrize(
    "prepared_user",
    ["Asha", "Ravi"],
    indirect=True,
)
def test_prepared_user_is_active(prepared_user):
    assert prepared_user["active"] is True
    assert prepared_user["name"] in {"Asha", "Ravi"}
~~~

The decorator passes each name to request.param inside prepared_user. The fixture prepares the value, then provides the resulting dictionary to the test.

### Prepare a resource for each case

A fixture can use its parameter to create a temporary file, select a configuration, or prepare another test resource.

~~~python
import pytest

@pytest.fixture
def sample_text(request):
    return request.param.strip().lower()

@pytest.mark.parametrize(
    "sample_text",
    ["  PYTEST  ", "  FIXTURES  "],
    indirect=True,
)
def test_sample_text_is_normalized(sample_text):
    assert sample_text == sample_text.lower()
~~~

### Select which parameters are indirect

When a test has several parameters, indirect can name only the ones that should be passed through fixtures.

~~~python
@pytest.mark.parametrize(
    "prepared_user, expected_role",
    [("Asha", "tester"), ("Ravi", "reviewer")],
    indirect=["prepared_user"],
)
~~~

The other value is passed directly to the test function.

### Keep the data flow clear

Use indirect parametrization when setup needs to transform or prepare each case. For plain values that need no setup, direct parametrization is simpler.

### The takeaway

Set indirect=True, or list the fixture parameter names, to send case data through fixtures. Use request.param inside the fixture to prepare the value for the test.`,
  handsOn: `Normalize each input through a fixture.

### Step 1: Create tests/test_indirect.py

~~~python
import pytest

@pytest.fixture
def normalized_text(request):
    return request.param.strip().lower()

@pytest.mark.parametrize(
    "normalized_text",
    ["  PYTEST  ", "  FIXTURES  "],
    indirect=True,
)
def test_text_is_normalized(normalized_text):
    assert normalized_text in {"pytest", "fixtures"}
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

### Deliverable

Keep the test. Explain how request.param reaches the fixture and how the fixture's result reaches the test.`,
  challenge: `Create an indirect fixture that prepares a user record from a name.

1. Use request.param to receive each name
2. Return a dictionary with the name and a role
3. Parameterize at least two names with indirect=True
4. Assert each test receives a prepared dictionary
5. Give each case a readable ID and run pytest

Then explain when direct parametrization would be simpler.`,
  proTips: [
    "Use indirect parametrization when each case needs fixture setup.",
    "Read the incoming value from request.param.",
    "Use indirect as a list when only some test parameters need fixture processing.",
    "Keep direct parametrization for simple values that need no preparation.",
  ],
  commonMistakes: [
    {
      mistake: "Setting indirect=True without defining a fixture with that parameter name",
      fix: "Create a fixture whose name matches the parametrized argument.",
    },
    {
      mistake: "Reading request.param in the test instead of the fixture",
      fix: "Read the incoming value inside the fixture function.",
    },
    {
      mistake: "Using indirect when a plain parameter would be enough",
      fix: "Use direct parametrization for values that need no setup or transformation.",
    },
    {
      mistake: "Marking every parameter indirect when only one needs setup",
      fix: "Pass a list of fixture parameter names to indirect.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Prepare parameter values in a fixture",
      code: `import pytest

@pytest.fixture
def prepared_user(request):
    return {"name": request.param, "active": True}

@pytest.mark.parametrize(
    "prepared_user",
    ["Asha", "Ravi"],
    indirect=True,
)
def test_user_is_active(prepared_user):
    assert prepared_user["active"] is True`,
    },
    {
      language: "python",
      title: "Apply indirect to one parameter",
      code: `import pytest

@pytest.fixture
def prepared_user(request):
    return {"name": request.param}

@pytest.mark.parametrize(
    "prepared_user, expected_role",
    [("Asha", "tester"), ("Ravi", "reviewer")],
    indirect=["prepared_user"],
)
def test_user_role(prepared_user, expected_role):
    assert prepared_user["name"] in {"Asha", "Ravi"}
    assert expected_role in {"tester", "reviewer"}`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Indirect Parametrization",
      url: "https://docs.pytest.org/en/stable/example/parametrize.html#indirect-parametrization",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "parametrization", "fixtures"],
};

export default topic;
