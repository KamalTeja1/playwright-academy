import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-a-web-server",
    title: "What is a web server?",
    summary:
      "The computer that stores websites and responds when browsers ask for pages.",
    whyItMatters:
      "Tests sometimes fail because the backend is slow or down. Understanding servers tells you where to look when a page won't load.",
    notes: `Every website you've ever visited lives on a **web server**. When you type a URL and press Enter, your browser asks a server somewhere in the world: "Please give me this page."

The server replies. Your browser renders it.

### The simplest definition

A web server is a computer that:

1. Stays on 24 hours a day, 7 days a week
2. Has software installed that listens for HTTP requests
3. Responds to those requests with HTML, JSON, images, or whatever is needed

That's it. Everything else is details.

### What a server actually looks like

A server is just a computer. Physically, it looks like a metal box in a data centre. It has a CPU, RAM, storage, and a network connection — like your laptop but optimised for staying on forever.

Big companies have thousands of them. Small apps run on one.

### Client vs server

The browser is the **client**. It asks for things.

The server is the **responder**. It gives things back.

The relationship:

- Client → "Give me the homepage" → Server
- Server → "Here is the HTML" → Client
- Client → "Give me logo.png" → Server
- Server → "Here is the image" → Client
- Client → "Save this form data" → Server
- Server → "Saved. Thanks." → Client

Every action on the web is a conversation between a client and a server. This is called the client-server model.

### Static vs dynamic servers

**Static servers** just send files. If you ask for index.html, they send index.html. The same file for every visitor.

Examples: docs sites, personal blogs, simple landing pages.

**Dynamic servers** run code for each request. They might check who you are, query a database, and generate a custom page.

Examples: any site with login, any e-commerce site, any app with user accounts.

Both types are everywhere. Playwright tests work the same for either.

### Popular web servers

- **Nginx** — the most popular server software on the internet. Fast, battle-tested.
- **Apache** — older but still widely used. Very configurable.
- **Microsoft IIS** — Windows server software, common in enterprises.
- **Node.js** — JavaScript runtime that can act as a server. Very popular for modern apps.
- **Python servers** — Django, Flask, FastAPI. Great for Python projects.
- **Cloud services** — Vercel, Netlify, AWS, Google Cloud. They manage servers for you.

### Servers you've already used (without knowing)

- **Vercel** — hosts your playwright-academy app. It's a server (well, many servers).
- **GitHub Pages** — static server that serves HTML files.
- **Every site you've visited** — served by some server somewhere.

### The "server room" reality

When people picture "the cloud", they imagine something abstract. In reality, the cloud is physical buildings full of servers. Lots of them, running 24/7.

The major cloud providers — AWS, Azure, Google Cloud — have data centres on every continent. When you deploy to Vercel, your app ends up on one or more of these servers, close to your users.

### Why this matters for testing

Three scenarios you'll hit:

**Scenario 1: Server is slow**

The page loads, but takes 8 seconds. Is your test failing because the server is slow? Check the Network tab — see the response time.

**Scenario 2: Server is down**

The page never loads. Connection refused, 500 error, or a time-out. Your test will fail — and it's not your test's fault.

**Scenario 3: Server returns wrong data**

The page loads fine but shows "Welcome, undefined" instead of "Welcome, Ravi". A backend bug, not a frontend bug. Playwright can catch this with assertions.

In all three cases, knowing there's a server on the other end — and knowing how to check the request/response in DevTools — is how you tell frontend bugs from backend bugs.

### Servers vs databases

A common follow-up question: where do servers store data?

In a **database**. Servers have code that reads and writes to databases like PostgreSQL, MySQL, MongoDB, or Redis.

When you log in, the server checks your credentials against the database. When you load your orders, the server fetches them from the database. The database is the server's filing cabinet.

Servers are stateless — they can restart without losing data. Databases hold the persistent data.

You don't need to know databases for Playwright work, but knowing they exist helps you understand architecture diagrams.

### The takeaway

Behind every URL is a server. Behind every login, search, and purchase is a request to a server. Playwright automates the browser, but the browser is talking to servers the whole time.

When a test fails, before blaming your locator, check the Network tab. The server might be the actual problem.`,
    handsOn: `Let's observe a real server responding.

### Step 1: Open DevTools Network

1. Go to playwright.dev
2. Press F12
3. Click the Network tab
4. Check Preserve log

### Step 2: Trigger a server request

Reload the page (F5). Watch the requests appear.

Click on the top request — the page itself. Look at:

- Status: 200 means the server responded successfully
- Response Headers: look for Server, Date, Content-Type
- Response body: the HTML the server sent

### Step 3: Compare response times

Look at the Time column in the Network panel. Each request shows how many milliseconds the server took.

Some requests are fast (cached, small). Some are slow (large, dynamic). This tells you which parts of the page depend on server performance.

### Step 4: Deliberately trigger a 404

In the browser address bar, change the URL to something that doesn't exist:

https://playwright.dev/this-page-does-not-exist

Press Enter. You'll see a 404 page.

Open DevTools Network. Look at the request — status 404. The server responded, but said "I don't have this."

That's a server-side decision. Your browser just displays what it gets.

### Deliverable

You watched real server requests and responses in DevTools. You saw a 200 (success) and a 404 (not found), and can identify the status code for any request.`,
    challenge: `Compare a static server and a dynamic server.

### Task 1: A static site

Visit a static site, like MDN's docs page or a simple blog. Open DevTools Network and reload.

Note:
- How many requests fire?
- What is the average response time?
- Are the responses identical every time?

### Task 2: A dynamic site

Visit a dynamic site — like Twitter, LinkedIn, or any dashboard.

Open Network, reload. Note:
- Total requests
- Any requests with status 200 that return JSON
- Response times

You'll see many more requests — most of them are API calls fetching data from the server's backend.

### Task 3: Compare

Write down:
- How many requests each site made
- Which one had more JSON responses
- Which one had more static assets (images, fonts)

### Reflection

Static sites are fast and cacheable. Dynamic sites are slower but personalised. Every modern app is a mix.

When a Playwright test fails on a dynamic site, look for the API call that returned the data the UI needs. Sometimes the UI isn't broken — the API returned wrong data, and the UI just displayed it.`,
    proTips: [
      "Learn the HTTP status codes by heart: 200 = OK, 301/302 = redirect, 401 = unauthorized, 403 = forbidden, 404 = not found, 500 = server error.",
      "DevTools Network tab shows response time per request. Use it to spot slow backends.",
      "A JSON response in the Network tab means the page is calling an API. This is common in modern SPAs.",
      "If a test fails on 'element not found' but the request was 200, the issue is the frontend. If the request failed, it's the backend.",
      "Never blame a locator when a request returned 500. Check the whole picture first.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking 'server' means a physical machine you own",
        fix: "Most servers today are rented from cloud providers. You deploy code, they run the machine.",
      },
      {
        mistake: "Assuming all servers are fast",
        fix: "Servers have limits. Under heavy load, they slow down. This is why tests sometimes fail in CI but pass locally.",
      },
      {
        mistake: "Confusing the browser's UI with the server's data",
        fix: "The browser renders what the server sends. If data is wrong, it's a backend bug. If rendering is wrong, it's a frontend bug.",
      },
      {
        mistake: "Ignoring 500 errors in test logs",
        fix: "500 means the server crashed on that request. Even if the page looks fine, log it — you may have found a real bug.",
      },
      {
        mistake: "Assuming a page's load time is determined only by your internet speed",
        fix: "The server's response time is often the biggest factor. A slow server makes every test slower.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Check a server's response from Python",
        code: `import requests

response = requests.get("https://playwright.dev")

print(response.status_code)  # 200 means success
print(response.headers.get("Content-Type"))
print(len(response.text))    # Length of the HTML body`,
      },
      {
        language: "python",
        title: "In Playwright — check the response status",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # Listen to the main document response
    response = page.goto("https://playwright.dev")
    print(response.status)  # 200

    browser.close()`,
      },
      {
        language: "text",
        title: "Common status codes",
        code: `200 OK              Success
301 Moved           Permanent redirect
302 Found           Temporary redirect
400 Bad Request     Client sent invalid data
401 Unauthorized    Login required
403 Forbidden       You can't access this
404 Not Found       Nothing here
500 Server Error    Backend crashed`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a web server?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server",
      },
      {
        title: "MDN — HTTP response status codes",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "web", "server", "http"],
  };

export default topic;
