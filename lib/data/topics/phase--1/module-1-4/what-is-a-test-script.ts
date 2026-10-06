import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-a-test-script",
    title: "What is a test script?",
    summary:
      "The actual code that tests your app — what it looks like and how it runs.",
    whyItMatters:
      "You've heard 'test script' a hundred times. Now you'll see exactly what one is, what it looks like, and how it runs. You're about to write your first one.",
    notes: `A **test script** is code that checks whether an app works correctly. You write it once. It runs as many times as you want. It tells you pass or fail, every time.

That's it. Simple definition. But let's look at what a test script actually contains.

### The anatomy of a test script

Every test script has four parts:

**1. Setup** — get the app ready

Open the browser, navigate to a URL, log in if needed, prepare test data. This happens before the actual test.

**2. Action** — do something

Click a button. Fill a form. Submit a search. Interact with the app like a user would.

**3. Assertion** — check the result

Did the right thing happen? Is the expected text on the page? Did the URL change? Did the data save?

**4. Teardown** — clean up

Close the browser, log out, delete test data. Optional for simple tests.

### A concrete example

Here's a Playwright test script:

~~~python
def test_login_with_valid_credentials(page):
    # 1. SETUP
    page.goto("https://example.com/login")

    # 2. ACTIONS
    page.get_by_label("Email").fill("user@test.com")
    page.get_by_label("Password").fill("secret123")
    page.get_by_role("button", name="Log in").click()

    # 3. ASSERTIONS
    expect(page).to_have_url("**/dashboard")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()
~~~

That's a real test script. It:

- Opens a login page
- Fills the email and password
- Clicks login
- Checks that the dashboard loaded
- Checks that a welcome message appeared

When you run it, either it passes (all assertions hold) or it fails (one assertion fails and shows you where).

### What a passing test looks like

When the test runs successfully, you see something like:

~~~text
test_login_with_valid_credentials PASSED    [100%]
~~~

Or with more detail:

~~~text
✓ test_login_with_valid_credentials (3.2s)
~~~

Green checkmark. 3.2 seconds. Done.

### What a failing test looks like

When an assertion fails, you get a clear error:

~~~text
test_login_with_valid_credentials FAILED

Expected: URL to be "**/dashboard"
Received: URL is "https://example.com/login"

Error occurred on line 6:
    expect(page).to_have_url("**/dashboard")
~~~

Playwright tells you:

- What you expected
- What actually happened
- Where in the code the failure was

If you set up tracing, you also get a full video recording of the failure. You can watch the browser as it happened.

### Types of test scripts

Test scripts come in different flavours:

**Positive tests** — check that correct behaviour works
Example: login with valid credentials succeeds

**Negative tests** — check that incorrect behaviour is handled well
Example: login with wrong password shows an error

**Boundary tests** — check behaviour at the edges
Example: name field accepts 1 character but rejects 101 characters

**Edge case tests** — check unusual scenarios
Example: password with emoji, email with plus sign, name with non-Latin characters

A good suite has all four types. A weak suite only has positive tests.

### How a test script is different from a program

A regular program does something. A test script checks something.

Regular program: "Add these two numbers and print the result."

Test script: "Check that adding 2 and 3 gives 5. If not, fail loudly."

The purpose is different. A program produces output. A test script verifies correctness.

### How test scripts run

**Locally:** You run them on your computer. Fast feedback. Used while developing.

**In CI:** They run automatically whenever code is pushed. Nobody's watching. If they fail, the developer is notified.

**On a schedule:** Many teams run the full test suite nightly. Catches problems that only appear over time.

**On demand:** Sometimes a QA person runs a specific test to verify a fix.

Playwright tests work in all these modes. Same script, different triggers.

### What makes a good test script

**Focused** — one script tests one thing. Not five things.

**Clear** — anyone reading it can understand what it does.

**Fast** — takes seconds, not minutes.

**Reliable** — passes when it should, fails when it should. No flakiness.

**Independent** — doesn't depend on other tests. Can run in any order.

**Meaningful** — checks something that actually matters.

### The test script lifecycle

1. **Write** — you create the script
2. **Run locally** — check it passes on your machine
3. **Commit to Git** — add it to the project
4. **Run in CI** — runs automatically on every push
5. **Maintain** — update when the app changes
6. **Retire** — delete when it no longer matters

Most test scripts live for months or years. Some become obsolete. Keeping the suite healthy means writing new tests and removing old ones.

### The naming convention

Most projects name test scripts following conventions:

- test_login.py
- test_checkout.py
- login_test.py
- LoginTest.java

The exact pattern depends on the language and framework. Pytest expects files starting with test_. Playwright Test expects files ending in .spec.ts.

Follow the convention. It's how the runner finds your tests automatically.

### Your first test script

You'll write it soon. In Phase 3 you'll write your first real Playwright test. For now, just remember the four parts: setup, action, assertion, teardown.

Every test script, from the simplest to the most complex, follows this pattern.`,
    handsOn: `Read real test scripts and identify their parts.

### Step 1: Open the Playwright documentation

Go to playwright.dev and find the introductory examples. You'll see a small test script.

### Step 2: Identify the four parts

For the example script, label:

- Setup — what gets the page ready?
- Actions — what does the script do?
- Assertions — what does it check?
- Teardown — what cleanup happens?

### Step 3: Write your own plan

Don't write code yet. Just describe a test in plain English.

Pick a simple flow: "logging in with an incorrect password should show an error."

Write down:

- Setup: ___
- Actions: ___
- Assertions: ___
- Teardown: ___

### Step 4: Compare with a friend

If you have someone to compare with, do it. Different testers plan tests differently. There's no single right answer.

### Deliverable

You identified the four parts of a test script in a real example and wrote your own test plan in plain English.`,
    challenge: `Write a test script plan without writing any code.

### The scenario

You're testing a search feature on an e-commerce site.

Requirements:
- Users can search for a product by name
- Results show matching products
- If no results, show "No products found"
- Search with empty input shows a validation error

### Task

Write four separate test plans (setup, actions, assertions, teardown) — one for each requirement.

Example for requirement 1:

Test: search_returns_matching_products

- Setup: Navigate to homepage
- Actions: Type "shoes" in search box, press Enter
- Assertions: At least one result with "shoes" appears; result count > 0
- Teardown: None

### Now write plans for the other 3

Requirement 2: results show matching products

Requirement 3: no results shows "No products found"

Requirement 4: empty input shows validation error

### Reflection

You now have a test plan document. The next step is turning each plan into code.

This is how professional testers work: think first, code second. The plan is 80 percent of the work.`,
    proTips: [
      "Name tests descriptively: 'test_login_with_valid_credentials' not 'test1'.",
      "One test = one clear assertion (or a small group of related assertions).",
      "Test names are documentation. When a test fails, the name tells you what broke.",
      "Independent tests can run in any order. Never depend on other tests' side effects.",
      "Write the test name before writing the code. It forces you to be clear about what you're testing.",
    ],
    commonMistakes: [
      {
        mistake: "Testing 10 things in one test script",
        fix: "Split into multiple tests. Each test should test one thing. Failures become obvious.",
      },
      {
        mistake: "Not asserting anything meaningful",
        fix: "A test that only opens a page and does nothing is useless. Every test must check something.",
      },
      {
        mistake: "Making tests depend on each other",
        fix: "Tests should run in any order. Each test sets up its own state.",
      },
      {
        mistake: "Forgetting teardown",
        fix: "If you create data in a test, clean it up. Otherwise, later tests break.",
      },
      {
        mistake: "Writing tests that always pass",
        fix: "If a test never fails, it's probably not testing anything real. Assertions must be specific.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Anatomy of a Playwright test",
        code: `def test_login_with_valid_credentials(page):
    # SETUP
    page.goto("https://example.com/login")

    # ACTIONS
    page.get_by_label("Email").fill("user@test.com")
    page.get_by_label("Password").fill("secret123")
    page.get_by_role("button", name="Log in").click()

    # ASSERTIONS
    expect(page).to_have_url("**/dashboard")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()

    # TEARDOWN (optional — Playwright closes the page automatically)`,
      },
      {
        language: "python",
        title: "A negative test",
        code: `def test_login_with_invalid_password(page):
    page.goto("https://example.com/login")

    page.get_by_label("Email").fill("user@test.com")
    page.get_by_label("Password").fill("wrongpassword")
    page.get_by_role("button", name="Log in").click()

    # Expect an error, not a redirect
    expect(page.get_by_text("Invalid credentials")).to_be_visible()
    expect(page).to_have_url("**/login")`,
      },
      {
        language: "text",
        title: "The four parts of any test",
        code: `1. SETUP     — Get the app ready
2. ACTIONS   — Do something
3. ASSERTIONS — Check the result
4. TEARDOWN  — Clean up

Every test, in every framework, follows this pattern.`,
      },
    ],
    furtherReading: [
      {
        title: "Playwright — Writing tests",
        url: "https://playwright.dev/python/docs/writing-tests",
      },
      {
        title: "Pytest — Test writing basics",
        url: "https://docs.pytest.org/en/stable/getting-started.html",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "scripts"],
  };

export default topic;
