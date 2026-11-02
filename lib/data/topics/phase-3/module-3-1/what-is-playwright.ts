import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "what-is-playwright",
  "title": "What Is Playwright?",
  "summary": "Use Playwright to automate browsers and check web pages with Python.",
  "whyItMatters": "Playwright lets you test a web page through the same browser interactions a person uses.",
  "notes": "Playwright is a browser automation tool. It can open pages, interact with elements, and check what the browser displays.\n\n### A first browser script\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Hello, Playwright</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Hello, Playwright\").is_visible()\n    browser.close()\n~~~\n\nThis example uses local HTML, so it does not depend on a website or network connection.\n\n### What Playwright provides\n\n- Browser types such as Chromium, Firefox, and WebKit\n- Browser contexts for isolated sessions\n- Pages for interacting with documents\n- Locators for finding elements\n- Assertions and waiting behaviour through the browser API\n\n### A useful test habit\n\nCheck the result you expect, not only that the browser opened. Keep each script's setup and cleanup clear.\n\n### The takeaway\n\nPlaywright controls a browser through Python. Start with sync_playwright, create a browser and page, then interact with and check the page.",
  "handsOn": "Create a small script that opens local HTML.\n\n### Step 1: Create a Python file\n\n~~~bash\ntouch first_playwright.py\n~~~\n\n### Step 2: Add the script\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Welcome</h1>\")\n    heading = page.get_by_role(\"heading\", name=\"Welcome\")\n    assert heading.is_visible()\n    browser.close()\n~~~\n\n### Step 3: Run it\n\n~~~bash\npython first_playwright.py\n~~~\n\n### Deliverable\n\nKeep the script. Explain what the browser and page objects represent.",
  "challenge": "Create a script that loads a small HTML page with a heading and a paragraph.\n\n1. Use sync_playwright and launch Chromium\n2. Load the HTML with page.set_content\n3. Assert the heading is visible\n4. Assert the paragraph has the expected text\n5. Close the browser cleanly\n\nThen explain why this example can run without visiting a real website.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Launching a browser without checking page behaviour",
      "fix": "Add an assertion for the result you expect."
    },
    {
      "mistake": "Depending on a live website for a first example",
      "fix": "Use page.set_content for a self-contained practice page."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Open local content",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Hello</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Hello\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Check page text",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<p>Practice page</p>\")\n    assert page.locator(\"p\").inner_text() == \"Practice page\"\n    browser.close()"
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
