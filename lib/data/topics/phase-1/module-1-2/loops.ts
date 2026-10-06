import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "loops",
  title: "Loops: for and while",
  summary:
    "Repeat code for each item in a group, or while a condition stays true. Includes break, continue and else.",
  whyItMatters:
    "Tests repeat actions: check every row, retry until ready, run for each user. Loops remove copy and paste.",
  notes: `A loop is **code that repeats**. Python has two kinds: for and while.

Think of a teacher marking papers. For each paper in the pile, mark it. That is a for loop. Keep marking while papers remain. That is a while loop.

### The for loop

~~~python
fruits = ["apple", "banana", "mango"]

for fruit in fruits:
    print(fruit)
~~~

The name fruit takes each value in turn. The indented block runs once per item.

### Looping over text and dictionaries

~~~python
for letter in "abc":
    print(letter)

scores = {"Arjun": 80, "Priya": 92}
for name, mark in scores.items():
    print(name, mark)
~~~

### range

range makes a sequence of numbers.

~~~python
for i in range(3):
    print(i)

for i in range(1, 6):
    print(i)

for i in range(0, 10, 2):
    print(i)
~~~

The first prints 0, 1, 2. The end is never included. The third number is the step.

### The while loop

~~~python
count = 0
while count < 3:
    print(count)
    count += 1
~~~

A while loop checks the condition before each round. You must change something inside, or it never stops.

### Infinite loops

~~~python
while True:
    print("forever")
~~~

This never ends until you press Ctrl+C. Use this form only with a break inside.

### break

break stops the loop right away.

~~~python
for n in [3, 8, 12, 5]:
    if n > 10:
        print("Found", n)
        break
~~~

### continue

continue skips the rest of this round and goes to the next.

~~~python
for n in range(1, 6):
    if n % 2 == 0:
        continue
    print(n)
~~~

This prints only odd numbers.

### The else on a loop

The else block runs only if the loop finished without a break.

~~~python
for n in [1, 2, 3]:
    if n == 99:
        print("Found")
        break
else:
    print("Not found")
~~~

### Nested loops

~~~python
for row in range(2):
    for col in range(3):
        print(row, col)
~~~

### Building a result

~~~python
total = 0
for price in [100, 250, 50]:
    total += price
print(total)
~~~

### Do not change a list while looping

Adding or removing items during a loop gives confusing results. Build a new list instead.

~~~python
nums = [1, 2, 3, 4]
kept = []
for n in nums:
    if n % 2 == 0:
        kept.append(n)
print(kept)
~~~

### A retry pattern

~~~python
attempts = 0
ready = False
while not ready and attempts < 3:
    attempts += 1
    ready = attempts == 3
print(attempts, ready)
~~~

This is a safe loop. It has a limit, so it cannot run forever.

### Why this matters for testing

You loop over test users, table rows and retries. Always give a while loop a clear way to stop.

### The takeaway

Use for when you have items or a count, while when you wait for a condition. Use break to stop, continue to skip, and always make sure a while loop can end.`,
  handsOn: `Let's repeat things.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch loops.py
code loops.py
~~~

### Step 2: for loops

~~~python
tests = ["login", "search", "cart"]
for test in tests:
    print("Running", test)

for i in range(1, 4):
    print("Round", i)
~~~

### Step 3: Sum with a loop

~~~python
total = 0
for price in [120, 80, 45]:
    total += price
print("Total:", total)
~~~

### Step 4: break and continue

~~~python
for n in range(1, 11):
    if n == 3:
        continue
    if n == 7:
        break
    print(n)
~~~

### Step 5: A safe while

~~~python
attempts = 0
while attempts < 3:
    attempts += 1
    print("Attempt", attempts)
~~~

### Step 6: Loop else

Search a list for a value, and use else to print Not found.

### Deliverable

You used for, range, while, break, continue and loop else, and wrote one safe while loop.`,
  challenge: `Create a file called loop_lab.py.

1. Print the multiplication table of 7, from 1 to 10
2. Sum all numbers from 1 to 100 using a loop
3. From a list of 10 numbers, build a new list with only the values above 50
4. Find the first number divisible by both 3 and 7 above 100 using while and break
5. Search a list of names for a target, and use loop else to report when it is missing

Then answer:

- When do you choose for and when while?
- What does continue do that break does not?
- Why is it risky to remove items from a list while looping over it?

Finish with a retry loop that stops after 5 attempts.`,
  proTips: [
    "Use for when you know the items or the count.",
    "Give every while loop a clear way to end, and a maximum count.",
    "Build a new list instead of changing the one you loop over.",
    "Use range with a step for every second or third value.",
    "Press Ctrl+C to stop an infinite loop in the terminal.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting to change the variable in a while loop",
      fix: "Update it inside the loop, or the loop never ends.",
    },
    {
      mistake: "Expecting range(5) to include 5",
      fix: "It gives 0 to 4. The end is not included.",
    },
    {
      mistake: "Removing items from a list while looping over it",
      fix: "Loop over a copy, or build a new list.",
    },
    {
      mistake: "Using break when you meant continue",
      fix: "break leaves the loop. continue only skips this round.",
    },
    {
      mistake: "Using range(len(items)) just to read items",
      fix: "Loop directly: for item in items. Use enumerate if you need the index.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "for loop with range",
      code: `for i in range(1, 4):
    print("Round", i)`,
    },
    {
      language: "python",
      title: "break and continue",
      code: `for n in range(1, 11):
    if n == 3:
        continue
    if n == 7:
        break
    print(n)`,
    },
    {
      language: "python",
      title: "Safe while loop",
      code: `attempts = 0
while attempts < 3:
    attempts += 1
    print("Attempt", attempts)`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — for statements",
      url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements",
    },
    {
      title: "Python Docs — break, continue and else on loops",
      url: "https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 35,
  tags: ["python", "loops", "for", "while", "collections-control-flow"],
};

export default topic;