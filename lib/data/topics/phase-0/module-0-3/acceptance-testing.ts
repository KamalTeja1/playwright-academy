import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "acceptance-testing",
  title: "Acceptance Testing",
  summary:
    "The final question before release: does this app do what the business asked for? Learn who decides and how it is checked.",
  whyItMatters:
    "An app can be bug-free and still be wrong. Acceptance testing checks that you built the right thing, not just that you built it right.",
  notes: `Acceptance testing checks **whether the software meets the business need**. It is the sign-off gate before release.

Think of getting a new kitchen made. The carpenter says, "All done, no loose screws." But you walk in and see the stove is on the wrong wall. The work may be perfect, but it is not what you asked for. You do not accept it. That is acceptance testing.

### Two different questions

- **Verification**: did we build the product correctly? Testers and developers ask this
- **Validation**: did we build the correct product? Business owners ask this

Earlier test types mostly verify. Acceptance testing validates.

### Who does it

Usually the people who asked for the software.

- The product owner
- A business analyst
- The client or customer
- Real end users, in a trial

Testers help by preparing the environment, data and test cases. But the final yes or no belongs to the business.

### Acceptance criteria

These are the clear conditions a feature must meet to be accepted. They are written early, ideally before coding starts.

~~~text
Feature: Refund request
Given an order delivered less than 7 days ago
When the user clicks Request refund
Then a confirmation message appears
And the refund status shows Pending
~~~

Good criteria are:

- Written in plain words
- Specific and checkable
- Agreed by both business and team

### Common types

**User Acceptance Testing (UAT)**

Business users try the system with real-life scenarios. Does the Tatkal booking feel right? Does the report give the numbers the finance team needs?

**Business acceptance testing**

Checks that the software supports business rules and processes, such as GST calculation.

**Alpha and beta testing**

- Alpha: tested inside the company by staff
- Beta: tested by a small group of real outside users

**Contract and regulatory acceptance**

Checks that the product meets legal rules or contract terms. For example, a banking app must follow data security rules.

### The flow

~~~text
Requirements -> Build -> Testing done -> UAT by business -> Sign-off -> Release
                                              |
                                      Rejected -> fix and retest
~~~

### What the tester does

- Helps write acceptance criteria
- Prepares a stable UAT environment with realistic data
- Trains users on how to report issues
- Collects and tracks the feedback
- Retests fixes
- Keeps a record of the sign-off

### Where Playwright helps

Many teams turn acceptance criteria into automated tests. This approach is called acceptance test automation. Each Given, When, Then sentence becomes a test.

~~~python
from playwright.sync_api import expect

def test_refund_request_shows_pending_status(page):
    # Given an order delivered 3 days ago
    page.goto("https://staging.shop.example.com/orders/1001")
    # When the user clicks Request refund
    page.get_by_role("button", name="Request refund").click()
    # Then a confirmation appears and the status is Pending
    expect(page.get_by_text("Refund requested")).to_be_visible()
    expect(page.get_by_test_id("refund-status")).to_have_text("Pending")
~~~

Automated acceptance tests act as living documents. When the business reads the test names, they see what the system promises.

### But humans still sign off

Automation can prove the criteria are met. Only the business can say, "Yes, this is what we wanted." Real users often notice things the written criteria missed, like a confusing label.

### Common problems

- Criteria were vague, so people argue at the end
- UAT starts too late, leaving no time to fix
- Business users are busy and do not test properly
- The UAT environment has poor data

### How to avoid them

1. Write criteria early, with the product owner
2. Plan UAT time in the schedule
3. Give users a short guide
4. Use realistic data that makes sense to them

### The takeaway

Passing all tests is not enough. The business must agree that the software solves its problem. Write clear criteria, involve users early and keep a record of the final approval.`,
  handsOn: `Let's write acceptance criteria and turn them into tests.

### Step 1: Pick a feature

Use: "Users can save an address and pick it at checkout."

### Step 2: Write criteria

In a notes file, write five acceptance criteria in Given, When, Then form. Include one error case, such as a missing pincode.

### Step 3: Review with a friend

Ask a friend to act as the product owner. Do they agree? Do they want something changed? Update the criteria.

### Step 4: Create a UAT sheet

Make a table with columns: Scenario, Steps, Expected, Result, Comment, Accepted (yes or no).

### Step 5: Write test names

Write one Playwright test name per criterion. For example, test_saved_address_appears_at_checkout.

### Step 6: Write one test body

Write the full Playwright steps for one criterion on paper.

### Deliverable

You have five agreed criteria, a UAT sheet, five test names and one full Playwright test sketch.`,
  challenge: `A school fee payment app is about to launch. The principal is the product owner.

Prepare for acceptance:

1. Write eight acceptance criteria for paying a fee online, including a failed payment and a receipt
2. Name who should join UAT and why
3. Describe the UAT environment and test data you would prepare
4. Write a one-page guide for the principal on how to test and report issues
5. Convert three criteria into Playwright test names

Then answer:

- What is the difference between verification and validation?
- What happens if the principal rejects the build?
- Why should criteria be written before coding?

Finish with two lines on why passing every test does not guarantee acceptance.`,
  proTips: [
    "Write acceptance criteria in plain words, before coding starts.",
    "Agree the criteria with the product owner so there are no surprises at the end.",
    "Plan UAT time in the schedule. Do not squeeze it in at the last minute.",
    "Use realistic, easy-to-understand data in the UAT environment.",
    "Keep a written record of the sign-off.",
  ],
  commonMistakes: [
    {
      mistake: "Writing vague criteria like 'should be user-friendly'",
      fix: "Write specific, checkable statements with clear expected results.",
    },
    {
      mistake: "Starting UAT a day before release",
      fix: "Plan time for UAT and for fixing what it finds.",
    },
    {
      mistake: "Thinking passing all tests means the business will accept",
      fix: "Tests check correctness. Acceptance checks that it is the right product.",
    },
    {
      mistake: "Giving business users a messy environment",
      fix: "Prepare clean, realistic data and a stable build before UAT begins.",
    },
    {
      mistake: "Skipping the written sign-off",
      fix: "Record who approved what and when. It avoids disputes later.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Acceptance criteria",
      code: `Feature: Refund request
Given an order delivered less than 7 days ago
When the user clicks Request refund
Then a confirmation message appears
And the refund status shows Pending`,
    },
    {
      language: "text",
      title: "A simple UAT sheet row",
      code: `Scenario: Save an address
Steps: Open profile, click Add address, fill the form, save
Expected: Address appears in the list
Result: Pass
Comment: none
Accepted: yes`,
    },
    {
      language: "python",
      title: "A criterion turned into a Playwright test",
      code: `from playwright.sync_api import expect

def test_refund_request_shows_pending_status(page):
    page.goto("https://staging.shop.example.com/orders/1001")
    page.get_by_role("button", name="Request refund").click()
    expect(page.get_by_text("Refund requested")).to_be_visible()
    expect(page.get_by_test_id("refund-status")).to_have_text("Pending")`,
    },
  ],
  furtherReading: [
    {
      title: "Atlassian — User acceptance testing",
      url: "https://www.atlassian.com/agile/software-development/acceptance-testing",
    },
    {
      title: "ISTQB — Software testing glossary",
      url: "https://glossary.istqb.org/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["acceptance-testing", "uat", "business-requirements", "automation-concepts"],
};

export default topic;