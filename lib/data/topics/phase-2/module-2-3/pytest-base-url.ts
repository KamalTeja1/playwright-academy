import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-base-url",
  title: "Using pytest-base-url",
  summary:
    "Configure a base URL for browser tests and use the plugin's base_url fixture.",
  whyItMatters:
    "A configurable base URL lets the same browser tests run against local, staging, or test environments without changing test code.",
  notes: `pytest-base-url provides a base_url fixture and a command-line option for setting the URL used by tests.

### Install the plugin

~~~bash
python -m pip install pytest-base-url
~~~

### Set a base URL when running tests

~~~bash
python -m pytest --base-url=https://example.com
~~~

The plugin makes the selected value available through the base_url fixture.

### Use the fixture in a test

~~~python
def test_base_url_is_configured(base_url):
    assert base_url.startswith("https://")
~~~

The test can use the configured URL to build a page or API address. Keep the environment choice outside the test logic.

### Configure a default

You can set a project default in pytest.ini:

~~~text
[pytest]
base_url = https://example.com
~~~

A command-line value can override the configured default. Use a safe test environment for browser tests that interact with real services.

### The takeaway

Use the base_url fixture to keep the target environment configurable. Avoid hard-coding environment-specific URLs into every test.`,
  handsOn: `Run a test that receives its base URL from the plugin.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-base-url
~~~

### Step 2: Create tests/test_base_url.py

~~~python
def test_base_url_is_configured(base_url):
    assert base_url.startswith("https://")
~~~

### Step 3: Run with a base URL

~~~bash
python -m pytest --base-url=https://example.com
~~~

### Deliverable

Keep the test. Explain how changing the command-line URL lets the same test target a different environment.`,
  challenge: `Create a test that uses the base_url fixture.

1. Install pytest-base-url
2. Assert that the configured URL uses HTTPS
3. Run the test with a URL provided on the command line
4. Add a default base_url to pytest.ini
5. Run again with a command-line override

Use an authorized test environment. Explain why environment URLs should be configurable rather than repeated throughout tests.`,
  proTips: [
    "Use the base_url fixture instead of hard-coding an environment URL.",
    "Set a default in pytest.ini when it suits the project.",
    "Use the command line to override the base URL for a run.",
    "Point browser tests only at environments you are allowed to use.",
  ],
  commonMistakes: [
    {
      mistake: "Using base_url without installing pytest-base-url",
      fix: "Install the plugin in the environment where pytest runs.",
    },
    {
      mistake: "Hard-coding a production URL into every test",
      fix: "Use the base_url fixture and configure the target environment separately.",
    },
    {
      mistake: "Assuming a configured base URL makes a service safe to modify",
      fix: "Use an authorized test environment and understand the test's effects.",
    },
    {
      mistake: "Passing a URL without the expected scheme",
      fix: "Use the complete URL required by the target environment.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Use the configured base URL",
      code: `def test_base_url_is_configured(base_url):
    assert base_url.startswith("https://")`,
    },
    {
      language: "bash",
      title: "Override the base URL for a run",
      code: `python -m pytest --base-url=https://example.com`,
    },
    {
      language: "text",
      title: "Set a project default",
      code: `[pytest]
base_url = https://example.com`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-base-url Documentation",
      url: "https://pytest-base-url.readthedocs.io/en/latest/",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "base-url"],
};

export default topic;
