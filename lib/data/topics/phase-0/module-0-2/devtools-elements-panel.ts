import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "devtools-elements-panel",
  title: "DevTools: The Elements Panel",
  summary:
    "The Elements panel shows the live page structure. Learn to inspect, edit and test locators right inside the browser.",
  whyItMatters:
    "Before you write any locator, you must see the real page. The Elements panel is where you find roles, labels, IDs and test IDs.",
  notes: `The Elements panel is a **live view of the page structure**. It shows the DOM as the browser sees it right now.

Think of an auto meter. You do not guess the fare. You look at the meter and read the real number. The Elements panel is your meter for the page. You do not guess what the HTML is. You read it.

### Opening the panel

There are three easy ways:

- Press F12
- Press Ctrl + Shift + I on Windows or Linux, and Cmd + Option + I on Mac
- Right-click any element on the page and choose Inspect

The third way is the best. It jumps straight to the element you care about.

### The layout

The panel has two main parts.

- **The DOM tree** on the left or top. This is the nested list of tags.
- **The Styles pane** on the right or bottom. This shows the CSS rules for the selected element.

There are also tabs next to Styles, such as Computed, Layout and Accessibility. We will use Accessibility soon.

### Reading the DOM tree

Each line is one element. Small arrows let you expand or collapse its children.

~~~text
<form class="login">
  <label for="email">Email</label>
  <input id="email" type="email" name="email">
  <button type="submit">Log in</button>
</form>
~~~

Click a line and the element gets highlighted on the page. Hover over a line and you see the box on the page. This is how you connect code with what you see.

### Finding things fast

Press Ctrl + F inside the Elements panel. A small search bar appears. You can type:

- Plain text, like Log in
- A CSS selector, like button[type="submit"]
- An XPath, like //button[text()="Log in"]

The bar shows how many matches exist, such as 1 of 1. This is the quickest way to test a locator idea. If it shows 5 of 5, your locator is too broad.

### Editing the page live

You can change the page for practice.

- Double-click a tag name or attribute to edit it
- Double-click text content to change it
- Right-click an element and choose Delete element
- Press H to hide an element

These changes are temporary. Refresh the page and everything returns. Nothing is saved on the server. So experiment freely.

### The Accessibility tab

Click an element, then open the Accessibility tab. You will see the **role** and **name** the browser gives it.

For a button with the text Log in, you will see role button and name Log in. These are exactly the values for get_by_role.

~~~python
page.get_by_role("button", name="Log in")
~~~

So the panel tells you what to write. This is a great habit.

### Useful attributes to look for

When you inspect an element, scan for:

1. A visible text or label
2. An aria-label or role
3. A data-testid or data-test attribute
4. A stable id or name
5. A short, meaningful class

Avoid long generated classes like css-1x9kq2. They change often.

### State and pseudo-classes

In the Styles pane, you can force states like hover or focus. Click the :hov button and tick hover. This helps when a menu only appears on hover.

### Watch for shadow roots and iframes

If you see #shadow-root, the element sits inside a private box. If you see an iframe tag, the content belongs to another page. Both need special care, as we learned earlier.

### The Elements panel and the source

Remember that the panel shows the **live DOM**, not the original source. JavaScript may have changed the page after loading. Playwright sees the live DOM too, so the panel is the right place to look.

### A simple routine

When you meet a new element:

1. Right-click and Inspect
2. Check the Accessibility tab for role and name
3. Look for a test ID
4. Test your idea with Ctrl + F
5. Write the shortest locator that matches exactly one element

This routine takes one minute and saves an hour of flaky tests.`,
  handsOn: `Let's practise inspecting a real page.

### Step 1: Create a practice page

In your html-practice folder, create elements-panel.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Elements Panel Practice</title>
  </head>
  <body>
    <h1>Create account</h1>
    <form>
      <label for="name">Full name</label>
      <input id="name" name="name" type="text" />

      <label for="mail">Email</label>
      <input id="mail" name="email" type="email" data-testid="email-input" />

      <button type="submit" class="btn btn-primary">Sign up</button>
      <button type="button" class="btn">Cancel</button>
    </form>
  </body>
</html>
~~~

Open it in Chrome.

### Step 2: Inspect an element

Right-click the Sign up button and choose Inspect. Find the highlighted line in the DOM tree.

### Step 3: Read the Accessibility tab

With the button selected, open the Accessibility tab. Note the role and the name.

### Step 4: Search inside the panel

Click in the DOM tree and press Ctrl + F. Try these one by one and note the match count:

~~~text
.btn
button[type="submit"]
//button[text()="Sign up"]
[data-testid="email-input"]
~~~

### Step 5: Edit live

Double-click the text Sign up in the DOM tree and change it to Join now. Watch the page change. Refresh and see it return.

### Step 6: Write the Playwright locators

Write these in your notes:

~~~python
page.get_by_role("button", name="Sign up")
page.get_by_label("Full name")
page.get_by_test_id("email-input")
~~~

### Deliverable

You inspected an element, read its role and name, tested four searches, edited the page live and wrote three locators.`,
  challenge: `Pick any login or search page you use regularly.

Using only the Elements panel, collect this for five different elements:

1. The tag name
2. Its role and accessible name from the Accessibility tab
3. Any id, name, data-testid or aria-label
4. Whether the element sits inside a shadow root or iframe

Then, for each of the five, write the best Playwright locator. Use role, label, text or test ID. Use CSS only if nothing else works.

Test each idea with Ctrl + F in the panel. Note the match count. If a search gives more than one match, improve it until it gives exactly one.

Finally, write two lines on which of the five elements was hardest to locate and why.`,
  proTips: [
    "Right-click and Inspect is faster than hunting through the tree by hand.",
    "Use Ctrl + F in the Elements panel to test a CSS or XPath idea and see the match count.",
    "Check the Accessibility tab to get the exact role and name for get_by_role.",
    "Prefer test IDs and roles over long classes copied from the tree.",
    "Edits in the panel are temporary, so you can try risky ideas safely.",
  ],
  commonMistakes: [
    {
      mistake: "Using Copy selector without thinking",
      fix: "Copied selectors are often long and fragile. Write a short locator using role, label or test ID instead.",
    },
    {
      mistake: "Trusting generated class names",
      fix: "Names like css-1x9kq2 change on each build. Pick stable attributes or visible text.",
    },
    {
      mistake: "Not checking the match count",
      fix: "Use Ctrl + F in the panel. A good locator matches exactly one element.",
    },
    {
      mistake: "Forgetting that edits disappear on refresh",
      fix: "Panel edits are only for practice. Make real changes in your code files.",
    },
    {
      mistake: "Missing a shadow root or iframe above the element",
      fix: "Look at the parent lines for #shadow-root or an iframe tag before blaming the locator.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Things you can type in the Elements search bar",
      code: `Log in
button[type="submit"]
[data-testid="email-input"]
//button[text()="Log in"]`,
    },
    {
      language: "javascript",
      title: "Quick checks in the Console",
      code: `$$('button[type="submit"]').length;
$x('//button[text()="Sign up"]');
$0;`,
    },
    {
      language: "python",
      title: "Locators you can build from what the panel shows",
      code: `page.get_by_role("button", name="Sign up")
page.get_by_label("Full name")
page.get_by_test_id("email-input")`,
    },
  ],
  furtherReading: [
    {
      title: "Chrome DevTools — Inspect and edit the DOM",
      url: "https://developer.chrome.com/docs/devtools/dom",
    },
    {
      title: "Playwright — Locators",
      url: "https://playwright.dev/python/docs/locators",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["devtools", "elements", "inspect", "locators", "web-fundamentals"],
};

export default topic;