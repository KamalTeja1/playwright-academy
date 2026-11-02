import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "mouse-click",
  "title": "Clicking with the Mouse API",
  "summary": "Use page.mouse.click when a coordinate-based mouse interaction is required.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "page.mouse.click sends a click at page coordinates. Prefer locator.click for ordinary element interactions because it includes actionability checks.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button id=\"target\" onclick=\"this.textContent=\\'Clicked\\'\">Target</button>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.mouse.click(box[\"x\"] + box[\"width\"] / 2, box[\"y\"] + box[\"height\"] / 2)\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"target\" style=\"width:100px;height:60px\" onclick=\"this.dataset.hit=\\'yes\\'\">Target</div>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.mouse.click(box[\"x\"] + 10, box[\"y\"] + 10, button=\"right\")\n    assert page.locator(\"#target\").get_attribute(\"data-hit\") == \"yes\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button id=\"target\" onclick=\"this.textContent=\\'Clicked\\'\">Target</button>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.mouse.click(box[\"x\"] + box[\"width\"] / 2, box[\"y\"] + box[\"height\"] / 2)\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a target with a click handler. Get its bounding box, click the centre with page.mouse, and assert the changed state. Explain when locator.click is preferable.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using coordinate clicks for a normal interaction with a stable locator",
      "fix": "Prefer locator.click for ordinary actions; use page.mouse when the coordinates themselves matter."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Clicking with the Mouse API",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button id=\"target\" onclick=\"this.textContent=\\'Clicked\\'\">Target</button>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.mouse.click(box[\"x\"] + box[\"width\"] / 2, box[\"y\"] + box[\"height\"] / 2)\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"target\" style=\"width:100px;height:60px\" onclick=\"this.dataset.hit=\\'yes\\'\">Target</div>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.mouse.click(box[\"x\"] + 10, box[\"y\"] + 10, button=\"right\")\n    assert page.locator(\"#target\").get_attribute(\"data-hit\") == \"yes\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Input",
      "url": "https://playwright.dev/python/docs/input"
    },
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
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
