import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "web-page-vs-web-app",
    title: "Web page vs web app",
    summary:
      "The difference between a document you read and an application you use.",
    whyItMatters:
      "Testing a blog and testing Gmail require different strategies. Knowing which you're dealing with tells you how to write your Playwright tests.",
    notes: `Not everything on the web is the same. Some things are **pages** — documents you read. Others are **apps** — programs you use.

Both live in a browser. Both use HTML, CSS, and JavaScript. But they behave very differently, and testing them requires different approaches.

### Web pages — documents

A web page is like a magazine article. You open it, you read it, you leave. The content doesn't change based on what you do.

Examples:

- A blog post
- A news article
- A company's About page
- A documentation site
- A contact page

Characteristics:

- Static or nearly static
- Same content for everyone
- Loads once and stays the same
- Links take you to other pages
- Search engines can index the content easily

Testing a web page means:

- Check the page loads
- Check specific text and images appear
- Check links go to the right places
- Very few interactions beyond clicking links

Simple to test.

### Web apps — programs

A web app is like a mobile app, but running in your browser. It responds to your inputs, keeps state, and often updates in real time.

Examples:

- Gmail
- Google Docs
- Notion
- Facebook
- Any dashboard with charts
- Any tool with forms and workflows

Characteristics:

- Highly interactive
- Different for every user (based on login)
- Content changes as you use it
- No page reloads for many actions
- Often talks to backend APIs constantly

Testing a web app means:

- Check initial state
- Perform actions (click, type, drag)
- Wait for the app to update (often via API calls)
- Check the new state
- Repeat across many user flows

Complex to test, and this is where Playwright's auto-waiting and assertions shine.

### The spectrum

In reality, most sites sit on a spectrum between page and app.

- **Very static** — documentation sites, personal blogs
- **Mostly static with some interactivity** — marketing sites with contact forms
- **Half and half** — news sites with comments
- **Mostly interactive** — SaaS dashboards
- **Fully interactive** — Gmail, Figma, Google Sheets

The line is blurry. A Wikipedia article is a page. Wikipedia's edit history filter is an app.

### How they differ technically

**Web pages:**

- Server sends full HTML
- Browser displays it
- JavaScript enhances some things (search, filters)
- Each link = new page request to the server

**Web apps:**

- Server sends a small HTML shell
- JavaScript loads and renders the actual UI
- Data is fetched from APIs
- Navigation happens in JavaScript without reloading
- Called SPAs (Single Page Applications)

The SPA model is why modern web testing is trickier. There's no "page load" event — you have to wait for specific elements or network calls.

### Why Playwright is built for apps

Playwright was designed for modern web apps. Its key features exist because SPAs broke older testing tools:

- **Auto-waiting** — waits for elements to appear, no fixed sleep
- **Web-first assertions** — retries until the condition is true or times out
- **Network interception** — can mock or modify API calls
- **Role-based locators** — stable across re-renders
- **Trace viewer** — shows exactly what happened when a test failed

Old tools assumed the page loaded once and stayed static. Playwright assumes constant change.

### What you test where

**For a web page:**

~~~python
page.goto("https://blog.example.com/post-1")
expect(page).to_have_title("My Post")
expect(page.get_by_role("heading", level=1)).to_have_text("My Post")
expect(page.locator("article")).to_contain_text("...")
~~~

**For a web app:**

~~~python
page.goto("https://app.example.com")
page.get_by_role("button", name="New project").click()
page.get_by_label("Project name").fill("Test")
page.get_by_role("button", name="Create").click()
expect(page.get_by_role("heading", name="Test")).to_be_visible()
# Then verify the API was called correctly, the list updated, etc.
~~~

The app test is longer, involves multiple interactions, and often needs to check dynamic state.

### The testing implications

**Pages are forgiving.** A page test that fails usually means the content is genuinely wrong. Low flakiness.

**Apps are demanding.** An app test can fail because:

- An element hasn't loaded yet
- An API call was slow
- A previous step left state in an unexpected way
- Two async operations raced
- A modal appeared unexpectedly

Playwright's tools help, but app testing requires more discipline. You'll write more setup, more waits, more assertions, more cleanup.

### The one-line summary

A **web page** is a document you read. A **web app** is a program you use. Playwright tests both, but expects different behaviour from each.

When you encounter a new site, ask: is this a page or an app? The answer shapes your test strategy.`,
    handsOn: `Let's test the same action on a page and an app.

### Step 1: A page — Wikipedia

Visit en.wikipedia.org and open any article.

Notice:
- The content loads fast
- Clicking links loads a full new page
- Refresh gives the same content

Open DevTools Network and reload. Count the requests — around 20-30 for a typical article.

### Step 2: An app — Gmail or Notion

Open Gmail (mail.google.com) or Notion (notion.so).

Notice:
- The initial load takes longer
- Clicking around doesn't reload the page — the URL changes but no full reload
- Data appears dynamically

Open DevTools Network and watch as you click around. You'll see a steady stream of API calls (usually to endpoints ending in .json or /api).

### Step 3: Compare

Write down:

- How many requests on initial load?
- How many requests as you interacted?
- How did the URL change without a full reload?

### Step 4: In Playwright terms

For Wikipedia, a Playwright test might be:

~~~python
page.goto("https://en.wikipedia.org/wiki/Playwright")
expect(page.get_by_role("heading", level=1)).to_contain_text("Playwright")
~~~

For Gmail, a Playwright test would need:

~~~python
# Login first (setup)
# Navigate to inbox
# Wait for the inbox to load
# Click compose
# Fill in recipient
# Fill in subject
# Click send
# Wait for the confirmation
# Verify the sent folder
~~~

Much more complex. Same tool, different scale.

### Deliverable

You visited a page and an app, observed the network difference, and identified why one is easier to test than the other.`,
    challenge: `Pick three sites you use. Classify each as a page, an app, or in between.

For each, answer:

1. Does clicking around reload the page?
2. Is content personalised for you?
3. Does the URL change without a reload?
4. Are there many API calls in the Network tab?

### Classifications to write

- **Page** — mostly static, content same for everyone
- **App** — highly interactive, content specific to you
- **Hybrid** — some of each

### Reflection

Every app you classified requires a different testing strategy:

- Pages: focus on content correctness, links, SEO
- Apps: focus on user flows, state changes, error handling
- Hybrids: both, depending on the area

Playwright handles all three, but you'll write very different tests for each.

Write down your classifications. This skill — recognising what kind of site you're testing — shapes your entire test plan.`,
    proTips: [
      "For web apps, always start with a stable login state. Don't log in through the UI in every test — save auth state and reuse it.",
      "Use page.wait_for_url or expect(page).to_have_url when apps navigate without full reloads.",
      "Apps change DOM constantly. Prefer role-based locators that don't depend on CSS classes.",
      "Look at the Network tab — if a click triggers an API call, wait for that call before asserting UI changes.",
      "For pages, plain expect assertions on text and titles are enough. No complex setup needed.",
    ],
    commonMistakes: [
      {
        mistake: "Testing an app like a page",
        fix: "Apps need waits for async state. Use Playwright's auto-waiting assertions, not fixed sleeps.",
      },
      {
        mistake: "Testing a page like an app",
        fix: "Pages don't need complex setup. If you're adding fixtures for a blog, you're over-engineering.",
      },
      {
        mistake: "Assuming every site is an SPA",
        fix: "Many modern sites are still server-rendered pages. Check the Network tab to know.",
      },
      {
        mistake: "Skipping the wait for the app to finish loading",
        fix: "After clicking, wait for the specific next state. Don't assume anything happens instantly.",
      },
      {
        mistake: "Not checking if a click triggers a network call",
        fix: "If it does, you may want to wait for that call before asserting. Playwright supports waiting for specific requests.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Testing a web page (simple)",
        code: `from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    page.goto("https://en.wikipedia.org/wiki/Playwright")
    expect(page.get_by_role("heading", level=1)).to_contain_text("Playwright")
    expect(page).to_have_title("Playwright - Wikipedia")

    browser.close()`,
      },
      {
        language: "python",
        title: "Testing a web app (multi-step)",
        code: `from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    page.goto("https://app.example.com")
    page.get_by_role("button", name="New project").click()
    page.get_by_label("Project name").fill("My Test Project")
    page.get_by_label("Description").fill("Test description")
    page.get_by_role("button", name="Create").click()

    # Wait for the new project to appear
    expect(page.get_by_role("heading", name="My Test Project")).to_be_visible()

    browser.close()`,
      },
      {
        language: "text",
        title: "Page vs app — quick check",
        code: `Page:
- Reload every link
- Same content for everyone
- Simple to test
- Examples: blogs, docs, marketing sites

App:
- No reload on navigation
- Personalised per user
- Requires interaction and waiting
- Examples: Gmail, Notion, dashboards`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — Progressive web apps",
        url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
      },
      {
        title: "Playwright — Best practices",
        url: "https://playwright.dev/python/docs/best-practices",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "web", "apps", "pages"],
  };

export default topic;
