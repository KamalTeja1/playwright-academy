import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "set-input-files-multiple",
  "title": "Uploading Multiple Files",
  "summary": "Assign several files to a multiple file input.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "For an input with the multiple attribute, pass a list of paths to set_input_files.\n\n### Try it with local HTML\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"one.txt\"\n    second = Path(folder) / \"two.txt\"\n    first.write_text(\"one\", encoding=\"utf-8\")\n    second.write_text(\"two\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" multiple aria-label=\"Files\">')\n        upload = page.get_by_label(\"Files\")\n        upload.set_input_files([str(first), str(second)])\n        names = upload.evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert names == [\"one.txt\", \"two.txt\"]\n        browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    paths = []\n    for name in [\"alpha.txt\", \"beta.txt\"]:\n        path = Path(folder) / name\n        path.write_text(name, encoding=\"utf-8\")\n        paths.append(str(path))\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" multiple aria-label=\"Documents\">')\n        documents = page.get_by_label(\"Documents\")\n        documents.set_input_files(paths)\n        assert documents.evaluate(\"(el) => el.files.length\") == 2\n        browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"one.txt\"\n    second = Path(folder) / \"two.txt\"\n    first.write_text(\"one\", encoding=\"utf-8\")\n    second.write_text(\"two\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" multiple aria-label=\"Files\">')\n        upload = page.get_by_label(\"Files\")\n        upload.set_input_files([str(first), str(second)])\n        names = upload.evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert names == [\"one.txt\", \"two.txt\"]\n        browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create two temporary files and upload both to a multiple file input. Assert the selected filenames and explain why the input needs the multiple attribute.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Passing multiple paths to an input that does not allow multiple files",
      "fix": "Use an input with the multiple attribute when the test uploads more than one file."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Uploading Multiple Files",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    first = Path(folder) / \"one.txt\"\n    second = Path(folder) / \"two.txt\"\n    first.write_text(\"one\", encoding=\"utf-8\")\n    second.write_text(\"two\", encoding=\"utf-8\")\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" multiple aria-label=\"Files\">')\n        upload = page.get_by_label(\"Files\")\n        upload.set_input_files([str(first), str(second)])\n        names = upload.evaluate(\"(el) => Array.from(el.files, file => file.name)\")\n        assert names == [\"one.txt\", \"two.txt\"]\n        browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nfrom playwright.sync_api import sync_playwright\n\nwith TemporaryDirectory() as folder:\n    paths = []\n    for name in [\"alpha.txt\", \"beta.txt\"]:\n        path = Path(folder) / name\n        path.write_text(name, encoding=\"utf-8\")\n        paths.append(str(path))\n    with sync_playwright() as p:\n        browser = p.chromium.launch()\n        page = browser.new_page()\n        page.set_content('<input type=\"file\" multiple aria-label=\"Documents\">')\n        documents = page.get_by_label(\"Documents\")\n        documents.set_input_files(paths)\n        assert documents.evaluate(\"(el) => el.files.length\") == 2\n        browser.close()"
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
