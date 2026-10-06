import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "how-code-runs",
    title: "How code runs: source to result",
    summary:
      "The journey from your keystroke to something happening on screen.",
    whyItMatters:
      "When something breaks, knowing this pipeline tells you where to look. It's the mental map you'll rely on forever.",
    notes: `You type code. You press Enter. Something happens.

But what actually happened? Between your keypress and the result, there's a whole journey. Let's trace it, step by step.

### The journey

Here's the pipeline for a Python script:

**1. You write code in a file**

Save it as script.py. That file is called the **source code**.

**2. You run it**

You open a terminal and type:

~~~bash
python script.py
~~~

**3. The Python interpreter reads the file**

Python opens the file, reads every line.

**4. Python parses the code**

Python breaks each line into tokens — like words in a sentence. It checks the grammar.

If the grammar is wrong (missing bracket, misspelling), Python throws a **SyntaxError** — before running anything.

**5. Python compiles to bytecode**

Python translates your code into an intermediate format called bytecode. This is the same for every operating system.

You'll see this as a __pycache__ folder.

**6. The Python Virtual Machine runs the bytecode**

Bytecode is not machine code yet. The Python Virtual Machine (PVM) reads each bytecode instruction and executes it.

**7. Machine code runs**

The PVM translates each instruction into the actual CPU instructions. The CPU executes them.

**8. The operating system and hardware respond**

The CPU asks the OS to do things (print to screen, read a file, send a network request). The OS tells the hardware what to do.

**9. You see the result**

Your print statement appears on screen. Your file was written. Your network request was sent.

### What this means practically

When something goes wrong, ask: **where in the pipeline did it fail?**

**Failure in step 1 — syntax error**

You wrote bad code. Python tells you with a SyntaxError before running anything.

Example:

~~~python
print("Hello"
~~~

Missing closing bracket. Nothing runs.

**Failure in step 4 or 5 — compile error**

Rare in Python (Python doesn't have a separate compile step). More common in TypeScript, where you see errors before running.

**Failure in step 6 or 7 — runtime error**

Your code is syntactically fine but does something illegal at runtime.

Example:

~~~python
print("Hello" + 5)
~~~

Syntax is fine. But when the PVM tries to add a string to a number, it fails.

**Failure in step 8 — OS or permission error**

Your code tries to open a file that doesn't exist, or write to a folder you don't have access to. Or connect to the internet when there's no connection.

**Failure in step 9 — logical error**

The code ran successfully but the output is wrong. Example: you added instead of subtracted. No error, just incorrect output. These are the hardest bugs because nothing crashes — the result is just wrong.

### Why Python's errors tell you so much

Look at what Python prints when there's an error:

~~~text
Traceback (most recent call last):
  File "script.py", line 5, in <module>
    print("Hello" + 5)
TypeError: can only concatenate str (not "int") to str
~~~

Read it bottom-up:

- **TypeError** — what kind of error
- **can only concatenate str (not "int") to str** — what went wrong, in English
- **File "script.py", line 5** — where it happened
- **print("Hello" + 5)** — the actual line

This traceback is your best friend. Read it. Don't ignore it. It's Python telling you exactly what broke and where.

### The same journey in JavaScript

For JavaScript, the pipeline is:

1. You write code in a file (.js)
2. It runs in Node.js (server) or the browser
3. The engine parses the code
4. If TypeScript, a compile step catches errors first
5. The engine compiles to bytecode (V8, SpiderMonkey, etc.)
6. The engine executes
7. Results appear

Same idea, different names. The engine is the "interpreter".

### Why this matters for testing

When you write Playwright tests, several things can go wrong:

- **Locator not found** — runtime error at step 6
- **Timeout waiting for element** — runtime error at step 6
- **Assertion failed** — logical error at step 9
- **Network unreachable** — OS error at step 8
- **Syntax error in your test** — caught at step 1

Reading the error and knowing *which* stage it's from tells you:

- Is this my code's fault? (steps 1, 4, 9)
- Is this the test environment's fault? (step 8)
- Is this the app's fault? (steps 6, 9)

This mental map is gold.

### The chain to remember

File → Interpreter → Parse → Bytecode → Machine Code → CPU → OS → Screen

You'll rely on this chain for the rest of your career. Every error message you see fits into one of these stages.`,
    handsOn: `Let's cause errors at different stages and read them like a professional.

### Step 1: A syntax error

Create syntax-error.py:

~~~python
print("Hello"
print("World")
~~~

Run:

~~~bash
python syntax-error.py
~~~

Read the error. Notice: **nothing printed**. Python stopped before running anything.

What was the exact error type? Write it down.

### Step 2: A runtime error

Create runtime-error.py:

~~~python
print("Step 1")
print("Step 2")
print("Step 3" + 5)
print("Step 4")
~~~

Run:

~~~bash
python runtime-error.py
~~~

Notice: **Steps 1, 2, 3 printed**. Then Step 4 crashed. Step 4's line never executed.

Read the traceback. What was the exact error type?

### Step 3: A logical error

Create logic-error.py:

~~~python
amount = 1500
tip_percent = 5

# Wrong: multiply by tip_percent instead of (tip_percent / 100)
tip = amount * tip_percent

print("Tip is: " + str(tip))
~~~

Run it:

~~~bash
python logic-error.py
~~~

Output: "Tip is: 7500"

That's wrong! Tip on 1500 should be 75 (5 percent), not 7500.

But Python said nothing. No error. Just wrong output.

Fix it:

~~~python
tip = amount * (tip_percent / 100)
~~~

Run again. Now "Tip is: 75.0". Correct.

### Step 4: A traceback

Deliberately trigger an error to see a full traceback:

Create traceback.py:

~~~python
def outer():
    inner()

def inner():
    crash()

def crash():
    x = [1, 2, 3]
    print(x[10])

outer()
~~~

Run it. Read the traceback top to bottom. Notice how the file and line numbers trace the call chain.

### Deliverable

You triggered all four error types — syntax, runtime, logical, and traceback. You can identify each from the error message alone.`,
    challenge: `Pick any simple program and trace its execution on paper.

### Task

Write a Python program that:

1. Asks the user for a number.
2. Doubles it.
3. Prints the result.
4. Repeats until the user types 'quit'.

Once written, run it. Then on paper (or in a notes file) trace exactly what happens when the user types 5, then 10, then quit.

For each line of your program, write:

- Which step of the pipeline it's in (parsing, running, etc.)
- What memory it uses
- What appears on screen

### Bonus

Now break it deliberately. Change the code so that if the user types a non-number (like "hello"), the program prints a friendly message instead of crashing.

This is called **error handling** — a real skill in every language.

Hint: Python uses try / except blocks. Look them up.`,
    proTips: [
      "Always read the traceback from the bottom up. The bottom line is what went wrong. The lines above show the call stack.",
      "Syntax errors mean nothing ran. Runtime errors mean everything before that line ran. Logical errors mean everything ran but the result is wrong.",
      "If a program produces no output and no error, it might be stuck in an infinite loop. Press Ctrl + C to stop it.",
      "Adding print statements is the oldest debugging technique in the world. Don't be shy — print everything.",
      "When you see 'str' or 'int' in an error, it's Python telling you the type of value it encountered. That's your clue.",
    ],
    commonMistakes: [
      {
        mistake: "Ignoring the traceback and only reading the last line",
        fix: "The last line tells you WHAT went wrong. The lines above tell you WHERE. Read both.",
      },
      {
        mistake: "Thinking syntax errors and runtime errors are the same",
        fix: "Syntax errors stop everything before it starts. Runtime errors happen mid-run. Different fixes required.",
      },
      {
        mistake: "Assuming no error means correct output",
        fix: "Logical errors produce wrong answers with no errors. Always verify output, don't just check that nothing crashed.",
      },
      {
        mistake: "Not knowing where to look when something fails",
        fix: "Use the pipeline: was it syntax, compile, runtime, or logical? Each has a different fix.",
      },
      {
        mistake: "Panicking when you see a long traceback",
        fix: "Long tracebacks are normal. They show the call chain — which functions called which. Read the bottom line first.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Syntax error — caught before running",
        code: `print("Hello"
# SyntaxError: '(' was never closed
# Nothing runs`,
      },
      {
        language: "python",
        title: "Runtime error — caught while running",
        code: `print("Step 1")     # prints
print("Step 2")     # prints
print("Step 3" + 5) # crashes here
print("Step 4")     # never runs`,
      },
      {
        language: "python",
        title: "Logical error — runs fine but wrong result",
        code: `price = 100
quantity = 3

# Wrong: this multiplies correctly, but if the intent
# was to add a 5% tax, the formula below is wrong
total = price * quantity
tax = total * 5   # Forgot to divide by 100

print(tax)  # Prints 1500 instead of 15`,
      },
      {
        language: "text",
        title: "Reading a traceback",
        code: `Traceback (most recent call last):
  File "script.py", line 12, in <module>
    crash()
  File "script.py", line 8, in crash
    x[10]
IndexError: list index out of range

# Read bottom-up:
# 1. IndexError       — WHAT kind of error
# 2. list index out of range — WHY
# 3. line 8, in crash  — WHERE
# 4. x[10]             — the exact code`,
      },
    ],
    furtherReading: [
      {
        title: "Python.org — Errors and exceptions",
        url: "https://docs.python.org/3/tutorial/errors.html",
      },
      {
        title: "Real Python — Understanding tracebacks",
        url: "https://realpython.com/python-traceback/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "foundations", "debugging"],
  };

export default topic;
