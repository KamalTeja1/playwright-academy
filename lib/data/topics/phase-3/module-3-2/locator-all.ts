import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-all",
  "title": "Working with locator.all",
  "summary": "Get a list of locators for the elements currently matched by a locator.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "locator.all returns locators for the elements currently matched. It does not wait for elements to appear, so use it when the list is already ready.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Alpha</li><li>Beta</li>\")\n    items = page.get_by_role(\"listitem\").all()\n    assert [item.inner_text() for item in items] == [\"Alpha\", \"Beta\"]\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>One</button><button>Two</button>\")\n    buttons = page.get_by_role(\"button\").all()\n    assert len(buttons) == 2\n    assert buttons[0].inner_text() == \"One\"\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Alpha</li><li>Beta</li>\")\n    items = page.get_by_role(\"listitem\").all()\n    assert [item.inner_text() for item in items] == [\"Alpha\", \"Beta\"]\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create three list items, call all(), and assert their text in order. Explain why locator.all should not be used as a wait for a dynamically populated list.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using locator.all before dynamic elements have appeared",
      "fix": "Wait for a specific condition or count before collecting the current matches."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Working with locator.all",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<li>Alpha</li><li>Beta</li>\")\n    items = page.get_by_role(\"listitem\").all()\n    assert [item.inner_text() for item in items] == [\"Alpha\", \"Beta\"]\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>One</button><button>Two</button>\")\n    buttons = page.get_by_role(\"button\").all()\n    assert len(buttons) == 2\n    assert buttons[0].inner_text() == \"One\"\n    browser.close()"
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
