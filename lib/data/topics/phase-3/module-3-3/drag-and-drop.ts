import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "drag-and-drop",
  "title": "Drag and Drop",
  "summary": "Move an element onto a drop target with locator.drag_to.",
  "whyItMatters": "The right browser interaction API helps tests model user behaviour and verify the resulting page state.",
  "notes": "locator.drag_to moves one locator to another. It is the simplest option when the page uses standard drag-and-drop behaviour.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Card</div>\n<div id=\"target\" ondragover=\"event.preventDefault()\"\n     ondrop=\"this.textContent='Dropped'\">Drop here</div>\n<script>\nconst source = document.querySelector(\"#source\");\nsource.ondragstart = event => event.dataTransfer.setData(\"text\", \"Card\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(page.locator(\"#target\"))\n    assert page.locator(\"#target\").inner_text() == \"Dropped\"\n    browser.close()\n~~~\n\nThis self-contained example avoids a dependency on an external website.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"item\" draggable=\"true\">Item</div>\n<div id=\"bin\" ondragover=\"event.preventDefault()\"\n     ondrop=\"this.dataset.received='yes'\">Bin</div>\n<script>\ndocument.querySelector(\"#item\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"Item\");\n</script>\"\"\")\n    page.locator(\"#item\").drag_to(page.locator(\"#bin\"))\n    assert page.locator(\"#bin\").get_attribute(\"data-received\") == \"yes\"\n    browser.close()\n~~~\n\nChoose a Playwright action that matches the interaction you intend to test, then assert its result.\n\n### The takeaway\n\nPrefer locator actions for user-like behaviour. Use low-level APIs when the test specifically needs pointer, keyboard, touch, or page-context control.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Card</div>\n<div id=\"target\" ondragover=\"event.preventDefault()\"\n     ondrop=\"this.textContent='Dropped'\">Drop here</div>\n<script>\nconst source = document.querySelector(\"#source\");\nsource.ondragstart = event => event.dataTransfer.setData(\"text\", \"Card\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(page.locator(\"#target\"))\n    assert page.locator(\"#target\").inner_text() == \"Dropped\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what the interaction does and what the assertion checks.",
  "challenge": "Create a draggable card and a drop zone that records when a card is dropped. Use drag_to and assert the drop-zone state.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer locator actions for ordinary user interactions.",
    "Use local HTML for focused and repeatable examples.",
    "Assert the state that should result from the interaction."
  ],
  "commonMistakes": [
    {
      "mistake": "Using drag_to without a drop target that handles the drag operation",
      "fix": "Ensure the page implements the expected drag and drop behaviour, then assert the target's resulting state."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the resulting state",
      "fix": "Use a locator assertion or inspect the expected control state."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Drag and Drop",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"source\" draggable=\"true\">Card</div>\n<div id=\"target\" ondragover=\"event.preventDefault()\"\n     ondrop=\"this.textContent='Dropped'\">Drop here</div>\n<script>\nconst source = document.querySelector(\"#source\");\nsource.ondragstart = event => event.dataTransfer.setData(\"text\", \"Card\");\n</script>\"\"\")\n    page.locator(\"#source\").drag_to(page.locator(\"#target\"))\n    assert page.locator(\"#target\").inner_text() == \"Dropped\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"\"\"<div id=\"item\" draggable=\"true\">Item</div>\n<div id=\"bin\" ondragover=\"event.preventDefault()\"\n     ondrop=\"this.dataset.received='yes'\">Bin</div>\n<script>\ndocument.querySelector(\"#item\").ondragstart =\n    event => event.dataTransfer.setData(\"text\", \"Item\");\n</script>\"\"\")\n    page.locator(\"#item\").drag_to(page.locator(\"#bin\"))\n    assert page.locator(\"#bin\").get_attribute(\"data-received\") == \"yes\"\n    browser.close()"
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
  "estimatedMinutes": 30,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
