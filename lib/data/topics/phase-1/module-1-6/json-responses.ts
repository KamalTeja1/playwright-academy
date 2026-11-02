import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "json-responses",
  title: "Working with JSON Responses",
  summary:
    "Parse JSON returned by an API and check the shape before using its values.",
  whyItMatters:
    "API response bodies are external data. Parsing and checking their structure helps tests report useful failures instead of crashing later.",
  notes: `An API response often contains JSON. Requests provides the json method to parse it into Python values.

### Parse an object

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
post = response.json()

print(post["id"])
print(post["title"])
~~~

JSON objects become dictionaries, arrays become lists, and JSON booleans and null become Python values.

### Check the response format

Not every response is JSON. Check the content type when the endpoint may return another format.

~~~python
content_type = response.headers.get("Content-Type", "")
if content_type.lower().startswith("application/json"):
    data = response.json()
    print(type(data).__name__)
else:
    print("Response is not JSON")
~~~

A JSON content type does not guarantee that the body has the structure your code expects.

### Check the parsed shape

~~~python
if isinstance(post, dict) and "title" in post:
    print(post["title"])
else:
    print("Expected a post object with a title")
~~~

Validate fields before using them, especially when response data controls later test steps.

### Parsing errors

If the body is not valid JSON, response.json() raises a decoding error. Check the status and response format before parsing, and handle expected error responses according to the API contract.

### The takeaway

Parse JSON with response.json(), then validate the type and fields your code relies on.`,
  handsOn: `Parse and inspect a sample response.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch json_response_lab.py
~~~

### Step 2: Paste into json_response_lab.py

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

content_type = response.headers.get("Content-Type", "")
print("Content type:", content_type)

data = response.json()
if isinstance(data, dict) and "title" in data:
    print("Title:", data["title"])
else:
    print("Unexpected response shape")
~~~

### Step 3: Run it

~~~bash
python json_response_lab.py
~~~

### Deliverable

Keep the script. Explain why valid JSON can still have the wrong shape for your test.`,
  challenge: `Create a script that reads a sample post response.

1. Send a GET request with a timeout
2. Inspect the response Content-Type
3. Parse the body as JSON
4. Check that the result is a dictionary with id and title fields
5. Print the title only after the checks pass

Then explain what kind of error response.json() can raise and why checking the data shape is separate from parsing.`,
  proTips: [
    "Use response.json() to parse a JSON body.",
    "Check the response Content-Type when the format is uncertain.",
    "Validate parsed types and required fields before using them.",
    "Treat API response data as external input.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming every response body contains JSON",
      fix: "Check the endpoint contract and response content type.",
    },
    {
      mistake: "Assuming parsing validates the application's required fields",
      fix: "Check the parsed value's type and required keys separately.",
    },
    {
      mistake: "Indexing into a value before checking its type",
      fix: "Validate the response shape before accessing nested data.",
    },
    {
      mistake: "Ignoring JSON decoding failures",
      fix: "Handle expected non-JSON or malformed responses explicitly.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Parse a sample JSON object",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
post = response.json()
print(post["id"], post["title"])`,
    },
    {
      language: "python",
      title: "Check the shape before reading a field",
      code: `data = {"id": 1, "title": "Sample"}

if isinstance(data, dict) and "title" in data:
    print(data["title"])
else:
    print("Unexpected response shape")`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — JSON Response Content",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/#json-response-content",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "json", "responses"],
};

export default topic;
