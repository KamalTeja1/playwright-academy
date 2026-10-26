import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "yaml-basics",
  title: "YAML Basics",
  summary:
    "Read simple YAML configuration using PyYAML, safe loading and basic structure checks.",
  whyItMatters:
    "Configuration should be readable and predictable. YAML offers a convenient format, but indentation and inferred types need care.",
  notes: `YAML is a text format for structured data. This lesson uses a small subset: mappings, lists and scalar values.

### A simple configuration

~~~yaml
environment: staging
timeout: 30
headless: true
browsers:
  - chromium
  - firefox
account:
  role: tester
~~~

Indent related values consistently using spaces, not tabs.

### Install the parser

Python needs an additional package for these examples. The distribution is named PyYAML, but the import is yaml.

~~~bash
python3 -m pip install PyYAML
~~~

Run this inside your practice virtual environment.

### Load YAML safely

~~~python
import yaml

text = """
environment: staging
timeout: 30
browsers:
  - chromium
  - firefox
"""

config = yaml.safe_load(text)
print(config["environment"])
print(config["browsers"][0])
~~~

Use safe_load rather than an unsafe object loader. Safe loading does not replace checks on the resulting values or limits on untrusted input.

### Check the document shape

A YAML document does not have to be a mapping. An empty document loads as None.

~~~python
import yaml

config = yaml.safe_load("")

if not isinstance(config, dict):
    print("Expected a configuration mapping")
~~~

Do not assume every successfully parsed document is a valid application configuration.

### Quote text that might be inferred

With PyYAML, unquoted values such as yes or on can become booleans. Quote them when you intend text.

~~~yaml
label: "on"
postal_code: "00123"
release_date: "2026-10-26"
enabled: true
~~~

Use true and false for intentional booleans, and inspect parsed types when uncertain.

### Read and write files

~~~python
import yaml

settings = {"timeout": 30, "browsers": ["chromium"]}

with open("settings.yaml", "w", encoding="utf-8") as file:
    yaml.safe_dump(settings, file, sort_keys=False)

with open("settings.yaml", encoding="utf-8") as file:
    loaded = yaml.safe_load(file)

print(loaded)
~~~

### Comments

YAML supports comments beginning with a hash sign. A basic load-and-dump round trip with PyYAML does not preserve the original comments and formatting.

### The takeaway

Use spaces, safe_load and explicit validation. Quote ambiguous text, keep secrets out of committed configuration, and do not expect formatting to survive a round trip.`,
  handsOn: `Use a separate Python practice environment.

### Step 1: Create the environment

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice/filelab
python3 -m venv python-practice/filelab/.venv
source python-practice/filelab/.venv/bin/activate
python -m pip install PyYAML
cd python-practice/filelab
touch config.yaml yaml_lab.py
code config.yaml yaml_lab.py
~~~

Keep this virtual environment out of Git. Do not add PyYAML to package.json.

### Step 2: Paste into config.yaml

~~~yaml
environment: staging
timeout: 30
headless: true
browsers:
  - chromium
  - firefox
label: "on"
~~~

### Step 3: Paste into yaml_lab.py

~~~python
from pathlib import Path
import yaml

folder = Path(__file__).resolve().parent

with (folder / "config.yaml").open(encoding="utf-8") as file:
    config = yaml.safe_load(file)

if not isinstance(config, dict):
    raise ValueError("Expected a configuration mapping")

timeout = config.get("timeout")
if type(timeout) is not int or timeout <= 0:
    raise ValueError("timeout must be a positive integer")

browsers = config.get("browsers")
if not isinstance(browsers, list) or not all(
    isinstance(browser, str) for browser in browsers
):
    raise ValueError("browsers must be a list of strings")

print(config["environment"])
print(timeout)
print(browsers)
print(type(config["label"]).__name__)

with (folder / "config-copy.yaml").open("w", encoding="utf-8") as file:
    yaml.safe_dump(config, file, sort_keys=False)
~~~

### Step 4: Run

~~~bash
python yaml_lab.py
~~~

### Step 5: Test validation

Change timeout to "thirty" and run again. Restore 30 afterward.

### Deliverable

Keep the two source files and generated copy. Explain why parsing alone did not validate timeout.`,
  challenge: `Create yaml_config_lab.py and a practice YAML configuration.

1. Include an environment name, positive timeout and browser list
2. Include a nested account mapping with a fictional role
3. Load it with safe_load
4. Reject documents whose top level is not a mapping
5. Validate the timeout and browser list
6. Save the validated data to a separate output file

Then:

- Compare quoted "on" with unquoted on using PyYAML
- Load an empty document and inspect its value
- Add a comment and inspect whether the output preserves it
- Explain why safe loading and application validation are different

Never store real credentials in this exercise.`,
  proTips: [
    "Use safe_load and safe_dump.",
    "Use spaces consistently for indentation.",
    "Quote values that must remain text.",
    "Validate the parsed structure before using it.",
    "Install practice dependencies in a virtual environment.",
  ],
  commonMistakes: [
    {
      mistake: "Installing a package named yaml instead of PyYAML",
      fix: "Install PyYAML, then import yaml.",
    },
    {
      mistake: "Assuming an empty document becomes an empty dictionary",
      fix: "It loads as None. Check the top-level type.",
    },
    {
      mistake: "Expecting every unquoted value to remain text",
      fix: "Quote ambiguous strings and check parsed types.",
    },
    {
      mistake: "Using an unsafe loader for configuration",
      fix: "Use safe_load and validate the resulting values.",
    },
    {
      mistake: "Expecting safe_dump to preserve comments",
      fix: "Treat this round trip as data serialization, not formatting preservation.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Load a small configuration",
      code: `import yaml

config = yaml.safe_load("timeout: 30\\nheadless: true\\n")
print(config["timeout"], config["headless"])`,
    },
    {
      language: "python",
      title: "Inspect inferred types",
      code: `import yaml

data = yaml.safe_load('flag: on\\nlabel: "on"\\n')
print(type(data["flag"]).__name__)
print(type(data["label"]).__name__)`,
    },
    {
      language: "python",
      title: "Reject an unexpected document shape",
      code: `import yaml

config = yaml.safe_load("- chromium\\n- firefox\\n")

if not isinstance(config, dict):
    print("Invalid configuration: expected a mapping")`,
    },
  ],
  furtherReading: [
    {
      title: "PyYAML Documentation",
      url: "https://pyyaml.org/wiki/PyYAMLDocumentation",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  tags: ["python", "yaml", "configuration", "files-json-exceptions"],
};

export default topic;