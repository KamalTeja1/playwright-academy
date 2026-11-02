import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-content",
  "title": "Inspecting Page Content",
  "summary": "Read the current document HTML with page.content.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "page.content() returns the full HTML of the current page, including the doctype when present.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<main><h1>Practice</h1></main>\")\n    html = page.content()\n    assert \"<h1>Practice</h1>\" in html\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>First</p><p>Second</p>\")\n    html = page.content()\n    assert html.count(\"<p>\") == 2\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<main><h1>Practice</h1></main>\")\n    html = page.content()\n    assert \"<h1>Practice</h1>\" in html\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Load local HTML with a main element and two paragraphs. Use page.content() to check that the document contains the expected main element, and use a locator assertion for one paragraph. Explain why locators are usually better for user-facing checks.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Using page.content as the main way to assert user-visible behaviour",
      "fix": "Prefer locators and their assertions for UI behaviour; use page.content when you specifically need document HTML."
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
      "title": "Inspecting Page Content",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<main><h1>Practice</h1></main>\")\n    html = page.content()\n    assert \"<h1>Practice</h1>\" in html\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>First</p><p>Second</p>\")\n    html = page.content()\n    assert html.count(\"<p>\") == 2\n    browser.close()"
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
