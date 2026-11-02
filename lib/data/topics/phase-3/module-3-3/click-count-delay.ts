import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "click-count-delay",
  "title": "Click Count and Delay",
  "summary": "Control repeated clicks and the delay between mouse events.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "The click method accepts click_count and delay options. Delay is measured in milliseconds and can help exercise interfaces sensitive to click timing.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.dataset.count=Number(this.dataset.count||0)+1\\\">Count</button>\")\n    button = page.get_by_role(\"button\", name=\"Count\")\n    button.click(click_count=2, delay=100)\n    assert button.get_attribute(\"data-count\") == \"2\"\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Clicked'\\\">Start</button>\")\n    page.get_by_role(\"button\", name=\"Start\").click(delay=50)\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.dataset.count=Number(this.dataset.count||0)+1\\\">Count</button>\")\n    button = page.get_by_role(\"button\", name=\"Count\")\n    button.click(click_count=2, delay=100)\n    assert button.get_attribute(\"data-count\") == \"2\"\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Create a button that counts click events. Use click_count to click it three times and assert the final count. Explain why adding delay to every click can slow a suite.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Using click_count when the page requires a distinct double-click gesture",
      "fix": "Use dblclick for a double-click interaction and click_count only when repeated click events are intended."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Click Count and Delay",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.dataset.count=Number(this.dataset.count||0)+1\\\">Count</button>\")\n    button = page.get_by_role(\"button\", name=\"Count\")\n    button.click(click_count=2, delay=100)\n    assert button.get_attribute(\"data-count\") == \"2\"\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Clicked'\\\">Start</button>\")\n    page.get_by_role(\"button\", name=\"Start\").click(delay=50)\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()"
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
