import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-raises",
  title: "Testing Expected Exceptions",
  summary:
    "Use pytest.raises to check that code raises the expected exception.",
  whyItMatters:
    "Good tests check error behaviour as well as successful results. pytest.raises makes the expected failure explicit.",
  notes: `Use pytest.raises when a test expects an operation to raise an exception.

### Check the exception type

~~~python
import pytest

def parse_count(text):
    return int(text)

def test_invalid_count_raises_value_error():
    with pytest.raises(ValueError):
        parse_count("many")
~~~

If the code inside the with block does not raise ValueError, the test fails. If it raises a different exception, the test also fails.

### Check part of the message

~~~python
import pytest

def parse_count(text):
    if not text.isdigit():
        raise ValueError("count must contain digits")
    return int(text)

def test_invalid_count_message():
    with pytest.raises(ValueError, match="must contain digits"):
        parse_count("many")
~~~

The match argument uses a regular expression. Keep the pattern focused on useful wording rather than the entire message.

### Inspect the exception

~~~python
import pytest

def test_exception_details():
    with pytest.raises(ValueError) as error:
        int("many")

    assert "invalid literal" in str(error.value)
~~~

The context manager captures the exception so the test can inspect its value.

### Keep the expected operation inside the block

Only put the operation expected to fail inside pytest.raises. Otherwise, an unrelated exception could make the test pass.

~~~python
with pytest.raises(ZeroDivisionError):
    result = 5 / 0
~~~

### The takeaway

Use pytest.raises to check both the type and, when useful, the message of an expected exception. Keep the tested operation inside the context manager.`,
  handsOn: `Test a function that rejects an invalid age.

### Step 1: Create tests/test_age.py

~~~python
import pytest

def parse_age(text):
    if not text.isdigit():
        raise ValueError("age must contain digits")
    return int(text)

def test_valid_age_is_converted():
    assert parse_age("21") == 21

def test_invalid_age_raises_value_error():
    with pytest.raises(ValueError):
        parse_age("young")

def test_invalid_age_has_helpful_message():
    with pytest.raises(ValueError, match="must contain digits"):
        parse_age("young")
~~~

### Step 2: Run the tests

~~~bash
python -m pytest
~~~

### Deliverable

Keep the tests. Explain what happens if parse_age stops raising ValueError for invalid input.`,
  challenge: `Write tests for a function that divides two numbers and rejects a zero divisor.

1. Check a normal division result with assert
2. Check that a zero divisor raises ZeroDivisionError
3. Capture the exception and inspect its message
4. Keep only the division call inside the raises block
5. Run the tests with pytest

Then explain why an unrelated operation should not be placed inside the raises block.`,
  proTips: [
    "Use pytest.raises for an exception the code is expected to raise.",
    "Check the exception type first; inspect its message only when it matters.",
    "Use match for a focused regular-expression check of the message.",
    "Keep the operation expected to fail inside the context manager.",
  ],
  commonMistakes: [
    {
      mistake: "Expecting an exception without using pytest.raises",
      fix: "Wrap the expected failing operation in pytest.raises.",
    },
    {
      mistake: "Putting unrelated operations inside the raises block",
      fix: "Keep only the operation that should raise the exception inside it.",
    },
    {
      mistake: "Checking an exact message that changes often",
      fix: "Match only the stable part of the message when message checking is needed.",
    },
    {
      mistake: "Expecting a broad exception when a specific type is known",
      fix: "Check the narrowest expected exception type.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Check an expected exception",
      code: `import pytest

def parse_count(text):
    return int(text)

def test_invalid_count():
    with pytest.raises(ValueError):
        parse_count("many")`,
    },
    {
      language: "python",
      title: "Inspect the exception message",
      code: `import pytest

def test_invalid_count_message():
    with pytest.raises(ValueError, match="invalid literal") as error:
        int("many")

    assert "invalid literal" in str(error.value)`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Assertions about Expected Exceptions",
      url: "https://docs.pytest.org/en/stable/how-to/assert.html#assertions-about-expected-exceptions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "exceptions", "testing"],
};

export default topic;
