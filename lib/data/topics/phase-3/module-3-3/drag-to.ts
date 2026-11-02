import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "drag-to",
  "title": "Dragging to a Target Position",
  "summary": "Drag an element to a target locator and adjust the target position when needed.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "drag_to supports target_position, an offset from the target element's top-left corner. Use it when the drop must land at a particular part of the target.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Tile</div>\n<div id=\"target\" style=\"width:160px;height:80px\"\n     ondragover=\"event.preventDefault()\"\n     ondrop=\"this.dataset.dropped='yes'\">Target</div>\n<script>\ndocument.querySelector(\"#source\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"Tile\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(\n        page.locator(\"#target\"),\n        target_position={\"x\": 20, \"y\": 20},\n    )\n    assert page.locator(\"#target\").get_attribute(\"data-dropped\") == \"yes\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">File</div>\n<div id=\"folder\" style=\"width:140px;height:70px\"\n     ondragover=\"event.preventDefault()\"\n     ondrop=\"this.textContent='Received'\">Folder</div>\n<script>\ndocument.querySelector(\"#source\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"File\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(\n        page.locator(\"#folder\"),\n        target_position={\"x\": 15, \"y\": 15},\n    )\n    assert page.get_by_text(\"Received\").is_visible()\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Tile</div>\n<div id=\"target\" style=\"width:160px;height:80px\"\n     ondragover=\"event.preventDefault()\"\n     ondrop=\"this.dataset.dropped='yes'\">Target</div>\n<script>\ndocument.querySelector(\"#source\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"Tile\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(\n        page.locator(\"#target\"),\n        target_position={\"x\": 20, \"y\": 20},\n    )\n    assert page.locator(\"#target\").get_attribute(\"data-dropped\") == \"yes\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Make a drop target with a known size. Drag an item to an offset inside it and assert that the drop handler ran.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Treating target_position as an absolute page coordinate",
      "fix": "target_position is relative to the target element's top-left corner."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Dragging to a Target Position",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Tile</div>\n<div id=\"target\" style=\"width:160px;height:80px\"\n     ondragover=\"event.preventDefault()\"\n     ondrop=\"this.dataset.dropped='yes'\">Target</div>\n<script>\ndocument.querySelector(\"#source\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"Tile\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(\n        page.locator(\"#target\"),\n        target_position={\"x\": 20, \"y\": 20},\n    )\n    assert page.locator(\"#target\").get_attribute(\"data-dropped\") == \"yes\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">File</div>\n<div id=\"folder\" style=\"width:140px;height:70px\"\n     ondragover=\"event.preventDefault()\"\n     ondrop=\"this.textContent='Received'\">Folder</div>\n<script>\ndocument.querySelector(\"#source\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"File\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(\n        page.locator(\"#folder\"),\n        target_position={\"x\": 15, \"y\": 15},\n    )\n    assert page.get_by_text(\"Received\").is_visible()\n    browser.close()"
    }
  ],
  "furtherReading": [
    {
      "title": "Playwright for Python — Input",
      "url": "https://playwright.dev/python/docs/input"
    },
    {
      "title": "Playwright for Python — Locator API",
      "url": "https://playwright.dev/python/docs/api/class-locator"
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
