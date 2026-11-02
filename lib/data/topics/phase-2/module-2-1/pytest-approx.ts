import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-approx",
  title: "Comparing Approximate Numbers",
  summary:
    "Use pytest.approx when floating-point results need a small tolerance.",
  whyItMatters:
    "Floating-point calculations can produce tiny rounding differences. Approximate comparisons keep tests accurate without requiring identical representations.",
  notes: `Floating-point values are stored with limited precision. A calculation that looks exact on paper can differ by a tiny amount in Python.

### Compare with pytest.approx

~~~python
import pytest

def test_fractional_result():
    assert 0.1 + 0.2 == pytest.approx(0.3)
~~~

pytest.approx accepts a small difference between the actual and expected numbers.

### Set a tolerance

~~~python
import pytest

def test_measurement_with_tolerance():
    measured = 10.02
    assert measured == pytest.approx(10, abs=0.05)
~~~

The abs argument sets an absolute tolerance. The rel argument sets a relative tolerance.

~~~python
assert 100.5 == pytest.approx(100, rel=0.01)
~~~

This allows a difference of up to one percent of the expected value.

### Compare sequences and mappings

~~~python
import pytest

def test_multiple_values():
    assert [0.1 + 0.2, 1.5] == pytest.approx([0.3, 1.5])

def test_mapping_values():
    actual = {"width": 10.01, "height": 20.02}
    expected = {"width": 10, "height": 20}
    assert actual == pytest.approx(expected, abs=0.05)
~~~

### Do not use approximate comparison for everything

Use exact equality for integers, strings, and values that should match exactly. Choose a tolerance based on the behaviour being tested; a tolerance that is too large can hide a real defect.

### The takeaway

Use pytest.approx for floating-point values where a small difference is expected. Pick a meaningful tolerance and use exact comparisons for values that should match exactly.`,
  handsOn: `Test a calculation that returns a decimal value.

### Step 1: Create tests/test_measurements.py

~~~python
import pytest

def circle_area(radius):
    return 3.14159 * radius * radius

def test_unit_circle_area():
    assert circle_area(1) == pytest.approx(3.14159)

def test_area_with_absolute_tolerance():
    actual = circle_area(2)
    assert actual == pytest.approx(12.56636, abs=0.001)
~~~

### Step 2: Run the tests

~~~bash
python -m pytest
~~~

### Step 3: Experiment with tolerance

Temporarily use a much smaller absolute tolerance and observe the result. Restore a tolerance that matches the precision your example needs.

### Deliverable

Keep the tests. Explain why a tolerance should reflect the expected precision rather than be chosen just to make a test pass.`,
  challenge: `Test a function that calculates a price after tax and returns a float.

1. Check the calculated value using pytest.approx
2. Add a test with an explicit absolute tolerance
3. Add a test comparing a list of approximate values
4. Keep an exact assertion for an integer result
5. Run pytest and choose tolerances that make sense for the calculation

Then explain the difference between absolute and relative tolerance.`,
  proTips: [
    "Use pytest.approx for floating-point comparisons.",
    "Set abs or rel tolerance when the default is not suitable.",
    "Choose tolerances based on meaningful precision.",
    "Keep exact equality for strings, integers, and exact expectations.",
  ],
  commonMistakes: [
    {
      mistake: "Comparing calculated floats with exact equality",
      fix: "Use pytest.approx when rounding differences are expected.",
    },
    {
      mistake: "Choosing a tolerance so large that it hides defects",
      fix: "Set a tolerance that matches the precision required by the behaviour.",
    },
    {
      mistake: "Using approximate comparison for values that should match exactly",
      fix: "Use ordinary equality for exact values such as integers and strings.",
    },
    {
      mistake: "Confusing relative tolerance with an absolute difference",
      fix: "Use abs for a fixed difference and rel for a proportion of the expected value.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Compare a floating-point result",
      code: `import pytest

def test_float_sum():
    assert 0.1 + 0.2 == pytest.approx(0.3)`,
    },
    {
      language: "python",
      title: "Choose an absolute tolerance",
      code: `import pytest

def test_measurement():
    measured = 10.02
    assert measured == pytest.approx(10, abs=0.05)`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Approximate Assertions",
      url: "https://docs.pytest.org/en/stable/how-to/assert.html#assertions-about-approximate-equality",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "floating-point", "testing"],
};

export default topic;
