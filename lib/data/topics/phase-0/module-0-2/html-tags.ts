import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
