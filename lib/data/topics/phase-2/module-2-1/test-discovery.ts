import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-discovery",
  title: "Test Discovery",
  summary:
    "Name files, functions, and classes so pytest can find your tests.",
  whyItMatters:
    "Correct naming lets pytest find tests automatically, so you can run a project without listing every test by hand.",
  notes: `Test discovery is how pytest finds tests to run.

### Name test files

By default, pytest looks for files named test_*.py or *_test.py.

~~~text
test_math.py
account_test.py
~~~

Choose one pattern for your project and use it consistently.

### Name test functions

A test function name should start with test_.

~~~python
def test_total_is_calculated():
    assert 2 + 3 == 5
~~~

A function named check_total is not collected by the default naming rules.

### Group tests in a class

pytest can collect test methods in a class whose name starts with Test. Do not define an __init__ method in a test class.

~~~python
class TestTotals:
    def test_addition(self):
        assert 2 + 3 == 5

    def test_subtraction(self):
        assert 5 - 3 == 2
~~~

A test class is optional. Functions are often the simplest way to begin.

### Keep test files in the project

A common layout is:

~~~text
project/
    app.py
    tests/
        test_app.py
~~~

Run pytest from the project root so it can discover the tests directory.

### Confirm what pytest found

~~~bash
python -m pytest --collect-only
~~~

Collection lists the tests pytest would run without executing them. If a test is missing, check the file and function names first.

### The takeaway

Follow pytest's file and function naming patterns. Use collection mode to see exactly which tests the runner discovered.`,
  handsOn: `Practise default test discovery.

### Step 1: Create tests/test_numbers.py

~~~python
def test_even_number_has_remainder_zero():
    assert 8 % 2 == 0

def test_odd_number_has_remainder_one():
    assert 7 % 2 == 1

def checks_are_not_collected_by_default():
    assert 1 + 1 == 2
~~~

### Step 2: Inspect collected tests

~~~bash
python -m pytest --collect-only
~~~

The two functions beginning with test_ should be collected. The third function does not match the default test function pattern.

### Step 3: Run the tests

~~~bash
python -m pytest
~~~

### Deliverable

Keep the test file. Explain why the third function was not collected.`,
  challenge: `Create a tests directory with two test files.

1. Use a discoverable filename for each
2. Put at least two test_ functions in each file
3. Add one helper function that is not collected as a test
4. Run pytest with --collect-only
5. Count the collected tests

Then explain why test classes should not define __init__.`,
  proTips: [
    "Use test_*.py for test filenames.",
    "Start test function names with test_.",
    "Use classes named Test... only when grouping helps.",
    "Run --collect-only to inspect discovery without executing tests.",
  ],
  commonMistakes: [
    {
      mistake: "Naming a test function check_something",
      fix: "Use a name beginning with test_ so pytest collects it.",
    },
    {
      mistake: "Saving tests in a file that does not match the configured pattern",
      fix: "Use test_*.py or *_test.py, or configure a different pattern deliberately.",
    },
    {
      mistake: "Adding an __init__ method to a pytest test class",
      fix: "Use fixtures for test setup instead of defining a test-class constructor.",
    },
    {
      mistake: "Assuming pytest found every intended test",
      fix: "Use --collect-only and check the collection output.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Collectable test functions",
      code: `def test_sum_is_correct():
    assert sum([2, 3]) == 5

def test_list_has_two_items():
    assert len(["a", "b"]) == 2`,
    },
    {
      language: "python",
      title: "Collectable test class",
      code: `class TestNumbers:
    def test_even_number(self):
        assert 8 % 2 == 0

    def test_odd_number(self):
        assert 7 % 2 == 1`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Good Integration Practices",
      url: "https://docs.pytest.org/en/stable/explanation/goodpractices.html",
    },
    {
      title: "pytest Documentation — How to Invoke pytest",
      url: "https://docs.pytest.org/en/stable/how-to/usage.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "discovery", "testing"],
};

export default topic;
