import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-case-anatomy",
  title: "Anatomy of a Test Case",
  summary:
    "Preconditions, steps, expected result and actual result. Learn to write a test case that a stranger can run without asking you anything.",
  whyItMatters:
    "A vague test case wastes everyone's time. A clear one can be run by a new joiner, or turned into a Playwright script, without confusion.",
  notes: `A test case is **a small written recipe for checking one thing**. If a stranger can follow it and get the same result, it is a good test case.

Think of a recipe card for making chai. It says how many cups of water, how much tea, when to add milk. It does not say, "make nice chai." A test case is the same. It leaves no guessing.

### The parts of a test case

**1. ID and title**

A short unique ID, like TC-101, and a clear title. The title should say what is checked.

Good title: Login fails with a wrong password.
Weak title: Login test.

**2. Preconditions**

What must be true before you start. Think of it as setting the table before the meal.

- The user account already exists
- The user is logged out
- The cart is empty
- The test environment is running

If preconditions are missing, the test fails for the wrong reason.

**3. Test data**

The exact values you will use. For example, email priya@example.com and password Wrong@123. Do not write "enter some email."

**4. Steps**

Numbered actions, one action per line, in order.

~~~text
1. Open the login page
2. Type priya@example.com in the Email field
3. Type Wrong@123 in the Password field
4. Click the Log in button
~~~

Use simple verbs: open, type, click, select. Avoid words like "try" or "check around."

**5. Expected result**

What should happen if the app works correctly. Be exact.

~~~text
An error message "Incorrect email or password" appears.
The user stays on the login page.
~~~

**6. Actual result**

What really happened when you ran it. You fill this in during the run.

**7. Status**

Pass if actual matches expected. Fail if not. Sometimes also Blocked, when you could not run it.

### A full example

~~~text
ID: TC-101
Title: Login fails with a wrong password
Preconditions: Account priya@example.com exists. User is logged out.
Test data: Email priya@example.com, Password Wrong@123
Steps:
  1. Open the login page
  2. Type the email
  3. Type the password
  4. Click Log in
Expected: Error "Incorrect email or password". Stay on login page.
Actual: (filled in during the run)
Status: (Pass or Fail)
~~~

### One test case, one purpose

Do not mix many checks in one case. If a case checks login, search and payment together, and it fails, you will not know which part broke. Keep each case small and focused.

### Positive and negative cases

For one feature, write both kinds.

- **Positive**: the right input gives the right result
- **Negative**: wrong or strange input is handled well

For login: right password works, wrong password fails, empty fields show a message, a very long email is handled.

### Write for a stranger

Imagine a new joiner running your case on a Monday morning. Can they do it without calling you? If not, add detail.

### From test case to Playwright

A clear test case turns into code almost line by line. This is the great benefit.

~~~python
def test_login_fails_with_wrong_password(page):
    page.goto("https://shop.example.com/login")
    page.get_by_label("Email").fill("priya@example.com")
    page.get_by_label("Password").fill("Wrong@123")
    page.get_by_role("button", name="Log in").click()
    expect(page.get_by_text("Incorrect email or password")).to_be_visible()
~~~

Each step became one line. The expected result became one assertion. If your written case is vague, your script will be vague too.

### Good habits

- Keep language simple and plain
- Use real values, not placeholders
- Make expected results checkable
- Review each other's cases

### The takeaway

A good test case is clear, small and repeatable. Write it so well that you could hand it to a stranger, or to Playwright, and get the same answer every time.`,
  handsOn: `Let's write two proper test cases.

### Step 1: Pick a feature

Use the login page of any practice site, or an app you know well.

### Step 2: Create a template

In a notes file, write these headings: ID, Title, Preconditions, Test data, Steps, Expected, Actual, Status.

### Step 3: Write a positive case

Write TC-001 for a valid login. Use real sample values and number your steps.

### Step 4: Write a negative case

Write TC-002 for a wrong password. Be exact about the error message you expect.

### Step 5: Swap and run

Give your cases to a friend. Ask them to run them without asking you questions. Note every question they ask.

### Step 6: Improve and convert

Add the missing detail. Then write the Playwright steps for TC-002 on paper.

### Deliverable

You have two clear test cases, a list of questions your friend asked and one Playwright sketch.`,
  challenge: `Pick a Forgot password feature.

Write five test cases:

1. A valid email receives a reset link
2. An email that is not registered
3. An empty email field
4. An email with a wrong format, like priya@
5. Clicking the reset link twice

For each case, include ID, title, preconditions, test data, numbered steps and expected result.

Then answer:

- Which cases are positive and which are negative?
- Which case has the most surprising expected result?
- Which two would you automate first, and why?

Finally, convert one case into a Playwright snippet.`,
  proTips: [
    "Write one action per step. It makes failures easy to locate.",
    "Use real data in the test case, not words like 'some email'.",
    "Make the expected result something you can check by eye or by code.",
    "Test your own case by handing it to a colleague.",
    "A good manual case converts easily into a Playwright script.",
  ],
  commonMistakes: [
    {
      mistake: "Writing vague steps like 'check the login'",
      fix: "Write exact actions: open, type, click. Include the values you use.",
    },
    {
      mistake: "Forgetting preconditions",
      fix: "State what must exist before starting, such as an account or an empty cart.",
    },
    {
      mistake: "Putting many checks into one case",
      fix: "Keep one purpose per case so a failure points to one cause.",
    },
    {
      mistake: "Writing an expected result like 'works fine'",
      fix: "Describe the exact message, page or value you expect.",
    },
    {
      mistake: "Only writing positive cases",
      fix: "Add negative cases too. Wrong, empty and strange input find many bugs.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A complete test case",
      code: `ID: TC-101
Title: Login fails with a wrong password
Preconditions: Account priya@example.com exists. User is logged out.
Test data: Email priya@example.com, Password Wrong@123
Steps:
  1. Open the login page
  2. Type the email
  3. Type the password
  4. Click Log in
Expected: Error "Incorrect email or password". Stay on login page.
Actual:
Status:`,
    },
    {
      language: "text",
      title: "Positive and negative cases for login",
      code: `Positive: valid email + valid password -> home page
Negative: valid email + wrong password -> error
Negative: empty email -> message "Email is required"
Negative: very long email -> handled without crash`,
    },
    {
      language: "python",
      title: "The same case as a Playwright test",
      code: `from playwright.sync_api import expect

def test_login_fails_with_wrong_password(page):
    page.goto("https://shop.example.com/login")
    page.get_by_label("Email").fill("priya@example.com")
    page.get_by_label("Password").fill("Wrong@123")
    page.get_by_role("button", name="Log in").click()
    expect(page.get_by_text("Incorrect email or password")).to_be_visible()`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Writing tests",
      url: "https://playwright.dev/python/docs/writing-tests",
    },
    {
      title: "Ministry of Testing — Test case writing",
      url: "https://www.ministryoftesting.com/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["test-case", "preconditions", "steps", "expected-result", "automation-concepts"],
};

export default topic;