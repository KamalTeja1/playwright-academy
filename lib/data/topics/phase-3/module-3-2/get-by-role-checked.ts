import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-role-checked",
  "title": "Finding Checked Controls",
  "summary": "Filter checkbox or radio locators by their checked state.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "The checked option on get_by_role can select checked or unchecked checkboxes and radio buttons.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\" checked> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\", checked=True)\n    assert updates.is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Offers</label>')\n    offers = page.get_by_role(\"checkbox\", name=\"Offers\", checked=False)\n    assert offers.count() == 1\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\" checked> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\", checked=True)\n    assert updates.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create checked and unchecked labelled checkboxes. Use get_by_role with checked=True and checked=False and assert each locator identifies the intended control.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Treating the checked option as an action that changes control state",
      "fix": "Use checked to locate by current state; use check or uncheck when you need to change it."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Checked Controls",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\" checked> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\", checked=True)\n    assert updates.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Offers</label>')\n    offers = page.get_by_role(\"checkbox\", name=\"Offers\", checked=False)\n    assert offers.count() == 1\n    browser.close()"
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
