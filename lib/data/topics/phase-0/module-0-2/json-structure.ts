import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "json-structure",
  title: "JSON Structure",
  summary:
    "JSON is the plain-text format almost every API uses. Learn its shape, its rules and how to read it in tests.",
  whyItMatters:
    "API responses, test data and config files are all JSON. One missing comma breaks everything, so you must read it with confidence.",
  notes: `JSON is a **simple text format for sharing data**. The name stands for JavaScript Object Notation. Almost every API on the internet speaks it.

Think of a filled-in form. There are labels on the left and answers on the right: Name, Rohit. City, Pune. JSON is the same idea. Labels and values, written in plain text, so both humans and machines can read it.

### The basic shape

~~~text
{
  "name": "Rohit",
  "age": 28,
  "city": "Pune"
}
~~~

- Curly braces hold one **object**
- Each item is a **key and value**, separated by a colon
- Items are separated by commas
- Keys are always in double quotes

### The six value types

A value can be one of these:

1. **String**: text in double quotes, like "Pune"
2. **Number**: 28 or 99.5, no quotes
3. **Boolean**: true or false, no quotes
4. **Null**: null, meaning nothing is there
5. **Object**: another set of curly braces
6. **Array**: a list in square brackets

### Arrays

An array is an ordered list.

~~~text
{
  "skills": ["python", "playwright", "git"]
}
~~~

Think of a shopping list. Order matters, and each item has a position, starting from zero.

### Nesting

Objects and arrays can sit inside each other.

~~~text
{
  "orderId": 1001,
  "paid": true,
  "customer": {
    "name": "Meera",
    "phone": null
  },
  "items": [
    { "name": "Masala dosa", "price": 90 },
    { "name": "Filter coffee", "price": 40 }
  ]
}
~~~

To reach Meera's name, you go: customer, then name. To reach the second item name, you go: items, position 1, then name.

### The strict rules

JSON is fussy. Small slips break it.

- Keys and strings need **double quotes**. Single quotes are not allowed
- **No trailing comma** after the last item
- **No comments** are allowed
- true, false and null are lowercase
- Numbers have no quotes, unless you really want a string

Here is a broken example:

~~~text
{
  'name': "Rohit",
  "age": 28,
}
~~~

It has single quotes on a key and a trailing comma. Both are errors.

### Number or string?

These are different:

~~~text
{ "age": 28 }
{ "age": "28" }
~~~

The first is a number. The second is text. In tests, comparing 28 with "28" can fail, so look carefully.

### JSON in Playwright

Playwright turns a JSON response into a normal Python dictionary.

~~~python
response = page.request.get("https://api.example.com/orders/1001")
data = response.json()

print(data["customer"]["name"])
print(data["items"][0]["name"])
assert data["paid"] is True
~~~

Notice the match. Objects become dictionaries. Arrays become lists. true becomes True, and null becomes None.

You can also send JSON:

~~~python
page.request.post(
    "https://api.example.com/orders",
    data={"item": "Masala dosa", "qty": 2},
)
~~~

### Reading JSON in files

Test data often lives in a JSON file.

~~~python
import json

with open("users.json") as f:
    users = json.load(f)

print(users[0]["name"])
~~~

### Tools that help

- DevTools Network tab: open a request and use the Response or Preview tab
- Your editor: VS Code highlights JSON errors with red lines
- The Python module json: json.loads for text and json.dumps to print neatly

### A quick habit

When JSON looks confusing, go slowly. Find each opening brace or bracket and match it with its closing one. Then read key by key. Most errors are a missing comma, a missing quote or an extra comma at the end.`,
  handsOn: `Let's read, break and fix JSON.

### Step 1: Create a file

In your practice folder, create order.json and paste this:

~~~text
{
  "orderId": 1001,
  "paid": true,
  "customer": {
    "name": "Meera",
    "phone": null
  },
  "items": [
    { "name": "Masala dosa", "price": 90 },
    { "name": "Filter coffee", "price": 40 }
  ]
}
~~~

VS Code should show no red lines.

### Step 2: Break it on purpose

Remove the comma after the true line. Notice the red marks. Put it back.

Now add a comma after the last item in the items list. Notice the error. Remove it.

### Step 3: Read it in the Console

Open the DevTools Console and run:

~~~javascript
const order = JSON.parse('{"orderId":1001,"customer":{"name":"Meera"},"items":[{"name":"Masala dosa"}]}');
order.customer.name;
order.items[0].name;
~~~

### Step 4: Read a real response

Run:

~~~javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((r) => r.json())
  .then((d) => console.log(d.name, d.address.city));
~~~

### Step 5: Write the Python version

Create read_order.py:

~~~python
import json

with open("order.json") as f:
    order = json.load(f)

print(order["customer"]["name"])
print(order["items"][1]["price"])
print(order["customer"]["phone"])
~~~

Run it with python read_order.py. The last line prints None.

### Deliverable

You wrote valid JSON, broke it on purpose, fixed it, and read nested values in the Console and in Python.`,
  challenge: `Write a JSON file for a small train booking.

It must contain:

- A booking id (number)
- A confirmed flag (boolean)
- A passenger object with name and age
- A list of two stops, each with a station name and arrival time
- A coupon field set to null

Then do these:

1. Write the exact path to read the second station name
2. Write a Python script that loads the file and prints the passenger name
3. Add an assert that confirmed is True
4. Break the JSON in three different ways and note the error each time
5. Explain the difference between 28 and "28"

Finally, write a Playwright line that calls a fake booking API, reads the response as JSON and prints one nested value.`,
  proTips: [
    "Use double quotes for every key and string. Single quotes break JSON.",
    "Never leave a comma after the last item in an object or list.",
    "Let VS Code show the red lines. It spots most JSON mistakes instantly.",
    "Use the Preview tab in the Network panel to read nested data as a tree.",
    "Check types carefully. A number and a string that looks like a number are not equal.",
  ],
  commonMistakes: [
    {
      mistake: "Using single quotes in JSON",
      fix: "JSON allows only double quotes for keys and strings. Replace every single quote.",
    },
    {
      mistake: "Leaving a trailing comma",
      fix: "Remove the comma after the last item. JSON does not allow it.",
    },
    {
      mistake: "Adding comments inside JSON",
      fix: "JSON has no comment syntax. Remove them, or keep notes in a separate file.",
    },
    {
      mistake: "Comparing a number with a string",
      fix: "28 and '28' are different. Convert one side, or check what type the API really sends.",
    },
    {
      mistake: "Getting a KeyError when reading a nested value",
      fix: "Check the real path in the Response tab. Go step by step: object, key, list position, key.",
    },
  ],
  codeExamples: [
    {
      language: "text",
      title: "A nested JSON object",
      code: `{
  "orderId": 1001,
  "paid": true,
  "customer": {
    "name": "Meera",
    "phone": null
  },
  "items": [
    { "name": "Masala dosa", "price": 90 },
    { "name": "Filter coffee", "price": 40 }
  ]
}`,
    },
    {
      language: "python",
      title: "Read JSON from an API response",
      code: `response = page.request.get("https://api.example.com/orders/1001")
data = response.json()

print(data["customer"]["name"])
print(data["items"][0]["name"])
assert data["paid"] is True`,
    },
    {
      language: "python",
      title: "Load test data from a JSON file",
      code: `import json

with open("users.json") as f:
    users = json.load(f)

print(users[0]["name"])
print(json.dumps(users[0], indent=2))`,
    },
  ],
  furtherReading: [
    {
      title: "MDN — Working with JSON",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON",
    },
    {
      title: "Python — json module",
      url: "https://docs.python.org/3/library/json.html",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["json", "api", "data", "web-fundamentals"],
};

export default topic;