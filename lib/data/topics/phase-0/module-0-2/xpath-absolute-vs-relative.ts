import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
