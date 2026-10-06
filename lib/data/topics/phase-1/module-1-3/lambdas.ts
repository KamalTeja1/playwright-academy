import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "lambdas",
  title: "Lambda Functions",
  summary:
    "Tiny one-line unnamed functions, mostly used as sort keys and with map and filter.",
  whyItMatters:
    "You will see lambdas in sorting, filtering and callbacks. Knowing when they help, and when a normal function is better, keeps code readable.",
  notes: `A lambda is **a small function written in one line without a name**. It can have only one expression, and that expression is returned automatically.

Think of a sticky note instruction, like sort by price. It is too small to deserve a full recipe card.

### The shape

~~~python
square = lambda n: n * n
print(square(5))
~~~

- The word lambda starts it
- Parameters come before the colon
- The expression after the colon is the result

It is the same as:

~~~python
def square(n):
    return n * n
~~~

### Several parameters

~~~python
add = lambda a, b: a + b
print(add(2, 3))
~~~

### Do not assign lambdas to names

Writing square = lambda ... is legal, but a def is clearer, gives a better error name and allows a docstring. Lambdas shine when used inline.

### Sorting with a key

~~~python
users = [("Priya", 25), ("Arjun", 22), ("Kavya", 30)]
by_age = sorted(users, key=lambda u: u[1])
print(by_age)
~~~

The key function is called for each item, and sorting uses its result.

### Sorting dictionaries

~~~python
products = [
    {"name": "Tea", "price": 49},
    {"name": "Coffee", "price": 79},
]
cheapest_first = sorted(products, key=lambda p: p["price"])
print(cheapest_first)

priciest = max(products, key=lambda p: p["price"])
print(priciest["name"])
~~~

### map

map applies a function to every item.

~~~python
nums = [1, 2, 3]
doubled = list(map(lambda n: n * 2, nums))
print(doubled)
~~~

### filter

filter keeps items where the function gives true.

~~~python
nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda n: n % 2 == 0, nums))
print(evens)
~~~

### Comprehensions are often nicer

~~~python
nums = [1, 2, 3, 4, 5, 6]
print([n * 2 for n in nums])
print([n for n in nums if n % 2 == 0])
~~~

Most Python programmers prefer comprehensions over map and filter with a lambda. Learn both so you can read either.

### Limits of a lambda

- One expression only, no statements such as if blocks or loops
- A conditional expression is allowed

~~~python
label = lambda n: "even" if n % 2 == 0 else "odd"
print(label(3))
~~~

### Common trap: late binding

~~~python
funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])
~~~

This prints 2, 2, 2, not 0, 1, 2. Every lambda looks up i when called, after the loop has finished. Fix it with a default value.

~~~python
funcs = [lambda i=i: i for i in range(3)]
print([f() for f in funcs])
~~~

### When to choose def

If it needs a name, a docstring, several lines or tests, use def.

### Why this matters for testing

Sorting results, picking the failing rows and finding an element by a property all use small keys.

~~~python
results = [{"test": "a", "ms": 300}, {"test": "b", "ms": 120}]
slowest = max(results, key=lambda r: r["ms"])
print(slowest["test"])
~~~

### The takeaway

A lambda is a one-expression throwaway function. Use it as a key for sorted, min and max, and reach for def whenever the logic needs more room.`,
  handsOn: `Let's use lambdas where they fit.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch lambdas.py
code lambdas.py
~~~

### Step 2: Basic lambda

~~~python
double = lambda n: n * 2
print(double(21))
~~~

Now rewrite it with def.

### Step 3: Sort with a key

~~~python
words = ["banana", "fig", "apple"]
print(sorted(words, key=lambda w: len(w)))
~~~

### Step 4: Sort dictionaries

~~~python
tests = [{"name": "login", "ms": 300}, {"name": "cart", "ms": 120}]
print(sorted(tests, key=lambda t: t["ms"]))
print(max(tests, key=lambda t: t["ms"])["name"])
~~~

### Step 5: map and filter

~~~python
nums = [1, 2, 3, 4, 5]
print(list(map(lambda n: n * n, nums)))
print(list(filter(lambda n: n > 2, nums)))
~~~

Write the same two lines as comprehensions.

### Step 6: The late binding trap

Run the funcs example from the notes and observe 2, 2, 2. Fix it with a default value.

### Deliverable

You wrote lambdas, used them as sort keys, replaced map and filter with comprehensions and saw late binding.`,
  challenge: `Create a file called lambda_lab.py.

1. Sort a list of names by length, then by last letter
2. Sort a list of product dictionaries by price, highest first
3. Find the shortest word with min and a key
4. Use filter and a lambda to keep numbers above 10, then write it again as a comprehension
5. Reproduce and fix the late binding trap

Then answer:

- Why can a lambda not contain a for loop?
- When should you choose def over lambda?
- What does the key argument receive?

Finish with a lambda that would help a tester pick the slowest test result.`,
  proTips: [
    "Use a lambda inline as a key, not assigned to a name.",
    "Use def when the logic needs a name or several lines.",
    "Prefer comprehensions over map and filter.",
    "Remember that a lambda holds one expression only.",
    "Use a default value to avoid late binding surprises.",
  ],
  commonMistakes: [
    {
      mistake: "Writing a long, complicated lambda",
      fix: "Switch to def with a clear name.",
    },
    {
      mistake: "Trying to put statements like if blocks or loops in a lambda",
      fix: "Use a conditional expression, or write a normal function.",
    },
    {
      mistake: "Forgetting to wrap map or filter in list",
      fix: "They return lazy objects. Use list to see the values.",
    },
    {
      mistake: "Creating lambdas in a loop and getting the same result from each",
      fix: "Bind the loop variable as a default value, like lambda i=i: i.",
    },
    {
      mistake: "Passing a lambda call instead of the lambda to key",
      fix: "Give the function itself, with no call brackets after it.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Sort with a key",
      code: `users = [("Priya", 25), ("Arjun", 22), ("Kavya", 30)]
print(sorted(users, key=lambda u: u[1]))`,
    },
    {
      language: "python",
      title: "Pick the slowest result",
      code: `results = [{"test": "a", "ms": 300}, {"test": "b", "ms": 120}]
slowest = max(results, key=lambda r: r["ms"])
print(slowest["test"])`,
    },
    {
      language: "python",
      title: "map and filter versus comprehensions",
      code: `nums = [1, 2, 3, 4, 5, 6]
print(list(filter(lambda n: n % 2 == 0, nums)))
print([n for n in nums if n % 2 == 0])`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Lambda expressions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions",
    },
    {
      title: "Python Docs — Sorting HOW TO",
      url: "https://docs.python.org/3/howto/sorting.html",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 25,
  tags: ["python", "lambda", "sorted", "functions-modules"],
};

export default topic;