import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "css-has-pseudo",
  "title": "Finding Parents with :has",
  "summary": "Use the :has selector to find an element containing a matching descendant.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": ":has is a CSS relational pseudo-class supported by Playwright locators. It lets you select a parent based on a descendant.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    news = page.locator(\"article:has(h2:text('News'))\")\n    assert news.count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<section><button>Submit</button></section>')\n    section = page.locator(\"section:has(button)\")\n    assert section.is_visible()\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    news = page.locator(\"article:has(h2:text('News'))\")\n    assert news.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create two sections with different headings. Locate the section containing a chosen heading with :has, then assert the section count is one.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a descendant condition that matches more parent elements than intended",
      "fix": "Scope the parent selector and descendant condition to the smallest relevant structure."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Parents with :has",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    news = page.locator(\"article:has(h2:text('News'))\")\n    assert news.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<section><button>Submit</button></section>')\n    section = page.locator(\"section:has(button)\")\n    assert section.is_visible()\n    browser.close()"
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
