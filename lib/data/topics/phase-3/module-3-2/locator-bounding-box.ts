import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "locator-bounding-box",
  "title": "Reading a Locator's Bounding Box",
  "summary": "Read an element's position and dimensions with bounding_box.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "bounding_box returns the element's position and size relative to the main-frame viewport, or None when the element is not visible.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button style=\"width:120px;height:40px\">Save</button>')\n    box = page.get_by_role(\"button\", name=\"Save\").bounding_box()\n    assert box is not None\n    assert box[\"width\"] == 120\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div style=\"width:80px;height:30px\">Card</div>')\n    box = page.get_by_text(\"Card\").bounding_box()\n    assert box is not None\n    assert box[\"height\"] == 30\n    assert box[\"x\"] >= 0\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button style=\"width:120px;height:40px\">Save</button>')\n    box = page.get_by_role(\"button\", name=\"Save\").bounding_box()\n    assert box is not None\n    assert box[\"width\"] == 120\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create a visible element with fixed width and height. Read its bounding box, assert that it is not None, and check one dimension. Explain why exact coordinates can vary between environments.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Using bounding-box coordinates as a substitute for checking semantic behaviour",
      "fix": "Use bounding boxes only when position or size is part of the requirement; prefer role and state assertions otherwise."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Reading a Locator's Bounding Box",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<button style=\"width:120px;height:40px\">Save</button>')\n    box = page.get_by_role(\"button\", name=\"Save\").bounding_box()\n    assert box is not None\n    assert box[\"width\"] == 120\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<div style=\"width:80px;height:30px\">Card</div>')\n    box = page.get_by_text(\"Card\").bounding_box()\n    assert box is not None\n    assert box[\"height\"] == 30\n    assert box[\"x\"] >= 0\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Locators",
      "url": "https://playwright.dev/python/docs/locators"
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
    "locators",
    "browser-testing"
  ]
};

export default topic;
