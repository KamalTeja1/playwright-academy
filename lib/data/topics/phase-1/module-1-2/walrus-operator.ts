import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "walrus-operator",
  title: "The Walrus Operator",
  summary:
    "Assign a value and use it in the same expression, using the colon and equals sign together.",
  whyItMatters:
    "It removes repeated calls and extra lines in conditions and loops. You will see it in real codebases, so you should be able to read it.",
  notes: `The walrus operator is written as a colon followed by an equals sign. It is **an assignment that is also an expression**. It stores a value and hands it back at the same moment.

It is named walrus because the symbol looks like a walrus face turned on its side, with eyes and tusks.

### The problem it solves

~~~python
text = "hello world"

length = len(text)
if length > 5:
    print(f"Long text: {length}")
~~~

You need two lines: one to compute and one to check. With the walrus you can do both.

### The walrus form

~~~python
text = "hello world"

if (length := len(text)) > 5:
    print(f"Long text: {length}")
~~~

It assigns len(text) to length, then compares that value to 5. The name length stays available after the if.

### Brackets matter

Put the walrus inside brackets in most places. Without them, Python may read it differently or refuse.

~~~python
if (n := 10) > 5:
    print(n)
~~~

### Avoiding a repeated call

Without the walrus you either call twice or add a line.

~~~python
data = {"user": {"name": "Priya"}}

if (user := data.get("user")) is not None:
    print(user["name"])
~~~

### In a while loop

It is useful when you read until something runs out.

~~~python
queue = ["a", "b", "c"]

while (item := queue.pop(0) if queue else None) is not None:
    print(item)
~~~

This line is dense. Break it into plain code if it is hard to read.

~~~python
queue = ["a", "b", "c"]
while queue:
    item = queue.pop(0)
    print(item)
~~~

The second version is clearer. Choose clarity first.

### In a comprehension

~~~python
numbers = [1, 5, 8, 12]
big_squares = [sq for n in numbers if (sq := n * n) > 30]
print(big_squares)
~~~

The square is computed once and used twice.

### Matching text

~~~python
import re

line = "Order 1001 placed"
if (match := re.search(r"\\d+", line)):
    print(match.group())
~~~

This is a classic use. Search, then use the result only if it was found.

### When not to use it

- When two simple lines read better
- When it is deep inside a long expression
- When the team is new to the syntax

The walrus is a convenience, not a goal. It needs Python 3.8 or newer, and you are on 3.10 or above.

### Rules to remember

- You cannot use it as a bare statement. Write x = 5, not x := 5
- Wrap it in brackets inside conditions
- The name stays in the surrounding scope

### Why this matters for testing

Test helpers often fetch something and check it right away.

~~~python
responses = [{"status": 200}, {"status": 500}]
for r in responses:
    if (code := r["status"]) >= 400:
        print(f"Failed with {code}")
~~~

### The takeaway

The walrus assigns and returns a value in one step. Use it to avoid repeated calls in conditions, wrap it in brackets, and drop it when plain code is clearer.`,
  handsOn: `Let's try the walrus and then decide if it helps.

### Step 1: Create the file

~~~bash
cd /workspaces/playwright-academy/python-practice
touch walrus.py
code walrus.py
~~~

### Step 2: Plain version first

~~~python
message = "Test passed successfully"
length = len(message)
if length > 10:
    print("Long message", length)
~~~

### Step 3: Walrus version

~~~python
message = "Test passed successfully"
if (length := len(message)) > 10:
    print("Long message", length)
~~~

### Step 4: Safe dictionary read

~~~python
config = {"timeout": 30}
if (timeout := config.get("timeout")) is not None:
    print("Timeout is", timeout)
~~~

### Step 5: In a comprehension

~~~python
nums = [2, 7, 10, 3]
big = [sq for n in nums if (sq := n * n) > 20]
print(big)
~~~

### Step 6: Break it

Remove the brackets in step 3. Read what happens. Then put them back.

### Deliverable

You wrote the same logic with and without the walrus and used it in a condition and a comprehension.`,
  challenge: `Create a file called walrus_lab.py.

1. Rewrite a two-line assign and check into one line with the walrus
2. Use the walrus with get to read a value from a dictionary and test it
3. Use it in a list comprehension that filters on a computed value
4. Use the walrus with re.search to print a number found in a sentence
5. Rewrite each of those without the walrus and compare readability

Then answer:

- What does the walrus return?
- Why do we usually wrap it in brackets?
- Name two cases where you would avoid it.

Finish with your own rule for when to use it.`,
  proTips: [
    "Wrap the walrus in brackets inside conditions.",
    "Use it to avoid calling the same function twice.",
    "Prefer plain code when the walrus makes a line hard to read.",
    "Remember it needs Python 3.8 or newer.",
    "Never use it as a bare statement. Use a normal equals sign.",
  ],
  commonMistakes: [
    {
      mistake: "Writing x := 5 as a standalone line",
      fix: "A bare walrus is a syntax error. Use x = 5.",
    },
    {
      mistake: "Leaving out the brackets in a condition",
      fix: "Wrap it like if (n := f()) > 5 so the meaning is clear.",
    },
    {
      mistake: "Packing too much into one line",
      fix: "If it is hard to read, split it into two normal lines.",
    },
    {
      mistake: "Confusing the walrus with a comparison",
      fix: "Colon-equals assigns. Double equals compares.",
    },
    {
      mistake: "Forgetting the name stays available after the block",
      fix: "Pick a clear name, since it lives on in the surrounding scope.",
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "Assign and check together",
      code: `text = "hello world"

if (length := len(text)) > 5:
    print(f"Long text: {length}")`,
    },
    {
      language: "python",
      title: "Safe dictionary read",
      code: `config = {"timeout": 30}
if (timeout := config.get("timeout")) is not None:
    print("Timeout is", timeout)`,
    },
    {
      language: "python",
      title: "Compute once in a comprehension",
      code: `numbers = [1, 5, 8, 12]
big_squares = [sq for n in numbers if (sq := n * n) > 30]
print(big_squares)`,
    },
  ],
  furtherReading: [
    {
      title: "PEP 572 — Assignment Expressions",
      url: "https://peps.python.org/pep-0572/",
    },
    {
      title: "Python Docs — Assignment expressions",
      url: "https://docs.python.org/3/reference/expressions.html#assignment-expressions",
    },
  ],
  difficulty: "Intermediate",
  estimatedMinutes: 20,
  tags: ["python", "walrus", "assignment-expression", "collections-control-flow"],
};

export default topic;