import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "enumerate-zip-range",
  title: "enumerate, zip and range",
  summary:
    "Three built-ins that make loops cleaner: get the index, walk two lists together, and count numbers.",
  whyItMatters:
    "Test data often comes in parallel lists, and failure messages need row numbers. These tools handle both without messy index code.",
  notes: `These three built-in functions solve common loop problems **in a clean, Python way**.

Think of a classroom roll call. enumerate calls out the roll number with each name. zip pairs each student with a mark. range just counts.

### range: a sequence of numbers

~~~python
print(list(range(5)))
print(list(range(2, 8)))
print(list(range(10, 0, -3)))
~~~

range(5) gives 0 to 4. A negative step counts down. range does not build the whole list. It makes numbers as needed, so it is cheap even for large ranges.

### The clumsy way to get an index

~~~python
names = ["login", "search", "cart"]
for i in range(len(names)):
    print(i, names[i])
~~~

It works but is noisy.

### enumerate: item and index together

~~~python
names = ["login", "search", "cart"]
for index, name in enumerate(names):
    print(index, name)
~~~

Each round gives a pair that you unpack into two names. Start the count at 1 when you want human numbers.

~~~python
for number, name in enumerate(names, start=1):
    print(f"{number}. {name}")
~~~

### zip: walk lists side by side

~~~python
names = ["Arjun", "Priya", "Kavya"]
marks = [80, 92, 75]

for name, mark in zip(names, marks):
    print(name, mark)
~~~

zip stops at the shortest list. If lists have different lengths, extra items are silently dropped. Python 3.10 lets you catch that.

~~~python
a = [1, 2, 3]
b = [10, 20]
print(list(zip(a, b)))
~~~

This prints only two pairs. To be strict, write zip(a, b, strict=True), which raises a ValueError if the lengths differ.

### Building a dictionary with zip

~~~python
keys = ["name", "age"]
values = ["Priya", 25]
person = dict(zip(keys, values))
print(person)
~~~

### Unzipping

~~~python
pairs = [("a", 1), ("b", 2)]
letters, numbers = zip(*pairs)
print(letters, numbers)
~~~

### Combining enumerate and zip

~~~python
names = ["Arjun", "Priya"]
marks = [80, 92]
for i, (name, mark) in enumerate(zip(names, marks), start=1):
    print(i, name, mark)
~~~

Notice the brackets around name and mark. They unpack the inner pair.

### reversed and sorted

~~~python
for n in reversed([1, 2, 3]):
    print(n)

for n in sorted([3, 1, 2]):
    print(n)
~~~

### Why this matters for testing

Compare expected and actual results row by row, and report which row failed.

~~~python
expected = ["Home", "Products", "Cart"]
actual = ["Home", "Product", "Cart"]

for row, (exp, act) in enumerate(zip(expected, actual), start=1):
    if exp != act:
        print(f"Row {row}: expected {exp}, got {act}")
~~~

### The takeaway

Use range to count, enumerate when you need the index, and zip to walk lists together. Remember that zip stops at the shortest list unless you set strict.`,
  handsOn: `Let's tidy up loops.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch loop_tools.py
code loop_tools.py
~~~

### Step 2: range

~~~python
print(list(range(1, 6)))
print(list(range(0, 20, 5)))
print(list(range(5, 0, -1)))
~~~

### Step 3: enumerate

~~~python
steps = ["open page", "type email", "click login"]
for number, step in enumerate(steps, start=1):
    print(f"Step {number}: {step}")
~~~

### Step 4: zip

~~~python
users = ["admin", "guest"]
allowed = [True, False]
for user, ok in zip(users, allowed):
    print(user, ok)
~~~

### Step 5: Different lengths

Zip a list of 3 with a list of 2. Print the result. Then add strict=True and read the error.

### Step 6: Row by row comparison

Compare two lists and print the row number of each mismatch.

### Deliverable

You used range with a step, numbered a list, paired two lists, saw zip drop items and compared rows.`,
  challenge: `Create a file called pairing_lab.py.

1. Print the even numbers from 2 to 20 using range with a step
2. Number a list of five test names starting from 1
3. Zip three lists (names, ages, cities) and print one line per person
4. Build a dictionary from two lists using zip
5. Compare two lists of 5 items and print the position of any difference

Then answer:

- Why is enumerate better than range(len(items))?
- What happens when zip gets lists of different lengths?
- What does strict=True change?

Finish with a short example of using enumerate in a test failure message.`,
  proTips: [
    "Use enumerate with start=1 for human-friendly numbering.",
    "Use zip with strict=True when lists must be the same length.",
    "Use dict(zip(keys, values)) to build a dictionary quickly.",
    "Wrap range in list only when you need to see the values.",
    "Prefer direct looping over range(len(items)).",
  ],
  commonMistakes: [
    {
      mistake: "Using range(len(items)) just to read each item",
      fix: "Loop directly, or use enumerate if you need the index.",
    },
    {
      mistake: "Forgetting that zip stops at the shortest list",
      fix: "Check the lengths, or use strict=True to raise an error.",
    },
    {
      mistake: "Forgetting brackets when combining enumerate and zip",
      fix: "Write for i, (a, b) in enumerate(zip(x, y)).",
    },
    {
      mistake: "Expecting range(1, 5) to include 5",
      fix: "The end is excluded. Use range(1, 6) to reach 5.",
    },
    {
      mistake: "Trying to index or print a zip object directly",
      fix: "Convert it with list first, or loop over it.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "enumerate with start",
      code: `steps = ["open page", "type email", "click login"]
for number, step in enumerate(steps, start=1):
    print(f"Step {number}: {step}")`,
    },
    {
      language: "python",
      title: "zip two lists",
      code: `names = ["Arjun", "Priya", "Kavya"]
marks = [80, 92, 75]
for name, mark in zip(names, marks):
    print(name, mark)`,
    },
    {
      language: "python",
      title: "Row by row comparison",
      code: `expected = ["Home", "Products", "Cart"]
actual = ["Home", "Product", "Cart"]

for row, (exp, act) in enumerate(zip(expected, actual), start=1):
    if exp != act:
        print(f"Row {row}: expected {exp}, got {act}")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — enumerate",
      url: "https://docs.python.org/3/library/functions.html#enumerate",
    },
    {
      title: "Python Docs — zip",
      url: "https://docs.python.org/3/library/functions.html#zip",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "enumerate", "zip", "range", "collections-control-flow"],
};

export default topic;