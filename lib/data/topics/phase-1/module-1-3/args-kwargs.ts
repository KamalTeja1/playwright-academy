import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "args-kwargs",
  title: "*args and **kwargs",
  summary:
    "Accept any number of positional or keyword arguments, and unpack lists and dictionaries into calls.",
  whyItMatters:
    "Frameworks, decorators and test helpers use these everywhere to pass options along. You must be able to read them.",
  notes: `Sometimes you do not know in advance how many arguments a caller will send. Python has two special forms for this: a single star and a double star.

Think of a party invite where guests can bring any number of friends, and also tell you special notes such as vegetarian or no spice. The friends are *args. The notes are **kwargs.

### *args: any number of positional values

~~~python
def total(*numbers):
    print(numbers)
    return sum(numbers)

print(total(1, 2, 3))
print(total(10))
print(total())
~~~

Inside the function, numbers is a **tuple** of everything passed. The name args is a habit, not a rule. Use a meaningful name such as numbers when you can.

### **kwargs: any number of named values

~~~python
def show(**details):
    print(details)
    for key, value in details.items():
        print(key, "=", value)

show(name="Priya", age=25, city="Pune")
~~~

Inside, details is a **dictionary** of the named arguments.

### Using both together

~~~python
def log(message, *args, **kwargs):
    print(message)
    print("args:", args)
    print("kwargs:", kwargs)

log("Starting", 1, 2, mode="fast", retries=3)
~~~

The order in the definition is fixed: normal parameters, then *args, then keyword-only ones, then **kwargs.

### Unpacking when calling

The same stars work in a call, to spread a list or dictionary into arguments.

~~~python
def add(a, b, c):
    return a + b + c

values = [1, 2, 3]
print(add(*values))

params = {"a": 1, "b": 2, "c": 3}
print(add(**params))
~~~

### Merging with stars

~~~python
first = [1, 2]
second = [3, 4]
print([*first, *second])

defaults = {"timeout": 30}
extra = {"retries": 3}
print({**defaults, **extra})
~~~

### Passing options along

A very common use is a wrapper that forwards everything.

~~~python
def open_page(url, timeout=30, retries=3):
    return f"{url} {timeout} {retries}"

def open_with_log(url, **options):
    print("Opening", url)
    return open_page(url, **options)

print(open_with_log("https://example.com", timeout=60))
~~~

### Checking what came in

~~~python
def build_request(url, **headers):
    if "token" in headers:
        print("Token supplied")
    return {"url": url, "headers": headers}

print(build_request("https://api.example.com", token="abc", accept="json"))
~~~

### Pitfalls

- A function with only *args cannot take named values
- Keyword names in **kwargs must be text
- Mistakes in names are not caught. A typo like timeuot=5 quietly goes into kwargs

Because of that last point, use plain named parameters when you know the inputs, and save kwargs for passing things through.

### Why this matters for testing

Pytest, Playwright and many helper libraries accept **kwargs to pass options along. You will write wrappers that forward settings, so this pattern will feel familiar.

### The takeaway

A single star collects extra positional values into a tuple. A double star collects named values into a dictionary. Use the same stars in a call to spread a list or dictionary out.`,
  handsOn: `Let's collect and spread arguments.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch args_kwargs.py
code args_kwargs.py
~~~

### Step 2: *args

~~~python
def average(*scores):
    if not scores:
        return 0
    return sum(scores) / len(scores)

print(average(80, 90, 100))
print(average())
~~~

### Step 3: **kwargs

~~~python
def build_profile(name, **extras):
    profile = {"name": name}
    profile.update(extras)
    return profile

print(build_profile("Priya", city="Pune", role="tester"))
~~~

### Step 4: Spread into a call

~~~python
def book(name, seats, city):
    return f"{name} {seats} {city}"

data = {"name": "Arjun", "seats": 2, "city": "Delhi"}
print(book(**data))
~~~

### Step 5: Merge with stars

Merge two lists and two dictionaries using stars.

### Step 6: Forward options

Write a wrapper that accepts **options and passes them to another function.

### Deliverable

You collected positional and named values, spread a list and a dictionary into a call and wrote a forwarding wrapper.`,
  challenge: `Create a file called star_lab.py.

1. Write maximum(*numbers) that returns the largest, or None when empty
2. Write describe(**info) that prints each key and value on its own line
3. Write a function that takes a normal parameter, *args and **kwargs, and prints all three
4. Call a three-parameter function by unpacking a list, then a dictionary
5. Write a wrapper function that forwards all options to another function

Then answer:

- What type is args inside the function, and what type is kwargs?
- What is the difference between a star in a definition and a star in a call?
- Why can **kwargs hide typos in names?

Finish with a short example of settings merged from defaults and overrides.`,
  proTips: [
    "Inside the function, args is a tuple and kwargs is a dictionary.",
    "Use a star in a call to spread a list, and a double star for a dictionary.",
    "Prefer named parameters when you know the inputs.",
    "Use **options to forward settings to another function.",
    "Keep the order: normal, *args, keyword-only, **kwargs.",
  ],
  commonMistakes: [
    {
      mistake: "Expecting *args to be a list",
      fix: "It is a tuple. Convert with list if you need to change it.",
    },
    {
      mistake: "Putting **kwargs before other parameters",
      fix: "**kwargs must be the last parameter in the definition.",
    },
    {
      mistake: "Forgetting the star when calling with a list",
      fix: "Write func(*values). Without it, the list is passed as one argument.",
    },
    {
      mistake: "Using kwargs for everything",
      fix: "Use plain named parameters when you know them. They catch typos.",
    },
    {
      mistake: "Passing a dictionary with non-text keys using a double star",
      fix: "Keys must be text strings that match parameter names.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Collect with *args",
      code: `def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3))
print(total(10))`,
    },
    {
      language: "python",
      title: "Collect with **kwargs",
      code: `def show(**details):
    for key, value in details.items():
        print(key, "=", value)

show(name="Priya", age=25, city="Pune")`,
    },
    {
      language: "python",
      title: "Spread into a call",
      code: `def add(a, b, c):
    return a + b + c

values = [1, 2, 3]
params = {"a": 1, "b": 2, "c": 3}
print(add(*values))
print(add(**params))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Arbitrary argument lists",
      url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists",
    },
    {
      title: "Python Docs — Unpacking argument lists",
      url: "https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  tags: ["python", "args", "kwargs", "functions", "functions-modules"],
};

export default topic;