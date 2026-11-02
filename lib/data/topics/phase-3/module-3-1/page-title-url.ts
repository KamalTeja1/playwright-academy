import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-title-url",
  "title": "Reading the Page Title and URL",
  "summary": "Inspect the current page title and URL with Playwright.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "page.title() returns the document title. page.url returns the current page URL.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice title</title>\")\n    assert page.title() == \"Practice title\"\n    assert page.url.startswith(\"data:\")\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Local check</title>\")\n    assert page.title() == \"Local check\"\n    assert page.url == \"about:blank\"\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice title</title>\")\n    assert page.title() == \"Practice title\"\n    assert page.url.startswith(\"data:\")\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Navigate to a data URL with a known title. Assert the title and check that the current URL uses the data scheme. Explain the difference between page.title() and page.url.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Calling page.url as though it were a method",
      "fix": "Read page.url as a property; call page.title() as a method."
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
      "title": "Reading the Page Title and URL",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice title</title>\")\n    assert page.title() == \"Practice title\"\n    assert page.url.startswith(\"data:\")\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Local check</title>\")\n    assert page.title() == \"Local check\"\n    assert page.url == \"about:blank\"\n    browser.close()"
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
  "difficulty": "Beginner",
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "pages",
    "browser-context"
  ]
};

export default topic;
