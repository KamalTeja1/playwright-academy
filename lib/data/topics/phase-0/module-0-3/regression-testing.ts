import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "regression-testing",
  title: "Regression Testing",
  summary:
    "The safety net that runs on every release. It proves that old, working features still work after new changes.",
  whyItMatters:
    "New code often breaks old features without anyone noticing. Regression testing catches that before your users do.",
  notes: `Regression testing means **checking that things which worked before still work now**. The word regression means going backwards. We test to make sure the app has not gone backwards.

Think of renovating one room in your house. The painter finishes the bedroom. But when you switch on the hall light, it does not work. The painter touched a wire by mistake. Nobody asked him to touch the hall. That is a regression.

### Why regressions happen

Code is connected in many hidden ways. A change in one place can disturb another.

- A developer changes how discounts are calculated, and the invoice total goes wrong
- A new field is added to the sign-up form, and the mobile layout breaks
- A library is upgraded, and a date picker stops working

The developer did not mean to break anything. Nobody can remember every connection. So we need a safety net.

### What a regression suite is

A regression suite is a **collection of tests that cover the existing, important behaviour** of the app. You run it after changes to see if anything broke.

It is broad and deep. It covers many features and checks them properly.

~~~text
Smoke       broad, shallow     Is the build alive?
Sanity      narrow, deeper     Is this one change working?
Regression  broad, deep        Does old behaviour still work?
~~~

### When to run it

- Before every release
- Nightly, on the latest code
- After big changes, such as a library upgrade
- After a bug fix, for the area around it

Fast parts can run on every pull request. The slow, full run can go overnight.

### Why automation fits regression

Regression is repeated again and again. The steps are known. The results are clear. This is the best place for automation.

Imagine 400 test cases. By hand, that is several days of tiring, boring work, and a tired tester misses things. A Playwright suite can run them on several browsers while the team sleeps.

### Where tests come from

1. Important user journeys: login, search, buy, pay
2. Every bug that was fixed. Each fixed bug gets a test so it cannot come back
3. High-risk areas, such as payments and security
4. Features that break often

~~~python
from playwright.sync_api import expect

def test_cart_total_after_coupon_removed(page):
    page.goto("https://shop.example.com/cart")
    page.get_by_label("Coupon").fill("SAVE10")
    page.get_by_role("button", name="Apply").click()
    page.get_by_role("button", name="Remove coupon").click()
    expect(page.get_by_test_id("cart-total")).to_have_text("Rs. 500")
~~~

This test exists because a bug once appeared here. Now it guards that spot forever.

### Keeping the suite healthy

A regression suite is like a garden. It needs weeding.

- **Remove dead tests** for features that no longer exist
- **Fix flaky tests** fast, or the team will stop trusting results
- **Keep tests independent** so they can run in any order
- **Keep it fast.** Run tests in parallel and drop duplicates
- **Review it** every few months

### Selecting what to run

Running everything every time is slow. Many teams pick a subset:

- **Full regression**: before a major release
- **Risk-based subset**: tests for the areas touched by the change
- **Smoke set**: after every deployment

You can mark tests in pytest and choose groups.

~~~bash
pytest -m regression
pytest -m "regression and payments"
~~~

### Retest vs regression

These are different. Retesting checks a specific failed test or bug after the fix. Regression checks that other things were not harmed. Both are needed.

### Reading the results

When a regression test fails, ask: is this a real regression, an expected change or a flaky test?

- Real regression: report the bug
- Expected change: update the test, with a note on why
- Flaky: fix the test

### The takeaway

Regression testing is the net under the trapeze. You hope never to fall, but you sleep better knowing it is there. Automate it, grow it with every bug you fix, and keep it clean.`,
  handsOn: `Let's build a tiny regression suite.

### Step 1: Pick a small app

Use any practice site with login, search and a cart. Or use the sanity.html page you made earlier.

### Step 2: List regression candidates

Write ten behaviours that must keep working. For example, login works, wrong password shows an error, search returns results, add to cart updates the count.

### Step 3: Add bug-based tests

Think of two bugs that could appear, such as a wrong total with quantity 3. Add one test for each.

### Step 4: Write the tests

Write four Playwright tests from your list. Mark them like this:

~~~python
import pytest
from playwright.sync_api import expect

@pytest.mark.regression
def test_total_for_quantity_three(page):
    page.goto("file:///workspaces/playwright-academy/html-practice/sanity.html")
    page.get_by_label("Quantity").fill("3")
    page.get_by_role("button", name="Calculate").click()
    expect(page.locator("#total")).to_have_text("1500")
~~~

### Step 5: Run them

~~~bash
pytest -m regression
~~~

If pytest warns about an unknown marker, ask your team before changing configuration.

### Step 6: Simulate a regression

Edit the page code so the total is wrong. Run the suite. Watch it fail. Then undo your change.

### Deliverable

You have a list of ten candidates, four regression tests, one failing run caused by a planted bug and a clean run after the fix.`,
  challenge: `You maintain the regression suite for a ticket booking app with 300 tests. The full run takes six hours.

Prepare a plan:

1. Give four ways to make the suite faster without losing coverage
2. Decide which tests run on every pull request, which run nightly and which run before release
3. Name three types of tests you would remove
4. Explain how each fixed bug should add to the suite
5. Describe what you would do if three tests fail after a new release

Then explain in your own words the difference between retesting and regression testing, and between sanity and regression testing.

Finish with one paragraph on why regression suites need regular cleaning.`,
  proTips: [
    "Add a test for every important bug you see fixed.",
    "Split the suite into fast and slow groups. Run the fast group often.",
    "Keep tests independent so they can run in parallel.",
    "Remove tests for features that no longer exist.",
    "When a test fails, decide if it is a real bug, an expected change or flakiness.",
  ],
  commonMistakes: [
    {
      mistake: "Running only new feature tests before release",
      fix: "Run regression too. New code often breaks old features.",
    },
    {
      mistake: "Letting the suite grow without cleaning",
      fix: "Remove dead and duplicate tests. Review the suite every few months.",
    },
    {
      mistake: "Ignoring flaky tests in the suite",
      fix: "Fix them quickly. A suite that cries wolf loses the team's trust.",
    },
    {
      mistake: "Confusing retesting with regression testing",
      fix: "Retesting checks one fixed bug. Regression checks that other things still work.",
    },
    {
      mistake: "Not adding tests for fixed bugs",
      fix: "Every important fixed bug should leave behind a test that guards it.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Smoke, sanity and regression",
      code: `Smoke       broad, shallow     Is the build alive?
Sanity      narrow, deeper     Is this one change working?
Regression  broad, deep        Does old behaviour still work?`,
    },
    {
      language: "python",
      title: "A regression test born from a bug",
      code: `import pytest
from playwright.sync_api import expect

@pytest.mark.regression
def test_cart_total_after_coupon_removed(page):
    page.goto("https://shop.example.com/cart")
    page.get_by_label("Coupon").fill("SAVE10")
    page.get_by_role("button", name="Apply").click()
    page.get_by_role("button", name="Remove coupon").click()
    expect(page.get_by_test_id("cart-total")).to_have_text("Rs. 500")`,
    },
    {
      language: "bash",
      title: "Run groups of tests",
      code: `pytest -m regression
pytest -m "regression and payments"`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Parallelism",
      url: "https://playwright.dev/python/docs/test-parallel",
    },
    {
      title: "Pytest — Markers",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["regression-testing", "test-suite", "safety-net", "automation-concepts"],
};

export default topic;