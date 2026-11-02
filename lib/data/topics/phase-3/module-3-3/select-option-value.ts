import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "select-option-value",
  "title": "Selecting an Option by Value",
  "summary": "Choose a select option using its value attribute.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "select_option(value=...) selects an option by its HTML value attribute and returns the selected values.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"region\">Region</label><select id=\"region\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    region = page.get_by_label(\"Region\")\n    region.select_option(value=\"jp\")\n    assert region.input_value() == \"jp\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Colour\"><option value=\"red\">Red</option><option value=\"blue\">Blue</option></select>')\n    colour = page.get_by_label(\"Colour\")\n    selected = colour.select_option(\"red\")\n    assert selected == [\"red\"]\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"region\">Region</label><select id=\"region\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    region = page.get_by_label(\"Region\")\n    region.select_option(value=\"jp\")\n    assert region.input_value() == \"jp\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a labelled select with three options. Select one by its value and assert both the returned selected value and the control's input_value.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing the visible label when the test intends to select by option value",
      "fix": "Use value= for the option's value attribute, or label= for its displayed label."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Selecting an Option by Value",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"region\">Region</label><select id=\"region\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    region = page.get_by_label(\"Region\")\n    region.select_option(value=\"jp\")\n    assert region.input_value() == \"jp\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Colour\"><option value=\"red\">Red</option><option value=\"blue\">Blue</option></select>')\n    colour = page.get_by_label(\"Colour\")\n    selected = colour.select_option(\"red\")\n    assert selected == [\"red\"]\n    browser.close()"
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
