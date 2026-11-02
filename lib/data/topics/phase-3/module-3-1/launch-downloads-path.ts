import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-downloads-path",
  "title": "Setting a Downloads Path",
  "summary": "Choose where browser downloads are stored for a launched browser.",
  "whyItMatters": "A known download location makes it easier to organise and inspect files created during a test.",
  "notes": "The downloads_path launch option sets the directory used for browser downloads.\n\n### Configure a temporary downloads directory\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as download_dir:\n    with sync_playwright() as p:\n        browser = p.chromium.launch(downloads_path=download_dir)\n        page = browser.new_page()\n        page.set_content(\"<p>Download path configured</p>\")\n        assert page.locator(\"p\").is_visible()\n        browser.close()\n~~~\n\nThis example configures the path without initiating a download. A test that downloads a file should also use the page's download event to wait for and inspect it.\n\n### Keep generated files separate\n\nUse a temporary or dedicated output directory for downloads. Avoid writing test output over project source files.\n\n### The takeaway\n\nSet downloads_path when a test needs a known download directory. Keep generated files isolated and clean them up when appropriate.",
  "handsOn": "Configure a temporary downloads directory.\n\n### Create download_path_check.py\n\n~~~python\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as download_dir:\n    with sync_playwright() as p:\n        browser = p.chromium.launch(downloads_path=download_dir)\n        page = browser.new_page()\n        page.set_content(\"<h1>Downloads are configured</h1>\")\n        assert page.locator(\"h1\").is_visible()\n        browser.close()\n~~~\n\nRun it with python download_path_check.py.\n\n### Deliverable\n\nExplain why a temporary directory is safer for generated test files than a source-code folder.",
  "challenge": "Write a script that launches Chromium with a temporary downloads directory.\n\n1. Create the directory with TemporaryDirectory\n2. Pass its path as downloads_path\n3. Load local HTML and check a heading\n4. Close the browser before leaving the temporary directory\n5. Explain why the directory should be dedicated to generated downloads\n\nThis exercise configures the path; it does not need to download a file.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Saving generated downloads among source files",
      "fix": "Use a temporary or dedicated output directory."
    },
    {
      "mistake": "Removing the temporary directory before closing the browser",
      "fix": "Close the browser while the configured directory still exists."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Configure a temporary download location",
      "code": "from tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as download_dir:\n    with sync_playwright() as p:\n        browser = p.chromium.launch(downloads_path=download_dir)\n        page = browser.new_page()\n        page.set_content(\"<p>Ready</p>\")\n        assert page.locator(\"p\").is_visible()\n        browser.close()"
    },
    {
      "language": "python",
      "title": "Use a dedicated directory",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as download_dir:\n    assert Path(download_dir).is_dir()\n    with sync_playwright() as p:\n        browser = p.chromium.launch(downloads_path=download_dir)\n        page = browser.new_page()\n        page.set_content(\"<title>Download setup</title>\")\n        assert page.title() == \"Download setup\"\n        browser.close()"
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
