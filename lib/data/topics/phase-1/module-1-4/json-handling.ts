import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "json-handling",
  title: "Working with JSON",
  summary:
    "Convert between JSON text and Python values, then read and write JSON fixture files.",
  whyItMatters:
    "API payloads and saved fixtures often use JSON. Parsing turns that text into values your tests can inspect.",
  notes: `JSON is a text format for structured data. It supports objects, arrays, strings, numbers, booleans and null.

### JSON is not Python source

~~~json
{
  "name": "Priya",
  "active": true,
  "manager": null,
  "roles": ["tester", "reviewer"]
}
~~~

JSON uses double-quoted keys and strings, lowercase true and false, and null. Standard JSON does not allow comments or trailing commas.

### Parse a string

~~~python
import json

text = '{"name": "Priya", "active": true, "manager": null}'
user = json.loads(text)

print(user["name"])
print(user["active"])
print(user["manager"] is None)
~~~

JSON objects become dictionaries, arrays become lists, booleans become bool values and null becomes None.

### Turn Python values into JSON text

~~~python
import json

user = {"name": "Priya", "active": True, "manager": None}
text = json.dumps(user, indent=2)
print(text)
~~~

dumps returns a string. It does not save a file.

### Work with files

~~~python
import json

with open("user.json", "w", encoding="utf-8") as file:
    json.dump({"name": "Priya", "active": True}, file, indent=2)

with open("user.json", encoding="utf-8") as file:
    user = json.load(file)

print(user["name"])
~~~

Remember:

- loads reads from a string
- dumps returns a string
- load reads from a file
- dump writes to a file

### Read nested data

~~~python
import json

text = '{"data": {"users": [{"id": 7, "name": "Priya"}]}}'
response = json.loads(text)
print(response["data"]["users"][0]["name"])
~~~

### Invalid JSON

Malformed text raises json.JSONDecodeError.

~~~python
import json

try:
    json.loads('{"active": True}')
except json.JSONDecodeError as error:
    print("Invalid JSON:", error.msg)
~~~

Exception handling is covered more fully later in this module.

### Parsing is not validation

Valid JSON can still have the wrong structure. Check that the parsed result has the shape your program expects before reading required fields.

Also, not every Python object is directly JSON-serializable. For example, convert a set to an appropriate list before encoding.

### The takeaway

Parse JSON with json, not eval. Choose the string or file function deliberately, and validate the resulting data.`,
  handsOn: `Create a JSON fixture round trip.

### Step 1: Create the script

~~~bash
cd /workspaces/playwright-academy/python-practice/filelab
touch json_lab.py
code json_lab.py
~~~

### Step 2: Save a fixture

~~~python
import json
from pathlib import Path

path = Path(__file__).resolve().parent / "order.json"
order = {
    "id": 1001,
    "paid": True,
    "coupon": None,
    "items": [
        {"name": "Tea", "quantity": 2},
        {"name": "Coffee", "quantity": 1},
    ],
}

with path.open("w", encoding="utf-8") as file:
    json.dump(order, file, indent=2)
~~~

### Step 3: Load and inspect

Add:

~~~python
with path.open(encoding="utf-8") as file:
    loaded = json.load(file)

print("Order:", loaded["id"])
print("Paid:", loaded["paid"])
print("First item:", loaded["items"][0]["name"])
print("Quantity:", sum(item["quantity"] for item in loaded["items"]))
print("Round trip:", loaded == order)
~~~

### Step 4: Run

~~~bash
python3 json_lab.py
~~~

Expect total quantity 3 and Round trip: True.

### Step 5: Compare formats

Open order.json and compare its true and null values with the Python source.

### Deliverable

Keep the script and generated fixture. Explain why loading the file gives a dictionary rather than a string.`,
  challenge: `Create json_fixture_lab.py.

1. Build a dictionary containing three fictional users
2. Give each user an id, name, active flag and list of roles
3. Save it as formatted JSON
4. Load it and print only active users
5. Convert the dictionary to a JSON string and parse the string back
6. Deliberately parse invalid JSON and catch JSONDecodeError

Then explain:

- How do load and loads differ?
- How do dump and dumps differ?
- What do true and null become in Python?
- Why can valid JSON still be unsuitable for your application?

Do not put passwords or real personal information in fixtures.`,
  proTips: [
    "Use loads for text and load for files.",
    "Use indent=2 for readable fixture files.",
    "Use Python True and None before encoding, not JSON keywords.",
    "Validate structure after parsing.",
    "Use fictional, non-secret fixture data.",
  ],
  commonMistakes: [
    {
      mistake: "Passing a filename string to json.load",
      fix: "Open the file and pass its file object to load.",
    },
    {
      mistake: "Expecting json.dumps to save a file",
      fix: "It returns text. Use dump with an open output file.",
    },
    {
      mistake: "Using Python True in JSON text",
      fix: "JSON text uses lowercase true. Python dictionaries use True.",
    },
    {
      mistake: "Using eval to parse JSON",
      fix: "Use json.loads, which parses JSON rather than executing Python.",
    },
    {
      mistake: "Appending several JSON objects to one ordinary JSON file",
      fix: "Save one complete document, such as a list of records.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Parse an API-style response",
      code: `import json

text = '{"status": "ok", "data": {"id": 7}}'
response = json.loads(text)
print(response["data"]["id"])`,
    },
    {
      language: "python",
      title: "Encode Python values",
      code: `import json

payload = {"active": True, "nickname": None, "roles": ["tester"]}
print(json.dumps(payload, indent=2))`,
    },
    {
      language: "python",
      title: "Check the parsed shape",
      code: `import json

data = json.loads('{"users": []}')

if not isinstance(data, dict):
    raise ValueError("Expected a JSON object")
if not isinstance(data.get("users"), list):
    raise ValueError("Expected a users list")

print("Valid basic shape")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — json",
      url: "https://docs.python.org/3/library/json.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "json", "fixtures", "files-json-exceptions"],
};

export default topic;