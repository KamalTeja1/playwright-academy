import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-chaining",
  "title": "Chaining Locators",
  "summary": "Narrow a locator by locating a child within a matched parent.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "Locator chaining scopes a child locator to the element matched by its parent locator. This is useful when repeated controls belong to distinct sections.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2><button>Read</button></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"News\")\n    read = card.get_by_role(\"button\", name=\"Read\")\n    assert read.is_visible()\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<section aria-label=\"Profile\"><label for=\"name\">Name</label><input id=\"name\"></section>')\n    profile = page.get_by_role(\"region\", name=\"Profile\")\n    name = profile.get_by_label(\"Name\")\n    assert name.is_visible()\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2><button>Read</button></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"News\")\n    read = card.get_by_role(\"button\", name=\"Read\")\n    assert read.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create two article cards, each with a heading and a button with the same name. Locate the card by its heading text, chain to its button, and assert only the intended card's button is selected.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Chaining from a locator that still matches several parent elements",
      "fix": "Make the parent locator unique before locating its child."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Chaining Locators",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><h2>News</h2><button>Read</button></article>\")\n    card = page.get_by_role(\"article\").filter(has_text=\"News\")\n    read = card.get_by_role(\"button\", name=\"Read\")\n    assert read.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<section aria-label=\"Profile\"><label for=\"name\">Name</label><input id=\"name\"></section>')\n    profile = page.get_by_role(\"region\", name=\"Profile\")\n    name = profile.get_by_label(\"Name\")\n    assert name.is_visible()\n    browser.close()"
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
