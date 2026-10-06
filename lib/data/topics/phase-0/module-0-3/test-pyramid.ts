import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "test-pyramid",
  title: "The Test Pyramid",
  summary:
    "Many fast unit tests at the bottom, fewer integration tests in the middle, a handful of slow end-to-end tests on top.",
  whyItMatters:
    "A bad mix of tests makes a suite slow and flaky. The pyramid tells you how many tests of each kind to write.",
  notes: `The test pyramid is **a shape that tells you how to spread your tests**. Many at the bottom, few at the top.

Think of a Mumbai local train station. There are many small ticket counters and many platform signs. There are fewer control rooms. And there is one central command centre. Small checks are everywhere. Big checks are rare. That is the pyramid.

### The three layers

**Bottom: unit tests**

A unit test checks one small piece of code, like one function. It does not open a browser. It does not call a server.

- Very fast, often milliseconds
- Very cheap to write and run
- Easy to find the exact line that broke

Example: a function that adds GST to a price. A unit test checks that 100 becomes 118 at 18 percent.

**Middle: integration tests**

These check that two or more parts work together. For example, the code and the database. Or the app and an API.

- Slower than unit tests
- Catch problems at the joints between parts

Example: place an order through the API and check that a row appears in the orders table.

**Top: end-to-end tests**

These act like a real user. They open a browser, click, type and check the screen. This is where Playwright lives.

- Slowest to run
- Most expensive to write and maintain
- Most realistic

Example: log in, search for a dish, add to cart and pay.

### Why the shape matters

Imagine the shape upside down. Thousands of end-to-end tests and almost no unit tests. This is called the **ice cream cone**.

- The suite takes hours to run
- Tests fail for random reasons
- When one fails, nobody knows where the bug is
- Developers stop trusting the results

A pyramid keeps the suite fast and the failures easy to understand.

### A rough guide

There is no fixed number. But a common idea is:

- Most tests are unit tests
- A good number are integration tests
- A small, careful set are end-to-end tests

### What this means for a Playwright learner

Playwright tests are at the top. So choose them wisely. Use them for **important user journeys**, such as login, checkout and sign-up. Do not use them to check every small rule.

For example, do not write ten browser tests to check ten GST amounts. Test the GST function with unit tests. Then write one browser test that checks the final bill shows on screen.

~~~python
# One E2E test for the journey
page.goto("https://shop.example.com")
page.get_by_role("button", name="Add to cart").first.click()
page.get_by_role("link", name="Cart").click()
expect(page.get_by_text("Total")).to_be_visible()
~~~

### Playwright can help lower down too

Playwright can call APIs directly. That makes it useful for integration-style checks without a browser page.

~~~python
response = page.request.get("https://shop.example.com/api/cart")
assert response.status == 200
~~~

This is faster than clicking through the page.

### Who writes which tests?

- Developers usually write unit tests
- Developers and testers share integration tests
- Testers often own end-to-end tests

But the best teams talk to each other, so no layer is repeated needlessly.

### The takeaway

Test small things with small tests. Test the whole journey with a few big tests. Your suite will stay fast, and your failures will be easy to read.`,
  handsOn: `Let's draw and fill your own pyramid.

### Step 1: Draw it

On paper, draw a triangle. Split it into three layers. Label them Unit, Integration and End-to-end from bottom to top.

### Step 2: Pick a feature

Pick a feature, such as applying a discount coupon on a shopping site.

### Step 3: List possible tests

Write about ten tests for the feature. For example:

- Coupon code gives 10 percent off
- Expired coupon is rejected
- Coupon works only once
- Discount is saved in the database
- API returns the new total
- User sees the new total on screen
- User sees an error message for a bad coupon

### Step 4: Place each test

Put each test in the right layer. Rules like 10 percent calculation go to Unit. API and database checks go to Integration. What the user sees goes to End-to-end.

### Step 5: Count

Count how many tests sit in each layer. Is your drawing a pyramid or a cone?

### Step 6: Write one Playwright test idea

For the top layer, write one browser test on paper.

### Deliverable

You have a labelled pyramid, ten tests placed in layers and one Playwright idea for the top layer.`,
  challenge: `Take a bus booking website.

Write 15 test ideas across these features: search buses, select seat, apply offer, pay, cancel ticket.

Then:

1. Place each idea in Unit, Integration or End-to-end
2. Count the tests in each layer
3. Check the shape. If it looks like an ice cream cone, move some tests down
4. Choose the three most important end-to-end tests and explain why
5. Write one line on why you should not test every rule through the browser

Finally, explain in your own words why an ice cream cone suite is slow and hard to trust.`,
  proTips: [
    "Test each rule at the lowest layer that can check it.",
    "Keep end-to-end tests for important user journeys only.",
    "If a browser test is checking a calculation, move it to a unit test.",
    "Use Playwright API calls for fast integration-style checks.",
    "Talk to developers. Find out what unit tests already exist before you write more.",
  ],
  commonMistakes: [
    {
      mistake: "Writing only end-to-end tests",
      fix: "Add unit and integration tests so failures are faster and easier to trace.",
    },
    {
      mistake: "Checking every small rule through the browser",
      fix: "Test small rules with small tests. Use the browser for the full journey.",
    },
    {
      mistake: "Thinking the pyramid has exact numbers",
      fix: "It is a guide to shape, not a fixed formula. Many at the bottom, few at the top.",
    },
    {
      mistake: "Repeating the same check in all three layers",
      fix: "Agree with the team who covers what, so work is not duplicated.",
    },
    {
      mistake: "Assuming testers only work at the top",
      fix: "Testers can also help with integration and API checks, and review unit test coverage.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "The pyramid shape",
      code: `        /\\
       /E2E\\       few, slow, realistic
      /------\\
     /Integr. \\    some, medium speed
    /----------\\
   /   Unit     \\  many, fast, cheap
  /--------------\\`,
    },
    {
      language: "python",
      title: "A unit-style check (no browser)",
      code: `def add_gst(price, rate):
    return round(price * (1 + rate / 100))

assert add_gst(100, 18) == 118`,
    },
    {
      language: "python",
      title: "An integration-style check with Playwright API",
      code: `response = page.request.get("https://shop.example.com/api/cart")
assert response.status == 200
assert "items" in response.json()`,
    },
  ],
  furtherReading: [
    {
      title: "Martin Fowler — The Practical Test Pyramid",
      url: "https://martinfowler.com/articles/practical-test-pyramid.html",
    },
    {
      title: "Playwright — API testing",
      url: "https://playwright.dev/python/docs/api-testing",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["test-pyramid", "unit-tests", "integration-tests", "e2e", "automation-concepts"],
};

export default topic;