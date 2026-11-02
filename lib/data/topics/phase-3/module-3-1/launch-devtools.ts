import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-devtools",
  "title": "Launching with Developer Tools",
  "summary": "Open Chromium developer tools while debugging a headed browser session.",
  "whyItMatters": "Developer tools can help inspect page markup, styles, and browser state while diagnosing a test.",
  "notes": "The devtools launch option opens Chromium's developer tools. It is intended for interactive debugging.\n\n### Launch with developer tools\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False, devtools=True)\n    page = browser.new_page()\n    page.set_content(\"<h1>Inspect this page</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Inspect this page\").is_visible()\n    browser.close()\n~~~\n\nThis needs a graphical desktop session. It is not suitable for a headless build server.\n\n### Keep the run observable\n\nThe browser window and developer tools help you inspect what is rendered. The test should still make an assertion so its result does not depend only on visual inspection.\n\n### The takeaway\n\nUse devtools=True for headed Chromium debugging when a display is available. Keep automated checks independent of developer tools.",
  "handsOn": "Try a headed Chromium session with developer tools.\n\n### Create devtools_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False, devtools=True)\n    page = browser.new_page()\n    page.set_content(\"<h1>Inspect me</h1>\")\n    assert page.locator(\"h1\").inner_text() == \"Inspect me\"\n    browser.close()\n~~~\n\nRun it on a machine with a graphical desktop. If you are in a headless environment, do not use this option.\n\n### Deliverable\n\nExplain why developer tools are useful during debugging but are not required for automated checks.",
  "challenge": "Create a headed Chromium script that loads local HTML and checks a heading.\n\n1. Launch with headless=False and devtools=True\n2. Load the page using page.set_content\n3. Assert the heading text\n4. Close the browser\n5. Explain why this script needs a graphical environment\n\nDo not make the assertion depend on inspecting the page by eye.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Enabling developer tools in a headless environment",
      "fix": "Use a graphical session for devtools or run headless without it."
    },
    {
      "mistake": "Relying only on visual inspection",
      "fix": "Keep assertions that check the expected page behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Open Chromium developer tools",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False, devtools=True)\n    page = browser.new_page()\n    page.set_content(\"<h1>Debug view</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Debug view\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use a headed browser for inspection",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False)\n    page = browser.new_page()\n    page.set_content(\"<title>Inspect</title>\")\n    assert page.title() == \"Inspect\"\n    browser.close()"
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
