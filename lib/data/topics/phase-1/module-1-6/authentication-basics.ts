import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "authentication-basics",
  title: "Authentication Basics",
  summary:
    "Understand common API authentication patterns and pass credentials without exposing real secrets.",
  whyItMatters:
    "Many APIs restrict access. Tests need to send credentials through the documented mechanism and keep them out of source control.",
  notes: `Authentication helps an API identify a caller. The API documentation explains which credentials and request format to use.

### Basic authentication

Requests supports HTTP Basic authentication with the auth argument.

~~~python
import requests
from requests.auth import HTTPBasicAuth

response = requests.get(
    "https://httpbin.org/basic-auth/demo/demo-password",
    auth=HTTPBasicAuth("demo", "demo-password"),
    timeout=10,
)

print(response.status_code)
~~~

These are fictional demonstration credentials for a public test endpoint. Never use real credentials in a practice script.

### Bearer tokens

Some APIs expect a bearer token in the Authorization header.

~~~python
import requests

demo_token = "not-a-real-token"
headers = {"Authorization": f"Bearer {demo_token}"}

response = requests.get(
    "https://httpbin.org/headers",
    headers=headers,
    timeout=10,
)
print(response.status_code)
~~~

This endpoint echoes request headers; it does not authenticate the demonstration token.

### Protect credentials

Do not commit passwords or tokens to source files. A later topic covers environment variables, which provide a better way to supply local configuration. For production systems, use the approved secrets manager for that environment.

Use HTTPS for requests containing credentials. Do not send secrets to an endpoint unless you are authorized and trust the service.

### Authentication and authorization

Authentication asks who is making the request. Authorization determines what that caller is allowed to do. An authenticated request can still be denied access to a particular resource.

### The takeaway

Follow the API's documented authentication scheme. Use HTTPS, protect real credentials, and distinguish authentication from permission to perform an action.`,
  handsOn: `Try authentication patterns with public test endpoints and fictional values only.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch auth_lab.py
~~~

### Step 2: Paste into auth_lab.py

~~~python
import requests
from requests.auth import HTTPBasicAuth

response = requests.get(
    "https://httpbin.org/basic-auth/demo/demo-password",
    auth=HTTPBasicAuth("demo", "demo-password"),
    timeout=10,
)

print("Basic auth status:", response.status_code)
if response.ok:
    print("Authenticated:", response.json()["authenticated"])

headers = {"Authorization": "Bearer not-a-real-token"}
echo_response = requests.get(
    "https://httpbin.org/headers",
    headers=headers,
    timeout=10,
)
print("Header echo status:", echo_response.status_code)
~~~

### Step 3: Run it

~~~bash
python auth_lab.py
~~~

The bearer example only echoes a fictional header. It does not authenticate a real account.

### Deliverable

Keep the script. Explain the difference between authentication and authorization, and why real credentials should not be committed.`,
  challenge: `Write a short script using only fictional demonstration credentials.

1. Send a Basic Auth request to the documented httpbin test endpoint
2. Set a timeout
3. Print the status and authenticated field when the response is successful
4. Send a fictional bearer header to the header-echo endpoint
5. Explain why the echoed token is not proof of authentication

Do not use a real password, token, or account.`,
  proTips: [
    "Follow the authentication scheme in the API documentation.",
    "Use HTTPS when sending credentials.",
    "Keep real credentials out of source control.",
    "Authentication identifies a caller; authorization checks permissions.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming that every API uses the same authentication scheme",
      fix: "Read the endpoint documentation and use its required mechanism.",
    },
    {
      mistake: "Treating an echoed Authorization header as proof of authentication",
      fix: "An echo endpoint only shows what was sent; it does not validate credentials.",
    },
    {
      mistake: "Committing a real password or token",
      fix: "Use an approved protected configuration or secrets mechanism.",
    },
    {
      mistake: "Sending credentials to an unfamiliar endpoint",
      fix: "Use HTTPS and verify that the service is trusted and authorized to receive them.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Basic authentication with fictional test values",
      code: `import requests
from requests.auth import HTTPBasicAuth

response = requests.get(
    "https://httpbin.org/basic-auth/demo/demo-password",
    auth=HTTPBasicAuth("demo", "demo-password"),
    timeout=10,
)
print(response.status_code)
if response.ok:
    print(response.json()["authenticated"])`,
    },
    {
      language: "python",
      title: "Send a fictional bearer header",
      code: `import requests

response = requests.get(
    "https://httpbin.org/headers",
    headers={"Authorization": "Bearer not-a-real-token"},
    timeout=10,
)
print(response.status_code)
print(response.json()["headers"].get("Authorization"))`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Authentication",
      url: "https://requests.readthedocs.io/en/latest/user/authentication/",
    },
    {
      title: "MDN — HTTP Authentication",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "api", "requests", "authentication"],
};

export default topic;
