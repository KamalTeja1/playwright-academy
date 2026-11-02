import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "aria-roles-list",
  "title": "Common Accessible Roles",
  "summary": "Recognize common roles used to locate semantic page elements.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "Roles describe what an element is, such as a button, link, heading, textbox, checkbox, or navigation region. Native HTML often supplies the correct role automatically.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<nav><a href='#home'>Home</a></nav><main><h1>Welcome</h1></main>\")\n    assert page.get_by_role(\"navigation\").is_visible()\n    assert page.get_by_role(\"link\", name=\"Home\").is_visible()\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\"><button>Send</button>')\n    assert page.get_by_role(\"textbox\", name=\"Email\").is_visible()\n    assert page.get_by_role(\"button\", name=\"Send\").is_visible()\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<nav><a href='#home'>Home</a></nav><main><h1>Welcome</h1></main>\")\n    assert page.get_by_role(\"navigation\").is_visible()\n    assert page.get_by_role(\"link\", name=\"Home\").is_visible()\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Build local HTML containing a navigation link, main heading, textbox, checkbox, and button. Locate each using its role and assert that it is visible.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Guessing a role that does not match the element's semantics",
      "fix": "Use native semantic HTML or consult the ARIA role reference for the correct role."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Common Accessible Roles",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<nav><a href='#home'>Home</a></nav><main><h1>Welcome</h1></main>\")\n    assert page.get_by_role(\"navigation\").is_visible()\n    assert page.get_by_role(\"link\", name=\"Home\").is_visible()\n    assert page.get_by_role(\"heading\", name=\"Welcome\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\"><button>Send</button>')\n    assert page.get_by_role(\"textbox\", name=\"Email\").is_visible()\n    assert page.get_by_role(\"button\", name=\"Send\").is_visible()\n    browser.close()"
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
