import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "parametrize-single",
  title: "Parametrizing a Single Value",
  summary:
    "Run one test function with several input values using pytest.mark.parametrize.",
  whyItMatters:
    "Parametrization checks a range of inputs without copying the same test logic into several functions.",
  notes: `pytest.mark.parametrize runs one test function once for each supplied value.

### Parameterize one input

~~~python
import pytest

@pytest.mark.parametrize("number", [2, 4, 6])
def test_number_is_even(number):
    assert number % 2 == 0
~~~

pytest creates three test cases, one for each number. The parameter name in the decorator becomes an argument to the test function.

### Add a failing case to see the report

~~~python
import pytest

@pytest.mark.parametrize("number", [2, 4, 5])
def test_number_is_even(number):
    assert number % 2 == 0
~~~

The case with 5 fails independently. pytest shows which parameter value caused the failure.

### Parameterize strings too

~~~python
import pytest

@pytest.mark.parametrize("word", ["pytest", "python"])
def test_word_is_lowercase(word):
    assert word == word.lower()
~~~

### Keep cases focused

Choose values that represent useful normal and boundary cases. Too many values can make a suite slow and its report harder to read.

### The takeaway

Use pytest.mark.parametrize when the same assertion should be checked with several inputs. Put the parameter name in the test signature and let pytest create each case.`,
  handsOn: `Test a conversion function with several inputs.

### Step 1: Create tests/test_conversions.py

~~~python
import pytest

def to_seconds(minutes):
    return minutes * 60

@pytest.mark.parametrize("minutes", [1, 2, 5])
def test_minutes_to_seconds(minutes):
    assert to_seconds(minutes) == minutes * 60
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

pytest reports a separate test case for each value.

### Deliverable

Keep the test. Explain how many cases pytest ran and where each minutes value came from.`,
  challenge: `Write a parameterized test for a function that checks whether a word starts with a prefix.

1. Pass several word values through pytest.mark.parametrize
2. Include both a matching and a non-matching case
3. Use an expected boolean parameter
4. Assert the function result matches the expected value
5. Run pytest with verbose output

Then explain why this is easier to maintain than separate copies of the same test.`,
  proTips: [
    "Use pytest.mark.parametrize for repeated test logic with different values.",
    "Make the decorator's parameter name match the test function argument.",
    "Include meaningful boundary cases.",
    "Use verbose output to inspect individual parameter cases.",
  ],
  commonMistakes: [
    {
      mistake: "Using different parameter names in the decorator and test function",
      fix: "Keep the declared parameter name and function argument identical.",
    },
    {
      mistake: "Passing values with a shape the test does not expect",
      fix: "Make each parameter value match the test function's input.",
    },
    {
      mistake: "Adding many cases without considering test clarity",
      fix: "Choose a focused set that covers meaningful behaviour.",
    },
    {
      mistake: "Assuming one failing parameter makes every case fail",
      fix: "Read the report to see which individual parameter case failed.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Run one test with several values",
      code: `import pytest

@pytest.mark.parametrize("number", [2, 4, 6])
def test_number_is_even(number):
    assert number % 2 == 0`,
    },
    {
      language: "python",
      title: "Check several words",
      code: `import pytest

@pytest.mark.parametrize("word", ["pytest", "python"])
def test_word_is_lowercase(word):
    assert word == word.lower()`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Parametrizing Tests",
      url: "https://docs.pytest.org/en/stable/how-to/parametrize.html",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "parametrization", "testing"],
};

export default topic;
