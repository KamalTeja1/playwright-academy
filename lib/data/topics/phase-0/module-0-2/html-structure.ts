import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
