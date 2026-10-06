import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "xpath-predicates",
    title: "XPath Predicates",
    summary:
      "Use square brackets to narrow an XPath locator by attribute, text, position, or condition.",
    whyItMatters:
      "Predicates turn a broad XPath into a specific one. They help you understand older test suites, even though Playwright locators are usually clearer.",
    notes: `An XPath **predicate** is a condition inside square brackets. It filters a list of matching elements.

Think of it like ordering biryani on Swiggy. First, you search for restaurants. Then you add filters: vegetarian, rating above 4, delivery under 30 minutes.

XPath works in the same way.

Without a predicate, this XPath finds every input on a page:

~~~text
//input
~~~

With a predicate, you can narrow it down:

~~~text
//input[@name="email"]
~~~

Now XPath finds only input elements whose name attribute is email.

### The square bracket pattern

Most predicates look like this:

~~~text
//tag[condition]
~~~

The tag tells XPath what kind of element to look for. The condition tells it which matching element you want.

For example:

~~~text
//button[@type="submit"]
~~~

Read it in plain English:

- Find button elements
- Keep only buttons
- Where the type attribute is submit

### Attribute predicates

Attributes are the most common way to filter XPath.

~~~html
<input name="email" type="email" />
<input name="password" type="password" />
<button data-testid="login-submit">Log in</button>
~~~

You can target them like this:

~~~text
//input[@name="email"]
//input[@type="password"]
//button[@data-testid="login-submit"]
~~~

The at symbol means attribute.

So this:

~~~text
[@name="email"]
~~~

means: where the name attribute equals email.

### Text predicates

You can also match visible text.

~~~html
<button>Save changes</button>
<button>Cancel</button>
~~~

XPath can find the Save changes button:

~~~text
//button[text()="Save changes"]
~~~

This works when the text is simple and has no extra spaces.

Real pages often contain spaces or line breaks because of formatting. In that case, use normalize-space:

~~~text
//button[normalize-space()="Save changes"]
~~~

Normalize-space removes extra spaces before, after, and between words. It is safer for visible text matching.

### Contains predicates

Sometimes you know only part of an attribute or text.

~~~html
<button class="btn btn-primary">Continue to payment</button>
<a href="/products/keyboard">Keyboard</a>
~~~

Use contains:

~~~text
//button[contains(@class, "btn-primary")]
//a[contains(@href, "/products/")]
//button[contains(normalize-space(), "payment")]
~~~

This is useful, but do not make it too broad. A page may have several links containing products or several buttons containing payment.

### Position predicates

You can select an item by position.

~~~html
<ul>
  <li>Python</li>
  <li>TypeScript</li>
  <li>Playwright</li>
</ul>
~~~

Examples:

~~~text
//li[1]
//li[2]
//li[last()]
~~~

These mean first list item, second list item, and last list item.

Position-based XPath is risky for test automation. If someone adds a new item at the top, the second item becomes the third.

It is like saying, 'click the second shop on this street'. That works only until a new shop opens.

Use position only when order is genuinely part of the behaviour you are testing. For example, checking that the first search result is the sponsored one.

### Multiple conditions

You can join conditions with and or or.

~~~text
//input[@type="email" and @required]
//button[@type="submit" and not(@disabled)]
//a[@href="/home" or @href="/dashboard"]
~~~

The first example finds a required email input.

The second finds a submit button that is not disabled.

The third finds a link going to either home or dashboard.

### A useful form example

Suppose your login form looks like this:

~~~html
<form>
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Log in</button>
</form>
~~~

Possible XPath locators are:

~~~text
//input[@name="email"]
//input[@type="password"]
//button[normalize-space()="Log in"]
~~~

But the Playwright versions are clearer:

~~~python
page.get_by_label("Email")
page.get_by_label("Password")
page.get_by_role("button", name="Log in")
~~~

The XPath helps you read old code. The Playwright locator is what you should reach for first in new code.

### The simple rule

A good predicate uses a stable fact about the element:

- Meaningful name attribute
- Test ID
- Accessible label
- Clear visible text
- Stable state such as disabled

A weak predicate depends on temporary layout, generated classes, or a changing position in a list.`,
    handsOn: `Let's use predicates in the browser console.

### Step 1: Create a page

Create a file named xpath-predicates.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XPath Predicate Practice</title>
  </head>
  <body>
    <h1>Account settings</h1>

    <form>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label for="phone">Phone</label>
      <input id="phone" name="phone" type="tel" />

      <label for="password">Password</label>
      <input id="password" name="password" type="password" required />

      <button type="button">Cancel</button>
      <button type="submit" data-testid="save-profile">
        Save changes
      </button>
    </form>

    <ul>
      <li>Profile</li>
      <li>Security</li>
      <li>Notifications</li>
    </ul>
  </body>
</html>
~~~

Open the page in your browser and then open DevTools.

### Step 2: Test attribute predicates

In the Console tab, run each expression:

~~~javascript
$x("//input[@name='email']")
$x("//input[@type='password']")
$x("//button[@data-testid='save-profile']")
~~~

Each command should return one matching element in an array.

### Step 3: Test text predicates

Run:

~~~javascript
$x("//button[normalize-space()='Save changes']")
$x("//button[contains(normalize-space(), 'Save')]")
~~~

Both should find the Save changes button.

### Step 4: Test position predicates

Run:

~~~javascript
$x("//li[1]")
$x("//li[2]")
$x("//li[last()]")
~~~

Inspect the returned elements. The first is Profile, the second is Security, and the last is Notifications.

### Step 5: Write Playwright alternatives

For the email field and save button, write the locators you would prefer in Playwright:

~~~python
page.get_by_label("Email")
page.get_by_role("button", name="Save changes")
~~~

### Deliverable

You tested XPath predicates for attributes, text, partial text, and list position. You also wrote clearer Playwright alternatives for two elements.`,
    challenge: `Build a simple product list with three cards.

Each card should have:

- Product name
- Price
- Add to cart button
- A data-product-id attribute

Use any three products you like. A notebook, headphones, and a cricket bat are good examples.

Then write XPath expressions for:

1. The button inside the product card with data-product-id equal to notebook
2. The product whose name contains Headphones
3. The first Add to cart button
4. The last product card
5. Every button that is not disabled

Finally, write the Playwright locator you would prefer for the Add to cart button on the notebook card.

Hint: use a card locator first, then locate the button inside it. That is easier to read than one giant XPath.

Your goal is to practise filtering. Do not worry if your first XPath is long. Make it clearer one condition at a time.`,
    proTips: [
      "Use stable attributes in predicates, especially data-testid, name, and meaningful IDs.",
      "Use normalize-space when matching button text because formatted HTML often adds invisible spaces.",
      "Avoid position predicates such as li[2] unless the position itself is important to the test.",
      "Keep each predicate focused. A short locator with one clear condition is easier to debug.",
      "When an XPath gets too clever, pause and check whether a Playwright role, label, or test ID locator is simpler.",
    ],
    commonMistakes: [
      {
        mistake: "Using text() when a button contains nested markup",
        fix: "Use normalize-space() or contains(normalize-space(), ...) because text may be split across child elements.",
      },
      {
        mistake: "Relying on the second or third element in a changing list",
        fix: "Use a stable name, ID, or test ID instead. Positions move when the page changes.",
      },
      {
        mistake: "Writing a contains condition that matches too many elements",
        fix: "Make the text or attribute condition more specific, or narrow the search to a parent container.",
      },
      {
        mistake: "Using a generated CSS class in an XPath predicate",
        fix: "Generated classes can change on every build. Prefer a meaningful attribute or visible accessible name.",
      },
      {
        mistake: "Using XPath for a simple labelled form field",
        fix: "Use get_by_label in Playwright. It is shorter, clearer, and more accessible.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Common XPath predicate patterns",
        code: `//input[@name="email"]
//button[@type="submit"]
//button[normalize-space()="Save"]
//a[contains(@href, "/products/")]
//li[last()]`,
      },
      {
        language: "text",
        title: "Multiple conditions in one predicate",
        code: `//input[@type="email" and @required]
//button[@type="submit" and not(@disabled)]
//a[@href="/home" or @href="/dashboard"]`,
      },
      {
        language: "python",
        title: "Preferred Playwright alternatives",
        code: `page.get_by_label("Email")
page.get_by_role("button", name="Save changes")
page.get_by_test_id("save-profile")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — XPath syntax",
        url: "https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript",
      },
      {
        title: "Playwright — Locators",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["xpath", "predicates", "locators", "web-fundamentals"],
  };

export default topic;
