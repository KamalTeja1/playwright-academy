import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "manual-vs-automated-testing-deep",
  title: "Manual vs Automated Testing: Deciding on a Real Project",
  summary:
    "Not a debate. A decision. Learn how a real team chooses between testing by hand and testing with code.",
  whyItMatters:
    "New testers often think automation replaces manual work. Real projects need both, and you must know which to pick for each situation.",
  notes: `Earlier, you learned what manual and automated testing are. Now let us talk about **how to choose** on a real project.

Think of a hotel kitchen. The cook tastes the dal himself before serving. That is manual testing. But the same kitchen also has a timer on the pressure cooker and a thermometer on the fridge. Those are automated checks. A good kitchen uses both. Nobody argues about which is better.

### What manual testing is good at

Manual testing uses human eyes, human judgement and human curiosity.

- Does this page look right and feel easy to use?
- Does the new feature make sense to a first-time user?
- Is the error message polite and clear?
- What happens if I do something strange?

A script can only check what you told it to check. A human notices the button that is half hidden behind the footer.

### What automation is good at

Automation is best for work that is **repeated, boring and rule-based**.

- Checking login on five browsers after every code change
- Running the same 300 checks every night
- Testing with 50 different inputs in a table
- Catching old bugs coming back

A tester doing the same 300 checks by hand will get tired and miss things. A script does not get tired.

### The cost side

Automation is not free. Be honest about this.

- Writing a script takes more time than running the test once by hand
- Scripts need maintenance when the page changes
- A broken script wastes everyone's time

So automation pays back only when you run the test **many times**. Think of buying a pressure cooker. For one meal, it is a waste. For daily cooking over years, it is a great deal.

### A simple rule of thumb

Ask three questions about any test:

1. Will I run this many times?
2. Are the steps and expected result clear and stable?
3. Does a computer judge it better than a human?

If all three are yes, automate it. If the answer to the last one is no, test it by hand.

### Real project example

Take a food ordering app. Here is how a team might split the work.

- **Automate:** login, search for a dish, add to cart, apply a coupon, place an order. These run on every release.
- **Manual:** does the new home screen design feel nice? Is the offers banner readable on a small phone?
- **Both:** a new payment flow. A human explores it first. Then the stable parts get automated.

### The common trap

Some managers say, "Automate everything." That sounds clever but leads to a slow, fragile suite. Others say, "Automation is a waste." That leads to testers repeating the same checks every week.

The right answer is in the middle. Start by hand, learn the feature, then automate what is stable and repeated.

### Order matters

Do not automate a feature that is still changing every day. You will rewrite the script daily. Wait until the behaviour settles.

Also, never automate a test you have not run by hand first. If you do not understand the steps, your script will test the wrong thing.

### Where Playwright fits

Playwright is a tool for the automated side. It opens a real browser and does what a user would do. But the decision on what to automate comes from your thinking, not from the tool.

~~~python
# A good automation candidate: repeated, stable, clear result
page.goto("https://shop.example.com/login")
page.get_by_label("Email").fill("test@example.com")
page.get_by_label("Password").fill("secret123")
page.get_by_role("button", name="Log in").click()
expect(page.get_by_text("Welcome back")).to_be_visible()
~~~

### Summary

Manual testing finds what nobody thought of. Automation protects what you already know. A strong tester uses both, and chooses with a calm mind.`,
  handsOn: `Let's practise choosing between manual and automated.

### Step 1: Pick an app

Pick an app you use often. A food delivery app, a train booking site or a UPI app will do.

### Step 2: List ten checks

Write ten things a tester might check. For example:

- Login with a valid account
- Login with a wrong password
- Search for a dish
- The look of the offers banner
- Apply a coupon
- Pay using UPI
- The app on a very small phone
- Cancel an order
- The welcome message tone
- Add 20 items to the cart

### Step 3: Score each check

Make a table in a notes file with these columns: Check, Run many times (yes or no), Stable steps (yes or no), Computer can judge (yes or no).

### Step 4: Decide

If all three are yes, mark it Automate. Otherwise mark it Manual.

### Step 5: Write one Playwright snippet

Pick one Automate item and write the Playwright steps on paper.

### Deliverable

You have a table of ten checks, each marked Automate or Manual, with a reason. You also wrote one Playwright sketch for one automated check.`,
  challenge: `Imagine you join a team that builds a bus ticket booking website.

The team has 40 manual test cases. The manager asks you which ones to automate first.

Write a short plan with these parts:

1. Name five test cases you would automate first. Give one reason each
2. Name three test cases you would keep manual. Give one reason each
3. Name one feature that is changing every week and explain why you would wait
4. Explain in three lines why 'automate everything' is a risky idea
5. Estimate: if a test takes 5 minutes by hand and runs 100 times a year, how many hours is that? Would automation pay back?

Keep your answers simple and practical.`,
  proTips: [
    "Run a test by hand at least once before you automate it.",
    "Automate what repeats. Explore what is new.",
    "Do not automate a feature that is still changing daily.",
    "Count the hours saved over a year before you decide.",
    "Keep some time every sprint for manual exploring. It finds bugs scripts never will.",
  ],
  commonMistakes: [
    {
      mistake: "Believing automation will replace all manual testing",
      fix: "Automation protects known behaviour. Humans still find new, unexpected problems.",
    },
    {
      mistake: "Automating a feature that is still changing every day",
      fix: "Wait until the behaviour is stable, or you will rewrite the scripts constantly.",
    },
    {
      mistake: "Automating a test you never ran by hand",
      fix: "Run it manually first so you understand the steps and the expected result.",
    },
    {
      mistake: "Ignoring maintenance cost",
      fix: "Count the time to fix scripts when pages change. Include it in your decision.",
    },
    {
      mistake: "Saying 'manual testing is old-fashioned'",
      fix: "Usability, look and feel, and exploring need human judgement. Both styles have a place.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Three-question decision check",
      code: `1. Will this test run many times?        yes / no
2. Are steps and result clear and stable? yes / no
3. Can a computer judge the result?        yes / no

All yes  -> Automate
Any no   -> Keep manual, or wait`,
    },
    {
      language: "text",
      title: "A simple split for a food ordering app",
      code: `Automate: login, search, add to cart, coupon, place order
Manual:   new home screen feel, banner readability on small phones
Both:     new payment flow (explore first, automate stable parts later)`,
    },
    {
      language: "python",
      title: "A good automation candidate",
      code: `from playwright.sync_api import expect

page.goto("https://shop.example.com/login")
page.get_by_label("Email").fill("test@example.com")
page.get_by_label("Password").fill("secret123")
page.get_by_role("button", name="Log in").click()
expect(page.get_by_text("Welcome back")).to_be_visible()`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Why Playwright",
      url: "https://playwright.dev/python/docs/intro",
    },
    {
      title: "Ministry of Testing — Test automation articles",
      url: "https://www.ministryoftesting.com/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["manual-testing", "automation", "decision-making", "automation-concepts"],
};

export default topic;