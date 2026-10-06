import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-plan-vs-strategy-vs-case",
  title: "Test Plan vs Test Strategy vs Test Case",
  summary:
    "Three words people mix up. A strategy covers the whole project, a plan covers one release, and a case covers one scenario.",
  whyItMatters:
    "In interviews and meetings, these terms come up all the time. Using them correctly shows you understand how testing is organised.",
  notes: `Test strategy, test plan and test case are **three levels of the same idea**. They go from big and general to small and exact.

Think of a cricket tournament. The board has a long-term approach for how it runs cricket: formats, rules, fitness. That is the strategy. Before one series, the team makes a plan: which matches, who plays, which grounds. That is the plan. And for one ball, the bowler has a specific idea: yorker on off stump. That is the test case.

### Test strategy: the big picture

A test strategy describes **how testing is done in the organisation or project**. It stays mostly stable for a long time.

It usually covers:

- Types of testing used, such as unit, integration, end-to-end and performance
- What gets automated and what stays manual
- Tools, such as Playwright, Jira and a CI system
- Environments, such as dev, staging and production
- Standards for defects and reporting
- Roles and responsibilities
- How risks are handled

Strategy answers: **How do we test here, in general?**

Who writes it: usually a test lead, manager or architect.

### Test plan: one release or project phase

A test plan describes **what will be tested in a specific release**. It changes with each release.

It usually covers:

- Scope: what is in, what is out
- Features to test and features not to test
- Schedule and milestones
- Who tests what
- Test environments and data needed
- Entry criteria: when can testing start?
- Exit criteria: when is testing done?
- Risks and backup plans

Plan answers: **What will we test in this release, when and who does it?**

Who writes it: usually a test lead or senior tester.

### Test case: one scenario

A test case is **one checkable scenario** with steps and an expected result, as we saw earlier.

Case answers: **What exactly do I do and what should I see?**

Who writes it: any tester.

### A simple comparison

~~~text
Strategy   Whole project or company   Changes rarely    "How we test"
Plan       One release                Changes often     "What, when, who"
Case       One scenario               Many of them      "Steps and result"
~~~

### An example from one app

Imagine a train ticket booking app.

- **Strategy**: we use unit tests for logic, API tests for services, Playwright for key user journeys. Bugs go to Jira. Regression runs every night.
- **Plan for release 4.2**: we will test the new Tatkal timing change and the refund screen. We will not retest the old profile pages. Testing runs for two weeks. Exit when no critical bugs are open.
- **Case TC-310**: book a Tatkal ticket at 10:00 with a valid card. Expected: ticket confirmed message appears.

### Entry and exit criteria

These are important words in plans.

- **Entry criteria**: conditions that must be true before testing begins. For example, the build is deployed and the test data is ready
- **Exit criteria**: conditions that say testing is complete. For example, all high-priority tests passed and no critical bugs are open

They stop endless arguments about when to start and when to stop.

### Where Playwright appears in each

- In the **strategy**: Playwright is named as the browser automation tool
- In the **plan**: certain Playwright tests are listed as part of the release check
- In the **case**: each Playwright test is the coded version of one case

~~~python
# This is one test case in code
def test_tatkal_booking_confirms_ticket(page):
    page.goto("https://trains.example.com")
    ...
~~~

### Common confusion in interviews

People say, "Test plan is a document and test strategy is a document, so they are the same." They are not. One is for the general approach. One is for a specific release.

### How long should they be?

Short and useful beats long and ignored. A strategy of two pages that everyone reads is better than forty pages that nobody opens. Many agile teams keep plans very light.

### The takeaway

Strategy is how we test. Plan is what we test now. Case is the exact check. Learn the three levels and you will sound clear in every meeting.`,
  handsOn: `Let's write all three levels for one small app.

### Step 1: Pick an app

Pick a small app, such as a to-do list or a bus booking page.

### Step 2: Write a mini strategy

In a notes file, write five lines on how testing is done for this app. Include types of tests, tools, how bugs are tracked and what is automated.

### Step 3: Write a mini plan

Write a plan for one release. Include scope, features not tested, schedule, who tests, entry criteria and exit criteria.

### Step 4: Write three test cases

Write three test cases for one feature in the plan. Use the anatomy from the earlier topic.

### Step 5: Connect them

Draw arrows: strategy to plan, plan to cases. Mark where Playwright appears at each level.

### Step 6: Write one Playwright sketch

Convert one test case to Playwright steps on paper.

### Deliverable

You have a mini strategy, a mini plan, three test cases and a drawing that connects them, plus one Playwright sketch.`,
  challenge: `Imagine you lead testing for a food delivery startup that releases every two weeks.

Write:

1. A strategy of eight lines covering test types, tools, automation split, defect tracking and environments
2. A test plan for the next release, which adds a Schedule order feature. Include scope, out of scope, schedule, roles, entry criteria and exit criteria
3. Five test cases for the Schedule order feature

Then answer:

- What belongs in the strategy but not in the plan?
- What changes between releases?
- Why are exit criteria useful?

Finally, in two lines, explain the difference between the three to a new joiner, using a cricket or train analogy of your own.`,
  proTips: [
    "Remember it as how, what and exactly: strategy, plan, case.",
    "Write entry and exit criteria so nobody argues about start and finish.",
    "Keep plans short. A plan nobody reads is useless.",
    "Name your tools, like Playwright, in the strategy, so everyone knows the standard.",
    "In interviews, give a small example for each level.",
  ],
  commonMistakes: [
    {
      mistake: "Using test plan and test strategy as the same word",
      fix: "Strategy is the general approach. Plan is for one release or project phase.",
    },
    {
      mistake: "Writing a very long plan that nobody reads",
      fix: "Keep it short and practical. Use lists and tables.",
    },
    {
      mistake: "Skipping exit criteria",
      fix: "Decide in advance what 'done' means, such as no open critical bugs.",
    },
    {
      mistake: "Copying last release's plan without changes",
      fix: "Update scope, risks and schedule for each release.",
    },
    {
      mistake: "Forgetting to list what is not being tested",
      fix: "Write out-of-scope items so nobody assumes they were covered.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "The three levels at a glance",
      code: `Strategy   whole project   rarely changes   "How we test"
Plan       one release     changes often    "What, when, who"
Case       one scenario    many of them     "Steps and result"`,
    },
    {
      language: "text",
      title: "A mini test plan outline",
      code: `Release: 4.2
Scope: Tatkal timing change, refund screen
Out of scope: old profile pages
Schedule: two weeks
Roles: Asha (refund), Ravi (Tatkal)
Entry criteria: build deployed, test data ready
Exit criteria: no open critical bugs, all P1 tests pass`,
    },
    {
      language: "python",
      title: "One test case as Playwright code",
      code: `def test_tatkal_booking_confirms_ticket(page):
    page.goto("https://trains.example.com")
    page.get_by_role("link", name="Tatkal").click()
    page.get_by_role("button", name="Book now").click()
    expect(page.get_by_text("Ticket confirmed")).to_be_visible()`,
    },
  ],
  furtherReading: [
    {
      title: "ISTQB — Software testing glossary",
      url: "https://glossary.istqb.org/",
    },
    {
      title: "Atlassian — Test planning",
      url: "https://www.atlassian.com/continuous-delivery/software-testing",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["test-plan", "test-strategy", "test-case", "documentation", "automation-concepts"],
};

export default topic;