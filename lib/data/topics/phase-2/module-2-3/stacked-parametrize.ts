import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "stacked-parametrize",
  title: "Stacked Parametrize Decorators",
  summary:
    "Combine parametrized inputs to generate a Cartesian product of test cases.",
  whyItMatters:
    "Stacked parametrization checks combinations such as browsers and screen sizes without writing every pair by hand.",
  notes: `Stacking pytest.mark.parametrize decorators creates combinations from the values in each decorator.

### Combine two parameter sets

~~~python
import pytest

@pytest.mark.parametrize("browser", ["chromium", "firefox"])
@pytest.mark.parametrize("screen", ["desktop", "mobile"])
def test_browser_screen_pair(browser, screen):
    assert browser in {"chromium", "firefox"}
    assert screen in {"desktop", "mobile"}
~~~

pytest runs the test for every browser and screen combination. With two values in each decorator, this creates four cases.

### Understand the product

For two browser values and three screen values, pytest creates six cases. The number of cases is the product of the number of values in each decorator.

Use this carefully. Adding many parameters can quickly create a large suite.

### Decorator order

The decorator closest to the function is applied first. This affects the order in which values appear in collection output. The combinations are still generated from both sets.

### Use IDs for clarity

Readable IDs can make each combination easier to identify:

~~~python
@pytest.mark.parametrize("browser", ["chromium", "firefox"], ids=["chrome-like", "firefox"])
~~~

Prefer short, clear labels that make a failed case understandable.

### When not to stack

If only specific pairs are valid, use one parametrization with tuples instead. Stacking creates every combination, including pairs you may not want to test.

### The takeaway

Stack parametrization when every combination is meaningful. Use paired tuples when each case has a specific set of values.`,
  handsOn: `Generate browser and device combinations.

### Step 1: Create tests/test_combinations.py

~~~python
import pytest

@pytest.mark.parametrize("browser", ["chromium", "firefox"])
@pytest.mark.parametrize("device", ["desktop", "mobile"])
def test_browser_device_values(browser, device):
    assert browser in {"chromium", "firefox"}
    assert device in {"desktop", "mobile"}
~~~

### Step 2: Run pytest verbosely

~~~bash
python -m pytest -v
~~~

Expect four cases: each browser paired with each device.

### Deliverable

Keep the test. Explain why two values in each of two decorators produce four cases.`,
  challenge: `Create a test that combines three browsers with two viewport categories.

1. Use one parametrize decorator for browsers
2. Use another decorator for viewport categories
3. Assert that each value belongs to its expected set
4. Run pytest with -v and count the collected cases
5. Calculate how many cases would run if you added a fourth browser and a third viewport

Then explain when paired tuples are a better choice than stacked decorators.`,
  proTips: [
    "Stack decorators when every cross-product combination is useful.",
    "Estimate the total case count by multiplying the number of values.",
    "Use paired tuples when only specific combinations are valid.",
    "Use readable IDs when combinations are hard to distinguish.",
  ],
  commonMistakes: [
    {
      mistake: "Stacking decorators when only specific pairs should run",
      fix: "Use one parametrization with tuples for explicitly paired cases.",
    },
    {
      mistake: "Forgetting that stacked parameters multiply the test count",
      fix: "Calculate the product before adding large parameter sets.",
    },
    {
      mistake: "Assuming decorator order changes which combinations exist",
      fix: "Order affects collection presentation, while both parameter sets still combine.",
    },
    {
      mistake: "Creating combinations with values that are incompatible",
      fix: "Use paired cases or filter the input design so each generated combination is valid.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Generate four combinations",
      code: `import pytest

@pytest.mark.parametrize("browser", ["chromium", "firefox"])
@pytest.mark.parametrize("device", ["desktop", "mobile"])
def test_browser_device(browser, device):
    assert browser in {"chromium", "firefox"}
    assert device in {"desktop", "mobile"}`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Parametrizing Test Functions",
      url: "https://docs.pytest.org/en/stable/how-to/parametrize.html#stacking-parametrize-decorators",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "parametrization", "testing"],
};

export default topic;
