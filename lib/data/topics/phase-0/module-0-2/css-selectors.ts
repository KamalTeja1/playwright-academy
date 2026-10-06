import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
