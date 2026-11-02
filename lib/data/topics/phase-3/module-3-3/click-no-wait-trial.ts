import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "click-no-wait-trial",
  "title": "Trial Clicks and Navigation Waiting",
  "summary": "Check click actionability with trial mode and understand navigation wait options.",
  "whyItMatters": "Realistic browser actions help tests verify the same interactions a user performs.",
  "notes": "A trial click performs actionability checks without dispatching the click. The no_wait_after option is deprecated and has no effect for most actions.\n\n### Try it with local HTML\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Clicked'\\\">Run</button>\")\n    button = page.get_by_role(\"button\", name=\"Run\")\n    button.click(trial=True)\n    assert button.inner_text() == \"Run\"\n    button.click()\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()\n~~~\n\nThis self-contained page makes the interaction easy to repeat.\n\n### Another example\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<a href=\\\"data:text/html,<title>Next</title>\\\">Next page</a>\")\n    page.get_by_role(\"link\", name=\"Next page\").click()\n    assert page.title() == \"Next\"\n    browser.close()\n~~~\n\nUse a locator that describes the element clearly, perform the interaction, and assert the resulting state.\n\n### The takeaway\n\nChoose the Playwright action that matches the user's interaction. Check the visible or stored result rather than assuming the action succeeded.",
  "handsOn": "Create a synchronous Playwright script.\n\n### Add this Python code\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Clicked'\\\">Run</button>\")\n    button = page.get_by_role(\"button\", name=\"Run\")\n    button.click(trial=True)\n    assert button.inner_text() == \"Run\"\n    button.click()\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()\n~~~\n\n### Run it\n\n~~~bash\npython interaction_check.py\n~~~\n\n### Deliverable\n\nExplain what action Playwright performs and what the assertion verifies.",
  "challenge": "Use trial=True on a button, assert that its click handler has not run, then click normally and assert it has run. Explain why no_wait_after is not a general way to speed up tests.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer accessible roles and labels for user-facing controls.",
    "Use local HTML for focused, repeatable interaction examples.",
    "Assert the state that should result from the action."
  ],
  "commonMistakes": [
    {
      "mistake": "Expecting a trial click to dispatch the click event",
      "fix": "Use trial=True only to check actionability; perform a normal click to trigger the page behaviour."
    },
    {
      "mistake": "Using a fixed sleep instead of checking the result",
      "fix": "Use a locator assertion or inspect the control state after the action."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Trial Clicks and Navigation Waiting",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<button onclick=\\\"this.textContent='Clicked'\\\">Run</button>\")\n    button = page.get_by_role(\"button\", name=\"Run\")\n    button.click(trial=True)\n    assert button.inner_text() == \"Run\"\n    button.click()\n    assert page.get_by_role(\"button\", name=\"Clicked\").is_visible()\n    browser.close()"
    },
    {
      "language": "python",
      "title": "A second runnable example",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<a href=\\\"data:text/html,<title>Next</title>\\\">Next page</a>\")\n    page.get_by_role(\"link\", name=\"Next page\").click()\n    assert page.title() == \"Next\"\n    browser.close()"
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
