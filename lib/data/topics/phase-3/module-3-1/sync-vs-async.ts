import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "sync-vs-async",
  "title": "Synchronous and Asynchronous Playwright",
  "summary": "Use the synchronous Python API for straightforward scripts and tests.",
  "whyItMatters": "Starting with the synchronous API keeps browser automation easy to read before learning async programming.",
  "notes": "Playwright for Python offers synchronous and asynchronous APIs. This course starts with the synchronous API.\n\n### Synchronous style\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Sync example</h1>\")\n    assert page.title() == \"\"\n    browser.close()\n~~~\n\nThe calls run in order. You do not need async or await in this style.\n\n### Asynchronous style\n\nThe asynchronous API uses async functions and await. It is useful when your application already uses asyncio or needs concurrent asynchronous work.\n\nDo not mix the sync API with async code in the same example. Pick the API that fits the program.\n\n### Keep the lifecycle consistent\n\nUse sync_playwright with objects imported from playwright.sync_api. The async API uses async_playwright and a different control flow.\n\n### The takeaway\n\nUse the sync API for the examples in this module. It runs operations in a clear, sequential order.",
  "handsOn": "Write a synchronous script that checks local content.\n\n### Step 1: Create sync_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Ready</p>\")\n    assert page.locator(\"p\").inner_text() == \"Ready\"\n    browser.close()\n~~~\n\n### Step 2: Run the script\n\n~~~bash\npython sync_check.py\n~~~\n\n### Deliverable\n\nPoint out the lines that launch Playwright, create a page, and perform the assertion.",
  "challenge": "Create a synchronous browser script that reads a title and checks a heading.\n\n1. Import from playwright.sync_api\n2. Use sync_playwright as a context manager\n3. Load local HTML\n4. Assert the page title and heading text\n5. Do not use async or await\n\nThen describe one situation where the asynchronous API may fit an application better.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Mixing sync API objects with async control flow",
      "fix": "Use one Playwright API style consistently in a script."
    },
    {
      "mistake": "Importing sync_playwright from the wrong package module",
      "fix": "Import it from playwright.sync_api."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Synchronous browser use",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Sync</h1>\")\n    assert page.locator(\"h1\").inner_text() == \"Sync\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use the synchronous API import",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Practice</title>\")\n    assert page.title() == \"Practice\"\n    browser.close()"
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
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
