import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "devtools-network-panel",
  title: "DevTools: The Network Panel",
  summary:
    "The Network panel records every request your page makes. Learn to filter, read and use it to debug tests.",
  whyItMatters:
    "When a test fails, the Network panel often shows why. A failed call, a slow response or a wrong payload is visible here in seconds.",
  notes: `The Network panel is a **recorder for every request and response** the page makes. Open it, and you see the whole conversation between browser and server.

Think of the Swiggy order tracking screen. It shows each step: order placed, restaurant accepted, food picked, out for delivery. The Network panel is the same for a page. Each row is one step, with its time and result.

### Opening it

Open DevTools with F12, then click the Network tab. Important: the panel records only **after it is open**. So open it first, then refresh the page.

### The main columns

Each row is one request. The common columns are:

- **Name**: the file or endpoint
- **Status**: the code, like 200 or 404
- **Type**: document, script, stylesheet, image, fetch and so on
- **Size**: how much data came
- **Time**: how long it took

Red rows mean a failure. Always look for red first.

### Useful toolbar options

- **Preserve log**: keeps rows when the page navigates. Tick it when testing login redirects
- **Disable cache**: forces fresh downloads. Good for debugging stale data
- **Throttling**: pretends your internet is slow, like 3G. Great for testing waits
- **Filter box**: type part of a URL to narrow the list
- **Type buttons**: All, Fetch/XHR, JS, CSS, Img, WS and more

For tests, Fetch/XHR is your best friend. It shows the data calls.

### Reading one request

Click a row. A side panel opens with tabs.

- **Headers**: URL, method, status, request and response headers
- **Payload**: the data you sent, for POST and PUT calls
- **Preview**: the response shown as a neat tree
- **Response**: the raw response text
- **Timing**: where the time went, such as waiting for the server

~~~text
Request URL: https://api.example.com/orders
Request Method: POST
Status Code: 201 Created
~~~

### The waterfall

The Waterfall column shows each request as a bar on a timeline. Long bars mean slow requests. Bars that start late were waiting on earlier ones. This explains why a page feels slow.

### Copy as cURL or fetch

Right-click a row and choose Copy, then Copy as cURL or Copy as fetch. You get the full request with all headers. This is useful when you want to replay a call in your API test.

### Using it to plan Playwright waits

Say clicking Search triggers a call to /api/search. You can wait for exactly that response.

~~~python
with page.expect_response("**/api/search*") as info:
    page.get_by_role("button", name="Search").click()

assert info.value.status == 200
~~~

You found the URL in the Network panel. The test now waits for a real event, not a fixed sleep.

### Mocking with what you learn

Once you know a call and its response shape, Playwright can fake it.

~~~python
page.route("**/api/search*", lambda route: route.fulfill(
    status=200,
    json={"results": []},
))
~~~

This helps test an empty state without needing real data.

### Spotting problems

- A red 4xx row: check the Payload and headers you sent
- A red 5xx row: the server failed, report it
- A row stuck as pending: the server is slow or never answered
- A CORS error: the row may show as failed with no status

### Exporting a record

Right-click and choose Save all as HAR. A HAR file stores the whole session. Teams attach it to bug reports. Remember that it may contain tokens, so do not share it publicly.

### A simple routine

1. Open the Network panel before the action
2. Tick Preserve log
3. Perform the step in the page
4. Filter to Fetch/XHR
5. Click the key request and read Payload and Response
6. Write your wait or check from what you saw

This routine turns guessing into reading.`,
  handsOn: `Let's investigate a real page's network traffic.

### Step 1: Prepare

Open a website that loads data, such as a search page or a product list. Open DevTools and click Network. Tick Preserve log and Disable cache.

### Step 2: Record a page load

Refresh the page. Wait until it settles. Count the rows. Note the total size and load time shown at the bottom.

### Step 3: Filter data calls

Click the Fetch/XHR button. Now do an action on the page, such as searching for shoes. New rows appear. Click one.

### Step 4: Read the details

In the side panel, note down:

- The Request URL
- The Request Method
- The Status Code
- One line from the Response tab

If it is a POST, open Payload and read what was sent.

### Step 5: Slow it down

Open the Throttling dropdown and choose Slow 4G, or the closest option. Repeat the action. Notice what loads late.

### Step 6: Write the Playwright wait

Write this in your notes, using the URL you found:

~~~python
with page.expect_response("**/your-api-path*") as info:
    page.get_by_role("button", name="Search").click()

print(info.value.status)
~~~

### Deliverable

You recorded a page load, filtered data calls, read one request fully, tested slow internet and wrote one response-based wait.`,
  challenge: `Choose a page with a search box or filter, such as a shopping or news site.

Using the Network panel, answer these in a notes file:

1. How many requests did the first page load make?
2. Which request is the biggest by size?
3. Which request is the slowest? What did the Timing tab show?
4. Which Fetch/XHR call runs when you search? Write its URL and method.
5. What does the Response contain? Write the first two keys.

Then write a Playwright test plan in plain steps that:

- Opens the page
- Types in the search box
- Waits for the matching response
- Checks the status and one value from the JSON
- Checks that the result appears on the screen

Finally, write one line on how you would fake an empty result using page.route.`,
  proTips: [
    "Open the Network panel before you do the action. It records only after it is open.",
    "Tick Preserve log when testing logins and redirects, or rows will vanish.",
    "Filter to Fetch/XHR to see just the data calls that matter in tests.",
    "Use throttling to find tests that fail on slow connections.",
    "Never share a HAR file publicly. It may contain tokens and cookies.",
  ],
  commonMistakes: [
    {
      mistake: "Opening the panel after the page has loaded",
      fix: "Open it first, then refresh. The panel records only while it is open.",
    },
    {
      mistake: "Losing rows after a redirect",
      fix: "Tick Preserve log so the earlier requests stay visible.",
    },
    {
      mistake: "Waiting with a fixed sleep instead of the real call",
      fix: "Find the request in the panel and use expect_response for that URL.",
    },
    {
      mistake: "Ignoring red rows",
      fix: "Click every red row first. Failed requests usually explain a broken page.",
    },
    {
      mistake: "Sharing a HAR file with secrets inside",
      fix: "Remove tokens and cookies before sharing, or share only the needed request details.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "What one request looks like in the Headers tab",
      code: `Request URL: https://api.example.com/orders
Request Method: POST
Status Code: 201 Created
Content-Type: application/json`,
    },
    {
      language: "python",
      title: "Wait for the real API call",
      code: `with page.expect_response("**/api/search*") as info:
    page.get_by_role("button", name="Search").click()

assert info.value.status == 200
print(info.value.json())`,
    },
    {
      language: "python",
      title: "Fake an empty result",
      code: `page.route(
    "**/api/search*",
    lambda route: route.fulfill(status=200, json={"results": []}),
)
page.goto("https://shop.example.com")`,
    },
  ],
  furtherReading: [
    {
      title: "Chrome DevTools — Network features reference",
      url: "https://developer.chrome.com/docs/devtools/network/reference",
    },
    {
      title: "Playwright — Network mocking",
      url: "https://playwright.dev/python/docs/mock",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  tags: ["devtools", "network", "debugging", "requests", "web-fundamentals"],
};

export default topic;