import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "flaky-tests",
  title: "Flaky Tests",
  summary:
    "A flaky test passes sometimes and fails sometimes, with no change in the code. Learn the causes and how Playwright helps you avoid them.",
  whyItMatters:
    "Flaky tests destroy trust. Once the team stops believing red results, real bugs slip through. This is the biggest enemy of automation.",
  notes: `A flaky test is **a test that gives different results on the same code**. Run it now, it passes. Run it again, it fails. Nothing changed.

Think of an auto meter that sometimes shows the right fare and sometimes jumps by itself. You would stop trusting it. Soon you would argue with the driver every trip. A flaky test does the same to a team. People say, "Just rerun it, it is always like that." Then one day a real bug hides behind that excuse.

### Why flaky tests are worse than no tests

With no test, you know you have no safety net. With a flaky test, you **think** you have one, but you do not.

- Teams waste hours rerunning builds
- Real failures get ignored
- Developers stop reading test reports
- Releases slow down

So a flaky test is not a small problem. Treat it as a bug in your test suite.

### The main causes

**1. Timing problems**

The test acts before the page is ready. A button has not appeared yet. Data is still loading. Sometimes the page is fast, sometimes slow. So the test passes and fails randomly.

Bad idea: a fixed sleep.

~~~python
page.wait_for_timeout(3000)
page.click("#pay")
~~~

Three seconds may be too short on a slow day and too long on a fast day.

**2. Shared state between tests**

Test A creates a user. Test B expects that user. If B runs first, it fails. If tests run in a different order, results change.

**3. External services**

Your test depends on a real payment gateway, an SMS provider or a third-party API. If that service is slow or down, your test fails, even though your app is fine.

**4. Unpredictable data**

The test expects the first product to be Masala tea. But today the first product is Green tea. Or the test uses today's date, and fails at midnight.

**5. Weak locators**

A locator that matches different elements on different runs, or depends on a generated class name, will fail sometimes.

**6. Environment problems**

A shared test server that others are also using. A slow network. A browser that runs out of memory.

### How Playwright fights flakiness

Playwright was designed with this in mind.

- **Auto-waiting**: before clicking, it waits until the element is visible, stable and enabled
- **Web-first assertions**: expect retries until the condition is true or time runs out
- **Isolated contexts**: every test starts with a fresh browser context, so cookies and storage do not leak
- **Good locators**: role, label and text locators match what users see
- **Traces**: a recorded trace shows exactly what happened in a failed run

~~~python
from playwright.sync_api import expect

page.get_by_role("button", name="Pay now").click()
expect(page.get_by_text("Payment successful")).to_be_visible()
~~~

No sleep needed. Playwright waits for the button, and then keeps checking for the message.

### Wait for real events

If you must wait, wait for something meaningful.

~~~python
with page.expect_response("**/api/orders") as info:
    page.get_by_role("button", name="Place order").click()
assert info.value.status == 201
~~~

### Fixing a flaky test: a routine

1. **Reproduce it.** Run the test many times in a row
2. **Read the trace.** See what the page looked like at the moment of failure
3. **Find the cause.** Timing, data, shared state, external service or locator?
4. **Fix the cause.** Do not just add a retry
5. **Prove it.** Run it again many times

~~~bash
pytest tests/test_checkout.py --count=20
~~~

This needs the pytest-repeat plugin. Ask your team before adding anything new.

### Retries: a bandage, not a cure

Playwright can retry failed tests. This helps keep a build green, but it can hide the problem. Use retries as a safety net while you fix the root cause. Track which tests needed retries and fix them first.

### Quarantine

If a test is flaky and you cannot fix it today, move it out of the main suite and mark it clearly. Then fix it soon. Do not leave it to rot, and do not let it block the whole team.

### Prevent it from the start

- Use unique test data for every run
- Make each test independent
- Mock external services in most tests
- Prefer role and label locators
- Avoid fixed sleeps

### The takeaway

A test you cannot trust is worse than no test. Find the real cause of every flaky failure, fix it, and keep your suite honest.`,
  handsOn: `Let's create a flaky test on purpose, then fix it.

### Step 1: Create a slow page

In your html-practice folder, create flaky.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Flaky Practice</title>
  </head>
  <body>
    <button id="load">Load message</button>
    <p id="result"></p>

    <script>
      document.getElementById("load").addEventListener("click", function () {
        var delay = 500 + Math.random() * 2500;
        setTimeout(function () {
          document.getElementById("result").textContent = "Hello from the server";
        }, delay);
      });
    </script>
  </body>
</html>
~~~

The message appears after a random delay of up to three seconds.

### Step 2: Write a flaky test

Write this in a Python file. Replace the path with your own:

~~~python
def test_flaky(page):
    page.goto("file:///workspaces/playwright-academy/html-practice/flaky.html")
    page.get_by_role("button", name="Load message").click()
    page.wait_for_timeout(1500)
    assert page.locator("#result").text_content() == "Hello from the server"
~~~

### Step 3: Run it several times

Run it ten times. Count the passes and failures. It should fail some of the time.

### Step 4: Fix it

Replace the sleep and the assertion with a web-first assertion:

~~~python
from playwright.sync_api import expect

def test_stable(page):
    page.goto("file:///workspaces/playwright-academy/html-practice/flaky.html")
    page.get_by_role("button", name="Load message").click()
    expect(page.locator("#result")).to_have_text("Hello from the server")
~~~

### Step 5: Run again

Run the fixed test ten times. It should pass every time.

### Deliverable

You made a flaky test, saw it fail randomly, fixed it with auto-waiting and proved the fix by running it ten times.`,
  challenge: `Look at this list of five flaky symptoms. For each one, name the likely cause from the topic and write the fix.

1. A test passes alone but fails when run with others
2. A test fails only at night, around midnight
3. A test fails when the payment sandbox is slow
4. A test clicks a button that sometimes is not on the page yet
5. A test fails when another tester uses the same server

Then:

- Write a rule for your team on fixed sleeps
- Explain why a retry alone is not a real fix
- Describe in five steps how you would investigate a flaky test using a Playwright trace

Finally, explain in your own words why a flaky suite is worse than a small stable one.`,
  proTips: [
    "Never use a fixed sleep to wait for the page. Use auto-waiting and web-first assertions.",
    "Make every test independent. It should create its own data.",
    "Mock slow or unreliable external services in most tests.",
    "Use traces to see exactly what happened in a failed run.",
    "Track which tests need retries and fix those first.",
  ],
  commonMistakes: [
    {
      mistake: "Adding a longer sleep when a test fails",
      fix: "Wait for the real condition, such as a visible element or a response, not for a fixed time.",
    },
    {
      mistake: "Using retries to hide flaky tests",
      fix: "Retries are a short-term safety net. Find and fix the root cause.",
    },
    {
      mistake: "Letting tests depend on each other",
      fix: "Each test should set up its own data and run in any order.",
    },
    {
      mistake: "Ignoring a test that fails 'sometimes'",
      fix: "Treat it as a bug in the suite. Reproduce it, read the trace and fix it.",
    },
    {
      mistake: "Using locators based on generated class names",
      fix: "Use role, label, text or test ID locators that stay stable.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Flaky: a fixed sleep",
      code: `page.get_by_role("button", name="Load message").click()
page.wait_for_timeout(1500)
assert page.locator("#result").text_content() == "Hello from the server"`,
    },
    {
      language: "python",
      title: "Stable: a web-first assertion",
      code: `from playwright.sync_api import expect

page.get_by_role("button", name="Load message").click()
expect(page.locator("#result")).to_have_text("Hello from the server")`,
    },
    {
      language: "python",
      title: "Wait for a real network event",
      code: `with page.expect_response("**/api/orders") as info:
    page.get_by_role("button", name="Place order").click()

assert info.value.status == 201`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Auto-waiting",
      url: "https://playwright.dev/python/docs/actionability",
    },
    {
      title: "Playwright — Trace viewer",
      url: "https://playwright.dev/python/docs/trace-viewer",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  tags: ["flaky-tests", "auto-waiting", "stability", "debugging", "automation-concepts"],
};

export default topic;