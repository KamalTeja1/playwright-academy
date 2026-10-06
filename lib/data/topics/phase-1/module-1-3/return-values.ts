import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "return-values",
  title: "Return Values",
  summary:
    "How functions hand results back: single values, several values, None, early returns and returning functions' results safely.",
  whyItMatters:
    "A function is only useful if the caller can use its result. Clear return values make helpers easy to chain and easy to test.",
  notes: `A return value is **what a function gives back to the code that called it**.

Think of a vending machine. You press a button (call) and the machine drops a snack (return). If it drops nothing, you cannot eat it. A function that forgets to return leaves you empty-handed.

### Returning one value

~~~python
def square(n):
    return n * n

result = square(6)
print(result)
~~~

### Return ends the function

~~~python
def check(n):
    return "positive"
    print("never runs")

print(check(5))
~~~

The print after return never runs.

### Early return

Return early to handle simple cases first. It keeps code flat.

~~~python
def grade(marks):
    if marks < 0 or marks > 100:
        return "invalid"
    if marks >= 40:
        return "pass"
    return "fail"

print(grade(72))
print(grade(150))
~~~

### Returning None

A function with no return, or a bare return, gives None.

~~~python
def log(message):
    print(message)

value = log("hi")
print(value)
~~~

### Returning several values

Python packs them into a tuple. Unpack on the other side.

~~~python
def stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = stats([4, 8, 12])
print(low, high, avg)
~~~

### Returning a dictionary

When there are many values, names help.

~~~python
def make_user(name, age):
    return {"name": name, "age": age}

user = make_user("Priya", 25)
print(user["name"])
~~~

### Returning True or False

Name such functions like questions: is_valid, has_items, can_login.

~~~python
def is_valid_email(text):
    return "@" in text and "." in text

print(is_valid_email("a@b.com"))
print(is_valid_email("nope"))
~~~

Return the comparison directly. Do not write if condition: return True else: return False.

### Do not mix return types

A function that sometimes returns a number and sometimes text confuses callers.

~~~python
def find_index(items, target):
    if target in items:
        return items.index(target)
    return -1

print(find_index(["a", "b"], "b"))
print(find_index(["a", "b"], "z"))
~~~

Here the not-found result is still a number. That is consistent.

### Returning None on purpose

When there may be no result, None is a good signal. Callers check with is None.

~~~python
def find_user(users, name):
    for user in users:
        if user["name"] == name:
            return user
    return None

found = find_user([{"name": "Priya"}], "Arjun")
if found is None:
    print("No such user")
~~~

### The print versus return mistake

~~~python
def add(a, b):
    print(a + b)

total = add(2, 3) + 1
~~~

This gives a TypeError, because add returned None. Use return.

### Why this matters for testing

Helpers that return values can be asserted on. A helper that only prints cannot.

### The takeaway

Use return to hand back a result, return early for simple cases, return a tuple or dictionary for several values, and keep the return type consistent.`,
  handsOn: `Let's practise returning values.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch returns.py
code returns.py
~~~

### Step 2: Early return

~~~python
def grade(marks):
    if marks < 0 or marks > 100:
        return "invalid"
    if marks >= 40:
        return "pass"
    return "fail"

for m in [72, 30, 150]:
    print(m, grade(m))
~~~

### Step 3: Several values

~~~python
def stats(numbers):
    return min(numbers), max(numbers)

low, high = stats([5, 9, 2])
print(low, high)
~~~

### Step 4: Find or None

~~~python
def find_user(users, name):
    for user in users:
        if user["name"] == name:
            return user
    return None

print(find_user([{"name": "Priya"}], "Priya"))
print(find_user([{"name": "Priya"}], "Zed"))
~~~

### Step 5: Cause the None error

Write a function that prints instead of returns, then add 1 to its result. Read the TypeError.

### Deliverable

You used early returns, returned several values, returned None on purpose and fixed a print versus return bug.`,
  challenge: `Create a file called return_lab.py.

1. Write classify(age) that returns child, teen, adult or senior using early returns
2. Write min_max_avg(numbers) that returns three values
3. Write find_first_even(numbers) that returns the number or None
4. Write is_strong_password(text) that returns True or False directly
5. Write make_order(item, qty) that returns a dictionary

Then answer:

- What does a function return when it has no return statement?
- Why return early instead of nesting if blocks?
- Why is None a good not-found signal?

Finish with a helper from a test suite whose return value you would assert on.`,
  proTips: [
    "Return early to keep code flat and readable.",
    "Name true or false functions like questions, such as is_valid.",
    "Return the comparison directly instead of if then True else False.",
    "Return None on purpose when there may be no result.",
    "Keep the return type consistent across all paths.",
  ],
  commonMistakes: [
    {
      mistake: "Printing a value instead of returning it",
      fix: "Use return so the caller can store and reuse it.",
    },
    {
      mistake: "Writing code after return",
      fix: "It never runs. Move it above the return.",
    },
    {
      mistake: "Forgetting a return on one branch",
      fix: "Every path should return something, or None on purpose.",
    },
    {
      mistake: "Returning different types on different paths",
      fix: "Keep one type, or use None for the missing case.",
    },
    {
      mistake: "Unpacking into the wrong number of names",
      fix: "Match the count of returned values.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Early return",
      code: `def grade(marks):
    if marks < 0 or marks > 100:
        return "invalid"
    if marks >= 40:
        return "pass"
    return "fail"

print(grade(72))
print(grade(150))`,
    },
    {
      language: "python",
      title: "Return several values",
      code: `def stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = stats([4, 8, 12])
print(low, high, avg)`,
    },
    {
      language: "python",
      title: "Return None when not found",
      code: `def find_user(users, name):
    for user in users:
        if user["name"] == name:
            return user
    return None

print(find_user([{"name": "Priya"}], "Arjun"))`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — The return statement",
      url: "https://docs.python.org/3/reference/simple_stmts.html#the-return-statement",
    },
    {
      title: "Python Docs — Defining functions",
      url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "functions", "return", "functions-modules"],
};

export default topic;