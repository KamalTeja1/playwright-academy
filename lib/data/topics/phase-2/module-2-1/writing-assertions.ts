import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "writing-assertions",
  title: "Writing Assertions",
  summary:
    "Use plain assert statements to compare actual results with expected behaviour.",
  whyItMatters:
    "Assertions are the checks that make a test meaningful. Clear comparisons make failures easier to understand and fix.",
  notes: `An assertion checks whether a condition is true. In pytest, use Python's assert statement.

### Check a returned value

~~~python
def total_with_tax(price, tax):
    return price + tax

def test_total_with_tax():
    assert total_with_tax(100, 8) == 108
~~~

The test passes when the expression after assert is true. If it is false, pytest reports a failure.

### Check booleans and collections

~~~python
def test_user_is_active():
    user = {"name": "Asha", "active": True}
    assert user["active"] is True

def test_roles_include_editor():
    roles = ["viewer", "editor"]
    assert "editor" in roles
~~~

Prefer direct checks that show what the test expects.

### Compare values clearly

~~~python
def test_normalized_name():
    actual = "  Asha  ".strip().lower()
    expected = "asha"
    assert actual == expected
~~~

Named actual and expected values can make a longer test easier to read.

### Use plain assert with pytest

pytest rewrites assert statements to show useful details when a comparison fails. You do not need a special assertion method for equality.

Avoid adding a custom message to every assert. A clear test name and readable values let pytest show useful comparison details.

### Keep tests focused

A test should check a behaviour that matters. Several related assertions can belong together, but a failure should make it clear which expectation was not met.

### The takeaway

Use plain assert statements to express expected behaviour. Compare values directly and keep the test readable enough that a failure points you towards the problem.`,
  handsOn: `Write assertions for a small calculation.

### Step 1: Create tests/test_prices.py

~~~python
def final_price(price, discount):
    return price - discount

def test_discount_is_subtracted():
    actual = final_price(100, 15)
    assert actual == 85

def test_discounted_price_is_lower():
    assert final_price(100, 15) < 100
~~~

### Step 2: Run pytest

~~~bash
python -m pytest
~~~

### Step 3: Observe a failure

Temporarily change the expected value in one assertion. Run pytest and inspect the comparison output. Restore the correct value.

### Deliverable

Keep the passing tests. Explain what the assert statement checks and what pytest displays when it fails.`,
  challenge: `Create tests for a function that returns the number of characters in a string.

1. Check the result for a short word
2. Check the result for an empty string
3. Check that the result has the expected type
4. Use direct assert statements with clear expected values
5. Temporarily cause one assertion to fail and read pytest's output

Restore all expected values so the tests pass.`,
  proTips: [
    "Use plain assert expressions in pytest tests.",
    "Compare actual and expected values directly.",
    "Use descriptive test names and clear variable names.",
    "Keep each test focused on behaviour that matters.",
  ],
  commonMistakes: [
    {
      mistake: "Writing a test without an assertion",
      fix: "Add an assert that checks the behaviour the test is meant to verify.",
    },
    {
      mistake: "Checking only that a function ran without an error",
      fix: "Assert the result or visible behaviour that matters.",
    },
    {
      mistake: "Making a test depend on several unrelated behaviours",
      fix: "Split unrelated expectations into focused tests.",
    },
    {
      mistake: "Adding a custom assertion message that hides useful comparison details",
      fix: "Use clear names and let pytest show the failing expression.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Compare a result with its expected value",
      code: `def multiply(left, right):
    return left * right

def test_multiply_returns_product():
    actual = multiply(4, 3)
    expected = 12
    assert actual == expected`,
    },
    {
      language: "python",
      title: "Check membership and type",
      code: `def test_user_record():
    user = {"name": "Asha", "active": True}
    assert "name" in user
    assert user["active"] is True
    assert isinstance(user["name"], str)`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Assertions",
      url: "https://docs.pytest.org/en/stable/how-to/assert.html",
    },
    {
      title: "Python Tutorial — Assertions",
      url: "https://docs.python.org/3/tutorial/errors.html#assertions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "assertions", "testing"],
};

export default topic;
