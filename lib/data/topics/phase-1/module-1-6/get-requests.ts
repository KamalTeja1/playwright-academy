import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "get-requests",
  title: "GET Requests",
  summary:
    "Use HTTP GET to retrieve data and inspect the response returned by an API.",
  whyItMatters:
    "API tests often begin by reading a resource. Understanding the response helps you check both status and returned data.",
  notes: `A GET request asks a server to return a resource. It is commonly used to read data.

### Send a GET request

~~~python
import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)

print(response.status_code)
print(response.url)
~~~

The response object contains information returned by the server, including its status code, headers, and body.

### Read a JSON response

~~~python
post = response.json()
print(post["id"])
print(post["title"])
~~~

The json method parses a JSON response and returns Python values. It can raise an exception if the response body is not valid JSON.

### Check the result

A successful response does not always mean the returned data is correct. Check the status and the fields your application needs.

~~~python
if response.status_code == 200:
    post = response.json()
    print("Post:", post["id"], post["title"])
else:
    print("Request failed:", response.status_code)
~~~

Later topics cover status-code helpers and more complete error handling.

### Read a collection

~~~python
response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    timeout=10,
)
posts = response.json()
print("Number of posts:", len(posts))
print("First title:", posts[0]["title"])
~~~

Treat API data as external input. Check that it has the shape your code expects before relying on fields.

### GET should not change server state

GET is intended to retrieve data. Use it for reading, not for actions that create, update, or delete resources.

### The takeaway

Send GET to read data. Inspect the response and parse JSON only when the server returns JSON.`,
  handsOn: `Read one sample post from the test API.

### Step 1: Create a script

~~~bash
cd /workspaces/playwright-academy/python-practice
touch get_lab.py
~~~

### Step 2: Paste into get_lab.py

~~~python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url, timeout=10)

print("Status:", response.status_code)
print("URL:", response.url)

post = response.json()
print("ID:", post["id"])
print("Title:", post["title"])
~~~

### Step 3: Run it

~~~bash
python get_lab.py
~~~

### Step 4: Read a collection

Change the URL to the posts collection endpoint. Print the number of items and the first item's title.

### Deliverable

Keep the script. Explain the difference between response.status_code and response.json().`,
  challenge: `Create get_posts_lab.py.

1. Request the sample posts collection
2. Set a finite timeout
3. Print the status code and number of posts
4. Print the first three post titles
5. Check that the parsed result is a list before indexing it

Then explain why a successful HTTP status alone does not prove that the response contains the data your program expects.`,
  proTips: [
    "Use GET to retrieve resources.",
    "Keep the response object so you can inspect its status and body.",
    "Parse JSON with response.json() when the response is JSON.",
    "Validate external data before relying on its fields.",
  ],
  commonMistakes: [
    {
      mistake: "Calling response.json() without knowing the response format",
      fix: "Check the API contract and handle parsing errors where needed.",
    },
    {
      mistake: "Assuming every successful response has the expected fields",
      fix: "Check the parsed value and required keys before using them.",
    },
    {
      mistake: "Using GET for an operation that changes data",
      fix: "Use the HTTP method intended by the API for that operation.",
    },
    {
      mistake: "Leaving the request without a timeout",
      fix: "Set a finite timeout for network calls.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Read a single post",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    timeout=10,
)
post = response.json()

print(response.status_code)
print(post["title"])`,
    },
    {
      language: "python",
      title: "Read a list of posts",
      code: `import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    timeout=10,
)
posts = response.json()

if isinstance(posts, list):
    print("Count:", len(posts))
    print("First title:", posts[0]["title"])`,
    },
  ],
  furtherReading: [
    {
      title: "Requests — Quickstart",
      url: "https://requests.readthedocs.io/en/latest/user/quickstart/",
    },
    {
      title: "MDN — GET",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "api", "requests", "get"],
};

export default topic;
