import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "xpath-axes",
    title: "XPath Axes",
    summary:
      "Move through the page structure using parent, child, sibling, ancestor, and descendant relationships.",
    whyItMatters:
      "XPath axes help you read older locator code where an element must be found through its relationship with another element.",
    notes: `XPath axes describe the **relationship between elements**.

So far, you have found elements by tag, attribute, text, and position. Axes let you say things like:

- Find the parent of this button
- Find the label before this input
- Find the button inside this product card
- Find a row containing a particular email address

Think of a family wedding photo. You may not know every person's name, but you can say, 'find the parent of this child' or 'find the sibling standing next to her'.

The page DOM is also a tree. Every element can have parents, children, siblings, ancestors, and descendants.

### The DOM tree idea

Look at this small form:

~~~html
<form>
  <div class="field">
    <label for="email">Email</label>
    <input id="email" name="email" type="email" />
  </div>

  <button type="submit">Log in</button>
</form>
~~~

The relationships are:

- The form is the parent of the field div and button
- The field div is the parent of label and input
- The label and input are siblings
- The form is an ancestor of the input
- The input is a descendant of the form

XPath axes let you travel through these relationships.

### child::

The child axis finds direct children.

~~~text
//form/child::button
~~~

This means:

- Find a form
- Find its direct child button

You will often see a shorter version:

~~~text
//form/button
~~~

Both describe the same direct child relationship.

### parent::

The parent axis moves one level upward.

~~~text
//input[@name="email"]/parent::div
~~~

This means:

- Find the email input
- Move to its parent div

This can be useful when the input has no useful locator but its wrapper has a stable class or test ID.

Be careful though. Parent structure can change during a redesign. A developer may add one extra wrapper div, and your locator stops working.

### ancestor::

An ancestor is any parent, grandparent, or higher container.

~~~text
//input[@name="email"]/ancestor::form
~~~

This finds the form that contains the email input.

A practical example is a table row:

~~~html
<tr>
  <td>ravi@example.com</td>
  <td>Active</td>
  <td><button>Deactivate</button></td>
</tr>
~~~

You can find the row containing Ravi's email:

~~~text
//td[normalize-space()="ravi@example.com"]/ancestor::tr
~~~

Then find the Deactivate button inside that row:

~~~text
//td[normalize-space()="ravi@example.com"]/ancestor::tr//button[normalize-space()="Deactivate"]
~~~

This is powerful. It is also starting to become difficult to read.

In Playwright, a locator chain is usually clearer:

~~~python
row = page.get_by_role("row").filter(has_text="ravi@example.com")
row.get_by_role("button", name="Deactivate").click()
~~~

### descendant::

A descendant is any element nested somewhere below another element.

~~~text
//form/descendant::input
~~~

This finds every input inside the form, even if inputs sit inside several wrapper div elements.

The shorter XPath below usually does the same thing:

~~~text
//form//input
~~~

Two slashes between form and input mean: find input anywhere below this form.

### following-sibling::

A following sibling is an element at the same level that comes after the current element.

~~~html
<label>Email</label>
<input type="email" />
~~~

You can find the input after the label:

~~~text
//label[normalize-space()="Email"]/following-sibling::input
~~~

This can be useful when the label has text but the input has no ID or name.

Still, in new Playwright tests, use the label directly:

~~~python
page.get_by_label("Email")
~~~

### preceding-sibling::

A preceding sibling is an element at the same level that comes before the current element.

~~~text
//input[@type="email"]/preceding-sibling::label
~~~

This finds the label before an email input.

You will use this less often in tests. It is mainly useful for understanding the page while debugging.

### following:: and preceding::

These axes search more broadly through the document, not just siblings.

~~~text
//h2[normalize-space()="Billing"]/following::button[1]
~~~

This means: find the first button appearing anywhere after the Billing heading.

It may work today, but it is risky. Someone can add another button between the heading and the intended button.

Use broad axes only when you truly understand the page structure and cannot use a more meaningful locator.

### The practical rule

Axes are useful for **reading and repairing old XPath**. They are not your first choice for new Playwright tests.

Before writing an axis-heavy XPath, check for:

1. get_by_role with a clear name
2. get_by_label for a form field
3. get_by_test_id for an important custom element
4. A short CSS selector using a stable attribute

If an XPath needs three or four axes, it is usually telling you that the page needs better test IDs or accessibility labels.

### A good use case

A row in a data table is one reasonable use case. You first identify the row by user-visible content, then target something within that same row.

That mirrors how a real user thinks: find Ravi's row, then click Deactivate.

The goal is always the same: write locators that explain intent and survive normal UI changes.`,
    handsOn: `Let's practise XPath axes with a small user table.

### Step 1: Create a page

Create a file named xpath-axes.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XPath Axes Practice</title>
  </head>
  <body>
    <h1>Team members</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ravi</td>
          <td>ravi@example.com</td>
          <td>Active</td>
          <td><button>Deactivate</button></td>
        </tr>
        <tr>
          <td>Anita</td>
          <td>anita@example.com</td>
          <td>Inactive</td>
          <td><button>Activate</button></td>
        </tr>
      </tbody>
    </table>

    <form>
      <div class="field">
        <label>Email</label>
        <input type="email" name="email" />
      </div>
    </form>
  </body>
</html>
~~~

Open the page and open DevTools.

### Step 2: Find Ravi's row

Run this in the Console:

~~~javascript
$x("//td[normalize-space()='ravi@example.com']/ancestor::tr")
~~~

It should return Ravi's full table row.

### Step 3: Find the action inside Ravi's row

Run:

~~~javascript
$x("//td[normalize-space()='ravi@example.com']/ancestor::tr//button")
~~~

It should return the Deactivate button.

### Step 4: Find a parent and sibling

Run:

~~~javascript
$x("//input[@name='email']/parent::div")
$x("//label[normalize-space()='Email']/following-sibling::input")
~~~

The first query returns the field wrapper. The second returns the email input.

### Step 5: Write the Playwright version

For the Ravi action, write a clearer Playwright locator chain:

~~~python
row = page.get_by_role("row").filter(has_text="ravi@example.com")
row.get_by_role("button", name="Deactivate")
~~~

### Deliverable

You used ancestor, parent, descendant, and following-sibling axes. You also translated a complex XPath into a readable Playwright locator chain.`,
    challenge: `Create an order table with three rows.

Each row needs:

- Order number
- Customer name
- Payment status
- View details button

Use any realistic data. For example, an order for Priya, another for Imran, and another for Meera.

Then write XPath expressions for:

1. The row containing Priya's name
2. The View details button inside Priya's row
3. The parent row of the Paid status cell
4. Every button inside the table body
5. The label before an email input in a separate form

Finally, write the Playwright locator chain you would use to click View details for Priya.

Do not try to make one giant XPath for everything. First identify the row, then identify the button inside it. This is easier to understand and easier to debug.`,
    proTips: [
      "Use ancestor::tr for table rows when you first identify a unique cell by visible text.",
      "Use following-sibling only for elements that truly share the same parent.",
      "Prefer a Playwright locator chain over a long XPath with several axes.",
      "If a parent or wrapper has no meaningful purpose, do not make your locator depend on it.",
      "Read axis names in plain English. Parent moves up one level, ancestor moves up many levels, descendant moves down many levels.",
    ],
    commonMistakes: [
      {
        mistake: "Confusing parent with ancestor",
        fix: "Parent means exactly one level above. Ancestor can mean parent, grandparent, or any higher container.",
      },
      {
        mistake: "Using following-sibling when the target is nested inside another wrapper",
        fix: "Siblings must share the exact same parent. Inspect the DOM and use descendant or ancestor when wrappers exist.",
      },
      {
        mistake: "Writing one huge XPath for a table action",
        fix: "Split the thinking into two parts: locate the row by meaningful content, then locate the action inside it.",
      },
      {
        mistake: "Using following:: when a more specific relationship exists",
        fix: "Following searches too broadly. Prefer a sibling, descendant, or container-based locator.",
      },
      {
        mistake: "Using axes for every new test",
        fix: "Axes are a fallback for old or awkward markup. First try role, label, text, or test ID locators.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Useful XPath axes",
        code: `//input[@name="email"]/parent::div
//input[@name="email"]/ancestor::form
//form/descendant::input
//label[normalize-space()="Email"]/following-sibling::input`,
      },
      {
        language: "text",
        title: "Find an action in a specific table row",
        code: `//td[normalize-space()="ravi@example.com"]
  /ancestor::tr
  //button[normalize-space()="Deactivate"]`,
      },
      {
        language: "python",
        title: "Clear Playwright locator chain for the same table action",
        code: `row = page.get_by_role("row").filter(
    has_text="ravi@example.com"
)

row.get_by_role("button", name="Deactivate").click()`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — XPath axes",
        url: "https://developer.mozilla.org/en-US/docs/Web/XPath/Axes",
      },
      {
        title: "Playwright — Locator filtering",
        url: "https://playwright.dev/python/docs/locators#filtering-locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 35,
    tags: ["xpath", "axes", "locators", "web-fundamentals"],
  };

export default topic;
