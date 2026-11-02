import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-headless",
  "title": "Launching Headless Browsers",
  "summary": "Run a browser without opening a visible window.",
  "whyItMatters": "Headless runs suit automated checks and environments without a desktop display.",
  "notes": "A headless browser runs without showing a visible browser window. It is useful for automated tests and continuous integration.\n\n### Launch headless\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=True)\n    page = browser.new_page()\n    page.set_content(\"<h1>Headless check</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Headless check\").is_visible()\n    browser.close()\n~~~\n\nHeadless mode is the default for Playwright's browser launches, but writing it explicitly can make the intention clear.\n\n### Use headed mode for debugging\n\nSet headless=False to display a browser window when your environment has a graphical display. Headed mode can help you observe interactions while debugging.\n\n### The takeaway\n\nUse headless mode for routine automation. Use headed mode when you need to watch the browser and your environment supports a display.",
  "handsOn": "Run a local page check in headless mode.\n\n### Create headless_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=True)\n    page = browser.new_page()\n    page.set_content(\"<p>Runs without a visible window</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nRun it with python headless_check.py.\n\n### Deliverable\n\nExplain why headless mode is useful on a build server.",
  "challenge": "Write a headless script that checks two elements in local HTML.\n\n1. Launch Chromium with headless=True\n2. Load local content\n3. Assert that the page title and a button are present\n4. Close the browser\n5. Describe when you would switch to headed mode for debugging\n\nKeep the example independent of an external website.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Expecting a visible window from a headless launch",
      "fix": "Use headed mode in a graphical environment when visual debugging is needed."
    },
    {
      "mistake": "Assuming headed mode works without a display",
      "fix": "Use headless mode on machines without a desktop display."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Launch explicitly in headless mode",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=True)\n    page = browser.new_page()\n    page.set_content(\"<title>Headless</title>\")\n    assert page.title() == \"Headless\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use the default headless launch",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Automated check</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Automated check\").is_visible()\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — API Reference",
      "url": "https://playwright.dev/python/docs/api/class-playwright"
    },
    {
      "title": "Playwright for Python — Getting Started",
      "url": "https://playwright.dev/python/docs/intro"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
