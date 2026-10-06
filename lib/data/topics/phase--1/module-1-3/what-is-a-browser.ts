import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-a-browser",
    title: "What is a browser?",
    summary:
      "The program that turns HTML into the visual pages you use every day.",
    whyItMatters:
      "Playwright drives real browsers. Understanding what a browser does tells you what Playwright can automate.",
    notes: `A browser is the program you use to visit websites. Chrome, Firefox, Safari, Edge — these are all browsers.

But a browser is much more than a window that shows pages. It's one of the most complex pieces of software on your computer. Let's look at what it actually does.

### The five jobs of a browser

**1. Fetch content**

The browser sends requests to servers and receives responses — HTML, CSS, JavaScript, images, videos. This is the 7-step journey from the previous topic.

**2. Parse the content**

HTML comes in as text. The browser reads it and turns it into a tree structure called the DOM. Every tag becomes a node in this tree.

**3. Render the visual page**

The browser takes the DOM and the CSS, calculates positions, and paints pixels onto your screen. This is called rendering.

**4. Run JavaScript**

Modern websites are full of JavaScript. The browser executes it — this is what makes pages interactive. Buttons respond, menus open, forms validate.

**5. Provide the user interface around the page**

Tabs, address bar, bookmarks, back button, history, developer tools. All these are part of the browser, not the page.

### The four big browsers

**Chrome (Google)** — the most popular browser worldwide. Built on Chromium.

**Edge (Microsoft)** — Microsoft's current browser. Also built on Chromium.

**Firefox (Mozilla)** — the only major browser not built on Chromium. Built on Gecko, an independent engine.

**Safari (Apple)** — Apple's browser, only on Apple devices (and Windows historically). Built on WebKit.

Notice something important: Chrome and Edge share the same underlying engine — Chromium. Firefox and Safari have their own.

### Why are there so many browsers?

Three reasons:

1. **Competition** — different companies want to shape the web.
2. **Different features** — Safari optimises for battery life on Macs and iPhones. Chrome optimises for Google services.
3. **Different philosophies** — Firefox champions privacy. Chrome champions speed and features.

From a tester's perspective, this diversity is a challenge. A site must work on all of them. That's where Playwright shines — it can test on Chromium, Firefox, and WebKit (Safari's engine) from the same script.

### The browser's rendering process (simplified)

When the browser receives an HTML page, it:

1. Parses HTML into DOM
2. Parses CSS into rules
3. Combines them into a render tree
4. Calculates layout — the position and size of every element
5. Paints pixels
6. Composites layers into the final image

This happens in milliseconds. Every scroll, click, and animation re-triggers parts of this process.

### The part you'll use most: Developer Tools

Every browser ships with Developer Tools — a set of panels for inspecting and debugging pages. You already used this for the Network panel. Other panels:

- Elements — the DOM tree
- Console — JavaScript output and errors
- Sources — files loaded and debugging tools
- Application — cookies, storage, service workers
- Performance — how fast things render
- Lighthouse — audits for accessibility, SEO, performance

DevTools is where you'll spend half your Playwright career, inspecting elements to find locators.

### Headless vs headed browsers

A regular browser — the one you use daily — is called headed. It has a window, tabs, an address bar. You see it.

A headless browser is the same browser engine running without a visible window. It still loads pages, runs JavaScript, and responds to automation. But nothing appears on screen.

Playwright uses headless mode by default because it's faster and easier to run on servers. But you can flip to headed mode for debugging:

~~~python
browser = p.chromium.launch(headless=False)
~~~

That's when you'll see the browser window open and Playwright take control — clicking, typing, navigating. It's magic the first time.

### Which browsers does Playwright support?

Playwright bundles three engines:

- **Chromium** — powers Chrome, Edge, Brave, and others
- **Firefox** — Mozilla's engine
- **WebKit** — Safari's engine

Playwright's own team maintains these as part of the project, so you don't have to install Chrome separately. Playwright downloads its own copies.

This is one reason Playwright is so popular for cross-browser testing. One API. Three engines. Zero setup.`,
    handsOn: `Let's explore the browsers on your own machine.

### Step 1: Find what browsers you have installed

- **Windows:** Check Start menu → look for Chrome, Edge, Firefox
- **Mac:** Check Applications folder → Safari is always there; look for Chrome, Firefox
- **Linux:** Check your applications menu

### Step 2: Compare loading a page in two browsers

1. Open the same website (e.g., google.com) in Chrome and in Firefox
2. Right-click → Inspect → check the browser version in the console
3. Open the same site in Safari

You'll notice small differences in rendering — fonts, spacing, scrollbars. This is why cross-browser testing matters.

### Step 3: Check your default browser

Go to your OS settings and see what your default browser is set to. That's the one that opens when you click a link from another app.

### Step 4: Look at Developer Tools on each

In each browser, press F12. The DevTools look different — different colors, different layouts. But the concepts are the same.

Find the Elements panel in each browser. Right-click on any element and choose Inspect. All three browsers show you the HTML.

### Deliverable

You opened the same site in at least two browsers, opened DevTools on each, and found the Elements panel. You now know your available browsers and how to inspect pages in each.`,
    challenge: `Compare how the same site renders across browsers.

### Task

1. Open a complex site — like twitter.com, github.com, or a news site — in Chrome
2. Take a screenshot of the homepage
3. Open the same site in Firefox
4. Take a screenshot
5. Compare

Look for:
- Font differences
- Layout differences
- Color differences (usually subtle)
- Speed differences (Firefox sometimes feels faster; Safari often slower to render but lighter on CPU)

### Bonus

Open the same site on your phone (Safari on iPhone, Chrome on Android). Compare to desktop.

The site is now rendering on four different engines (Chromium, Gecko, WebKit mobile, WebKit desktop). Small differences exist.

### Reflection

Every difference you noticed is a potential test case. Cross-browser testing exists because these differences can hide real bugs. Playwright's three-engine support lets you catch them with one test suite.

Write down three differences you noticed. This is the beginning of thinking like a cross-browser tester.`,
    proTips: [
      "Chrome and Edge share the same engine (Chromium). Testing on one usually covers the other.",
      "Safari is WebKit — and Playwright's WebKit engine tests Safari behaviour on any OS.",
      "Use headless mode by default in Playwright. Switch to headed (headless=False) only when debugging.",
      "DevTools shortcuts: F12 or Ctrl+Shift+I opens it, Ctrl+Shift+C toggles the element picker, Ctrl+Shift+M toggles mobile view.",
      "Modern browsers auto-update. Old browsers are only a concern in enterprise environments.",
    ],
    commonMistakes: [
      {
        mistake: "Testing only in Chrome and assuming it works everywhere",
        fix: "Real users are on Safari, Firefox, Edge, and mobile browsers. Test on all three Playwright engines.",
      },
      {
        mistake: "Thinking headless is a different browser",
        fix: "Headless is the same browser without a visible window. Same engine, same behaviour, same rendering.",
      },
      {
        mistake: "Installing Chrome for Playwright",
        fix: "Playwright downloads its own Chromium. You don't need Chrome installed separately.",
      },
      {
        mistake: "Not knowing which engine your browser uses",
        fix: "Chrome and Edge use Chromium. Firefox uses Gecko. Safari uses WebKit. Playwright supports all three.",
      },
      {
        mistake: "Ignoring mobile browsers",
        fix: "Half your users are on phones. Playwright's device emulation tests mobile viewports without real devices.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Launch each browser engine in Playwright",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # Chromium — powers Chrome and Edge
    chromium_browser = p.chromium.launch()
    chromium_page = chromium_browser.new_page()
    chromium_page.goto("https://example.com")

    # Firefox — Mozilla's engine
    firefox_browser = p.firefox.launch()
    firefox_page = firefox_browser.new_page()
    firefox_page.goto("https://example.com")

    # WebKit — powers Safari
    webkit_browser = p.webkit.launch()
    webkit_page = webkit_browser.new_page()
    webkit_page.goto("https://example.com")

    chromium_browser.close()
    firefox_browser.close()
    webkit_browser.close()`,
      },
      {
        language: "python",
        title: "Headed mode — see the browser in action",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # headless=False opens a real visible browser window
    browser = p.chromium.launch(headless=False, slow_mo=500)
    page = browser.new_page()
    page.goto("https://playwright.dev")

    # The page stays open for a few seconds so you can watch
    page.wait_for_timeout(3000)

    browser.close()`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a browser?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_browser",
      },
      {
        title: "Playwright — Browsers",
        url: "https://playwright.dev/python/docs/browsers",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "browser", "basics"],
  };

export default topic;
