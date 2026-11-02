import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-ini-config",
  title: "Configuring pytest with pytest.ini",
  summary:
    "Set project-wide pytest defaults and marker registrations in pytest.ini.",
  whyItMatters:
    "Project configuration keeps common test options in one place, so contributors do not need to remember long commands.",
  notes: `pytest.ini is a configuration file for pytest. It can set defaults and register custom markers.

### Create a basic configuration

~~~text
[pytest]
testpaths = tests
addopts = -ra
~~~

testpaths tells pytest where to look for tests when no path is provided. addopts adds default command-line options. The -ra option shows a short summary of extra test outcomes such as skips and expected failures.

### Register custom markers

~~~text
[pytest]
testpaths = tests
addopts = -ra
markers =
    slow: tests that take longer to run
    integration: tests that use an external service
~~~

Registered markers are documented and do not produce unknown-marker warnings.

### Run pytest with configuration

Run from the directory containing pytest.ini:

~~~bash
python -m pytest
~~~

pytest discovers configuration files as it searches for a project root. If you have multiple configuration files, check which one pytest selected in its output.

### Keep configuration readable

Use project defaults that help most contributors. A command-line option can override many configured values. Avoid adding options that silently skip important tests.

### The takeaway

Use pytest.ini for shared defaults such as test paths, reporting options, and marker registration. Keep the configuration small and easy to understand.`,
  handsOn: `Add a pytest.ini file for a small test project.

### Step 1: Create pytest.ini in the project root

~~~text
[pytest]
testpaths = tests
addopts = -ra
markers =
    slow: tests that take longer to run
~~~

### Step 2: Create tests/test_config.py

~~~import pytest

@pytest.mark.slow
def test_sample_collection():
    values = [2, 3, 5]
    assert sum(values) == 10

def test_text_is_uppercase():
    assert "pytest".upper() == "PYTEST"
~~~

### Step 3: Run pytest from the project root

~~~bash
python -m pytest
~~~

The tests directory is used by default and the registered marker should not produce an unknown-marker warning.

### Deliverable

Keep the configuration and tests. Explain what testpaths and markers configure.`,
  challenge: `Create pytest.ini for a project with a tests directory.

1. Set tests as the default test path
2. Add a useful default summary option
3. Register slow and integration markers with descriptions
4. Add one test for each marker
5. Run pytest from the project root and check for marker warnings

Then explain why adding options that skip important tests by default can be risky.`,
  proTips: [
    "Keep pytest.ini at the project root.",
    "Use testpaths to make default discovery predictable.",
    "Register every custom marker with a short description.",
    "Keep addopts helpful and visible rather than hiding failures.",
  ],
  commonMistakes: [
    {
      mistake: "Putting configuration under the wrong section",
      fix: "Use the [pytest] section for pytest settings.",
    },
    {
      mistake: "Forgetting to register a custom marker",
      fix: "Add each marker and its description under markers.",
    },
    {
      mistake: "Running from a directory where a different config is selected",
      fix: "Run from the project root and check pytest's configuration output.",
    },
    {
      mistake: "Adding defaults that skip important tests",
      fix: "Keep project-wide options transparent and ensure full checks remain easy to run.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Basic pytest.ini",
      code: `[pytest]
testpaths = tests
addopts = -ra
markers =
    slow: tests that take longer to run`,
    },
    {
      language: "python",
      title: "Use a registered marker",
      code: `import pytest

@pytest.mark.slow
def test_sample():
    assert sum([2, 3]) == 5`,
    },
  ],
  furtherReading: [
    {
      title: "pytest Documentation — Configuration",
      url: "https://docs.pytest.org/en/stable/reference/customize.html",
    },
    {
      title: "pytest Documentation — Registering Markers",
      url: "https://docs.pytest.org/en/stable/how-to/mark.html#registering-marks",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "pytest", "configuration", "organization"],
};

export default topic;
