import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-slowmo",
  "title": "Slowing Browser Actions with slow_mo",
  "summary": "Add a small delay between Playwright actions to make headed debugging easier to watch.",
  "whyItMatters": "A slow-motion delay can make a sequence easier to observe when debugging, without changing how assertions work.",
  "notes": "The slow_mo launch option adds a delay, in milliseconds, between Playwright operations.\n\n### Add a small delay\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(slow_mo=200)\n    page = browser.new_page()\n    page.set_content(\"<button>Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click()\n    assert page.get_by_role(\"button\", name=\"Continue\").is_visible()\n    browser.close()\n~~~\n\nslow_mo can make actions easier to watch in headed mode. The delay also applies to the script's operations, so it makes runs slower.\n\n### Keep it for debugging\n\nAvoid adding slow_mo to every automated run. Use it when observing a flow helps you understand what is happening.\n\n### The takeaway\n\nSet slow_mo in milliseconds when you need to watch actions more slowly. Remove it from routine test runs to keep feedback quick.",
  "handsOn": "Observe a short interaction with a delay.\n\n### Create slowmo_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=True, slow_mo=150)\n    page = browser.new_page()\n    page.set_content(\"<button>Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click()\n    assert page.locator(\"button\").is_visible()\n    browser.close()\n~~~\n\nRun it with python slowmo_check.py. The delay is useful when actions are visible, but this headless script still checks the result.\n\n### Deliverable\n\nExplain what the slow_mo number measures and why a large value slows the run.",
  "challenge": "Write a script that clicks a button and checks a changed heading.\n\n1. Launch Chromium with a small slow_mo value\n2. Load a button and heading from local HTML\n3. Make the button update the heading\n4. Click the button and assert the new heading\n5. Explain why slow_mo is mainly a debugging aid\n\nUse a finite delay so the script remains quick.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a large slow_mo value in every test run",
      "fix": "Use slow motion temporarily while debugging, then remove it."
    },
    {
      "mistake": "Treating slow_mo as a wait for a particular page condition",
      "fix": "Use Playwright's locator actions and assertions for condition-based waiting."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Launch with a slow-motion delay",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(slow_mo=100)\n    page = browser.new_page()\n    page.set_content(\"<button>Go</button>\")\n    page.get_by_role(\"button\", name=\"Go\").click()\n    assert page.locator(\"button\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Combine headless and slow motion",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=True, slow_mo=50)\n    page = browser.new_page()\n    page.set_content(\"<p>Checked</p>\")\n    assert page.locator(\"p\").inner_text() == \"Checked\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — API Reference",
      "url": "https://playwright.dev/python/docs/api/class-playwright"
    },
    {
      "title": "Playwright for Python — Getting Started",
      "url": "https://playwright.dev/python/docs/intro"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
