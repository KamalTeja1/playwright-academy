import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "fresh-context-per-test",
  "title": "A Fresh Context for Each Test",
  "summary": "Create a new browser context for each test to avoid leaking browser state.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "A fresh context gives each test its own cookies, storage, and pages. This helps prevent one test from affecting another.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\ndef check_page(browser, heading):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(f\"<h1>{heading}</h1>\")\n        assert page.get_by_role(\"heading\", name=heading).is_visible()\n    finally:\n        context.close()\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    check_page(browser, \"First test\")\n    check_page(browser, \"Second test\")\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\ndef test_first_page(browser):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(\"<title>First</title>\")\n        assert page.title() == \"First\"\n    finally:\n        context.close()\n\ndef test_second_page(browser):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(\"<title>Second</title>\")\n        assert page.title() == \"Second\"\n    finally:\n        context.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\ndef check_page(browser, heading):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(f\"<h1>{heading}</h1>\")\n        assert page.get_by_role(\"heading\", name=heading).is_visible()\n    finally:\n        context.close()\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    check_page(browser, \"First test\")\n    check_page(browser, \"Second test\")\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Write a helper that creates a context, opens a page, checks a title, and closes the context in finally. Call it twice with different titles. Explain how the fresh context reduces state leakage.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Reusing mutable browser state between unrelated tests",
      "fix": "Create and close a fresh context for each test that needs isolation."
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
      "title": "A Fresh Context for Each Test",
      "code": "from playwright.sync_api import sync_playwright\n\ndef check_page(browser, heading):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(f\"<h1>{heading}</h1>\")\n        assert page.get_by_role(\"heading\", name=heading).is_visible()\n    finally:\n        context.close()\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    check_page(browser, \"First test\")\n    check_page(browser, \"Second test\")\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\ndef test_first_page(browser):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(\"<title>First</title>\")\n        assert page.title() == \"First\"\n    finally:\n        context.close()\n\ndef test_second_page(browser):\n    context = browser.new_context()\n    try:\n        page = context.new_page()\n        page.set_content(\"<title>Second</title>\")\n        assert page.title() == \"Second\"\n    finally:\n        context.close()"
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
