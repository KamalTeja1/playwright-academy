import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-check",
  title: "Collecting Multiple Checks with pytest-check",
  summary:
    "Use pytest-check to report several assertion failures from one test before stopping.",
  whyItMatters:
    "When independent properties of one result are checked together, soft checks can show several problems in one run instead of stopping at the first assertion.",
  notes: `Python stops a test at the first failed assert. pytest-check provides check functions that record failures and let the test continue.

### Install the plugin

~~~bash
python -m pip install pytest-check
~~~

### Collect several checks

~~~python
from pytest_check import check

def test_user_record():
    user = {"name": "", "active": False, "role": "guest"}

    check.is_true(bool(user["name"]), "name should not be empty")
    check.is_true(user["active"], "user should be active")
    check.equal(user["role"], "tester")
~~~

Each check records whether its condition passed. The test reports collected failures after the checks finish.

### Keep checks related

Soft checks are useful when several independent properties of the same result should be inspected together. Use ordinary assert for most tests and when a later check depends on an earlier condition.

### Avoid unsafe follow-up access

A failed check does not stop execution. Do not use a value that may be missing or invalid after a soft check without guarding that access.

~~~python
from pytest_check import check

def test_record_has_name():
    record = {"name": "Asha"}
    check.is_in("name", record)

    if "name" in record:
        check.equal(record["name"], "Asha")
~~~

### The takeaway

Use pytest-check when collecting several independent failures is more helpful than stopping at the first one. Keep ordinary assert for focused checks and guard follow-up work that depends on a value.`,
  handsOn: `Use pytest-check to inspect several fields in one record.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-check
~~~

### Step 2: Create tests/test_soft_checks.py

~~~python
from pytest_check import check

def test_user_record():
    user = {"name": "Asha", "active": True, "role": "tester"}

    check.is_true(bool(user["name"]))
    check.is_true(user["active"])
    check.equal(user["role"], "tester")
~~~

### Step 3: Run pytest

~~~bash
python -m pytest
~~~

### Step 4: Observe collected failures

Temporarily change two expected conditions so they fail. Run pytest and inspect how both failures are reported. Restore the passing expectations.

### Deliverable

Keep the passing test. Explain when collecting multiple failures is helpful and when an ordinary assert is clearer.`,
  challenge: `Write one test that checks three independent fields in a fictional user record.

1. Install pytest-check
2. Use check functions for the three field expectations
3. Run the test once with all expectations passing
4. Temporarily cause two checks to fail and observe the report
5. Restore the passing test

Then explain why soft checks should not be used when later operations depend on a previous check being true.`,
  proTips: [
    "Use soft checks for independent expectations about the same result.",
    "Use ordinary assert for most focused test checks.",
    "Give checks useful messages when they improve diagnosis.",
    "Guard follow-up access because a failed check does not stop the test.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming a failed soft check stops test execution",
      fix: "Remember that pytest-check continues so it can report later checks.",
    },
    {
      mistake: "Using soft checks when later code depends on a successful earlier condition",
      fix: "Use assert or guard the dependent code before continuing.",
    },
    {
      mistake: "Using pytest-check without installing the plugin",
      fix: "Install pytest-check in the environment where pytest runs.",
    },
    {
      mistake: "Replacing every ordinary assertion with a soft check",
      fix: "Use soft checks only when collecting independent failures is useful.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Collect independent field failures",
      code: `from pytest_check import check

def test_user_fields():
    user = {"name": "Asha", "active": True, "role": "tester"}
    check.is_true(bool(user["name"]))
    check.is_true(user["active"])
    check.equal(user["role"], "tester")`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-check Documentation",
      url: "https://pytest-check.readthedocs.io/en/latest/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "assertions"],
};

export default topic;
