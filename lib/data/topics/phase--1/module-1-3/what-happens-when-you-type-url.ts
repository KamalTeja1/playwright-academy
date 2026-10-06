import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-happens-when-you-type-url",
    title: "What happens when you type a URL?",
    summary:
      "The 7-step journey from your keypress to a page appearing on screen.",
    whyItMatters:
      "Every Playwright test starts with a page.goto() call — and behind that call is this exact journey. Understanding it makes debugging network issues much easier.",
    notes: `You type a URL in the browser. You press Enter. A page appears.

Simple, right? Behind those two seconds is one of the most sophisticated dances in modern technology. Let's trace it, step by step.

### Step 1: The browser parses the URL

The browser takes the URL — say, https://playwright.dev/docs/intro — and breaks it into pieces:

- https — the protocol (encrypted)
- playwright.dev — the domain name
- /docs/intro — the path on the server

Already the browser knows what it needs to find and how to talk to it.

### Step 2: DNS lookup

Computers don't talk to names. They talk to numbers. Every website has a numeric IP address, like 104.18.5.23.

The browser asks a DNS server — think of it as the internet's phone book — "What's the IP for playwright.dev?" The DNS server replies with the IP.

This lookup happens in milliseconds, usually from a local cache. That's why the second visit to a site is faster than the first.

### Step 3: The browser opens a TCP connection

TCP is the protocol that two computers use to have a reliable conversation. The browser sends a request to the server's IP asking, "Can we talk?"

The server replies, "Yes, let's talk."

This is called the TCP handshake, and it happens every time you connect to a new server.

### Step 4: TLS handshake (for HTTPS)

If the URL starts with https (the s stands for secure), the browser and the server now perform another handshake — the TLS handshake.

They agree on a secret code that they'll use to encrypt everything they say to each other. Once this is done, everything exchanged is private — nobody on the network can read it.

This is why the padlock icon appears in your browser. It means the TLS handshake succeeded.

### Step 5: The browser sends an HTTP request

Now the browser sends a request — in a specific format called HTTP. The request includes:

- The method — usually GET for loading pages
- The path — /docs/intro
- Headers — info like what browser you're using, what languages you prefer, and cookies for the site
- Body — empty for GET requests

### Step 6: The server responds

The server receives the request, runs whatever code it needs to run, and sends back an HTTP response:

- A status code — 200 means success, 404 means not found
- Headers — info like content type (HTML), content length, cache settings
- Body — the actual HTML

### Step 7: The browser renders the page

Now the browser receives the HTML and starts rendering:

1. Parses the HTML to build the DOM (a tree of elements)
2. Fetches any external files — CSS, images, JavaScript
3. Applies CSS styles
4. Runs JavaScript (which may fetch more data via APIs)
5. Paints the final visual page onto your screen

While all this happens, the browser fires events — DOMContentLoaded when the DOM is ready, load when everything including images is done.

### Why this matters for Playwright

When you write:

~~~python
page.goto("https://playwright.dev/docs/intro")
~~~

Playwright is orchestrating this entire journey on your behalf. Every step above is happening.

If a page takes time, you can control what to wait for:

~~~python
page.goto(url, wait_until="load")            # wait for full load
page.goto(url, wait_until="domcontentloaded") # wait only for DOM
page.goto(url, wait_until="networkidle")      # wait until no requests for 500ms
~~~

Now you know exactly what each option is waiting for. It's not magic — it's the browser's event system.

If a test fails because an element isn't there yet, you now know: the browser may still be in Step 7, parsing or rendering. That's when auto-waiting in Playwright does its job.`,
    handsOn: `Let's watch the whole journey happen in real time.

### Step 1: Open DevTools Network tab

1. Open Chrome or any Chromium browser
2. Go to playwright.dev
3. Press F12 to open DevTools
4. Click the Network tab
5. Check the box that says Preserve log

### Step 2: Reload the page

Press F5 or Ctrl + R.

Watch the Network panel fill up with requests.

### Step 3: Find the main document request

At the top of the list, you'll see a request for the page itself — the URL you typed.

Click it. On the right side, look at:

- Headers tab → Request Headers → see what your browser sent
- Headers tab → Response Headers → see what the server sent back (content-type, status code)
- Response tab → the actual HTML the server returned

### Step 4: Notice the timing

Click the Timing tab. You'll see breakdowns like:

- Queueing
- DNS lookup (Step 2 from notes)
- Initial connection (Step 3)
- SSL (Step 4)
- Request sent (Step 5)
- Waiting for response (Step 6)
- Content download

This is the entire journey of Step 2 through Step 6, visualized.

### Step 5: See the DNS resolve

In the same Timing panel, the DNS lookup entry shows how long it took to resolve the domain. On the first visit, it's usually 20-100ms. On reloads, it's near zero — because the browser cached it.

### Deliverable

You watched a real page load in DevTools Network, identified the main request, and saw the timing breakdown including DNS, connection, TLS, and download.`,
    challenge: `Compare two different sites.

1. Open DevTools Network on a slow site (any heavy news site)
2. Reload and note: how many requests fired? Total load time?
3. Now open DevTools Network on a simple, fast site (like example.com or a minimalist blog)
4. Reload and note the same numbers

Write down the difference.

### Questions to answer

- How many requests did the slow site fire? The fast site?
- What kind of files were they? (HTML, CSS, JS, images, fonts)
- Which one had more third-party requests (ads, analytics, CDN)?

### Reflection

Every one of those requests follows the same 7-step journey from the notes. On a slow site, the browser is doing this dance 100+ times.

This is why Playwright has wait options — you're telling Playwright when to consider the page "ready". If you wait for the wrong event, tests fail intermittently. Now you know why.`,
    proTips: [
      "The first visit to any site is always slower due to DNS lookup. Subsequent visits use cache.",
      "Use wait_until=\"domcontentloaded\" when you only need the HTML structure, not images or analytics.",
      "If a test fails because an element isn't there yet, use Playwright's auto-waiting — never hard sleep.",
      "The Network tab in DevTools is your best friend for debugging slow loads and API failures.",
      "Preserve log is essential — without it, the request history is wiped when the page navigates.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking the browser makes one request per page",
        fix: "A typical page loads 50-200+ requests. HTML, CSS, JS, images, fonts, API calls — each is a separate request.",
      },
      {
        mistake: "Using time.sleep() to wait for slow pages",
        fix: "Use Playwright's auto-waiting assertions. They wait exactly as long as needed, no more, no less.",
      },
      {
        mistake: "Confusing DNS lookup with loading the page",
        fix: "DNS is just finding the server's IP. Loading is a separate, longer process that happens after.",
      },
      {
        mistake: "Ignoring the request that comes back with 3xx or 4xx status",
        fix: "3xx means redirect — the browser will retry another URL. 4xx means client error. Both matter for tests.",
      },
      {
        mistake: "Assuming HTTPS is optional",
        fix: "Modern browsers mark HTTP pages as 'Not Secure'. Playwright tests should target HTTPS sites.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Controlling what to wait for in Playwright",
        code: `from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # Wait for full page load (images, scripts, everything)
    page.goto("https://playwright.dev", wait_until="load")

    # Or wait only for the DOM to be parsed
    page.goto("https://playwright.dev", wait_until="domcontentloaded")

    # Or wait until network goes quiet for 500ms
    page.goto("https://playwright.dev", wait_until="networkidle")

    browser.close()`,
      },
      {
        language: "javascript",
        title: "The same in TypeScript",
        code: `import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto("https://playwright.dev", { waitUntil: "load" });
await page.goto("https://playwright.dev", { waitUntil: "domcontentloaded" });
await page.goto("https://playwright.dev", { waitUntil: "networkidle" });

await browser.close();`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — How the web works",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
      },
      {
        title: "Playwright — page.goto reference",
        url: "https://playwright.dev/python/docs/api/class-page#page-goto",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "web", "networking", "browser"],
  };

export default topic;
