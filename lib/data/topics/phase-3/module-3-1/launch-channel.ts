import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-channel",
  "title": "Selecting a Browser Channel",
  "summary": "Launch a branded browser channel such as installed Chrome when it is available.",
  "whyItMatters": "A browser channel lets you test against a particular installed browser build rather than Playwright's bundled Chromium.",
  "notes": "The channel launch option selects a browser channel. For Chromium, common choices include Chrome and Edge channels when they are installed.\n\n### Launch a channel\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(channel=\"chrome\")\n    page = browser.new_page()\n    page.set_content(\"<title>Chrome channel</title>\")\n    assert page.title() == \"Chrome channel\"\n    browser.close()\n~~~\n\nThis requires the matching browser channel to be available on the machine.\n\n### Use the bundled browser by default\n\nFor a portable starting point, launch Chromium without a channel. Playwright's installed browser binaries are designed to work with the installed Playwright package.\n\n### The takeaway\n\nSelect a channel when the test specifically needs that installed browser. Otherwise, use Playwright's bundled browser for more predictable setup.",
  "handsOn": "Choose a channel through an environment variable, with a bundled-browser fallback.\n\n### Create channel_check.py\n\n~~~python\nimport os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    channel = os.environ.get(\"PW_CHANNEL\")\n    if channel:\n        options[\"channel\"] = channel\n\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Channel check</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nRun without PW_CHANNEL to use bundled Chromium. Set it only when the matching channel is installed.\n\n### Deliverable\n\nExplain when using a named browser channel is helpful.",
  "challenge": "Create a script that accepts an optional browser channel from the environment.\n\n1. Read PW_CHANNEL with os.environ.get\n2. Add the channel launch option only when a value exists\n3. Otherwise launch bundled Chromium\n4. Load local content and assert a result\n5. Explain why a named channel may not be installed on every machine\n\nUse only a channel available in your environment.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Selecting a channel that is not installed",
      "fix": "Use a channel available on the machine or launch bundled Chromium."
    },
    {
      "mistake": "Using a branded channel when the test only needs standard Chromium",
      "fix": "Prefer the bundled browser unless the channel itself is part of the requirement."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Launch bundled Chromium",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Bundled browser</title>\")\n    assert page.title() == \"Bundled browser\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use an optional channel",
      "code": "import os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    channel = os.environ.get(\"PW_CHANNEL\")\n    if channel:\n        options[\"channel\"] = channel\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Channel selected</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
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
  "difficulty": "Intermediate",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
