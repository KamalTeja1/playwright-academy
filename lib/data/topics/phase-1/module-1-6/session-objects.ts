import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "session-objects",
  title: "Requests Session Objects",
  summary:
    "Reuse a Session to share request settings and connections across multiple API calls.",
  whyItMatters:
    "A session keeps common headers and settings together, and can reuse connections when a script makes several requests.",
  notes: `A requests.Session object persists settings across requests. It can also reuse connections to the same host.

### Make requests through a session

~~~python
import requests

with requests.Session() as session:
    first = session.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=10,
    )
    second = session.get(
        "https://jsonplaceholder.typicode.com/posts/2",
        timeout=10,
    )

print(first.status_code, second.status_code)
~~~

Using a with block closes the session when the work is finished.

### Set common headers once

~~~python
import requests

with requests.Session() as session:
    session.headers.update({"Accept": "application/json"})
    response = session.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=10,
    )
    print(response.request.headers.get("Accept"))
~~~

A session can keep cookies and other settings between requests. Be mindful of this shared state when writing tests.

### Per-request options still work

Pass a header or parameter to one request when it should not apply to every request made by the session.

### Keep sessions scoped

Use a session for a related set of calls, then close it. Do not share mutable session state between unrelated tests unless you intentionally want them to share cookies or configuration.

### The takeaway

Use a Session when related requests share settings or can benefit from connection reuse. Close it when finished and keep test state isolated.`,
  handsOn: `Use a session for two sample requests.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch session_lab.py
~~~

### Step 2: Paste into session_lab.py

~~~python
import requests

with requests.Session() as session:
    session.headers.update({"Accept": "application/json"})

    first = session.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=10,
    )
    second = session.get(
        "https://jsonplaceholder.typicode.com/posts/2",
        timeout=10,
    )

    print("Shared header:", first.request.headers.get("Accept"))
    print("Statuses:", first.status_code, second.status_code)
~~~

### Step 3: Run it

~~~bash
python session_lab.py
~~~

### Deliverable

Keep the script. Explain what settings the two requests share and why the with block is useful.`,
  challenge: `Create a script that uses one Session for two GET requests.

1. Set a common Accept header on the session
2. Request two sample posts
3. Set a timeout on both requests
4. Print the status codes and one title from each response
5. Close the session with a context manager

Then explain why unrelated tests should not accidentally share cookies or other mutable session state.`,
  proTips: [
    "Use a Session for related requests that share settings.",
    "A Session can reuse connections and persist cookies.",
    "Use a context manager so the session closes cleanly.",
    "Keep session state isolated between unrelated tests.",
  ],
  commonMistakes: [
    {
      mistake: "Creating a new session for every related request without a reason",
      fix: "Reuse one session when requests share settings or connection context.",
    },
    {
      mistake: "Leaving a session open after its work is complete",
      fix: "Use a with block or explicitly close the session.",
    },
    {
      mistake: "Sharing cookies between tests unintentionally",
      fix: "Give unrelated tests separate session state.",
    },
    {
      mistake: "Assuming session-wide settings cannot be overridden",
      fix: "Pass per-request options when one call needs different settings.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Reuse session settings",
      code: `import requests

with requests.Session() as session:
    session.headers.update({"Accept": "application/json"})
    response = session.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=10,
    )
    print(response.status_code)
    print(response.json()["title"])`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Session Objects",
      url: "https://requests.readthedocs.io/en/latest/user/advanced/#session-objects",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "sessions"],
};

export default topic;
