import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-filter-text",
  "title": "Filtering Locators by Text",
  "summary": "Use locator.filter(has_text=...) to narrow a set by contained text.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "filter(has_text=...) returns a locator narrowed to elements containing the specified text. It can accept a string or a regular expression.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python</h2></article><article><h2>Playwright</h2></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"Playwright\")\n    assert card.count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nimport re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Order 42</li><li>Order 99</li>\")\n    selected = page.get_by_role(\"listitem\").filter(has_text=re.compile(r\"Order 4\"))\n    assert selected.inner_text() == \"Order 42\"\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python</h2></article><article><h2>Playwright</h2></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"Playwright\")\n    assert card.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create several list items with labels and statuses. Use filter(has_text=...) to find the item with a selected status and assert its text.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Filtering a broad parent locator using text shared by several items",
      "fix": "Start from a locator for the repeated item, then filter it by distinguishing text."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Filtering Locators by Text",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>Python</h2></article><article><h2>Playwright</h2></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"Playwright\")\n    assert card.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "import re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Order 42</li><li>Order 99</li>\")\n    selected = page.get_by_role(\"listitem\").filter(has_text=re.compile(r\"Order 4\"))\n    assert selected.inner_text() == \"Order 42\"\n    browser.close()"
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
