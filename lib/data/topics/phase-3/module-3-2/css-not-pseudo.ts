import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "css-not-pseudo",
  "title": "Excluding Matches with :not",
  "summary": "Use the :not selector to exclude elements matching a CSS condition.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": ":not is a CSS pseudo-class that excludes elements matching its selector argument. Playwright also supports it in locator CSS selectors.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Save</button><button disabled>Cancel</button>')\n    enabled = page.locator(\"button:not([disabled])\")\n    assert enabled.count() == 1\n    assert enabled.inner_text() == \"Save\"\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li class=\"muted\">Old</li><li>New</li>')\n    current = page.locator(\"li:not(.muted)\")\n    assert current.inner_text() == \"New\"\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Save</button><button disabled>Cancel</button>')\n    enabled = page.locator(\"button:not([disabled])\")\n    assert enabled.count() == 1\n    assert enabled.inner_text() == \"Save\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create a list with one item marked archived and two current items. Use :not to find the current items and assert the count and text.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using :not with a selector that excludes the wrong set of elements",
      "fix": "Check the selector argument carefully and assert the resulting count or content."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Excluding Matches with :not",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Save</button><button disabled>Cancel</button>')\n    enabled = page.locator(\"button:not([disabled])\")\n    assert enabled.count() == 1\n    assert enabled.inner_text() == \"Save\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<li class=\"muted\">Old</li><li>New</li>')\n    current = page.locator(\"li:not(.muted)\")\n    assert current.inner_text() == \"New\"\n    browser.close()"
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
