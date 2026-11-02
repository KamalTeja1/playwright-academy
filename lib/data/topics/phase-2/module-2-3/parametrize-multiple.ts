import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "parametrize-multiple",
  title: "Parametrizing Multiple Arguments",
  summary:
    "Pass several values to each test case using multiple pytest parameters.",
  whyItMatters:
    "Many behaviours depend on more than one input. Parameterizing arguments checks those combinations without duplicating test code.",
  notes: `A test can receive several parameter values for each case. List the parameter names in the decorator and provide matching tuples.

### Parameterize two arguments

~~~python
import pytest

@pytest.mark.parametrize(
    "left, right, expected",
    [
        (2, 3, 5),
        (4, 6, 10),
        (7, 1, 8),
    ],
)
def test_addition(left, right, expected):
    assert left + right == expected
~~~

Each tuple supplies one test case. The values in each tuple are assigned to the matching arguments.

### Test boundary behaviour

~~~python
import pytest

@pytest.mark.parametrize(
    "text, expected_length",
    [
        ("hello", 5),
        ("", 0),
        ("pytest basics", 13),
    ],
)
def test_text_length(text, expected_length):
    assert len(text) == expected_length
~~~

### Make the case data easy to read

Use one tuple per case and keep the values in the same order as the names. When a case has many fields, readable IDs can help explain it in the report.

### Avoid accidental combinations

Multiple arguments in one parametrize decorator are paired by tuple. They do not automatically generate every possible combination. Stacking decorators for a Cartesian product is covered in the next topic.

### The takeaway

Use a tuple for each complete test case. Match tuple values to parameter names in order, and keep each case easy to understand.`,
  handsOn: `Test a price calculation with multiple inputs.

### Step 1: Create tests/test_prices.py

~~~python
import pytest

def discounted_price(price, discount):
    return price - discount

@pytest.mark.parametrize(
    "price, discount, expected",
    [
        (100, 10, 90),
        (80, 0, 80),
        (50, 50, 0),
    ],
)
def test_discounted_price(price, discount, expected):
    assert discounted_price(price, discount) == expected
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

### Deliverable

Keep the test. Explain how each tuple maps to the function arguments.`,
  challenge: `Write a parameterized test for a function that joins a first and last name with one space.

1. Include at least three input pairs
2. Provide an expected result for each pair
3. Use one tuple per complete test case
4. Assert the function output matches the expected value
5. Run the tests and inspect the individual cases

Include an empty or whitespace boundary case only if your function defines how it should behave.`,
  proTips: [
    "List parameter names in the same order as each case tuple.",
    "Use one tuple for each complete case.",
    "Include boundary cases that have defined expected behaviour.",
    "Keep tuples aligned and readable.",
  ],
  commonMistakes: [
    {
      mistake: "Providing a tuple with the wrong number of values",
      fix: "Give every case one value for each declared parameter.",
    },
    {
      mistake: "Putting values in a different order than the parameter names",
      fix: "Keep each tuple aligned with the decorator's parameter order.",
    },
    {
      mistake: "Expecting one decorator to generate every combination",
      fix: "Each tuple represents one paired case; use stacked parametrization for combinations.",
    },
    {
      mistake: "Using cases whose expected results are unclear",
      fix: "Choose inputs and expected values that express the behaviour being checked.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Check several additions",
      code: `import pytest

@pytest.mark.parametrize(
    "left, right, expected",
    [(2, 3, 5), (4, 6, 10), (7, 1, 8)],
)
def test_addition(left, right, expected):
    assert left + right == expected`,
    },
    {
      language: "python",
      title: "Check text lengths",
      code: `import pytest

@pytest.mark.parametrize(
    "text, expected_length",
    [("hello", 5), ("", 0)],
)
def test_text_length(text, expected_length):
    assert len(text) == expected_length`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Parametrizing Test Functions",
      url: "https://docs.pytest.org/en/stable/how-to/parametrize.html#pytest-mark-parametrize",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "parametrization", "testing"],
};

export default topic;
