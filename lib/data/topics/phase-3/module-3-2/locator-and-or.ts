import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-and-or",
  "title": "Combining Locators with and_ and or_",
  "summary": "Combine locator conditions with and_ or create a locator matching either condition with or_.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "and_ intersects two locators, so an element must match both. or_ creates a locator matching either locator. Use them to express meaningful conditions.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button class=\"primary\">Save</button><button>Cancel</button>')\n    save = page.get_by_role(\"button\", name=\"Save\")\n    primary = page.locator(\"button.primary\")\n    assert save.and_(primary).count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><a href='#help'>Help</a>\")\n    save = page.get_by_role(\"button\", name=\"Save\")\n    help_link = page.get_by_role(\"link\", name=\"Help\")\n    either = save.or_(help_link)\n    assert either.count() == 2\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button class=\"primary\">Save</button><button>Cancel</button>')\n    save = page.get_by_role(\"button\", name=\"Save\")\n    primary = page.locator(\"button.primary\")\n    assert save.and_(primary).count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create a page with a primary button and a link. Use and_ to combine a role locator with a CSS condition, then use or_ to match either the button or link. Assert the resulting counts.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using or_ when you need an element to satisfy both conditions",
      "fix": "Use and_ for an intersection and or_ when either locator may match."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Combining Locators with and_ and or_",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button class=\"primary\">Save</button><button>Cancel</button>')\n    save = page.get_by_role(\"button\", name=\"Save\")\n    primary = page.locator(\"button.primary\")\n    assert save.and_(primary).count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><a href='#help'>Help</a>\")\n    save = page.get_by_role(\"button\", name=\"Save\")\n    help_link = page.get_by_role(\"link\", name=\"Help\")\n    either = save.or_(help_link)\n    assert either.count() == 2\n    browser.close()"
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
