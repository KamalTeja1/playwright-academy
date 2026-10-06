import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "http-methods",
  title: "HTTP Methods",
  summary:
    "GET, POST, PUT, PATCH and DELETE tell the server what you want to do. Learn each one with simple examples.",
  whyItMatters:
    "API tests use these methods every day. Picking the wrong one gives confusing results and failed checks.",
  notes: `An HTTP method is a **verb**. It tells the server what action you want.

Think of the IRCTC website. You can look at train timings. You can book a ticket. You can change a passenger name. You can cancel the ticket. Each action is different, and the server must know which one you mean.

That is what methods do.

### GET: read something

GET asks for data. It does not change anything.

~~~text
GET /trains?from=BLR&to=MAS
~~~

Opening a page uses GET. Searching uses GET. It is like looking at the train chart. You are only reading.

GET is **safe**. You can repeat it a hundred times and nothing changes on the server.

### POST: create something

POST sends new data to the server to create something.

~~~text
POST /bookings
{ "train": "12607", "passenger": "Sneha" }
~~~

Booking a ticket is a good example. Each POST can create a new booking. If you send it twice, you may get two bookings.

Login forms and sign-up forms also use POST.

### PUT: replace something

PUT replaces a whole record with the data you send.

~~~text
PUT /passengers/42
{ "name": "Sneha", "age": 29, "seat": "lower" }
~~~

You send the complete new version. If you leave a field out, the server may clear it.

### PATCH: change a part

PATCH updates only some fields.

~~~text
PATCH /passengers/42
{ "seat": "upper" }
~~~

Only the seat changes. Name and age stay the same. This is like correcting one box on a form instead of rewriting the whole form.

### DELETE: remove something

DELETE removes a record.

~~~text
DELETE /bookings/9001
~~~

This is the cancel ticket action.

### Idempotent: a useful word

Some methods give the same result however many times you send them. These are called **idempotent**.

- GET: same result every time
- PUT: replacing with the same data twice leaves the same state
- DELETE: once it is gone, deleting again leaves it gone
- POST: not idempotent. Two sends can create two records

This matters in testing. If your test sends POST twice by mistake, you may end up with duplicate data.

### A quick table

- GET: read, no body, safe
- POST: create, has a body
- PUT: replace fully, has a body
- PATCH: update partly, has a body
- DELETE: remove, usually no body

### Two more you may see

- **HEAD**: like GET, but returns only headers, not the body
- **OPTIONS**: asks the server what is allowed. Browsers send this before some cross-site requests. We cover that in the CORS topic.

### Methods in Playwright

Playwright can send API requests directly, without opening a page.

~~~python
response = page.request.get("https://api.example.com/trains")
print(response.status)

created = page.request.post(
    "https://api.example.com/bookings",
    data={"train": "12607", "passenger": "Sneha"},
)
print(created.status)
~~~

This is very useful. You can create test data with POST, then open the page and check it appears. After the test, you can clean up with DELETE.

### Forms and methods

A plain HTML form uses GET or POST only. A search form often uses GET, so the words appear in the URL. A login form uses POST, so the password does not appear in the URL.

Never put passwords or secrets in a GET URL. URLs are saved in history and logs.

### How to remember

Read, Create, Replace, Update, Delete. That is GET, POST, PUT, PATCH, DELETE. If you can say what the user is trying to do in plain words, the method usually becomes clear.`,
  handsOn: `Let's try each method on a free practice API.

We will use jsonplaceholder.typicode.com. It is a fake API made for learning. Nothing is really saved.

### Step 1: Open the DevTools Console

Open any page in Chrome, such as a blank tab with a simple site. Open DevTools and go to the Console.

### Step 2: Send a GET

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((r) => r.json())
  .then(console.log);
~~~

You should see one post with a title and body.

### Step 3: Send a POST

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Chai notes", body: "Less sugar", userId: 1 }),
})
  .then((r) => r.json())
  .then(console.log);
~~~

The response includes a new id. The API pretends to create it.

### Step 4: Send PATCH and DELETE

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New title" }),
}).then((r) => r.json()).then(console.log);

fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
  .then((r) => console.log(r.status));
~~~

### Step 5: Watch in the Network tab

Open the Network tab and repeat one call. Click the row. Find Request Method in the Headers section.

### Step 6: Write the Playwright version

Write this in your notes:

~~~python
r = page.request.get("https://jsonplaceholder.typicode.com/posts/1")
print(r.status, r.json()["title"])
~~~

### Deliverable

You sent GET, POST, PATCH and DELETE. You saw each method in the Network tab. You wrote one Playwright API call.`,
  challenge: `Imagine a small library app with books.

For each of these user actions, write the HTTP method, the path and, where needed, a sample body:

1. Show the list of all books
2. Add a new book called Malgudi Days
3. Replace the full details of book 7
4. Change only the stock count of book 7
5. Remove book 7

Then answer:

- Which of these are idempotent?
- What could go wrong if a test sends the add-book request twice?

Finally, write a Playwright snippet that creates a book with POST, checks the response status, and then deletes it so the test leaves no extra data behind.`,
  proTips: [
    "Ask what the user is doing in plain words. Reading means GET. Creating means POST. Removing means DELETE.",
    "Use page.request to create test data quickly instead of clicking through forms.",
    "Always clean up data you create. Use DELETE at the end of the test.",
    "Never put passwords or tokens in a GET URL.",
    "Check the method column in the Network tab when an API call behaves oddly.",
  ],
  commonMistakes: [
    {
      mistake: "Using POST for everything",
      fix: "Pick the method that matches the action. Reading is GET, updating part of a record is PATCH, and so on.",
    },
    {
      mistake: "Confusing PUT and PATCH",
      fix: "PUT replaces the whole record. PATCH changes only the fields you send.",
    },
    {
      mistake: "Sending a body with GET",
      fix: "GET reads data. Put filters in the URL query, like ?from=BLR, not in a body.",
    },
    {
      mistake: "Sending POST twice in a retry and creating duplicates",
      fix: "POST is not idempotent. Check for existing data first, or clean up between runs.",
    },
    {
      mistake: "Leaving test data behind",
      fix: "Delete what you create at the end of the test, or use a fresh test account each run.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "The five common methods",
      code: `GET    /bookings/9001
POST   /bookings
PUT    /bookings/9001
PATCH  /bookings/9001
DELETE /bookings/9001`,
    },
    {
      language: "python",
      title: "API calls with Playwright",
      code: `response = page.request.get("https://api.example.com/trains")
print(response.status)

created = page.request.post(
    "https://api.example.com/bookings",
    data={"train": "12607", "passenger": "Sneha"},
)
print(created.status)`,
    },
    {
      language: "javascript",
      title: "A POST from the DevTools Console",
      code: `fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Chai notes", userId: 1 }),
}).then((r) => r.json()).then(console.log);`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — HTTP request methods",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
    },
    {
      title: "Playwright — API testing",
      url: "https://playwright.dev/python/docs/api-testing",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["http", "methods", "get", "post", "api", "web-fundamentals"],
};

export default topic;