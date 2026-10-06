import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "css-selector-anti-patterns",
  title: "CSS Selector Anti-Patterns",
  summary:
    "Common CSS selector habits that look fine today and break next week. Learn to spot them and write better ones.",
  whyItMatters:
    "A weak selector is a future flaky test. Knowing the bad patterns saves you from late-night debugging.",
  notes: `An anti-pattern is **a habit that looks helpful but causes trouble later**. In selectors, it is a pattern that works today and breaks after the next release.

Think of giving directions to an auto driver. "Go straight, turn left at the third banyan tree, then the second shop." If someone cuts one tree, the driver is lost. "Go to Gandhi Market bus stop" works every time. Good selectors are like the bus stop name.

### Anti-pattern 1: Long chains

~~~text
div > div > div > ul > li:nth-child(3) > a
~~~

This copies the page structure. Any new wrapper div breaks it.

Better: target the element directly by a stable clue.

~~~text
a[data-testid="profile-link"]
~~~

### Anti-pattern 2: Generated class names

~~~text
.css-1x9kq2
.sc-bdfBwQ
.jss123
~~~

Tools that build the page create these names. They change with every build. Never rely on them.

### Anti-pattern 3: Style-only classes

~~~text
.btn-primary
.text-red
.mt-4
~~~

These describe looks, not purpose. A designer can change a button from primary to secondary, and your test fails though the button still works.

### Anti-pattern 4: Position-based selectors

~~~text
li:nth-child(2)
button:first-of-type
.card:nth-of-type(4)
~~~

Position changes when data changes. The second item today may be the fifth tomorrow.

Position is fine only when order itself is the point, such as checking that the first result is the cheapest after sorting.

### Anti-pattern 5: Selecting by text through CSS tricks

CSS cannot match text well. People then lean on structure to work around it. In Playwright, use text locators instead.

~~~python
page.get_by_text("Add to cart")
page.get_by_role("button", name="Add to cart")
~~~

### Anti-pattern 6: Selectors that are too short

~~~text
button
input
a
~~~

These match many elements. Playwright's strict mode will complain when more than one matches.

### Anti-pattern 7: IDs that look random

~~~text
#input-8472913
#react-select-3-input
~~~

Some IDs are made by libraries and change on each render. A stable ID is fine. A random-looking one is not.

### Anti-pattern 8: Over-fitting to one page state

~~~text
.menu.open.visible .item.active
~~~

State classes come and go. Your test should not depend on a particular moment in the animation.

### Anti-pattern 9: The !important chain of the selector world

Stacking tag, class, ID and attribute in one selector gives a very specific rule that is hard to read and hard to change.

~~~text
form#login.login-form div.field input.input[type="email"]
~~~

Better:

~~~python
page.get_by_label("Email")
~~~

### What good selectors look like

- Based on **role, label, text or test ID**
- Short, usually one or two parts
- Based on attributes that exist for a reason, such as name, type, data-testid, aria-label
- Readable by a teammate in five seconds

~~~text
[data-testid="email-input"]
input[name="email"]
~~~

### The smell test

Before you save a selector, ask:

1. Would a new wrapper div break it?
2. Would a colour or style change break it?
3. Would new data in the list break it?
4. Does it match exactly one element?

If any answer is yes, rewrite it.

### Fix it at the source

If a page offers only bad selectors, the real fix is a data-testid. Ask developers to add one. It is a tiny change and makes everyone's life better.`,
  handsOn: `Let's find and fix bad selectors.

### Step 1: Create the page

In your html-practice folder, create selector-smells.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Selector Smells</title>
  </head>
  <body>
    <div class="css-1x9kq2">
      <div class="wrap">
        <ul>
          <li><a href="/home" class="btn btn-primary">Home</a></li>
          <li><a href="/orders" class="btn">Orders</a></li>
          <li><a href="/help" class="btn" data-testid="help-link">Help</a></li>
        </ul>
      </div>
    </div>
    <form>
      <label for="mail">Email</label>
      <input id="mail" name="email" type="email" />
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
~~~

### Step 2: Test the bad selectors

In the Console, run each one and note the count:

~~~javascript
$$(".css-1x9kq2 > .wrap > ul > li:nth-child(2) > a")
$$(".btn")
$$("a")
~~~

The first works today but is fragile. The others match too many.

### Step 3: Write better selectors

Fix each one using a stable clue:

~~~javascript
$$('[data-testid="help-link"]')
$$('input[name="email"]')
$$('a[href="/orders"]')
~~~

### Step 4: Write the Playwright versions

Write these in your notes:

~~~python
page.get_by_test_id("help-link")
page.get_by_label("Email")
page.get_by_role("link", name="Orders")
~~~

### Step 5: Break it on purpose

Add one more div around the list. Rerun the long chain. Notice it breaks. Rerun the better selectors. Notice they survive.

### Deliverable

You tested three weak selectors, replaced them with stable ones and proved the difference by changing the page.`,
  challenge: `Here are six selectors. For each one, name the anti-pattern, explain what could break it and write a better Playwright locator.

1. div.container > div.row > div.col > button.btn-primary
2. .css-9fz3a1
3. li:nth-child(5) a
4. button
5. #input-5839201
6. .menu.open.visible .item.active

Assume you can invent the page details, such as the visible text of the button or a label for the input.

Then pick any real website, find two selectors in DevTools that follow these anti-patterns, and rewrite them.

Finally, write a short message to a developer asking for a data-testid on one element. Be polite and say why it helps.`,
  proTips: [
    "Prefer role, label, text and test ID over CSS wherever possible.",
    "Keep selectors short. Two parts are usually enough.",
    "Never depend on generated class names such as css-1x9kq2.",
    "Use position only when the order itself is what you are testing.",
    "Ask developers for a data-testid when a page offers no stable clue.",
  ],
  commonMistakes: [
    {
      mistake: "Using Copy selector output directly",
      fix: "It often creates long chains. Replace it with a short, meaningful locator.",
    },
    {
      mistake: "Relying on style classes like btn-primary",
      fix: "Style classes change for design reasons. Use role, name or a test ID instead.",
    },
    {
      mistake: "Using nth-child for list items",
      fix: "Filter by visible text so the locator survives changes in order.",
    },
    {
      mistake: "Writing a selector like 'button' that matches many elements",
      fix: "Add a name, label or scope so the locator matches exactly one element.",
    },
    {
      mistake: "Keeping a selector that has already broken twice",
      fix: "Treat it as a warning. Rewrite it with a stable clue or ask for a data-testid.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Fragile selectors to avoid",
      code: `div > div > div > ul > li:nth-child(3) > a
.css-1x9kq2
.btn-primary
li:nth-child(2)
form#login.login-form div.field input.input[type="email"]`,
    },
    {
      language: "text",
      title: "Sturdier CSS selectors",
      code: `[data-testid="email-input"]
input[name="email"]
a[href="/orders"]`,
    },
    {
      language: "python",
      title: "Better still: user-facing locators",
      code: `page.get_by_test_id("help-link")
page.get_by_label("Email")
page.get_by_role("link", name="Orders")`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — CSS selectors",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
    },
    {
      title: "Playwright — Best practices",
      url: "https://playwright.dev/python/docs/best-practices",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["css", "selectors", "anti-patterns", "locators", "web-fundamentals"],
};

export default topic;