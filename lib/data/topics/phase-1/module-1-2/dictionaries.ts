import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "dictionaries",
  title: "Dictionaries",
  summary:
    "Store data as key and value pairs and look things up by name. The shape of almost all JSON and API data.",
  whyItMatters:
    "API responses, test configs and user records are all dictionaries. You will use them every single day.",
  notes: `A dictionary is **a collection of key and value pairs**. You look up a value by its key, like looking up a word in a real dictionary.

Think of a phone contact list. You search by name, the key, and get the number, the value. You do not care about the position.

### Creating dictionaries

~~~python
user = {
    "name": "Priya",
    "age": 25,
    "is_admin": False,
}
print(user)
~~~

Keys are usually text. Each key must be unique and fixed, such as text, numbers or tuples.

### Reading values

~~~python
print(user["name"])
print(user.get("age"))
print(user.get("city"))
print(user.get("city", "unknown"))
~~~

Square brackets give a KeyError if the key is missing. get gives None instead, or a default you choose. Use get when the key may be absent.

### Adding and changing

~~~python
user["city"] = "Pune"
user["age"] = 26
print(user)
~~~

Assigning to an existing key changes it. Assigning to a new key adds it.

### Removing

~~~python
user.pop("city")
del user["is_admin"]
print(user)
~~~

### Checking for a key

~~~python
print("name" in user)
print("phone" in user)
~~~

The in operator checks keys, not values.

### Looping

~~~python
scores = {"Arjun": 80, "Priya": 92}

for name in scores:
    print(name)

for name, mark in scores.items():
    print(name, mark)

print(list(scores.keys()))
print(list(scores.values()))
~~~

- By default, a loop gives the keys
- items gives key and value together
- keys and values give just those parts

Since Python 3.7, dictionaries remember the order in which you added items.

### Updating from another dictionary

~~~python
defaults = {"timeout": 30, "retries": 3}
overrides = {"timeout": 60}
settings = {**defaults, **overrides}
print(settings)
~~~

Later values win, so timeout becomes 60. The update method does a similar job in place.

### Nested dictionaries

Values can be dictionaries or lists. This is exactly how JSON looks.

~~~python
order = {
    "id": 1001,
    "customer": {"name": "Priya", "city": "Pune"},
    "items": ["tea", "coffee"],
}
print(order["customer"]["name"])
print(order["items"][0])
~~~

To read safely through several levels, use get step by step.

~~~python
city = order.get("customer", {}).get("city")
print(city)
~~~

### Dictionary comprehension

~~~python
names = ["tea", "coffee"]
lengths = {n: len(n) for n in names}
print(lengths)
~~~

### Counting with a dictionary

~~~python
results = ["pass", "fail", "pass", "pass"]
counts = {}
for r in results:
    counts[r] = counts.get(r, 0) + 1
print(counts)
~~~

This prints pass 3 and fail 1.

### Useful facts

- len gives the number of pairs
- A dictionary is mutable, so copy it when you need a separate one
- Keys must be hashable, so a list cannot be a key

### Why this matters for testing

You will build request bodies, read response data and keep test settings in dictionaries.

~~~python
payload = {"username": "tester", "password": "secret"}
response = {"status": "ok", "data": {"id": 7}}
print(response["data"]["id"])
~~~

### The takeaway

A dictionary maps keys to values. Use square brackets when the key must exist, get when it may not, items to loop, and nesting to match JSON.`,
  handsOn: `Let's build and read dictionaries.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch dicts.py
code dicts.py
~~~

### Step 2: Create and read

~~~python
product = {"name": "Masala tea", "price": 49.5, "in_stock": True}
print(product["name"])
print(product.get("discount", 0))
~~~

### Step 3: Change it

~~~python
product["price"] = 55
product["category"] = "drinks"
del product["in_stock"]
print(product)
~~~

### Step 4: Loop

~~~python
for key, value in product.items():
    print(f"{key} -> {value}")
~~~

### Step 5: Nested data

~~~python
response = {"status": 200, "data": {"user": {"id": 7, "name": "Priya"}}}
print(response["data"]["user"]["name"])
~~~

### Step 6: Trigger a KeyError

Read product["colour"] and see the error. Fix it with get.

### Deliverable

You created, read, changed and looped a dictionary, read nested data and fixed a KeyError.`,
  challenge: `Create a file called dict_lab.py.

1. Make a dictionary for a user with name, email, age and a nested address
2. Read each value, including a city inside the address
3. Add a phone number, change the age and remove one key
4. Loop with items and print each pair
5. Count how many times each word appears in a list of at least 8 words

Then:

- Merge a defaults dictionary with an overrides dictionary
- Read a missing key in two ways: one that errors and one that does not
- Build a dictionary of word lengths using a comprehension

Finish with a short sample of an API response as a nested dictionary and read one value from it.`,
  proTips: [
    "Use get when a key might be missing.",
    "Use items to loop over keys and values together.",
    "Use the double star merge to combine settings, with later ones winning.",
    "Read nested data one level at a time when it may be incomplete.",
    "Keep keys as simple, consistent text.",
  ],
  commonMistakes: [
    {
      mistake: "Reading a missing key with square brackets",
      fix: "That gives a KeyError. Use get, or check with in first.",
    },
    {
      mistake: "Thinking in checks values",
      fix: "It checks keys. Use value in d.values() to check values.",
    },
    {
      mistake: "Changing a dictionary while looping over it",
      fix: "Loop over a copy of the keys, or build a new dictionary.",
    },
    {
      mistake: "Using a list as a key",
      fix: "Keys must be fixed. Use a tuple instead.",
    },
    {
      mistake: "Repeating a key and expecting both values",
      fix: "Keys are unique, so the later value replaces the earlier one.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Create, read and change",
      code: `user = {"name": "Priya", "age": 25}
print(user["name"])
print(user.get("city", "unknown"))
user["age"] = 26
user["city"] = "Pune"
print(user)`,
    },
    {
      language: "python",
      title: "Loop with items",
      code: `scores = {"Arjun": 80, "Priya": 92}
for name, mark in scores.items():
    print(name, mark)`,
    },
    {
      language: "python",
      title: "Nested data like JSON",
      code: `response = {"status": "ok", "data": {"id": 7, "tags": ["a", "b"]}}
print(response["data"]["id"])
print(response["data"]["tags"][0])`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Dictionaries",
      url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
    },
    {
      title: "Python Docs — Mapping types",
      url: "https://docs.python.org/3/library/stdtypes.html#mapping-types-dict",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "dictionaries", "key-value", "collections-control-flow"],
};

export default topic;