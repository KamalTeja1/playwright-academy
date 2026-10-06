import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "shift-left-testing",
  title: "Shift-Left Testing",
  summary:
    "Start testing early, not at the end. Learn why bugs found late cost far more and how testers can help from day one.",
  whyItMatters:
    "Many teams test only after coding is finished. By then, fixing a bug is slow and expensive. Shift-left is how modern teams avoid that.",
  notes: `Shift-left means **moving testing earlier in the development process**. Imagine a timeline from left to right: idea, design, code, test, release. Old teams tested at the right end. Shift-left pulls testing towards the left.

Think of building a house. If the plumber finds a wrong pipe position while the walls are still open, it is a small fix. If you find it after painting and furnishing, you must break walls and redo everything. The earlier you check, the cheaper the fix.

### The cost of late bugs

A common saying is that a bug found late can cost 10 to 100 times more to fix than one found early. The exact number varies. But the idea is clear.

- A mistake in a requirement, caught in a meeting: a few minutes to fix
- The same mistake caught after coding: days of rework
- The same mistake found by customers in production: money, trust and urgent fixes

~~~text
Requirement  ->  Design  ->  Code  ->  Test  ->  Release  ->  Production
   cheap                                                      very costly
~~~

### What shift-left looks like

**1. Testers join requirement discussions**

A tester reads a requirement and asks, "What happens if the user enters nothing?" or "What is the maximum amount?" These questions find gaps before any code exists.

**2. Review designs and acceptance criteria**

Agree on how success will be checked, before the work begins.

**3. Developers write unit tests**

Small tests run on every code change and catch mistakes within minutes.

**4. Static checks**

Linting and type checking find errors as you type.

**5. Automated checks in the build pipeline**

Every time code is pushed, tests run automatically. If something breaks, the team knows within minutes, not weeks.

**6. Test early builds**

Do not wait for the whole feature. Test small pieces as they arrive.

### An example

A team plans a Refund feature. In a shift-left team, the tester joins the planning meeting.

She asks:

- Can a user get a refund after seven days?
- What if the payment was split across two cards?
- Is a partial refund allowed?

The team finds three unclear rules before writing a line of code. In an old-style team, these questions appear during final testing, and the developer must change code that was already finished.

### Shift-left does not mean testers do developer work

It means everyone cares about quality early. Testers bring a testing mindset to the table. Developers share the work of checking. Product owners clarify the rules.

### Where Playwright fits

Playwright tests can run early too.

- Run a small set of Playwright tests on every pull request
- Run them against a preview build of the new code
- Write the test while the feature is being built, using the agreed acceptance criteria

~~~python
def test_refund_shows_confirmation(page):
    page.goto("https://staging.shop.example.com/orders/1001")
    page.get_by_role("button", name="Request refund").click()
    expect(page.get_by_text("Refund requested")).to_be_visible()
~~~

A test like this, written alongside the feature, becomes a living check.

### Shift-right, briefly

You may also hear shift-right. It means watching the app in production with monitoring and real user data. It is not a replacement for shift-left. Good teams do both.

### Common obstacles

- Testers are invited too late
- Requirements are vague
- No time for early reviews
- Tests are slow, so nobody runs them often

Each can be fixed with talk, small steps and fast tests.

### How you can start

1. Ask to join planning meetings
2. Read each requirement and write questions
3. Suggest acceptance criteria in simple words
4. Offer to review unit tests with developers
5. Keep a small fast Playwright set that runs on every change

### The takeaway

Test early and test often. The cheapest bug is the one you catch before it is built.`,
  handsOn: `Let's practise shift-left with a requirement.

### Step 1: Take a requirement

Use this: "Users can apply a coupon code on the cart page to get a discount."

### Step 2: Write questions

In a notes file, write at least ten questions a tester might ask before coding starts. For example:

- Can two coupons be used together?
- What if the coupon is expired?
- Is the discount on the total or per item?
- Is there a minimum cart value?

### Step 3: Write acceptance criteria

Turn your answers into five clear sentences. Use the form: Given, When, Then.

~~~text
Given a cart worth 500 rupees
When the user applies the code SAVE10
Then the total becomes 450 rupees
~~~

### Step 4: Draw the timeline

Draw the left-to-right timeline. Mark where each of your questions would have been found in an old-style team.

### Step 5: Write a Playwright test name

Write one Playwright test name for each acceptance criterion.

### Deliverable

You have ten questions, five acceptance criteria, a timeline drawing and five test names ready before any code exists.`,
  challenge: `A team plans a new Schedule order feature for a food delivery app.

Do these:

1. Write twelve questions you would ask in the planning meeting
2. Write six acceptance criteria in Given, When, Then form
3. List four checks developers could automate early
4. List three Playwright tests you would write while the feature is built
5. Estimate the cost of finding a wrong rule at three points: planning, final testing and production. Use simple numbers, such as 1, 10 and 100

Then explain why shift-left saves money, in four lines. Also write two lines on how shift-right adds to it.`,
  proTips: [
    "Ask your questions in the planning meeting, not in the testing phase.",
    "Write acceptance criteria in simple Given, When, Then form.",
    "Keep a small, fast Playwright set that runs on every pull request.",
    "Review unit tests with developers. It improves both sides.",
    "Do not wait for the whole feature. Test small pieces as they arrive.",
  ],
  commonMistakes: [
    {
      mistake: "Waiting for the full build before thinking about tests",
      fix: "Review requirements and plan tests while the feature is being designed.",
    },
    {
      mistake: "Thinking shift-left means testers write all the code",
      fix: "It means the whole team cares about quality early. Roles stay, but cooperation grows.",
    },
    {
      mistake: "Staying silent in planning meetings",
      fix: "Ask about edge cases, limits and error handling. Your questions save the team time.",
    },
    {
      mistake: "Running slow tests only once a week",
      fix: "Keep a fast set that runs on every change, and a longer set nightly.",
    },
    {
      mistake: "Ignoring production after release",
      fix: "Add monitoring and check real user problems. This is the shift-right side.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "The shift-left timeline",
      code: `Requirement -> Design -> Code -> Test -> Release -> Production
   cheap fix                                      costly fix

Shift-left: move testing activity towards the left.`,
    },
    {
      language: "text",
      title: "Acceptance criteria in Given, When, Then form",
      code: `Given a cart worth 500 rupees
When the user applies the code SAVE10
Then the total becomes 450 rupees

Given an expired coupon
When the user applies it
Then an error message "Coupon has expired" appears`,
    },
    {
      language: "python",
      title: "A test written alongside the feature",
      code: `from playwright.sync_api import expect

def test_refund_shows_confirmation(page):
    page.goto("https://staging.shop.example.com/orders/1001")
    page.get_by_role("button", name="Request refund").click()
    expect(page.get_by_text("Refund requested")).to_be_visible()`,
    },
  ],
  furtherReading: [
    {
      title: "Atlassian — Shift left testing",
      url: "https://www.atlassian.com/continuous-delivery/software-testing/shift-left-testing",
    },
    {
      title: "Playwright — Continuous integration",
      url: "https://playwright.dev/python/docs/ci-intro",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["shift-left", "early-testing", "requirements", "automation-concepts"],
};

export default topic;