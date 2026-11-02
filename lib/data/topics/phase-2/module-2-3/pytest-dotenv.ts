import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "pytest-dotenv",
  title: "Loading Environment Variables with pytest-dotenv",
  summary:
    "Load test configuration from an environment file using the pytest-dotenv plugin.",
  whyItMatters:
    "Environment files can keep local test configuration out of test code, while helping each developer set up a consistent environment.",
  notes: `pytest-dotenv loads environment variables from files when pytest starts.

### Install the plugin

~~~bash
python -m pip install pytest-dotenv
~~~

### Configure environment files

Add the following to pytest.ini:

~~~text
[pytest]
env_files =
    .env
~~~

Create a local .env file:

~~~text
APP_ENV=practice
~~~

The plugin loads the configured values into the test process environment.

### Read a value in a test

~~~python
import os

def test_app_environment_is_available():
    assert os.environ["APP_ENV"] == "practice"
~~~

Run the test with:

~~~bash
python -m pytest
~~~

### Keep secrets out of Git

Do not commit a .env file containing real credentials. Add local secret files to .gitignore and provide a safe example file with non-secret placeholder values if the project needs one.

Environment files are convenient for local testing, but they are not a secrets manager. Use the approved secret store for deployed systems.

### The takeaway

Use pytest-dotenv to load local test configuration before tests run. Protect real secrets and keep environment-specific settings out of test source code.`,
  handsOn: `Load a non-secret setting from a local environment file.

### Step 1: Install the plugin

~~~bash
python -m pip install pytest-dotenv
~~~

### Step 2: Add this to pytest.ini

~~~text
[pytest]
env_files =
    .env
~~~

### Step 3: Create a local .env file

~~~text
APP_ENV=practice
~~~

### Step 4: Create tests/test_environment.py

~~~python
import os

def test_app_environment_is_available():
    assert os.environ["APP_ENV"] == "practice"
~~~

### Step 5: Run pytest

~~~bash
python -m pytest
~~~

Do not commit a real .env file or put real credentials in this exercise.

### Deliverable

Keep the test configuration. Explain when pytest-dotenv loads the environment file and why local secrets should be excluded from Git.`,
  challenge: `Configure pytest-dotenv to load a non-secret APP_ENV value.

1. Install the plugin
2. Add env_files to pytest.ini
3. Create a local .env with a fictional setting
4. Assert that the value is available through os.environ
5. Add the local environment file to .gitignore

Then explain why an example environment file should use placeholders rather than real credentials.`,
  proTips: [
    "Configure env_files in pytest.ini.",
    "Use non-secret values for practice.",
    "Add local environment files with secrets to .gitignore.",
    "Use an approved secrets manager for deployed credentials.",
  ],
  commonMistakes: [
    {
      mistake: "Using pytest-dotenv without installing it",
      fix: "Install the plugin in the active test environment.",
    },
    {
      mistake: "Expecting a variable to exist when its file is not configured",
      fix: "Add the environment file under env_files in pytest.ini.",
    },
    {
      mistake: "Committing a local .env file containing credentials",
      fix: "Ignore local secret files and keep real values out of version control.",
    },
    {
      mistake: "Treating an environment file as a full secrets-management system",
      fix: "Use the approved secrets service for deployed environments.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Configure an environment file",
      code: `[pytest]
env_files =
    .env`,
    },
    {
      language: "python",
      title: "Read a loaded environment value",
      code: `import os

def test_app_environment_is_available():
    assert os.environ["APP_ENV"] == "practice"`,
    },
  ],
  furtherReading: [
    {
      title: "pytest-dotenv Documentation",
      url: "https://pypi.org/project/pytest-dotenv/",
    },
    {
      title: "Python Docs — os.environ",
      url: "https://docs.python.org/3/library/os.html#os.environ",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "pytest", "plugins", "dotenv", "configuration"],
};

export default topic;
