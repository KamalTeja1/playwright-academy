import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "insert-text",
  "title": "Inserting Text with the Keyboard",
  "summary": "Insert text at the focused element with page.keyboard.insert_text.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "keyboard.insert_text inserts text into the currently focused element. It does not generate individual keydown and keyup events for each character.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Message\">')\n    message = page.get_by_role(\"textbox\", name=\"Message\")\n    message.focus()\n    page.keyboard.insert_text(\"Hello\")\n    assert message.input_value() == \"Hello\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Note\"></textarea>')\n    note = page.get_by_role(\"textbox\", name=\"Note\")\n    note.focus()\n    page.keyboard.insert_text(\"Line one\")\n    assert note.input_value() == \"Line one\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Message\">')\n    message = page.get_by_role(\"textbox\", name=\"Message\")\n    message.focus()\n    page.keyboard.insert_text(\"Hello\")\n    assert message.input_value() == \"Hello\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Focus a labelled textarea, insert text with page.keyboard.insert_text, and assert its value. Explain why this is different from simulating each key press.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Calling insert_text before focusing the intended control",
      "fix": "Focus the input or textarea first so the text is inserted in the right place."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Inserting Text with the Keyboard",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Message\">')\n    message = page.get_by_role(\"textbox\", name=\"Message\")\n    message.focus()\n    page.keyboard.insert_text(\"Hello\")\n    assert message.input_value() == \"Hello\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Note\"></textarea>')\n    note = page.get_by_role(\"textbox\", name=\"Note\")\n    note.focus()\n    page.keyboard.insert_text(\"Line one\")\n    assert note.input_value() == \"Line one\"\n    browser.close()"
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
