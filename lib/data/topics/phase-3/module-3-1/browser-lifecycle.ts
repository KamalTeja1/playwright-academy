import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "browser-lifecycle",
  "title": "The Browser Lifecycle",
  "summary": "Start Playwright, launch a browser, use it, and close resources reliably.",
  "whyItMatters": "Explicit resource cleanup prevents leftover browser processes and makes scripts predictable.",
  "notes": "A browser automation script has a simple lifecycle: start Playwright, launch a browser, create pages, then close resources.\n\n### Start and launch\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Lifecycle</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Lifecycle\").is_visible()\n    browser.close()\n~~~\n\nThe with block manages the Playwright driver. Close the browser when you finish using it.\n\n### Prefer a context manager\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    try:\n        page = browser.new_page()\n        page.set_content(\"<p>Done</p>\")\n        assert page.locator(\"p\").inner_text() == \"Done\"\n    finally:\n        browser.close()\n~~~\n\nThe finally block closes the browser even if an assertion fails.\n\n### Browser, context, and page\n\nA browser is the running browser process. A context is an isolated browser session. A page is a tab within a context. The next topics explore contexts and pages.\n\n### The takeaway\n\nMake resource ownership clear. Start Playwright with its context manager and close browsers when finished.",
  "handsOn": "Practise closing the browser after a check.\n\n### Create lifecycle_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    try:\n        page = browser.new_page()\n        page.set_content(\"<p>Ready</p>\")\n        assert page.locator(\"p\").inner_text() == \"Ready\"\n    finally:\n        browser.close()\n~~~\n\nRun it with python lifecycle_check.py.\n\n### Deliverable\n\nExplain what the with block manages and why browser.close is in finally.",
  "challenge": "Write a script that opens two pages, checks one element in each, and closes the browser even if a check fails.\n\n1. Use sync_playwright as a context manager\n2. Create and check both pages\n3. Put browser cleanup in a finally block\n4. Keep the two checks independent\n5. Explain which resource is closed by browser.close\n\nUse only local HTML.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Leaving a launched browser open after the script finishes",
      "fix": "Close the browser explicitly or use a reliable cleanup structure."
    },
    {
      "mistake": "Closing Playwright before using the browser",
      "fix": "Keep browser work inside the sync_playwright context."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Close the browser explicitly",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Ready</p>\")\n    assert page.locator(\"p\").inner_text() == \"Ready\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Close even if a check fails",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    try:\n        page = browser.new_page()\n        page.set_content(\"<h1>Safe cleanup</h1>\")\n        assert page.locator(\"h1\").is_visible()\n    finally:\n        browser.close()"
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
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
