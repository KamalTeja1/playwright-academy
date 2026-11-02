import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-goto",
  "title": "Navigating with page.goto",
  "summary": "Navigate a page to a URL with Playwright's goto method.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "page.goto navigates the page to a URL. It returns after the requested navigation reaches its configured wait condition.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice</title><h1>Welcome</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    response = page.goto(\"data:text/html,<title>Local page</title>\")\n    assert page.title() == \"Local page\"\n    assert response is None or response.ok\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice</title><h1>Welcome</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Create a script that navigates to a data URL containing a heading and paragraph. Assert both elements are visible, then close the browser. Explain why page.goto is used instead of page.set_content in this example.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a relative URL without configuring a base URL",
      "fix": "Navigate to a complete URL or configure a base URL for the test."
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
      "title": "Navigating with page.goto",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto(\"data:text/html,<title>Practice</title><h1>Welcome</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    response = page.goto(\"data:text/html,<title>Local page</title>\")\n    assert page.title() == \"Local page\"\n    assert response is None or response.ok\n    browser.close()"
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
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "pages",
    "browser-context"
  ]
};

export default topic;
