import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "manual-vs-automated-testing",
    title: "Manual vs automated testing",
    summary:
      "Two ways to test software — and why you need both, forever.",
    whyItMatters:
      "You're learning automated testing. But automation doesn't replace manual testing — it frees humans to do the interesting part. Understanding the balance is what separates good testers from great ones.",
    notes: `There are two ways to test software: **manually** and **with automation**.

Both are important. Both have strengths. Both have limits. Let's compare them honestly.

### Manual testing

**You** open the app, do things, and observe what happens. Like a user, but with more curiosity and a notebook.

Example: You open an e-commerce site. You:

1. Search for a product
2. Add to cart
3. Apply a coupon
4. Go to checkout
5. Enter payment details
6. Complete the order
7. Verify the order appears in your account

At each step, you watch for anything that looks wrong. If something breaks, you document it.

**Strengths:**

- Catches things automation can't — like "the page feels weird" or "the button is too small on mobile"
- Finds usability issues and design problems
- Great for exploratory testing — poking around looking for surprises
- No setup needed — just open the app and start
- Human intuition spots patterns

**Weaknesses:**

- Slow — a full regression pass might take days
- Expensive — you need humans, and humans cost money
- Not repeatable — two testers might test slightly differently
- Boring — testing the same login form 50 times a day is mind-numbing
- Error-prone — humans get tired, distracted, careless
- Doesn't scale — 500 test cases need 500 humans

### Automated testing

**Code** opens the app and does things. The code checks whether the result is correct.

Example, in Playwright:

~~~python
def test_successful_login(page):
    page.goto("https://example.com/login")
    page.get_by_label("Email").fill("user@test.com")
    page.get_by_label("Password").fill("correctpassword")
    page.get_by_role("button", name="Log in").click()
    expect(page).to_have_url("**/dashboard")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()
~~~

That runs in 3 seconds. You can run it 1000 times a day. Nobody has to be in front of a screen.

**Strengths:**

- Fast — 1000 tests in minutes
- Repeatable — same steps, same check, every time
- Free to re-run — one-time cost, infinite uses
- Runs anytime — can run on every code push, at night, on weekends
- Catches regressions — a bug that reappears gets caught automatically
- Scales — 1000 tests need one server, not 1000 people
- Frees humans — testers focus on interesting work, not repetition

**Weaknesses:**

- Slow to write — a good test suite takes weeks or months to build
- Fragile — a small UI change can break many tests
- Can't "notice" things — automation checks what you tell it, nothing more
- Maintenance burden — tests need updating as the app evolves
- Can't judge UX — "this feels wrong" is not something a script can report
- Initial setup is real work

### The truth nobody says out loud

Neither one wins. They solve different problems.

**Automation is great for:**

- Repetitive tests run every build
- Regression testing — making sure old bugs don't come back
- Data-heavy testing — e.g., login with 100 different users
- Cross-browser and cross-device checks
- Load and performance testing

**Manual testing is great for:**

- First-time exploration of a new feature
- Usability and accessibility checks
- Visual and design verification
- Ad-hoc testing when you don't know what to test yet
- Testing things automation can't reach (CAPTCHAs, physical devices)

### The 70-20-10 rule of thumb

A typical professional testing strategy might be:

- 70 percent of testing is automated (fast, repeatable, cheap)
- 20 percent is exploratory manual testing (finding new bugs)
- 10 percent is specialised testing (a11y audits, security testing, UX reviews)

The exact numbers vary. But no serious team relies on just one.

### The "test pyramid" you'll hear about

There's a famous diagram called the test pyramid:

- Bottom: many fast unit tests (testing functions in isolation)
- Middle: some integration tests (testing parts working together)
- Top: few E2E tests (testing the whole app from the user's perspective)

Playwright tests live at the top — the smallest number, but the most realistic.

The pyramid exists because E2E tests are slow and expensive to maintain. You write fewer of them, but they catch the big problems.

### What changes when you automate

Once you go from manual to automated, you'll notice:

- **You commit to a plan.** Automation assumes you know what to test. Manual testing lets you wander.
- **You write code.** You become a software engineer, not just a tester.
- **You think about flakiness.** Tests that pass sometimes and fail other times become your enemy.
- **You build infrastructure.** Test data, environments, CI pipelines. It's a real engineering job.
- **You get blamed less often for "manual" mistakes.** Automation doesn't forget.

### The future

Manual testers who don't learn automation will struggle. Automation testers who ignore manual testing will miss real bugs.

The best testers do both. That's you, starting today.

### The bottom line

Manual testing is about **judgment**. Automated testing is about **execution**.

You use judgment to decide what to test, what matters, and what's a bug.
You use automation to run those decisions 1000 times a day.

Playwright is your automation tool. But your judgment is what makes it useful.`,
    handsOn: `Compare the two approaches on a real flow.

### Step 1: Pick a simple flow

Open any website with a login or signup: Gmail, LinkedIn, Twitter, or any app.

### Step 2: Test it manually — and time yourself

Open a stopwatch. Perform this flow:

- Load the login page
- Enter an invalid email
- Click submit
- See the error message
- Correct the email, enter password
- Click submit
- Land on the dashboard

Write down how long it took in seconds.

### Step 3: Imagine automating it

Now imagine you had a Playwright script for this exact flow. It would:

- Load the page
- Fill the invalid email
- Click submit
- Verify the error appears
- Fill the correct email and password
- Click submit
- Verify the dashboard appears

The first time you write this script, it might take 30 minutes. But after that, it runs in 5 seconds. Every time. Any number of times. On any machine.

### Step 4: Compare

Write down:

- How long did the manual run take?
- How long would 100 manual runs take?
- How long would 100 automated runs take?

That gap is why automation exists.

### Deliverable

You performed a manual test with a stopwatch and calculated what automation would save. You now understand the "why" behind this entire course.`,
    challenge: `Design a testing strategy for a small app.

### The scenario

You're testing a to-do app. It has:

- Sign up
- Log in
- Add a task
- Mark a task complete
- Delete a task
- Filter tasks (all / active / complete)
- Log out

### Task

For each feature, decide: manual, automated, or both? Justify.

Example structure:

| Feature | Method | Why |
|---|---|---|
| Sign up | Automated | Runs on every build, tests many input combinations |
| Visual polish of sign-up page | Manual | Requires human judgment |
| Add a task | Automated | Simple and repetitive |
| Filter tasks | Automated | Combines into many test cases |
| Overall feel of the app | Manual | Requires human intuition |

### Reflection

Now imagine the app grows to 50 features. Would your strategy change? Why?

Write down your reasoning. This is exactly what a professional test lead does every sprint.`,
    proTips: [
      "Automate the repetitive and predictable. Save manual testing for the exploratory and judgment-heavy.",
      "Never automate a flow that changes every week. You'll spend all your time fixing tests.",
      "The first automated test is expensive to write. The 100th run is almost free.",
      "Manual testers who learn automation double their value. Automation testers who understand UX double theirs.",
      "If a test is failing every other run, it's flaky. Flaky tests are worse than no tests.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to automate everything",
        fix: "Some things are better tested manually — visual polish, exploratory testing, one-off scenarios.",
      },
      {
        mistake: "Automating unstable features",
        fix: "If the UI changes every sprint, automation is wasted effort. Wait until the feature stabilises.",
      },
      {
        mistake: "Thinking automation replaces manual testing",
        fix: "Automation replaces repetition. Manual testing still finds the bugs automation misses.",
      },
      {
        mistake: "Writing tests that only check 'page loads'",
        fix: "Every test should assert something meaningful. A test that always passes is a test that finds nothing.",
      },
      {
        mistake: "Assuming fast tests are good tests",
        fix: "A fast test that misses bugs is worse than a slow test that catches them. Speed matters only after correctness.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "The same login test — manual vs automated",
        code: `# MANUAL — you do these steps by hand every time
# 1. Open browser
# 2. Go to /login
# 3. Type email
# 4. Type password
# 5. Click submit
# 6. Check you landed on dashboard

# AUTOMATED — Playwright does it in 3 seconds
def test_login(page):
    page.goto("https://example.com/login")
    page.get_by_label("Email").fill("user@test.com")
    page.get_by_label("Password").fill("secret123")
    page.get_by_role("button", name="Log in").click()
    expect(page).to_have_url("**/dashboard")`,
      },
      {
        language: "text",
        title: "When to use which",
        code: `AUTOMATE
- Login with valid/invalid credentials
- Form validation with 50 different inputs
- Regression checks on every build
- Cross-browser checks
- API responses

TEST MANUALLY
- Overall app feel
- Visual design of new pages
- Exploratory testing of a new feature
- Accessibility review
- Edge cases that are hard to script`,
      },
    ],
    furtherReading: [
      {
        title: "Martin Fowler — The practical test pyramid",
        url: "https://martinfowler.com/articles/practical-test-pyramid.html",
      },
      {
        title: "Playwright — Why Playwright",
        url: "https://playwright.dev/python/docs/why-playwright",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "automation"],
  };

export default topic;
