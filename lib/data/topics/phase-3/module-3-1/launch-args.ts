import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-args",
  "title": "Browser Launch Arguments",
  "summary": "Pass supported command-line arguments when launching Chromium.",
  "whyItMatters": "Launch arguments can adjust browser startup for a specific need, but unsupported flags may cause unreliable behaviour.",
  "notes": "The args option passes command-line arguments to Chromium when it starts.\n\n### Pass an argument\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(args=[\"--disable-extensions\"])\n    page = browser.new_page()\n    page.set_content(\"<p>Browser started</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()\n~~~\n\nArguments are browser-specific. A Chromium flag may not apply to Firefox or WebKit.\n\n### Use arguments sparingly\n\nMost tests should use Playwright's browser, context, and page options rather than custom browser flags. A flag can change browser behaviour and make results differ from ordinary user sessions.\n\nDo not pass --no-sandbox unless you understand and accept its security implications in your environment.\n\n### The takeaway\n\nPass only documented, necessary arguments. Keep the browser close to its normal behaviour so tests remain representative.",
  "handsOn": "Launch Chromium with one argument.\n\n### Create launch_args.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(args=[\"--disable-extensions\"])\n    page = browser.new_page()\n    page.set_content(\"<h1>Launch option</h1>\")\n    assert page.locator(\"h1\").inner_text() == \"Launch option\"\n    browser.close()\n~~~\n\nRun it with python launch_args.py.\n\n### Deliverable\n\nExplain why browser-specific arguments should be kept minimal.",
  "challenge": "Write a script that launches Chromium with one non-essential browser argument.\n\n1. Pass the argument through the args list\n2. Load local HTML\n3. Assert one expected result\n4. Close the browser\n5. Explain why a flag for one browser may not work in another\n\nAvoid disabling browser security features for routine tests.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing a browser flag without checking which browser supports it",
      "fix": "Check the selected browser's documentation for each argument."
    },
    {
      "mistake": "Adding many flags to compensate for test setup issues",
      "fix": "Prefer Playwright's documented context and page options where possible."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Pass an argument to Chromium",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(args=[\"--disable-extensions\"])\n    page = browser.new_page()\n    page.set_content(\"<p>Ready</p>\")\n    assert page.locator(\"p\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use browser defaults instead",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Default launch</p>\")\n    assert page.locator(\"p\").inner_text() == \"Default launch\"\n    browser.close()"
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
