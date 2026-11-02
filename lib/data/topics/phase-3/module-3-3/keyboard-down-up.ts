import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "keyboard-down-up",
  "title": "Holding and Releasing Keys",
  "summary": "Use keyboard.down and keyboard.up to hold a key across several actions.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "keyboard.down presses a key and keeps it held. keyboard.up releases it. Always release keys that your test deliberately holds.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.dataset.shift=event.shiftKey\">Select</button>')\n    button = page.get_by_role(\"button\", name=\"Select\")\n    page.keyboard.down(\"Shift\")\n    try:\n        button.click()\n    finally:\n        page.keyboard.up(\"Shift\")\n    assert button.get_attribute(\"data-shift\") == \"true\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" onkeydown=\"this.dataset.ctrl=event.ctrlKey\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.focus()\n    page.keyboard.down(\"Control\")\n    try:\n        page.keyboard.press(\"A\")\n    finally:\n        page.keyboard.up(\"Control\")\n    assert code.get_attribute(\"data-ctrl\") == \"true\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.dataset.shift=event.shiftKey\">Select</button>')\n    button = page.get_by_role(\"button\", name=\"Select\")\n    page.keyboard.down(\"Shift\")\n    try:\n        button.click()\n    finally:\n        page.keyboard.up(\"Shift\")\n    assert button.get_attribute(\"data-shift\") == \"true\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Hold Shift while interacting with a local control, then release it in a finally block. Assert that the page observed the modifier.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Leaving a modifier key held after an interaction",
      "fix": "Release the key with keyboard.up, using try and finally when later steps could fail."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Holding and Releasing Keys",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onclick=\"this.dataset.shift=event.shiftKey\">Select</button>')\n    button = page.get_by_role(\"button\", name=\"Select\")\n    page.keyboard.down(\"Shift\")\n    try:\n        button.click()\n    finally:\n        page.keyboard.up(\"Shift\")\n    assert button.get_attribute(\"data-shift\") == \"true\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" onkeydown=\"this.dataset.ctrl=event.ctrlKey\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.focus()\n    page.keyboard.down(\"Control\")\n    try:\n        page.keyboard.press(\"A\")\n    finally:\n        page.keyboard.up(\"Control\")\n    assert code.get_attribute(\"data-ctrl\") == \"true\"\n    browser.close()"
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
