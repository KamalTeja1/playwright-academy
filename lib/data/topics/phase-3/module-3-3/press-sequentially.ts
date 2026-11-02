import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "press-sequentially",
  "title": "Typing with press_sequentially",
  "summary": "Send text one character at a time when keyboard events are part of the behaviour.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "press_sequentially types text character by character and can set a delay between key presses. Use fill when key-by-key events are not important.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"hello\", delay=20)\n    assert search.input_value() == \"hello\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" oninput=\"this.dataset.changed=\\'yes\\'\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.press_sequentially(\"42\")\n    assert code.get_attribute(\"data-changed\") == \"yes\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"hello\", delay=20)\n    assert search.input_value() == \"hello\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create an input with an input event handler that updates a status message. Enter text with press_sequentially and assert that the handler ran.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using press_sequentially when individual key events are not needed",
      "fix": "Use fill for standard form entry and reserve sequential typing for keyboard-event behaviour."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Typing with press_sequentially",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"hello\", delay=20)\n    assert search.input_value() == \"hello\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" oninput=\"this.dataset.changed=\\'yes\\'\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.press_sequentially(\"42\")\n    assert code.get_attribute(\"data-changed\") == \"yes\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
    },
    {
      "title": "Playwright for Python — Input",
      "url": "https://playwright.dev/python/docs/input"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
