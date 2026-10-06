import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "cors",
  title: "CORS",
  summary:
    "Browsers block some requests between different websites. CORS is the permission system that decides what is allowed.",
  whyItMatters:
    "CORS errors confuse everyone at first. Knowing what they mean helps you tell a real bug from a browser rule.",
  notes: `CORS stands for **Cross-Origin Resource Sharing**. It is a browser rule about which websites may call which servers.

Think of a housing society gate. The guard stops strangers. If a visitor says, "I am here to meet Flat 204," the guard calls Flat 204 and asks. Only if the resident says yes does the visitor enter.

In CORS, the browser is the guard. The server is the resident. The server must say yes with a header.

### What is an origin?

An origin is three things together:

- The scheme, like https
- The host, like shop.example.com
- The port, like 443

Two addresses with the same three parts are the **same origin**. Any difference makes them **different origins**.

- https://shop.example.com and https://shop.example.com/cart: same origin
- https://shop.example.com and http://shop.example.com: different (scheme)
- https://shop.example.com and https://api.example.com: different (host)
- https://shop.example.com and https://shop.example.com:8443: different (port)

### Why does this rule exist?

Imagine you are logged in to your bank in one tab. In another tab you open a shady site. Without a rule, that shady page could call your bank using your cookies and read the answer.

The browser stops this. By default, a page cannot **read** responses from a different origin. CORS lets a server say, "I allow this other site."

### How the server says yes

The server adds a response header:

~~~text
Access-Control-Allow-Origin: https://shop.example.com
~~~

This means: the site shop.example.com may read my responses. A star value means any site may read:

~~~text
Access-Control-Allow-Origin: *
~~~

### The preflight check

For some requests, the browser first asks permission with a request called **preflight**. It uses the OPTIONS method.

This happens when the request is not a simple one. For example, when you use PUT or DELETE, or send a JSON content type, or add a custom header.

~~~text
OPTIONS /bookings
Origin: https://shop.example.com
Access-Control-Request-Method: DELETE
~~~

The server answers with what it allows:

~~~text
Access-Control-Allow-Origin: https://shop.example.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
~~~

If the answer is fine, the browser sends the real request. If not, it blocks it.

### The familiar error

In the Console you may see:

~~~text
Access to fetch at 'https://api.example.com' from origin 'https://shop.example.com' has been blocked by CORS policy
~~~

Important point. The request often **reached the server**. The server answered. The browser then refused to hand the answer to your page.

### Who enforces CORS?

Only browsers. This matters a lot for testing.

- Postman does not enforce CORS
- Playwright API calls with page.request do not enforce CORS
- A page loaded in a Playwright browser does enforce it, because it is a real browser

So an API call may work in Postman and still fail inside the page. That points to a missing CORS header, not a broken API.

### Credentials

If the request carries cookies, the server cannot use the star value. It must name the exact origin, and also send:

~~~text
Access-Control-Allow-Credentials: true
~~~

### What testers should do

When you see a CORS error:

1. Check the page origin and the API origin. Are they different?
2. Open the Network tab and look at the preflight OPTIONS call
3. Read the Access-Control headers in the response
4. Report the missing header to the developers, with both origins

Do not try to fix CORS from the test. It is a server setting.

### In Playwright

~~~python
page.on("console", lambda msg: print(msg.text))
page.goto("https://shop.example.com")
~~~

Listening to console messages helps you catch CORS errors during a test run. You can then fail the test or log it.

Remember the idea. CORS is not about stopping requests. It is about stopping a page from reading the answer unless the server permits it.`,
  handsOn: `Let's see CORS headers in action.

### Step 1: Check the origin

Open any website in Chrome. Open DevTools and go to the Console. Run:

~~~javascript
location.origin
~~~

Note the result. This is your page origin.

### Step 2: Call a CORS-friendly API

Run:

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((r) => r.json())
  .then(console.log);
~~~

It works, because that API allows other origins.

### Step 3: Read the CORS header

Open the Network tab. Click that request. In Response Headers, find Access-Control-Allow-Origin. Write down its value.

### Step 4: Trigger a CORS block

Try calling a site that does not allow it, for example:

~~~javascript
fetch("https://example.com").then((r) => r.text()).then(console.log);
~~~

If you ran this from a different origin, you should see a red CORS error in the Console. If the call works for you, try another site that does not send CORS headers.

### Step 5: Find a preflight

Run a request with a custom header:

~~~javascript
fetch("https://httpbin.org/headers", {
  headers: { "X-Practice": "cors-test" },
});
~~~

In the Network tab, look for an OPTIONS row just before the main request.

### Step 6: Write the Playwright idea

Write this in your notes:

~~~python
page.on("console", lambda msg: print(msg.text))
~~~

### Deliverable

You found your page origin, read an Access-Control header, saw a CORS error, and looked for a preflight call.`,
  challenge: `Answer these in a notes file.

First, decide if each pair is the same origin or different, and say why:

1. https://shop.in and https://shop.in/orders
2. https://shop.in and http://shop.in
3. https://shop.in and https://api.shop.in
4. https://shop.in:443 and https://shop.in:3000

Then answer:

5. Why does the browser block a page from reading another site's response?
6. What header does the server send to allow a site?
7. When does a preflight OPTIONS request happen?
8. Why can Postman call an API that the browser blocks?
9. Which side fixes a CORS error: the test, the page or the server?

Finally, write a short Playwright snippet that prints every console message during a page load, so you can spot CORS errors.`,
  proTips: [
    "Compare the page origin and the API origin first. CORS only matters when they differ.",
    "If Postman works but the page fails, suspect missing CORS headers on the server.",
    "Look for the OPTIONS preflight row in the Network tab when custom headers or JSON are involved.",
    "Use page.on('console') in Playwright to catch CORS errors during a run.",
    "Do not try to disable CORS in tests. Report the server issue instead.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking CORS blocks the request from leaving the browser",
      fix: "The request usually reaches the server. The browser blocks your page from reading the response.",
    },
    {
      mistake: "Trying to fix CORS in the test code",
      fix: "CORS is a server header setting. Report it to the developers with both origins.",
    },
    {
      mistake: "Assuming an API is broken because the page shows a CORS error",
      fix: "Try the same call with page.request or Postman. If it works there, the CORS headers are the problem.",
    },
    {
      mistake: "Using Access-Control-Allow-Origin star with cookies",
      fix: "With credentials, the server must name the exact origin and send Allow-Credentials true.",
    },
    {
      mistake: "Ignoring the OPTIONS preflight failure",
      fix: "If the preflight fails, the real request never goes out. Read the preflight response headers.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "Server response that allows one origin",
      code: `Access-Control-Allow-Origin: https://shop.example.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true`,
    },
    {
      language: "text",
      title: "A preflight request",
      code: `OPTIONS /bookings HTTP/1.1
Origin: https://shop.example.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization`,
    },
    {
      language: "python",
      title: "Catch console errors during a test",
      code: `messages = []
page.on("console", lambda msg: messages.append(msg.text))

page.goto("https://shop.example.com")

for text in messages:
    if "CORS" in text:
        print("CORS problem:", text)`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Cross-Origin Resource Sharing (CORS)",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    },
    {
      title: "Playwright — Events (console messages)",
      url: "https://playwright.dev/python/docs/api/class-page#page-event-console",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["cors", "origin", "preflight", "http", "web-fundamentals"],
};

export default topic;