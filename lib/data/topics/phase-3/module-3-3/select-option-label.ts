import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "select-option-label",
  "title": "Selecting an Option by Label",
  "summary": "Choose a select option by the text displayed to the user.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "select_option(label=...) selects an option by its visible label rather than its underlying value.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"country\">Country</label><select id=\"country\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    country = page.get_by_label(\"Country\")\n    country.select_option(label=\"Japan\")\n    assert country.input_value() == \"jp\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Plan\"><option value=\"s\">Starter plan</option><option value=\"p\">Pro plan</option></select>')\n    plan = page.get_by_label(\"Plan\")\n    plan.select_option(label=\"Pro plan\")\n    assert plan.input_value() == \"p\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"country\">Country</label><select id=\"country\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    country = page.get_by_label(\"Country\")\n    country.select_option(label=\"Japan\")\n    assert country.input_value() == \"jp\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a select with labels that differ from their option values. Select by the visible label and assert the resulting value.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Assuming a displayed option label is always the same as its value",
      "fix": "Select by label when using visible text and assert the actual option value separately."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Selecting an Option by Label",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label for=\"country\">Country</label><select id=\"country\"><option value=\"in\">India</option><option value=\"jp\">Japan</option></select>')\n    country = page.get_by_label(\"Country\")\n    country.select_option(label=\"Japan\")\n    assert country.input_value() == \"jp\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Plan\"><option value=\"s\">Starter plan</option><option value=\"p\">Pro plan</option></select>')\n    plan = page.get_by_label(\"Plan\")\n    plan.select_option(label=\"Pro plan\")\n    assert plan.input_value() == \"p\"\n    browser.close()"
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
