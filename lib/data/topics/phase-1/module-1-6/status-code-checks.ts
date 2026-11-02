import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "status-code-checks",
  title: "Checking Status Codes",
  summary:
    "Check HTTP response status codes and use Requests helpers to identify unsuccessful responses.",
  whyItMatters:
    "A request can complete and still fail at the HTTP level. Status checks make API tests detect that failure clearly.",
  notes: `An HTTP status code summarizes how the server handled a request. Check it before relying on the response body.

### Inspect a status code

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print(response.status_code)
print(response.reason)
~~~

The exact expected status depends on the operation and API contract. A GET request commonly returns 200 when successful.

### Check an expected status

~~~python
if response.status_code == 200:
    print("Post retrieved")
else:
    print("Unexpected status:", response.status_code)
~~~

For a test, compare against the status documented for that endpoint and operation.

### Use raise_for_status

~~~python
response.raise_for_status()
~~~

This raises an HTTPError for unsuccessful client or server responses. It is useful when your code should stop rather than continue with an error response.

It does not check whether the status is exactly the one your test expects. A response such as 204 is successful to raise_for_status, but may be unexpected for a test expecting 200.

### Check response.ok

~~~python
if response.ok:
    print("The response is in the successful range")
~~~

Use an explicit status comparison when a particular code is required. Use raise_for_status when unsuccessful HTTP responses should raise an error.

### The takeaway

Choose the check that matches the test: compare an exact status when required, and use raise_for_status to stop on HTTP errors.`,
  handsOn: `Check the status of a sample GET request.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch status_lab.py
~~~

### Step 2: Paste into status_lab.py

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

expected_status = 200
if response.status_code != expected_status:
    raise AssertionError(
        f"Expected {expected_status}, got {response.status_code}"
    )

response.raise_for_status()
print("Status check passed:", response.status_code)
~~~

### Step 3: Run it

~~~bash
python status_lab.py
~~~

### Deliverable

Keep the script. Explain why raise_for_status does not replace checking for one exact expected status.`,
  challenge: `Create a script that checks a GET request to the sample posts endpoint.

1. Set a timeout
2. Compare the returned status with the expected status
3. Raise a clear assertion failure if they differ
4. Call raise_for_status before parsing the response
5. Print a title only after the checks succeed

Then explain the difference between response.ok, raise_for_status(), and an exact status comparison.`,
  proTips: [
    "Check status before depending on the response body.",
    "Use an exact comparison when the test requires a specific code.",
    "Use raise_for_status to raise for unsuccessful HTTP responses.",
    "Keep expected statuses tied to the API contract.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming a completed network request was successful",
      fix: "Inspect the HTTP status code.",
    },
    {
      mistake: "Using response.ok when the test requires one exact status",
      fix: "Compare response.status_code with the expected code.",
    },
    {
      mistake: "Assuming raise_for_status checks for exactly 200",
      fix: "It raises for unsuccessful HTTP statuses, not every unexpected successful status.",
    },
    {
      mistake: "Parsing an error body as if it were the expected success response",
      fix: "Check the status and handle the API's documented error response first.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Require an exact status",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
if response.status_code != 200:
    raise AssertionError(f"Unexpected status: {response.status_code}")
print(response.json()["title"])`,
    },
    {
      language: "python",
      title: "Raise for unsuccessful HTTP responses",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
response.raise_for_status()
print("HTTP request succeeded")`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Response Status Codes",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/#response-status-codes",
    },
    {
      title: "MDN — HTTP Response Status Codes",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "status-codes"],
};

export default topic;
