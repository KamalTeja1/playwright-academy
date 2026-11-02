import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "clear-input",
  "title": "Clearing an Input",
  "summary": "Clear a text field by filling it with an empty string.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "Use fill with an empty string to replace an input's current value with no text.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old query\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.fill(\"\")\n    assert search.input_value() == \"\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Message\">Draft text</textarea>')\n    message = page.get_by_role(\"textbox\", name=\"Message\")\n    message.clear()\n    assert message.input_value() == \"\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old query\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.fill(\"\")\n    assert search.input_value() == \"\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a pre-filled labelled textbox. Clear it, then assert that the input value is empty.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Checking the placeholder instead of the current input value",
      "fix": "Use input_value() to verify the value stored in an input or textarea."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Clearing an Input",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\" value=\"old query\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.fill(\"\")\n    assert search.input_value() == \"\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<textarea aria-label=\"Message\">Draft text</textarea>')\n    message = page.get_by_role(\"textbox\", name=\"Message\")\n    message.clear()\n    assert message.input_value() == \"\"\n    browser.close()"
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
