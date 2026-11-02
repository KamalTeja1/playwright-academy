import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "set-checked",
  "title": "Setting a Checked State",
  "summary": "Use set_checked to request a checkbox or radio control's final state.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "set_checked(True) checks a control and set_checked(False) unchecks it. It makes the desired state explicit.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Terms</label>')\n    terms = page.get_by_role(\"checkbox\", name=\"Terms\")\n    terms.set_checked(True)\n    assert terms.is_checked()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\" checked> Alerts</label>')\n    alerts = page.get_by_role(\"checkbox\", name=\"Alerts\")\n    alerts.set_checked(False)\n    assert not alerts.is_checked()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Terms</label>')\n    terms = page.get_by_role(\"checkbox\", name=\"Terms\")\n    terms.set_checked(True)\n    assert terms.is_checked()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a checkbox that starts checked. Use set_checked(False), then set_checked(True), and assert the state after each operation.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing a non-boolean value to set_checked",
      "fix": "Pass True or False to state the required checked value clearly."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Setting a Checked State",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\"> Terms</label>')\n    terms = page.get_by_role(\"checkbox\", name=\"Terms\")\n    terms.set_checked(True)\n    assert terms.is_checked()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<label><input type=\"checkbox\" checked> Alerts</label>')\n    alerts = page.get_by_role(\"checkbox\", name=\"Alerts\")\n    alerts.set_checked(False)\n    assert not alerts.is_checked()\n    browser.close()"
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
