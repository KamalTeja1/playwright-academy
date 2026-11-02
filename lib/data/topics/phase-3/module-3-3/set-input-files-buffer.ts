import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "set-input-files-buffer",
  "title": "Uploading File Data from Memory",
  "summary": "Set file input contents from an in-memory buffer instead of a filesystem path.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "set_input_files accepts file payload dictionaries with a name, mimeType, and buffer. This is useful when a test does not need to create a file on disk.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input type=\"file\" aria-label=\"Upload\">')\n    upload = page.get_by_label(\"Upload\")\n    upload.set_input_files({\n        \"name\": \"note.txt\",\n        \"mimeType\": \"text/plain\",\n        \"buffer\": b\"Practice text\",\n    })\n    details = upload.evaluate(\"(el) => [el.files[0].name, el.files[0].type]\")\n    assert details == [\"note.txt\", \"text/plain\"]\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input type=\"file\" aria-label=\"Data\">')\n    upload = page.get_by_label(\"Data\")\n    upload.set_input_files({\n        \"name\": \"sample.json\",\n        \"mimeType\": \"application/json\",\n        \"buffer\": b'{\"ok\": true}',\n    })\n    assert upload.evaluate(\"(el) => el.files[0].name\") == \"sample.json\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input type=\"file\" aria-label=\"Upload\">')\n    upload = page.get_by_label(\"Upload\")\n    upload.set_input_files({\n        \"name\": \"note.txt\",\n        \"mimeType\": \"text/plain\",\n        \"buffer\": b\"Practice text\",\n    })\n    details = upload.evaluate(\"(el) => [el.files[0].name, el.files[0].type]\")\n    assert details == [\"note.txt\", \"text/plain\"]\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Upload a JSON file from an in-memory buffer. Assert its filename and MIME type, then explain when a buffer is more convenient than a temporary file.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Providing file data without a filename or byte buffer",
      "fix": "Supply a file payload with name, mimeType, and buffer fields."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Uploading File Data from Memory",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input type=\"file\" aria-label=\"Upload\">')\n    upload = page.get_by_label(\"Upload\")\n    upload.set_input_files({\n        \"name\": \"note.txt\",\n        \"mimeType\": \"text/plain\",\n        \"buffer\": b\"Practice text\",\n    })\n    details = upload.evaluate(\"(el) => [el.files[0].name, el.files[0].type]\")\n    assert details == [\"note.txt\", \"text/plain\"]\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content('<input type=\"file\" aria-label=\"Data\">')\n    upload = page.get_by_label(\"Data\")\n    upload.set_input_files({\n        \"name\": \"sample.json\",\n        \"mimeType\": \"application/json\",\n        \"buffer\": b'{\"ok\": true}',\n    })\n    assert upload.evaluate(\"(el) => el.files[0].name\") == \"sample.json\"\n    browser.close()"
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
  "difficulty": "Intermediate",
  "estimatedMinutes": 25,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
