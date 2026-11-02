import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "request-headers",
  title: "Request Headers",
  summary:
    "Send metadata such as accepted response formats and client information with an API request.",
  whyItMatters:
    "Headers help clients and servers agree on formats and provide request metadata without putting it in the URL.",
  notes: `HTTP headers carry metadata about a request or response. APIs use them for details such as content formats and client preferences.

### Send headers

~~~python
import requests

headers = {
    "Accept": "application/json",
    "X-Client-Name": "practice-script",
}

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    headers=headers,
    timeout=10,
)

print(response.status_code)
print(response.headers.get("Content-Type"))
~~~

The Accept header says which response format the client can handle. The server may still follow its own documented behavior.

### Request and response headers

The headers argument sends request headers. The response object's headers contain metadata returned by the server.

~~~python
print(response.request.headers.get("Accept"))
print(response.headers.get("Content-Type"))
~~~

Header names are case-insensitive in HTTP.

### Send JSON

When you use the json argument for a request body, Requests sets the JSON content type for you.

~~~python
payload = {"title": "Sample", "body": "Fictional data", "userId": 1}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=payload,
    headers={"Accept": "application/json"},
    timeout=10,
)
~~~

### Keep secrets out of source code

Some APIs require tokens in headers. Do not paste a real token into a script, lesson, or repository. Later in this module, you will learn how to read configuration from environment variables.

### The takeaway

Pass headers as a dictionary. Use them for request metadata, and keep credentials private.`,
  handsOn: `Send headers with a sample GET request.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch headers_lab.py
~~~

### Step 2: Paste into headers_lab.py

~~~python
import requests

headers = {
    "Accept": "application/json",
    "X-Client-Name": "practice-script",
}

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    headers=headers,
    timeout=10,
)

print("Status:", response.status_code)
print("Sent Accept:", response.request.headers.get("Accept"))
print("Response type:", response.headers.get("Content-Type"))
~~~

### Step 3: Run it

~~~bash
python headers_lab.py
~~~

### Deliverable

Keep the script. Identify which values were sent to the server and which came back in the response.`,
  challenge: `Create a script that sends an Accept header requesting JSON.

1. Add a fictional client-name header
2. Make a GET request to the sample posts endpoint
3. Set a timeout
4. Print the sent Accept header
5. Print the response Content-Type header

Then explain why a secret token should not be committed in a source file.`,
  proTips: [
    "Pass request headers with the headers argument.",
    "Inspect response headers separately from request headers.",
    "Use the json argument for JSON request bodies.",
    "Keep real tokens and passwords out of source code.",
  ],
  commonMistakes: [
    {
      mistake: "Reading a response header from the request headers",
      fix: "Use response.headers for metadata returned by the server.",
    },
    {
      mistake: "Assuming an Accept header guarantees a particular response",
      fix: "Check the actual response and the API contract.",
    },
    {
      mistake: "Hard-coding a real token in a script",
      fix: "Load credentials from a protected configuration source.",
    },
    {
      mistake: "Manually setting JSON content type while using json unnecessarily",
      fix: "Requests sets the JSON content type when you pass json=.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Send and inspect headers",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    headers={"Accept": "application/json"},
    timeout=10,
)

print(response.request.headers.get("Accept"))
print(response.headers.get("Content-Type"))`,
    },
    {
      language: "python",
      title: "Send a JSON body",
      code: `import requests

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json={"title": "Sample", "body": "Fictional data", "userId": 1},
    headers={"Accept": "application/json"},
    timeout=10,
)
print(response.status_code)`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Custom Headers",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/#custom-headers",
    },
    {
      title: "MDN — HTTP Headers",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "headers"],
};

export default topic;
