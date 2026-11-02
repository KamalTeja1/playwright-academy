import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "css-visible-pseudo",
  "title": "Finding Visible Elements with :visible",
  "summary": "Filter CSS locator matches to elements that are visible.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": ":visible is a Playwright CSS extension that filters matches by visibility. It does not replace checking whether a user-facing element is actually available.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Shown</button><button style=\"display:none\">Hidden</button>')\n    shown = page.locator(\"button:visible\")\n    assert shown.count() == 1\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<p style=\"visibility:hidden\">Secret</p><p>Ready</p>')\n    ready = page.locator(\"p:visible\")\n    assert ready.inner_text() == \"Ready\"\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Shown</button><button style=\"display:none\">Hidden</button>')\n    shown = page.locator(\"button:visible\")\n    assert shown.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Add one visible and one hidden button to local HTML. Use :visible to count visible buttons and assert the count.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using :visible to conceal unexpected duplicate elements",
      "fix": "Investigate why multiple elements exist and make the locator identify the intended control."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Visible Elements with :visible",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button>Shown</button><button style=\"display:none\">Hidden</button>')\n    shown = page.locator(\"button:visible\")\n    assert shown.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<p style=\"visibility:hidden\">Secret</p><p>Ready</p>')\n    ready = page.locator(\"p:visible\")\n    assert ready.inner_text() == \"Ready\"\n    browser.close()"
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
