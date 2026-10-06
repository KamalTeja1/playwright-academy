import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "html-structure": {
    slug: "html-structure",
    title: "HTML Structure",
    summary:
      "The basic skeleton every web page is built on — html, head, and body.",
    whyItMatters:
      "Every Playwright test starts with a page written in HTML. If you can't read HTML, you can't write good locators. This is the foundation.",
    notes: `**HTML** stands for **HyperText Markup Language**. It's the language that describes the *structure* of every web page. Not the colors, not the fonts — just the structure.

Think of a web page like a building. HTML is the walls, doors, windows, and rooms. CSS is the paint and furniture. JavaScript is the electricity and plumbing.

### The basic skeleton

Every single HTML page, from a simple blog to Google, follows the same basic pattern:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world</h1>
    <p>This is my first page.</p>
  </body>
</html>
~~~

Only **six lines** and you already have a valid web page. Let's break it down line by line.

### 1. \`<!DOCTYPE html>\`

This is a **declaration**, not a tag. It tells the browser: "This is modern HTML5, not some ancient version from 1999." Always put it on line 1.

### 2. \`<html lang="en">\`

The root element. Everything else lives inside this. The \`lang="en"\` attribute tells the browser and screen readers that the page is in English. Important for accessibility.

### 3. \`<head>\`

This is the **metadata** section. Nothing here shows up on the visible page. It contains:

- \`<title>\` — shown in the browser tab
- \`<meta>\` — character set, viewport, description
- \`<link>\` — CSS files
- \`<script>\` — JavaScript files

Think of \`<head>\` as the backstage of a theatre. The audience (user) doesn't see it, but it's crucial for the show.

### 4. \`<body>\`

Everything **visible** on the page goes here. Headings, paragraphs, images, buttons, forms — all inside \`<body>\`.

When Playwright looks for elements, it's almost always looking inside \`<body>\`.

### 5. Closing tags

Almost every tag has a matching closing tag:

~~~html
<h1>Hello</h1>     <!-- opening + closing -->
<p>Some text</p>   <!-- opening + closing -->
~~~

The \`/\` character tells the browser "this is the end of the element."

Some tags are **self-closing** — they don't have content inside:

~~~html
<img src="cat.jpg" />
<br />
<input type="text" />
~~~

### Why this matters for Playwright

When you write a test, you'll inspect the page and see HTML like this:

~~~html
<div class="login-form">
  <label for="email">Email</label>
  <input id="email" type="email" />
  <button type="submit">Log in</button>
</div>
~~~

Every Playwright locator you write — \`get_by_label\`, \`get_by_role\`, \`locator("#email")\` — is based on this structure. Knowing what \`<head>\` vs \`<body>\` means, or what a closing tag looks like, is the difference between guessing and understanding.

### The DOM — one small note

When you inspect a page in DevTools, you're looking at the **DOM** — the live version of the HTML after JavaScript has run. The original HTML source (right-click → View Page Source) might be different, because the DOM can change dynamically.

For Playwright, we always care about the **DOM**, not the raw source. Playwright sees what the browser sees after JavaScript has done its job.`,
    handsOn: `Let's build a page from scratch.

### Step 1: Create a new folder

~~~bash
cd ~
mkdir html-practice
cd html-practice
~~~

### Step 2: Create an HTML file

In VS Code, create a new file called \`index.html\` in the \`html-practice\` folder.

### Step 3: Type this into the file

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to my practice page</h1>
    <p>This is my first HTML page. It took me 5 minutes.</p>
    <p>Soon I'll add buttons, forms, and images.</p>
  </body>
</html>
~~~

### Step 4: Open it in a browser

In VS Code, right-click the \`index.html\` file → **Reveal in File Explorer** → double-click the file.

Or in the terminal:

~~~bash
# Mac
open index.html

# Windows
start index.html
~~~

Your browser opens and shows a simple page with a heading and two paragraphs.

### Step 5: Inspect it

Right-click the heading → **Inspect**.

You'll see the Elements panel showing your exact HTML. This is the *same view* Playwright will use to find elements.

### Deliverable

You created an HTML file, opened it in a browser, and inspected it with DevTools. The page shows your heading and paragraphs.`,
    challenge: `Now break the page on purpose to see how HTML handles mistakes.

### Task 1: Remove the closing tag

Delete the \`</p>\` after the second paragraph. Save. Refresh the browser.

The page still renders. Browsers are forgiving — they guess where you meant to close a tag. But this is **bad practice**. Playwright locators can break on malformed HTML.

Fix it — put the \`</p>\` back.

### Task 2: Change the doctype

Change \`<!DOCTYPE html>\` to \`<!DOCTYPE html5>\`.

Refresh. The page probably still works, but the browser is now in "quirks mode" — old, weird behaviour for ancient sites. Modern browsers do their best to fix things, but you don't want to be in quirks mode. Playwright works better with modern mode.

Fix it — change it back to \`<!DOCTYPE html>\`.

### Task 3: Add a meta viewport

Add this inside \`<head>\`:

~~~html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
~~~

Save, refresh, then **resize your browser window** to be very narrow. You'll see the text adjust — the page is now mobile-friendly.

This tag is required for any modern site. Testing mobile viewports with Playwright works best when pages include it.`,
    proTips: [
      "Always write `<!DOCTYPE html>` on line 1. It's a declaration, not a tag, so no closing slash.",
      "Use 2 spaces or 4 spaces for indentation — pick one and be consistent. VS Code can auto-format with `Ctrl + Shift + I`.",
      "Self-closing tags like `<img />`, `<br />`, `<input />` don't have children. Don't write `</img>`.",
      "Line numbers on the left side of VS Code help you spot missing closing tags.",
      "In DevTools, you can collapse/expand any element with the small triangle on its left. Handy on big pages.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting the closing tag on a container element",
        fix: "Every `<div>`, `<p>`, `<h1>`, etc. needs a matching `</tag>`. VS Code highlights matching brackets automatically — use it.",
      },
      {
        mistake: "Putting visible content inside `<head>`",
        fix: "If it should show on the page, it goes inside `<body>`. `<head>` is metadata only.",
      },
      {
        mistake: "Using capital tags like `<DIV>` or `<Body>`",
        fix: "HTML is case-insensitive, but convention is all-lowercase. Use `<div>`, `<body>`.",
      },
      {
        mistake: "Forgetting `lang=\"en\"` on `<html>`",
        fix: "Always set it. Screen readers use it to decide pronunciation. Accessibility tools flag missing lang.",
      },
      {
        mistake: "Viewing page source instead of the DOM when debugging",
        fix: "Right-click → Inspect gives you the live DOM (what Playwright sees). Right-click → View Page Source gives you the raw file. They can differ.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The minimal valid HTML page",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`,
      },
      {
        language: "text",
        title: "A typical page with head and body content",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login — MyApp</title>
  </head>
  <body>
    <h1>Sign in</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Log in</button>
    </form>
  </body>
</html>`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
      },
      {
        title: "MDN — Document and website structure",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["html", "web-fundamentals", "structure"],
  },

  "html-tags": {
    slug: "html-tags",
    title: "HTML Tags",
    summary:
      "The building blocks of every page — div, span, p, a, button, input, and more.",
    whyItMatters:
      "Every Playwright locator targets a specific tag. If you don't know what a button looks like in HTML, you can't reliably find it.",
    notes: `HTML has **over 100 tags**, but you'll use about **15 of them** every single day. Let's look at the ones that matter.

### Text tags

**\`<h1>\` to \`<h6>\` — Headings**

~~~html
<h1>Main title</h1>
<h2>Section heading</h2>
<h3>Sub-section</h3>
~~~

\`<h1>\` is the most important heading. \`<h6>\` is the least. Search engines and screen readers use this hierarchy.

**\`<p>\` — Paragraph**

~~~html
<p>This is a paragraph of text.</p>
~~~

**\`<span>\` — Inline container**

~~~html
<p>My name is <span class="highlight">Ravi</span>.</p>
~~~

Useful for styling a small piece of text inside a paragraph.

### Layout tags

**\`<div>\` — Block container**

~~~html
<div class="card">
  <h3>Card title</h3>
  <p>Card content</p>
</div>
~~~

The most generic container. Used everywhere. Div soup (too many divs) is a problem we'll discuss in the semantic HTML lesson.

### Links and buttons

**\`<a>\` — Link**

~~~html
<a href="https://example.com">Visit example</a>
<a href="/about">About us</a>
<a href="#section-2">Jump to section 2</a>
~~~

\`<a>\` **navigates** somewhere. It has an \`href\` attribute.

**\`<button>\` — Button**

~~~html
<button type="button">Click me</button>
<button type="submit">Submit form</button>
~~~

\`<button>\` **does something** without navigating. No \`href\`.

Playwright's \`get_by_role\` treats these differently — links have role \`link\`, buttons have role \`button\`. Knowing which is which matters.

### Form tags

**\`<form>\` — Form wrapper**

~~~html
<form action="/login" method="post">
  ...
</form>
~~~

**\`<input>\` — Input field**

~~~html
<input type="text" placeholder="Enter your name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
<input type="submit" value="Send" />
~~~

The \`type\` attribute changes behaviour completely.

**\`<select>\` and \`<option>\` — Dropdown**

~~~html
<select name="country">
  <option value="in">India</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
~~~

**\`<textarea>\` — Multi-line text**

~~~html
<textarea rows="4" cols="50">Your message here</textarea>
~~~

**\`<label>\` — Form field label**

~~~html
<label for="email">Email address</label>
<input id="email" type="email" />
~~~

The \`for\` attribute on \`<label>\` matches the \`id\` on \`<input>\`. This is what makes \`get_by_label\` work in Playwright.

### Lists

~~~html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
~~~

\`<ul>\` — unordered (bullets). \`<ol>\` — ordered (numbers). \`<li>\` — list item.

### Images and embeds

~~~html
<img src="logo.png" alt="Company logo" />
<iframe src="https://www.youtube.com/embed/xyz"></iframe>
~~~

\`<img>\` embeds an image. The \`alt\` attribute is critical — it describes the image for screen readers and for Playwright's \`get_by_alt_text\`.

\`<iframe>\` embeds another web page inside yours. Playwright handles iframes with \`frame_locator\`.

### Tables

~~~html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ravi</td>
      <td>ravi@example.com</td>
    </tr>
  </tbody>
</table>
~~~

Tables are less common today but still everywhere in admin dashboards. Playwright's role-based locators work beautifully with them — \`get_by_role("row")\`, \`get_by_role("cell")\`.

### That's your 15 tags

\`<html>\`, \`<head>\`, \`<body>\`, \`<h1>\`–\`<h6>\`, \`<p>\`, \`<span>\`, \`<div>\`, \`<a>\`, \`<button>\`, \`<form>\`, \`<input>\`, \`<select>\`, \`<option>\`, \`<textarea>\`, \`<label>\`, \`<ul>\`, \`<ol>\`, \`<li>\`, \`<img>\`, \`<iframe>\`, \`<table>\`.

That's 90% of what you'll see in real projects.`,
    handsOn: `Let's build a page that uses all the important tags.

### Step 1: Create a file

In your \`html-practice\` folder, create \`tags.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tag Practice</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <h2>About me</h2>
    <p>I am learning Playwright. My name is <span>Ravi</span>.</p>

    <h2>Contact</h2>
    <a href="mailto:ravi@example.com">Send email</a>

    <h2>Sign up</h2>
    <form>
      <label for="username">Name</label>
      <input id="username" type="text" placeholder="Your name" />

      <label for="country">Country</label>
      <select id="country">
        <option value="in">India</option>
        <option value="us">United States</option>
      </select>

      <label for="bio">Bio</label>
      <textarea id="bio" rows="3"></textarea>

      <button type="submit">Submit</button>
    </form>

    <h2>Skills</h2>
    <ul>
      <li>Python</li>
      <li>Playwright</li>
      <li>Pytest</li>
    </ul>

    <h2>Logo</h2>
    <img src="https://via.placeholder.com/100" alt="Placeholder logo" />
  </body>
</html>
~~~

### Step 3: Open it in the browser

Open the file the same way as before — right-click → open in browser.

### Step 4: Inspect each element

1. Right-click the heading → **Inspect**. Look for \`<h1>\`
2. Right-click the button → **Inspect**. Look for \`<button type="submit">\`
3. Right-click the dropdown → **Inspect**. Look for \`<select>\`
4. Right-click the image → **Inspect**. Look for \`<img>\`

### Deliverable

You built a page with headings, paragraphs, a form, a dropdown, a list, and an image. You inspected 4 different elements in DevTools.`,
    challenge: `Now build a mini "User Profile" card using only the tags you've learned.

Requirements:
- One \`<h1>\` with the profile's name
- One \`<p>\` with a short bio
- One \`<img>\` with an alt text
- One \`<ul>\` with at least 3 hobbies
- One \`<a>\` linking to a fake social profile
- One \`<button>\` labelled "Follow"

Bonus: add a small form with an email input and a submit button.

Once you've built it, open DevTools and answer:
- What role would Playwright use for the "Follow" button?
- What locator would you use for the bio paragraph?
- What role would Playwright use for the "Send email" link?

Write your answers down. This is exactly how you'll think as a Playwright engineer.`,
    proTips: [
      "Learn `<button>` vs `<a>` cold. `<a>` navigates (has href). `<button>` does something without navigating. Playwright treats them as different roles.",
      "Every `<input>` should have a matching `<label for=\"...\">`. This makes `get_by_label` in Playwright work perfectly.",
      "Use `<img alt=\"...\">` for every image. Screen readers and Playwright's `get_by_alt_text` both depend on it.",
      "Prefer `<button>` over clickable `<div>` — browsers, screen readers, and Playwright all understand buttons better.",
      "Tables are still common in enterprise dashboards. Learn `<tr>`, `<th>`, `<td>` — you'll need them.",
    ],
    commonMistakes: [
      {
        mistake: "Using a clickable `<div>` instead of `<button>`",
        fix: "A `<div>` with `onclick` is invisible to screen readers and to Playwright's role-based locators. Use `<button>`.",
      },
      {
        mistake: "Forgetting `type` on `<input>`",
        fix: "Always specify: `type=\"text\"`, `type=\"email\"`, `type=\"password\"`, etc. Default is `text` but being explicit avoids surprises.",
      },
      {
        mistake: "Using `<a href=\"#\">` as a button",
        fix: "That's a link that goes nowhere. If it does an action, use `<button>`. If it navigates, use `<a href=\"...\">`.",
      },
      {
        mistake: "Skipping `<label>` on form inputs",
        fix: "Labels are free accessibility. Without them, screen readers and Playwright's `get_by_label` can't find the input.",
      },
      {
        mistake: "Using `<br>` for spacing instead of CSS",
        fix: "`<br>` is for line breaks in text, not for spacing. Use CSS `margin` or `padding`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The most common tags in one page",
        code: `<h1>Main heading</h1>
<h2>Section heading</h2>
<p>Paragraph with <span>inline span</span>.</p>
<div>Block container</div>
<a href="/page">Link</a>
<button type="button">Button</button>`,
      },
      {
        language: "text",
        title: "A realistic login form",
        code: `<form>
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="you@example.com" />

  <label for="password">Password</label>
  <input id="password" type="password" />

  <label for="remember">
    <input id="remember" type="checkbox" />
    Remember me
  </label>

  <button type="submit">Log in</button>
</form>`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML element reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      },
      {
        title: "MDN — Forms guide",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["html", "tags", "web-fundamentals"],
  },

  "html-attributes": {
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
  },

  "semantic-html": {
    slug: "semantic-html",
    title: "Semantic HTML vs Div Soup",
    summary:
      "Why good HTML makes testing easier — and why div soup is a nightmare.",
    whyItMatters:
      "Semantic HTML is the difference between a test that survives redesigns and one that breaks every sprint. It also happens to be the secret behind Playwright's best locators.",
    notes: `**Semantic HTML** means using the right tag for the right job. Not just \`<div>\` for everything.

Let's look at two versions of the same page.

### Version A — Div soup

~~~html
<div class="header">
  <div class="logo">MyApp</div>
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
    <div class="nav-item">Contact</div>
  </div>
</div>

<div class="main">
  <div class="title">Welcome</div>
  <div class="text">This is the main content.</div>
</div>

<div class="footer">
  <div class="copyright">© 2025 MyApp</div>
</div>
~~~

Everything is a \`<div>\`. It renders fine in a browser. A human can read it. But nothing tells the browser (or Playwright) *what each thing actually is*.

### Version B — Semantic

~~~html
<header>
  <div class="logo">MyApp</div>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <h1>Welcome</h1>
  <p>This is the main content.</p>
</main>

<footer>
  <p>© 2025 MyApp</p>
</footer>
~~~

Same page. Same visual output. But now the browser knows:

- \`<header>\` is the top region
- \`<nav>\` is navigation
- \`<main>\` is the primary content
- \`<footer>\` is the bottom region
- \`<h1>\` is the most important heading
- \`<a>\` are links

### Why this matters for Playwright

Playwright's role-based locators depend on semantic HTML. Compare:

**Finding the Home link in Version A:**
~~~python
page.locator(".nav-item").first  # fragile — will break if classes change
~~~

**Finding the Home link in Version B:**
~~~python
page.get_by_role("link", name="Home")  # stable — uses the actual role
~~~

Version B's locator survives:
- CSS class renames
- Layout changes
- Framework migration (React → Vue → Svelte)
- Dark mode redesigns

Because it's not tied to how things *look*. It's tied to what things *are*.

### The semantic tags you need to know

**\`<header>\`** — Top region of a page or section. Usually contains a logo, title, or nav.

**\`<nav>\`** — Navigation links.

**\`<main>\`** — The main content of the page. Only one per page.

**\`<section>\`** — A thematic grouping of content. Usually has a heading.

**\`<article>\`** — A self-contained piece of content. A blog post, a product card, a comment.

**\`<aside>\`** — Sidebar or supplementary content.

**\`<footer>\`** — Bottom region. Copyright, links, etc.

**\`<figure>\` and \`<figcaption>\`** — An image with a caption.

**\`<time>\`** — A date or time.

### Headings are semantic too

\`<h1>\`, \`<h2>\`, \`<h3>\` — these aren't just styled text. They describe document structure. Screen readers let users jump between headings, like a table of contents.

If you use \`<div class="heading">\` instead of \`<h1>\`, that navigation is lost.

### Lists are semantic

\`<ul>\`, \`<ol>\`, \`<li>\` — a list of items. Screen readers announce "list of 5 items" when they hit a \`<ul>\`.

If it's a list, use \`<ul>\`. Not 5 sibling \`<div>\`s.

### Buttons are semantic

If it does something → \`<button>\`.
If it navigates → \`<a href="...">\`.

Not \`<div onclick="...">\`. That div looks like a button but:
- Screen readers don't announce it as a button
- Playwright's \`get_by_role("button")\` can't find it
- Keyboard users can't Tab to it

### When is a \`<div>\` okay?

Plenty of times. \`<div>\` is fine when:

- You need a wrapper purely for styling
- You're grouping things without a semantic meaning
- You need a layout container (grid or flex child)

Just don't use it for *everything*. A page should have meaningful tags at the top level, and \`<div>\` for layout inside them.

### The test

Look at your page's HTML. Cover the CSS. Ask yourself: does the structure still tell a story? Can someone read the tags and know what each section is?

If yes — you're writing semantic HTML.
If no — you're serving div soup.`,
    handsOn: `Let's convert a div-soup page into semantic HTML.

### Step 1: Create the bad version

In \`html-practice\`, create \`semantic.html\` with:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic Practice</title>
  </head>
  <body>
    <div class="top">
      <div class="logo">MyBlog</div>
      <div class="links">
        <div class="link">Home</div>
        <div class="link">Articles</div>
        <div class="link">About</div>
      </div>
    </div>

    <div class="content">
      <div class="heading">My First Post</div>
      <div class="date">May 15, 2025</div>
      <div class="body">
        This is the content of the post. It talks about learning Playwright.
      </div>
    </div>

    <div class="bottom">
      <div>© 2025 MyBlog</div>
    </div>
  </body>
</html>
~~~

Open in the browser. Looks fine. Now inspect it — everything is a div. No meaning.

### Step 2: Rewrite it semantically

Replace the entire file with:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic Practice</title>
  </head>
  <body>
    <header>
      <div class="logo">MyBlog</div>
      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <article>
        <h1>My First Post</h1>
        <time datetime="2025-05-15">May 15, 2025</time>
        <p>
          This is the content of the post. It talks about learning Playwright.
        </p>
      </article>
    </main>

    <footer>
      <p>© 2025 MyBlog</p>
    </footer>
  </body>
</html>
~~~

Refresh. Visually, it looks nearly identical. But now inspect it.

### Step 3: Inspect and observe

Right-click the nav links → Inspect. They're \`<a>\` tags, not \`<div>\`s.

Right-click the post → Inspect. It's inside \`<article>\`.

### Step 4: Test in console

Open DevTools → Console:

~~~javascript
document.querySelectorAll("nav a").length
document.querySelector("article h1").textContent
document.querySelectorAll("div").length
~~~

Notice: version B has fewer \`<div>\`s. More semantic tags. Same visual result.

### Deliverable

You rebuilt the page with semantic tags. You have fewer divs, more meaning.`,
    challenge: `Take this paragraph and convert it into semantic HTML:

> **Tech Blog** — Home | Posts | About
>
> **How Playwright Changed My Testing Workflow**
> *Posted on April 10, 2025*
>
> After years of dealing with flaky tests, I switched to Playwright. The auto-waiting alone cut my flaky failures by 80%. The trace viewer is genuinely delightful.
>
> [Read more](read-more.html)
>
> ---
>
> © 2025 Tech Blog

Use:
- \`<header>\` for the top bar
- \`<nav>\` for the menu
- \`<article>\` for the blog post
- \`<h1>\` for the post title
- \`<time>\` for the date
- \`<p>\` for the body
- \`<a>\` for the read-more link
- \`<footer>\` for the copyright

Once done, inspect it and identify **3 Playwright locators** you could use to find key elements.`,
    proTips: [
      "Use `<button>` for actions and `<a>` for navigation. Never a `<div>` with `onclick`.",
      "Every page should have exactly one `<h1>` and one `<main>`.",
      "Headings should not skip levels. `<h1>` → `<h2>` → `<h3>`, not `<h1>` → `<h4>`.",
      "If a section feels like a blog post or product card, use `<article>`. If it's a themed block, use `<section>`.",
      "Semantic HTML is free — it doesn't cost anything to use the right tag. The benefits are permanent.",
    ],
    commonMistakes: [
      {
        mistake: "Using `<div>` for clickable elements",
        fix: "Use `<button>`. It's accessible, focusable, and Playwright finds it by role.",
      },
      {
        mistake: "Using `<h3>` for a big subtitle because of how it looks",
        fix: "Headings are for structure, not appearance. Use `<h3>` only if it's a third-level heading. Style with CSS if you need visual hierarchy.",
      },
      {
        mistake: "Wrapping everything in `<section>`",
        fix: "`<section>` should have a heading. If a block doesn't need a heading, use `<div>` or `<article>` or another semantic tag.",
      },
      {
        mistake: "Using `<br>` for vertical spacing between blocks",
        fix: "Use CSS `margin`. `<br>` is for line breaks inside text.",
      },
      {
        mistake: "Confusing `<article>` and `<section>`",
        fix: "`<article>` = standalone (a tweet, a product, a post). `<section>` = thematic grouping with a heading. When in doubt, use `<section>`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Div soup vs semantic",
        code: `<!-- BAD -->
<div class="header">
  <div class="link">Home</div>
</div>

<!-- GOOD -->
<header>
  <a href="/">Home</a>
</header>`,
      },
      {
        language: "text",
        title: "A full semantic page skeleton",
        code: `<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>Post title</h1>
    <time datetime="2025-01-01">Jan 1, 2025</time>
    <p>Body text</p>
  </article>
</main>

<footer>
  <p>© 2025</p>
</footer>`,
      },
      {
        language: "python",
        title: "Playwright locators that work because of semantics",
        code: `page.get_by_role("navigation")
page.get_by_role("link", name="Home")
page.get_by_role("main")
page.get_by_role("article")
page.get_by_role("heading", level=1)`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML sections and outlines",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",
      },
      {
        title: "MDN — Semantics",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["html", "semantic", "accessibility", "web-fundamentals"],
  },

  "accessibility-attributes": {
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
  },

  "css-selectors": {
    slug: "css-selectors",
    title: "CSS Selectors",
    summary:
      "Element, .class, #id, [attr] — the locator language of the web, and how Playwright extends it.",
    whyItMatters:
      "CSS selectors are the fallback when role-based locators aren't enough. Knowing them well means you're never stuck.",
    notes: `**CSS selectors** are the universal language of the web for finding elements. Playwright supports them fully. Even if you prefer role-based locators (you should), you'll need CSS selectors for edge cases.

Let's learn them properly.

### The 5 basic selectors

**1. Element selector**

~~~css
button
input
a
h1
~~~

Matches by tag name. \`button\` selects every \`<button>\` on the page.

In Playwright: \`page.locator("button")\`.

**2. Class selector**

~~~css
.btn
.btn-primary
.card
~~~

Starts with a dot. Matches elements with that class.

\`.btn\` matches \`<button class="btn">\` and \`<div class="btn">\`.

An element with multiple classes is matched by any single class:
~~~html
<button class="btn btn-primary large">Save</button>
~~~
Matches \`.btn\`, \`.btn-primary\`, and \`.large\`.

**3. ID selector**

~~~css
#email
#login-btn
#submit-form
~~~

Starts with \`#\`. Matches the element with that exact \`id\`.

Since IDs are unique, \`#email\` matches at most one element.

**4. Universal selector**

~~~css
*
~~~

Matches every element. Rarely useful in Playwright but good to know.

**5. Attribute selector**

~~~css
[type="text"]
[data-testid="login-btn"]
[aria-expanded="true"]
[href^="https"]
[href$=".pdf"]
[href*="example"]
~~~

Matches elements by attribute.

- \`[attr="value"]\` — exact match
- \`[attr^="prefix"]\` — starts with
- \`[attr$="suffix"]\` — ends with
- \`[attr*="contains"]\` — contains
- \`[attr~="word"]\` — contains word (space-separated)
- \`[attr|="prefix"]\` — starts with prefix followed by hyphen

Very useful in Playwright: \`page.locator("[data-testid='login']")\`.

### Combinators — combining selectors

**Descendant (space)**

~~~css
form input
~~~

Matches any \`<input>\` that is *anywhere inside* a \`<form>\`.

**Child (\`>\`)**

~~~css
form > input
~~~

Matches \`<input>\` that is a **direct child** of \`<form>\`. Not grandchildren.

**Adjacent sibling (\`+\`)**

~~~css
label + input
~~~

Matches an \`<input>\` immediately after a \`<label>\`.

**General sibling (\`~\`)**

~~~css
h2 ~ p
~~~

Matches all \`<p>\` siblings after an \`<h2>\`.

### Pseudo-classes

**\`:first-child\`, \`:last-child\`**

~~~css
li:first-child
li:last-child
~~~

**\`:nth-child(n)\`**

~~~css
li:nth-child(2)   /* the second li */
li:nth-child(odd) /* every odd li */
li:nth-child(even)
~~~

**\`:hover\`, \`:focus\`**

~~~css
button:hover
input:focus
~~~

**\`:checked\`, \`:disabled\`**

~~~css
input:checked
button:disabled
~~~

**\`:not()\`**

~~~css
input:not([type="hidden"])
button:not(.disabled)
~~~

Matches everything except what's inside \`not()\`.

### Chaining and grouping

**Chaining** — no space, means "and":

~~~css
button.btn-primary       /* a button AND has class btn-primary */
input[type="email"]      /* an input AND has type="email" */
div.card.highlight       /* has BOTH classes */
~~~

**Grouping** — comma, means "or":

~~~css
h1, h2, h3   /* matches any of these */
~~~

### Playwright CSS extensions

Playwright adds extra pseudo-classes on top of standard CSS:

**\`:has-text()\`**

~~~python
page.locator("button:has-text('Submit')")
~~~

Matches buttons containing the text "Submit".

**\`:text()\`**

~~~python
page.locator(":text('Welcome')")
~~~

Matches any element with exact text.

**\`:visible\`**

~~~python
page.locator("button:visible")
~~~

Only matches visible buttons. Useful when there are hidden duplicates.

**\`:has()\`**

~~~python
page.locator("div:has(button.submit)")
~~~

Matches \`<div>\` that contains a submit button.

**\`:not()\`**

~~~python
page.locator("button:not(.disabled)")
~~~

### When to use CSS vs role-based

**Use role-based locators when:**
- The element has a clear role and name
- You want the test to survive redesigns
- Accessibility is a priority (it always is)

**Use CSS selectors when:**
- You need to find by data-testid
- You need position-based selection (first, last, nth)
- You need complex combinations (element with class + attribute + child)
- The element has no good role (rare)

**Never use:**
- Deeply nested CSS like \`div > div > div > span.x\` — very fragile
- XPath for anything CSS can do

### Playwright shorthand comparison

~~~python
# Role-based (BEST)
page.get_by_role("button", name="Submit")

# Test ID (GREAT)
page.get_by_test_id("submit")

# Label (VERY GOOD)
page.get_by_label("Email")

# Placeholder (GOOD)
page.get_by_placeholder("you@example.com")

# CSS — id (OKAY if stable)
page.locator("#submit-btn")

# CSS — class (LAST RESORT)
page.locator(".submit-btn")

# CSS with :has-text
page.locator("button:has-text('Submit')")

# CSS attribute
page.locator("[data-testid='submit']")
~~~

### The mental model

CSS selectors are like a **query language**. You describe what you're looking for, and the browser (or Playwright) returns matching elements.

Playwright's built-in locators (\`get_by_role\`, \`get_by_test_id\`, etc.) are **shortcuts** that compile down to CSS selectors internally — but with extra intelligence (waiting for elements, checking for visibility, etc.).`,
    handsOn: `Let's practice CSS selectors in the browser console first — where you can see immediate results.

### Step 1: Open any real page

Go to **https://playwright.dev**.

Open DevTools → **Console**.

### Step 2: Try these selectors

Type each one and press Enter. You'll see how many elements match.

~~~javascript
document.querySelectorAll("a").length
document.querySelectorAll("button").length
document.querySelectorAll("nav a").length
document.querySelectorAll("main a").length
document.querySelectorAll("a[href^='http']").length
document.querySelectorAll("a:not([target])").length
document.querySelectorAll("h1, h2").length
document.querySelector("h1").textContent
~~~

### Step 3: Create your own test page

In \`html-practice\`, create \`css.html\`:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Practice</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/" class="nav-link active">Home</a>
        <a href="/blog" class="nav-link">Blog</a>
        <a href="/about" class="nav-link">About</a>
      </nav>
    </header>

    <main>
      <h1>Welcome</h1>

      <ul class="features">
        <li data-feature="fast">Fast</li>
        <li data-feature="reliable">Reliable</li>
        <li data-feature="modern">Modern</li>
      </ul>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" data-testid="signup-btn">
          Sign up
        </button>
      </form>
    </main>
  </body>
</html>
~~~

### Step 4: Test 8 selectors in the console

Open this file in the browser. In DevTools → Console:

~~~javascript
document.querySelectorAll("nav a").length              // 3
document.querySelectorAll(".nav-link").length          // 3
document.querySelectorAll(".active").length            // 1
document.querySelectorAll("li").length                 // 3
document.querySelectorAll("li:first-child").length     // 1
document.querySelectorAll("[data-testid]").length      // 1
document.querySelectorAll("input[type='email']").length // 1
document.querySelectorAll("button:has-text")           // won't work — that's Playwright-only
~~~

The last one fails because \`:has-text()\` is a Playwright extension, not real CSS.

### Deliverable

You tested 8 CSS selectors in the browser console and confirmed the expected counts.`,
    challenge: `Write CSS selectors for these scenarios — without using DevTools' "Copy Selector" tool.

Assume a page has:

~~~html
<form class="login">
  <label for="email">Email</label>
  <input id="email" type="email" required />

  <label for="password">Password</label>
  <input id="password" type="password" required />

  <button type="submit" class="btn btn-primary" disabled>
    Log in
  </button>
</form>
~~~

**Write a selector for each:**

1. The form (by class)
2. Every input inside the form
3. Only the email input
4. Only the password input (by type)
5. Only required inputs
6. The submit button
7. Only the button's class attribute
8. Only the disabled button

Now write the same thing in **Playwright syntax**:

Example: "Only the email input" → \`page.get_by_label("Email")\`.

Do all 8. Then decide: for each, which is better — a Playwright locator or a CSS selector?`,
    proTips: [
      "Prefer `[data-testid='...']` over `.class` — test IDs are stable, classes aren't.",
      "Use `:has-text()` in Playwright when you want to find a button by its visible text but want to be more flexible than `get_by_role`.",
      "`button:visible` is a Playwright extension that filters out hidden buttons — very useful on SPAs.",
      "The `>` combinator (direct child) is your friend when the page has multiple nested elements with similar classes.",
      "In the browser console, `document.querySelectorAll('selector').length` is the fastest way to test a selector before putting it in Playwright.",
    ],
    commonMistakes: [
      {
        mistake: "Using long descendant chains like `div > div > div.card > span`",
        fix: "Fragile. Even a small HTML change breaks it. Use test IDs or role-based locators instead.",
      },
      {
        mistake: "Using `.class` when the class changes every build",
        fix: "Framework-generated classes like `.css-1x2y3z` are useless for testing. Ask for `data-testid` or find a role-based locator.",
      },
      {
        mistake: "Confusing `,` (or) with ` ` (descendant)",
        fix: "`h1, h2` means 'any h1 or h2'. `h1 h2` means 'h2 inside h1' — which is almost always impossible. Read carefully.",
      },
      {
        mistake: "Using XPath when CSS can do the job",
        fix: "XPath is slower and less readable. Use CSS unless you specifically need parent navigation.",
      },
      {
        mistake: "Not using `:has-text()` when you have visible text to match",
        fix: "If you need to find a button by its text but `get_by_role` doesn't fit (e.g., no accessible name), `button:has-text('Save')` works well.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The 5 basic CSS selectors",
        code: `button              /* tag */
.btn                /* class */
#email              /* id */
[type="text"]       /* attribute */
*                   /* universal (avoid) */`,
      },
      {
        language: "text",
        title: "Combinators and pseudo-classes",
        code: `form input              /* any input inside form */
form > input            /* direct child only */
label + input           /* input right after label */
li:first-child          /* first list item */
li:nth-child(2)         /* second list item */
input:checked           /* checked input */
button:disabled         /* disabled button */
input:not([type="hidden"])  /* every input except hidden */`,
      },
      {
        language: "python",
        title: "Same locator in Playwright — five ways",
        code: `# Best
page.get_by_role("button", name="Log in")

# Very good
page.get_by_test_id("login-btn")

# Good
page.get_by_label("Email")

# CSS with Playwright extension
page.locator("button:has-text('Log in')")

# Plain CSS
page.locator("[data-testid='login-btn']")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — CSS selectors reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
      },
      {
        title: "Playwright — Other locators (CSS, XPath)",
        url: "https://playwright.dev/python/docs/other-locators",
      },
      {
        title: "CSS Diner — interactive selector game",
        url: "https://flukeout.github.io/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 35,
    tags: ["css", "selectors", "locators", "web-fundamentals"],
  },
    "xpath-absolute-vs-relative": {
    slug: "xpath-absolute-vs-relative",
    title: "XPath: Absolute vs Relative",
    summary:
      "Understand two XPath styles, why one is fragile, and how to read the other.",
    whyItMatters:
      "You may see XPath in old test suites, browser tools, and job interviews. You need to recognise fragile XPath before it creates flaky tests.",
    notes: `**XPath** is a language for finding elements in an HTML or XML document. CSS selectors are more common in modern web testing, but XPath still appears in older projects.

Think of XPath like giving directions to a chai shop.

An **absolute XPath** says: start at the country, then state, city, lane, building, floor, shop, and counter.

A **relative XPath** says: find the chai shop with this name, then find its counter.

Both can reach the same place. But if the building gets one new floor, the first direction becomes wrong. The second still works.

### Absolute XPath

An absolute XPath starts from the root of the document. It usually begins with one forward slash.

~~~text
/html/body/div[1]/main/form/div[2]/input
~~~

Read it from left to right:

- Start at the html element
- Go to body
- Go to the first div
- Go to main
- Go to form
- Go to the second div
- Find its input

Browser DevTools often gives you this when you choose Copy full XPath.

It looks precise. But it is usually a bad locator.

Imagine a developer adds one banner near the top of the page:

~~~html
<body>
  <div class="cookie-banner">Cookies</div>
  <div id="app">
    ...
  </div>
</body>
~~~

Now the app container may become the second div instead of the first div. Your absolute XPath points somewhere else, even though the email input itself did not change.

This is why absolute XPath is fragile.

### Relative XPath

A relative XPath starts from a useful point instead of the document root. It usually begins with two forward slashes.

~~~text
//input[@name="email"]
~~~

This means:

- Find an input element
- Whose name attribute equals email
- It can exist anywhere in the page

Here is another example:

~~~text
//button[normalize-space()="Log in"]
~~~

This means:

- Find a button
- Whose visible text, after removing extra spaces, is Log in

Relative XPath depends on meaningful information: a tag, an attribute, visible text, or nearby structure. It is much more likely to survive harmless layout changes.

### A comparison

Suppose the page contains this:

~~~html
<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <button type="submit">Log in</button>
</form>
~~~

Here are three ways to find the input:

~~~text
/html/body/div[1]/main/form/div[2]/input
//input[@name="email"]
//input[@id="email"]
~~~

The first one depends on the whole page layout. The last two depend on details of the input itself.

For a Playwright test, you would normally prefer an even clearer locator:

~~~python
page.get_by_label("Email")
~~~

That locator explains what the user sees. It also checks that the page is accessible.

### One slash vs two slashes

This is the small rule that confuses many beginners:

- One slash at the beginning means start from the document root.
- Two slashes means search for matching elements from the current context.

For example:

~~~text
/html/body
//button
~~~

The first expression follows an exact path. The second expression searches for buttons.

Inside a selected container, two slashes search below that container. For example, if you are already looking inside a login form, you can search for a button within it.

### When will you see absolute XPath?

You may see it in:

- Old Selenium projects
- Browser DevTools copy options
- Quick experiments during debugging
- Code written by someone in a hurry
- Interview questions about locator stability

Knowing it is useful. Using it as your normal locator strategy is not.

### The simple rule

If your XPath contains many numbered steps like div[1], div[2], and span[3], stop and inspect the page again.

Look for:

- A role and accessible name
- A label
- A test ID
- A stable attribute
- A short CSS selector

A locator should describe the element's meaning, not the entire path the browser took to reach it.`,
    handsOn: `Let's compare a fragile XPath with a stable one.

### Step 1: Create a practice page

Create a file called xpath-paths.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>XPath Paths</title>
  </head>
  <body>
    <main>
      <form>
        <div>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>

        <button type="submit">Log in</button>
      </form>
    </main>
  </body>
</html>
~~~

Open the file in your browser.

### Step 2: Inspect the email input

Right-click the email field and choose Inspect.

In the Elements panel, right-click the input element. Chrome may show options such as Copy XPath and Copy full XPath.

Copy both into a notes file. You may see something similar to these:

~~~text
Full XPath: /html/body/main/form/div[1]/input
XPath: //*[@id="email"]
~~~

Your exact result can differ. That is okay.

### Step 3: Test both in the DevTools console

Open the Console tab and run:

~~~javascript
$x("/html/body/main/form/div[1]/input")
$x("//input[@name='email']")
~~~

Both should return the email input in an array.

The dollar-x helper is a DevTools shortcut for testing XPath. It is useful for learning. It is not Playwright code.

### Step 4: Break the absolute XPath

Add this line just inside the body, above main:

~~~html
<div>Welcome banner</div>
~~~

Save and refresh.

Run the two XPath expressions again. The absolute path may now fail or point to the wrong element. The relative XPath using the name attribute should still work.

### Step 5: Write the Playwright version

For this page, write the locator you would actually prefer:

~~~python
page.get_by_label("Email")
~~~

### Deliverable

You tested one absolute XPath and one relative XPath. Then you changed the page layout and saw why the relative locator is safer.`,
    challenge: `Create a small checkout form with these fields:

- Full name
- Delivery address
- Pincode
- Place order button

Give every input a meaningful label and a meaningful name attribute.

Then write three locator options for the pincode input:

1. One absolute XPath from DevTools
2. One relative XPath using an attribute
3. One Playwright locator you would actually use

Use this shape for your answer:

~~~text
Absolute XPath:
...

Relative XPath:
...

Preferred Playwright locator:
...
~~~

Now add a new div above the form. Check which locator still works.

Your goal is not to memorise XPath. Your goal is to notice when a locator depends on layout instead of meaning.`,
    proTips: [
      "If DevTools gives you a long XPath with many numbered div elements, treat it as a warning sign.",
      "A relative XPath using a stable attribute is safer than an absolute XPath, but Playwright role and label locators are usually better.",
      "Use the DevTools `$x()` helper to experiment with XPath before putting it into an old test suite.",
      "A locator should survive a designer moving cards around on the page.",
      "Ask yourself: does this locator describe the user-facing element, or only the current HTML layout?",
    ],
    commonMistakes: [
      {
        mistake: "Copying full XPath from DevTools and using it directly in a test",
        fix: "DevTools creates a path based on the current layout. Replace it with a role, label, test ID, stable CSS selector, or short relative XPath.",
      },
      {
        mistake: "Thinking two slashes always mean a better locator",
        fix: "Relative XPath is less fragile than absolute XPath, but it can still be vague. Add a meaningful attribute or nearby text.",
      },
      {
        mistake: "Using numbered div positions as the main identity of an element",
        fix: "Positions change when a banner, error message, or new component is added. Prefer meaningful attributes such as name or data-testid.",
      },
      {
        mistake: "Using XPath when a label exists",
        fix: "For a labelled input, use Playwright's get_by_label. It is clearer and also checks accessibility.",
      },
      {
        mistake: "Assuming the copied XPath is identical across browsers",
        fix: "Browser tools can produce slightly different paths. Tests should not depend on tool-generated structure.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Absolute XPath — fragile",
        code: `/html/body/div[1]/main/form/div[2]/input`,
      },
      {
        language: "text",
        title: "Relative XPath — based on a meaningful attribute",
        code: `//input[@name="email"]`,
      },
      {
        language: "python",
        title: "The preferred Playwright locator for a labelled field",
        code: `page.get_by_label("Email")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — Introduction to XPath",
        url: "https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript",
      },
      {
        title: "Playwright — Locator best practices",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["xpath", "locators", "web-fundamentals", "playwright"],
  },
    "xpath-predicates": {
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
  },
    "xpath-axes": {
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
  },
    "why-playwright-discourages-xpath": {
    slug: "why-playwright-discourages-xpath",
    title: "Why Playwright Discourages XPath",
    summary:
      "Understand why XPath is a fallback, not the default locator strategy in Playwright.",
    whyItMatters:
      "Locator choices decide whether a test stays useful for months or breaks after one normal UI change.",
    notes: `XPath is not evil. It is a capable query language and you will see it in old Selenium projects. The problem is not that XPath cannot find elements. The problem is that it often finds elements in ways that are hard to read, easy to break, and far away from how users experience a page.

Playwright encourages locators based on user-facing meaning instead.

That means Playwright wants you to prefer:

1. Role plus accessible name
2. Labels for form fields
3. Visible text when it is unique
4. Test IDs for important custom elements
5. CSS only when needed
6. XPath as a last fallback

### Tests should behave like users

A user does not think, 'click the second button inside the third div'.

A user thinks, 'click Log in'.

Playwright tries to help you write tests from this user point of view.

Consider this button:

~~~html
<button type="submit">Log in</button>
~~~

You could find it using XPath:

~~~python
page.locator("//button[normalize-space()='Log in']")
~~~

That works. But this is clearer:

~~~python
page.get_by_role("button", name="Log in")
~~~

The second locator says exactly what the user sees: a button named Log in.

It also confirms something useful about the page. If the developer changes a real button into a clickable div, the role-based locator may fail. That failure is valuable because the page may have become less accessible.

### XPath often depends on implementation details

Many XPath locators depend on nesting, class names, or element positions.

~~~text
//div[3]/section/div[2]/button
~~~

This does not explain what the button does. It only explains where the button happens to sit today.

A harmless UI change can break it:

- A cookie banner is added
- A validation message appears
- A wrapper div is introduced
- Cards are reordered
- A design team changes a layout

The user can still log in. But the test fails because it was testing the page structure, not the product behaviour.

That is a flaky test waiting to happen.

### XPath is harder to review

Imagine a teammate opens a pull request with this line:

~~~python
page.locator("//div[contains(@class, 'card')][.//span[text()='Pro']]//button[2]")
~~~

You can slowly decode it. But it takes effort.

Now compare it with:

~~~python
plan_card = page.get_by_role("article").filter(has_text="Pro")
plan_card.get_by_role("button", name="Choose plan").click()
~~~

The second version reads almost like a test step. A reviewer can understand the intent quickly.

Clear tests are easier to maintain when the original author changes teams or leaves the company.

### XPath does not get Playwright's best guidance

Playwright can inspect role-based locators and suggest stable choices in code generation. Its strict mode also helps when a locator matches more than one element.

XPath can still work with auto-waiting and strictness, but it gives you less semantic help. You are responsible for making sure the expression means the right thing.

A role-based locator naturally pushes you to ask good questions:

- Is this really a button?
- Does it have a clear accessible name?
- Can a keyboard user reach it?
- Is there more than one button with this name?

These are product-quality questions, not only testing questions.

### When XPath is still reasonable

Use XPath only when another locator cannot express what you need cleanly.

Some possible cases:

- You are maintaining a legacy suite and cannot change everything now
- The page has poor markup and no test IDs
- You need to move from a uniquely identified cell to its table row
- You are working with XML rather than regular HTML
- A difficult sibling or ancestor relationship is the only available path

Even then, keep the XPath short and based on stable information.

For example, this is understandable:

~~~text
//td[normalize-space()="INV-1042"]/ancestor::tr
~~~

It identifies a row by invoice number. That is much better than walking through six anonymous div elements.

### The best long-term fix

If an element is difficult to locate, do not immediately write clever XPath.

First ask whether the application can improve:

- Add a proper label
- Use a native button or link
- Add a meaningful accessible name
- Add a data-testid attribute
- Use semantic HTML

This is like putting a clear house number outside a home instead of asking every visitor to count trees from the street corner.

### Your locator priority

For new Playwright code, remember this order:

~~~text
Role and name
Label
Test ID
Text
Stable CSS
XPath only when needed
~~~

This order keeps tests readable, accessible, and less fragile.`,
    handsOn: `Let's compare XPath with Playwright's preferred locators.

### Step 1: Create a page

Create a file named locator-comparison.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Locator Comparison</title>
  </head>
  <body>
    <main>
      <h1>Sign in</h1>

      <form aria-label="Sign in form">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <label for="password">Password</label>
        <input id="password" name="password" type="password" />

        <button type="submit" data-testid="login-submit">
          Log in
        </button>

        <a href="/forgot-password">Forgot password?</a>
      </form>
    </main>
  </body>
</html>
~~~

### Step 2: Write many ways to find each element

For the Log in button, write these locator options in a notes file:

~~~python
# XPath
page.locator("//button[normalize-space()='Log in']")

# Role and name
page.get_by_role("button", name="Log in")

# Test ID
page.get_by_test_id("login-submit")

# CSS
page.locator("[data-testid='login-submit']")
~~~

For the email field, write:

~~~python
# XPath
page.locator("//input[@name='email']")

# Label
page.get_by_label("Email address")

# Placeholder
page.get_by_placeholder("you@example.com")
~~~

### Step 3: Rank them

For each group, rank the locator choices from best to weakest.

A good answer for the button is usually:

1. Role and name
2. Test ID
3. CSS using the test ID
4. XPath

The exact ranking can change by situation. For example, a test ID is excellent when the button text changes with language selection.

### Step 4: Make the page less accessible

Temporarily replace the button with this:

~~~html
<div class="fake-button">Log in</div>
~~~

Now think about what changed.

The page may still look clickable. But it is no longer a native button. A role-based locator should make you notice this issue. Keyboard users and screen reader users may also face problems.

Restore the real button afterwards.

### Deliverable

You wrote several locators for the same elements and identified the one that best represents how a user interacts with the page.`,
    challenge: `Review the following locators and rewrite each one using a better Playwright locator where possible.

~~~python
page.locator("/html/body/div[1]/main/div[2]/button").click()

page.locator("//input[@placeholder='Email']").fill("ravi@example.com")

page.locator("//div[@class='nav-item'][2]").click()

page.locator("//button[contains(@class, 'primary')]").click()
~~~

For each one, write:

1. Why it is fragile or unclear
2. What HTML improvement would make it easier to test
3. Your preferred Playwright locator

For example, if the navigation item is really a link named Courses, your preferred locator could be:

~~~python
page.get_by_role("link", name="Courses")
~~~

If you cannot write a better locator because the HTML gives you no useful information, say what attribute you would ask the frontend developer to add.

This is a real automation-engineer skill: improving the product markup instead of only working around it.`,
    proTips: [
      "A locator that reads like a user action is usually easier for the next engineer to maintain.",
      "Prefer native HTML first. A real button gives Playwright a button role without extra work.",
      "Use data-testid when visible text is dynamic, translated, or repeated across the page.",
      "Do not rewrite a whole legacy suite in one day. Replace the weakest XPath locators as you touch related tests.",
      "If a locator is difficult, inspect the product markup before writing a more complicated expression.",
    ],
    commonMistakes: [
      {
        mistake: "Treating XPath as forbidden in every situation",
        fix: "XPath is a fallback, not a banned tool. Use it only when a clearer semantic locator is not practical.",
      },
      {
        mistake: "Using text locators for labels that change with translation",
        fix: "Use a stable test ID or a translation-aware locator strategy when the product supports multiple languages.",
      },
      {
        mistake: "Choosing a CSS class because it looks readable today",
        fix: "Classes are often styling details. Prefer roles, labels, or data-testid unless the class is explicitly stable.",
      },
      {
        mistake: "Keeping a long XPath because it currently passes",
        fix: "A passing locator can still be a maintenance problem. Replace it before it becomes a flaky production issue.",
      },
      {
        mistake: "Adding roles to div elements instead of using native controls",
        fix: "Use a real button, link, input, or select whenever possible. Native elements give accessibility behaviour for free.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Same button, two locator styles",
        code: `# Works, but less clear
page.locator("//button[normalize-space()='Log in']").click()

# Preferred
page.get_by_role("button", name="Log in").click()`,
      },
      {
        language: "python",
        title: "Preferred locators for a login form",
        code: `page.get_by_label("Email address").fill("ravi@example.com")
page.get_by_label("Password").fill("secret")
page.get_by_role("button", name="Log in").click()`,
      },
      {
        language: "python",
        title: "Use a test ID when it communicates a stable testing contract",
        code: `page.get_by_test_id("login-submit").click()`,
      },
    ],
    furtherReading: [
      {
        title: "Playwright — Locator best practices",
        url: "https://playwright.dev/python/docs/locators",
      },
      {
        title: "Playwright — Other locators, including XPath",
        url: "https://playwright.dev/python/docs/other-locators",
      },
      {
        title: "MDN — Accessible HTML",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["playwright", "xpath", "locators", "accessibility"],
  },
    "dom-vs-html-source": {
    slug: "dom-vs-html-source",
    title: "DOM vs HTML Source",
    summary:
      "Learn why View Page Source and DevTools can show different HTML, and why Playwright uses the live DOM.",
    whyItMatters:
      "Playwright tests the page users actually receive after JavaScript runs. Reading the live DOM helps you choose locators that match reality.",
    notes: `A beginner often sees two browser options and assumes they show the same thing:

- View Page Source
- Inspect

They do not.

**View Page Source** shows the HTML sent by the server when the page first loaded.

**Inspect** opens DevTools and shows the current **DOM**. The DOM is the live page structure after the browser and JavaScript have made changes.

Think of ordering food on Swiggy.

The restaurant's original order ticket is like the HTML source. It says what you first asked for.

The bag arriving at your door is like the DOM. It includes the food, maybe an extra spoon, maybe a changed item, and the final state you can actually use.

For Playwright, the delivered bag matters. Playwright interacts with the live DOM.

### What is the DOM?

DOM means **Document Object Model**.

The browser turns HTML into a tree of objects. JavaScript can read, add, remove, and change those objects.

For example, the server may send this HTML:

~~~html
<body>
  <div id="app"></div>
  <script src="/app.js"></script>
</body>
~~~

That looks almost empty.

Then JavaScript runs and adds the real page:

~~~html
<body>
  <div id="app">
    <main>
      <h1>Welcome, Ravi</h1>
      <button>Log out</button>
    </main>
  </div>
  <script src="/app.js"></script>
</body>
~~~

View Page Source may show the first version. DevTools Elements shows the second version.

A Playwright locator can find the Log out button because the button exists in the live DOM.

### Why modern apps make this important

Many React, Angular, Vue, and Next.js applications load data after the first HTML response.

For example:

1. The page loads with a loading message.
2. JavaScript requests user data from an API.
3. The API responds.
4. JavaScript updates the DOM.
5. The user sees their dashboard.

If you inspect only page source, you may not see the final dashboard content at all.

This is one reason Playwright is useful. It uses a real browser and waits for the live page state.

### A simple DOM change

Suppose the original page has this:

~~~html
<p id="status">Loading...</p>
~~~

JavaScript later changes it to:

~~~html
<p id="status">Payment complete</p>
~~~

The source may still contain Loading. The DOM now contains Payment complete.

A Playwright test should check the final user-facing state:

~~~python
expect(page.get_by_text("Payment complete")).to_be_visible()
~~~

It should not care what text existed for half a second during loading, unless loading behaviour is the thing you are testing.

### DevTools Elements is your testing view

When you need a locator, use **Inspect** and look in the Elements panel.

That view tells you:

- Which elements exist right now
- Which attributes they have right now
- Whether an element is inside an iframe or shadow root
- Whether JavaScript added or removed something
- Whether text changed after an API response

This is the closest everyday view to what Playwright sees.

### Page source still has a use

View Page Source is not useless. It helps when you want to know:

- What HTML arrived from the server
- Whether content is server-rendered
- Whether JavaScript created an element later
- Which scripts and styles the page loaded initially
- Whether a meta tag or canonical URL exists in the original response

But do not use it as your main place for writing Playwright locators.

### DOM updates happen all the time

The DOM can change because of:

- Clicking a button
- Typing into a field
- Receiving API data
- Opening a modal
- Showing a validation message
- Scrolling a page with lazy-loaded content
- Signing in or signing out
- A timer updating a countdown

This is normal web behaviour.

For example, a login form might add an error message only after you click Submit:

~~~html
<p role="alert">Email is required</p>
~~~

That alert did not exist in the original page source. It exists after the user action.

A good Playwright test waits for it:

~~~python
page.get_by_role("button", name="Log in").click()
expect(page.get_by_role("alert")).to_have_text("Email is required")
~~~

### The key testing rule

When a user can see or interact with it, find it in the live DOM.

When a locator fails, inspect the current DOM. Do not guess from old source code, a screenshot, or a copied selector from yesterday.

The DOM is the current truth of the page.`,
    handsOn: `Let's see source and DOM become different.

### Step 1: Create a practice page

Create a file named dom-vs-source.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DOM vs Source</title>
  </head>
  <body>
    <main id="app">
      <p id="status">Loading profile...</p>
    </main>

    <script>
      setTimeout(() => {
        document.querySelector("#status").textContent =
          "Welcome, Ravi!";
      }, 1500);
    </script>
  </body>
</html>
~~~

Open the file in your browser.

### Step 2: Inspect the original source

Right-click anywhere on the page and choose View Page Source.

Find the status paragraph. It says:

~~~html
<p id="status">Loading profile...</p>
~~~

Keep that tab open.

### Step 3: Inspect the live DOM

Go back to the normal page. Wait two seconds until the visible message changes.

Now right-click the message and choose Inspect.

In the Elements panel, the status paragraph should now say:

~~~html
<p id="status">Welcome, Ravi!</p>
~~~

The source stayed the same. The live DOM changed.

### Step 4: Check from the console

Open the Console tab and run:

~~~javascript
document.querySelector("#status").textContent
~~~

You should get:

~~~text
Welcome, Ravi!
~~~

### Step 5: Think like a Playwright test

If this were a real app, the useful assertion would be:

~~~python
expect(page.get_by_text("Welcome, Ravi!")).to_be_visible()
~~~

A Playwright test waits for the user-visible result in the DOM.

### Deliverable

You viewed the initial HTML source, inspected the changed DOM, and confirmed that JavaScript updated the visible page.`,
    challenge: `Extend your practice page with a button called Show offer.

When the user clicks it, JavaScript should add this content inside main:

~~~html
<section>
  <h2>Festival offer</h2>
  <p>Get 20% off on your first course.</p>
  <button>Claim offer</button>
</section>
~~~

Then answer these questions:

1. Will the offer section appear in View Page Source?
2. Where can you inspect the offer after clicking the button?
3. Which Playwright locator would click Show offer?
4. Which Playwright locator would find Claim offer?
5. Which assertion would check that the discount message is visible?

Use role-based locators for the buttons. The goal is to practise thinking about what exists before and after a user action.`,
    proTips: [
      "Use DevTools Elements, not View Page Source, when choosing a Playwright locator.",
      "If content appears after a click or API call, inspect the DOM after that action.",
      "A locator failure can mean the element has not appeared yet, not that the selector is wrong.",
      "When debugging, check whether the element is hidden, disabled, inside an iframe, or replaced after rendering.",
      "Playwright's auto-wait helps with live DOM changes. Prefer assertions and locators over manual sleep calls.",
    ],
    commonMistakes: [
      {
        mistake: "Writing a locator from View Page Source",
        fix: "Use Inspect and the Elements panel. Playwright interacts with the current DOM, not only the initial response.",
      },
      {
        mistake: "Assuming an element exists before JavaScript finishes loading data",
        fix: "Use Playwright locators and assertions that wait for the expected user-visible state.",
      },
      {
        mistake: "Using a fixed sleep while waiting for DOM changes",
        fix: "Wait for a meaningful locator or assertion instead. Fixed sleeps are slow and still fail on a slower network.",
      },
      {
        mistake: "Inspecting the loading state but testing the final state",
        fix: "Perform the same action in DevTools that your test performs, then inspect the resulting DOM.",
      },
      {
        mistake: "Thinking DOM means only HTML text",
        fix: "The DOM is a live tree of page objects. JavaScript can change text, attributes, visibility, and structure.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Initial HTML source",
        code: `<main id="app">
  <p id="status">Loading profile...</p>
</main>`,
      },
      {
        language: "javascript",
        title: "JavaScript changes the live DOM",
        code: `document.querySelector("#status").textContent =
  "Welcome, Ravi!";`,
      },
      {
        language: "python",
        title: "Playwright checks the final user-visible state",
        code: `expect(
    page.get_by_text("Welcome, Ravi!")
).to_be_visible()`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — Introduction to the DOM",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
      },
      {
        title: "Playwright — Assertions",
        url: "https://playwright.dev/python/docs/test-assertions",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 25,
    tags: ["dom", "html", "devtools", "web-fundamentals"],
  },
    "dynamic-content": {
    slug: "dynamic-content",
    title: "Dynamic Content",
    summary:
      "Understand content that appears, changes, or disappears after the page first loads.",
    whyItMatters:
      "Most modern apps are dynamic. Playwright tests must wait for meaningful page states, not assume every element exists immediately.",
    notes: `**Dynamic content** is anything on a page that changes after the first screen appears.

This happens constantly in modern web apps.

You open an IRCTC page. First you see a spinner. Then trains appear.

You open Swiggy. First the restaurant cards show skeleton boxes. Then prices, ratings, and delivery times arrive.

You submit a login form. First the button says Log in. Then it may show Signing in. After success, the dashboard appears. After failure, an error message appears.

All of that is dynamic content.

### Static content vs dynamic content

**Static content** is already present when the page loads.

~~~html
<h1>Playwright Academy</h1>
<p>Learn browser automation from zero.</p>
~~~

**Dynamic content** appears or changes later.

~~~html
<p role="status">Loading courses...</p>
~~~

After an API request finishes, JavaScript may replace it with:

~~~html
<ul>
  <li>HTML fundamentals</li>
  <li>CSS selectors</li>
  <li>Playwright locators</li>
</ul>
~~~

The browser page is not a fixed poster. It is more like an Indian railway platform display. The board keeps changing as new information arrives.

### Why content becomes dynamic

A page can change because of:

- API responses
- User clicks
- Form validation
- Search input
- Tabs and accordions
- Modals opening or closing
- Infinite scrolling
- Live notifications
- Timers and countdowns
- Sign-in state
- Feature flags or permissions

For example, an admin dashboard may show different buttons for an admin and a regular employee. The HTML is built based on the current user's permission.

### The loading lifecycle

A common lifecycle looks like this:

1. Page opens
2. Loading message or skeleton appears
3. Browser sends an API request
4. API responds with data
5. JavaScript updates the DOM
6. Loading message disappears
7. Final content becomes visible

A test should understand which part of this lifecycle matters.

If you are testing that courses load successfully, do not only check that Loading courses appears. Check that the course list becomes visible.

~~~python
expect(page.get_by_role("heading", name="Available courses")).to_be_visible()
expect(page.get_by_role("listitem")).to_have_count(3)
~~~

The exact assertion depends on the product. The key idea is to wait for a meaningful final result.

### Why fixed waits are bad

A common beginner reaction is to write a fixed delay:

~~~python
page.wait_for_timeout(3000)
~~~

This means: stop for three seconds and hope the page is ready.

It can fail in two opposite ways:

- On a fast run, you waste three seconds for no reason.
- On a slow run, three seconds is not enough and the test still fails.

It is like waiting outside a restaurant for exactly ten minutes without checking whether your table is ready.

Playwright is better at this. Its locators and web-first assertions wait automatically for the expected condition.

~~~python
expect(page.get_by_text("Payment successful")).to_be_visible()
~~~

This waits until the message appears, up to the configured timeout.

### Dynamic does not mean random

A dynamic page should still have clear states.

For a search page, those states may be:

- Empty search box
- User types a query
- Loading indicator appears
- Results appear
- No-results message appears
- Network error message appears

Each state is testable.

For example:

~~~python
search_box = page.get_by_placeholder("Search courses")
search_box.fill("XPath")

expect(page.get_by_role("heading", name="XPath basics")).to_be_visible()
~~~

If no result exists, test the meaningful empty state:

~~~python
expect(page.get_by_text("No courses found")).to_be_visible()
~~~

### Common dynamic UI patterns

**Loading spinner**

A small icon or text that tells users data is loading.

**Skeleton screen**

Grey placeholder boxes shaped like the final cards or rows.

**Toast notification**

A small success or error message that appears briefly, such as Profile saved.

**Modal**

A dialog that appears above the current page, such as Delete account?

**Accordion**

Extra content appears after a user clicks a heading.

**Infinite scroll**

More items load as the user reaches the bottom of a list.

**Autocomplete**

Suggestions appear while the user types.

All of these need careful locators and assertions.

### How Playwright helps

Playwright locators auto-wait for elements to become actionable. Before clicking, it checks useful things such as visibility and stability.

Assertions also retry until the expected state arrives.

This does not mean every test is magically correct. You still need to wait for the right thing.

Bad test idea:

~~~python
page.wait_for_timeout(2000)
page.locator(".card").click()
~~~

Better test idea:

~~~python
course_card = page.get_by_role("article", name="XPath basics")
expect(course_card).to_be_visible()
course_card.get_by_role("link", name="Start lesson").click()
~~~

The better version names the product state it needs.

### The simple rule

When testing dynamic content, ask:

- What triggers the change?
- What should the user see next?
- What should disappear?
- What is the final meaningful state?
- Which locator describes that state clearly?

Test the result, not the passage of time.`,
    handsOn: `Let's build a small page with loading and final states.

### Step 1: Create a practice file

Create a file named dynamic-content.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dynamic Content Practice</title>
  </head>
  <body>
    <main>
      <h1>Course library</h1>
      <p id="status" role="status">Loading courses...</p>
      <ul id="course-list"></ul>
    </main>

    <script>
      setTimeout(() => {
        const courses = [
          "HTML fundamentals",
          "CSS selectors",
          "Playwright locators",
        ];

        const list = document.querySelector("#course-list");
        const status = document.querySelector("#status");

        list.innerHTML = courses
          .map((course) => "<li>" + course + "</li>")
          .join("");

        status.textContent = "Courses loaded";
      }, 1500);
    </script>
  </body>
</html>
~~~

Open the file in your browser.

### Step 2: Watch the states

For the first moment, you should see Loading courses.

After around one and a half seconds, the course list appears and the status changes to Courses loaded.

Open DevTools and inspect the list before and after the change.

### Step 3: Test the final DOM in the console

After the courses load, run:

~~~javascript
document.querySelectorAll("#course-list li").length
document.querySelector("#status").textContent
~~~

You should get 3 and Courses loaded.

### Step 4: Write Playwright expectations

Imagine this page is part of your app. Write assertions for the final state:

~~~python
expect(page.get_by_role("status")).to_have_text("Courses loaded")
expect(page.get_by_role("listitem")).to_have_count(3)
expect(
    page.get_by_role("listitem", name="Playwright locators")
).to_be_visible()
~~~

Notice that none of these need a fixed delay.

### Deliverable

You watched a loading state change into final content, inspected both DOM states, and wrote Playwright assertions for the final result.`,
    challenge: `Extend the practice page with a search box and a Search button.

Use this behaviour:

- If the user searches for Playwright, show one result named Playwright locators.
- If the user searches for Python, show a message saying No courses found.
- While the search is running, show Searching...
- Add a short delay so you can see the loading state.

Then write Playwright tests for these two flows:

1. Search for Playwright and verify the result appears.
2. Search for Python and verify the no-results message appears.

For both tests, do not use a fixed timeout. Wait for the final text or final result instead.

Bonus: add a Clear search button that removes the result or no-results message. Write one assertion for the cleared state.`,
    proTips: [
      "Wait for a user-visible result, such as a heading, row, alert, or button, instead of waiting for a number of milliseconds.",
      "Use role=status for loading updates and role=alert for important error messages when building accessible apps.",
      "Test both success and empty states. A search page is incomplete if it only works when results exist.",
      "Inspect the DOM after the user action that triggers the change, not only when the page first opens.",
      "If content changes often, use stable locators based on roles, labels, and test IDs instead of list positions.",
    ],
    commonMistakes: [
      {
        mistake: "Using a fixed wait before every assertion",
        fix: "Use an assertion that waits for a meaningful state, such as visible text, a loaded row, or a success alert.",
      },
      {
        mistake: "Checking only that the loading spinner appeared",
        fix: "Also verify that loading finishes and the intended content, empty state, or error state appears.",
      },
      {
        mistake: "Selecting the third card because it is third today",
        fix: "Locate cards by meaningful content, role, or test ID. Dynamic lists can change order.",
      },
      {
        mistake: "Ignoring temporary error messages and toast notifications",
        fix: "Test important feedback. Use accessible roles such as alert or status so users and tests can find it.",
      },
      {
        mistake: "Assuming a missing element means the locator is wrong",
        fix: "Check whether the action, API response, permission, or scroll position needed to create that element has happened.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Avoid fixed waits",
        code: `# Avoid this
page.wait_for_timeout(3000)

# Prefer a meaningful assertion
expect(
    page.get_by_text("Courses loaded")
).to_be_visible()`,
      },
      {
        language: "python",
        title: "Test search results after dynamic loading",
        code: `page.get_by_placeholder("Search courses").fill("Playwright")

expect(
    page.get_by_role("listitem", name="Playwright locators")
).to_be_visible()`,
      },
      {
        language: "python",
        title: "Test a dynamic empty state",
        code: `page.get_by_placeholder("Search courses").fill("Python")

expect(
    page.get_by_text("No courses found")
).to_be_visible()`,
      },
    ],
    furtherReading: [
      {
        title: "Playwright — Auto-waiting",
        url: "https://playwright.dev/python/docs/actionability",
      },
      {
        title: "Playwright — Assertions",
        url: "https://playwright.dev/python/docs/test-assertions",
      },
      {
        title: "MDN — Web API introduction",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["dynamic-content", "dom", "auto-wait", "web-fundamentals"],
  },
};
