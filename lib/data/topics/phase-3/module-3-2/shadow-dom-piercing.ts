import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "shadow-dom-piercing",
  "title": "Locating Elements in Shadow DOM",
  "summary": "Use Playwright locators to find elements inside open shadow roots.",
  "whyItMatters": "The right locator makes a browser test clearer, more reliable, and easier to maintain.",
  "notes": "Most Playwright locators pierce open shadow DOM by default. XPath does not pierce shadow roots, and closed shadow roots are not accessible this way.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nhtml = \"\"\"<my-card></my-card>\n<script>\ncustomElements.define(\"my-card\", class extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: \"open\"}).innerHTML = \"<button>Inside</button>\";\n  }\n});\n</script>\"\"\"\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(html)\n    button = page.get_by_role(\"button\", name=\"Inside\")\n    assert button.is_visible()\n    browser.close()\n~~~\n\nThis self-contained page keeps the example focused and repeatable.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nhtml = \"\"\"<my-panel></my-panel>\n<script>\ncustomElements.define(\"my-panel\", class extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: \"open\"}).innerHTML = \"<span>Shadow text</span>\";\n  }\n});\n</script>\"\"\"\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(html)\n    text = page.get_by_text(\"Shadow text\")\n    assert text.is_visible()\n    browser.close()\n~~~\n\nChoose the locator operation that expresses the test's purpose. When a locator can match several elements, narrow it deliberately.\n\n### The takeaway\n\nUse locators that are specific and understandable. Assert the result your test needs rather than relying on page structure alone.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nhtml = \"\"\"<my-card></my-card>\n<script>\ncustomElements.define(\"my-card\", class extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: \"open\"}).innerHTML = \"<button>Inside</button>\";\n  }\n});\n</script>\"\"\"\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(html)\n    button = page.get_by_role(\"button\", name=\"Inside\")\n    assert button.is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator selects and what the assertion verifies.",
  "challenge": "Create a custom element with an open shadow root containing a labelled button. Locate it by role and name, then explain why XPath does not find elements through shadow roots.",
  "proTips": [
    "Prefer a role and accessible name for user-facing controls.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable locator examples.",
    "Check locator counts when uniqueness matters."
  ],
  "commonMistakes": [
    {
      "mistake": "Expecting XPath to pierce a shadow root",
      "fix": "Use Playwright's supported locators for open shadow DOM; XPath does not pierce shadow roots."
    },
    {
      "mistake": "Using a locator without asserting what it matched",
      "fix": "Check the intended element's count, state, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Locating Elements in Shadow DOM",
      "code": "from playwright.sync_api import sync_playwright\n\nhtml = \"\"\"<my-card></my-card>\n<script>\ncustomElements.define(\"my-card\", class extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: \"open\"}).innerHTML = \"<button>Inside</button>\";\n  }\n});\n</script>\"\"\"\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(html)\n    button = page.get_by_role(\"button\", name=\"Inside\")\n    assert button.is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nhtml = \"\"\"<my-panel></my-panel>\n<script>\ncustomElements.define(\"my-panel\", class extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: \"open\"}).innerHTML = \"<span>Shadow text</span>\";\n  }\n});\n</script>\"\"\"\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(html)\n    text = page.get_by_text(\"Shadow text\")\n    assert text.is_visible()\n    browser.close()"
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
  "estimatedMinutes": 30,
  "tags": [
    "python",
    "playwright",
    "locators",
    "browser-testing"
  ]
};

export default topic;
