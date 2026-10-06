import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
