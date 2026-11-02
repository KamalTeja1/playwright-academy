import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "fill-basics",
  "title": "Filling Input Fields",
  "summary": "Set an input or textarea value with locator.fill.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "fill replaces the current value of an input or textarea. It focuses the control and fills it with the requested text.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\">')\n    email = page.get_by_label(\"Email\")\n    email.fill(\"asha@example.test\")\n    assert email.input_value() == \"asha@example.test\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"note\">Note</label><textarea id=\"note\"></textarea>')\n    note = page.get_by_label(\"Note\")\n    note.fill(\"Practice message\")\n    assert note.input_value() == \"Practice message\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\">')\n    email = page.get_by_label(\"Email\")\n    email.fill(\"asha@example.test\")\n    assert email.input_value() == \"asha@example.test\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a labelled search input. Fill it with a query and assert its current value using input_value().",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using fill on an element that is not an input, textarea, or contenteditable",
      "fix": "Use fill for editable text controls and choose an appropriate action for other elements."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Filling Input Fields",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"email\">Email</label><input id=\"email\">')\n    email = page.get_by_label(\"Email\")\n    email.fill(\"asha@example.test\")\n    assert email.input_value() == \"asha@example.test\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"note\">Note</label><textarea id=\"note\"></textarea>')\n    note = page.get_by_label(\"Note\")\n    note.fill(\"Practice message\")\n    assert note.input_value() == \"Practice message\"\n    browser.close()"
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
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
