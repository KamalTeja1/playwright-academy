import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "function-arguments",
  title: "Function Arguments",
  summary:
    "Positional, keyword and default arguments, and the trap of using a list as a default value.",
  whyItMatters:
    "Helpers need flexible inputs. Defaults and keywords make a function easy to call and hard to misuse.",
  notes: `Arguments are **the values you pass into a function when you call it**. Python gives you several ways to pass them.

Think of ordering at a tea stall. You can say it in order, tea, sugar, hot. Or you can say it by name, sugar none, size large. Or you can say just tea and accept the usual defaults.

### Positional arguments

They match parameters by position.

~~~python
def describe(name, age):
    print(f"{name} is {age}")

describe("Priya", 25)
describe(25, "Priya")
~~~

The second call mixes the order, and the output makes no sense. Position matters.

### Keyword arguments

You name each value, so order no longer matters.

~~~python
describe(age=25, name="Priya")
~~~

This is clearer, and safer when a function has many parameters.

### Default values

A parameter can have a default, used when the caller gives nothing.

~~~python
def connect(host, port=8080, secure=False):
    print(host, port, secure)

connect("example.com")
connect("example.com", 443)
connect("example.com", secure=True)
~~~

Parameters with defaults must come after those without.

~~~python
def wrong(a=1, b):
    pass
~~~

This is a SyntaxError.

### Mixing positional and keyword

Positional first, then keyword.

~~~python
connect("example.com", secure=True)
~~~

Writing connect(host="example.com", 443) is a SyntaxError, because a positional argument cannot follow a keyword one.

### Forcing keywords

A star in the parameters means everything after it must be named.

~~~python
def create_user(name, *, role="guest", active=True):
    return {"name": name, "role": role, "active": active}

print(create_user("Priya", role="admin"))
~~~

Calling create_user("Priya", "admin") gives a TypeError. This makes calls readable.

### Positional-only parameters

A slash means everything before it must be passed by position.

~~~python
def power(base, exponent, /):
    return base ** exponent

print(power(2, 5))
~~~

You will meet this rarely. It is good to recognise.

### The mutable default trap

This is a famous bug. Never use a list or dictionary as a default.

~~~python
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))
~~~

The second call prints a and b together. The default list is created once and shared by every call.

The fix is to use None and build the list inside.

~~~python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))
~~~

### Do functions change what you pass?

For lists and dictionaries, yes. The function receives the same object.

~~~python
def add_tag(tags):
    tags.append("new")

my_tags = ["a"]
add_tag(my_tags)
print(my_tags)
~~~

For numbers and text, which cannot change in place, the original is safe.

### Too many parameters

If a function needs more than four or five, group related ones in a dictionary or a class, which we meet later.

### Why this matters for testing

A helper such as open_page(url, timeout=30, retries=3) works with just the url, and you can tune it by name when needed.

### The takeaway

Use keyword arguments for clarity, defaults for the usual case, and never a list or dictionary as a default value.`,
  handsOn: `Let's call functions in different ways.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch arguments.py
code arguments.py
~~~

### Step 2: Positional and keyword

~~~python
def book(name, seats, city):
    return f"{name} booked {seats} seats in {city}"

print(book("Priya", 2, "Pune"))
print(book(city="Pune", name="Priya", seats=2))
~~~

### Step 3: Defaults

~~~python
def open_page(url, timeout=30, retries=3):
    return f"{url} timeout={timeout} retries={retries}"

print(open_page("https://example.com"))
print(open_page("https://example.com", retries=5))
~~~

### Step 4: Force keywords

~~~python
def make_user(name, *, role="guest"):
    return {"name": name, "role": role}

print(make_user("Arjun", role="admin"))
~~~

Try make_user("Arjun", "admin") and read the error.

### Step 5: Trigger the mutable default bug

Write add_item with items=[] and call it twice. Then fix it with None.

### Step 6: Order error

Write a definition with a default before a non-default parameter and read the SyntaxError.

### Deliverable

You used positional, keyword and default arguments, forced keywords and reproduced and fixed the mutable default bug.`,
  challenge: `Create a file called argument_lab.py.

1. Write send_email(to, subject, body="", urgent=False) and call it four different ways
2. Write a function with a star so that role must be a keyword
3. Reproduce the mutable default bug with a list, then fix it
4. Show that a function can change a list passed to it, and that it cannot change a number
5. Write a function with five parameters and call it using only keywords

Then answer:

- Why must defaults come after non-defaults?
- Why is a list a dangerous default?
- When are keyword arguments better than positional ones?

Finish with a signature for a helper that opens a page, with sensible defaults.`,
  proTips: [
    "Use keyword arguments when a call has more than two values.",
    "Use None as the default, then build lists and dictionaries inside.",
    "Put parameters with defaults after those without.",
    "Use a bare star to force readable keyword calls.",
    "Be careful: functions can change lists and dictionaries you pass in.",
  ],
  commonMistakes: [
    {
      mistake: "Using a list or dictionary as a default value",
      fix: "Use None, and create a fresh one inside the function.",
    },
    {
      mistake: "Putting a default parameter before a normal one",
      fix: "Move parameters with defaults to the end.",
    },
    {
      mistake: "Passing a positional argument after a keyword one",
      fix: "Positional first, keyword last.",
    },
    {
      mistake: "Passing arguments in the wrong order",
      fix: "Use keyword arguments so the names make the meaning clear.",
    },
    {
      mistake: "Being surprised that a function changed the caller's list",
      fix: "Pass a copy, or make a copy inside the function.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Default and keyword arguments",
      code: `def connect(host, port=8080, secure=False):
    print(host, port, secure)

connect("example.com")
connect("example.com", 443)
connect("example.com", secure=True)`,
    },
    {
      language: "python",
      title: "Force keyword arguments",
      code: `def create_user(name, *, role="guest", active=True):
    return {"name": name, "role": role, "active": active}

print(create_user("Priya", role="admin"))`,
    },
    {
      language: "python",
      title: "The safe default pattern",
      code: `def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — More on defining functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions",
    },
    {
      title: "Python Docs — Default argument values",
      url: "https://docs.python.org/3/tutorial/controlflow.html#default-argument-values",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "functions", "arguments", "defaults", "functions-modules"],
};

export default topic;