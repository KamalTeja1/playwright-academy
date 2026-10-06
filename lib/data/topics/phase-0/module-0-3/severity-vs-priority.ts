import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "severity-vs-priority",
  title: "Severity vs Priority",
  summary:
    "Two different questions about a bug: how bad is the damage, and how soon must it be fixed.",
  whyItMatters:
    "Mixing these two causes wrong decisions. Teams may fix a small typo first and ignore a real crash. You must tell them apart.",
  notes: `Severity and priority sound similar, but they answer **two different questions**.

- **Severity**: how bad is the damage the bug causes?
- **Priority**: how soon should we fix it?

Think of a hospital. A patient with a small cut and a patient with a heart attack arrive. The heart attack is more severe. But now think of a VIP who must travel in two hours with a small wound that needs a quick stitch. The business wants it handled soon. Severity and priority do not always match.

### Severity: the technical impact

Severity is usually set by the tester. It measures how much the bug hurts the product.

Common levels:

- **Critical**: the app crashes, data is lost or money is wrong. No workaround
- **High**: a main feature is broken, but there is a workaround
- **Medium**: a feature works partly, or a minor feature is broken
- **Low**: small cosmetic issues, such as a spelling mistake or a slightly wrong colour

### Priority: the business urgency

Priority is usually set by the product owner or manager. It depends on business needs, deadlines and users affected.

Common levels:

- **P1 or Urgent**: fix immediately
- **P2 or High**: fix in this release
- **P3 or Medium**: fix when possible
- **P4 or Low**: fix later

### The four combinations

**High severity, high priority**

The payment page crashes for every user. Fix right now.

**High severity, low priority**

The app crashes, but only on a very old phone model that almost nobody uses. Serious damage, but few users. It can wait.

**Low severity, high priority**

The company name is spelled wrong on the home page, one day before a big launch. A small typo in terms of damage, but it embarrasses the brand. Fix today.

**Low severity, low priority**

A tiny alignment problem on a rarely visited settings page. Fix whenever convenient.

~~~text
                 Priority high      Priority low
Severity high    Payment crash      Crash on old phone
Severity low     Brand typo         Small alignment issue
~~~

### Why teams argue

Testers often say, "This is critical." Product owners say, "It affects only two users." Both can be right. The tester sees technical damage. The owner sees business impact. That is why two separate fields exist.

### How to decide severity

Ask yourself:

1. Does it crash the app or lose data?
2. Is money or security affected?
3. Is there a workaround?
4. How much of the feature is broken?

### How to decide priority

Ask:

1. How many users are affected?
2. Is a launch or deadline close?
3. Does it block other work?
4. Is it a legal or brand issue?

### Setting these in a bug report

A tester should always set severity honestly, with a reason. Priority may be proposed by the tester but is finally set by the lead or owner.

~~~text
Severity: High
Reason: Order total is wrong when a coupon is removed. No workaround.
Suggested priority: P1, affects every coupon user.
~~~

### Where Playwright connects

Playwright tests do not set severity. But you can use test names or tags to mark important flows.

~~~python
import pytest

@pytest.mark.critical
def test_payment_completes(page):
    ...
~~~

Then run critical tests first, or on every commit.

### Common confusion

- A bug that looks small can have big priority
- A scary crash can have low priority
- Severity is about damage. Priority is about timing

### The takeaway

Ask two questions, not one. How bad is it? How soon do we need it fixed? Keep the answers separate, and your team will make calmer decisions.`,
  handsOn: `Let's classify bugs on both axes.

### Step 1: Make a grid

Draw a table with two rows (Severity high, Severity low) and two columns (Priority high, Priority low).

### Step 2: List eight bugs

Use a shopping app. Examples:

1. Payment page crashes for all users
2. Spelling mistake in the brand name on the home page
3. App crashes on a phone model used by 0.1 percent of users
4. Footer link has a slightly wrong colour
5. Discount applied twice on some orders
6. Search shows results in the wrong order
7. Terms and conditions page has a broken link
8. Profile photo upload fails only for files above 50 MB

### Step 3: Rate severity

Give each bug a severity: Critical, High, Medium or Low. Write one line of reason.

### Step 4: Rate priority

Give each a priority: P1 to P4. Write one line of reason.

### Step 5: Place on the grid

Put each bug in the right box of your grid.

### Step 6: Mark one with a Playwright tag

Choose the most important bug and write a Playwright test name with a critical mark.

### Deliverable

You have eight rated bugs, a filled grid and one tagged Playwright test sketch.`,
  challenge: `A big festival sale starts tomorrow on an online store.

Rate each bug on severity and priority, and explain each choice in one line:

1. The Buy now button works only on Chrome
2. The sale banner shows last year's date
3. Wrong GST is shown on the invoice PDF
4. Slight misalignment of icons on the About page
5. Login fails for users with a plus sign in their email
6. The order history page loads slowly for users with 500 orders
7. A crash on the settings page for a very old browser

Then answer:

- Which bug has high severity but may not be top priority?
- Which bug has low severity but high priority?
- Who should decide priority, and why?

Finally, write a Playwright test name and tag for the most important flow.`,
  proTips: [
    "Set severity honestly and add a short reason.",
    "Let the product owner make the final priority call.",
    "Ask how many users are affected before you argue about priority.",
    "A workaround usually lowers severity, but not always priority.",
    "Tag critical Playwright tests so they run first.",
  ],
  commonMistakes: [
    {
      mistake: "Treating severity and priority as the same thing",
      fix: "Severity is damage. Priority is urgency. Rate them separately.",
    },
    {
      mistake: "Marking every bug as critical",
      fix: "If everything is critical, nothing is. Use the levels honestly.",
    },
    {
      mistake: "Ignoring business context when setting priority",
      fix: "Consider launches, deadlines, number of users and brand impact.",
    },
    {
      mistake: "Fighting with the product owner over priority",
      fix: "Explain the technical impact clearly. Then accept that priority is a business decision.",
    },
    {
      mistake: "Thinking a cosmetic bug can never be urgent",
      fix: "A brand name typo before a launch can be urgent despite low severity.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "The four combinations",
      code: `                 Priority high      Priority low
Severity high    Payment crash      Crash on very old phone
Severity low     Brand typo         Small alignment issue`,
    },
    {
      language: "text",
      title: "Severity with a reason in a bug report",
      code: `Severity: High
Reason: Order total is wrong after a coupon is removed. No workaround.
Suggested priority: P1 (affects every coupon user)`,
    },
    {
      language: "python",
      title: "Tag important Playwright tests",
      code: `import pytest

@pytest.mark.critical
def test_payment_completes(page):
    page.goto("https://shop.example.com/cart")
    page.get_by_role("button", name="Pay now").click()`,
    },
  ],
  furtherReading: [
    {
      title: "Atlassian — Bug priority and severity",
      url: "https://www.atlassian.com/agile/software-development/bug-triage",
    },
    {
      title: "Pytest — Markers",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 20,
  tags: ["severity", "priority", "bug-triage", "defects", "automation-concepts"],
};

export default topic;