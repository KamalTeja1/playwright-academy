import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "lists",
  title: "Lists",
  summary:
    "An ordered, changeable collection of values. Learn to create, read, change, slice and loop over lists.",
  whyItMatters:
    "Test data, page elements and API results all come as groups of items. Lists are how you hold and work on a group.",
  notes: `A list is **an ordered collection of values that you can change**. It is written with square brackets, with items separated by commas.

Think of a shopping list on paper. Items are in order, you can add one, cross one out or swap one. A Python list works the same way.

### Creating lists

~~~python
fruits = ["apple", "banana", "mango"]
numbers = [10, 20, 30]
mixed = ["Priya", 25, True]
empty = []
print(fruits, numbers, mixed, empty)
~~~

A list can hold any types, even mixed, but in practice keep one kind of item in a list.

### Reading items

Each item has a position called an index. The first is 0.

~~~python
fruits = ["apple", "banana", "mango"]
print(fruits[0])
print(fruits[2])
print(fruits[-1])
print(len(fruits))
~~~

A negative index counts from the end. Using an index that does not exist gives an IndexError.

### Slicing

~~~python
nums = [10, 20, 30, 40, 50]
print(nums[1:3])
print(nums[:2])
print(nums[2:])
print(nums[::-1])
~~~

The end position is not included. Slicing never raises an error, even past the end.

### Changing items

Lists are **mutable**, so you can change them in place.

~~~python
fruits = ["apple", "banana", "mango"]
fruits[1] = "grape"
print(fruits)
~~~

### Adding items

~~~python
tasks = ["login"]
tasks.append("search")
tasks.insert(0, "setup")
tasks.extend(["cart", "pay"])
print(tasks)
~~~

- append adds one item at the end
- insert adds at a position
- extend adds many items

### Removing items

~~~python
tasks = ["setup", "login", "search", "cart"]
tasks.remove("login")
last = tasks.pop()
first = tasks.pop(0)
print(tasks, last, first)
~~~

- remove deletes the first matching value
- pop removes by position and gives the item back, and the last item if no position is given
- del tasks[0] also removes by position

### Searching

~~~python
tasks = ["login", "search", "cart"]
print("cart" in tasks)
print(tasks.index("search"))
print(tasks.count("login"))
~~~

index gives a ValueError if the item is missing, so check with in first.

### Sorting

~~~python
scores = [40, 10, 30]
scores.sort()
print(scores)
scores.sort(reverse=True)
print(scores)
print(sorted(scores))
~~~

sort changes the list itself and returns None. sorted gives a new list and leaves the original alone. A common mistake is writing scores = scores.sort(), which makes scores None.

### Useful functions

~~~python
nums = [4, 8, 15]
print(len(nums), sum(nums), min(nums), max(nums))
~~~

### Joining and repeating

~~~python
print([1, 2] + [3])
print([0] * 3)
~~~

### Looping over a list

~~~python
for fruit in ["apple", "banana"]:
    print(fruit)
~~~

Loops are covered fully in the loops topic.

### List comprehensions

A short way to build a new list from another.

~~~python
nums = [1, 2, 3, 4]
squares = [n * n for n in nums]
evens = [n for n in nums if n % 2 == 0]
print(squares, evens)
~~~

Read it as: give me n times n, for each n in nums.

### The copy trap

Because lists can change, two names can point to the same list.

~~~python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
~~~

This prints [1, 2, 3, 4]. The list a changed too. To make a real copy:

~~~python
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a, b)
~~~

### Nested lists

~~~python
grid = [[1, 2], [3, 4]]
print(grid[1][0])
~~~

### Why this matters for testing

You will keep lists of test users, expected menu names and results from a page. Comparing two lists is a common assertion.

~~~python
expected = ["Home", "Products", "Cart"]
actual = ["Home", "Products", "Cart"]
print(actual == expected)
~~~

### The takeaway

A list is an ordered, changeable group. Use append, remove, sort and slicing, remember that index starts at 0, and use copy when you need an independent list.`,
  handsOn: `Let's build and change a list.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch lists.py
code lists.py
~~~

### Step 2: Create and read

~~~python
browsers = ["chromium", "firefox", "webkit"]
print(browsers[0])
print(browsers[-1])
print(len(browsers))
~~~

### Step 3: Change it

~~~python
browsers.append("edge")
browsers.remove("firefox")
browsers[0] = "chrome"
print(browsers)
~~~

### Step 4: Sort and slice

~~~python
scores = [72, 45, 90, 66]
print(sorted(scores))
print(scores[:2])
print(max(scores), min(scores))
~~~

### Step 5: Comprehension

Build a list of the squares of 1 to 5.

### Step 6: Cause the copy trap

Create b = a, append to b, and print a. Then fix it with copy.

### Deliverable

You created, read, changed, sorted and sliced a list, and showed the copy trap with its fix.`,
  challenge: `Create a file called list_lab.py.

1. Make a list of five test case names
2. Add one at the end, insert one at the start and remove one
3. Print the first, last and middle items
4. Sort the list and print the result without changing the original, using sorted
5. Build a list of only the names that are longer than 8 characters, using a comprehension

Then:

- Show the copy trap and fix it
- Explain the difference between sort and sorted
- Write a check that compares two lists and prints the result

Finish with a note on why a negative index is useful.`,
  proTips: [
    "Remember that the first index is 0 and the last is -1.",
    "Use sorted when you want to keep the original list.",
    "Use in to check membership before calling index or remove.",
    "Use copy when you need a separate list.",
    "Keep one kind of item in each list.",
  ],
  commonMistakes: [
    {
      mistake: "Writing items = items.sort() and getting None",
      fix: "sort changes the list in place and returns None. Call items.sort() alone, or use sorted.",
    },
    {
      mistake: "Using an index equal to the length",
      fix: "The last valid index is len minus 1. Use -1 for the last item.",
    },
    {
      mistake: "Thinking b = a makes a copy",
      fix: "Both names point to the same list. Use a.copy() for a separate one.",
    },
    {
      mistake: "Removing items from a list while looping over it",
      fix: "Loop over a copy or build a new list with a comprehension.",
    },
    {
      mistake: "Calling remove for a value that is not there",
      fix: "Check with in first, or you get a ValueError.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Add and remove items",
      code: `tasks = ["login"]
tasks.append("search")
tasks.insert(0, "setup")
tasks.remove("login")
print(tasks)`,
    },
    {
      language: "python",
      title: "Sort without changing the original",
      code: `scores = [40, 10, 30]
print(sorted(scores))
print(scores)`,
    },
    {
      language: "python",
      title: "List comprehension",
      code: `nums = [1, 2, 3, 4]
squares = [n * n for n in nums]
evens = [n for n in nums if n % 2 == 0]
print(squares, evens)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — More on lists",
      url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
    },
    {
      title: "Python Docs — List comprehensions",
      url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "lists", "collections", "collections-control-flow"],
};

export default topic;