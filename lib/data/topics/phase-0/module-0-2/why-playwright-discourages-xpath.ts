import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
