import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "keyboard-shortcuts",
  "title": "Using Keyboard Shortcuts",
  "summary": "Send key combinations such as Control+A to test keyboard shortcuts.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "Use a key combination with locator.press or page.keyboard.press. Playwright maps modifier names for the current platform, and ControlOrMeta can represent Control or Meta.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old text\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"ControlOrMeta+A\")\n    search.press_sequentially(\"new text\")\n    assert search.input_value() == \"new text\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Editor\">first line</textarea>')\n    editor = page.get_by_role(\"textbox\", name=\"Editor\")\n    editor.press(\"End\")\n    editor.press(\"Enter\")\n    editor.press_sequentially(\"second line\")\n    assert editor.input_value() == \"first line\\nsecond line\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old text\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"ControlOrMeta+A\")\n    search.press_sequentially(\"new text\")\n    assert search.input_value() == \"new text\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Fill a text field, use ControlOrMeta+A and type replacement text with press_sequentially. Assert that the old value was replaced.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Sending a shortcut before the target field is focused",
      "fix": "Use locator.press on the intended control or focus it before using page.keyboard."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Using Keyboard Shortcuts",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old text\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"ControlOrMeta+A\")\n    search.press_sequentially(\"new text\")\n    assert search.input_value() == \"new text\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Editor\">first line</textarea>')\n    editor = page.get_by_role(\"textbox\", name=\"Editor\")\n    editor.press(\"End\")\n    editor.press(\"Enter\")\n    editor.press_sequentially(\"second line\")\n    assert editor.input_value() == \"first line\\nsecond line\"\n    browser.close()"
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
