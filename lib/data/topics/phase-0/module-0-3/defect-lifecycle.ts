import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "defect-lifecycle",
  title: "The Defect Lifecycle",
  summary:
    "A bug travels through stages: reported, triaged, assigned, fixed, verified and closed. Learn what happens at each stage and who does it.",
  whyItMatters:
    "Finding a bug is only the start. Knowing the journey helps you write better reports and follow up until the bug is truly gone.",
  notes: `A defect is **a gap between what the app should do and what it really does**. Teams also call it a bug. The defect lifecycle is the path it follows from discovery to closing.

Think of a complaint on the IRCTC app. You raise a ticket. Someone reads it. It goes to the right team. They fix it. You check that it works. Then the ticket is closed. A bug follows the same road.

### The main stages

**1. New or Reported**

A tester finds a problem and logs it in a tracker such as Jira. The report must be clear so others can understand it.

A good report has:

- A short title
- Steps to reproduce
- Expected and actual result
- Environment, such as browser and version
- Screenshot, video or logs

**2. Triaged**

A lead or manager reviews the new bugs. They ask:

- Is this really a bug?
- Is it a duplicate?
- How serious is it?
- How urgent is it?

Bad reports are sent back for more details.

**3. Assigned**

The bug is given to a developer. Now somebody owns it.

**4. In progress**

The developer studies the bug, finds the cause and writes a fix.

**5. Fixed**

The developer marks it fixed, and the change is placed in a build for testing.

**6. Ready for retest**

The tester receives the new build and is told to check the fix.

**7. Verified**

The tester repeats the original steps. If the bug is gone, and nearby things still work, the bug is verified.

**8. Closed**

The bug is closed. The story ends.

### What if the fix fails?

If the bug still appears, the tester **reopens** it with a comment and fresh evidence. It goes back to the developer. This loop can happen more than once.

### Other possible endings

Not every bug is fixed. Some end differently.

- **Duplicate**: the same bug was already reported
- **Cannot reproduce**: the developer could not see the problem. Add more details
- **Not a bug**: the app works as designed
- **Deferred**: it is real but will be fixed in a later release
- **Won't fix**: the team decides not to fix it

~~~text
New -> Triaged -> Assigned -> In progress -> Fixed
   -> Ready for retest -> Verified -> Closed
                     \\-> Reopened -> back to developer
~~~

### Who does what

- **Tester**: reports, retests, reopens or closes
- **Lead or triage group**: reviews and sets priority
- **Developer**: investigates and fixes
- **Product owner**: decides on deferred or won't fix items

### Writing a great bug report

A good report saves hours. Compare these.

Weak: Checkout is broken.

Strong: Checkout fails with a blank page when paying by UPI on Chrome 120. Steps: add one item, open the cart, choose UPI, click Pay. Expected: payment page opens. Actual: blank white page. Screenshot attached.

### Where Playwright helps

Playwright can collect evidence for you. Screenshots, videos and traces can be attached to a bug report.

~~~python
page.screenshot(path="checkout-bug.png")
~~~

A failing automated test can also be the reproduction steps. Developers love a script that shows the bug every time.

### Do not forget the retest

After a fix, always retest the **original steps** and also check nearby features. We will call this sanity testing in a later topic.

### The takeaway

A bug is not finished when you report it. It is finished when it is verified and closed. Write clear reports, follow each bug through its stages and keep notes along the way.`,
  handsOn: `Let's walk a bug through the lifecycle on paper.

### Step 1: Find a bug

Use any practice site or your own sample page. Find one small problem, or invent a realistic one, such as a coupon field accepting an expired code.

### Step 2: Write the report

Create a note with these headings: Title, Steps, Expected, Actual, Environment, Evidence.

### Step 3: Create a status board

Draw columns: New, Triaged, Assigned, Fixed, Verified, Closed. Place your bug card in New.

### Step 4: Move it

Move the card one column at a time. At each column write one line: who does this and what they do.

### Step 5: Add a failed fix

Pretend the first fix failed. Move the card to Reopened. Write what comment you would add.

### Step 6: Collect evidence

Take a screenshot of any page. Write the Playwright line for it.

### Deliverable

You have one bug report, a board showing every stage, a reopen note and one screenshot command.`,
  challenge: `Write five bug reports for a food ordering app. Use these situations:

1. The Apply coupon button does nothing on mobile
2. The total shows a wrong amount after removing one item
3. The app crashes when the address is empty
4. A spelling mistake in the Order placed message
5. Payment succeeds but the order is not shown

For each report, include title, steps, expected result, actual result and environment.

Then answer:

- Which bugs would you mark urgent?
- Which one might end as Not a bug? Why?
- Which one might be deferred?
- Draw the lifecycle path for bug 2, including one reopen.`,
  proTips: [
    "Write the title so a manager understands the problem in one line.",
    "Always add steps, expected result, actual result and environment.",
    "Attach a screenshot or video. It saves long back-and-forth.",
    "Retest the original steps and also check nearby features.",
    "If a developer cannot reproduce a bug, add more detail instead of arguing.",
  ],
  commonMistakes: [
    {
      mistake: "Writing a report like 'Page is broken'",
      fix: "Give exact steps, expected result, actual result and environment.",
    },
    {
      mistake: "Closing a bug without retesting",
      fix: "Always repeat the original steps on the new build before closing.",
    },
    {
      mistake: "Not checking for duplicates before reporting",
      fix: "Search the tracker first. Add a comment to the existing bug if it is already there.",
    },
    {
      mistake: "Arguing when a bug is marked 'Cannot reproduce'",
      fix: "Add more details, such as data, browser, logs and a video, and ask for a joint session.",
    },
    {
      mistake: "Forgetting to test nearby features after a fix",
      fix: "Fixes can break other things. Check close neighbours of the fixed area.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Lifecycle stages",
      code: `New -> Triaged -> Assigned -> In progress -> Fixed
   -> Ready for retest -> Verified -> Closed

If the fix fails: Reopened -> back to the developer`,
    },
    {
      language: "text",
      title: "A strong bug report",
      code: `Title: Checkout shows blank page on UPI payment (Chrome 120)
Steps:
  1. Add one item to the cart
  2. Open the cart
  3. Choose UPI
  4. Click Pay
Expected: UPI payment page opens
Actual: Blank white page
Environment: Chrome 120, Windows 11, staging
Evidence: checkout-bug.png`,
    },
    {
      language: "python",
      title: "Collect evidence with Playwright",
      code: `page.screenshot(path="checkout-bug.png", full_page=True)`,
    },
  ],
  furtherReading: [
    {
      title: "Atlassian — Bug tracking",
      url: "https://www.atlassian.com/software/jira/guides/issues/overview",
    },
    {
      title: "Playwright — Trace viewer",
      url: "https://playwright.dev/python/docs/trace-viewer",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["defect", "bug-report", "lifecycle", "triage", "automation-concepts"],
};

export default topic;