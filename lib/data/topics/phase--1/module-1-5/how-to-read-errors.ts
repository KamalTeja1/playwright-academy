import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "how-to-read-errors",
    title: "How to read error messages without panicking",
    summary:
      "Errors are not failures. They are clues. Here is how to read them calmly and fix the real problem.",
    whyItMatters:
      "You will see thousands of errors in your career. The engineer who reads them calmly and fixes them fast is the one who gets hired, promoted, and trusted.",
    notes: `Errors feel personal the first few times. You wrote code, you ran it, and the computer responded with a wall of red text. It feels like the computer is angry at you.

It is not. The computer is helping you. Every error message is a clue that points to a real problem. The only skill is learning to read it.

### The truth about errors

Errors are normal. Professional developers see them every single day. They do not get scared. They read the message and fix the problem.

Beginners see an error and think: I broke something.

Experts see an error and think: the compiler is telling me where to look.

Same error. Different mindset.

### The four parts of every Python error

When Python reports an error, the message has four parts. Learn to spot them.

**Part 1: The traceback header**

The first line usually says: Traceback (most recent call last). This means Python is showing you the sequence of function calls that led to the error. Read it from bottom to top.

**Part 2: The file and line number**

Look for lines like: File "script.py", line 12

This tells you exactly which file and which line caused the problem. This is the single most useful piece of information in the entire message.

**Part 3: The actual code**

Python shows the offending line, often with a small caret symbol pointing at the exact character that broke things. The caret is under the problem. Follow it.

**Part 4: The error type and message**

The last line has the error type and a human-readable message, for example:

TypeError: can only concatenate str (not int) to str

Translation: you tried to add text and a number. That is not allowed in Python.

### The common error types and what they really mean

**SyntaxError** — you wrote code that is not valid Python. Usually a missing bracket, a missing quote, or a typo. Read the line number. Look at the line. Look at the line above. One of them is broken.

**NameError** — you used a variable or function that does not exist. Usually a typo.

**TypeError** — you used a value in a way that does not match its type. Example: adding text and a number.

**IndexError** — you tried to access a position in a list that does not exist.

**KeyError** — you tried to look up a key in a dictionary that is not there.

**FileNotFoundError** — you tried to open a file that does not exist.

**ImportError or ModuleNotFoundError** — you tried to import a library that is not installed or does not exist.

### The reading strategy

When you see an error, do this in order:

1. Read the last line first. What kind of error is it?
2. Look at the file and line number. Where did it happen?
3. Look at the code shown. What is on that line?
4. Think about what value would cause this error.
5. Add a print statement just before the failing line to see what the value actually is.
6. Fix it. Run again.

Do not skip step 5. Printing the actual value is the fastest way to understand what went wrong.

### What not to do

Do not panic. Errors are not emergencies.

Do not randomly change code hoping something works. That makes things worse.

Do not assume the error is somewhere else. It is exactly where Python says it is.

Do not scroll past the error. Read it fully. Twice.

### Real example, step by step

You write a function greet(name) that prints Hello + the name. You call greet(25).

You see a traceback. Reading bottom-up:

1. TypeError: you tried to combine text and a number.
2. The problem line is inside the greet function.
3. The code is print("Hello, " + name).
4. Since name is 25 and 25 is a number, adding the text to it fails.
5. Fix: pass a string: greet("25") or convert inside the function.

Now the error is gone.

### Why this matters

The faster you can read errors, the faster you debug. The faster you debug, the faster you ship.

This is one of the highest-leverage skills in your entire career. And it is 100 percent learnable.

### The mindset shift

Every error is a conversation between you and the computer.

It is not saying you are bad at this.

It is saying: here is exactly what went wrong, on this exact line, with this exact value.

That is the most useful message you could possibly receive. Read it like a friend giving you directions.`,
    handsOn: `Let us deliberately trigger and read six different errors.

### Setup

In a practice folder, create a file called errors.py.

### Error 1 — SyntaxError

Type this and run it: print("Hello" — with the closing bracket missing. Read the error. What line does it point to? Fix it by adding the closing bracket.

### Error 2 — NameError

Type this and run it: print(naem). You meant name but typed naem. Python tells you it has never seen naem. Fix the spelling.

### Error 3 — TypeError

Type this and run it:

age = 25
print("Age is " + age)

You cannot add text and a number. Convert age to text first using str(age).

### Error 4 — IndexError

Type this and run it:

items = [1, 2, 3]
print(items[10])

The list has 3 items. Position 10 does not exist. Fix it by using a valid index like items[2].

### Error 5 — KeyError

Type this and run it:

user = {"name": "Ravi"}
print(user["age"])

There is no age key. Fix it by checking first: if "age" in user before accessing it.

### Error 6 — FileNotFoundError

Type this and run it: open("missing.json"). The file does not exist in the current folder. Fix it by creating the file or handling the error with try except.

### Deliverable

You triggered all six errors, read each message, and fixed each one. You now recognize the common error types on sight.`,
    challenge: `Create your own error cheat sheet.

Open a new file called error-cheatsheet.md. For each of the six error types you triggered, write:

- The error name
- What triggers it (one line)
- How to fix it (one line)
- One example code snippet

Add to this file over time. Every time you hit a new error type, add a section. In six months, you will have a personal reference guide worth more than any textbook.

### Bonus

Look up two more error types you have not seen yet: ZeroDivisionError and ValueError. Write entries for them. Then trigger them on purpose so you remember.

### Reflection

The most valuable engineers are not the ones who never hit errors. They are the ones who hit them and fix them fast. This cheat sheet is your first step toward being that engineer.`,
    proTips: [
      "Read the error message bottom-up. The last line tells you what, the lines above tell you where.",
      "The line number in the traceback is your best clue. Look at that line and the line above it.",
      "If a line looks correct, add print statements to check the actual values.",
      "Never fix errors by randomly changing code. Understand first, change second.",
      "Keep a personal error diary. The same errors come back, and you will fix them faster each time.",
    ],
    commonMistakes: [
      {
        mistake: "Panicking when you see red text",
        fix: "Errors are not emergencies. They are information. Read calmly.",
      },
      {
        mistake: "Skimming the error and guessing at the fix",
        fix: "Read every line. The clue is usually in the last line and the file and line number.",
      },
      {
        mistake: "Assuming the error is not where Python says it is",
        fix: "Trust the line number. If line 12 shows the error, the problem is on line 12.",
      },
      {
        mistake: "Copying the error into Google without reading it first",
        fix: "Read it first. Understand the error type. Then Google for specifics.",
      },
      {
        mistake: "Not testing the fix, just assuming it worked",
        fix: "Run the code again after every change. Verify the error is gone.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Reading a traceback",
        code: `# The code that crashes:
def divide(a, b):
    return a / b

result = divide(10, 0)

# The traceback Python shows:
# Traceback (most recent call last):
#   File "script.py", line 4, in <module>
#     result = divide(10, 0)
#   File "script.py", line 2, in divide
#     return a / b
# ZeroDivisionError: division by zero

# Reading bottom-up:
# 1. ZeroDivisionError: you divided by zero
# 2. Line 2 in divide: the problem location
# 3. return a / b: the exact line
# 4. b is 0, so a / b fails`,
      },
      {
        language: "python",
        title: "Fixing with try and except",
        code: `try:
    result = divide(10, 0)
except ZeroDivisionError:
    print("Cannot divide by zero")
    result = 0

print("Result is:", result)`,
      },
      {
        language: "text",
        title: "Common error types at a glance",
        code: `SyntaxError        Missing bracket, quote, or invalid Python
NameError          Variable or function does not exist
TypeError          Wrong type used in an operation
IndexError         List index out of range
KeyError           Dictionary key does not exist
FileNotFoundError  File does not exist at that path
ImportError        Library not installed
ZeroDivisionError  Divided by zero
ValueError         Right type, wrong value`,
      },
    ],
    furtherReading: [
      {
        title: "Python docs — Errors and exceptions",
        url: "https://docs.python.org/3/tutorial/errors.html",
      },
      {
        title: "Real Python — Understanding Python tracebacks",
        url: "https://realpython.com/python-traceback/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "soft-skills", "debugging"],
  };

export default topic;
