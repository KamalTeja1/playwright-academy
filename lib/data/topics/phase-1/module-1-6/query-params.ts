import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "query-params",
  title: "Query Parameters",
  summary:
    "Pass filters and options in a URL using Requests' params argument.",
  whyItMatters:
    "Query parameters let API clients request a particular page or filtered set of data without manually building URL strings.",
  notes: `Query parameters are values added to a URL, often to filter or page through results. They appear after a question mark in the URL.

### Pass parameters with Requests

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 1},
    timeout=10,
)

print(response.url)
print(response.status_code)
~~~

Requests encodes the values and adds them to the URL. This is safer and clearer than joining strings yourself.

### Use more than one parameter

~~~python
params = {
    "userId": 1,
    "_limit": 3,
}

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params=params,
    timeout=10,
)
posts = response.json()

print(response.url)
print(len(posts))
~~~

The API decides which parameter names it accepts and what they mean.

### Repeated parameters

Some APIs accept the same parameter more than once. Requests can encode a list of values:

~~~python
params = [
    ("tag", "python"),
    ("tag", "testing"),
]
~~~

Check the API documentation to learn its expected format.

### Validate the returned data

A filter can return an empty list. Do not assume there will always be a matching result.

~~~python
if posts:
    print(posts[0]["title"])
else:
    print("No matching posts")
~~~

### The takeaway

Use the params argument to build query strings. Follow the endpoint contract and handle empty results.`,
  handsOn: `Filter the sample posts by user.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch query_params_lab.py
~~~

### Step 2: Paste into query_params_lab.py

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 1, "_limit": 3},
    timeout=10,
)

print("URL:", response.url)
print("Status:", response.status_code)

posts = response.json()
print("Count:", len(posts))
for post in posts:
    print(post["id"], post["title"])
~~~

### Step 3: Run it

~~~bash
python query_params_lab.py
~~~

### Deliverable

Keep the script. Explain how Requests adds the parameters and why an empty result should be handled.`,
  challenge: `Create a script that requests the sample posts for one user.

1. Pass userId and _limit with the params argument
2. Print the final URL and status code
3. Parse the response as JSON
4. Print the titles when results exist
5. Print a clear message when the result list is empty

Then explain why the API documentation determines the parameter names and meanings.`,
  proTips: [
    "Pass query values through the params argument.",
    "Let Requests encode spaces and other special characters.",
    "Check the final URL while learning or debugging.",
    "Handle empty result collections.",
  ],
  commonMistakes: [
    {
      mistake: "Building a query string by joining unescaped text",
      fix: "Pass a dictionary or sequence of pairs to params.",
    },
    {
      mistake: "Assuming every API uses the same filter names",
      fix: "Follow the endpoint documentation.",
    },
    {
      mistake: "Indexing the first result without checking for an empty list",
      fix: "Check whether results exist before using an item.",
    },
    {
      mistake: "Putting private credentials in a URL",
      fix: "Use the authentication method documented by the API.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Send a filtered request",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 1, "_limit": 3},
    timeout=10,
)
print(response.url)
print(response.status_code)
print(response.json())`,
    },
    {
      language: "python",
      title: "Handle an empty result",
      code: `posts = []

if posts:
    print(posts[0])
else:
    print("No matching posts")`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Passing Parameters in URLs",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/#passing-parameters-in-urls",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "query-parameters"],
};

export default topic;
