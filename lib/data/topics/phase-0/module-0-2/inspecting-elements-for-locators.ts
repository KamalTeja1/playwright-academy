import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "inspecting-elements-for-locators",
  title: "Inspecting Elements to Build Locators",
  summary:
    "A step-by-step routine to go from a button on screen to a short, stable Playwright locator.",
  whyItMatters:
    "Most flaky tests come from weak locators. A calm inspection routine gives you locators that survive redesigns.",
  notes: `Building a locator is **a small investigation**. You look at the element, collect clues, and pick the strongest one.

Think of finding a friend in a crowded railway station. You could say, "third person from the left on platform 4." That breaks the moment the crowd moves. Or you could say, "the one in the red jacket named Arjun." That still works when people shuffle. Good locators describe who the element is, not where it stands.

### The ladder of preference

Playwright suggests an order. Start at the top and move down only when needed.

1. **Role with name**: get_by_role("button", name="Sign up")
2. **Label**: get_by_label("Email")
3. **Placeholder**: get_by_placeholder("Search products")
4. **Text**: get_by_text("Welcome back")
5. **Test ID**: get_by_test_id("email-input")
6. **CSS**: a short selector on a stable attribute
7. **XPath**: the last resort

Roles, labels and text match what a real user sees. Test IDs are agreed with developers. CSS and XPath depend on code structure, so they break more often.

### Step 1: Inspect

Right-click the element and choose Inspect. The Elements panel jumps to it. Look at the tag and its attributes.

~~~text
<button type="submit" class="btn btn-primary">Sign up</button>
~~~

### Step 2: Read the Accessibility tab

Open the Accessibility tab next to Styles. Note the role and name. Here it says button and Sign up. That gives you the first choice.

~~~python
page.get_by_role("button", name="Sign up")
~~~

### Step 3: Check for uniqueness

Use Ctrl + F in the Elements panel, or the Console, to count matches. If two buttons say Sign up, your locator is not unique yet.

You can narrow it by scope:

~~~python
page.locator("form#register").get_by_role("button", name="Sign up")
~~~

Or by filtering:

~~~python
page.get_by_role("listitem").filter(has_text="Masala dosa").get_by_role("button", name="Add")
~~~

### Step 4: Check for hidden traps

Before you finish, look at the parents.

- Is there a #shadow-root? Open ones are fine for role and text locators
- Is there an iframe? Use frame_locator
- Does the element appear only after loading? Playwright waits, but your locator must match the final state

### Step 5: Pick the strongest clue

Ask yourself, in this order:

- Does it have a clear role and name?
- Does it have a label?
- Does it have visible text that will not change often?
- Does it have a test ID?

If none works, look at a short CSS option.

~~~python
page.locator("[data-qa='submit']")
~~~

### Step 6: Prove it

Write the locator in a small script and run it. Add highlight to see what it finds:

~~~python
page.get_by_role("button", name="Sign up").highlight()
~~~

You can also use the Playwright Inspector or the codegen tool to cross-check your choice.

### Locators that lock in on one element

A good locator is:

- **Unique**: matches one element
- **Readable**: a teammate understands it at a glance
- **Stable**: survives a visual redesign
- **Short**: fewer parts, fewer ways to break

### Handling lists and tables

For a list of products, find the row by its meaningful text, then act inside it.

~~~python
row = page.get_by_role("row").filter(has_text="Ravi")
row.get_by_role("button", name="Deactivate").click()
~~~

Avoid nth positions unless the order really is the point.

### Asking for help from developers

If an element has no role, label or text, ask for a data-testid. It takes the developer ten seconds. It saves you hours.

### A one-minute routine

Inspect, check role and name, check uniqueness, check parents for traps, then write the shortest locator that matches exactly one element. Repeat this a few times and it becomes a habit.`,
  handsOn: `Let's build locators for a practice page.

### Step 1: Create the page

In your html-practice folder, create locator-routine.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Locator Routine</title>
  </head>
  <body>
    <h1>Order food</h1>

    <label for="search">Search dishes</label>
    <input id="search" type="text" placeholder="Try dosa" />

    <ul>
      <li>Masala dosa <button>Add</button></li>
      <li>Idli sambar <button>Add</button></li>
      <li>Filter coffee <button data-testid="coffee-add">Add</button></li>
    </ul>

    <button class="btn" type="submit">Place order</button>
  </body>
</html>
~~~

### Step 2: Locate the search box

Inspect it. Note its label and placeholder. Write the label locator first.

### Step 3: Locate one Add button

There are three buttons named Add. Test the count with $$ in the Console. Then write a locator that targets only the Idli sambar one.

### Step 4: Use the test ID

Write the locator for the coffee button using its data-testid.

### Step 5: Locate Place order

Check the Accessibility tab for role and name. Write the role locator.

### Step 6: Write all locators

~~~python
page.get_by_label("Search dishes")
page.get_by_role("listitem").filter(has_text="Idli sambar").get_by_role("button", name="Add")
page.get_by_test_id("coffee-add")
page.get_by_role("button", name="Place order")
~~~

### Deliverable

You built four locators using label, filter, test ID and role. You checked uniqueness for each.`,
  challenge: `Choose a real website with a form or a product list.

Pick five elements, including at least one inside a list or table.

For each element, write down:

1. The element in plain words
2. Its role and name from the Accessibility tab
3. Which rung of the preference ladder you used
4. The final Playwright locator
5. How many matches the locator gave

Then answer:

- Which element needed filtering or scoping? Why?
- Did any element lack a good clue? What would you ask the developer to add?
- Which locator would you expect to break first after a redesign?

Do not copy selectors from DevTools. Write each one by hand from the clues you collected.`,
  proTips: [
    "Walk down the preference ladder: role, label, text, test ID, CSS, then XPath.",
    "Always check how many elements match before you trust a locator.",
    "For lists and tables, find the row by text first, then act inside it.",
    "Ask developers for a data-testid when an element has no good clue.",
    "Use highlight() to see on the page which element your locator picked.",
  ],
  commonMistakes: [
    {
      mistake: "Copying the selector from DevTools",
      fix: "Copied selectors are long and fragile. Write a short locator from role, label or text.",
    },
    {
      mistake: "Using nth positions for list items",
      fix: "Filter by visible text instead. Order can change when data changes.",
    },
    {
      mistake: "Not checking uniqueness",
      fix: "Count matches first. A locator that matches two elements will fail in strict mode.",
    },
    {
      mistake: "Starting with CSS or XPath",
      fix: "Begin with role, label and text. Use CSS and XPath only when nothing better exists.",
    },
    {
      mistake: "Ignoring iframes and shadow roots above the element",
      fix: "Check the parent lines. Iframes need frame_locator. Open shadow roots work with role and text locators.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "The preference ladder in code",
      code: `page.get_by_role("button", name="Sign up")
page.get_by_label("Email")
page.get_by_placeholder("Search products")
page.get_by_text("Welcome back")
page.get_by_test_id("email-input")
page.locator("[data-qa='submit']")`,
    },
    {
      language: "python",
      title: "Act inside a row found by text",
      code: `row = page.get_by_role("row").filter(has_text="Ravi")
row.get_by_role("button", name="Deactivate").click()`,
    },
    {
      language: "python",
      title: "Narrow a locator by scope",
      code: `form = page.locator("form#register")
form.get_by_role("button", name="Sign up").click()`,
    },
  ],
  furtherReading: [
    {
      title: "Playwright — Locators",
      url: "https://playwright.dev/python/docs/locators",
    },
    {
      title: "Playwright — Best practices",
      url: "https://playwright.dev/python/docs/best-practices",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["locators", "inspect", "devtools", "best-practices", "web-fundamentals"],
};

export default topic;