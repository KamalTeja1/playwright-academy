import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "devtools-console-panel",
  title: "DevTools: The Console Panel",
  summary:
    "The Console shows errors and lets you run JavaScript on the live page. Learn to read messages and test locator ideas.",
  whyItMatters:
    "Page errors, CORS problems and failed scripts appear in the Console. It is also a quick lab to try selectors before writing tests.",
  notes: `The Console panel is **a message board and a practice lab** in one place. The page writes messages there, and you can type commands there too.

Think of the notice board and the office intercom in your building. The board shows announcements, including warnings. The intercom lets you speak to someone directly. The Console does both for your page.

### Opening it

Press F12 and click Console. Or press Ctrl + Shift + J on Windows and Linux, and Cmd + Option + J on Mac.

### Message types

The page and the browser write different kinds of messages.

- **Log**: normal information, from console.log
- **Info**: general notes
- **Warning**: yellow. Something looks risky but still works
- **Error**: red. Something failed

Use the filter buttons to show only errors. Red messages are your first clue when a page misbehaves.

### Common errors you will see

- **Uncaught TypeError**: the page code tried to use something that does not exist
- **Failed to load resource: 404**: a file or call was not found
- **CORS policy errors**: the server did not allow the call, as we studied earlier
- **Mixed content**: an https page tried to load an http file

Each message shows the file name and line number on the right. Click it to open the source.

### Running JavaScript

Type a command and press Enter. The result appears below.

~~~javascript
2 + 2
document.title
location.href
~~~

You are talking to the real, live page. This is why the Console is so handy.

### Testing locator ideas

The Console has two shortcuts that only work inside DevTools.

- **$$("css")**: returns all elements matching a CSS selector
- **$x("xpath")**: returns all elements matching an XPath
- **$0**: the element currently selected in the Elements panel

~~~javascript
$$('button[type="submit"]')
$$('[data-testid="email-input"]').length
$x('//button[text()="Log in"]')
~~~

If the list has exactly one item, your selector is precise. If it is empty, check for a typo, a shadow root or an iframe.

### Reading and changing the page

~~~javascript
document.querySelector("h1").textContent
document.querySelector("h1").textContent = "Hello Playwright"
~~~

The second line changes the heading. It is temporary. Refresh to undo.

### Reading storage

~~~javascript
localStorage.getItem("theme")
document.cookie
~~~

This helps check what the app has saved.

### Useful settings

- **Preserve log**: keeps messages after navigation
- **Clear console**: the circle icon with a line, or Ctrl + L
- **Hide network messages**: reduces noise
- **Context dropdown**: lets you switch into an iframe

### Catching errors in Playwright

The same messages can be read by your test. This is very useful.

~~~python
errors = []
page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
page.on("pageerror", lambda exc: errors.append(str(exc)))

page.goto("https://example.com")
assert errors == []
~~~

Now the test fails if the page throws a hidden error, even when the screen looks fine.

### A caution

Be careful when someone tells you to paste a strange script into the Console. It can steal your login. Only run code you understand.

### A simple routine

1. Open the Console and clear it
2. Reload the page
3. Read the red messages first
4. Test selectors with $$ and $x
5. Copy the working idea into your Playwright locator

That is how testers use the Console every day.`,
  handsOn: `Let's use the Console to read messages and test selectors.

### Step 1: Create a practice page

In your html-practice folder, create console-panel.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Console Practice</title>
  </head>
  <body>
    <h1>Console practice</h1>
    <button id="ok">Save</button>
    <button id="bad">Break it</button>

    <script>
      console.log("Page loaded");
      console.warn("This is only a warning");
      document.getElementById("bad").addEventListener("click", function () {
        throw new Error("Something broke");
      });
    </script>
  </body>
</html>
~~~

Open it in Chrome and open the Console.

### Step 2: Read the messages

You should see Page loaded and a yellow warning. Click the Break it button. A red error appears. Note the file name and line number.

### Step 3: Run simple commands

~~~javascript
document.title
document.querySelectorAll("button").length
~~~

### Step 4: Test locators

~~~javascript
$$("button")
$$("#ok")
$x('//button[text()="Save"]')
~~~

Check the number of items in each result.

### Step 5: Change the page

~~~javascript
document.querySelector("h1").textContent = "Hello Playwright"
~~~

### Step 6: Write the Playwright check

Write this in your notes:

~~~python
errors = []
page.on("pageerror", lambda exc: errors.append(str(exc)))
page.goto("file:///path/to/console-panel.html")
page.get_by_role("button", name="Break it").click()
print(errors)
~~~

### Deliverable

You read a log, a warning and an error, tested three selectors, changed the page text and wrote a Playwright error catcher.`,
  challenge: `Take the practice page and extend it.

Add:

- A third button called Warn that calls console.warn with your own message
- A text input with a data-testid called name-input

Then do these in the Console and note the result of each:

1. Count all buttons using $$
2. Select the input using its data-testid and read the length
3. Write one XPath for the Warn button and run it with $x
4. Type your name into the input from the Console and read it back
5. Trigger the error and describe what the red message tells you

Finally, write a Playwright snippet that listens for console warnings and page errors during the test, and fails if any page error appears. Add a short line on why that is useful when the screen looks normal.`,
  proTips: [
    "Check the Console for red messages first whenever a page behaves oddly.",
    "Use $$ and $x to test selectors before writing them in Playwright.",
    "Use $0 to refer to the element you selected in the Elements panel.",
    "Use page.on('pageerror') in tests to catch errors hidden from the screen.",
    "Never paste a script you do not understand into the Console.",
  ],
  commonMistakes: [
    {
      mistake: "Ignoring red messages because the page looks fine",
      fix: "Hidden errors can break features later. Capture them in your test with the pageerror event.",
    },
    {
      mistake: "Using $$ or $x in a Playwright script",
      fix: "These shortcuts work only inside DevTools. In Playwright, use page.locator or evaluate.",
    },
    {
      mistake: "Getting an empty result and assuming the element is missing",
      fix: "Check for a typo, a shadow root, an iframe or content that has not loaded yet.",
    },
    {
      mistake: "Running unknown code pasted from the internet",
      fix: "Only run code you understand. A bad script can steal your login session.",
    },
    {
      mistake: "Forgetting the Console is cleared after navigation",
      fix: "Tick Preserve log if you want to keep messages across page loads.",
    },
  ],
  codeExamples: [
    {
      language: "javascript",
      title: "Test selectors in the Console",
      code: `$$('button[type="submit"]');
$$('[data-testid="email-input"]').length;
$x('//button[text()="Log in"]');
$0;`,
    },
    {
      language: "javascript",
      title: "Read and change the page",
      code: `document.title;
document.querySelector("h1").textContent;
document.querySelector("h1").textContent = "Hello Playwright";
localStorage.getItem("theme");`,
    },
    {
      language: "python",
      title: "Catch console errors in Playwright",
      code: `errors = []

page.on(
    "console",
    lambda msg: errors.append(msg.text) if msg.type == "error" else None,
)
page.on("pageerror", lambda exc: errors.append(str(exc)))

page.goto("https://example.com")
assert errors == []`,
    },
  ],
  furtherReading: [
    {
      title: "Chrome DevTools — Console overview",
      url: "https://developer.chrome.com/docs/devtools/console",
    },
    {
      title: "Playwright — Page events",
      url: "https://playwright.dev/python/docs/api/class-page#page-event-page-error",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["devtools", "console", "debugging", "javascript", "web-fundamentals"],
};

export default topic;