import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "http-headers",
  title: "HTTP Headers",
  summary:
    "Headers are small labels attached to every request and response. They carry the extra details that make the web work.",
  whyItMatters:
    "Login tokens, content types and caching all travel in headers. API tests fail often because a header is missing or wrong.",
  notes: `Headers are **small labels attached to a request or a response**. They carry extra information about the message.

Think of a courier parcel. The box has the item inside. But the outside has labels: sender, address, Fragile, Handle with care, Cash on delivery. Those labels tell everyone how to treat the parcel. Headers are those labels.

Every header is a simple pair: a name, a colon, and a value.

~~~text
Content-Type: application/json
~~~

### Request headers

Your browser sends these to the server.

- **Host**: which website you want
- **User-Agent**: which browser and system you are using
- **Accept**: what kind of answer you can read, like text/html or application/json
- **Content-Type**: what kind of data you are sending in the body
- **Authorization**: your login proof, such as a token
- **Cookie**: small saved data the server gave you earlier

### Response headers

The server sends these back.

- **Content-Type**: what the answer is, like text/html or application/json
- **Set-Cookie**: asks the browser to save a cookie
- **Cache-Control**: how long the answer can be saved
- **Location**: where to go next, used with redirects
- **Content-Length**: size of the body

### Content-Type in detail

This one causes many beginner bugs.

When you send JSON, you must say so:

~~~text
Content-Type: application/json
~~~

If you forget, the server may not understand your body and return 400 or 415. Playwright adds this for you when you pass data as a dictionary, but it is good to know.

### Authorization: the entry pass

Most APIs need proof that you are allowed. A common form is a bearer token.

~~~text
Authorization: Bearer abc123token
~~~

It is like the wristband at a wedding or a concert. No wristband, no entry. A missing or expired token usually gives 401.

Keep tokens secret. Never paste a real token into a public repo or a screenshot.

### Cookies travel in headers

When you log in, the server sends Set-Cookie. Your browser saves it. On the next request, the browser sends it back in the Cookie header automatically. That is how the server remembers you, even though HTTP forgets. We study cookies fully in a later topic.

### Cache-Control

This tells the browser how long to keep a saved copy.

~~~text
Cache-Control: max-age=3600
~~~

That means keep this for one hour. Caching makes pages fast. But it can also confuse tests, because you may see old data. Playwright starts each test with a fresh browser context, so this is usually not a problem.

### Seeing headers in DevTools

Open the Network tab. Click any row. Open the Headers section. You will see Request Headers and Response Headers in two groups.

### Headers in Playwright

You can set headers for a whole browser context:

~~~python
context = browser.new_context(
    extra_http_headers={"X-Test-Run": "chai-101"}
)
~~~

You can send headers with an API call:

~~~python
r = page.request.get(
    "https://api.example.com/profile",
    headers={"Authorization": "Bearer abc123token"},
)
print(r.status)
~~~

You can read response headers too:

~~~python
response = page.goto("https://example.com")
print(response.headers["content-type"])
~~~

Notice the lowercase name. Playwright gives header names in lowercase, because header names are not case sensitive.

### Custom headers

Teams often add their own, usually starting with X-. For example, X-Request-Id helps developers trace one request through many servers. Ask your team which custom headers matter.

### A debugging habit

When an API test fails with 401, 415 or odd data, look at the headers first. Check Authorization, Content-Type and Cookie. The answer is often right there.`,
  handsOn: `Let's read real headers in Chrome.

### Step 1: Open the Network tab

Open any website. Open DevTools and click the Network tab. Refresh the page.

### Step 2: Read request headers

Click the first row. Open the Headers section. Scroll to Request Headers.

Find and write down:

- Host
- User-Agent
- Accept

### Step 3: Read response headers

Scroll to Response Headers. Find:

- Content-Type
- Cache-Control
- Any Set-Cookie line

### Step 4: Compare an HTML request and a data request

Pick the Fetch/XHR filter. Click one row. Compare its Content-Type with the first row. One is usually text/html. The other is usually application/json.

### Step 5: Send your own header

In the Console, run:

~~~javascript
fetch("https://httpbin.org/headers", {
  headers: { "X-Practice": "hello-from-chai" },
})
  .then((r) => r.json())
  .then(console.log);
~~~

The response echoes back the headers it received. You should see your X-Practice header.

### Step 6: Write the Playwright version

Write this in your notes:

~~~python
r = page.request.get(
    "https://httpbin.org/headers",
    headers={"X-Practice": "hello-from-chai"},
)
print(r.json())
~~~

### Deliverable

You read request and response headers. You sent a custom header. You wrote a Playwright call with headers.`,
  challenge: `Pick any website that has a login, or use a practice site.

In the Network tab, find the request that happens when the page loads. Then do these:

1. List three request headers and explain each in one line
2. List three response headers and explain each in one line
3. Find a Set-Cookie header, or explain why you could not find one
4. Find the Content-Type of an image request and a data request
5. Explain what would go wrong if you sent a JSON body without the right Content-Type

Then write a Playwright API snippet that calls a protected endpoint with an Authorization header, and prints the status.

Use a made-up token. Never use a real one in your notes.`,
  proTips: [
    "Check Authorization, Content-Type and Cookie first when an API test fails.",
    "Header names are not case sensitive. Playwright shows them in lowercase.",
    "Never paste real tokens into notes, screenshots or public repos.",
    "Use extra_http_headers on a context when every request in a test needs the same header.",
    "Click a request in the Network tab and use Copy as cURL to see every header at once.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting Content-Type when sending JSON",
      fix: "Add Content-Type: application/json, or let Playwright add it by passing data as a dictionary.",
    },
    {
      mistake: "Hardcoding a real token in a test file",
      fix: "Read tokens from environment variables or a secure setup step. Never commit secrets.",
    },
    {
      mistake: "Looking for a header with the wrong letter case",
      fix: "Header names are not case sensitive. Use lowercase keys when reading from Playwright responses.",
    },
    {
      mistake: "Confusing request headers with response headers",
      fix: "Request headers go from browser to server. Response headers come back. DevTools shows them in separate groups.",
    },
    {
      mistake: "Being confused by old cached data",
      fix: "Check Cache-Control in the response. Use a fresh browser context in tests to avoid stale data.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Common request headers",
      code: `Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Content-Type: application/json
Authorization: Bearer abc123token
Cookie: session=xyz789`,
    },
    {
      language: "text",
      title: "Common response headers",
      code: `Content-Type: application/json
Cache-Control: max-age=3600
Set-Cookie: session=xyz789; HttpOnly
Content-Length: 512`,
    },
    {
      language: "python",
      title: "Send and read headers in Playwright",
      code: `r = page.request.get(
    "https://api.example.com/profile",
    headers={"Authorization": "Bearer abc123token"},
)
print(r.status)
print(r.headers["content-type"])`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — HTTP headers",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
    },
    {
      title: "Playwright — Network (HTTP headers)",
      url: "https://playwright.dev/python/docs/network",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["http", "headers", "authorization", "content-type", "web-fundamentals"],
};

export default topic;