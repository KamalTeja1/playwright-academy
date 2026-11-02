import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "dispatch-event",
  "title": "Dispatching DOM Events",
  "summary": "Dispatch a DOM event on a locator when a test specifically needs programmatic event dispatch.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "dispatch_event sends a DOM event directly to an element. It does not reproduce the full user interaction or browser actionability checks.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Dispatched\\'\">Run</button>')\n    page.get_by_role(\"button\", name=\"Run\").dispatch_event(\"click\")\n    assert page.get_by_role(\"button\", name=\"Dispatched\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Name\" oninput=\"this.dataset.input=\\'yes\\'\">')\n    field = page.get_by_role(\"textbox\", name=\"Name\")\n    field.dispatch_event(\"input\", {\"bubbles\": True})\n    assert field.get_attribute(\"data-input\") == \"yes\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Dispatched\\'\">Run</button>')\n    page.get_by_role(\"button\", name=\"Run\").dispatch_event(\"click\")\n    assert page.get_by_role(\"button\", name=\"Dispatched\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a button with a click handler. Dispatch a click event and assert the handler's result. Explain why a locator click is usually preferable for user interaction tests.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using dispatch_event as though it performed a real pointer interaction",
      "fix": "Use locator.click for user-like actions; dispatch an event only when direct DOM event dispatch is the behaviour under test."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Dispatching DOM Events",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Dispatched\\'\">Run</button>')\n    page.get_by_role(\"button\", name=\"Run\").dispatch_event(\"click\")\n    assert page.get_by_role(\"button\", name=\"Dispatched\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Name\" oninput=\"this.dataset.input=\\'yes\\'\">')\n    field = page.get_by_role(\"textbox\", name=\"Name\")\n    field.dispatch_event(\"input\", {\"bubbles\": True})\n    assert field.get_attribute(\"data-input\") == \"yes\"\n    browser.close()"
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
