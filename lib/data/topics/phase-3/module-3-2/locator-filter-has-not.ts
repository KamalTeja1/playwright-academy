import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-filter-has-not",
  "title": "Filtering by an Absent Descendant",
  "summary": "Use filter(has_not=...) to keep parents without a matching child locator.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "filter(has_not=...) excludes outer elements that contain a match for the inner locator. Both locators must belong to the same page.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><button>Ready</button></article><article><p>Pending</p></article>\")\n    ready_button = page.get_by_role(\"button\", name=\"Ready\")\n    pending = page.get_by_role(\"article\").filter(has_not=ready_button)\n    assert pending.count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li><span class=\"badge\">New</span>Alpha</li><li>Beta</li>')\n    badge = page.locator(\".badge\")\n    unbadged = page.get_by_role(\"listitem\").filter(has_not=badge)\n    assert unbadged.inner_text() == \"Beta\"\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><button>Ready</button></article><article><p>Pending</p></article>\")\n    ready_button = page.get_by_role(\"button\", name=\"Ready\")\n    pending = page.get_by_role(\"article\").filter(has_not=ready_button)\n    assert pending.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create two cards, one with a status badge and one without. Use filter(has_not=...) to locate the card without a badge and assert its text.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using has_not when the inner locator is on another page",
      "fix": "Create both outer and inner locators from the same page."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Filtering by an Absent Descendant",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<article><button>Ready</button></article><article><p>Pending</p></article>\")\n    ready_button = page.get_by_role(\"button\", name=\"Ready\")\n    pending = page.get_by_role(\"article\").filter(has_not=ready_button)\n    assert pending.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li><span class=\"badge\">New</span>Alpha</li><li>Beta</li>')\n    badge = page.locator(\".badge\")\n    unbadged = page.get_by_role(\"listitem\").filter(has_not=badge)\n    assert unbadged.inner_text() == \"Beta\"\n    browser.close()"
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
