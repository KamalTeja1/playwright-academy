import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "get-by-alt-text",
  "title": "Finding Images by Alternative Text",
  "summary": "Locate images using their accessible alternative text.",
  "whyItMatters": "Reliable locators make browser tests easier to understand and less dependent on page layout.",
  "notes": "get_by_alt_text locates elements such as images by their alt text, which communicates image purpose to users of assistive technology.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<img src=\"logo.png\" alt=\"Acme home\">')\n    logo = page.get_by_alt_text(\"Acme home\")\n    assert logo.count() == 1\n    browser.close()\n~~~\n\nThe example uses a small page created in the browser, so it is self-contained.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<img src=\"product.png\" alt=\"Blue travel mug\">')\n    image = page.get_by_alt_text(\"Blue travel mug\", exact=True)\n    assert image.get_attribute(\"alt\") == \"Blue travel mug\"\n    browser.close()\n~~~\n\nPrefer a locator that communicates the element's role or purpose. Use the options that make a locator specific enough for the intended element.\n\n### The takeaway\n\nChoose a locator that is both clear and resilient. Assert the behaviour or element state that matters to the test.",
  "handsOn": "Create a short synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<img src=\"logo.png\" alt=\"Acme home\">')\n    logo = page.get_by_alt_text(\"Acme home\")\n    assert logo.count() == 1\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython locator_check.py\n~~~\n\n### Deliverable\n\nExplain what the locator identifies and what the assertion verifies.",
  "challenge": "Create two images with different alt text. Locate each by its alternative text and assert that the intended image is found.",
  "proTips": [
    "Prefer locators that describe user-facing meaning.",
    "Use the synchronous Playwright API consistently.",
    "Use local HTML for focused, repeatable examples.",
    "Make a locator specific enough to identify the intended element."
  ],
  "commonMistakes": [
    {
      "mistake": "Leaving meaningful images without useful alternative text",
      "fix": "Provide concise alt text that communicates the image's purpose."
    },
    {
      "mistake": "Using a locator without checking what it matched",
      "fix": "Assert the intended element's count, visibility, or behaviour."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Finding Images by Alternative Text",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<img src=\"logo.png\" alt=\"Acme home\">')\n    logo = page.get_by_alt_text(\"Acme home\")\n    assert logo.count() == 1\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second locator example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<img src=\"product.png\" alt=\"Blue travel mug\">')\n    image = page.get_by_alt_text(\"Blue travel mug\", exact=True)\n    assert image.get_attribute(\"alt\") == \"Blue travel mug\"\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Locators",
      "url": "https://playwright.dev/python/docs/locators"
    },
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "locators",
    "browser-testing"
  ]
};

export default topic;
