import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "strict-mode",
  "title": "Understanding Strict Mode",
  "summary": "Understand why actions on ambiguous locators fail and how to make them unique.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "Playwright locators are strict for operations that target one element. If a locator matches multiple elements, an action such as click fails instead of choosing one arbitrarily.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><button>Save</button>\")\n    buttons = page.get_by_role(\"button\", name=\"Save\")\n    assert buttons.count() == 2\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><button>Cancel</button>\")\n    page.get_by_role(\"button\", name=\"Save\").click()\n    assert page.get_by_role(\"button\", name=\"Cancel\").is_visible()\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><button>Save</button>\")\n    buttons = page.get_by_role(\"button\", name=\"Save\")\n    assert buttons.count() == 2\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Load HTML with two buttons named Save. Assert the locator count, then make the locator unique by adding a distinguishing accessible name or selecting a deliberate position. Explain why silently choosing the first match can hide a page problem.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Using first or nth to hide an unexpected duplicate",
      "fix": "Prefer a locator that uniquely identifies the intended element; use positional selection only when order is part of the requirement."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Understanding Strict Mode",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><button>Save</button>\")\n    buttons = page.get_by_role(\"button\", name=\"Save\")\n    assert buttons.count() == 2\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button><button>Cancel</button>\")\n    page.get_by_role(\"button\", name=\"Save\").click()\n    assert page.get_by_role(\"button\", name=\"Cancel\").is_visible()\n    browser.close()"
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
