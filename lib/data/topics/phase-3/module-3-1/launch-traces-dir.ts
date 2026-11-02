import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "launch-traces-dir",
  "title": "Saving Browser Traces",
  "summary": "Record a Playwright trace to inspect browser actions after a run.",
  "whyItMatters": "A trace captures useful page and action details that help explain what happened during a browser session.",
  "notes": "A Playwright trace records browser activity for later inspection with the Playwright Trace Viewer.\n\n### Start and save a trace\n\n~~~python\nfrom pathlib import Path\nfrom playwright.sync_api import sync_playwright\n\ntrace_path = Path(\"trace.zip\")\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    context.tracing.start(screenshots=True, snapshots=True, sources=True)\n    page = context.new_page()\n    page.set_content(\"<button>Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click()\n    assert page.get_by_role(\"button\", name=\"Continue\").is_visible()\n    context.tracing.stop(path=str(trace_path))\n    browser.close()\n~~~\n\nThe trace is saved when tracing.stop is called with a path. Keep trace output in a dedicated directory and avoid committing it unintentionally.\n\n### Open a trace\n\n~~~bash\npython -m playwright show-trace trace.zip\n~~~\n\nThe viewer can show actions, snapshots, screenshots, and other captured details.\n\n### The takeaway\n\nRecord a trace when you need to investigate a browser run. Stop tracing and save the archive, then inspect it with the Trace Viewer.",
  "handsOn": "Record a trace from a local page interaction.\n\n### Create trace_check.py\n\n~~~python\nfrom pathlib import Path\nfrom playwright.sync_api import sync_playwright\n\ntrace_path = Path(\"trace.zip\")\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    context.tracing.start(screenshots=True, snapshots=True, sources=True)\n    page = context.new_page()\n    page.set_content(\"<button>Continue</button>\")\n    page.get_by_role(\"button\", name=\"Continue\").click()\n    assert page.get_by_role(\"button\", name=\"Continue\").is_visible()\n    context.tracing.stop(path=str(trace_path))\n    browser.close()\n\nassert trace_path.is_file()\n~~~\n\nRun it, then open the trace with python -m playwright show-trace trace.zip.\n\n### Deliverable\n\nExplain what the trace archive contains and why it is useful for debugging.",
  "challenge": "Record and inspect a trace for a small local interaction.\n\n1. Create a browser context\n2. Start tracing with screenshots and snapshots\n3. Load local HTML and click a button\n4. Stop tracing and save to a zip file\n5. Assert that the trace file exists\n6. Open it with the Playwright Trace Viewer\n\nKeep generated trace files out of source control unless the project intentionally stores them.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Starting a trace but never stopping it with a path",
      "fix": "Call context.tracing.stop with the destination path."
    },
    {
      "mistake": "Saving trace archives in a location that is accidentally committed",
      "fix": "Use a dedicated output directory and update ignore rules if needed."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Save a trace archive",
      "code": "from pathlib import Path\nfrom playwright.sync_api import sync_playwright\n\ntrace_path = Path(\"trace.zip\")\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    context.tracing.start(screenshots=True, snapshots=True, sources=True)\n    page = context.new_page()\n    page.set_content(\"<p>Trace me</p>\")\n    assert page.locator(\"p\").inner_text() == \"Trace me\"\n    context.tracing.stop(path=str(trace_path))\n    browser.close()\nassert trace_path.is_file()"
    },
    {
      "language": "python",
      "title": "Open a saved trace",
      "code": "from pathlib import Path\n\ntrace_path = Path(\"trace.zip\")\nassert trace_path.is_file()\nprint(\"Trace archive is ready to inspect\")"
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
