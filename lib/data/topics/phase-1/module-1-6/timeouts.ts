import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "timeouts",
  title: "Request Timeouts",
  summary:
    "Set finite connection and response timeouts so network calls do not wait indefinitely.",
  whyItMatters:
    "Networks can be slow or unavailable. Timeouts help tests fail clearly instead of hanging without limit.",
  notes: `A timeout limits how long Requests waits for a network operation. Always set one for API calls.

### Set one timeout value

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)
~~~

The value is in seconds. If the server does not respond in time, Requests raises a timeout exception.

### Set connection and read timeouts separately

~~~python
response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=(3, 10),
)
~~~

The first value limits how long to wait to connect. The second limits how long to wait for data after the connection is made.

A read timeout is not a strict limit on the total time for the whole download. It limits the wait between received data.

### Handle an expected timeout

~~~python
import requests

try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=(3, 10),
    )
except requests.exceptions.Timeout:
    print("The request took too long")
~~~

Choose timeout values that suit the service and test. Very short values can fail on a slow connection; very long values make failures take longer to report.

### The takeaway

Set finite timeouts on network calls. Use separate connect and read values when you need more control, and handle expected timeout failures explicitly.`,
  handsOn: `Try a request with a finite timeout.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch timeout_lab.py
~~~

### Step 2: Paste into timeout_lab.py

~~~python
import requests

try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=(3, 10),
    )
except requests.exceptions.Timeout:
    print("The request took too long")
else:
    print("Status:", response.status_code)
~~~

### Step 3: Run it

~~~bash
python timeout_lab.py
~~~

### Deliverable

Keep the script. Explain what the connection and read timeout values control.`,
  challenge: `Create a script that makes a GET request with separate connection and read timeouts.

1. Use a finite connection timeout and read timeout
2. Catch requests.exceptions.Timeout
3. Print the response status if the request completes
4. Explain why a read timeout does not necessarily cap the total download time

Use the sample posts endpoint.`,
  proTips: [
    "Set a timeout on each network call.",
    "Use a tuple to set connection and read timeouts separately.",
    "Choose values that fit the service and your test environment.",
    "Handle expected timeout failures without hiding unrelated errors.",
  ],
  commonMistakes: [
    {
      mistake: "Making a network request without a timeout",
      fix: "Pass a finite timeout so the call cannot wait indefinitely.",
    },
    {
      mistake: "Treating the read timeout as a total download deadline",
      fix: "It limits the wait for incoming data, not necessarily total elapsed time.",
    },
    {
      mistake: "Catching every exception as though it were a timeout",
      fix: "Catch the specific timeout exception and allow unrelated failures to surface.",
    },
    {
      mistake: "Choosing a timeout so short that normal network delays fail",
      fix: "Use values appropriate for the service and test environment.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Set a single timeout",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)`,
    },
    {
      language: "python",
      title: "Handle a timeout",
      code: `import requests

try:
    response = requests.get(
        "https://jsonplaceholder.typicode.com/posts/1",
        timeout=(3, 10),
    )
except requests.exceptions.Timeout:
    print("The request took too long")
else:
    print(response.status_code)`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Timeouts",
      url: "https://requests.readthedocs.io/en/latest/user/advanced/#timeouts",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "timeouts"],
};

export default topic;
