import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "cookies-vs-localstorage-vs-sessionstorage",
  title: "Cookies vs localStorage vs sessionStorage",
  summary:
    "Browsers have three small storage boxes. Learn what each one holds, how long it lasts, and how Playwright uses them.",
  whyItMatters:
    "Login state lives in these boxes. Playwright can save and reuse them, so you log in once and skip it in every other test.",
  notes: `Browsers can **store small bits of data on your device**. There are three main places: cookies, localStorage and sessionStorage.

Think of three ways to remember things. A cookie is like a token slip the shop gives you, and you show it every time you walk in. localStorage is like your almirah at home. Things stay there until you remove them. sessionStorage is like a sticky note on your desk. When you leave for the day, it is thrown away.

### Cookies

A cookie is a tiny piece of text. The server asks the browser to save it, using the Set-Cookie header. After that, the browser sends it back **automatically with every request** to that site.

~~~text
Set-Cookie: session=xyz789; HttpOnly; Secure
~~~

Cookies are mostly used for login sessions. HTTP forgets you after every request. The cookie is how the server recognises you again.

Useful cookie settings:

- **Expires or Max-Age**: when the cookie dies. Without it, the cookie goes when the browser closes
- **HttpOnly**: JavaScript on the page cannot read it. This protects against theft
- **Secure**: sent only over https
- **SameSite**: controls whether it travels with requests coming from other sites
- **Domain and Path**: which addresses it applies to

Size limit is about 4 KB per cookie. Small.

### localStorage

localStorage is a key-value box in the browser. Only JavaScript on the page uses it. It is **not sent to the server automatically**.

~~~javascript
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
localStorage.removeItem("theme");
~~~

Data stays even after you close the browser and come back next week. The space is much bigger, around 5 MB. Apps use it for theme choice, saved drafts and sometimes login tokens.

### sessionStorage

sessionStorage looks the same as localStorage. But it lives only for **one browser tab**. Close the tab and it is gone. Another tab on the same site gets its own separate box.

~~~javascript
sessionStorage.setItem("step", "2");
~~~

Multi-step forms sometimes use it to remember progress inside one tab.

### Side by side

- **Cookie**: sent to server automatically, small, can expire, can be HttpOnly
- **localStorage**: stays until cleared, about 5 MB, never sent automatically
- **sessionStorage**: lasts for one tab, about 5 MB, never sent automatically

### Seeing them in DevTools

Open DevTools and go to the Application tab. On the left you will see Cookies, Local Storage and Session Storage. Click a site and read the rows. You can edit or delete any row. This is very handy while testing.

### Why Playwright cares

Every Playwright test starts with a **fresh browser context**. That means empty cookies and empty storage. It is like a brand new phone.

So how do you avoid logging in again and again? You save the state once and reuse it.

~~~python
context = browser.new_context()
page = context.new_page()
# ... log in here ...
context.storage_state(path="auth.json")
~~~

The file auth.json holds cookies and localStorage. Later:

~~~python
context = browser.new_context(storage_state="auth.json")
~~~

Now the test starts already logged in. This saves a lot of time.

Keep auth.json out of Git. It contains your login session.

### Working with cookies directly

~~~python
context.add_cookies([
    {"name": "session", "value": "xyz789", "url": "https://example.com"}
])
print(context.cookies())
context.clear_cookies()
~~~

### Reading localStorage in a test

~~~python
value = page.evaluate("localStorage.getItem('theme')")
print(value)
~~~

### Which one should an app use?

- Login session: cookie with HttpOnly and Secure
- User preferences: localStorage
- Temporary tab data: sessionStorage

As a tester, you do not decide this. But you must know where the app keeps its data, so you can set it up or check it.

### A quick debugging habit

If a test behaves as if the user is logged out, open the Application tab. Check whether the cookie or token is really there. Missing storage is a very common cause.`,
  handsOn: `Let's look inside all three boxes.

### Step 1: Open a website

Open any site where you are logged in, such as a practice site. Open DevTools and click the Application tab.

### Step 2: Read cookies

Under Cookies, click the site name. Note down two cookie names. Check their Expires, HttpOnly and Secure columns.

### Step 3: Use localStorage from the Console

Open the Console and run:

~~~javascript
localStorage.setItem("favourite-chai", "masala");
localStorage.getItem("favourite-chai");
~~~

Go back to the Application tab and open Local Storage. Your new row should be there.

### Step 4: Use sessionStorage

~~~javascript
sessionStorage.setItem("tab-note", "only in this tab");
~~~

Open the same site in a second tab. Check Session Storage there. Your row is missing. Close the first tab and reopen the site. It is gone there too.

### Step 5: Delete a cookie

In the Application tab, right-click a cookie and delete it. Refresh the page. If it was a login cookie, you will be logged out.

### Step 6: Write the Playwright idea

Write this in your notes:

~~~python
context.storage_state(path="auth.json")
new_context = browser.new_context(storage_state="auth.json")
~~~

### Deliverable

You read cookies, set a localStorage value, tested sessionStorage across tabs, and saw how deleting a cookie logs you out.`,
  challenge: `Make a comparison table in a notes file with these rows: cookies, localStorage, sessionStorage.

Columns: Who can read it, Sent to server automatically, How long it lasts, Approximate size, One real use.

Then do this on a practice site:

1. Find one cookie and say what you think it is for
2. Store your name in localStorage and read it back
3. Store a step number in sessionStorage and prove it does not carry over to another tab
4. Delete the login cookie and note what happens

Finally, write a Playwright plan in plain steps for logging in only once and reusing the session across ten tests. Mention where you would save the file and why it must stay out of Git.`,
  proTips: [
    "Use storage_state to log in once and reuse the session across many tests.",
    "Add the auth state file to .gitignore. It holds a live session.",
    "The Application tab in DevTools lets you edit cookies and storage by hand to test odd cases.",
    "HttpOnly cookies cannot be read by page JavaScript, but Playwright can still read them from the context.",
    "If a test acts as if the user is logged out, check the cookies and storage first.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking localStorage is sent to the server",
      fix: "Only cookies travel automatically. localStorage stays in the browser unless the page code sends it.",
    },
    {
      mistake: "Logging in through the UI in every test",
      fix: "Log in once, save storage_state, and start other tests with that file.",
    },
    {
      mistake: "Committing the saved auth file to Git",
      fix: "Add it to .gitignore. Anyone with that file can act as that logged-in user.",
    },
    {
      mistake: "Expecting sessionStorage to be shared across tabs",
      fix: "Each tab has its own sessionStorage. Use localStorage or cookies for sharing.",
    },
    {
      mistake: "Expecting data to survive between Playwright tests",
      fix: "Each test gets a fresh context with empty storage. Load a saved state if you need old data.",
    },
  ],
  codeExamples: [
    {
      language: "javascript",
      title: "Using localStorage and sessionStorage",
      code: `localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

sessionStorage.setItem("step", "2");
console.log(sessionStorage.getItem("step"));`,
    },
    {
      language: "python",
      title: "Save and reuse a logged-in session",
      code: `context = browser.new_context()
page = context.new_page()
# log in here
context.storage_state(path="auth.json")

new_context = browser.new_context(storage_state="auth.json")
page2 = new_context.new_page()`,
    },
    {
      language: "python",
      title: "Work with cookies directly",
      code: `context.add_cookies([
    {"name": "session", "value": "xyz789", "url": "https://example.com"}
])
print(context.cookies())
context.clear_cookies()`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Using HTTP cookies",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
    },
    {
      title: "Playwright — Authentication",
      url: "https://playwright.dev/python/docs/auth",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["cookies", "localstorage", "sessionstorage", "storage", "web-fundamentals"],
};

export default topic;