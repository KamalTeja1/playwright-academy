import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "accessibility-attributes",
    title: "Accessibility Attributes",
    summary:
      "aria-label, aria-labelledby, aria-describedby, aria-hidden, and role — and how Playwright uses them.",
    whyItMatters:
      "ARIA attributes are the secret sauce behind Playwright's best locators. Understand them and your tests will survive any redesign.",
    notes: `**ARIA** stands for **Accessible Rich Internet Applications**. It's a set of attributes that make web pages understandable to screen readers — and, as a lucky side effect, to Playwright.

Think of ARIA as **subtitles for the visually impaired**. The element might be an icon-only button (just an X), but ARIA tells screen readers: "This is a Close button."

### Why Playwright loves ARIA

Playwright's \`get_by_role\` locator uses ARIA roles and names. This is the single most reliable way to find elements:

~~~python
page.get_by_role("button", name="Close")
~~~

This works if:
- The element is a \`<button>\` (native role), OR
- The element has \`role="button"\`, OR
- The element has \`aria-label="Close"\`

And it survives:
- CSS class changes
- Layout changes
- Framework migrations

Because it finds the element the same way a screen reader does — by meaning, not by appearance.

### \`role\` — the element's purpose

The \`role\` attribute explicitly sets what an element is:

~~~html
<button role="button">Save</button>
<div role="button">Save</div>
<div role="dialog">...</div>
<div role="navigation">...</div>
<form role="search">...</form>
<ul role="list">
~~~

Common roles:
- \`button\`
- \`link\`
- \`textbox\`
- \`checkbox\`
- \`radio\`
- \`combobox\`
- \`heading\`
- \`navigation\`
- \`main\`
- \`dialog\`
- \`alert\`
- \`search\`
- \`list\`
- \`listitem\`

Native tags get implicit roles:
- \`<button>\` → role "button"
- \`<a href>\` → role "link"
- \`<input type="text">\` → role "textbox"
- \`<input type="checkbox">\` → role "checkbox"
- \`<h1>\` → role "heading", level 1
- \`<nav>\` → role "navigation"
- \`<main>\` → role "main"

You only need explicit \`role\` when the tag doesn't match the intent (e.g., a \`<div>\` acting as a button).

### \`aria-label\` — the accessible name

Used when there's no visible text, or the visible text alone isn't enough.

~~~html
<button aria-label="Close dialog">
  <svg>×</svg>
</button>
~~~

A screen reader (and Playwright) sees this as a button named "Close dialog".

In Playwright:
~~~python
page.get_by_role("button", name="Close dialog")
~~~

**Icon-only buttons need this.** Without it, the button has no name and Playwright can't find it by role.

### \`aria-labelledby\` — reference to another element

Points to another element's \`id\` that contains this element's label.

~~~html
<h2 id="dialog-title">Confirm Delete</h2>
<div role="dialog" aria-labelledby="dialog-title">
  ...
</div>
~~~

The dialog is now labelled "Confirm Delete" — from the \`<h2>\` above it.

### \`aria-describedby\` — reference to a description

Similar, but for **description** instead of **name**. A description is supplementary info.

~~~html
<input
  id="email"
  aria-describedby="email-help"
/>
<p id="email-help">We never share your email.</p>
~~~

A screen reader announces: "Email input field. We never share your email."

### \`aria-hidden\` — hide from screen readers

~~~html
<div aria-hidden="true">Just for decoration</div>
~~~

The element still renders but is ignored by screen readers — and by Playwright's role-based locators.

Useful for:
- Decorative icons
- Duplicate text
- Background shapes

**Caution:** Never use \`aria-hidden\` on interactive elements. That breaks accessibility and Playwright.

### \`aria-expanded\` — is it open or closed?

~~~html
<button aria-expanded="false">Menu</button>
<button aria-expanded="true">Menu</button>
~~~

Common for dropdown menus. Playwright:

~~~python
expect(page.get_by_role("button", name="Menu")).to_have_attribute("aria-expanded", "true")
~~~

### \`aria-checked\` — is it selected?

~~~html
<div role="checkbox" aria-checked="true">Subscribe</div>
~~~

For custom checkboxes that aren't native \`<input type="checkbox">\`.

### \`aria-current\` — current item in a set

~~~html
<nav>
  <a href="/" aria-current="page">Home</a>
  <a href="/about">About</a>
</nav>
~~~

Screen readers announce: "Home, current page." Playwright can find the active page link with:

~~~python
page.get_by_role("link", name="Home").and_(page.locator("[aria-current='page']"))
~~~

### Rules for ARIA — the big five

1. **Prefer native tags.** \`<button>\` beats \`<div role="button">\`. Native is more reliable.
2. **Every interactive element needs a name.** Either visible text, \`aria-label\`, or \`aria-labelledby\`.
3. **Don't use ARIA if native works.** \`<h1>\` already has role "heading". Don't add \`role="heading"\` on top.
4. **Don't hide interactive elements.** \`aria-hidden="true"\` on a button breaks everything.
5. **Test with a screen reader once.** It's 10 minutes and you'll never forget it.

### Why this matters for your career

Every serious company cares about accessibility. WCAG compliance is often legally required. Playwright engineers who understand ARIA write tests that:

- Survive redesigns
- Test the same way users (and screen readers) experience the site
- Catch real accessibility bugs

This is a real career skill, not a toy.`,
    handsOn: `Let's build a page using ARIA attributes and inspect them.

### Step 1: Create a file

In \`html-practice\`, create \`accessibility.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Accessibility Practice</title>
  </head>
  <body>
    <header>
      <nav aria-label="Main navigation">
        <a href="/" aria-current="page">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <h1>Contact us</h1>

      <form aria-label="Contact form">
        <label for="name">Name</label>
        <input id="name" type="text" required />

        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          aria-describedby="email-help"
          required
        />
        <p id="email-help">We'll never share your email.</p>

        <button
          type="button"
          aria-label="Close form"
          aria-expanded="false"
        >
          ×
        </button>

        <button type="submit" data-testid="contact-submit">
          Send message
        </button>
      </form>
    </main>

    <footer>
      <div aria-hidden="true">🎨</div>
      <p>© 2025 MyApp</p>
    </footer>
  </body>
</html>
~~~

### Step 3: Inspect each ARIA element

Open in the browser. Right-click and inspect:

1. The **nav** element → \`aria-label="Main navigation"\`
2. The **Home link** → \`aria-current="page"\`
3. The **email input** → \`aria-describedby="email-help"\`
4. The **close button** → \`aria-label="Close form"\` and \`aria-expanded="false"\`
5. The **decorative emoji** in the footer → \`aria-hidden="true"\`

### Step 4: Test in the browser console

~~~javascript
document.querySelector("[aria-label='Main navigation']")
document.querySelector("[aria-current='page']")
document.querySelector("[aria-describedby='email-help']")
document.querySelector("[aria-label='Close form']")
document.querySelectorAll("[aria-hidden='true']").length
~~~

Each query returns an element or count.

### Deliverable

You built a page with 5 ARIA attribute types and inspected all of them. You queried each with JavaScript successfully.`,
    challenge: `Build an accessible dropdown menu.

Requirements:
- A \`<button>\` with \`aria-expanded\` (false by default)
- A \`<ul role="menu">\` with 3 \`<li role="menuitem">\` items
- Each menu item is an \`<a>\` with a meaningful name
- The button has an \`aria-label\` describing what it opens

Starter structure:

~~~html
<button aria-label="Open account menu" aria-expanded="false">
  Account
</button>

<ul role="menu">
  <li role="menuitem"><a href="/profile">Profile</a></li>
  <li role="menuitem"><a href="/settings">Settings</a></li>
  <li role="menuitem"><a href="/logout">Logout</a></li>
</ul>
~~~

Now, for each element, write the Playwright locator you'd use:

- The button → \`get_by_role("button", name="Open account menu")\`
- The "Profile" item → \`get_by_role("menuitem")\` + name, or \`get_by_role("link", name="Profile")\`
- The "Settings" item → similar

Then add an \`aria-describedby\` on the button linking to a hidden paragraph explaining the menu.

Bonus: add a decorative icon inside the button using \`aria-hidden="true"\`.`,
    proTips: [
      "Icon-only buttons must have `aria-label`. Without it, neither screen readers nor Playwright can find them.",
      "Use `get_by_role` with `name=` — it works on native tags AND elements with ARIA. It's the most resilient locator.",
      "Test your page with the free Chrome extension 'axe DevTools'. It finds missing ARIA automatically.",
      "Never put `aria-hidden='true'` on something the user clicks. It hides the element from assistive tech.",
      "If you're unsure whether an element needs ARIA, run the browser's built-in accessibility inspector (DevTools → Lighthouse → Accessibility).",
    ],
    commonMistakes: [
      {
        mistake: "Using `<div role=\"button\">` instead of `<button>`",
        fix: "Native `<button>` gives you keyboard focus, Enter/Space handling, and role for free. Only use `role=\"button\"` on a div when you literally cannot use a button element.",
      },
      {
        mistake: "Adding `aria-label` to an element that already has visible text",
        fix: "If the button says 'Save', its accessible name is already 'Save'. Adding `aria-label=\"Save\"` is redundant.",
      },
      {
        mistake: "Using `aria-hidden='true'` on an interactive element",
        fix: "Screen readers will skip it, and so will Playwright's role locators. Remove it.",
      },
      {
        mistake: "Pointing `aria-labelledby` at an id that doesn't exist",
        fix: "Always double-check the id exists. Broken references silently fail.",
      },
      {
        mistake: "Using ARIA where native HTML already works",
        fix: "`<h1>` already has role heading, level 1. Don't write `<h1 role='heading' aria-level='1'>`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Icon button with ARIA",
        code: `<button aria-label="Close dialog">
  <svg>×</svg>
</button>

<!-- Playwright -->
<!-- page.get_by_role("button", name="Close dialog").click() -->`,
      },
      {
        language: "text",
        title: "Form field with helper text",
        code: `<label for="password">Password</label>
<input
  id="password"
  type="password"
  aria-describedby="password-help"
/>
<p id="password-help">
  Must be at least 8 characters.
</p>`,
      },
      {
        language: "python",
        title: "Playwright locators using ARIA",
        code: `# By role + accessible name
page.get_by_role("button", name="Save")

# Custom role
page.get_by_role("dialog").get_by_role("button", name="Close")

# By ARIA attribute directly
page.locator("[aria-expanded='true']")

# Check state
expect(page.get_by_role("button", name="Menu")).to_have_attribute(
    "aria-expanded", "true"
)`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — ARIA basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/ARIA",
      },
      {
        title: "W3C — Using ARIA",
        url: "https://www.w3.org/TR/using-aria/",
      },
      {
        title: "Playwright — get_by_role reference",
        url: "https://playwright.dev/python/docs/api/class-locator#locator-get-by-role",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["accessibility", "aria", "html", "locators"],
  };

export default topic;
