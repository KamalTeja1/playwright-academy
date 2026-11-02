import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "retries",
  title: "Retrying Requests",
  summary:
    "Retry selected temporary failures carefully, with limits and a delay between attempts.",
  whyItMatters:
    "A brief network issue can interrupt a test. A controlled retry can help with transient failures without hiding real problems.",
  notes: `A retry sends a request again after a failure. Retries can help with temporary network errors, but they must be limited and used carefully.

### Retry a safe read request

Requests can use urllib3's Retry policy with an HTTP adapter.

~~~python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

retry_policy = Retry(
    total=3,
    backoff_factor=0.2,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=frozenset(["GET"]),
)

session = requests.Session()
adapter = HTTPAdapter(max_retries=retry_policy)
session.mount("https://", adapter)

response = session.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)
~~~

The policy allows a limited number of retries for the selected status codes. The backoff adds a delay between attempts.

### Retry only when it is safe

Repeating a request can repeat its effect. GET is generally safe to retry because it retrieves data. A POST may create a second resource if repeated.

Only retry methods and failures that the API contract says are safe. Do not retry every error without a limit.

### Keep timeouts

Retries do not replace timeouts. Each attempt still needs a finite timeout, and multiple attempts can increase the overall wait.

### Avoid hiding persistent failures

After the retry limit is reached, let the failure be visible to the caller or test. A retry policy should not turn a broken service into a success-shaped result.

### The takeaway

Use a small retry limit, a backoff, and a deliberate list of retryable outcomes. Retry only operations that are safe to repeat.`,
  handsOn: `Configure retries for a GET request.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch retry_lab.py
~~~

### Step 2: Paste into retry_lab.py

~~~python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

policy = Retry(
    total=2,
    backoff_factor=0.1,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=frozenset(["GET"]),
)

session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=policy))

response = session.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print("Status:", response.status_code)
print("Title:", response.json()["title"])
~~~

### Step 3: Run it

~~~bash
python retry_lab.py
~~~

### Deliverable

Keep the script. Explain why this policy retries GET but not POST, and why it still sets a timeout.`,
  challenge: `Create a retry policy for a read-only GET request.

1. Set a small maximum retry count
2. Add a backoff delay
3. Select a few temporary server or rate-limit status codes
4. Set a timeout on the request
5. Explain why blindly retrying POST can repeat an operation

Use only the sample posts endpoint.`,
  proTips: [
    "Keep retry counts small and finite.",
    "Use backoff to avoid immediately repeating every attempt.",
    "Retry only methods and failures that are safe for the API.",
    "Keep timeouts configured even when retries are enabled.",
  ],
  commonMistakes: [
    {
      mistake: "Retrying every HTTP method without checking its effects",
      fix: "Retry only operations that are safe to repeat under the API contract.",
    },
    {
      mistake: "Using unlimited retries",
      fix: "Set a finite retry limit so persistent failures remain visible.",
    },
    {
      mistake: "Adding retries without a timeout",
      fix: "Set a finite timeout for each request attempt.",
    },
    {
      mistake: "Treating a retry as proof that a service failure is harmless",
      fix: "Let the final failure surface after the configured attempts.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Retry selected GET failures",
      code: `import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

policy = Retry(
    total=2,
    backoff_factor=0.1,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=frozenset(["GET"]),
)
session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=policy))

response = session.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
print(response.status_code)`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — HTTPAdapter",
      url: "https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter",
    },
    {
      title: "urllib3 — Retry",
      url: "https://urllib3.readthedocs.io/en/stable/reference/urllib3.util.html#urllib3.util.Retry",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "api", "requests", "retries"],
};

export default topic;
