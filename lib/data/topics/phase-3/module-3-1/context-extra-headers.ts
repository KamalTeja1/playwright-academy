import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "context-extra-headers",
  "title": "Extra HTTP Headers",
  "summary": "Set additional HTTP headers on requests made by pages in a browser context.",
  "whyItMatters": "Browser context options let tests set up predictable user and device conditions.",
  "notes": "extra_http_headers adds headers to requests from pages in the context. Header names should be valid and values should not contain secrets unless properly protected.\n\n### Configure the context\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(extra_http_headers={\"X-Test-Client\": \"playwright-practice\"})\n    page = context.new_page()\n    page.set_content(\"<h1>Context option</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Context option\").is_visible()\n    context.close()\n    browser.close()\n~~~\n\n### Choose a value for the scenario\n\n~~~python\ncontext = browser.new_context(extra_http_headers={\"X-Test-Client\": \"sample-run\"})\n~~~\n\nChoose the setting that matches the user or environment you need to test. Context options apply to pages created from that context.\n\n### Keep the test controlled\n\nUse context-level headers when related pages share the same request metadata. Set per-request headers separately when they should apply only once.\n\nUse local HTML for a focused example. When the option affects browser APIs or network behaviour, add a test that verifies the relevant page behaviour in an appropriate test environment.\n\n### The takeaway\n\nSet context options when creating the browser context. Keep the environment controlled and assert the behaviour that matters.",
  "handsOn": "Create a context with an explicit option.\n\n### Create a Python script\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(extra_http_headers={\"X-Test-Client\": \"playwright-practice\"})\n    page = context.new_page()\n    page.set_content(\"<title>context-extra-headers</title><h1>First example</h1>\")\n    assert page.get_by_role(\"heading\", name=\"First example\").is_visible()\n    context.close()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython context_option_check.py\n~~~\n\n### Deliverable\n\nExplain what the context setting controls and why it is configured before creating the page.",
  "challenge": "Write a small script that uses this browser context setting.\n\n1. Launch Chromium with the option configured for a test scenario\n2. Create a page and load local HTML\n3. Add an assertion for the expected page behaviour\n4. Close the context and browser\n5. Explain one limitation or safety consideration for this setting\n\nThen change the setting to a different valid value and describe what behaviour you would expect to change.",
  "proTips": [
    "Set context options before creating pages.",
    "Use a separate context when a test needs different browser state.",
    "Prefer local HTML for focused, repeatable examples.",
    "Keep generated output and credentials out of source control."
  ],
  "commonMistakes": [
    {
      "mistake": "Adding sensitive tokens as hard-coded extra headers",
      "fix": "Use protected configuration for credentials and avoid committing secrets."
    },
    {
      "mistake": "Changing context options after a page has already been created",
      "fix": "Create a new context with the required settings before opening its pages."
    },
    {
      "mistake": "Assuming an option alone proves the related page behaviour",
      "fix": "Add an assertion that checks the behaviour the test is meant to verify."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Configure extra http headers",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(extra_http_headers={\"X-Test-Client\": \"playwright-practice\"})\n    page = context.new_page()\n    page.set_content(\"<title>context-extra-headers</title><h1>First example</h1>\")\n    assert page.get_by_role(\"heading\", name=\"First example\").is_visible()\n    context.close()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Use an alternate context setting",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context(extra_http_headers={\"X-Test-Client\": \"sample-run\"})\n    page = context.new_page()\n    page.set_content(\"<title>context-extra-headers</title><h1>Second example</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Second example\").is_visible()\n    context.close()\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — BrowserContext API",
      "url": "https://playwright.dev/python/docs/api/class-browsercontext"
    },
    {
      "title": "Playwright for Python — Browser API",
      "url": "https://playwright.dev/python/docs/api/class-browser"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "browser-context",
    "context-options"
  ]
};

export default topic;
