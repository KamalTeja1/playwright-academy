import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-rerunfailures",
  title: "Rerunning Failed Tests",
  summary:
    "Use pytest-rerunfailures to retry a failed test a limited number of times.",
  whyItMatters:
    "A temporary external issue can make a test fail intermittently. A limited rerun can help record that behaviour while you investigate the cause.",
  notes: `pytest-rerunfailures is a plugin that reruns tests that fail.

### Install the plugin

~~~bash
python -m pip install pytest-rerunfailures
~~~

### Set a run-wide limit

~~~bash
python -m pytest --reruns 2
~~~

This asks the plugin to rerun failed tests up to two times. The exact final result depends on whether a rerun passes and on the plugin's reporting options.

### Mark one test

~~~python
import pytest

@pytest.mark.flaky(reruns=2, reruns_delay=1)
def test_temporary_service_check():
    assert 2 + 3 == 5
~~~

The marker applies reruns to that test. The delay is in seconds.

### Reruns do not fix flakiness

A rerun can help diagnose or temporarily manage an intermittent failure. It does not explain why the test failed. Investigate race conditions, shared state, timing assumptions, and external dependencies.

Do not use reruns to make a consistently broken test appear reliable. Keep rerun counts limited, and record why the test needs them.

### Be careful with side effects

A rerun executes the test again. If the test creates data or performs an operation that is not safe to repeat, the retry may cause duplicate effects. Isolate the test data and check the operation's behaviour before enabling reruns.

### The takeaway

Use a small, documented rerun limit for known intermittent behaviour. Continue investigating the underlying cause instead of treating retries as a fix.`,
  handsOn: `Mark one test for a limited rerun.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-rerunfailures
~~~

### Step 2: Create tests/test_reruns.py

~~~python
import pytest

@pytest.mark.flaky(reruns=2, reruns_delay=1)
def test_example_check():
    assert 3 * 4 == 12

def test_another_check():
    assert "pytest".upper() == "PYTEST"
~~~

### Step 3: Run pytest

~~~bash
python -m pytest -v
~~~

The example test passes on its first attempt, so no rerun is needed.

### Deliverable

Keep the tests. Explain why rerunning a test is not a substitute for finding the cause of an intermittent failure.`,
  challenge: `Practise configuring a limited rerun without creating a flaky test.

1. Install pytest-rerunfailures
2. Add a deterministic passing test with a flaky marker and a small rerun count
3. Run pytest and confirm it passes on the first attempt
4. Describe which kinds of real test behaviour could make reruns risky
5. Explain how you would investigate a genuinely intermittent failure

Do not add randomness or deliberate failure just to force a rerun.`,
  proTips: [
    "Keep rerun counts small and explicit.",
    "Use reruns to gather information about intermittent failures, not to hide them.",
    "Check that repeated test actions are safe before enabling retries.",
    "Record why a test needs a rerun policy and revisit it.",
  ],
  commonMistakes: [
    {
      mistake: "Using reruns to hide a consistently failing test",
      fix: "Investigate the cause and keep the failure visible.",
    },
    {
      mistake: "Setting an excessive retry count",
      fix: "Use a small limit so the suite does not waste time repeating failures.",
    },
    {
      mistake: "Retrying a test that creates duplicate external data",
      fix: "Make test data isolated and check whether the operation is safe to repeat.",
    },
    {
      mistake: "Assuming a later passing attempt proves the test is reliable",
      fix: "Investigate timing, state, and external dependencies behind the intermittent result.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Set a limited rerun policy for one test",
      code: `import pytest

@pytest.mark.flaky(reruns=2, reruns_delay=1)
def test_example_check():
    assert 3 * 4 == 12`,
    },
    {
      language: "bash",
      title: "Set a run-wide rerun limit",
      code: `python -m pytest --reruns 2`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-rerunfailures Documentation",
      url: "https://pytest-rerunfailures.readthedocs.io/en/stable/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "reruns"],
};

export default topic;
