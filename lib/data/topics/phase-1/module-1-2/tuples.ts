import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "tuples",
  title: "Tuples",
  summary:
    "An ordered collection that cannot be changed after it is created. Good for fixed groups of values.",
  whyItMatters:
    "Many functions return several values as a tuple, and tuples are safe for data that must not change, such as coordinates or browser sizes.",
  notes: `A tuple is **an ordered collection that cannot be changed**. It looks like a list but uses round brackets.

Think of a printed train ticket. Source, destination and date are fixed once printed. A list is like a pencil note you can rub out. A tuple is like the printed ticket.

### Creating tuples

~~~python
point = (10, 20)
browser = ("chromium", 120)
empty = ()
print(point, browser, empty)
~~~

### The one-item trap

A tuple with one item needs a trailing comma.

~~~python
single = (5,)
not_a_tuple = (5)
print(type(single))
print(type(not_a_tuple))
~~~

The first is a tuple and the second is just an int in brackets. The comma makes the tuple, not the brackets.

### Reading items

Reading works like lists.

~~~python
point = (10, 20, 30)
print(point[0])
print(point[-1])
print(point[:2])
print(len(point))
~~~

### Immutable

You cannot change, add or remove items.

~~~python
point = (10, 20)
point[0] = 99
~~~

This gives TypeError: 'tuple' object does not support item assignment. To get a changed version, build a new tuple.

~~~python
point = (10, 20)
point = (99,) + point[1:]
print(point)
~~~

### Unpacking

You can split a tuple into names in one line.

~~~python
width, height = (1280, 720)
print(width)
print(height)
~~~

The number of names must match the number of items. Use a star to collect the rest.

~~~python
first, *rest = (1, 2, 3, 4)
print(first, rest)
~~~

### Returning several values

A function can return a tuple, and you unpack it right away.

~~~python
def min_max(values):
    return min(values), max(values)

low, high = min_max([4, 9, 2])
print(low, high)
~~~

Python makes a tuple from return min(values), max(values) even without brackets.

### Methods

Tuples have only two: count and index.

~~~python
t = (1, 2, 2, 3)
print(t.count(2))
print(t.index(3))
~~~

### Looping and membership

~~~python
sizes = ((1280, 720), (1920, 1080))
for width, height in sizes:
    print(width, height)
print((1280, 720) in sizes)
~~~

### Converting

~~~python
print(tuple([1, 2, 3]))
print(list((1, 2, 3)))
~~~

### Tuples versus lists

- Use a list for a group that grows or changes
- Use a tuple for a fixed record, where each position has a meaning
- Tuples are slightly faster and can be dictionary keys, lists cannot

### A catch

A tuple is fixed, but if it contains a list, that inner list can still change.

~~~python
t = ([1, 2], 3)
t[0].append(99)
print(t)
~~~

### Why this matters for testing

Test parameters often come as tuples, such as input and expected output pairs. Pytest uses this style a lot in later phases.

~~~python
cases = [("admin", True), ("guest", False)]
for role, allowed in cases:
    print(role, allowed)
~~~

### The takeaway

A tuple is a fixed list. Use round brackets, a trailing comma for one item, and unpacking to take values apart.`,
  handsOn: `Let's work with fixed groups of values.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch tuples.py
code tuples.py
~~~

### Step 2: Create and read

~~~python
viewport = (1280, 720)
print(viewport[0], viewport[1])
~~~

### Step 3: Unpack

~~~python
width, height = viewport
print(f"Width {width}, height {height}")
~~~

### Step 4: Prove it is immutable

Try viewport[0] = 1. Read the TypeError.

### Step 5: Return two values

~~~python
def total_and_count(prices):
    return sum(prices), len(prices)

total, count = total_and_count([100, 250, 50])
print(total, count)
~~~

### Step 6: Loop over pairs

Make a list of three (username, password) tuples and print each one with unpacking.

### Deliverable

You made tuples, unpacked them, saw the immutability error and returned two values from a function.`,
  challenge: `Create a file called tuple_lab.py.

1. Create a tuple of three screen sizes, each itself a (width, height) tuple
2. Loop over it and print each size using unpacking
3. Create a one-item tuple and print its type
4. Write a function that returns the minimum, maximum and average of a list as a tuple, and unpack the result
5. Use star unpacking to split (1, 2, 3, 4, 5) into first, middle and last

Then:

- Explain when you would choose a tuple over a list
- Show that you cannot change a tuple, and the way to get a changed version
- Explain the catch about a list inside a tuple

Finish with one example of test data that suits tuples.`,
  proTips: [
    "Remember the trailing comma for a one-item tuple.",
    "Use unpacking to give names to values and make code readable.",
    "Use tuples for fixed records and lists for growing groups.",
    "Return several values from a function as a tuple.",
    "Do not rely on a tuple being fully frozen if it holds lists.",
  ],
  commonMistakes: [
    {
      mistake: "Writing (5) and expecting a tuple",
      fix: "Add a trailing comma: (5,).",
    },
    {
      mistake: "Trying to change an item in a tuple",
      fix: "Build a new tuple, or use a list if you need changes.",
    },
    {
      mistake: "Unpacking into the wrong number of names",
      fix: "Match the count, or use a star name to collect the rest.",
    },
    {
      mistake: "Calling append on a tuple",
      fix: "Tuples have no append. Convert to a list, change it, and convert back if needed.",
    },
    {
      mistake: "Assuming a tuple holding a list is fully frozen",
      fix: "The tuple itself is fixed, but the inner list can still change.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Unpacking a tuple",
      code: `width, height = (1280, 720)
print(width)
print(height)`,
    },
    {
      language: "python",
      title: "Return two values",
      code: `def min_max(values):
    return min(values), max(values)

low, high = min_max([4, 9, 2])
print(low, high)`,
    },
    {
      language: "python",
      title: "Pairs of test data",
      code: `cases = [("admin", True), ("guest", False)]
for role, allowed in cases:
    print(role, allowed)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Tuples and sequences",
      url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences",
    },
    {
      title: "Python Docs — Tuple type",
      url: "https://docs.python.org/3/library/stdtypes.html#tuples",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "tuples", "unpacking", "collections-control-flow"],
};

export default topic;