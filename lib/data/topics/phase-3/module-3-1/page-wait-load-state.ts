import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-wait-load-state",
  "title": "Waiting for a Page Load State",
  "summary": "Wait for a specific document load state before continuing.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "page.wait_for_load_state waits for a navigation milestone such as domcontentloaded or load. It is most useful when a navigation has already started.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Ready</title>\",\n        wait_until=\"domcontentloaded\",\n    )\n    page.wait_for_load_state(\"load\")\n    assert page.title() == \"Ready\"\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<h1>Loaded</h1>\")\n    page.wait_for_load_state(\"load\")\n    assert page.get_by_role(\"heading\", name=\"Loaded\").is_visible()\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Ready</title>\",\n        wait_until=\"domcontentloaded\",\n    )\n    page.wait_for_load_state(\"load\")\n    assert page.title() == \"Ready\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Navigate to local HTML, wait for the load state, then assert the page title and a heading. Explain why waiting for a specific locator is often a stronger check of application readiness.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a load-state wait as a substitute for checking the page behaviour",
      "fix": "Wait for the relevant UI condition with a locator assertion when that is what the test needs."
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
      "title": "Waiting for a Page Load State",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\n        \"data:text/html,<title>Ready</title>\",\n        wait_until=\"domcontentloaded\",\n    )\n    page.wait_for_load_state(\"load\")\n    assert page.title() == \"Ready\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<h1>Loaded</h1>\")\n    page.wait_for_load_state(\"load\")\n    assert page.get_by_role(\"heading\", name=\"Loaded\").is_visible()\n    browser.close()"
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
