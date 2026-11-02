import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "xfail",
  title: "Expected Failures with xfail",
  summary:
    "Mark a test as an expected failure while keeping the known issue visible in pytest's report.",
  whyItMatters:
    "A known defect should remain visible to the team. xfail records that the test is expected to fail without treating it as an ordinary passing test.",
  notes: `Use pytest.mark.xfail for a test that is expected to fail because of a known limitation or defect.

### Mark an expected failure

~~~python
import pytest

@pytest.mark.xfail(reason="Known issue: negative values are not supported")
def test_negative_input():
    assert -2 * 3 == -6
~~~

pytest reports this test as xfail when its assertion fails as expected.

### Understand the outcomes

- xfail: the marked test failed as expected
- xpass: the marked test passed even though it was expected to fail
- failure: an ordinary test failed

An xpass can be useful: it may mean the underlying defect has been fixed and the marker should be removed.

### Make unexpected passes fail the suite

~~~python
import pytest

@pytest.mark.xfail(
    reason="Known issue awaiting a fix",
    strict=True,
)
def test_known_issue():
    assert 2 + 2 == 5
~~~

With strict=True, a test that passes unexpectedly is treated as a failure. This helps the team notice when it is time to remove an outdated xfail.

### Use conditions carefully

An xfail can be conditional, but the condition should describe the specific environment or known limitation. Do not mark broad groups of tests xfail just to get a green report.

### The takeaway

Use xfail to document a known expected failure, give a useful reason, and consider strict=True so unexpected passes are noticed.`,
  handsOn: `Mark one known failing test as expected to fail.

### Step 1: Create tests/test_xfail.py

~~~python
import pytest

def test_normal_case():
    assert 3 * 4 == 12

@pytest.mark.xfail(
    reason="Known issue: this example has the wrong expected value",
    strict=True,
)
def test_known_issue():
    assert 3 * 4 == 11
~~~

### Step 2: Run pytest

~~~bash
python -m pytest -v
~~~

The normal test passes, and the known issue is reported as xfail.

### Step 3: Observe a strict unexpected pass

Temporarily change the expected value in test_known_issue to 12. Run pytest again and notice that strict=True makes the unexpected pass fail the suite. Restore the original assertion afterward.

### Deliverable

Keep the passing normal test and the expected-failure test. Explain the difference between xfail and skip.`,
  challenge: `Document one deliberately known issue in a test suite.

1. Add an ordinary passing test
2. Mark the known failing test with pytest.mark.xfail
3. Include a clear reason
4. Set strict=True and observe the result
5. Temporarily make the test pass and see how pytest reports the unexpected pass

Restore the expected-failure condition. Explain why xfail should not replace fixing a defect.`,
  proTips: [
    "Give every xfail a clear reason.",
    "Use strict=True when an unexpected pass should fail the suite.",
    "Review xfail markers when the known issue is fixed.",
    "Keep expected failures specific and visible.",
  ],
  commonMistakes: [
    {
      mistake: "Using xfail to avoid investigating an ordinary failure",
      fix: "Mark only a known limitation or defect with a clear reason.",
    },
    {
      mistake: "Leaving an xfail marker after the defect is fixed",
      fix: "Remove or update the marker when the test passes as intended.",
    },
    {
      mistake: "Ignoring an unexpected pass",
      fix: "Use strict=True when the suite should flag a test that starts passing.",
    },
    {
      mistake: "Marking unrelated tests as expected failures",
      fix: "Apply xfail only to the specific test affected by the known issue.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Mark a known failing test",
      code: `import pytest

@pytest.mark.xfail(reason="Known issue: negative input is unsupported")
def test_negative_input():
    assert -2 * 3 == -6`,
    },
    {
      language: "python",
      title: "Flag an unexpected pass",
      code: `import pytest

@pytest.mark.xfail(
    reason="Known issue awaiting a fix",
    strict=True,
)
def test_known_issue():
    assert 2 + 2 == 5`,
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
  tags: ["python", "pytest", "xfail", "testing"],
};

export default topic;
