import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "dblclick",
  "title": "Double-Clicking",
  "summary": "Use dblclick when the page requires a double-click interaction.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "A locator's dblclick method performs a double-click on the matched element. Use it only when the interface expects that gesture.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button ondblclick=\\\"this.textContent='Opened'\\\">Open item</button>\")\n    page.get_by_role(\"button\", name=\"Open item\").dblclick()\n    assert page.get_by_role(\"button\", name=\"Opened\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<div ondblclick=\\\"this.dataset.open='yes'\\\">Item</div>\")\n    item = page.get_by_text(\"Item\")\n    item.dblclick()\n    assert item.get_attribute(\"data-open\") == \"yes\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button ondblclick=\\\"this.textContent='Opened'\\\">Open item</button>\")\n    page.get_by_role(\"button\", name=\"Open item\").dblclick()\n    assert page.get_by_role(\"button\", name=\"Opened\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a local element that responds to a double-click by changing its text. Use dblclick and assert the changed text.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using dblclick when the page expects a normal click",
      "fix": "Match the interaction the interface requires; use click for a single-click action."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Double-Clicking",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button ondblclick=\\\"this.textContent='Opened'\\\">Open item</button>\")\n    page.get_by_role(\"button\", name=\"Open item\").dblclick()\n    assert page.get_by_role(\"button\", name=\"Opened\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<div ondblclick=\\\"this.dataset.open='yes'\\\">Item</div>\")\n    item = page.get_by_text(\"Item\")\n    item.dblclick()\n    assert item.get_attribute(\"data-open\") == \"yes\"\n    browser.close()"
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
