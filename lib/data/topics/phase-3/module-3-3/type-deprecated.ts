import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "type-deprecated",
  "title": "The Deprecated type Method",
  "summary": "Recognize locator.type as a legacy API and prefer press_sequentially for character-by-character input.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "locator.type is deprecated in favour of press_sequentially. For ordinary form entry, fill is usually simpler and faster.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"pytest\")\n    assert search.input_value() == \"pytest\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.fill(\"123\")\n    assert code.input_value() == \"123\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"pytest\")\n    assert search.input_value() == \"pytest\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Use press_sequentially to enter text into a labelled field. Compare it with fill and explain which one you would use for ordinary form entry.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Starting new tests with the deprecated locator.type method",
      "fix": "Use fill for ordinary text entry or press_sequentially when individual key events matter."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "The Deprecated type Method",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Search\">')\n    search = page.get_by_role(\"textbox\", name=\"Search\")\n    search.press_sequentially(\"pytest\")\n    assert search.input_value() == \"pytest\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\">')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.fill(\"123\")\n    assert code.input_value() == \"123\"\n    browser.close()"
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
