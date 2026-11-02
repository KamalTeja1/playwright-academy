import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "set-input-files-single",
  "title": "Uploading One File",
  "summary": "Set one file on an input of type file with set_input_files.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "set_input_files assigns a file to an input[type=file]. Use a temporary file in tests to avoid depending on a machine-specific path.\n\n### Try it with local HTML\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    file_path = Path(folder) / \"note.txt\"\n    file_path.write_text(\"practice\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" aria-label=\"Attachment\">')\n        page.get_by_label(\"Attachment\").set_input_files(str(file_path))\n        files = page.get_by_label(\"Attachment\").evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert files == [\"note.txt\"]\n        browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    path = Path(folder) / \"report.txt\"\n    path.write_text(\"report data\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" aria-label=\"Report\">')\n        upload = page.get_by_label(\"Report\")\n        upload.set_input_files(str(path))\n        assert upload.evaluate(\"(el) => el.files[0].name\") == \"report.txt\"\n        browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    file_path = Path(folder) / \"note.txt\"\n    file_path.write_text(\"practice\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" aria-label=\"Attachment\">')\n        page.get_by_label(\"Attachment\").set_input_files(str(file_path))\n        files = page.get_by_label(\"Attachment\").evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert files == [\"note.txt\"]\n        browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a temporary text file, assign it to a labelled file input, and assert the selected filename.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using a file path that exists only on one developer's machine",
      "fix": "Create a temporary file during the test and pass its path to set_input_files."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Uploading One File",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    file_path = Path(folder) / \"note.txt\"\n    file_path.write_text(\"practice\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" aria-label=\"Attachment\">')\n        page.get_by_label(\"Attachment\").set_input_files(str(file_path))\n        files = page.get_by_label(\"Attachment\").evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert files == [\"note.txt\"]\n        browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    path = Path(folder) / \"report.txt\"\n    path.write_text(\"report data\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" aria-label=\"Report\">')\n        upload = page.get_by_label(\"Report\")\n        upload.set_input_files(str(path))\n        assert upload.evaluate(\"(el) => el.files[0].name\") == \"report.txt\"\n        browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
    },
    {
      "title": "Playwright for Python — Input",
      "url": "https://playwright.dev/python/docs/input"
    }
  ],
  "difficulty": "Beginner",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
