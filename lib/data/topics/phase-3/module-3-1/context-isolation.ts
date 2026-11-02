import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "context-isolation",
  "title": "Isolating Browser Contexts",
  "summary": "Use separate browser contexts to keep cookies and session state apart.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "Each browser context has isolated cookies and storage. Separate contexts are useful when a test needs independent user sessions.\n\n### Try it with local content\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first = browser.new_context()\n    second = browser.new_context()\n    first.add_cookies([{\n        \"name\": \"session\",\n        \"value\": \"first-user\",\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n    }])\n    assert len(first.cookies()) == 1\n    assert len(second.cookies()) == 0\n    browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    user_a = browser.new_context()\n    user_b = browser.new_context()\n    user_a.add_cookies([{\n        \"name\": \"theme\",\n        \"value\": \"dark\",\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n    }])\n    assert user_a.cookies()[0][\"value\"] == \"dark\"\n    assert user_b.cookies() == []\n    browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first = browser.new_context()\n    second = browser.new_context()\n    first.add_cookies([{\n        \"name\": \"session\",\n        \"value\": \"first-user\",\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n    }])\n    assert len(first.cookies()) == 1\n    assert len(second.cookies()) == 0\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Create two contexts from one browser. Add a fictional cookie to one context, then assert that the other context has no cookies. Explain why contexts are useful for tests with multiple users.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Using one context for tests that require separate user sessions",
      "fix": "Create a separate browser context for each isolated session."
    },
    {
      "mistake": "Relying on a fixed sleep instead of a browser condition",
      "fix": "Use navigation wait conditions or locator assertions for the behaviour under test."
    },
    {
      "mistake": "Leaving browser resources open after the example",
      "fix": "Close the context and browser when the check is complete."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Isolating Browser Contexts",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    first = browser.new_context()\n    second = browser.new_context()\n    first.add_cookies([{\n        \"name\": \"session\",\n        \"value\": \"first-user\",\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n    }])\n    assert len(first.cookies()) == 1\n    assert len(second.cookies()) == 0\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    user_a = browser.new_context()\n    user_b = browser.new_context()\n    user_a.add_cookies([{\n        \"name\": \"theme\",\n        \"value\": \"dark\",\n        \"domain\": \"example.com\",\n        \"path\": \"/\",\n    }])\n    assert user_a.cookies()[0][\"value\"] == \"dark\"\n    assert user_b.cookies() == []\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Page API",
      "url": "https://playwright.dev/python/docs/api/class-page"
    },
    {
      "title": "Playwright for Python — BrowserContext API",
      "url": "https://playwright.dev/python/docs/api/class-browsercontext"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "pages",
    "browser-context"
  ]
};

export default topic;
