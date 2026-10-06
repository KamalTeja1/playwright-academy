import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "http-status-codes",
  title: "HTTP Status Codes",
  summary:
    "A three-digit number tells you how a request went. Learn the families and the codes you will meet most.",
  whyItMatters:
    "Status codes are the first clue when a test fails. Reading them correctly saves hours of guessing.",
  notes: `A status code is a **three-digit number** the server sends back. It tells you how your request went.

Think of a courier delivery. The tracking page says Delivered, Out for delivery, Address not found, or Warehouse problem. You understand the situation in one glance. Status codes do the same for web requests.

### The five families

The first digit tells you the family.

- **1xx**: information. Rare in daily work.
- **2xx**: success. All good.
- **3xx**: redirect. Go somewhere else.
- **4xx**: client error. You sent something wrong.
- **5xx**: server error. The server had a problem.

If you remember only one thing, remember this. 4xx means the fault is on the asking side. 5xx means the fault is on the answering side.

### 2xx: success

- **200 OK**: the request worked. The usual answer for GET.
- **201 Created**: a new record was made. Common after POST.
- **204 No Content**: it worked, and there is nothing to send back. Common after DELETE.

### 3xx: redirects

- **301 Moved Permanently**: the page has a new address for good
- **302 Found**: a temporary move. Login pages use it a lot
- **304 Not Modified**: your saved copy is still fresh, so use that

Think of a shop that shifted to a new address. The old board says Moved to MG Road. The browser follows it automatically. Playwright follows redirects too.

### 4xx: you made a mistake

- **400 Bad Request**: the request was badly formed. For example, broken data.
- **401 Unauthorized**: you are not logged in, or your token is wrong
- **403 Forbidden**: you are logged in, but not allowed here
- **404 Not Found**: no such page or record
- **409 Conflict**: the request clashes with existing data, like a duplicate email
- **422 Unprocessable Entity**: the data was readable but failed validation
- **429 Too Many Requests**: you are sending too fast. Slow down

A handy way to tell 401 from 403. 401 is a guard saying, "Who are you?" 403 is a guard saying, "I know you, but you cannot enter this room."

### 5xx: server trouble

- **500 Internal Server Error**: something broke on the server
- **502 Bad Gateway**: one server got a bad answer from another
- **503 Service Unavailable**: the server is busy or down for maintenance
- **504 Gateway Timeout**: a server waited too long for another one

If you see 5xx, it is usually not your test's fault. Report it to the developers with the request details.

### Status codes in Playwright

You can read the code from any response.

~~~python
response = page.goto("https://example.com/missing")
print(response.status)
print(response.ok)
~~~

The property ok is true for codes from 200 to 299.

For API calls:

~~~python
r = page.request.post("https://api.example.com/users", data={"name": "Divya"})
assert r.status == 201
~~~

You can also use the built-in check:

~~~python
from playwright.sync_api import expect

expect(r).to_be_ok()
~~~

### Test the unhappy path too

A good test suite checks failures, not only success. For example:

- Wrong password should give 401
- Missing page should give 404
- Duplicate email should give 409

These tests prove your app handles errors properly.

### A subtle point

A page can show a pretty error message while the server still sends 200. Or the page can look fine while an API call behind it returned 500. Always check the Network tab if the screen and the behaviour do not match.

### How to read a code fast

Look at the first digit. Then read the name. Then ask: was it my request, or the server? That simple habit solves most confusion.`,
  handsOn: `Let's see status codes live in Chrome.

### Step 1: Open the Network tab

Open any website. Open DevTools and click the Network tab. Refresh the page.

### Step 2: Read the Status column

Look at the Status column. Most rows should say 200. Some may say 304 or 301.

Click on one 304 row, if you see it. Read the response headers. Notice the body is not sent again.

### Step 3: Trigger a 404

Visit a page that does not exist. For example, add /no-such-page at the end of any site address.

Check the Network tab. The first row should show 404.

### Step 4: Try a free status-code service

In the Console, run:

~~~javascript
fetch("https://httpstat.us/418").then((r) => console.log(r.status, r.statusText));
fetch("https://httpstat.us/500").then((r) => console.log(r.status, r.statusText));
~~~

If that site is slow or blocked, any 404 page will do the job.

### Step 5: Write a Playwright check

Write this in your notes:

~~~python
response = page.goto("https://example.com/no-such-page")
assert response.status == 404
~~~

### Deliverable

You saw 200, a redirect or 304, and a 404 in DevTools. You wrote one Playwright check on a status code.`,
  challenge: `Make a table in a notes file with three columns: Situation, Status code, Why.

Fill it for these situations:

1. You open a product page that exists
2. You create a new order with POST
3. You delete an order and the server sends nothing back
4. You open an order that was deleted
5. You call an API without logging in
6. You are logged in as a normal user and call an admin API
7. You sign up with an email that already exists
8. The payment server crashes

Then write three Playwright assertions for any three of these, using response.status or expect(response).to_be_ok().

Finally, explain in your own words the difference between 401 and 403, using a simple example from daily life.`,
  proTips: [
    "Look at the first digit first. 2 is good, 3 is move, 4 is your fault, 5 is server fault.",
    "Test the unhappy paths. A 401 or 404 check often finds real bugs.",
    "Use expect(response).to_be_ok() for a quick success check in API tests.",
    "A red row in the Network tab is the fastest clue when a page looks broken.",
    "Report 5xx errors to developers along with the URL, time and request body.",
  ],
  commonMistakes: [
    {
      mistake: "Treating every non-200 code as a failure",
      fix: "201, 204 and 304 are fine. Check the exact code you expect for that action.",
    },
    {
      mistake: "Mixing up 401 and 403",
      fix: "401 means not logged in or bad credentials. 403 means logged in but not allowed.",
    },
    {
      mistake: "Trusting the screen and ignoring the status",
      fix: "A page can look fine while an API call returned 500. Always check the Network tab when behaviour is odd.",
    },
    {
      mistake: "Blaming the test for a 5xx error",
      fix: "5xx means the server failed. Collect details and raise it with the developers.",
    },
    {
      mistake: "Only testing success cases",
      fix: "Add tests for 400, 401, 404 and 409 so you know the app handles errors properly.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Common status codes at a glance",
      code: `200 OK                     request worked
201 Created                new record made
204 No Content             worked, nothing to return
301 Moved Permanently      new address
304 Not Modified           use your saved copy
400 Bad Request            malformed request
401 Unauthorized           not logged in
403 Forbidden              not allowed
404 Not Found              no such thing
409 Conflict               clashes with existing data
500 Internal Server Error  server broke
503 Service Unavailable    server busy or down`,
    },
    {
      language: "python",
      title: "Check status codes in Playwright",
      code: `response = page.goto("https://example.com/no-such-page")
assert response.status == 404
print(response.ok)`,
    },
    {
      language: "python",
      title: "Check an API call result",
      code: `from playwright.sync_api import expect

r = page.request.post(
    "https://api.example.com/users",
    data={"name": "Divya"},
)
assert r.status == 201
expect(r).to_be_ok()`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — HTTP response status codes",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
    },
    {
      title: "Playwright — APIResponse",
      url: "https://playwright.dev/python/docs/api/class-apiresponse",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["http", "status-codes", "errors", "api", "web-fundamentals"],
};

export default topic;