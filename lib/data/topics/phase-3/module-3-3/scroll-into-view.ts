import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "scroll-into-view",
  "title": "Scrolling an Element into View",
  "summary": "Bring a locator into the viewport with scroll_into_view_if_needed.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "scroll_into_view_if_needed scrolls an element when it is outside the viewport. Locator actions often scroll automatically, but this method is useful when the scroll itself is part of the setup.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:900px\"></div><button>Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.scroll_into_view_if_needed()\n    assert button.is_visible()\n    assert button.bounding_box()[\"y\"] < 200\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:700px\"></div><h2>Footer</h2>')\n    footer = page.get_by_role(\"heading\", name=\"Footer\")\n    footer.scroll_into_view_if_needed()\n    assert footer.is_visible()\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:900px\"></div><button>Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.scroll_into_view_if_needed()\n    assert button.is_visible()\n    assert button.bounding_box()[\"y\"] < 200\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Place a button below a tall spacer. Scroll it into view and assert it is visible before clicking it.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Assuming is_visible means the element is inside the current viewport",
      "fix": "Use scroll_into_view_if_needed when viewport placement matters, then check its state."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Scrolling an Element into View",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:900px\"></div><button>Continue</button>')\n    button = page.get_by_role(\"button\", name=\"Continue\")\n    button.scroll_into_view_if_needed()\n    assert button.is_visible()\n    assert button.bounding_box()[\"y\"] < 200\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page(viewport={\"width\": 400, \"height\": 200})\n    page.set_content('<div style=\"height:700px\"></div><h2>Footer</h2>')\n    footer = page.get_by_role(\"heading\", name=\"Footer\")\n    footer.scroll_into_view_if_needed()\n    assert footer.is_visible()\n    browser.close()"
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
