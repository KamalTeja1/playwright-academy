import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "dynamic-content",
    title: "Dynamic Content",
    summary:
      "Understand content that appears, changes, or disappears after the page first loads.",
    whyItMatters:
      "Most modern apps are dynamic. Playwright tests must wait for meaningful page states, not assume every element exists immediately.",
    notes: `**Dynamic content** is anything on a page that changes after the first screen appears.

This happens constantly in modern web apps.

You open an IRCTC page. First you see a spinner. Then trains appear.

You open Swiggy. First the restaurant cards show skeleton boxes. Then prices, ratings, and delivery times arrive.

You submit a login form. First the button says Log in. Then it may show Signing in. After success, the dashboard appears. After failure, an error message appears.

All of that is dynamic content.

### Static content vs dynamic content

**Static content** is already present when the page loads.

~~~html
<h1>Playwright Academy</h1>
<p>Learn browser automation from zero.</p>
~~~

**Dynamic content** appears or changes later.

~~~html
<p role="status">Loading courses...</p>
~~~

After an API request finishes, JavaScript may replace it with:

~~~html
<ul>
  <li>HTML fundamentals</li>
  <li>CSS selectors</li>
  <li>Playwright locators</li>
</ul>
~~~

The browser page is not a fixed poster. It is more like an Indian railway platform display. The board keeps changing as new information arrives.

### Why content becomes dynamic

A page can change because of:

- API responses
- User clicks
- Form validation
- Search input
- Tabs and accordions
- Modals opening or closing
- Infinite scrolling
- Live notifications
- Timers and countdowns
- Sign-in state
- Feature flags or permissions

For example, an admin dashboard may show different buttons for an admin and a regular employee. The HTML is built based on the current user's permission.

### The loading lifecycle

A common lifecycle looks like this:

1. Page opens
2. Loading message or skeleton appears
3. Browser sends an API request
4. API responds with data
5. JavaScript updates the DOM
6. Loading message disappears
7. Final content becomes visible

A test should understand which part of this lifecycle matters.

If you are testing that courses load successfully, do not only check that Loading courses appears. Check that the course list becomes visible.

~~~python
expect(page.get_by_role("heading", name="Available courses")).to_be_visible()
expect(page.get_by_role("listitem")).to_have_count(3)
~~~

The exact assertion depends on the product. The key idea is to wait for a meaningful final result.

### Why fixed waits are bad

A common beginner reaction is to write a fixed delay:

~~~python
page.wait_for_timeout(3000)
~~~

This means: stop for three seconds and hope the page is ready.

It can fail in two opposite ways:

- On a fast run, you waste three seconds for no reason.
- On a slow run, three seconds is not enough and the test still fails.

It is like waiting outside a restaurant for exactly ten minutes without checking whether your table is ready.

Playwright is better at this. Its locators and web-first assertions wait automatically for the expected condition.

~~~python
expect(page.get_by_text("Payment successful")).to_be_visible()
~~~

This waits until the message appears, up to the configured timeout.

### Dynamic does not mean random

A dynamic page should still have clear states.

For a search page, those states may be:

- Empty search box
- User types a query
- Loading indicator appears
- Results appear
- No-results message appears
- Network error message appears

Each state is testable.

For example:

~~~python
search_box = page.get_by_placeholder("Search courses")
search_box.fill("XPath")

expect(page.get_by_role("heading", name="XPath basics")).to_be_visible()
~~~

If no result exists, test the meaningful empty state:

~~~python
expect(page.get_by_text("No courses found")).to_be_visible()
~~~

### Common dynamic UI patterns

**Loading spinner**

A small icon or text that tells users data is loading.

**Skeleton screen**

Grey placeholder boxes shaped like the final cards or rows.

**Toast notification**

A small success or error message that appears briefly, such as Profile saved.

**Modal**

A dialog that appears above the current page, such as Delete account?

**Accordion**

Extra content appears after a user clicks a heading.

**Infinite scroll**

More items load as the user reaches the bottom of a list.

**Autocomplete**

Suggestions appear while the user types.

All of these need careful locators and assertions.

### How Playwright helps

Playwright locators auto-wait for elements to become actionable. Before clicking, it checks useful things such as visibility and stability.

Assertions also retry until the expected state arrives.

This does not mean every test is magically correct. You still need to wait for the right thing.

Bad test idea:

~~~python
page.wait_for_timeout(2000)
page.locator(".card").click()
~~~

Better test idea:

~~~python
course_card = page.get_by_role("article", name="XPath basics")
expect(course_card).to_be_visible()
course_card.get_by_role("link", name="Start lesson").click()
~~~

The better version names the product state it needs.

### The simple rule

When testing dynamic content, ask:

- What triggers the change?
- What should the user see next?
- What should disappear?
- What is the final meaningful state?
- Which locator describes that state clearly?

Test the result, not the passage of time.`,
    handsOn: `Let's build a small page with loading and final states.

### Step 1: Create a practice file

Create a file named dynamic-content.html in your html-practice folder.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dynamic Content Practice</title>
  </head>
  <body>
    <main>
      <h1>Course library</h1>
      <p id="status" role="status">Loading courses...</p>
      <ul id="course-list"></ul>
    </main>

    <script>
      setTimeout(() => {
        const courses = [
          "HTML fundamentals",
          "CSS selectors",
          "Playwright locators",
        ];

        const list = document.querySelector("#course-list");
        const status = document.querySelector("#status");

        list.innerHTML = courses
          .map((course) => "<li>" + course + "</li>")
          .join("");

        status.textContent = "Courses loaded";
      }, 1500);
    </script>
  </body>
</html>
~~~

Open the file in your browser.

### Step 2: Watch the states

For the first moment, you should see Loading courses.

After around one and a half seconds, the course list appears and the status changes to Courses loaded.

Open DevTools and inspect the list before and after the change.

### Step 3: Test the final DOM in the console

After the courses load, run:

~~~javascript
document.querySelectorAll("#course-list li").length
document.querySelector("#status").textContent
~~~

You should get 3 and Courses loaded.

### Step 4: Write Playwright expectations

Imagine this page is part of your app. Write assertions for the final state:

~~~python
expect(page.get_by_role("status")).to_have_text("Courses loaded")
expect(page.get_by_role("listitem")).to_have_count(3)
expect(
    page.get_by_role("listitem", name="Playwright locators")
).to_be_visible()
~~~

Notice that none of these need a fixed delay.

### Deliverable

You watched a loading state change into final content, inspected both DOM states, and wrote Playwright assertions for the final result.`,
    challenge: `Extend the practice page with a search box and a Search button.

Use this behaviour:

- If the user searches for Playwright, show one result named Playwright locators.
- If the user searches for Python, show a message saying No courses found.
- While the search is running, show Searching...
- Add a short delay so you can see the loading state.

Then write Playwright tests for these two flows:

1. Search for Playwright and verify the result appears.
2. Search for Python and verify the no-results message appears.

For both tests, do not use a fixed timeout. Wait for the final text or final result instead.

Bonus: add a Clear search button that removes the result or no-results message. Write one assertion for the cleared state.`,
    proTips: [
      "Wait for a user-visible result, such as a heading, row, alert, or button, instead of waiting for a number of milliseconds.",
      "Use role=status for loading updates and role=alert for important error messages when building accessible apps.",
      "Test both success and empty states. A search page is incomplete if it only works when results exist.",
      "Inspect the DOM after the user action that triggers the change, not only when the page first opens.",
      "If content changes often, use stable locators based on roles, labels, and test IDs instead of list positions.",
    ],
    commonMistakes: [
      {
        mistake: "Using a fixed wait before every assertion",
        fix: "Use an assertion that waits for a meaningful state, such as visible text, a loaded row, or a success alert.",
      },
      {
        mistake: "Checking only that the loading spinner appeared",
        fix: "Also verify that loading finishes and the intended content, empty state, or error state appears.",
      },
      {
        mistake: "Selecting the third card because it is third today",
        fix: "Locate cards by meaningful content, role, or test ID. Dynamic lists can change order.",
      },
      {
        mistake: "Ignoring temporary error messages and toast notifications",
        fix: "Test important feedback. Use accessible roles such as alert or status so users and tests can find it.",
      },
      {
        mistake: "Assuming a missing element means the locator is wrong",
        fix: "Check whether the action, API response, permission, or scroll position needed to create that element has happened.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Avoid fixed waits",
        code: `# Avoid this
page.wait_for_timeout(3000)

# Prefer a meaningful assertion
expect(
    page.get_by_text("Courses loaded")
).to_be_visible()`,
      },
      {
        language: "python",
        title: "Test search results after dynamic loading",
        code: `page.get_by_placeholder("Search courses").fill("Playwright")

expect(
    page.get_by_role("listitem", name="Playwright locators")
).to_be_visible()`,
      },
      {
        language: "python",
        title: "Test a dynamic empty state",
        code: `page.get_by_placeholder("Search courses").fill("Python")

expect(
    page.get_by_text("No courses found")
).to_be_visible()`,
      },
    ],
    furtherReading: [
      {
        title: "Playwright — Auto-waiting",
        url: "https://playwright.dev/python/docs/actionability",
      },
      {
        title: "Playwright — Assertions",
        url: "https://playwright.dev/python/docs/test-assertions",
      },
      {
        title: "MDN — Web API introduction",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["dynamic-content", "dom", "auto-wait", "web-fundamentals"],
  };

export default topic;
