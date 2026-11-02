import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "put-patch-requests",
  title: "PUT and PATCH Requests",
  summary:
    "Use PUT and PATCH to send updates to an API resource.",
  whyItMatters:
    "Update requests are common in API workflows. Knowing the difference helps tests send the intended data and verify the result.",
  notes: `PUT and PATCH are HTTP methods commonly used to update resources. Their exact behavior depends on the API contract.

### PUT: send a replacement representation

~~~python
import requests

payload = {
    "id": 1,
    "title": "Updated sample title",
    "body": "Fictional replacement data",
    "userId": 1,
}

response = requests.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    json=payload,
    timeout=10,
)

print(response.status_code)
print(response.json())
~~~

Many APIs treat PUT as replacing the resource representation. Send the fields required by that API.

### PATCH: send a partial update

~~~python
changes = {"title": "A new sample title"}

response = requests.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    json=changes,
    timeout=10,
)

print(response.status_code)
print(response.json())
~~~

PATCH is commonly used to update only selected fields. The API defines which fields it accepts and how it applies them.

### Verify the response

~~~updated = response.json()
print(updated["title"])
~~~

Check the response against the endpoint contract. A successful response does not guarantee every field was updated as expected.

### Idempotency and API behavior

PUT is defined as idempotent by HTTP semantics: repeating the same request should have the same intended effect. PATCH is not guaranteed to be idempotent. Real APIs can have additional rules, so read their documentation before retrying or repeating updates.

JSONPlaceholder simulates these updates for practice; it does not persist the changes.

### The takeaway

Use PUT for the API's replacement-style update and PATCH for its partial-update behavior. Follow the specific endpoint contract.`,
  handsOn: `Compare simulated PUT and PATCH updates.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch update_lab.py
~~~

### Step 2: Paste into update_lab.py

~~~python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
replacement = {
    "id": 1,
    "title": "Replacement sample title",
    "body": "Fictional replacement body",
    "userId": 1,
}

put_response = requests.put(url, json=replacement, timeout=10)
print("PUT:", put_response.status_code, put_response.json())

changes = {"title": "Partial sample title"}
patch_response = requests.patch(url, json=changes, timeout=10)
print("PATCH:", patch_response.status_code, patch_response.json())
~~~

### Step 3: Run it

~~~bash
python update_lab.py
~~~

The sample API simulates updates and does not persist them.

### Deliverable

Keep the script. Explain which payload represents a replacement and which represents a partial update.`,
  challenge: `Create an update exercise using the sample posts endpoint.

1. Send a PUT request with a complete fictional post representation
2. Send a PATCH request with only a title change
3. Set a timeout for both calls
4. Print each status and returned title
5. Compare the request bodies

Then explain why the API documentation determines which fields each update requires.`,
  proTips: [
    "Check the endpoint contract before choosing PUT or PATCH.",
    "Use json= to send the update body as JSON.",
    "Set timeouts for both update requests.",
    "Use a test API for practice and do not assume simulated changes persist.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming every API implements PUT and PATCH identically",
      fix: "Follow the documented behavior for the specific endpoint.",
    },
    {
      mistake: "Sending only one field with PUT when the API expects a full representation",
      fix: "Send the fields required by that API's PUT contract.",
    },
    {
      mistake: "Assuming PATCH is always safe to repeat",
      fix: "Check whether the operation is idempotent before retrying it.",
    },
    {
      mistake: "Treating a simulated test response as a persisted update",
      fix: "Remember that the sample API does not save these changes.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Send a replacement-style update",
      code: `import requests

payload = {
    "id": 1,
    "title": "Updated sample title",
    "body": "Fictional replacement data",
    "userId": 1,
}
response = requests.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    json=payload,
    timeout=10,
)
print(response.status_code)
print(response.json()["title"])`,
    },
    {
      language: "python",
      title: "Send a partial update",
      code: `import requests

response = requests.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    json={"title": "Updated sample title"},
    timeout=10,
)
print(response.status_code)
print(response.json()["title"])`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — PUT",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT",
    },
    {
      title: "MDN — PATCH",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "api", "requests", "put", "patch"],
};

export default topic;
