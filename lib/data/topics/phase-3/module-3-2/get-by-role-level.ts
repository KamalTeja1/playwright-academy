import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-role-level",
  "title": "Finding Headings by Level",
  "summary": "Locate a heading by role, accessible name, and heading level.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "Use the level option with the heading role to target a specific heading level from 1 through 6.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Account</h1><h2>Profile</h2>\")\n    profile = page.get_by_role(\"heading\", name=\"Profile\", level=2)\n    assert profile.is_visible()\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Welcome</h1><h3>Tips</h3>\")\n    assert page.get_by_role(\"heading\", level=1).inner_text() == \"Welcome\"\n    assert page.get_by_role(\"heading\", level=3).inner_text() == \"Tips\"\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Account</h1><h2>Profile</h2>\")\n    profile = page.get_by_role(\"heading\", name=\"Profile\", level=2)\n    assert profile.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create an HTML outline with h1, h2, and h3 elements. Locate the h2 by its name and level, then assert that the page has one level-three heading.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Using heading level to locate a non-heading element",
      "fix": "Use level only with the heading role."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Headings by Level",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Account</h1><h2>Profile</h2>\")\n    profile = page.get_by_role(\"heading\", name=\"Profile\", level=2)\n    assert profile.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Welcome</h1><h3>Tips</h3>\")\n    assert page.get_by_role(\"heading\", level=1).inner_text() == \"Welcome\"\n    assert page.get_by_role(\"heading\", level=3).inner_text() == \"Tips\"\n    browser.close()"
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
