import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-executable-path",
  "title": "Choosing a Browser Executable",
  "summary": "Launch Playwright with a specific browser executable only when the environment requires it.",
  "whyItMatters": "A custom executable can support specialised setups, but it may not be compatible with the Playwright version.",
  "notes": "The executable_path launch option selects a browser binary by its filesystem path.\n\n### Use a configured executable\n\n~~~python\nimport os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    executable = os.environ.get(\"CHROMIUM_EXECUTABLE\")\n    if executable:\n        options[\"executable_path\"] = executable\n\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Browser ready</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nIf the environment variable is absent, Playwright uses its bundled browser. If a custom path is supplied, the file must exist and be compatible.\n\n### Prefer the bundled browser\n\nPlaywright's bundled browser is the most predictable option. Use a custom executable only when you have a clear reason and have verified compatibility.\n\n### The takeaway\n\nTreat executable_path as an environment-specific option. Keep it configurable and prefer the bundled browser for ordinary tests.",
  "handsOn": "Add an optional executable path without hard-coding a machine-specific location.\n\n### Create executable_check.py\n\n~~~python\nimport os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    executable = os.environ.get(\"CHROMIUM_EXECUTABLE\")\n    if executable:\n        options[\"executable_path\"] = executable\n\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<h1>Executable check</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Executable check\").is_visible()\n    browser.close()\n~~~\n\nRun without the variable to use bundled Chromium. Set it only to a compatible executable.\n\n### Deliverable\n\nExplain why an absolute executable path is usually not portable between machines.",
  "challenge": "Write a script that uses an optional CHROMIUM_EXECUTABLE environment variable.\n\n1. Build launch options only when the variable is set\n2. Otherwise use the bundled browser\n3. Load local HTML and assert a heading\n4. Close the browser\n5. Explain what can go wrong with an incompatible executable\n\nDo not paste a machine-specific path into shared test code.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Hard-coding an executable path that only exists on one machine",
      "fix": "Read an optional path from environment configuration or use the bundled browser."
    },
    {
      "mistake": "Using a browser binary incompatible with the installed Playwright version",
      "fix": "Prefer Playwright's bundled browser unless compatibility is verified."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Use the bundled browser",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Bundled</p>\")\n    assert page.locator(\"p\").inner_text() == \"Bundled\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Configure an optional executable",
      "code": "import os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    executable = os.environ.get(\"CHROMIUM_EXECUTABLE\")\n    if executable:\n        options[\"executable_path\"] = executable\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Configured</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
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
