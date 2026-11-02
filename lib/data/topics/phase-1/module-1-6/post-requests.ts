import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "post-requests",
  title: "POST Requests",
  summary:
    "Send a JSON body with HTTP POST and inspect the server's response.",
  whyItMatters:
    "APIs commonly use POST to submit data or create a resource. Tests should verify what was sent and how the server responded.",
  notes: `A POST request sends data to a server. An API may use it to create a resource or perform an operation.

### Send a JSON body

~~~python
import requests

payload = {
    "title": "Sample test post",
    "body": "Fictional data for an API exercise",
    "userId": 1,
}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload,
    timeout=10,
)

print(response.status_code)
print(response.json())
~~~

The json parameter serializes a Python dictionary to JSON and sets the appropriate request content type.

JSONPlaceholder is a test API. It returns a simulated created resource; it does not persist the example as a real post.

### Check the response

~~~python
created = response.json()
print(created["title"])
print(created["userId"])
~~~

An API may return a different status or response shape depending on its contract. Check the documentation and verify the fields your test needs.

### Send JSON text directly

You can also serialize the body yourself, but then you must set the content type correctly. Prefer the json parameter for ordinary JSON requests.

### POST and repeated calls

POST is not generally guaranteed to be idempotent. Sending the same request twice may create two resources on a real API. Use test environments and understand the endpoint before repeating requests.

### The takeaway

Use the json parameter to send structured data as JSON. Check the response against the API's documented behavior, and use a test endpoint for practice.`,
  handsOn: `Send fictional data to the sample API.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch post_lab.py
~~~

### Step 2: Paste into post_lab.py

~~~python
import requests

payload = {
    "title": "Practice post",
    "body": "Fictional content for a request exercise",
    "userId": 1,
}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload,
    timeout=10,
)

print("Status:", response.status_code)
print("Response:", response.json())
~~~

### Step 3: Run it

~~~bash
python post_lab.py
~~~

The test API returns a simulated response. It does not save a real post.

### Step 4: Verify returned data

Read the parsed response and compare its title with the title in payload.

### Deliverable

Keep the script. Explain what the json parameter does and why this exercise uses a test API.`,
  challenge: `Create post_lab.py that sends a fictional test record to the sample posts endpoint.

1. Include a title, body, and userId in a Python dictionary
2. Send the dictionary with the json parameter
3. Set a timeout
4. Print the response status
5. Parse the response and check that its title matches the submitted title

Then explain why POST requests should not be repeated against an unfamiliar production API.`,
  proTips: [
    "Use json=payload to send a Python value as JSON.",
    "Set a timeout and inspect the API response.",
    "Use fictional data and a test endpoint for practice.",
    "Check the API contract before repeating a POST request.",
  ],
  commonMistakes: [
    {
      mistake: "Passing a dictionary as raw text instead of using json",
      fix: "Use the json parameter for a JSON request body.",
    },
    {
      mistake: "Assuming the server stored a resource because it returned one",
      fix: "Check the API documentation; a test endpoint may only simulate creation.",
    },
    {
      mistake: "Repeating POST requests against a real service without checking effects",
      fix: "Use a test environment and understand whether the operation creates data.",
    },
    {
      mistake: "Expecting every API to return the same status code",
      fix: "Verify the documented status and response contract for that endpoint.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Send a JSON request body",
      code: `import requests

payload = {
    "title": "Sample test post",
    "body": "Fictional exercise data",
    "userId": 1,
}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload,
    timeout=10,
)
print(response.status_code)
print(response.json()["title"])`,
    },
    {
      language: "python",
      title: "Compare submitted and returned data",
      code: `import requests

payload = {"title": "Practice post", "body": "Sample", "userId": 1}
response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload,
    timeout=10,
)
created = response.json()

print(created["title"] == payload["title"])`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Quickstart: More complicated POST requests",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/#more-complicated-post-requests",
    },
    {
      title: "MDN — POST",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "post", "json"],
};

export default topic;
