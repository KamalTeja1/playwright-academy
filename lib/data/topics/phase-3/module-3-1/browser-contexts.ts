import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "browser-contexts",
  "title": "Browser Contexts",
  "summary": "Create isolated browser sessions with separate cookies and storage.",
  "whyItMatters": "Contexts let tests keep user sessions separate without launching a new browser process for every user.",
  "notes": "A browser context is an isolated session inside a browser. Its cookies, local storage, and permissions are separate from other contexts.\n\n### Create two contexts\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first = browser.new_context()\n    second = browser.new_context()\n    first_page = first.new_page()\n    second_page = second.new_page()\n    first_page.set_content(\"<p>First session</p>\")\n    second_page.set_content(\"<p>Second session</p>\")\n    assert first_page.locator(\"p\").inner_text() != second_page.locator(\"p\").inner_text()\n    browser.close()\n~~~\n\nEach context can contain one or more pages.\n\n### Use a context for each independent session\n\nContexts are useful when a test needs separate users or browser state. They are lighter than separate browser processes.\n\nClose a context when you finish with it. Closing the browser also closes its contexts.\n\n### The takeaway\n\nUse contexts to isolate browser sessions. Create separate contexts when tests need different cookies or storage.",
  "handsOn": "Create two isolated browser contexts.\n\n### Create contexts_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first_context = browser.new_context()\n    second_context = browser.new_context()\n    first_page = first_context.new_page()\n    second_page = second_context.new_page()\n    first_page.set_content(\"<title>First</title>\")\n    second_page.set_content(\"<title>Second</title>\")\n    assert first_page.title() == \"First\"\n    assert second_page.title() == \"Second\"\n    browser.close()\n~~~\n\nRun it with python contexts_check.py.\n\n### Deliverable\n\nExplain why the contexts are separate sessions even though they use one browser.",
  "challenge": "Create two contexts and set different page content in each.\n\n1. Launch one browser\n2. Create two contexts from it\n3. Create one page in each context\n4. Check that each page has its own title\n5. Close the browser after both checks\n\nThen explain how contexts help isolate users in browser tests.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Sharing one context when tests need separate user state",
      "fix": "Create a separate context for each independent browser session."
    },
    {
      "mistake": "Assuming a new page creates a new context",
      "fix": "Create a context explicitly when session isolation is needed."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Create separate sessions",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first = browser.new_context()\n    second = browser.new_context()\n    first_page = first.new_page()\n    second_page = second.new_page()\n    first_page.set_content(\"<title>First</title>\")\n    second_page.set_content(\"<title>Second</title>\")\n    assert first_page.title() == \"First\"\n    assert second_page.title() == \"Second\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Close a context explicitly",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    page = context.new_page()\n    page.set_content(\"<p>Session</p>\")\n    assert page.locator(\"p\").is_visible()\n    context.close()\n    browser.close()"
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
