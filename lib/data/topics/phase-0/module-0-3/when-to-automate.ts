import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "when-to-automate",
  title: "When to Automate (and When Not To)",
  summary:
    "A practical checklist to decide what to automate, what to skip and what to leave for humans.",
  whyItMatters:
    "Automating the wrong things wastes weeks. Automating the right things saves months. This checklist helps you tell the difference.",
  notes: `Not every test deserves a script. Smart testers choose carefully.

Think of an auto driver deciding which routes to take daily. He does not plan a new path for a one-time trip. But for the route he drives every day, he knows every turn. Automation is the same. Spend effort where you repeat.

### Good candidates for automation

Automate a test when most of these are true:

- **It repeats often.** Login, search, checkout, run every release
- **It is stable.** The feature does not change every week
- **It is important.** If it breaks, the business suffers
- **It is boring and exact.** Many steps, clear pass or fail
- **It needs many data sets.** Same steps with fifty different inputs
- **It runs on many browsers or devices.** Doing this by hand is painful
- **It is risky to forget.** Old bugs that must never return

Example: checking that a user can log in with a valid email and password. It runs on every release. It is clear and important. Automate it.

### Poor candidates for automation

Skip or delay automation when:

- **The feature is still changing.** Your script will break daily
- **You will run it once.** One-time checks are cheaper by hand
- **It needs human judgement.** Does this design feel nice? Is this text friendly?
- **It depends on things you cannot control.** For example, a live SMS from a real telecom company
- **The cost is more than the benefit.** Weeks of effort to save minutes

### The payback calculation

A simple way to think:

~~~text
Time to write and maintain the script  =  A
Time to run the test by hand           =  B
Number of times you will run it        =  N

Automate if  N x B  is clearly more than  A
~~~

If a test takes 10 minutes by hand and runs 200 times a year, that is about 33 hours. A script that costs 4 hours to write and 4 hours to maintain is a good deal.

### Leave for humans

Some work belongs to people.

- Exploring a new feature to find surprises
- Judging look and feel
- Checking usability with real users
- Testing odd, creative paths

We cover exploring in a later topic.

### A priority order

When you have many candidates, start with this order:

1. A smoke set: the few checks that prove the app is alive
2. The main user journeys: login, search, buy, pay
3. High-risk or high-cost areas: payments, security, data loss
4. Areas with frequent bugs
5. Everything else, slowly

### Think about data and environment

Before automating, ask: can I get clean test data every time? Is there a test environment that stays stable? If not, fix that first, or your script will fail for reasons that have nothing to do with the app.

### Think about who maintains it

A script nobody maintains becomes a burden. Decide who owns it. Keep tests small and readable so a teammate can fix them.

### A short Playwright example

A good candidate is a repeated, clear journey.

~~~python
def test_search_shows_results(page):
    page.goto("https://shop.example.com")
    page.get_by_placeholder("Search products").fill("tea")
    page.keyboard.press("Enter")
    expect(page.get_by_role("listitem").first).to_be_visible()
~~~

This runs often, has a clear result and needs no human judgement.

### Revisit your choices

Decisions change. A feature that was unstable may become stable. A script that keeps breaking may need a rewrite or may be a sign that it should not be automated. Review every few months.

### The takeaway

Automate what is repeated, stable, important and clear. Leave the rest to humans, or wait. Use numbers when you can, and ask for help when you are unsure.`,
  handsOn: `Let's score real test cases.

### Step 1: Make a table

In a notes file, create columns: Test, Repeats often, Stable, Important, Clear pass or fail, Decision.

### Step 2: List eight tests

Use a shopping app. Write these tests:

1. Login with valid details
2. Search for a product
3. Add a product to the cart
4. Pay with a card
5. Check if the new banner looks attractive
6. Check a feature the team plans to redesign next week
7. Try random strange inputs in the search box
8. Verify a real OTP message from a phone network

### Step 3: Score each test

Mark each column with yes or no.

### Step 4: Decide

If you have at least three yes marks with Stable as yes, write Automate. If not, write Manual or Wait.

### Step 5: Do the payback math

For two tests marked Automate, estimate hand time per run, runs per year and script time. Check if the payback is clear.

### Step 6: Write one Playwright sketch

Write the steps for the first Automate item.

### Deliverable

You have a scored table of eight tests, a decision for each, payback math for two and one Playwright sketch.`,
  challenge: `You join a team with a travel booking website. The team has no automation yet. You have two weeks.

Prepare a plan:

1. List the ten most important user journeys
2. Pick the first three to automate and explain why
3. Name two journeys that you will keep manual
4. Name one journey that you will wait on and say what must change first
5. Write the payback calculation for your top choice
6. List two things to check before automating: test data and environment

Then explain in your own words why 'automate everything' and 'automate nothing' are both poor plans.`,
  proTips: [
    "Start with a small smoke set before building a big suite.",
    "Do the payback math on paper. It stops emotional decisions.",
    "Check test data and environment before you write any script.",
    "Keep scripts small and readable so teammates can maintain them.",
    "Review your automation choices every few months.",
  ],
  commonMistakes: [
    {
      mistake: "Automating a feature that is about to be redesigned",
      fix: "Wait for the feature to settle. Otherwise you will rewrite the script right away.",
    },
    {
      mistake: "Automating tests that need human judgement",
      fix: "Leave look, feel and usability checks to people.",
    },
    {
      mistake: "Starting with the hardest test",
      fix: "Start with a small, stable, important journey. Build confidence first.",
    },
    {
      mistake: "Ignoring test data and environment problems",
      fix: "Make sure you can get clean data and a stable environment, or scripts will fail randomly.",
    },
    {
      mistake: "Never reviewing old automation decisions",
      fix: "Check every few months. Remove or rewrite scripts that cost more than they save.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Quick checklist",
      code: `Automate when:
  [x] repeats often
  [x] stable feature
  [x] important to business
  [x] clear pass or fail
  [x] many data sets or browsers

Skip or wait when:
  [ ] still changing
  [ ] run only once
  [ ] needs human judgement
  [ ] depends on things you cannot control`,
    },
    {
      language: "text",
      title: "Payback calculation",
      code: `By hand:  10 minutes x 200 runs  = about 33 hours a year
Script:   4 hours to write + 4 hours to maintain = 8 hours
Result:   Automate. Saves about 25 hours.`,
    },
    {
      language: "python",
      title: "A good automation candidate",
      code: `from playwright.sync_api import expect

def test_search_shows_results(page):
    page.goto("https://shop.example.com")
    page.get_by_placeholder("Search products").fill("tea")
    page.keyboard.press("Enter")
    expect(page.get_by_role("listitem").first).to_be_visible()`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Best practices",
      url: "https://playwright.dev/python/docs/best-practices",
    },
    {
      title: "Ministry of Testing — Test automation",
      url: "https://www.ministryoftesting.com/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["when-to-automate", "decision-making", "roi", "automation-concepts"],
};

export default topic;