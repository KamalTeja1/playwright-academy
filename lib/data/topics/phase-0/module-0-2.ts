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
};
