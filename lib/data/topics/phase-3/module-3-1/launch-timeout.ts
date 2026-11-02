import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-timeout",
  "title": "Browser Launch Timeouts",
  "summary": "Set a finite timeout for launching a browser process.",
  "whyItMatters": "A launch timeout makes setup failures easier to diagnose and prevents a slow browser start from waiting indefinitely.",
  "notes": "The launch timeout controls how long Playwright waits for a browser process to start. The value is in milliseconds.\n\n### Set a launch timeout\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(timeout=10_000)\n    page = browser.new_page()\n    page.set_content(\"<p>Browser started</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nThe default is usually suitable. Set a different value when your environment has a known startup constraint.\n\n### Do not confuse launch and action timeouts\n\nThe launch timeout applies to starting the browser. Page and locator operations have their own timeout settings.\n\n### The takeaway\n\nUse a finite launch timeout when you need to control browser startup. Keep it separate from navigation and locator timeouts.",
  "handsOn": "Set a launch timeout and check local content.\n\n### Create launch_timeout.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(timeout=15_000)\n    page = browser.new_page()\n    page.set_content(\"<h1>Started</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Started\").is_visible()\n    browser.close()\n~~~\n\nRun the script and note that the timeout value is in milliseconds.\n\n### Deliverable\n\nExplain why the launch timeout and a page navigation timeout control different operations.",
  "challenge": "Write a script that launches Chromium with an explicit timeout and checks local HTML.\n\n1. Set a finite timeout in milliseconds\n2. Create a page and load HTML\n3. Assert a heading is visible\n4. Close the browser\n5. Explain what failure the launch timeout limits\n\nDo not use the launch timeout as a substitute for navigation or locator timeouts.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Confusing launch timeout with a locator timeout",
      "fix": "Set the timeout on the operation whose waiting behaviour you need to control."
    },
    {
      "mistake": "Setting an extremely short launch timeout for every machine",
      "fix": "Choose a value that fits the expected environment."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Set the launch timeout",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(timeout=10_000)\n    page = browser.new_page()\n    page.set_content(\"<p>Ready</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use the default launch timeout",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Started</title>\")\n    assert page.title() == \"Started\"\n    browser.close()"
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
