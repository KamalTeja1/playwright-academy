import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "manual-mouse-drag",
  "title": "Dragging with Mouse Events",
  "summary": "Control a drag sequence manually with mouse move, down, and up.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "Manual dragging gives control over pointer movement when drag_to does not match the interface behaviour. Coordinates are page-relative.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" style=\"width:60px;height:40px\">Move</div>\n<div id=\"target\" style=\"margin-top:40px;width:100px;height:60px\"\n     onmouseup=\"this.dataset.released='yes'\">Target</div>\"\"\")\n    source_box = page.locator(\"#source\").bounding_box()\n    target_box = page.locator(\"#target\").bounding_box()\n    assert source_box is not None and target_box is not None\n    page.mouse.move(source_box[\"x\"] + 20, source_box[\"y\"] + 20)\n    page.mouse.down()\n    page.mouse.move(target_box[\"x\"] + 20, target_box[\"y\"] + 20, steps=5)\n    page.mouse.up()\n    assert page.locator(\"#target\").get_attribute(\"data-released\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"area\" style=\"width:240px;height:120px\"\n     onmouseup=\"this.dataset.dragged='yes'\">Canvas</div>\"\"\")\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    page.mouse.move(box[\"x\"] + 10, box[\"y\"] + 10)\n    page.mouse.down()\n    page.mouse.move(box[\"x\"] + 100, box[\"y\"] + 60, steps=4)\n    page.mouse.up()\n    assert page.locator(\"#area\").get_attribute(\"data-dragged\") == \"yes\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" style=\"width:60px;height:40px\">Move</div>\n<div id=\"target\" style=\"margin-top:40px;width:100px;height:60px\"\n     onmouseup=\"this.dataset.released='yes'\">Target</div>\"\"\")\n    source_box = page.locator(\"#source\").bounding_box()\n    target_box = page.locator(\"#target\").bounding_box()\n    assert source_box is not None and target_box is not None\n    page.mouse.move(source_box[\"x\"] + 20, source_box[\"y\"] + 20)\n    page.mouse.down()\n    page.mouse.move(target_box[\"x\"] + 20, target_box[\"y\"] + 20, steps=5)\n    page.mouse.up()\n    assert page.locator(\"#target\").get_attribute(\"data-released\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Use bounding boxes and the mouse API to move from one local element to another. Assert the destination records the mouse release.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Forgetting to release the mouse button after a manual drag",
      "fix": "Call mouse.up after moving to the destination so the drag sequence completes."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Dragging with Mouse Events",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" style=\"width:60px;height:40px\">Move</div>\n<div id=\"target\" style=\"margin-top:40px;width:100px;height:60px\"\n     onmouseup=\"this.dataset.released='yes'\">Target</div>\"\"\")\n    source_box = page.locator(\"#source\").bounding_box()\n    target_box = page.locator(\"#target\").bounding_box()\n    assert source_box is not None and target_box is not None\n    page.mouse.move(source_box[\"x\"] + 20, source_box[\"y\"] + 20)\n    page.mouse.down()\n    page.mouse.move(target_box[\"x\"] + 20, target_box[\"y\"] + 20, steps=5)\n    page.mouse.up()\n    assert page.locator(\"#target\").get_attribute(\"data-released\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"area\" style=\"width:240px;height:120px\"\n     onmouseup=\"this.dataset.dragged='yes'\">Canvas</div>\"\"\")\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    page.mouse.move(box[\"x\"] + 10, box[\"y\"] + 10)\n    page.mouse.down()\n    page.mouse.move(box[\"x\"] + 100, box[\"y\"] + 60, steps=4)\n    page.mouse.up()\n    assert page.locator(\"#area\").get_attribute(\"data-dragged\") == \"yes\"\n    browser.close()"
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
  "estimatedMinutes": 30,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
