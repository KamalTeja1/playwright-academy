import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "touchscreen",
  "title": "Using the Touchscreen API",
  "summary": "Send a touch tap at viewport coordinates with the touchscreen API.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "The touchscreen API provides tap at page coordinates. Enable touch on the browser context before using it.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button style=\"width:160px;height:70px\" onclick=\"this.dataset.tapped=\\'yes\\'\">Tap area</button>')\n    box = page.get_by_role(\"button\", name=\"Tap area\").bounding_box()\n    assert box is not None\n    page.touchscreen.tap(box[\"x\"] + 30, box[\"y\"] + 30)\n    assert page.get_by_role(\"button\", name=\"Tap area\").get_attribute(\"data-tapped\") == \"yes\"\n    context.close()\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<div id=\"target\" style=\"width:120px;height:60px\" onclick=\"this.textContent=\\'Touched\\'\">Target</div>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.touchscreen.tap(box[\"x\"] + 20, box[\"y\"] + 20)\n    assert page.get_by_text(\"Touched\").is_visible()\n    context.close()\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button style=\"width:160px;height:70px\" onclick=\"this.dataset.tapped=\\'yes\\'\">Tap area</button>')\n    box = page.get_by_role(\"button\", name=\"Tap area\").bounding_box()\n    assert box is not None\n    page.touchscreen.tap(box[\"x\"] + 30, box[\"y\"] + 30)\n    assert page.get_by_role(\"button\", name=\"Tap area\").get_attribute(\"data-tapped\") == \"yes\"\n    context.close()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Enable touch, calculate a target's bounding box, tap inside it with page.touchscreen.tap, and assert the page changed.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Treating touchscreen coordinates as offsets from the element",
      "fix": "Touchscreen coordinates are relative to the page viewport; add the element position to an offset."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Using the Touchscreen API",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button style=\"width:160px;height:70px\" onclick=\"this.dataset.tapped=\\'yes\\'\">Tap area</button>')\n    box = page.get_by_role(\"button\", name=\"Tap area\").bounding_box()\n    assert box is not None\n    page.touchscreen.tap(box[\"x\"] + 30, box[\"y\"] + 30)\n    assert page.get_by_role(\"button\", name=\"Tap area\").get_attribute(\"data-tapped\") == \"yes\"\n    context.close()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<div id=\"target\" style=\"width:120px;height:60px\" onclick=\"this.textContent=\\'Touched\\'\">Target</div>')\n    box = page.locator(\"#target\").bounding_box()\n    assert box is not None\n    page.touchscreen.tap(box[\"x\"] + 20, box[\"y\"] + 20)\n    assert page.get_by_text(\"Touched\").is_visible()\n    context.close()\n    browser.close()"
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
