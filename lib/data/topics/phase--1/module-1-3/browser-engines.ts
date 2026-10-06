import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
