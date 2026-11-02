import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-proxy",
  "title": "Launching Through a Proxy",
  "summary": "Configure a browser proxy when a test environment requires one.",
  "whyItMatters": "Some test environments route browser traffic through a proxy, and the proxy setting belongs in launch configuration rather than individual locators.",
  "notes": "A proxy routes browser network traffic through another server. Playwright accepts proxy settings when launching a browser.\n\n### Configure an optional proxy\n\n~~~python\nimport os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    proxy_server = os.environ.get(\"PW_PROXY_SERVER\")\n    if proxy_server:\n        options[\"proxy\"] = {\"server\": proxy_server}\n\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Proxy configuration loaded</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nWithout PW_PROXY_SERVER, the example launches normally. A configured proxy must be reachable and appropriate for the test environment.\n\n### Keep credentials private\n\nIf a proxy requires authentication, do not place a password in source code or terminal history. Use protected configuration and follow your organisation's rules.\n\n### The takeaway\n\nSet a proxy only when the environment requires one. Keep proxy configuration external and avoid exposing credentials.",
  "handsOn": "Make proxy configuration optional.\n\n### Create proxy_check.py\n\n~~~python\nimport os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    proxy_server = os.environ.get(\"PW_PROXY_SERVER\")\n    if proxy_server:\n        options[\"proxy\"] = {\"server\": proxy_server}\n\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Ready</p>\")\n    assert page.locator(\"p\").inner_text() == \"Ready\"\n    browser.close()\n~~~\n\nRun without PW_PROXY_SERVER for a direct launch. Configure it only if you have an authorized proxy.\n\n### Deliverable\n\nExplain why a proxy should be configured only when the test environment needs it.",
  "challenge": "Create a browser launch script with optional proxy configuration.\n\n1. Read the proxy server from PW_PROXY_SERVER\n2. Pass the proxy option only when configured\n3. Load local HTML and assert a paragraph\n4. Do not put credentials in the script\n5. Explain what might happen if the configured proxy is unreachable\n\nUse a proxy only if you are authorized to use it.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Hard-coding proxy credentials in a script",
      "fix": "Use protected configuration and keep credentials out of source control."
    },
    {
      "mistake": "Configuring a proxy that is not required or reachable",
      "fix": "Set proxy options only for an authorized, available test environment."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Launch without a proxy by default",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Direct session</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Apply an optional proxy setting",
      "code": "import os\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    options = {}\n    proxy_server = os.environ.get(\"PW_PROXY_SERVER\")\n    if proxy_server:\n        options[\"proxy\"] = {\"server\": proxy_server}\n    browser = p.chromium.launch(**options)\n    page = browser.new_page()\n    page.set_content(\"<p>Configured session</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
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
