import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "delete-requests",
  title: "DELETE Requests",
  summary:
    "Send an HTTP DELETE request and interpret the response described by the API contract.",
  whyItMatters:
    "Cleanup is part of many API workflows. Tests need to understand deletion responses and avoid removing data from real services.",
  notes: `A DELETE request asks an API to remove a resource. The endpoint decides what deletion means and what response it returns.

### Delete a sample resource

~~~python
import requests

response = requests.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print(response.status_code)
print(response.text)
~~~

JSONPlaceholder is a public test API. Its response is simulated and does not delete a real post.

### The response may have no body

Some APIs return a status with an empty body after deletion. Do not call response.json() unless the endpoint says the response contains JSON.

~~~python
if response.content:
    print(response.json())
else:
    print("The response has no body")
~~~

### Check the API contract

An API may return different success statuses, such as a response with content or a response without content. It may also return an error if the resource is missing or the caller is not allowed to delete it.

Do not assume deletion succeeded only because the request completed. Check the documented status and any required response fields.

### Use DELETE carefully

A DELETE request can remove data on a real service. Practise with test APIs or data you are authorized to manage. Never point a learning script at an unfamiliar production service.

### The takeaway

DELETE requests can have lasting effects. Use an authorized test environment, set a timeout, and interpret the response according to the API contract.`,
  handsOn: `Send a DELETE request to the sample API.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch delete_lab.py
~~~

### Step 2: Paste into delete_lab.py

~~~python
import requests

response = requests.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print("Status:", response.status_code)
if response.content:
    print("Body:", response.text)
else:
    print("No response body")
~~~

### Step 3: Run it

~~~bash
python delete_lab.py
~~~

The test API simulates the request. It does not delete a real post.

### Deliverable

Keep the script. Explain why you check whether the response has a body before trying to parse JSON.`,
  challenge: `Create delete_lab.py using only the sample posts endpoint.

1. Send a DELETE request for a sample resource
2. Set a finite timeout
3. Print the status code
4. Print the response text when present
5. Explain why a successful request may return no JSON body

Do not send DELETE requests to real services or data you are not authorized to manage.`,
  proTips: [
    "Use DELETE only with an authorized test resource.",
    "Set a timeout on the request.",
    "Check whether a response body exists before parsing it.",
    "Verify the response status against the endpoint contract.",
  ],
  commonMistakes: [
    {
      mistake: "Sending DELETE to a real resource while practising",
      fix: "Use a public test API or an environment you are authorized to manage.",
    },
    {
      mistake: "Calling response.json() when the response body is empty",
      fix: "Check response.content or the API contract before parsing JSON.",
    },
    {
      mistake: "Assuming every API returns the same deletion status",
      fix: "Check the documented response for the endpoint.",
    },
    {
      mistake: "Treating a completed request as proof that deletion succeeded",
      fix: "Inspect and verify the returned status and response.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Send a sample DELETE request",
      code: `import requests

response = requests.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)
print(response.text)`,
    },
    {
      language: "python",
      title: "Handle an optional response body",
      code: `import requests

response = requests.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

if response.content:
    print(response.json())
else:
    print("No response body")`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — DELETE",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE",
    },
    {
      title: "Requests — Quickstart",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "delete"],
};

export default topic;
