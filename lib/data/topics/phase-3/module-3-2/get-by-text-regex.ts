import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-text-regex",
  "title": "Matching Text with Regular Expressions",
  "summary": "Use a compiled regular expression to match text patterns.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "get_by_text accepts a regular expression, which is useful when text varies but follows a predictable pattern.\n\n### Try it with local HTML\n\n~~~python\nimport re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Order 42 confirmed</p>\")\n    order = page.get_by_text(re.compile(r\"Order \\d+ confirmed\"))\n    assert order.is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nimport re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Welcome, Asha!</p>\")\n    greeting = page.get_by_text(re.compile(r\"Welcome,\"))\n    assert greeting.is_visible()\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nimport re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Order 42 confirmed</p>\")\n    order = page.get_by_text(re.compile(r\"Order \\d+ confirmed\"))\n    assert order.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create a status message containing a changing numeric order number. Use a compiled regular expression to locate it and assert it is visible.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Writing a pattern that is too broad and matches unrelated text",
      "fix": "Anchor or narrow the regular expression to the expected text pattern."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Matching Text with Regular Expressions",
      "code": "import re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Order 42 confirmed</p>\")\n    order = page.get_by_text(re.compile(r\"Order \\d+ confirmed\"))\n    assert order.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "import re\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Welcome, Asha!</p>\")\n    greeting = page.get_by_text(re.compile(r\"Welcome,\"))\n    assert greeting.is_visible()\n    browser.close()"
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
