import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "blur",
  "title": "Removing Focus with blur",
  "summary": "Remove focus from a control and check its blur behaviour.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "locator.blur removes focus from an element. Applications can use blur events for validation or presentation updates.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Name\" onblur=\"this.dataset.blurred=\\'yes\\'\">')\n    name = page.get_by_role(\"textbox\", name=\"Name\")\n    name.focus()\n    name.blur()\n    assert name.get_attribute(\"data-blurred\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" onblur=\"document.querySelector(\\'p\\').textContent=\\'Checked\\'\"><p></p>')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.focus()\n    code.blur()\n    assert page.get_by_text(\"Checked\").is_visible()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Name\" onblur=\"this.dataset.blurred=\\'yes\\'\">')\n    name = page.get_by_role(\"textbox\", name=\"Name\")\n    name.focus()\n    name.blur()\n    assert name.get_attribute(\"data-blurred\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create an input that displays a validation message when it loses focus. Focus then blur the input and assert the message.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Assuming blur validates a value without interacting with the page",
      "fix": "Set up the input value and trigger the blur behaviour the application actually uses."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Removing Focus with blur",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Name\" onblur=\"this.dataset.blurred=\\'yes\\'\">')\n    name = page.get_by_role(\"textbox\", name=\"Name\")\n    name.focus()\n    name.blur()\n    assert name.get_attribute(\"data-blurred\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Code\" onblur=\"document.querySelector(\\'p\\').textContent=\\'Checked\\'\"><p></p>')\n    code = page.get_by_role(\"textbox\", name=\"Code\")\n    code.focus()\n    code.blur()\n    assert page.get_by_text(\"Checked\").is_visible()\n    browser.close()"
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
