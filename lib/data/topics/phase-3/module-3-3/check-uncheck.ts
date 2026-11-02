import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "check-uncheck",
  "title": "Checking and Unchecking Controls",
  "summary": "Use check and uncheck to set checkbox or radio control states.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "check and uncheck ensure the requested state. They do not blindly toggle the control, so repeated calls remain predictable.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\")\n    updates.check()\n    assert updates.is_checked()\n    updates.uncheck()\n    assert not updates.is_checked()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"radio\" name=\"plan\" value=\"basic\"> Basic</label>')\n    basic = page.get_by_role(\"radio\", name=\"Basic\")\n    basic.check()\n    assert basic.is_checked()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\")\n    updates.check()\n    assert updates.is_checked()\n    updates.uncheck()\n    assert not updates.is_checked()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create two labelled checkboxes. Check one and uncheck the other, then assert both final states.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using click as a toggle without knowing the control's initial state",
      "fix": "Use check or uncheck to request a specific checkbox state."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Checking and Unchecking Controls",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Updates</label>')\n    updates = page.get_by_role(\"checkbox\", name=\"Updates\")\n    updates.check()\n    assert updates.is_checked()\n    updates.uncheck()\n    assert not updates.is_checked()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"radio\" name=\"plan\" value=\"basic\"> Basic</label>')\n    basic = page.get_by_role(\"radio\", name=\"Basic\")\n    basic.check()\n    assert basic.is_checked()\n    browser.close()"
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
