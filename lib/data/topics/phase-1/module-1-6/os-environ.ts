import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "os-environ",
  title: "Environment Variables with os.environ",
  summary:
    "Read configuration from environment variables instead of embedding it in source code.",
  whyItMatters:
    "Environment variables help keep machine-specific settings and credentials out of committed source files.",
  notes: `Environment variables are text values supplied to a process by its environment. Python exposes them through os.environ.

### Read a required setting

~~~python
import os

api_base_url = os.environ["API_BASE_URL"]
print("API base URL is configured")
~~~

Indexing os.environ raises KeyError when the variable is missing. This is useful when the setting is required.

### Read an optional setting

~~~python
import os

environment = os.environ.get("APP_ENV", "development")
print(environment)
~~~

The second argument is used when the variable is not set.

### Check required configuration

~~~python
import os

token = os.environ.get("API_TOKEN")
if not token:
    raise RuntimeError("API_TOKEN is required")

print("Token is configured")
~~~

Do not print or log the token itself. This example checks that it exists without revealing its value.

### Set a variable for one command

On a Unix-like shell:

~~~bash
API_BASE_URL=https://example.test python api_script.py
~~~

For local practice, use fictional values. Do not add a real token or secret to a source file or commit it to version control.

Environment variables are configuration, not a complete secrets-management system. Use the approved secret store for deployed applications.

### The takeaway

Read configuration from os.environ or os.environ.get. Fail clearly when required values are missing, and never print secrets.`,
  handsOn: `Read a non-secret environment setting.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch environ_lab.py
~~~

### Step 2: Paste into environ_lab.py

~~~python
import os

environment = os.environ.get("APP_ENV", "development")
api_base_url = os.environ.get(
    "API_BASE_URL",
    "https://jsonplaceholder.typicode.com",
)

print("Environment:", environment)
print("API base URL:", api_base_url)
~~~

### Step 3: Run with a value

~~~bash
APP_ENV=practice python environ_lab.py
~~~

### Step 4: Check a required setting

Read API_TOKEN with os.environ.get. If it is missing, raise a clear RuntimeError. If it exists, print only that it is configured. Do not print its value.

### Deliverable

Keep the script. Explain the difference between os.environ[] and os.environ.get().`,
  challenge: `Create a configuration script that reads APP_ENV and API_BASE_URL from the environment.

1. Give APP_ENV a development default
2. Read API_BASE_URL with a safe sample default
3. Check for an optional API_TOKEN
4. Raise a clear error if a required token is missing
5. Never print the token value

Then explain why environment variables are safer than hard-coding credentials but are not a full secrets-management solution.`,
  proTips: [
    "Use os.environ[] for required settings that should fail when missing.",
    "Use os.environ.get() when a default is appropriate.",
    "Check that required credentials exist without printing them.",
    "Use the approved secrets manager for deployed credentials.",
  ],
  commonMistakes: [
    {
      mistake: "Hard-coding a real token in a Python file",
      fix: "Read it from protected configuration and keep it out of source control.",
    },
    {
      mistake: "Printing an environment variable that contains a secret",
      fix: "Check whether it is configured without displaying its value.",
    },
    {
      mistake: "Using os.environ[] for an optional setting without handling absence",
      fix: "Use os.environ.get() when a default or missing value is acceptable.",
    },
    {
      mistake: "Assuming environment variables replace a secrets manager",
      fix: "Use the approved secrets system for deployed applications.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Read an optional setting",
      code: `import os

environment = os.environ.get("APP_ENV", "development")
print(environment)`,
    },
    {
      language: "python",
      title: "Require a setting without revealing it",
      code: `import os

token = os.environ.get("API_TOKEN")
if not token:
    raise RuntimeError("API_TOKEN is required")

print("Token is configured")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — os.environ",
      url: "https://docs.python.org/3/library/os.html#os.environ",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "configuration", "environment-variables"],
};

export default topic;
