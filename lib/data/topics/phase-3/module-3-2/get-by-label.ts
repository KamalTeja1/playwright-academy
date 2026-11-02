import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-label",
  "title": "Finding Form Controls by Label",
  "summary": "Locate form controls through their associated accessible label.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "get_by_label finds form controls by their associated label text, supporting accessible and user-focused form tests.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email address</label><input id=\"email\">')\n    email = page.get_by_label(\"Email address\")\n    assert email.is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label>Password <input type=\"password\"></label>')\n    password = page.get_by_label(\"Password\")\n    assert password.get_attribute(\"type\") == \"password\"\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email address</label><input id=\"email\">')\n    email = page.get_by_label(\"Email address\")\n    assert email.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create a form with labelled email and password inputs. Locate both with get_by_label and assert their input types.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Using placeholder text as the only accessible label",
      "fix": "Provide a real label for the control and locate it with get_by_label."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Form Controls by Label",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email address</label><input id=\"email\">')\n    email = page.get_by_label(\"Email address\")\n    assert email.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label>Password <input type=\"password\"></label>')\n    password = page.get_by_label(\"Password\")\n    assert password.get_attribute(\"type\") == \"password\"\n    browser.close()"
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
