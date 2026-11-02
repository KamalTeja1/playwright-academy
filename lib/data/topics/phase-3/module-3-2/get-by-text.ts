import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-text",
  "title": "Finding Elements by Text",
  "summary": "Locate an element by the text it contains.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "get_by_text is useful for locating non-interactive content by its visible text. For buttons and links, a role locator is usually clearer.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Your changes are saved.</p>\")\n    message = page.get_by_text(\"Your changes are saved.\")\n    assert message.is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<main><p>Order confirmed</p></main>\")\n    assert page.get_by_text(\"Order confirmed\").inner_text() == \"Order confirmed\"\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Your changes are saved.</p>\")\n    message = page.get_by_text(\"Your changes are saved.\")\n    assert message.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create a page with a status message and a button. Locate the message by text and the button by role and name. Assert both are visible.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Using text matching for an interactive control with a clear role",
      "fix": "Prefer get_by_role for buttons, links, and other interactive elements."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Elements by Text",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Your changes are saved.</p>\")\n    message = page.get_by_text(\"Your changes are saved.\")\n    assert message.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<main><p>Order confirmed</p></main>\")\n    assert page.get_by_text(\"Order confirmed\").inner_text() == \"Order confirmed\"\n    browser.close()"
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
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "locators",
    "browser-testing"
  ]
};

export default topic;
