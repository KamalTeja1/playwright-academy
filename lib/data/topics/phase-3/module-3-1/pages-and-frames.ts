import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "pages-and-frames",
  "title": "Pages and Frames",
  "summary": "Work with browser tabs as pages and embedded documents as frames.",
  "whyItMatters": "Pages and frames have different roles. Knowing the distinction helps tests target the correct document.",
  "notes": "A page represents a browser tab. A frame is a document embedded inside a page, often through an iframe element.\n\n### Create multiple pages\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    first_page = context.new_page()\n    second_page = context.new_page()\n    first_page.set_content(\"<title>First tab</title>\")\n    second_page.set_content(\"<title>Second tab</title>\")\n    assert first_page.title() == \"First tab\"\n    assert second_page.title() == \"Second tab\"\n    browser.close()\n~~~\n\nPages in one context share that context's session state.\n\n### Locate content in a frame\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<iframe srcdoc=\"<h1>Inside frame</h1>\"></iframe>')\n    heading = page.frame_locator(\"iframe\").get_by_role(\"heading\", name=\"Inside frame\")\n    assert heading.is_visible()\n    browser.close()\n~~~\n\nUse frame_locator to locate elements inside an iframe.\n\n### The takeaway\n\nUse pages for tabs and frame locators for embedded documents. A page can contain multiple frames.",
  "handsOn": "Create two pages and inspect an iframe.\n\n### Create pages_frames.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    first = context.new_page()\n    second = context.new_page()\n    first.set_content(\"<title>One</title>\")\n    second.set_content('<iframe srcdoc=\"<h1>Embedded</h1>\"></iframe>')\n    assert first.title() == \"One\"\n    assert second.frame_locator(\"iframe\").get_by_role(\n        \"heading\", name=\"Embedded\"\n    ).is_visible()\n    browser.close()\n~~~\n\nRun it with python pages_frames.py.\n\n### Deliverable\n\nExplain which object represents a tab and how the embedded heading is located.",
  "challenge": "Write a script with two tabs in one context.\n\n1. Load a different title in each page\n2. Add an iframe with a heading to one page\n3. Check both page titles\n4. Find and assert the iframe heading through frame_locator\n5. Close the browser\n\nThen explain why an iframe's content is not the same document as the top-level page.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Treating an iframe element as the embedded document",
      "fix": "Use frame_locator to locate content inside the frame."
    },
    {
      "mistake": "Assuming each page must have a separate browser context",
      "fix": "Pages can be separate tabs in the same context."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Create two pages",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    first = context.new_page()\n    second = context.new_page()\n    first.set_content(\"<title>First</title>\")\n    second.set_content(\"<title>Second</title>\")\n    assert first.title() == \"First\"\n    assert second.title() == \"Second\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "Find an element inside a frame",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<iframe srcdoc=\"<h1>Embedded</h1>\"></iframe>')\n    heading = page.frame_locator(\"iframe\").get_by_role(\"heading\", name=\"Embedded\")\n    assert heading.is_visible()\n    browser.close()"
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
  "estimatedMinutes": 30,
  "tags": [
    "python",
    "playwright",
    "browser-automation"
  ]
};

export default topic;
