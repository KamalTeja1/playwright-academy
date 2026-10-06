import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "http-request-response-cycle",
  title: "The HTTP Request-Response Cycle",
  summary:
    "Every page you open is a conversation. Your browser asks, a server answers. Learn the steps in between.",
  whyItMatters:
    "Playwright waits for pages, checks responses and mocks network calls. All of it makes sense only when you understand this cycle.",
  notes: `Every time you open a website, your browser **asks a question and a server gives an answer**. That is the whole idea of HTTP.

Think of ordering food on Swiggy. You pick biryani and tap Place order. That is a request. The restaurant prepares it. Swiggy sends back a confirmation and then the food. That is the response.

You never talk to the restaurant kitchen directly. You send a request and wait for a reply. The web works exactly like this.

### The two sides

- **Client**: the one who asks. Usually your browser, or Playwright controlling a browser.
- **Server**: the one who answers. A computer somewhere that holds the website.

### What happens when you type a URL

Say you type https://example.com/products and press Enter. Here is the journey.

1. **DNS lookup.** The browser has a name, not an address. DNS works like the contacts list on your phone. It turns example.com into an IP address.
2. **Connection.** The browser opens a connection to that address. For https, it also sets up encryption, so nobody can read the messages on the way.
3. **Request.** The browser sends a message saying what it wants.
4. **Server work.** The server reads the request, maybe checks a database, and builds an answer.
5. **Response.** The server sends the answer back.
6. **Rendering.** The browser reads the HTML, then asks for more files such as CSS, JavaScript and images. Each one is its own request and response.

So one page often means 50 or 100 small conversations.

### What a request looks like

A request has a few parts.

~~~text
GET /products HTTP/1.1
Host: example.com
Accept: text/html
~~~

- The **method**, here GET, says what you want to do
- The **path**, here /products, says which thing
- The **headers** give extra details
- A **body** carries data, for example a login form. GET requests usually have no body

### What a response looks like

~~~text
HTTP/1.1 200 OK
Content-Type: text/html

<html>...page content...</html>
~~~

- The **status code**, here 200, says how it went
- The **headers** describe the answer
- The **body** holds the actual content

We will study methods, status codes and headers in the next topics. For now, just see the shape: request goes out, response comes back.

### Stateless: the server forgets

HTTP has no memory. Each request is separate. The server does not remember you from the last one.

It is like a tea stall where the owner meets thousands of people. To recognise you, you must show something each time, like a token. On the web, that token is usually a cookie. We cover cookies soon.

### Seeing it yourself

Open DevTools, go to the Network tab, and refresh any page. Every row is one request-response pair. Click a row and you can read both sides.

### Why Playwright cares

Playwright sits at the client side. It can:

- Wait until a navigation response arrives
- Wait for one specific response, like the login API call
- Read the status and body of a response
- Block or change requests, called mocking

~~~python
with page.expect_response("**/api/products") as info:
    page.get_by_role("button", name="Load products").click()

response = info.value
print(response.status)
~~~

Here the test clicks a button and waits for the matching response. No fixed sleep needed.

### A debugging habit

When a test fails, ask yourself two questions:

1. Did the request go out?
2. What came back?

Many flaky tests are just a slow response or a failed one. If you can read the cycle, you can find the cause quickly.`,
  handsOn: `Let's watch the request-response cycle with your own eyes.

### Step 1: Open the Network tab

Open any simple website in Chrome. Open DevTools and click the Network tab.

Tick Preserve log. Then refresh the page.

### Step 2: Count the conversations

Look at the list. Count how many rows you see. Note the very first row. It is usually the HTML document.

### Step 3: Read one request

Click the first row. Open the Headers section.

Find these and write them down:

- Request URL
- Request Method
- Status Code
- Content-Type in the response headers

### Step 4: Read the response body

Open the Response tab for the same row. You will see the HTML text the server sent.

### Step 5: Try a data request

Use the filter and pick Fetch/XHR. Interact with the page, such as searching or scrolling. New rows will appear. These are data calls made by JavaScript.

### Step 6: Write the Playwright idea

In a notes file, write how you would wait for one of those calls:

~~~python
with page.expect_response("**/search*") as info:
    page.get_by_role("searchbox").fill("shoes")

print(info.value.status)
~~~

### Deliverable

You read one full request and response pair. You counted the requests for one page load. You wrote one Playwright wait based on a response.`,
  challenge: `Pick a website you use often, like a news site or a cricket score page.

Open the Network tab and refresh. Then answer these in a notes file:

1. How many requests did one page load make?
2. Which request was the HTML document?
3. Name three other file types you saw, such as CSS, JS or images
4. Find one Fetch/XHR call. What URL did it use and what status came back?
5. Which request took the longest? How long was it?

Then write a short Playwright snippet that clicks something on the page and waits for the matching response before checking its status.

Do not worry if the numbers are big. Modern pages are busy. The point is to see the conversations clearly.`,
  proTips: [
    "Keep the Network tab open while writing locators. It shows you what the page is really doing.",
    "Prefer waiting for a response over using a fixed sleep. It is faster and more stable.",
    "The first row in the Network tab is usually the main HTML document.",
    "Filter by Fetch/XHR to see only the data calls, which matter most in tests.",
    "If a test is flaky, check the request status before blaming the locator.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking one page load is one request",
      fix: "A page load is many requests: HTML, CSS, JavaScript, images and data calls. Check the Network tab to see them all.",
    },
    {
      mistake: "Assuming the server remembers you between requests",
      fix: "HTTP is stateless. The browser sends cookies or tokens with each request so the server can recognise you.",
    },
    {
      mistake: "Using a fixed sleep to wait for data",
      fix: "Wait for the specific response with expect_response, or wait for the visible result on the page.",
    },
    {
      mistake: "Ignoring failed requests when a test breaks",
      fix: "Open the Network tab and look for red rows. A failed call often explains the broken page.",
    },
    {
      mistake: "Mixing up client and server",
      fix: "The client asks and the server answers. Playwright and the browser are on the client side.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A simple HTTP request",
      code: `GET /products HTTP/1.1
Host: example.com
Accept: text/html`,
    },
    {
      language: "text",
      title: "A simple HTTP response",
      code: `HTTP/1.1 200 OK
Content-Type: text/html

<html>...page content...</html>`,
    },
    {
      language: "python",
      title: "Wait for a specific response after a click",
      code: `with page.expect_response("**/api/products") as info:
    page.get_by_role("button", name="Load products").click()

response = info.value
print(response.status)
print(response.url)`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — An overview of HTTP",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    },
    {
      title: "Playwright — Network",
      url: "https://playwright.dev/python/docs/network",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["http", "request", "response", "network", "web-fundamentals"],
};

export default topic;