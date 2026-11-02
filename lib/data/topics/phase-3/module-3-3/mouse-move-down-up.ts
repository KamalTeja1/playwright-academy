import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "mouse-move-down-up",
  "title": "Moving and Pressing the Mouse",
  "summary": "Control pointer movement and mouse button state with the page mouse API.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "page.mouse provides low-level pointer control. Its coordinates are relative to the page viewport.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"area\" style=\"width:200px;height:100px\" onmousemove=\"this.dataset.moved=\\'yes\\'\">Area</div>')\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    page.mouse.move(box[\"x\"] + 20, box[\"y\"] + 20)\n    assert page.locator(\"#area\").get_attribute(\"data-moved\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"area\" style=\"width:200px;height:100px\" onmousedown=\"this.dataset.down=\\'yes\\'\" onmouseup=\"this.dataset.up=\\'yes\\'\">Area</div>')\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    x, y = box[\"x\"] + 20, box[\"y\"] + 20\n    page.mouse.move(x, y)\n    page.mouse.down()\n    assert page.locator(\"#area\").get_attribute(\"data-down\") == \"yes\"\n    page.mouse.up()\n    assert page.locator(\"#area\").get_attribute(\"data-up\") == \"yes\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"area\" style=\"width:200px;height:100px\" onmousemove=\"this.dataset.moved=\\'yes\\'\">Area</div>')\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    page.mouse.move(box[\"x\"] + 20, box[\"y\"] + 20)\n    assert page.locator(\"#area\").get_attribute(\"data-moved\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Use a bounding box to move the mouse to a local element, press the mouse button, release it, and assert that the page recorded both events.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using viewport coordinates as though they were relative to the element",
      "fix": "Use page-relative coordinates or add an element's bounding-box position to a local offset."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Moving and Pressing the Mouse",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"area\" style=\"width:200px;height:100px\" onmousemove=\"this.dataset.moved=\\'yes\\'\">Area</div>')\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    page.mouse.move(box[\"x\"] + 20, box[\"y\"] + 20)\n    assert page.locator(\"#area\").get_attribute(\"data-moved\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"area\" style=\"width:200px;height:100px\" onmousedown=\"this.dataset.down=\\'yes\\'\" onmouseup=\"this.dataset.up=\\'yes\\'\">Area</div>')\n    box = page.locator(\"#area\").bounding_box()\n    assert box is not None\n    x, y = box[\"x\"] + 20, box[\"y\"] + 20\n    page.mouse.move(x, y)\n    page.mouse.down()\n    assert page.locator(\"#area\").get_attribute(\"data-down\") == \"yes\"\n    page.mouse.up()\n    assert page.locator(\"#area\").get_attribute(\"data-up\") == \"yes\"\n    browser.close()"
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
