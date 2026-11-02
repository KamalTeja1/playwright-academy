import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-test-id",
  "title": "Finding Elements by Test ID",
  "summary": "Use a dedicated test ID to locate elements without relying on layout or styling.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "get_by_test_id uses the data-testid attribute by default. A test ID is useful when user-facing semantics do not provide a reliable locator.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div data-testid=\"cart-count\">3 items</div>')\n    count = page.get_by_test_id(\"cart-count\")\n    assert count.inner_text() == \"3 items\"\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_test_id_attribute(\"data-qa\")\n    page.set_content('<div data-qa=\"result\">Ready</div>')\n    result = page.get_by_test_id(\"result\")\n    assert result.inner_text() == \"Ready\"\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div data-testid=\"cart-count\">3 items</div>')\n    count = page.get_by_test_id(\"cart-count\")\n    assert count.inner_text() == \"3 items\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create a result element with a data-testid attribute and locate it with get_by_test_id. Then configure a different test ID attribute and repeat with a second page.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a test ID when an accessible role and name already describe the interaction",
      "fix": "Prefer user-facing locators first, and use test IDs when they provide a clearer stable hook."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Elements by Test ID",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div data-testid=\"cart-count\">3 items</div>')\n    count = page.get_by_test_id(\"cart-count\")\n    assert count.inner_text() == \"3 items\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_test_id_attribute(\"data-qa\")\n    page.set_content('<div data-qa=\"result\">Ready</div>')\n    result = page.get_by_test_id(\"result\")\n    assert result.inner_text() == \"Ready\"\n    browser.close()"
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
