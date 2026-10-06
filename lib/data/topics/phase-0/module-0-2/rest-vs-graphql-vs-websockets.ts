import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "rest-vs-graphql-vs-websockets",
  title: "REST vs GraphQL vs WebSockets",
  summary:
    "Three common ways a page talks to a server. Learn how each one works and what it means for your tests.",
  whyItMatters:
    "Modern apps mix all three. If you can recognise each in the Network tab, you will know what to wait for, check and mock.",
  notes: `REST, GraphQL and WebSockets are **three styles of talking to a server**. Each suits a different kind of job.

Think of three ways to get food. REST is a restaurant with a fixed menu. You order item number 5 and get exactly that. GraphQL is a build-your-own thali counter. You say, "Two rotis, one dal, no sabzi," and get exactly that plate. WebSockets is a phone call to the kitchen that stays open. Either side can speak at any time.

### REST

REST uses normal HTTP. Every thing in the app has its own address, called an endpoint. The method says what to do with it.

~~~text
GET    /api/users/42
POST   /api/users
DELETE /api/users/42
~~~

Each call is one request and one response. The server decides what fields come back. If you want a user and their orders, you may need two calls: one for the user, one for the orders.

REST is the most common style. Most API tests you write at first will be REST.

How to spot it in DevTools: many different URLs, with methods like GET, POST and DELETE, and JSON responses.

### GraphQL

GraphQL also uses HTTP, but usually through **one single address**, often /graphql. Almost every call is a POST.

The client sends a query that names exactly the fields it wants:

~~~text
query {
  user(id: 42) {
    name
    orders {
      id
      total
    }
  }
}
~~~

The response has the same shape as the query:

~~~text
{
  "data": {
    "user": {
      "name": "Rohit",
      "orders": [{ "id": 1, "total": 450 }]
    }
  }
}
~~~

One call brought the user and the orders. Nothing extra came along.

A tricky point for testers. A GraphQL call can fail and still return status 200. The errors are inside the body, under a key called errors. So checking only the status code is not enough.

How to spot it: repeated POST calls to one URL, with a query inside the request body.

### WebSockets

HTTP is ask and answer. A WebSocket is different. The browser opens a connection and **keeps it open**. After that, both sides can send messages whenever they like.

Think of a live cricket score, a chat app or a stock price board. The server pushes new data the moment it exists. The page does not need to keep asking.

~~~javascript
const socket = new WebSocket("wss://example.com/live");
socket.onmessage = (event) => console.log(event.data);
socket.send("hello");
~~~

The address starts with ws or wss. The s means secure, just like https.

How to spot it: in the Network tab, use the WS filter. Click the connection and open the Messages tab. You will see messages going up and down.

### Side by side

- **REST**: many endpoints, one request and one response each, simple and common
- **GraphQL**: one endpoint, client picks the fields, errors may hide inside a 200
- **WebSockets**: one open connection, messages in both directions, good for live updates

### What this means for Playwright

For REST, wait for a response and check its status:

~~~python
with page.expect_response("**/api/users/42") as info:
    page.get_by_role("link", name="Profile").click()
print(info.value.status)
~~~

For GraphQL, all calls share one URL, so you must look inside the body. Check the query name and the errors key:

~~~python
def is_orders_call(response):
    body = response.request.post_data or ""
    return "/graphql" in response.url and "orders" in body

with page.expect_response(is_orders_call) as info:
    page.get_by_role("button", name="Load orders").click()

print(info.value.json())
~~~

For WebSockets, Playwright can listen to the connection:

~~~python
def on_socket(ws):
    ws.on("framereceived", lambda payload: print("got:", payload))

page.on("websocket", on_socket)
~~~

### A practical rule

Do not guess. Open the Network tab, find how the page really talks, and then choose your wait or check. Many real apps use REST for normal data, GraphQL for a few screens and WebSockets for chat or live status.

Knowing the three styles means no network call will look like a mystery again.`,
  handsOn: `Let's spot all three styles with your own eyes.

### Step 1: Try a REST call

Open the DevTools Console on any page and run:

~~~javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((r) => r.json())
  .then(console.log);
~~~

Open the Network tab and note the URL, the method and the status.

### Step 2: Try a GraphQL call

Run this against a public practice API:

~~~javascript
fetch("https://countries.trevorblades.com/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: "{ country(code: 'IN') { name capital } }",
  }),
})
  .then((r) => r.json())
  .then(console.log);
~~~

You should see the country name and capital. Check the Network tab. It is a POST to one URL, and the query is in the request payload.

If the server complains about the single quotes, ask your mentor for the double-quote version, or try another public GraphQL practice API.

### Step 3: Try a WebSocket

Run:

~~~javascript
const ws = new WebSocket("wss://echo.websocket.org");
ws.onmessage = (e) => console.log("reply:", e.data);
ws.onopen = () => ws.send("hello chai");
~~~

If that echo server is down, any public echo service will work. Open the Network tab, choose the WS filter and click the connection. Check the Messages tab.

### Step 4: Compare

Write one line for each: how many URLs did you see, what method was used, and did the connection close after the answer?

### Step 5: Write the Playwright ideas

Write these in your notes:

~~~python
with page.expect_response("**/users/1") as info:
    page.reload()
print(info.value.status)

page.on("websocket", lambda ws: print("socket opened:", ws.url))
~~~

### Deliverable

You made one REST call, one GraphQL call and one WebSocket connection. You saw how each one looks in the Network tab.`,
  challenge: `Pick three apps you use daily, such as a food delivery app, a chat app and a cricket score app.

For each app, guess which style fits best: REST, GraphQL or WebSockets. Give one reason each.

Then open any real website in Chrome and look at its Network tab for two minutes. Answer these:

1. Did you see any calls that looked like REST? Give one URL.
2. Did you see a POST to a graphql URL? If not, say so.
3. Did you see any WS connection?
4. Which Playwright wait would you use for the most important call?

Finally, explain in your own words why checking only the status code is not enough for GraphQL.`,
  proTips: [
    "Open the Network tab first and see how the page really talks. Then pick your wait.",
    "For GraphQL, read the errors key in the body. Status 200 can still hide a failure.",
    "Use the WS filter in the Network tab to find WebSocket connections quickly.",
    "With GraphQL, all calls share one URL. Match on the query name inside the request body.",
    "Use page.on('websocket') when a live feature, like chat or scores, needs checking.",
  ],
  commonMistakes: [
    {
      mistake: "Checking only the status code on a GraphQL call",
      fix: "Read the JSON body. Failures often come back as status 200 with an errors key inside.",
    },
    {
      mistake: "Waiting for a URL pattern on GraphQL calls",
      fix: "All calls use one URL. Match on the query text in the request body instead.",
    },
    {
      mistake: "Looking for WebSocket messages under Fetch/XHR",
      fix: "Use the WS filter. WebSocket traffic is listed separately from normal requests.",
    },
    {
      mistake: "Assuming every app uses only REST",
      fix: "Check the Network tab. Many apps mix REST, GraphQL and WebSockets.",
    },
    {
      mistake: "Using a fixed sleep for live data",
      fix: "Wait for the visible update on the page, or listen to the socket frames.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A GraphQL query",
      code: `query {
  user(id: 42) {
    name
    orders {
      id
      total
    }
  }
}`,
    },
    {
      language: "python",
      title: "Wait for a REST response",
      code: `with page.expect_response("**/api/users/42") as info:
    page.get_by_role("link", name="Profile").click()

print(info.value.status)
print(info.value.json())`,
    },
    {
      language: "python",
      title: "Listen to a WebSocket in Playwright",
      code: `def on_socket(ws):
    print("opened:", ws.url)
    ws.on("framereceived", lambda payload: print("got:", payload))
    ws.on("framesent", lambda payload: print("sent:", payload))

page.on("websocket", on_socket)`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Writing WebSocket client applications",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications",
    },
    {
      title: "Playwright — Network",
      url: "https://playwright.dev/python/docs/network",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  tags: ["rest", "graphql", "websockets", "api", "web-fundamentals"],
};

export default topic;