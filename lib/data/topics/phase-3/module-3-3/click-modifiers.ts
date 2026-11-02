import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "click-modifiers",
  "title": "Clicking with Keyboard Modifiers",
  "summary": "Hold a keyboard modifier such as Shift or Control while clicking.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "Pass modifier names to click when the interaction requires a key to be held during the mouse click.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent=event.shiftKey ? 'Shifted' : 'Plain'\\\">Select</button>\")\n    page.get_by_role(\"button\", name=\"Select\").click(modifiers=[\"Shift\"])\n    assert page.get_by_role(\"button\", name=\"Shifted\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.dataset.ctrl=event.ctrlKey\\\">Choose</button>\")\n    button = page.get_by_role(\"button\", name=\"Choose\")\n    button.click(modifiers=[\"Control\"])\n    assert button.get_attribute(\"data-ctrl\") == \"true\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent=event.shiftKey ? 'Shifted' : 'Plain'\\\">Select</button>\")\n    page.get_by_role(\"button\", name=\"Select\").click(modifiers=[\"Shift\"])\n    assert page.get_by_role(\"button\", name=\"Shifted\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a button whose event handler records whether Alt was held. Click with the Alt modifier and assert the handler observed it.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing a modifier name that does not match Playwright's supported names",
      "fix": "Use a supported modifier name such as Shift, Control, Alt, or Meta."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Clicking with Keyboard Modifiers",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent=event.shiftKey ? 'Shifted' : 'Plain'\\\">Select</button>\")\n    page.get_by_role(\"button\", name=\"Select\").click(modifiers=[\"Shift\"])\n    assert page.get_by_role(\"button\", name=\"Shifted\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.dataset.ctrl=event.ctrlKey\\\">Choose</button>\")\n    button = page.get_by_role(\"button\", name=\"Choose\")\n    button.click(modifiers=[\"Control\"])\n    assert button.get_attribute(\"data-ctrl\") == \"true\"\n    browser.close()"
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
