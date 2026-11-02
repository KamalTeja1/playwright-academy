import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "page-back-forward",
  "title": "Going Back and Forward",
  "summary": "Use page.go_back and page.go_forward to move through browser history.",
  "whyItMatters": "These page and context operations help browser tests interact with predictable page state and verify what the user would experience.",
  "notes": "page.go_back and page.go_forward navigate through the page's session history. A navigation can return None when there is no history entry to visit.\n\n### Try it with local content\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"first.html\"\n    second = Path(folder) / \"second.html\"\n    first.write_text(\"<title>First</title>\", encoding=\"utf-8\")\n    second.write_text(\"<title>Second</title>\", encoding=\"utf-8\")\n\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto(first.as_uri())\n        page.goto(second.as_uri())\n        page.go_back()\n        assert page.title() == \"First\"\n        page.go_forward()\n        assert page.title() == \"Second\"\n        browser.close()\n~~~\n\nThis example uses local content or temporary files so the browser check does not depend on a public website.\n\n### Another example\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    start = Path(folder) / \"start.html\"\n    next_page = Path(folder) / \"next.html\"\n    start.write_text(\"<title>Start</title>\", encoding=\"utf-8\")\n    next_page.write_text(\"<title>Next</title>\", encoding=\"utf-8\")\n\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto(start.as_uri())\n        page.goto(next_page.as_uri())\n        response = page.go_back()\n        assert response is None or page.title() == \"Start\"\n        browser.close()\n~~~\n\nChoose the navigation or context behaviour that matches the test. Then assert the resulting page state.\n\n### The takeaway\n\nUse the page or context method for the browser operation you need. Prefer explicit assertions that describe the expected result.",
  "handsOn": "Create a small synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"first.html\"\n    second = Path(folder) / \"second.html\"\n    first.write_text(\"<title>First</title>\", encoding=\"utf-8\")\n    second.write_text(\"<title>Second</title>\", encoding=\"utf-8\")\n\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto(first.as_uri())\n        page.goto(second.as_uri())\n        page.go_back()\n        assert page.title() == \"First\"\n        page.go_forward()\n        assert page.title() == \"Second\"\n        browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython page_check.py\n~~~\n\n### Deliverable\n\nExplain what the Playwright call does and what the assertion verifies.",
  "challenge": "Create two temporary HTML files with different titles. Navigate to the first, then the second, go back, and assert the first title. Then go forward and assert the second title.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused and repeatable examples.",
    "Assert the resulting page or context state.",
    "Close browser resources when the check is complete."
  ],
  "commonMistakes": [
    {
      "mistake": "Assuming browser history always has a previous or next entry",
      "fix": "Check the page state and allow for a navigation method to return None when no history entry exists."
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
      "title": "Going Back and Forward",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"first.html\"\n    second = Path(folder) / \"second.html\"\n    first.write_text(\"<title>First</title>\", encoding=\"utf-8\")\n    second.write_text(\"<title>Second</title>\", encoding=\"utf-8\")\n\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto(first.as_uri())\n        page.goto(second.as_uri())\n        page.go_back()\n        assert page.title() == \"First\"\n        page.go_forward()\n        assert page.title() == \"Second\"\n        browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    start = Path(folder) / \"start.html\"\n    next_page = Path(folder) / \"next.html\"\n    start.write_text(\"<title>Start</title>\", encoding=\"utf-8\")\n    next_page.write_text(\"<title>Next</title>\", encoding=\"utf-8\")\n\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.goto(start.as_uri())\n        page.goto(next_page.as_uri())\n        response = page.go_back()\n        assert response is None or page.title() == \"Start\"\n        browser.close()"
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
