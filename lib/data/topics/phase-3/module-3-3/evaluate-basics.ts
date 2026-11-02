import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "evaluate-basics",
  "title": "Evaluating JavaScript in the Page",
  "summary": "Run a small JavaScript expression in the page with page.evaluate.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "page.evaluate runs JavaScript in the page context and returns a serializable result. Prefer locators for normal interactions and assertions.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Practice</h1>\")\n    title_text = page.evaluate(\"() => document.querySelector('h1').textContent\")\n    assert title_text == \"Practice\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"total\" data-value=\"42\">Total</div>')\n    value = page.locator(\"#total\").evaluate(\"(element) => element.dataset.value\")\n    assert value == \"42\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Practice</h1>\")\n    title_text = page.evaluate(\"() => document.querySelector('h1').textContent\")\n    assert title_text == \"Practice\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Load local HTML with a data attribute. Read it with locator.evaluate and assert the value. Then explain why ordinary user-visible checks should usually use locators rather than page.evaluate.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using page.evaluate to perform a normal user action",
      "fix": "Use locator actions for user interactions and evaluate only when page-context JavaScript is genuinely needed."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Evaluating JavaScript in the Page",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Practice</h1>\")\n    title_text = page.evaluate(\"() => document.querySelector('h1').textContent\")\n    assert title_text == \"Practice\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"total\" data-value=\"42\">Total</div>')\n    value = page.locator(\"#total\").evaluate(\"(element) => element.dataset.value\")\n    assert value == \"42\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Input",
      "url": "https://playwright.dev/python/docs/input"
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
    "actions",
    "browser-testing"
  ]
};

export default topic;
