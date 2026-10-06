import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "devtools-tour",
    title: "Browser DevTools Tour",
    summary:
      "The 7 DevTools panels every tester must know — because this is where you'll find locators.",
    whyItMatters:
      "Playwright finds elements by their HTML. To write good locators, you need to inspect the page. DevTools is your window into the DOM.",
    notes: `**DevTools** (short for Developer Tools) is a built-in browser toolkit. Every browser has it — Chrome, Firefox, Edge, Safari.

You'll use DevTools every single day as a Playwright engineer. It's how you:

- Inspect elements to find good locators
- Watch network requests to debug APIs
- Check cookies and storage
- See console errors

Let's open it and tour the seven panels you'll actually use.

### Opening DevTools

**Windows/Linux:** Press **F12** or **Ctrl + Shift + I**
**Mac:** Press **Cmd + Option + I**

Or right-click anywhere on a page and choose **Inspect**.

DevTools appears as a panel on the side or bottom of the browser. It has a bunch of tabs across the top.

### Panel 1: Elements

This is the most important panel for Playwright work.

It shows you the **HTML structure** of the page. Hover over any element on the page, right-click, choose **Inspect** — and the Elements panel highlights that exact HTML element.

You'll use this constantly to:

- Find the element's id, class, role, aria-label
- See if the element has a data-testid
- Understand parent-child relationships

**This is where you'll look for good locators.**

### Panel 2: Console

The Console shows **messages from the page's JavaScript**. Errors, warnings, and any custom logs.

Useful for:

- Seeing if JavaScript errors appear when you click something
- Running JavaScript on the page directly
- Debugging issues that don't show up in the UI

You can type JavaScript directly into the console. Try: \`document.title\` and press Enter.

### Panel 3: Network

Every request the page makes — API calls, images, fonts, scripts — appears here.

You'll use this to:

- See what API calls a page makes
- Check request and response headers
- Verify what data is being sent
- Debug slow-loading pages

Pro tip: tick the **Preserve log** checkbox. It keeps requests visible even after navigation.

### Panel 4: Application

This panel shows **storage** — cookies, localStorage, sessionStorage, IndexedDB.

You'll use this for:

- Checking if a login created a cookie
- Viewing what's stored in localStorage
- Testing auth state

For Playwright, this is how you'll understand \`storage_state\` — the file we save and reuse for tests.

### Panel 5: Sources

The Sources panel shows **every file the browser loaded** — HTML, CSS, JavaScript.

You'll rarely need this as a Playwright engineer. But you'll use it when a test fails because a JavaScript file didn't load.

### Panel 6: Performance

Records and analyzes page performance. Shows frame rate, rendering time, and CPU usage.

Advanced. You'll mostly ignore this at first.

### Panel 7: Lighthouse

Runs an automated audit of the page and gives it a score for:

- Performance
- Accessibility
- Best practices
- SEO

Useful for getting a quick "health check" of any web page. Playwright has similar features, so we'll revisit this later.

### The three panels you'll use daily

For Playwright work, remember these three:

1. **Elements** — for locators
2. **Network** — for API debugging
3. **Application** — for cookies and storage

The other four are secondary. Learn them as you need them.`,
    handsOn: `Let's tour DevTools on a real page.

### Step 1: Open DevTools

1. Open Chrome (or any browser)
2. Go to: **playwright.dev**
3. Press **F12** (or right-click → Inspect)

### Step 2: Practice with the Elements panel

1. Click the **Elements** tab in DevTools
2. Look at the top-left of the Elements panel — there's a small arrow icon (the **selection tool**)
3. Click that arrow (or press **Ctrl + Shift + C**)
4. Now hover over the "Get started" button on the playwright.dev page
5. Click it

The Elements panel jumps to the exact HTML for that button. You'll see something like:

~~~html
<a class="getStarted..." href="/docs/intro">Get started</a>
~~~

**This is how you find locators.** For this element, Playwright could use:

- \`page.get_by_role("link", name="Get started")\`
- \`page.get_by_text("Get started")\`

Both work. Role-based is preferred.

### Step 3: Play with the Console

1. Click the **Console** tab
2. Type this and press Enter:

~~~javascript
document.title
~~~

You'll see the page title printed. That's JavaScript running on the live page.

Try this too:

~~~javascript
document.querySelectorAll("a").length
~~~

It tells you how many links are on the page.

### Step 4: Explore Network

1. Click the **Network** tab
2. Click the **Preserve log** checkbox
3. Refresh the page (F5)
4. Watch requests flow in

Click any request to see its details — headers, response, timing. This is what a real tester does to understand how a page works.

### Step 5: Check Application

1. Click the **Application** tab
2. In the left sidebar, expand **Cookies**
3. Click **https://playwright.dev**

You'll see the cookies this site stored on your browser.

Try **Local Storage** and **Session Storage** too — same idea.

### Deliverable

You opened DevTools, used the selection tool to inspect an element, ran JavaScript in the console, watched a network request, and viewed cookies.`,
    challenge: `Pick any website you use daily — a shopping site, a bank, a news site — and explore it with DevTools.

Complete these tasks:

1. **Find three different elements** using the selection tool
   - A button
   - A link
   - An input field

2. **For each element**, write down what locator you'd use in Playwright
   - Does it have a role you can use?
   - Does it have visible text?
   - Does it have a data-testid?

3. **Open the Network tab** and log into the site (if you can)
   - What API request fires when you log in?
   - What's the response?

4. **Open the Application tab** after logging in
   - What cookies were created?
   - What's stored in localStorage?

This is exactly the exploration a Playwright engineer does before writing tests for a new site. You just did it manually.`,
    proTips: [
      "Learn the keyboard shortcut Ctrl + Shift + C (or Cmd + Shift + C) — it toggles the element selector instantly.",
      "In the Elements panel, right-click any element and choose 'Copy → Copy selector' for a CSS selector, or 'Copy → Copy JS path' for the JavaScript path. Both are useful starting points.",
      "DevTools remembers what tab you were on per site. So if you always use Elements on your test site, it opens to that tab.",
      "Use the Network panel's 'Fetch/XHR' filter to see only API calls. Hides images and fonts.",
      "Undock DevTools into its own window (three-dot menu → Dock side → Undock) if you have two monitors. It's much easier to work with.",
    ],
    commonMistakes: [
      {
        mistake: "Using the Elements panel to find locators, then copying brittle CSS classes",
        fix: "Prefer role-based locators. Copy the CSS only as a fallback. Playwright encourages role-based for a reason.",
      },
      {
        mistake: "Not using the selection tool, and searching through raw HTML by hand",
        fix: "Click the arrow icon in the top-left of Elements (or Ctrl + Shift + C). Then click the element on the page. Instant match.",
      },
      {
        mistake: "Forgetting to enable 'Preserve log' in Network",
        fix: "Without it, all requests vanish when the page navigates. Always enable it when debugging login flows.",
      },
      {
        mistake: "Trying to learn all 7 panels at once",
        fix: "Learn Elements first. Then Network. Then Application. Ignore the rest until you need them.",
      },
      {
        mistake: "Thinking DevTools is only for developers",
        fix: "Testers use DevTools more than most developers. It's your primary tool.",
      },
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "Console snippets you'll use",
        code: "document.title                         // Page title\ndocument.querySelectorAll(\"a\").length // Count links\nwindow.location.href                   // Current URL\ndocument.cookie                        // All cookies",
      },
      {
        language: "text",
        title: "What a good Playwright locator looks like",
        code: "Preferred (role-based):\n  get_by_role(\"button\", name=\"Submit\")\n\nGood (text-based):\n  get_by_text(\"Sign in\")\n\nGood (label-based):\n  get_by_label(\"Email address\")\n\nFallback (CSS):\n  locator(\"button.submit-btn\")\n\nAvoid (XPath):\n  locator(\"//button[contains(@class, 'submit')]\")",
      },
    ],
    furtherReading: [
      {
        title: "Chrome DevTools Documentation",
        url: "https://developer.chrome.com/docs/devtools/",
      },
      {
        title: "Playwright — Locators guide",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 35,
    tags: ["devtools", "debugging", "locators"],
  };

export default topic;
