import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
