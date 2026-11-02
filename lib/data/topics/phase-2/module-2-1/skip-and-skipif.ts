import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "skip-and-skipif",
  title: "Skipping Tests",
  summary:
    "Use skip and skipif when a test cannot or should not run in the current environment.",
  whyItMatters:
    "Some tests need optional tools or particular platforms. A clear skip explains why a test was not run instead of reporting a misleading failure.",
  notes: `pytest can skip a test when it cannot run meaningfully in the current situation.

### Skip inside a test

~~~python
import pytest

def test_optional_feature():
    feature_available = False
    if not feature_available:
        pytest.skip("optional feature is not available")

    assert feature_available is True
~~~

Use this when the reason to skip is known only while the test runs.

### Skip with a condition

Use skipif when the condition can be checked before the test runs.

~~~python
import sys
import pytest

@pytest.mark.skipif(
    sys.platform == "win32",
    reason="This example is not supported on Windows",
)
def test_non_windows_path():
    assert sys.platform != "win32"
~~~

The reason appears in pytest's report and should explain the condition.

### Skip a whole module

~~~python
import pytest

pytestmark = pytest.mark.skipif(
    True,
    reason="This module needs an optional service",
)
~~~

A module-level marker applies to tests in that file.

### Use skips thoughtfully

A skip is not a way to make a failing test disappear. Keep the condition narrow and visible. If a test should run in every environment, investigate why it cannot run instead of adding a skip.

### The takeaway

Use pytest.skip when a test discovers at runtime that it cannot proceed. Use skipif for a known condition, and include a useful reason.`,
  handsOn: `Skip a test when an optional feature is unavailable.

### Step 1: Create tests/test_optional.py

~~~python
import sys
import pytest

@pytest.mark.skipif(
    sys.platform == "win32",
    reason="This example is for non-Windows platforms",
)
def test_platform_is_not_windows():
    assert sys.platform != "win32"

def test_basic_math_still_runs():
    assert 4 * 3 == 12
~~~

### Step 2: Run the tests

~~~bash
python -m pytest -v
~~~

On Windows, pytest reports the platform-specific test as skipped. The basic math test still runs.

### Deliverable

Keep the file. Explain why the skip reason matters and why skipping should not hide a failure.`,
  challenge: `Create two tests for a feature that is available only when an environment condition is met.

1. Use skipif for a condition known before the test runs
2. Include a clear reason
3. Add a separate test that uses pytest.skip after checking a runtime condition
4. Add one ordinary test that is never skipped
5. Run pytest in verbose mode and inspect the report

Do not skip a test merely because its assertion currently fails.`,
  proTips: [
    "Use skipif for a condition known before the test runs.",
    "Use pytest.skip when the condition is discovered during execution.",
    "Write a reason that tells the reader why the test did not run.",
    "Keep skip conditions narrow so required tests still execute.",
  ],
  commonMistakes: [
    {
      mistake: "Skipping a test just to hide a failure",
      fix: "Fix the failing behaviour or document a genuine environment limitation.",
    },
    {
      mistake: "Using skipif with no helpful reason",
      fix: "Add a reason that explains the condition clearly.",
    },
    {
      mistake: "Checking a runtime-only condition with an unsuitable import-time expression",
      fix: "Call pytest.skip inside the test after checking the condition.",
    },
    {
      mistake: "Applying a broad skip that disables unrelated tests",
      fix: "Use the narrowest condition and scope that fits the limitation.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Skip for a known platform condition",
      code: `import sys
import pytest

@pytest.mark.skipif(
    sys.platform == "win32",
    reason="Example is for non-Windows platforms",
)
def test_platform():
    assert sys.platform != "win32"`,
    },
    {
      language: "python",
      title: "Skip after a runtime check",
      code: `import pytest

def test_optional_capability():
    capability_available = False
    if not capability_available:
        pytest.skip("Optional capability is unavailable")
    assert capability_available`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Skip and Xfail",
      url: "https://docs.pytest.org/en/stable/how-to/skipping.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "skip", "testing"],
};

export default topic;
