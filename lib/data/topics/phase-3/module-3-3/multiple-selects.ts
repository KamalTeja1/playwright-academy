import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "multiple-selects",
  "title": "Selecting Multiple Options",
  "summary": "Choose several values in a multiple select control.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "Pass a list of values to select_option to choose multiple options in a multiple select element.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Colours\" multiple><option value=\"red\">Red</option><option value=\"green\">Green</option><option value=\"blue\">Blue</option></select>')\n    colours = page.get_by_label(\"Colours\")\n    colours.select_option([\"red\", \"blue\"])\n    selected = colours.evaluate(\"(element) => Array.from(element.selectedOptions, option => option.value)\")\n    assert selected == [\"red\", \"blue\"]\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Tools\" multiple><option value=\"pytest\">pytest</option><option value=\"playwright\">Playwright</option></select>')\n    tools = page.get_by_label(\"Tools\")\n    tools.select_option([\"pytest\", \"playwright\"])\n    assert tools.locator(\"option:checked\").count() == 2\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Colours\" multiple><option value=\"red\">Red</option><option value=\"green\">Green</option><option value=\"blue\">Blue</option></select>')\n    colours = page.get_by_label(\"Colours\")\n    colours.select_option([\"red\", \"blue\"])\n    selected = colours.evaluate(\"(element) => Array.from(element.selectedOptions, option => option.value)\")\n    assert selected == [\"red\", \"blue\"]\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a multiple select with three choices. Select two by value, then assert the selected option values and selected count.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a multi-value selection on a single-select control",
      "fix": "Add the multiple attribute to the select element when multiple options should be selected."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Selecting Multiple Options",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Colours\" multiple><option value=\"red\">Red</option><option value=\"green\">Green</option><option value=\"blue\">Blue</option></select>')\n    colours = page.get_by_label(\"Colours\")\n    colours.select_option([\"red\", \"blue\"])\n    selected = colours.evaluate(\"(element) => Array.from(element.selectedOptions, option => option.value)\")\n    assert selected == [\"red\", \"blue\"]\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Tools\" multiple><option value=\"pytest\">pytest</option><option value=\"playwright\">Playwright</option></select>')\n    tools = page.get_by_label(\"Tools\")\n    tools.select_option([\"pytest\", \"playwright\"])\n    assert tools.locator(\"option:checked\").count() == 2\n    browser.close()"
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
