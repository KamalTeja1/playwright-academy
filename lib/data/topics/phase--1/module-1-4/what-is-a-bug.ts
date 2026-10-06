import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
