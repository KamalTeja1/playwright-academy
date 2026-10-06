import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "html-attributes",
    title: "HTML Attributes",
    summary:
      "id, class, name, href, aria-*, data-*, role — the extra info attached to every element.",
    whyItMatters:
      "Locators in Playwright are built on attributes. If you know which attributes to look for, your tests are stable. If you don't, they break every week.",
    notes: `Attributes are **extra information** attached to an HTML tag. They sit inside the opening tag, like \`name="value"\`.

~~~html
<a href="https://example.com" target="_blank" class="btn">Visit</a>
~~~

Here:
- \`href="https://example.com"\` is an attribute
- \`target="_blank"\` is an attribute
- \`class="btn"\` is an attribute

Let's walk through the ones that matter.

### \`id\` — Unique identifier

~~~html
<input id="email" />
<button id="submit-btn">Submit</button>
~~~

An \`id\` must be **unique** on the page. Only one element can have \`id="email"\`.

In Playwright: \`page.locator("#email")\`.

**Caution:** \`id\`s often change in modern apps (React, Vue generate random ones). Use them if they're meaningful, avoid them if they look like \`id="input-4f8e92"\`.

### \`class\` — Style group

~~~html
<div class="card">
<div class="card highlight">
<div class="btn btn-primary">
~~~

An element can have **multiple classes** separated by spaces.

In Playwright: \`page.locator(".card")\`, \`page.locator(".btn-primary")\`.

**Caution:** Classes are for styling. Designers change them. Prefer role-based locators over classes when possible.

### \`name\` — Form field name

~~~html
<input name="email" />
<input name="password" />
~~~

Used when a form is submitted, to identify the field's value.

In Playwright: less common, but useful for \`page.locator("[name='email']")\`.

### \`href\` — Link destination

~~~html
<a href="/about">About</a>
<a href="https://google.com">Google</a>
~~~

Only on \`<a>\` tags. Playwright: \`page.get_by_role("link", name="About")\` — you usually use the text, not the href.

### \`src\` — Source URL

~~~html
<img src="/logo.png" />
<script src="/app.js"></script>
<iframe src="/widget"></iframe>
~~~

Points to an external file. Only on \`<img>\`, \`<script>\`, \`<iframe>\`, \`<video>\`, \`<audio>\`.

### \`type\` — Input type

~~~html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
~~~

Completely changes how the input behaves. Playwright treats \`type="checkbox"\` differently from \`type="text"\`.

### \`placeholder\` — Hint text

~~~html
<input placeholder="Enter your email" />
~~~

The grey text shown when the field is empty.

In Playwright: \`page.get_by_placeholder("Enter your email")\` — this is a great locator when there's no label.

### \`value\` — Current value

~~~html
<input value="Ravi" />
<option value="in">India</option>
~~~

The current value of a field or option.

### \`disabled\` and \`readonly\`

~~~html
<input disabled />
<input readonly />
<button disabled>Submit</button>
~~~

\`disabled\` — the user can't interact with it. Playwright: \`expect(button).to_be_disabled()\`.

\`readonly\` — the user can't edit it, but it's still submitted with the form.

### ARIA attributes — accessibility

~~~html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<div aria-hidden="true">Decorative</div>
<input aria-describedby="help-text" />

<nav role="navigation">
<form role="search">
~~~

These are **gold** for Playwright. ARIA attributes describe the *purpose* of elements, not their appearance. They rarely change, even in design refactors.

- \`aria-label\` — describes the element's purpose in text
- \`aria-labelledby\` — references another element that labels this one
- \`aria-describedby\` — references another element that describes this one
- \`aria-hidden\` — hides the element from screen readers
- \`role\` — explicitly sets the element's role

We'll go deep on these in the accessibility lesson.

### \`data-*\` — Custom data attributes

~~~html
<button data-testid="login-btn">Log in</button>
<div data-user-id="42">Ravi</div>
<li data-product-id="abc-123">Notebook</li>
~~~

Any attribute starting with \`data-\` is custom. It's a way for developers to attach extra info that JavaScript (or test frameworks!) can read.

**\`data-testid\` is the single best attribute for testing.** It's added specifically so tests can find elements. It never changes with design updates.

In Playwright: \`page.get_by_test_id("login-btn")\` — designed exactly for this.

### Attribute priority for locators

When you're choosing a locator, aim in this order:

1. \`role\` + accessible name (best)
2. \`data-testid\` (great)
3. \`label\` or \`placeholder\` (very good)
4. \`id\` (good, if stable)
5. \`name\` (decent)
6. CSS selector (last resort)
7. XPath (avoid unless nothing else works)

This is what Playwright's own documentation recommends. Stick to it and your tests will be rock solid.`,
    handsOn: `Let's attach attributes to elements and inspect them.

### Step 1: Create a file

In \`html-practice\`, create \`attributes.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Attribute Practice</title>
  </head>
  <body>
    <h1>Attribute Playground</h1>

    <input
      id="email"
      name="user-email"
      type="email"
      placeholder="you@example.com"
    />

    <input
      id="password"
      name="user-password"
      type="password"
      placeholder="Enter password"
      aria-label="Password input field"
    />

    <button
      id="login-btn"
      class="btn btn-primary"
      data-testid="login-submit"
    >
      Log in
    </button>

    <img
      src="https://via.placeholder.com/80"
      alt="Company logo"
      width="80"
      height="80"
    />

    <a href="https://example.com" target="_blank" rel="noopener">
      Visit example
    </a>

    <div
      class="card"
      data-user-id="42"
      data-role="admin"
    >
      User card
    </div>
  </body>
</html>
~~~

### Step 3: Inspect

Open the page in your browser, right-click each element, and inspect.

For each element, write down:
- What \`id\` does it have?
- What \`class\` does it have?
- Does it have a \`data-testid\`?
- Does it have an \`aria-label\`?
- What \`role\` would Playwright use?

### Step 4: Test in the browser console

Open DevTools → Console and try:

~~~javascript
document.querySelector("#email")
document.querySelector(".btn-primary")
document.querySelector("[data-testid='login-submit']")
document.querySelectorAll("[data-testid]").length
~~~

Each returns an element or a list. These are the same selectors Playwright uses.

### Deliverable

You inspected 6 different elements and identified each element's attributes. You ran 4 selector queries in the browser console and got results.`,
    challenge: `Now design your own locator strategy for a login form.

Build this form in a new HTML file:

- Email input
- Password input
- "Remember me" checkbox
- "Log in" button
- "Forgot password?" link

For **each element**, add:
- A meaningful \`id\`
- A \`data-testid\` attribute
- An \`aria-label\` (if the visible label doesn't describe it well)

Then, for each element, write down **two Playwright locators** you'd use:

Example:
\`\`\`
Email input:
  1. page.get_by_label("Email")
  2. page.get_by_placeholder("you@example.com")
\`\`\`

Do this for all 5 elements. You now have a small locator strategy document. This is what a real Playwright engineer prepares before writing tests.`,
    proTips: [
      "Always prefer `data-testid` over `class` — classes are for styling and change often; test IDs are stable.",
      "`aria-label` beats `placeholder` because placeholders disappear when the user starts typing.",
      "Never use a locator based on a random-looking `id` like `id=\"input-4f9a\"`. It will break the moment the app rebuilds.",
      "Ask your frontend team to add `data-testid` to important elements. It's a 5-minute task that saves you hours.",
      "In DevTools, the search bar (Ctrl + F while the Elements panel is focused) can find elements by CSS selector. Test your locator there first.",
    ],
    commonMistakes: [
      {
        mistake: "Reusing the same `id` on multiple elements",
        fix: "`id` must be unique. Use `class` for repeating styles, `id` for unique elements.",
      },
      {
        mistake: "Using `class` for locators when a `data-testid` exists",
        fix: "If a test ID is available, use it. Classes are for designers, test IDs are for testers.",
      },
      {
        mistake: "Relying on `placeholder` when a `<label>` exists",
        fix: "Labels survive after the user starts typing. Placeholders don't. Prefer `get_by_label` over `get_by_placeholder`.",
      },
      {
        mistake: "Reading `value` on an input to check what the user typed",
        fix: "For text inputs, the value updates. But for checkboxes, use the `checked` property, not value. Playwright handles this — use `to_be_checked()`.",
      },
      {
        mistake: "Thinking `role` is only for accessibility",
        fix: "Playwright leans heavily on `role` for locators. It's the single most stable attribute you can use.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Elements with their most useful attributes",
        code: `<button data-testid="save" aria-label="Save changes">
  Save
</button>

<input
  id="email"
  name="email"
  type="email"
  placeholder="you@example.com"
  aria-label="Email address"
/>

<a href="/about" target="_blank" rel="noopener">About</a>`,
      },
      {
        language: "python",
        title: "Playwright locators using each attribute type",
        code: `# By role (best)
page.get_by_role("button", name="Save")

# By test id (great)
page.get_by_test_id("save")

# By label (very good)
page.get_by_label("Email address")

# By placeholder (good)
page.get_by_placeholder("you@example.com")

# By id (okay)
page.locator("#email")

# By class (last resort)
page.locator(".btn-primary")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML attribute reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",
      },
      {
        title: "Playwright — Locators best practices",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 25,
    tags: ["html", "attributes", "locators", "web-fundamentals"],
  };

export default topic;
