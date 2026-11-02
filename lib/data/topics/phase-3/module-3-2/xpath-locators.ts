import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "xpath-locators",
  "title": "XPath Locators",
  "summary": "Use XPath expressions to locate elements by document structure or attributes.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "XPath can locate elements using text, attributes, and relationships in the document. Use it when simpler user-facing locators do not fit.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button>\")\n    save = page.locator(\"xpath=//button[normalize-space(.)='Save']\")\n    assert save.is_visible()\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\">')\n    email = page.locator(\"xpath=//label[normalize-space(.)='Email']/following-sibling::input\")\n    assert email.is_visible()\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button>\")\n    save = page.locator(\"xpath=//button[normalize-space(.)='Save']\")\n    assert save.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create a page with a labelled input and a button. Locate both with XPath and assert they are visible. Then describe why a label or role locator is usually easier to maintain.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Writing XPath expressions that depend on many ancestor levels",
      "fix": "Prefer short, meaningful locators and use accessible roles or labels when possible."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "XPath Locators",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button>Save</button>\")\n    save = page.locator(\"xpath=//button[normalize-space(.)='Save']\")\n    assert save.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\">')\n    email = page.locator(\"xpath=//label[normalize-space(.)='Email']/following-sibling::input\")\n    assert email.is_visible()\n    browser.close()"
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
