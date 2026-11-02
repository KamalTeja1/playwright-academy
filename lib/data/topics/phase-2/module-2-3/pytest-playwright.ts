import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-playwright",
  title: "Browser Tests with pytest-playwright",
  summary:
    "Use the pytest-playwright plugin's page fixture to write browser tests with pytest.",
  whyItMatters:
    "pytest-playwright connects browser automation to pytest fixtures and test discovery, providing a familiar structure for end-to-end checks.",
  notes: `pytest-playwright provides pytest fixtures for automating browsers. Install the plugin and its browser binaries in your Python environment.

### Install the plugin and browser

~~~bash
python -m pip install pytest-playwright
python -m playwright install
~~~

The browser installation downloads the browser binaries used by Playwright.

### Use the page fixture

~~~python
def test_page_title(page):
    page.set_content("<title>Practice page</title><h1>Welcome</h1>")

    assert page.title() == "Practice page"
    assert page.get_by_role("heading", name="Welcome").is_visible()
~~~

The page fixture is supplied by the plugin. pytest-playwright also provides browser and context fixtures.

### Run the test

Save the example in a discoverable test file, such as tests/test_page.py, then run:

~~~bash
python -m pytest
~~~

This example uses page.set_content, so it does not need to contact an external website.

### Configure the browser

The plugin can run tests in different supported browsers. Use its command-line options to select a browser, for example:

~~~bash
python -m pytest --browser firefox
~~~

Make sure the selected browser binary is installed.

### Keep browser tests isolated

Each test should set up the page state it needs. Avoid depending on a previous test's page or data. Use the plugin's fixtures and pytest assertions to keep setup and checks clear.

### The takeaway

pytest-playwright supplies browser fixtures to pytest tests. Install the plugin and browser binaries, then request page in a test function to start writing browser checks.`,
  handsOn: `Run your first browser test without using an external website.

### Step 1: Install the plugin and a browser

~~~bash
python -m pip install pytest-playwright
python -m playwright install chromium
~~~

### Step 2: Create tests/test_page.py

~~~python
def test_page_content(page):
    page.set_content("<title>Practice</title><h1>Hello</h1>")

    assert page.title() == "Practice"
    assert page.get_by_role("heading", name="Hello").is_visible()
~~~

### Step 3: Run pytest

~~~bash
python -m pytest
~~~

### Deliverable

Keep the test. Explain how pytest-playwright provides the page fixture and why this example does not need a network connection.`,
  challenge: `Create a browser test using pytest-playwright.

1. Use the page fixture
2. Load local HTML with page.set_content
3. Check the page title
4. Check that a heading with expected text is visible
5. Run the test after installing the plugin and Chromium

Then explain why each test should set up the page state it needs instead of relying on another test.`,
  proTips: [
    "Install pytest-playwright in the active Python environment.",
    "Install the browser binaries needed for the test run.",
    "Request page as a test argument to use the plugin fixture.",
    "Use page.set_content for a simple test that should not depend on a website.",
  ],
  commonMistakes: [
    {
      mistake: "Installing the plugin but not the browser binaries",
      fix: "Run python -m playwright install for the browser you plan to use.",
    },
    {
      mistake: "Trying to create the page fixture manually",
      fix: "Request page as a test parameter and let the plugin provide it.",
    },
    {
      mistake: "Making a small browser test depend on an external website unnecessarily",
      fix: "Use page.set_content when the behaviour can be tested with local HTML.",
    },
    {
      mistake: "Assuming one test can reuse another test's page state",
      fix: "Set up the state each test needs through its own fixture-driven run.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Check local page content",
      code: `def test_page_content(page):
    page.set_content("<title>Practice</title><h1>Hello</h1>")

    assert page.title() == "Practice"
    assert page.get_by_role("heading", name="Hello").is_visible()`,
    },
    {
      language: "bash",
      title: "Install pytest-playwright and Chromium",
      code: `python -m pip install pytest-playwright
python -m playwright install chromium`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-playwright Documentation",
      url: "https://playwright.dev/python/docs/test-runners",
    },
    {
      title: "Playwright for Python — Installation",
      url: "https://playwright.dev/python/docs/intro",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "plugins", "playwright", "browser-testing"],
};

export default topic;
