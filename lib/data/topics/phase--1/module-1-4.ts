import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "what-is-a-bug": {
    slug: "what-is-a-bug",
    title: "What is a bug?",
    summary:
      "The plain-English definition of a bug, with examples from apps you use every day.",
    whyItMatters:
      "You can't test without knowing what you're hunting. This topic teaches you to spot bugs in the wild — a skill that pays off forever.",
    notes: `A **bug** is when software does something it wasn't supposed to do.

That's the simplest definition. But bugs are more interesting than that. Let's break down what they actually look like.

### The three flavours of bugs

**1. Crashes**

The app stops working. You see an error, a blank screen, or it just freezes.

Example: You click "Pay Now" and the app closes. Nothing was charged. Nothing was processed. Just dead.

These are the easiest bugs to spot. Users report them immediately.

**2. Wrong behaviour**

The app works, but not the way it's supposed to.

Example: You order 2 items on Swiggy. The bill shows 3. Or the address on the receipt is your old one.

These bugs are subtle. Users might not notice until it costs them something.

**3. Bad experience**

The app works and does the right thing, but the user experience is painful.

Example: The login page takes 45 seconds to load. Or the Save button is hidden behind an ad. Or the checkout flow has 14 steps.

These are the hardest bugs to catch. Nothing is "broken" — but the user is unhappy.

### Where bugs come from

Bugs don't appear out of nowhere. They come from:

- **Misunderstandings** — the developer built the wrong thing because the requirement was unclear
- **Typos** — a wrong variable, a wrong number, a wrong character
- **Edge cases** — code works for 99 percent of users, breaks for the 1 percent
- **Assumptions** — "Users will always enter a valid email." They won't.
- **Integrations** — your code works, but the third-party API changed
- **Timing** — two operations complete in the wrong order under load
- **Forgetting** — a feature was added but not tested everywhere

Every one of these is a chance for a bug to slip through.

### Real bugs, real consequences

**Example 1 — the NASA Mars Climate Orbiter (1999)**

The spacecraft was lost because one team used metric units and another used imperial. The software did exactly what it was told — but it was told the wrong thing. Cost: 125 million dollars.

**Example 2 — the Knight Capital trading bug (2012)**

A software update released code that executed millions of unintended stock trades in 45 minutes. Cost: 440 million dollars. The company nearly went bankrupt.

**Example 3 — the Therac-25 radiation machine (1980s)**

A race condition in the software caused six patients to receive massive radiation overdoses. Three died. This case is still taught in every software safety course.

Not every bug is catastrophic. But every bug is an opportunity for a company to lose money, customers, or reputation.

### The bug lifecycle

When a bug is found, it goes through a lifecycle:

1. **Reported** — someone describes the bug
2. **Triaged** — a team decides how serious it is
3. **Assigned** — a developer is given the task
4. **Fixed** — the developer makes the change
5. **Verified** — a tester confirms the fix works
6. **Closed** — the bug is done

Some bugs get reopened if the fix doesn't work. Some get marked "won't fix" if the cost isn't worth it.

### What a good bug report looks like

A good bug report has:

- **Title** — one line describing the bug
- **Steps to reproduce** — exactly how to trigger it
- **Expected result** — what should have happened
- **Actual result** — what actually happened
- **Environment** — what browser, OS, version
- **Evidence** — screenshot, video, error log

The goal: someone else should be able to reproduce the bug in five minutes using only your report.

Bad report: "Login doesn't work."

Good report: "On the login page, entering a valid email and password shows 'Invalid credentials' error. Expected: user is logged in and redirected to /dashboard. Environment: Chrome 121, macOS 14. Screenshot attached."

The second report takes 30 seconds longer to write and saves hours of developer confusion.

### Your role as a tester

You are the last line of defence. The developer writes the code. You catch what they missed.

The best testers think like users who are in a hurry, distracted, or trying to break things on purpose. Because those are exactly the users who'll find the bugs after release.

### Why this matters

Every hour you spend finding bugs before release saves a company:

- Money — bug fixes in production cost 10 to 100 times more
- Reputation — users forgive mistakes, but not repeat offenders
- Time — developers spend hours on firefighting instead of building

Testing is not the boring part of software. It's the part that keeps the lights on.`,
    handsOn: `Let's find some real bugs.

### Step 1: Think of an app you use daily

Pick one: WhatsApp, Instagram, Swiggy, Google Maps, PhonePe, or anything you open daily.

### Step 2: Recall bugs you've personally seen

Write down 3 bugs you remember from that app. For each:

- What happened?
- What should have happened?
- How did it affect you?

Example:
- App: WhatsApp
- Bug: sent a message but it stayed on "sending" for 10 minutes
- Expected: message delivered within seconds
- Effect: contact didn't see the message in time

### Step 3: Classify each bug

For each bug you wrote, decide:

- Is it a crash? (app stopped working)
- Is it wrong behaviour? (did the wrong thing)
- Is it bad experience? (annoying but functional)

### Step 4: Search online for recent bugs

Search "recent software bugs" or "biggest bugs 2024". Read one real news article about a software failure.

Note: what happened, what it cost, why it wasn't caught.

### Deliverable

You documented 3 real bugs from an app you use, classified each, and read about one real-world failure. You now think about bugs the way a tester does.`,
    challenge: `Write a professional bug report.

### Task

Imagine you found this bug: You open an e-commerce app, add a shirt to cart, apply a 10 percent discount code, and the discount applies to only part of the total — not all of it.

Write a full bug report with:

1. **Title** — one clear line
2. **Environment** — what browser, OS, device
3. **Steps to reproduce** — numbered, exact
4. **Expected result** — what should have happened
5. **Actual result** — what actually happened
6. **Severity** — critical, major, minor, trivial
7. **Priority** — high, medium, low
8. **Suggested fix** — if you can guess

### Bonus

Now imagine the bug is found by a user on a Friday evening, not by a tester. What changes? Where would you file it? Who would you notify?

Real teams handle bugs differently depending on when they're found and by whom. Learning this distinction is a career skill.`,
    proTips: [
      "Bugs are not failures. They're information. Every bug found is a bug prevented from reaching a user.",
      "A vague bug report is worse than no report. Always include steps, expected, actual, evidence.",
      "Severity (how bad) and priority (how urgent) are different. A typo in the CEO's name on the homepage is minor severity but high priority.",
      "Edge cases are where most bugs hide. Test with empty inputs, huge inputs, special characters, and weird timing.",
      "The best bug reports reproduce in 5 minutes. If yours takes longer, simplify it.",
    ],
    commonMistakes: [
      {
        mistake: "Reporting a bug without steps to reproduce",
        fix: "Always include exact steps: what you clicked, what you typed, in what order.",
      },
      {
        mistake: "Confusing severity with priority",
        fix: "Severity = impact on users. Priority = urgency to fix. A cosmetic bug on the homepage can be high priority.",
      },
      {
        mistake: "Blaming developers when you find bugs",
        fix: "Bugs are shared problems. Frame reports as findings, not accusations. Teamwork beats blame.",
      },
      {
        mistake: "Assuming a bug is unreproducible if you can't reproduce it in one try",
        fix: "Try different browsers, different data, different timing. Reproduce before reporting.",
      },
      {
        mistake: "Thinking 'it works on my machine' means there's no bug",
        fix: "Environments differ. If it fails for one user, it's a real bug. Reproduce the user's environment.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Anatomy of a bug report",
        code: `TITLE
Discount code applies to only part of order total

ENVIRONMENT
Chrome 121, macOS 14, iPhone 15 in responsive mode

STEPS TO REPRODUCE
1. Add a shirt (Rs 500) to cart
2. Add shoes (Rs 1000) to cart
3. Apply discount code SAVE10 (10 percent off)
4. Click "Proceed to checkout"

EXPECTED
Discount of Rs 150 applied, total Rs 1350

ACTUAL
Discount of Rs 50 applied (only on shirt), total Rs 1450

SEVERITY
Major — affects payment amount

PRIORITY
High — affects revenue`,
      },
    ],
    furtherReading: [
      {
        title: "Atlassian — How to write a good bug report",
        url: "https://www.atlassian.com/software/jira/guides/use-cases/bug-reporting",
      },
      {
        title: "Software Testing Help — What is a bug?",
        url: "https://www.softwaretestinghelp.com/what-is-a-bug/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "bugs"],
  },

  "manual-vs-automated-testing": {
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
  },

  "why-companies-automate": {
    slug: "why-companies-automate",
    title: "Why do companies automate tests?",
    summary:
      "The business case for automation — money, speed, and sleep.",
    whyItMatters:
      "Understanding the business value makes you more than a code writer. You'll be the person who knows why this matters, not just how to do it.",
    notes: `You're learning to write Playwright tests. But why do companies invest in test automation at all? What's the return on investment?

Let's look at the business case, in plain numbers.

### The cost of a bug

A bug is never just a bug. Every bug has a cost. That cost depends on **when** you find it.

**Found during development:** cost is small. A developer fixes it in 10 minutes. Maybe 30 minutes if it's tricky.

**Found during QA:** cost is moderate. A tester writes a report. A developer context-switches to fix it. The fix is retested. Maybe 2 hours total.

**Found in production:** cost is huge. Users are affected. Support tickets flood in. An emergency fix is deployed. Post-mortems happen. Could be days of work and reputation damage.

Rule of thumb: a bug in production costs **10 to 100 times more** than the same bug caught during testing. This isn't marketing fluff — it's a well-established fact in software engineering.

### The math that convinces management

Imagine a company with:

- 500 test cases
- A release every two weeks
- Each test takes 3 minutes to run manually
- You have 3 QA engineers

Running 500 tests manually takes 25 hours. With 3 engineers working 8 hours a day, that's 3 days of work per release.

Now multiply by 26 releases per year. That's roughly 78 days of pure manual regression testing per year. For a team of 3, that's 234 person-days.

Now imagine automating those 500 tests. They run in 30 minutes total, on every code push, with no humans involved.

The first automation project takes maybe 3 months to build. After that, it runs thousands of times a year. The ROI is dramatic.

### The five real reasons companies automate

**1. Speed**

Modern teams release daily or multiple times a day. Manual regression takes days. Automation takes minutes. Without automation, fast releases are impossible.

**2. Consistency**

A human tests the same login form slightly differently each time. Sometimes they forget a step. Sometimes they're tired and skip a check. Automation runs the exact same steps every time.

**3. Coverage**

A human can only test so many combinations. "Login with 50 different emails"? Tedious manually. Trivial to automate.

**4. Confidence**

Engineers deploy changes without fear because they know a safety net will catch problems. This changes the team's entire culture — from cautious and slow to fast and confident.

**5. Cost at scale**

Manual testing grows linearly with the number of releases. Automated testing scales near zero. Once built, the marginal cost of another run is essentially free.

### What "shift-left" means

You'll hear the phrase **shift-left** in every engineering team.

Left refers to the timeline of software development:

Idea → Design → Code → Test → Deploy → Operate

Traditionally, testing happens late (right side of the arrow). Bugs are found late, cost a lot, and slow down releases.

Shift-left means moving testing **earlier** in the pipeline. Developers run tests before committing. Test suites run on every pull request. Bugs are caught in minutes, not weeks.

Automation is the enabler of shift-left. Without automated tests, you cannot shift testing left. There's nothing to run automatically.

### The three waves of automation at a modern company

**Wave 1 — Unit tests**

Developers write these. They test a single function in isolation. They run in seconds. Every serious codebase has thousands.

**Wave 2 — Integration tests**

Test how parts of the system work together. Slower than unit tests, but catch problems unit tests miss.

**Wave 3 — E2E tests**

Test the app end-to-end, like a user. This is where Playwright lives. Slowest to run, most expensive to maintain, but the most confident signal.

A healthy project has all three. The famous "test pyramid" shows the ideal shape — many unit tests, some integration tests, few E2E tests.

### Why E2E tests are the "trust me, it works" tests

When a manager asks "does our app work?", no amount of unit tests can answer that question. Unit tests say "every small piece works". E2E tests say "the whole thing works, from the user's perspective".

That's the confidence E2E tests provide. And that's why Playwright engineers are in demand.

### The dark side — flaky tests

Automation has a downside: **flaky tests**. Tests that pass sometimes and fail other times, without any real change.

A flaky test is worse than no test. It cries wolf. After a few false failures, teams start ignoring test failures. When a real bug appears, nobody notices.

Modern tools like Playwright fight flakiness with:

- Auto-waiting — waits for elements to appear
- Web-first assertions — retries until the condition is true
- Trace viewer — shows exactly what happened when a test failed
- Parallel execution — reduces total test time

Avoiding flakiness is a skill you'll develop. It's as important as writing tests.

### The career angle

Companies pay good money for test automation engineers because:

- Automation is complex (needs coding skills)
- Test infrastructure is critical (a broken pipeline blocks releases)
- Playwright engineers are scarce (most testers don't code)

Learning Playwright puts you in a small pool of engineers who can build the safety net that every modern team needs.

### The bottom line

Companies automate because:

- Bugs cost more the later you find them
- Manual testing doesn't scale with fast releases
- Automated tests run on every change
- Confidence enables faster development
- Good engineers are expensive; test infrastructure isn't

When you write a Playwright test, you're not just testing a page. You're building the safety net that lets a company move fast without breaking things.

That's a real job. And it pays well.`,
    handsOn: `Calculate the ROI of automation yourself.

### Step 1: Pick a flow you can test manually

Example: Login to any app you have an account for.

### Step 2: Time yourself

Run through the flow once, carefully. Note the time in minutes.

Example: 2 minutes for a full login + dashboard verification.

### Step 3: Do the math

Assume the flow needs to be tested:

- On every code change (say 20 times a week)
- On 3 browsers (Chrome, Firefox, Safari)
- For 4 user roles (admin, user, guest, super-admin)

Without automation, that's:

- 2 minutes × 20 × 3 × 4 = 480 minutes per week
- That's 8 hours of a person's week, every week

Now assume a Playwright test for this takes 30 minutes to write (once) and runs in 10 seconds. Automated total:

- Write: 30 minutes
- Run: 10 seconds × 20 × 3 × 4 = 40 minutes per week
- But the runs happen in the background

Total saving after the first month: hundreds of hours per year.

### Step 4: Write the math down

Create a text file with:

- Manual cost per week: X minutes
- Automated cost per week (after first write): Y minutes
- Time to first write: Z minutes
- Break-even: after how many weeks does automation win?

### Deliverable

You calculated the ROI of one automated test and can explain it to a non-technical person. This is the exact conversation you'll have in real jobs.`,
    challenge: `Defend test automation to a sceptical manager.

### Scenario

Your manager says: "Our manual testers do fine. Why should we spend money on automation?"

Write a one-page response covering:

1. The cost of a production bug (with a real-world example)
2. The scaling issue — manual testing doesn't grow with releases
3. What a modern CI pipeline looks like with automation
4. What the manual testers will do instead (better, more interesting work)
5. Estimated savings over 12 months

### Structure your answer

- Start with the problem (bugs cost a lot more in production)
- Show the math (manual hours per release)
- Show the alternative (automated tests run in minutes)
- Address the fear (testers won't be replaced, they'll be upgraded)
- End with the business case (money saved, faster releases)

### Bonus

Read a real case study — search "test automation ROI case study" or "Playwright saved hours" — and summarise it.

Now when someone asks "why automate?", you don't just have an opinion. You have a case.`,
    proTips: [
      "Shift-left is the industry trend. Learn the term and use it. It signals you understand modern engineering culture.",
      "Flaky tests are the number one enemy of automation. Playwright's auto-waiting is designed to fight this.",
      "A good E2E suite runs in 10-20 minutes. If yours takes hours, split it — fast tests on every PR, slow tests nightly.",
      "Test automation pays off in the second year. The first year is investment.",
      "Companies don't hire testers. They hire engineers who can build test infrastructure.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to automate 100 percent of manual tests",
        fix: "Aim for 60-80 percent. Save the rest for manual testing where humans matter more.",
      },
      {
        mistake: "Writing tests without prioritising",
        fix: "Automate the highest-value flows first: login, checkout, payment. Skip the 'About Us' page.",
      },
      {
        mistake: "Ignoring flakiness",
        fix: "One flaky test can poison an entire suite. Fix it or delete it. Never ignore it.",
      },
      {
        mistake: "Building a suite and then never maintaining it",
        fix: "Test infrastructure is a product. It needs care, updates, and refactoring.",
      },
      {
        mistake: "Assuming fast = good",
        fix: "A fast test that misses bugs is worse than a slow test that catches them. Correctness first, speed second.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The bug cost curve",
        code: `Stage             | Cost multiplier | Example time to fix
------------------+-----------------+-------------------
During coding     | 1x              | 10 minutes
During QA         | 10x             | 2 hours
During staging    | 30x             | 1 day
In production     | 100x            | 1 week + reputation
After PR damage   | 1000x           | Months + lawsuits`,
      },
      {
        language: "text",
        title: "Where Playwright fits",
        code: `            /\\
           /  \\      E2E tests (Playwright)
          /____\\     Few, slow, high confidence
         /      \\
        /        \\   Integration tests
       /__________\\  Some, medium speed
      /            \\
     /              \\ Unit tests
    /________________\\ Many, fast, low-level`,
      },
    ],
    furtherReading: [
      {
        title: "Google Testing Blog — Just say no to more end-to-end tests",
        url: "https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html",
      },
      {
        title: "Martin Fowler — Test pyramid",
        url: "https://martinfowler.com/bliki/TestPyramid.html",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "business", "automation"],
  },

  "what-is-a-test-script": {
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
  },

  "qa-vs-sdet": {
    slug: "qa-vs-sdet",
    title: "Who is a QA engineer? Who is an SDET?",
    summary:
      "The different roles in testing — and where you fit in with Playwright skills.",
    whyItMatters:
      "The path you're on leads to specific job titles. Knowing them helps you search for the right roles, write the right resume, and set the right expectations.",
    notes: `The world of software testing has several job titles. They sound similar but mean different things. Let's break them down.

### QA Engineer (Quality Assurance Engineer)

**What they do:** Test software manually. Execute test cases. Report bugs. Verify fixes.

**Skills:** Understanding of testing concepts, attention to detail, good communication, basic technical knowledge.

**Tools:** Jira, TestRail, spreadsheets, browser DevTools.

**How they spend their day:** Open the app. Run through test cases. Document what works and what doesn't.

**Career path:** QA Engineer → Senior QA → QA Lead → QA Manager.

**In one sentence:** The person who finds bugs by using the app carefully.

### SDET (Software Development Engineer in Test)

**What they do:** Write code that tests software. Build test frameworks. Automate everything that can be automated.

**Skills:** Programming (Python, JavaScript, Java), test frameworks (Pytest, Playwright, Cypress), CI/CD, Docker, APIs.

**Tools:** Playwright, Selenium, Pytest, Jest, Git, Docker, Jenkins, GitHub Actions.

**How they spend their day:** Write code. Debug flaky tests. Improve test infrastructure. Review other engineers' test code.

**Career path:** SDET → Senior SDET → Test Architect → Engineering Manager.

**In one sentence:** A software engineer who specialises in testing.

### The blurred line

In reality, most modern test roles mix both. You might be called a "QA Engineer" but write Playwright tests all day. Or you might be an "SDET" but also do exploratory manual testing.

The distinction matters most at:

- **Large enterprises** with separate QA and Dev teams
- **Startups**, where everyone does a bit of everything
- **Job listings**, where the title hints at what the role actually is

### Test Automation Engineer

A third common title. This role is closer to SDET, focused specifically on automation.

**Day-to-day:** Build test frameworks, write automated tests, maintain CI pipelines.

**Difference from SDET:** Sometimes Test Automation Engineers focus only on automation, while SDETs also build test infrastructure and participate in code reviews of production code.

In most companies, these are interchangeable.

### Manual QA vs Automation QA

Another way roles are split:

**Manual QA:** Tests by hand. Doesn't code. Focuses on exploratory testing, usability, edge cases.

**Automation QA:** Writes test code. Focuses on speed, coverage, regression.

**Reality check:** Manual QA roles are shrinking. Companies increasingly expect even manual testers to know some automation.

### Where Playwright engineers fit

You're learning Playwright. Your natural fit is:

- **SDET** — if you enjoy writing code and building frameworks
- **Test Automation Engineer** — if you focus on writing tests and pipelines
- **Automation QA** — if your company calls the role that

All three pay well and are in demand. All three require exactly the skills you're building.

### Salaries — a rough idea

Salaries vary wildly by country, company, and experience. But in general:

- Manual QA: entry to mid-level pay
- Automation QA / Test Automation Engineer: mid to upper-mid
- SDET: similar to Software Development Engineer, often slightly less at big tech, similar at mid-size companies

The gap between manual QA and automation roles is often 30 to 50 percent. This is one reason to learn automation.

### What companies actually want (SDET / Automation role)

Reading real job listings, they ask for:

- **Programming** in Python, JavaScript, or Java
- **Experience with Playwright** or Cypress or Selenium
- **API testing** skills
- **CI/CD knowledge** (GitHub Actions, Jenkins)
- **Git and version control**
- **Understanding of testing concepts** (test pyramid, TDD, BDD)
- **Docker basics**
- **Good communication** — you'll report bugs to developers

You're going to learn all of this in this course. Not just enough to pass an interview — enough to do the job.

### The title doesn't matter. The skills do.

Here's a secret: two people with the same title can have completely different jobs. And two people with different titles can have identical jobs.

What matters is what you can do:

- Can you write a Playwright test for a complex flow?
- Can you debug a flaky test with a trace viewer?
- Can you build a test framework from scratch?
- Can you set up CI to run tests on every push?
- Can you explain to a developer why their change broke a test?

If yes to those, you're employable as an SDET, Test Automation Engineer, or Senior QA. The title is negotiable. The skills are not.

### The career arc

Most people follow one of two paths:

**Path 1 — Manual → Automation**

Start as manual QA. Learn programming. Move into automation. Become an SDET.

**Path 2 — Developer → SDET**

Start as a developer. Discover you enjoy testing. Move into test infrastructure. Become an SDET.

You're on Path 1, but starting directly at the automation stage. That's efficient. You skip years of manual-only work.

### The one piece of advice

Don't get attached to a title. Get attached to a skill set.

Titles change between companies. Job descriptions are often wrong. But if you can build a Playwright framework, debug flaky tests, and mentor junior testers — you'll always find work.

That's the goal. Titles are just labels. Skills are permanent.

### How to talk about yourself

When someone asks what you do:

Wrong: "I'm learning Playwright."

Right: "I'm a test automation engineer. I build Playwright frameworks to catch bugs before they reach users."

The second answer tells them what you do, not what you're learning. Even as a beginner, you can use this framing. The confidence comes through in the answer.

You're not "just learning". You're building a career. Start talking like it.`,
    handsOn: `Explore real job listings.

### Step 1: Open a job site

Go to LinkedIn, Naukri, Indeed, or any job site.

### Step 2: Search for three roles

Search for these three separately:

- "QA engineer"
- "Automation QA" or "Test Automation Engineer"
- "SDET"

Look at 3 to 5 listings for each.

### Step 3: Compare them

For each listing, note:

- What programming languages do they ask for?
- Do they mention Playwright, Cypress, or Selenium?
- Do they mention CI/CD or Docker?
- Is there a coding requirement, or manual only?

### Step 4: Write down what you have vs what you need

For an SDET role, list:

- What skills you already have (or are building in this course)
- What skills you still need to learn
- What you can learn next

### Deliverable

You read at least 10 real job listings across the three roles and can describe how they differ. You now know exactly what skills you need to build for the role you want.`,
    challenge: `Write your career plan.

### Task 1: Define your target role

Out of QA Engineer, Automation QA, SDET — which one do you want to be in 12 months?

Write one sentence explaining why.

### Task 2: Map your skills

List 10 skills you think you'll need for that role. Mark each:

- Already have it (green)
- Partially know it (yellow)
- Need to learn (red)

### Task 3: Order your learning

Take the red skills and order them from "most urgent" to "least urgent". This is your learning priority.

### Task 4: Set a 3-month milestone

Write one concrete thing you want to have built or achieved in 3 months.

Example: "Have a Playwright test suite of 30 tests running in GitHub Actions against a real demo site."

### Bonus

Update your LinkedIn profile (or create one). Change your headline to something that reflects where you're heading:

"Test Automation Engineer | Learning Playwright | Building reliable test frameworks"

You don't need to have arrived. You need to signal direction. Recruiters notice that.`,
    proTips: [
      "SDET roles often pay like developers. The investment in learning to code properly pays off.",
      "Manual QA experience is valuable, not wasted. It teaches you how to find bugs — a skill no code can replace.",
      "Job titles vary wildly. Focus on the job description, not the title.",
      "If you're applying for SDET roles, have a public GitHub with real test projects. It speaks louder than a resume.",
      "Learn Playwright deeply. It's currently the most in-demand automation tool, beating Cypress and Selenium in new job listings.",
    ],
    commonMistakes: [
      {
        mistake: "Assuming QA is less prestigious than development",
        fix: "Modern QA engineers write more code than many developers. The line has blurred. Respect the craft.",
      },
      {
        mistake: "Ignoring manual testing skills because you're 'doing automation'",
        fix: "The best testers combine judgment and code. Both matter.",
      },
      {
        mistake: "Chasing job titles instead of skills",
        fix: "A strong Playwright engineer will find work under any title. Skills first, titles second.",
      },
      {
        mistake: "Thinking SDET means writing unit tests all day",
        fix: "SDETs write E2E tests, build infrastructure, review code, and improve test pipelines. It's a broad role.",
      },
      {
        mistake: "Waiting until you feel 'ready' to apply",
        fix: "If you can build a Playwright framework, you're ready for junior SDET roles. Apply while learning the rest.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The roles at a glance",
        code: `QA Engineer
  Manual testing, bug reports, test cases
  Some coding: optional
  Salary: moderate

Automation QA / Test Automation Engineer
  Writes automated tests, maintains CI
  Coding: required
  Salary: mid to upper

SDET
  Builds test frameworks, treats testing as engineering
  Coding: strong requirement
  Salary: engineer-level

All three: overlap heavily in modern companies.`,
      },
      {
        language: "text",
        title: "Typical SDET job listing skills",
        code: `Required:
- 3+ years writing test automation
- Python or JavaScript
- Playwright, Cypress, or Selenium
- Git and code review experience
- CI/CD (GitHub Actions, Jenkins)
- API testing

Nice to have:
- Docker
- Kubernetes
- Performance testing (k6, JMeter)
- Accessibility testing

This is what you're building toward.`,
      },
    ],
    furtherReading: [
      {
        title: "Ministry of Testing — Career resources",
        url: "https://www.ministryoftesting.com/",
      },
      {
        title: "Playwright — Success stories and use cases",
        url: "https://playwright.dev/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "career"],
  },
};