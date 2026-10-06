import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
