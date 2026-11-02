import type { TopicContent } from "../../types";

const topic: TopicContent = {
  "slug": "installing-playwright",
  "title": "Installing Playwright",
  "summary": "Install the Playwright Python package and its browser binaries.",
  "whyItMatters": "The Python package and browser binaries are both needed to run browser automation locally.",
  "notes": "Playwright for Python needs the Python package and one or more browser binaries.\n\n### Install the package\n\n~~~bash\npython -m pip install playwright\n~~~\n\nUse the Python interpreter from your project environment.\n\n### Install Chromium\n\n~~~bash\npython -m playwright install chromium\n~~~\n\nYou can install other supported browsers with the same command, using firefox or webkit instead of chromium.\n\n### Check the installation\n\n~~~bash\npython -m playwright --version\n~~~\n\n### Run a small script\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Ready</title>\")\n    assert page.title() == \"Ready\"\n    browser.close()\n~~~\n\nIf browser launch reports missing system dependencies on Linux, follow the installation guidance for your operating system.\n\n### The takeaway\n\nInstall the Python package, then install the browser binaries your scripts will use. Keep both steps in your project setup instructions.",
  "handsOn": "Install Playwright and check Chromium.\n\n### Step 1: Install the package\n\n~~~bash\npython -m pip install playwright\n~~~\n\n### Step 2: Install Chromium\n\n~~~bash\npython -m playwright install chromium\n~~~\n\n### Step 3: Create install_check.py\n\n~~~python\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<h1>Installed</h1>\")\n    assert page.get_by_role(\"heading\", name=\"Installed\").is_visible()\n    browser.close()\n~~~\n\n### Step 4: Run it\n\n~~~bash\npython install_check.py\n~~~\n\n### Deliverable\n\nExplain why installing the Python package alone may not be enough.",
  "challenge": "Write a short setup note for a fresh Python environment.\n\n1. Include the command to install Playwright\n2. Include the command to install Chromium\n3. Include a small script that opens local HTML\n4. Assert that its heading is visible\n5. Run the script in the environment where you installed the package\n\nThen describe what you would check if the browser binary is missing.",
  "proTips": [
    "Use the synchronous Playwright API consistently.",
    "Prefer local HTML for focused, repeatable browser examples.",
    "Assert the behaviour you expect, then close browser resources."
  ],
  "commonMistakes": [
    {
      "mistake": "Installing Playwright into a different Python environment",
      "fix": "Activate the project environment before installing and running it."
    },
    {
      "mistake": "Forgetting to install browser binaries",
      "fix": "Run python -m playwright install for the browser you need."
    }
  ],
  "codeExamples": [
    {
      "language": "python",
      "title": "Install the package and browser",
      "code": "python -m pip install playwright\npython -m playwright install chromium"
    },
    {
      "language": "python",
      "title": "Launch an installed browser",
      "code": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.set_content(\"<title>Ready</title>\")\n    assert page.title() == \"Ready\"\n    browser.close()"
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
