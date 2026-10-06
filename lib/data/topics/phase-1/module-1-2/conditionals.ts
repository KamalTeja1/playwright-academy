import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "conditionals",
  title: "Conditionals: if, elif, else",
  summary:
    "Make your code choose between paths. Run some lines only when a condition is true.",
  whyItMatters:
    "Every test decides something: is the user logged in, did the page load, is the price correct? Conditionals are how code decides.",
  notes: `A conditional is **code that runs only when a condition is true**. It lets a program take different paths.

Think of a traffic signal. If the light is green, go. Otherwise if it is yellow, slow down. Otherwise, stop. Python reads this the same way.

### The if statement

~~~python
age = 20

if age >= 18:
    print("Adult")
~~~

The condition is followed by a colon, and the block below is indented 4 spaces.

### if and else

~~~python
age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")
~~~

Exactly one of the two blocks runs.

### elif for many choices

~~~python
marks = 72

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 40:
    grade = "C"
else:
    grade = "F"
print(grade)
~~~

Python checks from the top and stops at the first true condition. So order matters: put the strictest check first.

### Combining conditions

~~~python
age = 25
has_id = True

if age >= 18 and has_id:
    print("Entry allowed")

if age < 18 or not has_id:
    print("Entry denied")
~~~

### Truthy and falsy

You can test a value directly.

~~~python
name = ""
items = [1, 2]

if not name:
    print("Name is empty")
if items:
    print("List has items")
~~~

Empty text, 0, None and empty collections count as false.

### Checking None

~~~python
result = None
if result is None:
    print("No result yet")
~~~

### Membership in conditions

~~~python
status = "pending"
if status in ("pending", "processing"):
    print("Still working")
~~~

### Nested conditions

~~~python
logged_in = True
role = "admin"

if logged_in:
    if role == "admin":
        print("Show admin panel")
    else:
        print("Show home")
~~~

Too much nesting is hard to read. Flatten with and when you can.

### The one-line form

~~~python
age = 20
label = "adult" if age >= 18 else "minor"
print(label)
~~~

This is called a conditional expression. Keep it for simple cases.

### match statement

Python 3.10 added match for many fixed choices.

~~~python
code = 404

match code:
    case 200:
        print("OK")
    case 404:
        print("Not found")
    case _:
        print("Other")
~~~

The underscore case is the fallback.

### Common errors

- Using a single equals in a condition is a SyntaxError. Use double equals.
- Forgetting the colon gives a SyntaxError.
- Wrong indentation gives an IndentationError.

### Why this matters for testing

Tests branch on environment, role and result.

~~~python
env = "staging"
if env == "production":
    print("Run read-only checks")
else:
    print("Run full checks")
~~~

### The takeaway

Use if, elif and else to choose a path. Put stricter checks first, use and, or and not to combine, and keep nesting shallow.`,
  handsOn: `Let's make code decide.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch conditions.py
code conditions.py
~~~

### Step 2: Grade calculator

~~~python
marks = 68

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("C")
else:
    print("F")
~~~

Change marks to 95, 80, 40 and 10 and run each time.

### Step 3: Combine conditions

~~~python
age = 30
has_ticket = True
if age >= 18 and has_ticket:
    print("Enter")
else:
    print("Stop")
~~~

### Step 4: One-line form

Rewrite the result of step 2 as a pass or fail label with one line.

### Step 5: Try match

Write a match on a status code with cases for 200, 301, 404 and a fallback.

### Step 6: Break the order

Put the marks >= 40 check first in step 2 and see why every pass gets C.

### Deliverable

You wrote a grade chain, a combined check, a one-line form and a match, and saw why order matters.`,
  challenge: `Create a file called decision_lab.py.

1. Write a function-free script that takes a status code variable and prints a message for 200, 201, 301, 400, 404 and 500, using elif and then match
2. Take a password text and check three rules: length at least 8, contains a digit, not equal to the word password
3. Print Valid only if all rules pass, otherwise print which rule failed
4. Use a one-line conditional expression to label a number as even or odd
5. Check whether a list is empty without using len

Then answer:

- Why does the order of elif checks matter?
- What is the difference between if with elif and several separate ifs?
- When would you choose match over elif?

Finish with one test decision where branching is useful.`,
  proTips: [
    "Put the strictest condition first in an elif chain.",
    "Use is None for None checks, and double equals for values.",
    "Test truthy and falsy directly, as in if items, to keep code short.",
    "Keep nesting shallow. Combine conditions with and where possible.",
    "Use match for many fixed choices, in Python 3.10 and above.",
  ],
  commonMistakes: [
    {
      mistake: "Using a single equals in an if condition",
      fix: "Use double equals to compare. A single equals is a syntax error here.",
    },
    {
      mistake: "Forgetting the colon after the condition",
      fix: "Every if, elif and else line ends with a colon.",
    },
    {
      mistake: "Writing elif checks in the wrong order",
      fix: 'Python stops at the first true one, so put the strictest check first.',
    },
    {
      mistake: "Writing if x == 1 or 2",
      fix: "That is always true. Write if x == 1 or x == 2, or use x in (1, 2).",
    },
    {
      mistake: "Comparing to True like if done == True",
      fix: "Write if done. It is shorter and clearer.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "if, elif, else",
      code: `marks = 72

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 40:
    grade = "C"
else:
    grade = "F"
print(grade)`,
    },
    {
      language: "python",
      title: "One-line conditional",
      code: `age = 20
label = "adult" if age >= 18 else "minor"
print(label)`,
    },
    {
      language: "python",
      title: "match statement",
      code: `code = 404

match code:
    case 200:
        print("OK")
    case 404:
        print("Not found")
    case _:
        print("Other")`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — if statements",
      url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements",
    },
    {
      title: "Python Docs — match statements",
      url: "https://docs.python.org/3/tutorial/controlflow.html#match-statements",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 30,
  tags: ["python", "conditionals", "if", "match", "collections-control-flow"],
};

export default topic;