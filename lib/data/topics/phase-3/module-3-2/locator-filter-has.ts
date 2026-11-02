import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-filter-has",
  "title": "Filtering by a Descendant Locator",
  "summary": "Use filter(has=...) to keep parent elements containing a matching child.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "filter(has=...) accepts a locator and narrows the outer locator to elements containing a match. The inner locator must belong to the same page.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    heading = page.get_by_role(\"heading\", name=\"News\")\n    card = page.get_by_role(\"article\").filter(has=heading)\n    assert card.count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li><button>Open</button></li><li><span>Closed</span></li>')\n    open_item = page.get_by_role(\"listitem\").filter(\n        has=page.get_by_role(\"button\", name=\"Open\")\n    )\n    assert open_item.count() == 1\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    heading = page.get_by_role(\"heading\", name=\"News\")\n    card = page.get_by_role(\"article\").filter(has=heading)\n    assert card.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create two cards, one containing a button and one containing only text. Use filter(has=...) to find the card with the button and assert the result is unique.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing a child locator from another page to filter(has=...)",
      "fix": "Build the inner locator from the same page as the outer locator."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Filtering by a Descendant Locator",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2></article><article><h2>Help</h2></article>\")\n    heading = page.get_by_role(\"heading\", name=\"News\")\n    card = page.get_by_role(\"article\").filter(has=heading)\n    assert card.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li><button>Open</button></li><li><span>Closed</span></li>')\n    open_item = page.get_by_role(\"listitem\").filter(\n        has=page.get_by_role(\"button\", name=\"Open\")\n    )\n    assert open_item.count() == 1\n    browser.close()"
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
  "estimatedMinutes": 30,
  "tags": [
    "python",
    "playwright",
    "locators",
    "browser-testing"
  ]
};

export default topic;
