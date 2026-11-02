import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "css-has-text",
  "title": "Matching Text with :has-text",
  "summary": "Use Playwright's :has-text selector to find elements containing text.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": ":has-text is a Playwright CSS extension. It matches an element that contains the supplied text, including text in descendants.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python basics</h2></article>\")\n    card = page.locator(\"article:has-text('Python basics')\")\n    assert card.is_visible()\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Chromium</li><li>Firefox</li>\")\n    firefox = page.locator(\"li:has-text('Firefox')\")\n    assert firefox.count() == 1\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python basics</h2></article>\")\n    card = page.locator(\"article:has-text('Python basics')\")\n    assert card.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create two article elements with different headings. Use :has-text to locate the article containing one heading and assert that it is visible.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a broad :has-text selector that matches several ancestors",
      "fix": "Scope the selector to the smallest meaningful element, or use a role locator with a name."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Matching Text with :has-text",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python basics</h2></article>\")\n    card = page.locator(\"article:has-text('Python basics')\")\n    assert card.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Chromium</li><li>Firefox</li>\")\n    firefox = page.locator(\"li:has-text('Firefox')\")\n    assert firefox.count() == 1\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Locators",
      "url": "https://playwright.dev/python/docs/locators"
    },
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
    }
  ],
  "difficulty": "Intermediate",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "locators",
    "browser-testing"
  ]
};

export default topic;
