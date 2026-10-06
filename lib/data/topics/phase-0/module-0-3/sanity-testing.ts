import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "sanity-testing",
  title: "Sanity Testing",
  summary:
    "A narrow, quick check after a bug fix or small change. It confirms the fix works and that nothing nearby broke.",
  whyItMatters:
    "After every fix, you need a fast answer: is the problem solved and is the neighbourhood safe? Sanity testing gives that answer without a full test run.",
  notes: `Sanity testing is **a focused check on a specific change**. A developer fixes one bug or adds a small feature. The tester checks that this one thing works, and that the areas close to it still behave.

Think of getting your phone screen repaired. After the repair, you test the screen. You touch every corner. You check brightness. You also quickly check the camera and the buttons, since the technician opened the phone. You do not test every app on the phone. You test the repaired part and its neighbours.

### What sanity testing is for

- A bug was fixed, and you must confirm the fix
- A small change was made to one area
- A minor feature was added

It answers: **Is this change sane? Does it make sense and work?**

### The two parts

**1. Check the fix itself**

Repeat the original steps from the bug report. The problem should be gone.

**2. Check the neighbours**

Test the features closely related to the change. A fix in the coupon code logic may affect the cart total, the invoice and the payment amount. Check those quickly.

### Example

A bug says: the cart total is wrong after removing one item when a coupon is applied.

The developer fixes the calculation. The tester runs a sanity check:

- Repeat the original steps. Is the total now right?
- Remove two items. Is the total still right?
- Remove the coupon. Is the total right?
- Open the checkout page. Does it show the same total?
- Check the invoice. Does it match?

That is about ten minutes of work, not a full test cycle.

### Sanity vs smoke

These two are often confused. Here is the simple difference.

~~~text
Smoke    Broad, shallow     "Is the whole build alive?"      After every build
Sanity   Narrow, deeper     "Is this change working?"        After a fix or small change
~~~

Smoke is like checking if the whole bus starts. Sanity is like checking that the repaired door closes well, and the windows beside it still slide.

### Sanity vs regression

- **Sanity** looks at one area closely and is done quickly
- **Regression** looks across the whole app to make sure old behaviour still works

Sanity often comes first. If the sanity check passes, the build moves on to the bigger regression run.

### Is sanity test scripted?

Often it is **unscripted** or lightly scripted. The tester uses judgement about which nearby areas to check. That is why it is quick. But a few key checks can be automated and reused.

### Where Playwright helps

When a bug is found, you can write a Playwright test that reproduces it. First, the test fails. After the fix, it passes. That test is now a permanent guard.

~~~python
from playwright.sync_api import expect

def test_total_correct_after_removing_item_with_coupon(page):
    page.goto("https://shop.example.com/cart")
    page.get_by_label("Coupon").fill("SAVE10")
    page.get_by_role("button", name="Apply").click()
    page.get_by_role("button", name="Remove Masala tea").click()
    expect(page.get_by_test_id("cart-total")).to_have_text("Rs. 450")
~~~

You can run this one test as a quick sanity check on the fix. Later it joins the regression suite.

### How to choose the neighbours

Ask the developer: what else does this code touch? Look at the bug area on a diagram or read the change summary. Think of data flowing out of the fixed part, such as totals, reports and emails.

### Good habits

- Keep sanity checks short, usually under thirty minutes
- Write down what you checked
- Report anything odd, even if it seems small
- Add a Playwright test for every important fix

### When sanity fails

If the fix does not work, reopen the bug with evidence. If a neighbour broke, raise a new bug. Do not start a full regression until sanity passes.

### The takeaway

Sanity testing is a quick, focused health check on a change. It saves time and catches fix-related surprises early.`,
  handsOn: `Let's run a sanity check on a small page.

### Step 1: Create a calculator page

In your html-practice folder, create sanity.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sanity Practice</title>
  </head>
  <body>
    <h1>Cart</h1>
    <p>Price: <span id="price">500</span></p>
    <label for="qty">Quantity</label>
    <input id="qty" type="number" value="1" />
    <button id="calc">Calculate</button>
    <p>Total: <span id="total">500</span></p>

    <script>
      document.getElementById("calc").addEventListener("click", function () {
        var price = Number(document.getElementById("price").textContent);
        var qty = Number(document.getElementById("qty").value);
        document.getElementById("total").textContent = price * qty;
      });
    </script>
  </body>
</html>
~~~

### Step 2: Pretend a bug was fixed

Imagine the bug was: total is wrong when the quantity is 3. The developer says it is fixed.

### Step 3: Check the fix

Set the quantity to 3 and click Calculate. The total should be 1500.

### Step 4: Check the neighbours

Try quantity 1, 2, 0 and 10. Try a negative number. Note anything odd.

### Step 5: Write the Playwright test

Write this in your notes:

~~~python
from playwright.sync_api import expect

def test_total_for_quantity_three(page):
    page.goto("file:///workspaces/playwright-academy/html-practice/sanity.html")
    page.get_by_label("Quantity").fill("3")
    page.get_by_role("button", name="Calculate").click()
    expect(page.locator("#total")).to_have_text("1500")
~~~

### Deliverable

You checked a fix, tested the neighbouring values, noted anything odd and wrote one Playwright test that guards the fix.`,
  challenge: `A developer fixed this bug: Discount is not applied when the user changes the delivery address.

Prepare a sanity check:

1. Write the steps to confirm the fix itself
2. List six neighbouring areas to check, such as totals, delivery charges and the invoice
3. Say which of these you would automate and why
4. Write a Playwright test name for the original bug
5. Say what you would do if the fix works but the delivery charge is now wrong

Then answer:

- How is this different from a smoke test?
- How is this different from a regression run?
- Why should the sanity check take less time than regression?

Finish with a two-line summary a new joiner could remember.`,
  proTips: [
    "Always repeat the original bug steps first.",
    "Ask the developer what else the change touches, then check those places.",
    "Add a Playwright test for every important fix. It joins the regression suite later.",
    "Keep notes of what you checked, so others can trust your result.",
    "Do not start a full regression run until sanity passes.",
  ],
  commonMistakes: [
    {
      mistake: "Confusing sanity testing with smoke testing",
      fix: "Smoke is broad and shallow for a whole build. Sanity is narrow and deeper for one change.",
    },
    {
      mistake: "Only repeating the bug steps and nothing else",
      fix: "Check the neighbouring features too. Fixes often disturb nearby code.",
    },
    {
      mistake: "Running a full regression for every tiny fix",
      fix: "Do a sanity check first. Save the full run for when sanity passes.",
    },
    {
      mistake: "Not writing down what was checked",
      fix: "Keep short notes. They help if the bug returns.",
    },
    {
      mistake: "Closing the bug without a guard test",
      fix: "Add a Playwright test for the fix so the bug cannot quietly come back.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Smoke vs sanity",
      code: `Smoke    broad, shallow    "Is the build alive?"          after every build
Sanity   narrow, deeper    "Is this change working?"      after a fix or small change`,
    },
    {
      language: "text",
      title: "A sanity checklist for a coupon fix",
      code: `1. Repeat original steps -> total is correct
2. Remove two items       -> total still correct
3. Remove the coupon      -> total correct
4. Open checkout          -> same total shown
5. Check the invoice      -> matches the total`,
    },
    {
      language: "python",
      title: "A guard test for the fixed bug",
      code: `from playwright.sync_api import expect

def test_total_correct_after_removing_item_with_coupon(page):
    page.goto("https://shop.example.com/cart")
    page.get_by_label("Coupon").fill("SAVE10")
    page.get_by_role("button", name="Apply").click()
    page.get_by_role("button", name="Remove Masala tea").click()
    expect(page.get_by_test_id("cart-total")).to_have_text("Rs. 450")`,
    },
  ],
  furtherReading: [
    {
      title: "ISTQB — Software testing glossary",
      url: "https://glossary.istqb.org/",
    },
    {
      title: "Playwright — Assertions",
      url: "https://playwright.dev/python/docs/test-assertions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 20,
  tags: ["sanity-testing", "bug-fix", "retest", "automation-concepts"],
};

export default topic;