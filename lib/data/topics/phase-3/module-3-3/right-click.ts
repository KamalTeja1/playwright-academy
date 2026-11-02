import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "right-click",
  "title": "Right-Clicking",
  "summary": "Open a context-menu interaction with a right mouse click.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "Use click(button='right') when the page behaviour specifically depends on the secondary mouse button.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<div oncontextmenu=\\\"event.preventDefault(); this.textContent='Menu opened'\\\">Right-click here</div>\")\n    target = page.get_by_text(\"Right-click here\")\n    target.click(button=\"right\")\n    assert page.get_by_text(\"Menu opened\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button oncontextmenu=\\\"event.preventDefault(); this.dataset.menu='open'\\\">Options</button>\")\n    options = page.get_by_role(\"button\", name=\"Options\")\n    options.click(button=\"right\")\n    assert options.get_attribute(\"data-menu\") == \"open\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<div oncontextmenu=\\\"event.preventDefault(); this.textContent='Menu opened'\\\">Right-click here</div>\")\n    target = page.get_by_text(\"Right-click here\")\n    target.click(button=\"right\")\n    assert page.get_by_text(\"Menu opened\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Make local HTML show a message when its target receives a context-menu event. Right-click the target with Playwright and assert the message.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Right-clicking without handling the page's context-menu behaviour",
      "fix": "Make sure the test page or application responds to the context-menu interaction you intend to verify."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Right-Clicking",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<div oncontextmenu=\\\"event.preventDefault(); this.textContent='Menu opened'\\\">Right-click here</div>\")\n    target = page.get_by_text(\"Right-click here\")\n    target.click(button=\"right\")\n    assert page.get_by_text(\"Menu opened\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button oncontextmenu=\\\"event.preventDefault(); this.dataset.menu='open'\\\">Options</button>\")\n    options = page.get_by_role(\"button\", name=\"Options\")\n    options.click(button=\"right\")\n    assert options.get_attribute(\"data-menu\") == \"open\"\n    browser.close()"
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
  "estimatedMinutes": 20,
  "tags": [
    "python",
    "playwright",
    "actions",
    "browser-testing"
  ]
};

export default topic;
