import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "smoke-testing",
  title: "Smoke Testing",
  summary:
    "A quick check after a new build or deployment to see if the app is alive. If smoke fails, stop and roll back.",
  whyItMatters:
    "Running a full test suite on a broken build wastes hours. A smoke test tells you in minutes whether the build is worth testing at all.",
  notes: `Smoke testing is **a fast, shallow check that the most important things work**. It does not test everything. It only asks, "Is this build alive?"

The name comes from hardware. When engineers switched on a new circuit board, they watched for smoke. If smoke came out, they stopped at once. No point testing further.

Think of switching on a new ceiling fan after installation. You press the switch. Does it turn? Does it make a strange noise? You do not check every speed and every angle yet. If it does not even start, you call the electrician.

### When do you run it?

- After a new build is created
- After every deployment to a test or staging environment
- After a deployment to production, as a quick health check

### What does it cover?

A smoke test covers only the **critical paths**. These are the things that, if broken, make the app useless.

For a shopping app:

- The home page opens
- A user can log in
- Search returns results
- A product can be added to the cart
- The checkout page opens

For a banking app:

- Login works
- Account balance loads
- Money transfer page opens

Keep the list short. Ten to twenty checks is common.

### Smoke result: go or no-go

This is the key point.

- **Smoke passes**: the build is stable enough. Continue with deeper testing
- **Smoke fails**: the build is rejected. Send it back to developers, or roll back the deployment

~~~text
New build -> Smoke test -> Pass -> Continue with full testing
                       \\-> Fail -> Stop. Reject or roll back.
~~~

Rolling back means returning to the last good version, like restoring a previous save in a game.

### Smoke tests should be fast

If your smoke set takes an hour, nobody will run it. Aim for a few minutes at most. Fast feedback is the whole point.

### Smoke tests should be stable

A flaky smoke test is dangerous. It may reject a good build or approve a bad one. Make these the most reliable tests in your suite.

### Manual or automated?

Smoke testing started as a manual task. Today it is usually automated, because it repeats on every build. A good Playwright smoke suite can run in minutes after each deployment.

~~~python
import pytest
from playwright.sync_api import expect

@pytest.mark.smoke
def test_home_page_loads(page):
    page.goto("https://shop.example.com")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()

@pytest.mark.smoke
def test_login_works(page):
    page.goto("https://shop.example.com/login")
    page.get_by_label("Email").fill("smoke@example.com")
    page.get_by_label("Password").fill("Smoke@123")
    page.get_by_role("button", name="Log in").click()
    expect(page.get_by_text("My account")).to_be_visible()
~~~

You can then run only these:

~~~bash
pytest -m smoke
~~~

### Smoke vs other checks

- **Smoke**: broad and shallow. Is the build alive?
- **Sanity**: narrow and deep. Is this one fix or change working?
- **Regression**: broad and deep. Does old behaviour still work?

We cover sanity and regression next.

### Smoke in production

After a live release, a tiny smoke test can check the real site. Use a test account and avoid actions that create real orders or charge real money. Many teams use read-only checks here.

### Good habits

- Keep the list short and meaningful
- Run it automatically after every deployment
- Fail fast and loudly, with a clear message to the team
- Review it every few months

### The takeaway

Smoke testing saves the team from wasting time on a broken build. A few minutes of checking can save hours of confusion.`,
  handsOn: `Let's build a tiny smoke suite.

### Step 1: Choose a site

Pick a practice site or a public demo shop that allows testing.

### Step 2: List five smoke checks

Write the five most critical things a user does. For example:

1. Open the home page
2. Open the login page
3. Search for a product
4. Open a product page
5. Open the cart page

### Step 3: Write the Playwright tests

Write each as a very short test. Check only that the page opens and one key element is visible.

~~~python
import pytest
from playwright.sync_api import expect

@pytest.mark.smoke
def test_home_page_loads(page):
    page.goto("https://example.com")
    expect(page.get_by_role("heading").first).to_be_visible()
~~~

### Step 4: Run only smoke tests

~~~bash
pytest -m smoke
~~~

If pytest warns about an unknown marker, ask your team before changing configuration.

### Step 5: Time it

Note how long the five tests take. Is it under two minutes?

### Step 6: Write the go or no-go rule

Write one sentence: what will your team do if one smoke test fails?

### Deliverable

You have five smoke checks, five short Playwright tests, a timing note and a clear go or no-go rule.`,
  challenge: `You test a ticket booking app that deploys three times a day.

Do these:

1. List twelve possible checks, and choose the eight that belong in the smoke set
2. Explain why you left four out
3. Write the order in which the smoke tests should run, with the most critical first
4. Write the rule for what happens when one smoke test fails
5. Write Playwright test names for all eight checks, with a smoke mark

Then answer:

- Why must a smoke suite be fast?
- Why is a flaky smoke test dangerous?
- How would a production smoke test differ from a staging one?

Finish with one line on how smoke testing differs from regression testing.`,
  proTips: [
    "Keep the smoke set small. Ten to twenty checks is plenty.",
    "Run it automatically after every deployment.",
    "Make smoke tests the most stable tests you have.",
    "Put a clear go or no-go rule in writing.",
    "Use read-only checks for production smoke tests.",
  ],
  commonMistakes: [
    {
      mistake: "Letting the smoke suite grow into a full regression suite",
      fix: "Keep it small and focused on critical paths. Move extra checks to regression.",
    },
    {
      mistake: "Continuing full testing after smoke fails",
      fix: "Stop, reject the build or roll back, and tell the developers.",
    },
    {
      mistake: "Including flaky tests in the smoke set",
      fix: "Fix or remove them. A smoke suite must be reliable.",
    },
    {
      mistake: "Running smoke tests only occasionally",
      fix: "Run them after every build or deployment, automatically.",
    },
    {
      mistake: "Creating real orders in a production smoke test",
      fix: "Use read-only checks or a clearly marked test account that does not charge money.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Smoke test decision",
      code: `New build -> Smoke test
   Pass -> Continue with deeper testing
   Fail -> Stop. Reject the build or roll back.`,
    },
    {
      language: "python",
      title: "Marked smoke tests",
      code: `import pytest
from playwright.sync_api import expect

@pytest.mark.smoke
def test_home_page_loads(page):
    page.goto("https://shop.example.com")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()

@pytest.mark.smoke
def test_login_page_opens(page):
    page.goto("https://shop.example.com/login")
    expect(page.get_by_label("Email")).to_be_visible()`,
    },
    {
      language: "bash",
      title: "Run only smoke tests",
      code: `pytest -m smoke`,
    },
  ],
  furtherReading: [
    {
      title: "Pytest — Markers",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
    {
      title: "Playwright — Pytest plugin",
      url: "https://playwright.dev/python/docs/test-runners",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["smoke-testing", "build-verification", "deployment", "automation-concepts"],
};

export default topic;