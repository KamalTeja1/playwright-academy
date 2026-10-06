import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "sets",
  title: "Sets",
  summary:
    "A collection of unique values with no order. Great for removing duplicates and comparing groups.",
  whyItMatters:
    "Testers constantly ask: which items are missing, which are extra, which are repeated? Sets answer these in one line.",
  notes: `A set is **a collection of unique items with no fixed order**. It is written with curly brackets.

Think of a bag of distinct stamps. Putting the same stamp in twice changes nothing, and the stamps have no position. That is a set.

### Creating sets

~~~python
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 2, 1}
print(colors)
print(numbers)
~~~

The duplicates vanish, so numbers holds 1, 2 and 3. The printed order may differ each time.

### The empty set trap

Empty curly brackets make a dictionary, not a set.

~~~python
empty_dict = {}
empty_set = set()
print(type(empty_dict))
print(type(empty_set))
~~~

### Removing duplicates from a list

~~~python
ids = [1, 2, 2, 3, 3, 3]
unique = list(set(ids))
print(unique)
~~~

Order is not kept. If order matters, use the dictionary trick shown below.

~~~python
ordered = list(dict.fromkeys(ids))
print(ordered)
~~~

### Adding and removing

~~~python
tags = {"smoke"}
tags.add("login")
tags.add("smoke")
tags.discard("missing")
tags.remove("login")
print(tags)
~~~

- add puts an item in, and does nothing if it is already there
- remove gives a KeyError if the item is missing
- discard does nothing if the item is missing

### Membership is fast

~~~python
allowed = {"admin", "editor"}
print("admin" in allowed)
print("guest" in allowed)
~~~

Checking a set is much faster than a long list, which matters for big data.

### Set maths

~~~python
a = {1, 2, 3, 4}
b = {3, 4, 5}

print(a | b)
print(a & b)
print(a - b)
print(a ^ b)
~~~

- a | b is the union, everything in either
- a & b is the intersection, only what is in both
- a - b is the difference, in a but not in b
- a ^ b is the items in one but not both

### Subset checks

~~~python
print({1, 2} <= {1, 2, 3})
print({1, 2, 3}.isdisjoint({7, 8}))
~~~

### No indexing

Sets have no order, so set[0] gives a TypeError. Loop over a set or convert to a sorted list.

~~~python
items = {3, 1, 2}
print(sorted(items))
~~~

### What a set can hold

Items must be hashable, meaning fixed. Numbers, text and tuples are fine. Lists and other sets are not.

### Set comprehension

~~~python
words = ["apple", "avocado", "banana"]
first_letters = {w[0] for w in words}
print(first_letters)
~~~

### frozenset

An unchangeable set is called a frozenset. It is rarely needed at this stage.

### Why this matters for testing

You can compare what a page shows against what you expect, ignoring order.

~~~python
expected = {"Home", "Products", "Cart"}
actual = {"Cart", "Home", "Products", "Offers"}
print("Missing:", expected - actual)
print("Extra:", actual - expected)
~~~

This prints Missing as an empty set and Extra with Offers.

### The takeaway

A set keeps only unique items and ignores order. Use it to remove duplicates, to check membership quickly and to find what is missing or extra between two groups.`,
  handsOn: `Let's use sets to compare groups.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch sets.py
code sets.py
~~~

### Step 2: Remove duplicates

~~~python
emails = ["a@x.com", "b@x.com", "a@x.com", "c@x.com", "b@x.com"]
unique = set(emails)
print(len(emails), len(unique))
~~~

### Step 3: Set maths

~~~python
smoke = {"login", "search", "cart"}
regression = {"login", "cart", "payment", "profile"}

print("Both:", smoke & regression)
print("Only smoke:", smoke - regression)
print("All:", smoke | regression)
~~~

### Step 4: Find missing and extra

~~~python
expected = {"Home", "Products", "Cart"}
actual = {"Home", "Cart", "Offers"}
print("Missing:", expected - actual)
print("Extra:", actual - expected)
~~~

### Step 5: Trigger the traps

Check the type of {}. Then try indexing a set with [0] and read the error.

### Step 6: Keep the order

Remove duplicates from [3, 1, 3, 2, 1] while keeping order, using dict.fromkeys.

### Deliverable

You removed duplicates, used all four set operations, found missing and extra items and kept order with the dictionary trick.`,
  challenge: `Create a file called set_lab.py.

1. Make a list of 10 user IDs with at least 4 repeats and count the unique ones
2. Create two sets of test names, one for smoke and one for regression
3. Print which tests are in both, only in smoke, and in either
4. Use a set to check that a menu on a page has no missing and no extra entries compared to the expected one
5. Remove duplicates from a list while keeping the original order

Then answer:

- Why does {} not make an empty set?
- What is the difference between remove and discard?
- Why can a set not hold a list?

Finish with one real testing situation where sets are better than lists.`,
  proTips: [
    "Use set() for an empty set, never empty curly brackets.",
    "Use difference to find missing and extra items between two groups.",
    "Use a set when you only care about presence, not position.",
    "Use discard when you are not sure the item exists.",
    "Use dict.fromkeys to remove duplicates but keep order.",
  ],
  commonMistakes: [
    {
      mistake: "Writing {} and expecting an empty set",
      fix: "That is an empty dictionary. Use set().",
    },
    {
      mistake: "Trying to read a set by index like items[0]",
      fix: "Sets have no order. Loop over the set, or sort it into a list first.",
    },
    {
      mistake: "Relying on the printed order of a set",
      fix: "The order is not guaranteed. Use sorted when you need a stable order.",
    },
    {
      mistake: "Putting a list inside a set",
      fix: "Items must be hashable. Use a tuple instead of a list.",
    },
    {
      mistake: "Using remove for an item that may be missing",
      fix: "Use discard, or check with in first.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Remove duplicates",
      code: `ids = [1, 2, 2, 3, 3, 3]
print(set(ids))
print(list(dict.fromkeys(ids)))`,
    },
    {
      language: "python",
      title: "Set operations",
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(a | b)
print(a & b)
print(a - b)
print(a ^ b)`,
    },
    {
      language: "python",
      title: "Missing and extra items",
      code: `expected = {"Home", "Products", "Cart"}
actual = {"Cart", "Home", "Products", "Offers"}
print("Missing:", expected - actual)
print("Extra:", actual - expected)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Sets",
      url: "https://docs.python.org/3/tutorial/datastructures.html#sets",
    },
    {
      title: "Python Docs — Set types",
      url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "sets", "unique", "collections-control-flow"],
};

export default topic;