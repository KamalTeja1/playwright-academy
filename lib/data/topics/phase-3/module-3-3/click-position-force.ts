import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "click-position-force",
  "title": "Click Position and Force",
  "summary": "Choose a position within an element or force a click when actionability checks are intentionally bypassed.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "The position option clicks relative to the element's top-left corner. force=True bypasses some actionability checks and should be used sparingly.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button style=\\\"width:120px;height:60px\\\" onclick=\\\"this.dataset.clicked='yes'\\\">Target</button>\")\n    target = page.get_by_role(\"button\", name=\"Target\")\n    target.click(position={\"x\": 20, \"y\": 15})\n    assert target.get_attribute(\"data-clicked\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Done'\\\">Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click(force=True)\n    assert page.get_by_role(\"button\", name=\"Done\").is_visible()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button style=\\\"width:120px;height:60px\\\" onclick=\\\"this.dataset.clicked='yes'\\\">Target</button>\")\n    target = page.get_by_role(\"button\", name=\"Target\")\n    target.click(position={\"x\": 20, \"y\": 15})\n    assert target.get_attribute(\"data-clicked\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a large button that records a click. Click at a position inside it and assert the event occurred. Explain why force=True can hide an overlay or another actionability problem.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using force=True to make an unexplained click failure pass",
      "fix": "Investigate actionability and overlays first; force a click only when bypassing those checks is intentional."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Click Position and Force",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button style=\\\"width:120px;height:60px\\\" onclick=\\\"this.dataset.clicked='yes'\\\">Target</button>\")\n    target = page.get_by_role(\"button\", name=\"Target\")\n    target.click(position={\"x\": 20, \"y\": 15})\n    assert target.get_attribute(\"data-clicked\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Done'\\\">Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click(force=True)\n    assert page.get_by_role(\"button\", name=\"Done\").is_visible()\n    browser.close()"
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
  "difficulty": "Intermediate",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
