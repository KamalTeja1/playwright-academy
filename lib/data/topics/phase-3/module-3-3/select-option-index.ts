import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "select-option-index",
  "title": "Selecting an Option by Index",
  "summary": "Select a dropdown option by its zero-based position.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "select_option(index=...) selects an option using a zero-based index. Prefer value or label when they identify the intended option more clearly.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Size\"><option value=\"s\">Small</option><option value=\"m\">Medium</option><option value=\"l\">Large</option></select>')\n    size = page.get_by_label(\"Size\")\n    size.select_option(index=1)\n    assert size.input_value() == \"m\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Priority\"><option>Low</option><option>Normal</option><option>High</option></select>')\n    priority = page.get_by_label(\"Priority\")\n    priority.select_option(index=2)\n    assert priority.input_value() == \"High\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Size\"><option value=\"s\">Small</option><option value=\"m\">Medium</option><option value=\"l\">Large</option></select>')\n    size = page.get_by_label(\"Size\")\n    size.select_option(index=1)\n    assert size.input_value() == \"m\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a select with three options. Select the second item by index and assert its value. Explain why reordering options can make index-based tests brittle.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Treating option indexes as one-based",
      "fix": "Remember that the first option has index 0."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Selecting an Option by Index",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Size\"><option value=\"s\">Small</option><option value=\"m\">Medium</option><option value=\"l\">Large</option></select>')\n    size = page.get_by_label(\"Size\")\n    size.select_option(index=1)\n    assert size.input_value() == \"m\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<select aria-label=\"Priority\"><option>Low</option><option>Normal</option><option>High</option></select>')\n    priority = page.get_by_label(\"Priority\")\n    priority.select_option(index=2)\n    assert priority.input_value() == \"High\"\n    browser.close()"
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
