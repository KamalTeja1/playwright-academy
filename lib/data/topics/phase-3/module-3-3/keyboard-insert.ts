import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "keyboard-insert",
  "title": "Inserting Text with the Keyboard",
  "summary": "Insert text into the currently focused element with keyboard.insert_text.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "keyboard.insert_text places text into the focused editable element. It does not emit individual key events for each character.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Note\"></textarea>')\n    note = page.get_by_role(\"textbox\", name=\"Note\")\n    note.focus()\n    page.keyboard.insert_text(\"Practice note\")\n    assert note.input_value() == \"Practice note\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.focus()\n    page.keyboard.insert_text(\"playwright\")\n    assert search.input_value() == \"playwright\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Note\"></textarea>')\n    note = page.get_by_role(\"textbox\", name=\"Note\")\n    note.focus()\n    page.keyboard.insert_text(\"Practice note\")\n    assert note.input_value() == \"Practice note\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Focus a labelled textarea, insert a sentence with keyboard.insert_text, then assert the complete value. Explain when individual key events would be needed instead.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Inserting text before the intended field has focus",
      "fix": "Focus the desired editable control before calling keyboard.insert_text."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Inserting Text with the Keyboard",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Note\"></textarea>')\n    note = page.get_by_role(\"textbox\", name=\"Note\")\n    note.focus()\n    page.keyboard.insert_text(\"Practice note\")\n    assert note.input_value() == \"Practice note\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.focus()\n    page.keyboard.insert_text(\"playwright\")\n    assert search.input_value() == \"playwright\"\n    browser.close()"
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
  "difficulty": "Beginner",
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
