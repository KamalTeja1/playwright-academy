import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "tap",
  "title": "Tapping Touch Targets",
  "summary": "Use locator.tap to send a touch tap to an element.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "A page must be created in a context with touch enabled before locator.tap can be used.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Tapped\\'\">Continue</button>')\n    page.get_by_role(\"button\", name=\"Continue\").tap()\n    assert page.get_by_role(\"button\", name=\"Tapped\").is_visible()\n    context.close()\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<div role=\"button\" tabindex=\"0\" onclick=\"this.dataset.tapped=\\'yes\\'\">Card</div>')\n    card = page.get_by_role(\"button\", name=\"Card\")\n    card.tap()\n    assert card.get_attribute(\"data-tapped\") == \"yes\"\n    context.close()\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Tapped\\'\">Continue</button>')\n    page.get_by_role(\"button\", name=\"Continue\").tap()\n    assert page.get_by_role(\"button\", name=\"Tapped\").is_visible()\n    context.close()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Enable touch in the browser context, create a button that changes its text on click, tap it, and assert the updated text.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Calling tap in a context without touch enabled",
      "fix": "Create the browser context with has_touch=True before creating the page."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Tapping Touch Targets",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<button onclick=\"this.textContent=\\'Tapped\\'\">Continue</button>')\n    page.get_by_role(\"button\", name=\"Continue\").tap()\n    assert page.get_by_role(\"button\", name=\"Tapped\").is_visible()\n    context.close()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(has_touch=True)\n    page = context.new_page()\n    page.set_content('<div role=\"button\" tabindex=\"0\" onclick=\"this.dataset.tapped=\\'yes\\'\">Card</div>')\n    card = page.get_by_role(\"button\", name=\"Card\")\n    card.tap()\n    assert card.get_attribute(\"data-tapped\") == \"yes\"\n    context.close()\n    browser.close()"
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
