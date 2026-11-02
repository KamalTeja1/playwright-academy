import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "scroll-wheel",
  "title": "Scrolling with the Mouse Wheel",
  "summary": "Use wheel input to scroll a page or a specific scrollable area.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "Mouse wheel input scrolls the page or scrollable container under the pointer. Use a locator or element state to verify the resulting scroll.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Scroll page</div>')\n    page.mouse.wheel(0, 400)\n    assert page.evaluate(\"window.scrollY > 0\")\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"box\" style=\"height:100px;overflow:auto\"><div style=\"height:500px\">Content</div></div>')\n    box = page.locator(\"#box\")\n    bounds = box.bounding_box()\n    assert bounds is not None\n    page.mouse.move(bounds[\"x\"] + 20, bounds[\"y\"] + 20)\n    page.mouse.wheel(0, 150)\n    assert box.evaluate(\"(element) => element.scrollTop > 0\")\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Scroll page</div>')\n    page.mouse.wheel(0, 400)\n    assert page.evaluate(\"window.scrollY > 0\")\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a scrollable container with overflowing content. Move the pointer over it, use the mouse wheel, and assert the container's scrollTop increased.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Sending wheel input while the pointer is over the wrong scroll container",
      "fix": "Move the pointer over the intended scrollable area before sending the wheel input."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Scrolling with the Mouse Wheel",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Scroll page</div>')\n    page.mouse.wheel(0, 400)\n    assert page.evaluate(\"window.scrollY > 0\")\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div id=\"box\" style=\"height:100px;overflow:auto\"><div style=\"height:500px\">Content</div></div>')\n    box = page.locator(\"#box\")\n    bounds = box.bounding_box()\n    assert bounds is not None\n    page.mouse.move(bounds[\"x\"] + 20, bounds[\"y\"] + 20)\n    page.mouse.wheel(0, 150)\n    assert box.evaluate(\"(element) => element.scrollTop > 0\")\n    browser.close()"
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
