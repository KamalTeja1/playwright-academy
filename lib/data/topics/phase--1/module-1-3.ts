import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "what-happens-when-you-type-url": {
    slug: "what-happens-when-you-type-url",
    title: "What happens when you type a URL?",
    summary:
      "The 7-step journey from your keypress to a page appearing on screen.",
    whyItMatters:
      "Every Playwright test starts with a page.goto() call — and behind that call is this exact journey. Understanding it makes debugging network issues much easier.",
    notes: `You type a URL in the browser. You press Enter. A page appears.

Simple, right? Behind those two seconds is one of the most sophisticated dances in modern technology. Let's trace it, step by step.

### Step 1: The browser parses the URL

The browser takes the URL — say, https://playwright.dev/docs/intro — and breaks it into pieces:

- https — the protocol (encrypted)
- playwright.dev — the domain name
- /docs/intro — the path on the server

Already the browser knows what it needs to find and how to talk to it.

### Step 2: DNS lookup

Computers don't talk to names. They talk to numbers. Every website has a numeric IP address, like 104.18.5.23.

The browser asks a DNS server — think of it as the internet's phone book — "What's the IP for playwright.dev?" The DNS server replies with the IP.

This lookup happens in milliseconds, usually from a local cache. That's why the second visit to a site is faster than the first.

### Step 3: The browser opens a TCP connection

TCP is the protocol that two computers use to have a reliable conversation. The browser sends a request to the server's IP asking, "Can we talk?"

The server replies, "Yes, let's talk."

This is called the TCP handshake, and it happens every time you connect to a new server.

### Step 4: TLS handshake (for HTTPS)

If the URL starts with https (the s stands for secure), the browser and the server now perform another handshake — the TLS handshake.

They agree on a secret code that they'll use to encrypt everything they say to each other. Once this is done, everything exchanged is private — nobody on the network can read it.

This is why the padlock icon appears in your browser. It means the TLS handshake succeeded.

### Step 5: The browser sends an HTTP request

Now the browser sends a request — in a specific format called HTTP. The request includes:

- The method — usually GET for loading pages
- The path — /docs/intro
- Headers — info like what browser you're using, what languages you prefer, and cookies for the site
- Body — empty for GET requests

### Step 6: The server responds

The server receives the request, runs whatever code it needs to run, and sends back an HTTP response:

- A status code — 200 means success, 404 means not found
- Headers — info like content type (HTML), content length, cache settings
- Body — the actual HTML

### Step 7: The browser renders the page

Now the browser receives the HTML and starts rendering:

1. Parses the HTML to build the DOM (a tree of elements)
2. Fetches any external files — CSS, images, JavaScript
3. Applies CSS styles
4. Runs JavaScript (which may fetch more data via APIs)
5. Paints the final visual page onto your screen

While all this happens, the browser fires events — DOMContentLoaded when the DOM is ready, load when everything including images is done.

### Why this matters for Playwright

When you write:

~~~python
page.goto("https://playwright.dev/docs/intro")
~~~

Playwright is orchestrating this entire journey on your behalf. Every step above is happening.

If a page takes time, you can control what to wait for:

~~~python
page.goto(url, wait_until="load")            # wait for full load
page.goto(url, wait_until="domcontentloaded") # wait only for DOM
page.goto(url, wait_until="networkidle")      # wait until no requests for 500ms
~~~

Now you know exactly what each option is waiting for. It's not magic — it's the browser's event system.

If a test fails because an element isn't there yet, you now know: the browser may still be in Step 7, parsing or rendering. That's when auto-waiting in Playwright does its job.`,
    handsOn: `Let's watch the whole journey happen in real time.

### Step 1: Open DevTools Network tab

1. Open Chrome or any Chromium browser
2. Go to playwright.dev
3. Press F12 to open DevTools
4. Click the Network tab
5. Check the box that says Preserve log

### Step 2: Reload the page

Press F5 or Ctrl + R.

Watch the Network panel fill up with requests.

### Step 3: Find the main document request

At the top of the list, you'll see a request for the page itself — the URL you typed.

Click it. On the right side, look at:

- Headers tab → Request Headers → see what your browser sent
- Headers tab → Response Headers → see what the server sent back (content-type, status code)
- Response tab → the actual HTML the server returned

### Step 4: Notice the timing

Click the Timing tab. You'll see breakdowns like:

- Queueing
- DNS lookup (Step 2 from notes)
- Initial connection (Step 3)
- SSL (Step 4)
- Request sent (Step 5)
- Waiting for response (Step 6)
- Content download

This is the entire journey of Step 2 through Step 6, visualized.

### Step 5: See the DNS resolve

In the same Timing panel, the DNS lookup entry shows how long it took to resolve the domain. On the first visit, it's usually 20-100ms. On reloads, it's near zero — because the browser cached it.

### Deliverable

You watched a real page load in DevTools Network, identified the main request, and saw the timing breakdown including DNS, connection, TLS, and download.`,
    challenge: `Compare two different sites.

1. Open DevTools Network on a slow site (any heavy news site)
2. Reload and note: how many requests fired? Total load time?
3. Now open DevTools Network on a simple, fast site (like example.com or a minimalist blog)
4. Reload and note the same numbers

Write down the difference.

### Questions to answer

- How many requests did the slow site fire? The fast site?
- What kind of files were they? (HTML, CSS, JS, images, fonts)
- Which one had more third-party requests (ads, analytics, CDN)?

### Reflection

Every one of those requests follows the same 7-step journey from the notes. On a slow site, the browser is doing this dance 100+ times.

This is why Playwright has wait options — you're telling Playwright when to consider the page "ready". If you wait for the wrong event, tests fail intermittently. Now you know why.`,
    proTips: [
      "The first visit to any site is always slower due to DNS lookup. Subsequent visits use cache.",
      "Use wait_until=\"domcontentloaded\" when you only need the HTML structure, not images or analytics.",
      "If a test fails because an element isn't there yet, use Playwright's auto-waiting — never hard sleep.",
      "The Network tab in DevTools is your best friend for debugging slow loads and API failures.",
      "Preserve log is essential — without it, the request history is wiped when the page navigates.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking the browser makes one request per page",
        fix: "A typical page loads 50-200+ requests. HTML, CSS, JS, images, fonts, API calls — each is a separate request.",
      },
      {
        mistake: "Using time.sleep() to wait for slow pages",
        fix: "Use Playwright's auto-waiting assertions. They wait exactly as long as needed, no more, no less.",
      },
      {
        mistake: "Confusing DNS lookup with loading the page",
        fix: "DNS is just finding the server's IP. Loading is a separate, longer process that happens after.",
      },
      {
        mistake: "Ignoring the request that comes back with 3xx or 4xx status",
        fix: "3xx means redirect — the browser will retry another URL. 4xx means client error. Both matter for tests.",
      },
      {
        mistake: "Assuming HTTPS is optional",
        fix: "Modern browsers mark HTTP pages as 'Not Secure'. Playwright tests should target HTTPS sites.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Controlling what to wait for in Playwright",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # Wait for full page load (images, scripts, everything)
    page.goto("https://playwright.dev", wait_until="load")

    # Or wait only for the DOM to be parsed
    page.goto("https://playwright.dev", wait_until="domcontentloaded")

    # Or wait until network goes quiet for 500ms
    page.goto("https://playwright.dev", wait_until="networkidle")

    browser.close()`,
      },
      {
        language: "javascript",
        title: "The same in TypeScript",
        code: `import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto("https://playwright.dev", { waitUntil: "load" });
await page.goto("https://playwright.dev", { waitUntil: "domcontentloaded" });
await page.goto("https://playwright.dev", { waitUntil: "networkidle" });

await browser.close();`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — How the web works",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
      },
      {
        title: "Playwright — page.goto reference",
        url: "https://playwright.dev/python/docs/api/class-page#page-goto",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "web", "networking", "browser"],
  },

  "what-is-a-browser": {
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
  },

  "browser-engines": {
    slug: "browser-engines",
    title: "Browser engines — Chromium, Gecko, WebKit",
    summary:
      "The three engines behind every browser, and why Playwright bundles all three.",
    whyItMatters:
      "Understanding engines is the difference between 'my test works on Chrome' and 'my test works everywhere'. Playwright's biggest selling point lives here.",
    notes: `Every browser is built on a **browser engine**. The engine is the core software that:

- Reads HTML and CSS
- Runs JavaScript
- Renders pixels on screen

The browser's window, tabs, bookmarks, and settings are just a shell. The engine is where the real work happens.

### The three major engines

**Chromium (Blink)**

The engine behind Chrome, Edge, Brave, Opera, Vivaldi, and many others.

- Made by Google (originally a fork of WebKit)
- Powers roughly 65-70% of all web traffic worldwide
- Fast, aggressively updated, massive developer community
- What most websites are optimised for

**Gecko**

The engine behind Firefox.

- Made by Mozilla
- Powers roughly 3-5% of web traffic
- Independent — not based on Chromium or WebKit
- Champions privacy, open standards, and user freedom

**WebKit**

The engine behind Safari on macOS, iOS, and iPadOS.

- Made by Apple (originally a fork of KHTML)
- Powers roughly 15-20% of web traffic globally
- Dominant on mobile — every iPhone browser must use WebKit by Apple's rules
- Aggressive about battery life and privacy

### Why this matters

The same HTML can look slightly different across engines. A button might be 2 pixels taller in Safari. A font might render thinner in Firefox. A CSS animation might stutter in Edge.

Most differences are cosmetic. But some are real bugs — a form might not submit in Safari, or a date picker might behave differently in Firefox.

A serious website tests on **all three engines** to catch these issues.

### The WebKit + iOS wrinkle

Here's a fact that surprises many testers:

**Every browser on iOS uses WebKit.** Chrome on iPhone, Firefox on iPhone, Edge on iPhone — all of them are forced to use Apple's WebKit engine under the hood. Apple requires it. The app just wraps a WebKit view in different branding.

This means:

- If you test on Playwright's WebKit engine, you're effectively testing what every iPhone user sees
- There's no need to install separate iOS browsers for testing
- WebKit testing covers both macOS Safari and iOS Safari

### Why Playwright bundles all three

Playwright's team made a bold decision: instead of using whatever browser is installed on your machine, Playwright downloads its own copies of Chromium, Firefox, and WebKit.

This gives you:

1. **Consistency** — the same versions of each engine, on any machine, anywhere
2. **Independence** — you don't need Chrome or Firefox installed
3. **Reliability** — no surprises when your local browser auto-updates
4. **Cross-platform** — you can run all three engines on Windows, Mac, or Linux

The command to install them:

~~~bash
playwright install
~~~

This downloads Chromium, Firefox, and WebKit binaries into a Playwright cache folder. From that point on, any test can target any engine.

### How you specify the engine in Playwright

In Python:

~~~python
browser = p.chromium.launch()   # Chromium engine
browser = p.firefox.launch()    # Gecko engine
browser = p.webkit.launch()     # WebKit engine
~~~

Or run your full test suite against all three with one flag:

~~~bash
pytest --browser=chromium --browser=firefox --browser=webkit
~~~

Same tests. Three engines. One command.

This is why Playwright has become the standard for cross-browser automation. Other tools require separate setup for each browser, or they only support Chromium-based browsers.

### Realistic testing strategy

For a typical project:

**Fast feedback loop (daily):** Run only Chromium. It's fast and covers most users.

**Before release:** Run all three engines. Catch Safari and Firefox-specific bugs.

**Nightly or weekly:** Full regression across all engines with parallel execution.

Playwright makes all three of these easy. You write a test once. You run it anywhere.

### The current landscape

In 2025, the browser engine distribution looks roughly like this:

- Chromium (Chrome, Edge, Opera, Brave, and more) — ~65-70%
- WebKit (Safari) — ~15-20%, mostly on mobile
- Gecko (Firefox) — ~3-5%, but loyal and technically important

If you had to test only one, Chromium covers the most users. If you want to test thoroughly, all three matter.

Playwright's three-engine support isn't overkill. It's exactly what a professional test suite needs.`,
    handsOn: `Let's see the engines in action.

### Step 1: Install Playwright browsers

Open a terminal in a project folder (you can use playwright-academy if you want, but any folder works):

~~~bash
pip install playwright
playwright install
~~~

This downloads Chromium, Firefox, and WebKit. It takes a few minutes. You'll see progress for each engine.

### Step 2: Write a script to visit a page in all three

Create a file called engines.py:

~~~python
from playwright.sync_api import sync_playwright

SITE = "https://playwright.dev"

with sync_playwright() as p:
    for name, engine in [
        ("chromium", p.chromium),
        ("firefox", p.firefox),
        ("webkit", p.webkit),
    ]:
        browser = engine.launch()
        page = browser.new_page()
        page.goto(SITE)
        title = page.title()
        print(f"{name}: {title}")
        browser.close()
~~~

### Step 3: Run it

~~~bash
python engines.py
~~~

You should see three lines printed — one per engine, all showing the same page title. Three engines, one script.

### Step 4: Try headed mode for one engine

Change the loop to open Chromium visibly:

~~~python
browser = p.chromium.launch(headless=False, slow_mo=500)
~~~

Run again. Watch the browser open, load the page, and close. That's Playwright controlling Chromium.

### Deliverable

You installed all three Playwright engines and ran a script that loaded the same page in all three. You can now target any engine with one line of code.`,
    challenge: `Find a page that renders differently across engines.

### Task

1. Pick a site with modern CSS — animations, gradients, flexbox, custom fonts
2. Modify your engines.py script to take a screenshot for each engine:

~~~python
page.screenshot(path=f"{name}.png", full_page=True)
~~~

3. Run it
4. Open the three screenshots side by side

### Look for differences

- Font rendering (Chrome usually renders thicker than Safari)
- Spacing (Safari often adds small margins)
- Scrollbar style (each engine shows its own)
- Form controls (dropdowns and checkboxes look noticeably different)

### Reflection

Every visible difference is a potential bug that real users would see. Most are cosmetic, but some break layouts.

Write down 2-3 differences you noticed. This is exactly what cross-browser testers look for.

### Bonus

Now run the same script against mobile device emulation:

~~~python
from playwright.sync_api import devices

browser = p.webkit.launch()
context = browser.new_context(**devices["iPhone 13"])
page = context.new_page()
page.goto("https://playwright.dev")
page.screenshot(path="iphone.png")
~~~

The iPhone simulation uses WebKit with iPhone's viewport and touch behaviour. Same engine as every iOS browser.`,
    proTips: [
      "Install all three engines once with playwright install. It's a one-time setup.",
      "Use --browser=chromium,firefox,webkit in Pytest to run tests against all three.",
      "WebKit in Playwright is what every iOS user sees. Testing WebKit is testing every iPhone browser.",
      "Chromium is fastest for daily development. Save the full three-engine run for PRs and releases.",
      "If a test fails only on WebKit, suspect Safari-specific behaviour — often around input events or scrolling.",
    ],
    commonMistakes: [
      {
        mistake: "Testing only in Chromium and assuming cross-browser works",
        fix: "Chromium covers the most users, but Safari (WebKit) is where most bugs hide. Run all three.",
      },
      {
        mistake: "Installing Chrome or Firefox separately for Playwright",
        fix: "Playwright bundles its own engines. You only need playwright install. Nothing else.",
      },
      {
        mistake: "Thinking 'Firefox on iOS' uses Gecko",
        fix: "All iOS browsers use WebKit. Firefox on iPhone is WebKit under a Firefox skin.",
      },
      {
        mistake: "Running three engines in parallel on a small machine",
        fix: "Three engines use three times the CPU. If your laptop gets hot, run one engine locally and all three in CI.",
      },
      {
        mistake: "Ignoring engine-specific rendering differences",
        fix: "Take screenshots across engines for critical pages. Small differences often reveal bigger underlying issues.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "All three engines in one script",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    for name, engine in [
        ("chromium", p.chromium),
        ("firefox", p.firefox),
        ("webkit", p.webkit),
    ]:
        browser = engine.launch()
        page = browser.new_page()
        page.goto("https://playwright.dev")
        print(f"{name}: {page.title()}")
        browser.close()`,
      },
      {
        language: "bash",
        title: "Run the same test against all three engines",
        code: `# With pytest-playwright
pytest --browser=chromium --browser=firefox --browser=webkit

# Or all at once:
pytest --browser=chromium,firefox,webkit`,
      },
      {
        language: "python",
        title: "Emulate an iPhone (uses WebKit)",
        code: `from playwright.sync_api import sync_playwright, devices

with sync_playwright() as p:
    browser = p.webkit.launch()
    context = browser.new_context(**devices["iPhone 13"])
    page = context.new_page()
    page.goto("https://playwright.dev")
    print(page.title())
    browser.close()`,
      },
    ],
    furtherReading: [
      {
        title: "Playwright — Browsers",
        url: "https://playwright.dev/python/docs/browsers",
      },
      {
        title: "Wikipedia — Comparison of browser engines",
        url: "https://en.wikipedia.org/wiki/Comparison_of_browser_engines",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "browser", "engines", "playwright"],
  },

  "what-is-a-web-server": {
    slug: "what-is-a-web-server",
    title: "What is a web server?",
    summary:
      "The computer that stores websites and responds when browsers ask for pages.",
    whyItMatters:
      "Tests sometimes fail because the backend is slow or down. Understanding servers tells you where to look when a page won't load.",
    notes: `Every website you've ever visited lives on a **web server**. When you type a URL and press Enter, your browser asks a server somewhere in the world: "Please give me this page."

The server replies. Your browser renders it.

### The simplest definition

A web server is a computer that:

1. Stays on 24 hours a day, 7 days a week
2. Has software installed that listens for HTTP requests
3. Responds to those requests with HTML, JSON, images, or whatever is needed

That's it. Everything else is details.

### What a server actually looks like

A server is just a computer. Physically, it looks like a metal box in a data centre. It has a CPU, RAM, storage, and a network connection — like your laptop but optimised for staying on forever.

Big companies have thousands of them. Small apps run on one.

### Client vs server

The browser is the **client**. It asks for things.

The server is the **responder**. It gives things back.

The relationship:

- Client → "Give me the homepage" → Server
- Server → "Here is the HTML" → Client
- Client → "Give me logo.png" → Server
- Server → "Here is the image" → Client
- Client → "Save this form data" → Server
- Server → "Saved. Thanks." → Client

Every action on the web is a conversation between a client and a server. This is called the client-server model.

### Static vs dynamic servers

**Static servers** just send files. If you ask for index.html, they send index.html. The same file for every visitor.

Examples: docs sites, personal blogs, simple landing pages.

**Dynamic servers** run code for each request. They might check who you are, query a database, and generate a custom page.

Examples: any site with login, any e-commerce site, any app with user accounts.

Both types are everywhere. Playwright tests work the same for either.

### Popular web servers

- **Nginx** — the most popular server software on the internet. Fast, battle-tested.
- **Apache** — older but still widely used. Very configurable.
- **Microsoft IIS** — Windows server software, common in enterprises.
- **Node.js** — JavaScript runtime that can act as a server. Very popular for modern apps.
- **Python servers** — Django, Flask, FastAPI. Great for Python projects.
- **Cloud services** — Vercel, Netlify, AWS, Google Cloud. They manage servers for you.

### Servers you've already used (without knowing)

- **Vercel** — hosts your playwright-academy app. It's a server (well, many servers).
- **GitHub Pages** — static server that serves HTML files.
- **Every site you've visited** — served by some server somewhere.

### The "server room" reality

When people picture "the cloud", they imagine something abstract. In reality, the cloud is physical buildings full of servers. Lots of them, running 24/7.

The major cloud providers — AWS, Azure, Google Cloud — have data centres on every continent. When you deploy to Vercel, your app ends up on one or more of these servers, close to your users.

### Why this matters for testing

Three scenarios you'll hit:

**Scenario 1: Server is slow**

The page loads, but takes 8 seconds. Is your test failing because the server is slow? Check the Network tab — see the response time.

**Scenario 2: Server is down**

The page never loads. Connection refused, 500 error, or a time-out. Your test will fail — and it's not your test's fault.

**Scenario 3: Server returns wrong data**

The page loads fine but shows "Welcome, undefined" instead of "Welcome, Ravi". A backend bug, not a frontend bug. Playwright can catch this with assertions.

In all three cases, knowing there's a server on the other end — and knowing how to check the request/response in DevTools — is how you tell frontend bugs from backend bugs.

### Servers vs databases

A common follow-up question: where do servers store data?

In a **database**. Servers have code that reads and writes to databases like PostgreSQL, MySQL, MongoDB, or Redis.

When you log in, the server checks your credentials against the database. When you load your orders, the server fetches them from the database. The database is the server's filing cabinet.

Servers are stateless — they can restart without losing data. Databases hold the persistent data.

You don't need to know databases for Playwright work, but knowing they exist helps you understand architecture diagrams.

### The takeaway

Behind every URL is a server. Behind every login, search, and purchase is a request to a server. Playwright automates the browser, but the browser is talking to servers the whole time.

When a test fails, before blaming your locator, check the Network tab. The server might be the actual problem.`,
    handsOn: `Let's observe a real server responding.

### Step 1: Open DevTools Network

1. Go to playwright.dev
2. Press F12
3. Click the Network tab
4. Check Preserve log

### Step 2: Trigger a server request

Reload the page (F5). Watch the requests appear.

Click on the top request — the page itself. Look at:

- Status: 200 means the server responded successfully
- Response Headers: look for Server, Date, Content-Type
- Response body: the HTML the server sent

### Step 3: Compare response times

Look at the Time column in the Network panel. Each request shows how many milliseconds the server took.

Some requests are fast (cached, small). Some are slow (large, dynamic). This tells you which parts of the page depend on server performance.

### Step 4: Deliberately trigger a 404

In the browser address bar, change the URL to something that doesn't exist:

https://playwright.dev/this-page-does-not-exist

Press Enter. You'll see a 404 page.

Open DevTools Network. Look at the request — status 404. The server responded, but said "I don't have this."

That's a server-side decision. Your browser just displays what it gets.

### Deliverable

You watched real server requests and responses in DevTools. You saw a 200 (success) and a 404 (not found), and can identify the status code for any request.`,
    challenge: `Compare a static server and a dynamic server.

### Task 1: A static site

Visit a static site, like MDN's docs page or a simple blog. Open DevTools Network and reload.

Note:
- How many requests fire?
- What is the average response time?
- Are the responses identical every time?

### Task 2: A dynamic site

Visit a dynamic site — like Twitter, LinkedIn, or any dashboard.

Open Network, reload. Note:
- Total requests
- Any requests with status 200 that return JSON
- Response times

You'll see many more requests — most of them are API calls fetching data from the server's backend.

### Task 3: Compare

Write down:
- How many requests each site made
- Which one had more JSON responses
- Which one had more static assets (images, fonts)

### Reflection

Static sites are fast and cacheable. Dynamic sites are slower but personalised. Every modern app is a mix.

When a Playwright test fails on a dynamic site, look for the API call that returned the data the UI needs. Sometimes the UI isn't broken — the API returned wrong data, and the UI just displayed it.`,
    proTips: [
      "Learn the HTTP status codes by heart: 200 = OK, 301/302 = redirect, 401 = unauthorized, 403 = forbidden, 404 = not found, 500 = server error.",
      "DevTools Network tab shows response time per request. Use it to spot slow backends.",
      "A JSON response in the Network tab means the page is calling an API. This is common in modern SPAs.",
      "If a test fails on 'element not found' but the request was 200, the issue is the frontend. If the request failed, it's the backend.",
      "Never blame a locator when a request returned 500. Check the whole picture first.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking 'server' means a physical machine you own",
        fix: "Most servers today are rented from cloud providers. You deploy code, they run the machine.",
      },
      {
        mistake: "Assuming all servers are fast",
        fix: "Servers have limits. Under heavy load, they slow down. This is why tests sometimes fail in CI but pass locally.",
      },
      {
        mistake: "Confusing the browser's UI with the server's data",
        fix: "The browser renders what the server sends. If data is wrong, it's a backend bug. If rendering is wrong, it's a frontend bug.",
      },
      {
        mistake: "Ignoring 500 errors in test logs",
        fix: "500 means the server crashed on that request. Even if the page looks fine, log it — you may have found a real bug.",
      },
      {
        mistake: "Assuming a page's load time is determined only by your internet speed",
        fix: "The server's response time is often the biggest factor. A slow server makes every test slower.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Check a server's response from Python",
        code: `import requests

response = requests.get("https://playwright.dev")

print(response.status_code)  # 200 means success
print(response.headers.get("Content-Type"))
print(len(response.text))    # Length of the HTML body`,
      },
      {
        language: "python",
        title: "In Playwright — check the response status",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # Listen to the main document response
    response = page.goto("https://playwright.dev")
    print(response.status)  # 200

    browser.close()`,
      },
      {
        language: "text",
        title: "Common status codes",
        code: `200 OK              Success
301 Moved           Permanent redirect
302 Found           Temporary redirect
400 Bad Request     Client sent invalid data
401 Unauthorized    Login required
403 Forbidden       You can't access this
404 Not Found       Nothing here
500 Server Error    Backend crashed`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a web server?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server",
      },
      {
        title: "MDN — HTTP response status codes",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "web", "server", "http"],
  },

  "web-page-vs-web-app": {
    slug: "web-page-vs-web-app",
    title: "Web page vs web app",
    summary:
      "The difference between a document you read and an application you use.",
    whyItMatters:
      "Testing a blog and testing Gmail require different strategies. Knowing which you're dealing with tells you how to write your Playwright tests.",
    notes: `Not everything on the web is the same. Some things are **pages** — documents you read. Others are **apps** — programs you use.

Both live in a browser. Both use HTML, CSS, and JavaScript. But they behave very differently, and testing them requires different approaches.

### Web pages — documents

A web page is like a magazine article. You open it, you read it, you leave. The content doesn't change based on what you do.

Examples:

- A blog post
- A news article
- A company's About page
- A documentation site
- A contact page

Characteristics:

- Static or nearly static
- Same content for everyone
- Loads once and stays the same
- Links take you to other pages
- Search engines can index the content easily

Testing a web page means:

- Check the page loads
- Check specific text and images appear
- Check links go to the right places
- Very few interactions beyond clicking links

Simple to test.

### Web apps — programs

A web app is like a mobile app, but running in your browser. It responds to your inputs, keeps state, and often updates in real time.

Examples:

- Gmail
- Google Docs
- Notion
- Facebook
- Any dashboard with charts
- Any tool with forms and workflows

Characteristics:

- Highly interactive
- Different for every user (based on login)
- Content changes as you use it
- No page reloads for many actions
- Often talks to backend APIs constantly

Testing a web app means:

- Check initial state
- Perform actions (click, type, drag)
- Wait for the app to update (often via API calls)
- Check the new state
- Repeat across many user flows

Complex to test, and this is where Playwright's auto-waiting and assertions shine.

### The spectrum

In reality, most sites sit on a spectrum between page and app.

- **Very static** — documentation sites, personal blogs
- **Mostly static with some interactivity** — marketing sites with contact forms
- **Half and half** — news sites with comments
- **Mostly interactive** — SaaS dashboards
- **Fully interactive** — Gmail, Figma, Google Sheets

The line is blurry. A Wikipedia article is a page. Wikipedia's edit history filter is an app.

### How they differ technically

**Web pages:**

- Server sends full HTML
- Browser displays it
- JavaScript enhances some things (search, filters)
- Each link = new page request to the server

**Web apps:**

- Server sends a small HTML shell
- JavaScript loads and renders the actual UI
- Data is fetched from APIs
- Navigation happens in JavaScript without reloading
- Called SPAs (Single Page Applications)

The SPA model is why modern web testing is trickier. There's no "page load" event — you have to wait for specific elements or network calls.

### Why Playwright is built for apps

Playwright was designed for modern web apps. Its key features exist because SPAs broke older testing tools:

- **Auto-waiting** — waits for elements to appear, no fixed sleep
- **Web-first assertions** — retries until the condition is true or times out
- **Network interception** — can mock or modify API calls
- **Role-based locators** — stable across re-renders
- **Trace viewer** — shows exactly what happened when a test failed

Old tools assumed the page loaded once and stayed static. Playwright assumes constant change.

### What you test where

**For a web page:**

~~~python
page.goto("https://blog.example.com/post-1")
expect(page).to_have_title("My Post")
expect(page.get_by_role("heading", level=1)).to_have_text("My Post")
expect(page.locator("article")).to_contain_text("...")
~~~

**For a web app:**

~~~python
page.goto("https://app.example.com")
page.get_by_role("button", name="New project").click()
page.get_by_label("Project name").fill("Test")
page.get_by_role("button", name="Create").click()
expect(page.get_by_role("heading", name="Test")).to_be_visible()
# Then verify the API was called correctly, the list updated, etc.
~~~

The app test is longer, involves multiple interactions, and often needs to check dynamic state.

### The testing implications

**Pages are forgiving.** A page test that fails usually means the content is genuinely wrong. Low flakiness.

**Apps are demanding.** An app test can fail because:

- An element hasn't loaded yet
- An API call was slow
- A previous step left state in an unexpected way
- Two async operations raced
- A modal appeared unexpectedly

Playwright's tools help, but app testing requires more discipline. You'll write more setup, more waits, more assertions, more cleanup.

### The one-line summary

A **web page** is a document you read. A **web app** is a program you use. Playwright tests both, but expects different behaviour from each.

When you encounter a new site, ask: is this a page or an app? The answer shapes your test strategy.`,
    handsOn: `Let's test the same action on a page and an app.

### Step 1: A page — Wikipedia

Visit en.wikipedia.org and open any article.

Notice:
- The content loads fast
- Clicking links loads a full new page
- Refresh gives the same content

Open DevTools Network and reload. Count the requests — around 20-30 for a typical article.

### Step 2: An app — Gmail or Notion

Open Gmail (mail.google.com) or Notion (notion.so).

Notice:
- The initial load takes longer
- Clicking around doesn't reload the page — the URL changes but no full reload
- Data appears dynamically

Open DevTools Network and watch as you click around. You'll see a steady stream of API calls (usually to endpoints ending in .json or /api).

### Step 3: Compare

Write down:

- How many requests on initial load?
- How many requests as you interacted?
- How did the URL change without a full reload?

### Step 4: In Playwright terms

For Wikipedia, a Playwright test might be:

~~~python
page.goto("https://en.wikipedia.org/wiki/Playwright")
expect(page.get_by_role("heading", level=1)).to_contain_text("Playwright")
~~~

For Gmail, a Playwright test would need:

~~~python
# Login first (setup)
# Navigate to inbox
# Wait for the inbox to load
# Click compose
# Fill in recipient
# Fill in subject
# Click send
# Wait for the confirmation
# Verify the sent folder
~~~

Much more complex. Same tool, different scale.

### Deliverable

You visited a page and an app, observed the network difference, and identified why one is easier to test than the other.`,
    challenge: `Pick three sites you use. Classify each as a page, an app, or in between.

For each, answer:

1. Does clicking around reload the page?
2. Is content personalised for you?
3. Does the URL change without a reload?
4. Are there many API calls in the Network tab?

### Classifications to write

- **Page** — mostly static, content same for everyone
- **App** — highly interactive, content specific to you
- **Hybrid** — some of each

### Reflection

Every app you classified requires a different testing strategy:

- Pages: focus on content correctness, links, SEO
- Apps: focus on user flows, state changes, error handling
- Hybrids: both, depending on the area

Playwright handles all three, but you'll write very different tests for each.

Write down your classifications. This skill — recognising what kind of site you're testing — shapes your entire test plan.`,
    proTips: [
      "For web apps, always start with a stable login state. Don't log in through the UI in every test — save auth state and reuse it.",
      "Use page.wait_for_url or expect(page).to_have_url when apps navigate without full reloads.",
      "Apps change DOM constantly. Prefer role-based locators that don't depend on CSS classes.",
      "Look at the Network tab — if a click triggers an API call, wait for that call before asserting UI changes.",
      "For pages, plain expect assertions on text and titles are enough. No complex setup needed.",
    ],
    commonMistakes: [
      {
        mistake: "Testing an app like a page",
        fix: "Apps need waits for async state. Use Playwright's auto-waiting assertions, not fixed sleeps.",
      },
      {
        mistake: "Testing a page like an app",
        fix: "Pages don't need complex setup. If you're adding fixtures for a blog, you're over-engineering.",
      },
      {
        mistake: "Assuming every site is an SPA",
        fix: "Many modern sites are still server-rendered pages. Check the Network tab to know.",
      },
      {
        mistake: "Skipping the wait for the app to finish loading",
        fix: "After clicking, wait for the specific next state. Don't assume anything happens instantly.",
      },
      {
        mistake: "Not checking if a click triggers a network call",
        fix: "If it does, you may want to wait for that call before asserting. Playwright supports waiting for specific requests.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Testing a web page (simple)",
        code: `from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    page.goto("https://en.wikipedia.org/wiki/Playwright")
    expect(page.get_by_role("heading", level=1)).to_contain_text("Playwright")
    expect(page).to_have_title("Playwright - Wikipedia")

    browser.close()`,
      },
      {
        language: "python",
        title: "Testing a web app (multi-step)",
        code: `from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    page.goto("https://app.example.com")
    page.get_by_role("button", name="New project").click()
    page.get_by_label("Project name").fill("My Test Project")
    page.get_by_label("Description").fill("Test description")
    page.get_by_role("button", name="Create").click()

    # Wait for the new project to appear
    expect(page.get_by_role("heading", name="My Test Project")).to_be_visible()

    browser.close()`,
      },
      {
        language: "text",
        title: "Page vs app — quick check",
        code: `Page:
- Reload every link
- Same content for everyone
- Simple to test
- Examples: blogs, docs, marketing sites

App:
- No reload on navigation
- Personalised per user
- Requires interaction and waiting
- Examples: Gmail, Notion, dashboards`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — Progressive web apps",
        url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
      },
      {
        title: "Playwright — Best practices",
        url: "https://playwright.dev/python/docs/best-practices",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "web", "apps", "pages"],
  },

  "url-anatomy": {
    slug: "url-anatomy",
    title: "What is a URL? Breaking it down",
    summary:
      "Protocol, domain, path, query, fragment — the five parts of every URL.",
    whyItMatters:
      "Every Playwright test navigates to URLs. Every assertion might check a URL. If you can't read a URL, you're flying blind.",
    notes: `You type URLs every day. But have you ever looked at one closely?

Here's a typical URL:

https://shop.example.com/products/shoes?color=red&size=10#reviews

Read it out loud and it looks like gibberish. But every part has a purpose. Let's break it down.

### The five parts

**1. Protocol**

https

The protocol tells the browser **how** to talk to the server.

- http — unencrypted (old, insecure)
- https — encrypted with TLS (modern, secure)
- ftp — file transfer (rare for websites)
- file — a file on your own computer
- mailto — opens your email client

Every URL has a protocol. For websites, it's almost always https.

**2. Domain**

shop.example.com

The domain is the **address of the server**. It's what DNS resolves to an IP address.

The domain has parts too:

- .com is the top-level domain (TLD)
- example is the registered domain name
- shop is a subdomain

Common TLDs: .com, .org, .net, .in, .io, .dev

Subdomains often indicate different sections:

- www.example.com — main site
- api.example.com — API
- docs.example.com — documentation
- shop.example.com — store

**3. Path**

/products/shoes

The path points to a specific resource on the server. It's like a folder structure.

- / — homepage
- /products — all products
- /products/shoes — only shoes
- /products/shoes/running — running shoes specifically

Paths are case-sensitive. /About and /about might be different pages.

**4. Query parameters**

?color=red&size=10

After the ? come query parameters. These are extra instructions for the server, usually for filtering or sorting.

The format is key=value, joined by &:

- ?color=red — filter by red
- ?color=red&size=10 — filter by red AND size 10
- ?sort=price_asc — sort by price, ascending
- ?page=2 — go to page 2

The ? starts the query string. The & separates each parameter.

**5. Fragment**

#reviews

After the # is the fragment (also called hash or anchor). It points to a specific section of the page.

The browser scrolls to the element with that id after the page loads. The fragment is **not** sent to the server — it's handled entirely by the browser.

Example: a long article with a #reviews section at the bottom. Clicking a link with #reviews jumps directly there.

### Putting it together

https://shop.example.com/products/shoes?color=red&size=10#reviews

Reads as:

- Use HTTPS to talk to shop.example.com
- Request the resource at /products/shoes
- Filter by color=red and size=10
- After loading, scroll to the element with id "reviews"

### URLs in Playwright

Playwright uses URLs in several ways:

**Navigate to a URL:**

~~~python
page.goto("https://shop.example.com/products/shoes?color=red")
~~~

**Assert the current URL:**

~~~python
expect(page).to_have_url("https://shop.example.com/products/shoes")
~~~

**Wait for a URL change:**

~~~python
page.wait_for_url("**/checkout")
~~~

**Extract parts of a URL:**

~~~python
url = page.url
# url is a string like "https://shop.example.com/products"

# Parse it in Python:
from urllib.parse import urlparse
parts = urlparse(url)
print(parts.scheme)    # https
print(parts.netloc)    # shop.example.com
print(parts.path)      # /products
print(parts.query)     # color=red
print(parts.fragment)  # reviews
~~~

### Query parameters in tests

Query parameters are often what you assert on. Examples:

- After applying a filter, check the URL includes ?filter=active
- After searching, check the URL has ?q=playwright
- After pagination, check the URL has ?page=2

Playwright:

~~~python
expect(page).to_have_url(lambda url: "?q=playwright" in url)
~~~

Or with a regex:

~~~python
import re
expect(page).to_have_url(re.compile(r"\?q=playwright"))
~~~

This is a common pattern in tests for search and filter features.

### The one thing to remember

A URL is a compact instruction to the browser:

- **Protocol** — how to talk
- **Domain** — who to talk to
- **Path** — what to ask for
- **Query** — how to filter or modify the request
- **Fragment** — where on the page to scroll

Once you see URLs this way, they stop looking like gibberish. Every time you see one, you'll read it instantly.

### Advanced: URL encoding

Spaces and special characters in URLs get encoded. A space becomes %20, an ampersand becomes %26, and so on.

If you search Google for "hello world", the URL becomes:

https://www.google.com/search?q=hello%20world

The %20 is a space. This encoding is called percent-encoding or URL encoding. Python's urllib.parse has helpers for this:

~~~python
from urllib.parse import quote, unquote
quote("hello world")       # hello%20world
unquote("hello%20world")   # hello world
~~~

You'll encounter this when building URLs in tests with dynamic values.`,
    handsOn: `Let's dissect real URLs.

### Step 1: Take three URLs you know

Choose:

- A YouTube video URL
- A Google search URL
- A URL from any site you use

Write each one down on paper.

### Step 2: Break each URL into its 5 parts

For each URL, identify:

1. Protocol (http or https)
2. Domain
3. Path
4. Query parameters (if any)
5. Fragment (if any)

Example:

https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLxyz

- Protocol: https
- Domain: www.youtube.com
- Path: /watch
- Query: v=dQw4w9WgXcQ, list=PLxyz
- Fragment: (none)

### Step 3: Test the fragment

Open any long Wikipedia article. Add #See_also to the end:

https://en.wikipedia.org/wiki/Playwright#See_also

Press Enter. The browser should jump to the See also section.

Notice the fragment part is not sent to the server. Remove the fragment and reload — same page, but no jump.

### Step 4: Modify the query string

Search for something on Google. Look at the URL — it has ?q=yoursearch.

Change yoursearch to something else. Press Enter. New search results appear.

That's how the query string controls what the server sends.

### Deliverable

You dissected three URLs into their parts, tested the fragment anchor, and modified a query string to change the result. You can now read any URL.`,
    challenge: `Build a URL from scratch.

### Task 1: Manual construction

Imagine you want to find used cars on an imaginary classifieds site (classifieds.example.com) with these criteria:

- Category: cars
- Make: Toyota
- Min price: 500000 (in rupees)
- Max price: 1000000
- Sort: price ascending
- Only show listings with photos

Construct the URL by hand. Assume the site uses these query parameter names:

- category
- make
- min_price
- max_price
- sort
- has_photos

Answer:

https://classifieds.example.com/search?category=cars&make=Toyota&min_price=500000&max_price=1000000&sort=price_asc&has_photos=true

### Task 2: URL encoding

Now imagine the make was "Maruti Suzuki" — two words.

Write the URL with proper encoding.

Answer:

make=Maruti%20Suzuki

The space becomes %20.

### Task 3: Playwright test

Write a Playwright assertion that navigates to this URL and checks the final URL contains "make=Toyota".

~~~python
page.goto("https://classifieds.example.com/search?category=cars&make=Toyota")
expect(page).to_have_url(lambda url: "make=Toyota" in url)
~~~

### Reflection

Every URL tells a story. Once you can construct URLs with query parameters, you can:

- Pre-set filters before loading a page (faster tests)
- Assert that user actions produce the correct URLs
- Build shareable links for tests

This is a real skill used every day in Playwright work.`,
    proTips: [
      "Always use HTTPS. HTTP is insecure and often blocked or downgraded by modern browsers.",
      "The fragment (#) is not sent to the server. It's a browser-only instruction.",
      "Query parameter order usually doesn't matter, but some servers expect a specific order.",
      "Use page.wait_for_url() when you expect navigation after an action.",
      "When asserting URLs with dynamic parts, use regex or lambda functions, not exact strings.",
    ],
    commonMistakes: [
      {
        mistake: "Confusing the query string with the path",
        fix: "The path comes before the ?, the query comes after. Path identifies the resource; query modifies the request.",
      },
      {
        mistake: "Forgetting to URL-encode special characters",
        fix: "Spaces, &, =, and other special characters need encoding. Python's urllib.parse.quote handles this.",
      },
      {
        mistake: "Assuming fragments are sent to the server",
        fix: "Fragments are browser-only. The server never sees them. This matters when constructing test URLs.",
      },
      {
        mistake: "Using exact URL strings in assertions when parts are dynamic",
        fix: "Use regex or lambda to match patterns. Exact matches break when a query param changes.",
      },
      {
        mistake: "Hard-coding URLs across many tests",
        fix: "Store base URLs in a config or fixture. Change once, applies everywhere.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The five parts of a URL",
        code: `https://shop.example.com/products/shoes?color=red&size=10#reviews
│      │                │                │              │
│      │                │                │              └── Fragment
│      │                │                └── Query params
│      │                └── Path
│      └── Domain
└── Protocol`,
      },
      {
        language: "python",
        title: "Parse a URL in Python",
        code: `from urllib.parse import urlparse

url = "https://shop.example.com/products/shoes?color=red&size=10#reviews"
parsed = urlparse(url)

print(parsed.scheme)    # https
print(parsed.netloc)    # shop.example.com
print(parsed.path)      # /products/shoes
print(parsed.query)     # color=red&size=10
print(parsed.fragment)  # reviews`,
      },
      {
        language: "python",
        title: "URL assertions in Playwright",
        code: `from playwright.sync_api import expect
import re

# Exact match
expect(page).to_have_url("https://shop.example.com/products")

# Regex match
expect(page).to_have_url(re.compile(r"/products/\\w+"))

# Lambda match (check for a specific query param)
expect(page).to_have_url(lambda url: "color=red" in url)

# Wait for a URL to change
page.wait_for_url("**/checkout")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a URL?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
      },
      {
        title: "MDN — URL anatomy",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#basics_of_urls",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "web", "urls", "http"],
  },
};