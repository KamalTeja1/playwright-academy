import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "keyboard-press",
  "title": "Pressing Keyboard Keys",
  "summary": "Use locator.press or page.keyboard.press to send a key press.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "Use press for a key or key combination. A locator press focuses the element first; page.keyboard.press sends the key to the currently focused target.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" onkeydown=\"this.dataset.key=event.key\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"Enter\")\n    assert search.get_attribute(\"data-key\") == \"Enter\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onkeydown=\"this.dataset.key=event.key\">Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.press(\"Space\")\n    assert button.get_attribute(\"data-key\") == \" \"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" onkeydown=\"this.dataset.key=event.key\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"Enter\")\n    assert search.get_attribute(\"data-key\") == \"Enter\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a labelled input that records its most recent keydown event. Use locator.press to send Enter and assert which key the page received.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using page.keyboard.press without focusing the intended target",
      "fix": "Focus the intended element first, or use locator.press to target it directly."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Pressing Keyboard Keys",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" onkeydown=\"this.dataset.key=event.key\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press(\"Enter\")\n    assert search.get_attribute(\"data-key\") == \"Enter\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onkeydown=\"this.dataset.key=event.key\">Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.press(\"Space\")\n    assert button.get_attribute(\"data-key\") == \" \"\n    browser.close()"
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
