import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-goto-wait-until",
  "title": "Choosing a Navigation Wait Condition",
  "summary": "Choose a page.goto wait_until condition that matches the navigation being tested.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "The wait_until option controls which navigation milestone page.goto waits for. Common values include commit, domcontentloaded, load, and networkidle.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Loaded</title><h1>Ready</h1>\",\n        wait_until=\"domcontentloaded\",\n    )\n    assert page.title() == \"Loaded\"\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Complete</title>\",\n        wait_until=\"load\",\n    )\n    assert page.title() == \"Complete\"\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Loaded</title><h1>Ready</h1>\",\n        wait_until=\"domcontentloaded\",\n    )\n    assert page.title() == \"Loaded\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Navigate to local HTML with wait_until set to domcontentloaded. Assert the page title and explain why networkidle may be a poor default for pages with ongoing network activity.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Waiting for networkidle on every page",
      "fix": "Choose the navigation milestone your scenario needs and prefer locator assertions for specific UI readiness."
    },
    {
      "mistake": "Relying on a fixed sleep instead of a browser condition",
      "fix": "Use navigation wait conditions or locator assertions for the behaviour under test."
    },
    {
      "mistake": "Leaving browser resources open after the example",
      "fix": "Close the context and browser when the check is complete."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Choosing a Navigation Wait Condition",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Loaded</title><h1>Ready</h1>\",\n        wait_until=\"domcontentloaded\",\n    )\n    assert page.title() == \"Loaded\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Complete</title>\",\n        wait_until=\"load\",\n    )\n    assert page.title() == \"Complete\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Page API",
      "url": "https://playwright.dev/python/docs/api/class-page"
    },
    {
      "title": "Playwright for Python — BrowserContext API",
      "url": "https://playwright.dev/python/docs/api/class-browsercontext"
    }
  ],
  "difficulty": "Intermediate",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "pages",
    "browser-context"
  ]
};

export default topic;
