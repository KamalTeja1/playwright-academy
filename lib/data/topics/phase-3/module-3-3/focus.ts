import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "focus",
  "title": "Focusing an Element",
  "summary": "Move keyboard focus to an input or other focusable element.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "Use locator.focus to focus an element. Focus changes can trigger validation, styling, or other page behaviour.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Email\" onfocus=\"this.dataset.focused=\\'yes\\'\">')\n    email = page.get_by_role(\"textbox\", name=\"Email\")\n    email.focus()\n    assert email.get_attribute(\"data-focused\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onfocus=\"this.textContent=\\'Focused\\'\">Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.focus()\n    assert page.get_by_role(\"button\", name=\"Focused\").is_visible()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Email\" onfocus=\"this.dataset.focused=\\'yes\\'\">')\n    email = page.get_by_role(\"textbox\", name=\"Email\")\n    email.focus()\n    assert email.get_attribute(\"data-focused\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a labelled input that changes a status message on focus. Focus it with Playwright and assert the message.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Trying to focus an element that is not focusable",
      "fix": "Use a naturally focusable control or make the element focusable in the page."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Focusing an Element",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input aria-label=\"Email\" onfocus=\"this.dataset.focused=\\'yes\\'\">')\n    email = page.get_by_role(\"textbox\", name=\"Email\")\n    email.focus()\n    assert email.get_attribute(\"data-focused\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button onfocus=\"this.textContent=\\'Focused\\'\">Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.focus()\n    assert page.get_by_role(\"button\", name=\"Focused\").is_visible()\n    browser.close()"
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
