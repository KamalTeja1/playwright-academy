import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "mouse-wheel",
  "title": "Using the Mouse Wheel",
  "summary": "Scroll a page or container with page.mouse.wheel.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "page.mouse.wheel sends horizontal and vertical scroll deltas at the pointer position. The page or container under the pointer receives the scroll.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Tall page</div>')\n    page.mouse.wheel(0, 300)\n    assert page.evaluate(\"window.scrollY\") > 0\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"width:1000px;height:100px\">Wide page</div>')\n    page.mouse.wheel(250, 0)\n    assert page.evaluate(\"window.scrollX\") > 0\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Tall page</div>')\n    page.mouse.wheel(0, 300)\n    assert page.evaluate(\"window.scrollY\") > 0\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a page that is taller than its viewport. Use mouse.wheel to scroll down and assert that window.scrollY increased.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Assuming a wheel delta is an exact final scroll position",
      "fix": "Assert the resulting scroll condition rather than expecting the delta to equal the final position."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Using the Mouse Wheel",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:1000px\">Tall page</div>')\n    page.mouse.wheel(0, 300)\n    assert page.evaluate(\"window.scrollY\") > 0\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"width:1000px;height:100px\">Wide page</div>')\n    page.mouse.wheel(250, 0)\n    assert page.evaluate(\"window.scrollX\") > 0\n    browser.close()"
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
