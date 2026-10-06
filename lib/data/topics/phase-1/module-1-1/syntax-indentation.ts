import type { TopicContent } from "../../types";

const topic: TopicContent = {
  slug: "syntax-indentation",
  title: "Python Syntax and Indentation",
  summary:
    "Python uses spaces at the start of a line to group code. Learn the basic rules of how Python code is written and read.",
  whyItMatters:
    "In Python, a wrong number of spaces is a real error. Every test, script and framework you write later depends on getting this right.",
  notes: `Python is a language that is built to be **easy to read**. Its rules are few, but they are strict. The most important rule is indentation.

Think of a typed letter. The address is at the top, the body is in the middle and the signature is at the bottom. The layout tells you what is what. Python code works the same way. The layout is part of the meaning.

### Running your first line

~~~python
print("Hello, Python")
~~~

The word print is a function that shows text on the screen. The text inside quotes is a string. When you run this file, you see Hello, Python.

### Statements and lines

Python normally runs one statement per line, from top to bottom.

~~~python
print("First")
print("Second")
print("Third")
~~~

You do not need a semicolon at the end of a line.

### Indentation: the big rule

Other languages use curly braces to group code. Python uses **indentation**, which means spaces at the start of the line.

~~~python
age = 20

if age >= 18:
    print("You can vote")
    print("Please carry your ID")

print("This line runs always")
~~~

The two indented lines belong to the if. They run only when the condition is true. The last line is not indented, so it runs every time.

### The colon

A line that starts a block ends with a colon. The block follows on the next lines, indented. You will see this with if, for, while, def and class.

### How many spaces?

The common standard is **4 spaces** for each level. Pick 4 and use it everywhere. Do not mix tabs and spaces in the same file. VS Code can insert 4 spaces when you press the Tab key.

### Common indentation errors

~~~python
if True:
print("Oops")
~~~

This gives IndentationError: expected an indented block. The line after a colon must be indented.

~~~python
if True:
    print("One")
      print("Two")
~~~

This gives IndentationError: unexpected indent. Lines in the same block must line up exactly.

### Nested blocks

A block can sit inside another block. Each level moves 4 more spaces to the right.

~~~python
score = 85

if score >= 40:
    print("Passed")
    if score >= 80:
        print("With distinction")
~~~

### Comments

A comment is a note for humans. Python ignores it. It starts with the hash sign.

~~~python
# This is a full line comment
price = 100  # this is a note at the end of a line
~~~

Write comments to explain **why** you did something, not to repeat what the code obviously does.

### Case sensitivity

Python treats capital and small letters as different. Name and name are two different things. Also, True is correct, but true is an error.

### Long lines

If a line is too long, you can break it inside brackets and Python understands.

~~~python
total = (100 +
         200 +
         300)
print(total)
~~~

### Blank lines and style

Blank lines are fine and help readability. Python has an official style guide called PEP 8. It suggests 4 spaces, short lines and clear names. Following it makes your code look like everyone else's.

### Why this matters for testing

Later you will write test functions where every line sits inside an indented block. One wrong space can make a whole test fail to run. Get comfortable now with small scripts.

### The takeaway

Indent with 4 spaces, end block-starting lines with a colon, and keep lines in the same block aligned. Python reads your layout as the structure of your program.`,
  handsOn: `Let's write and run your first Python files.

### Step 1: Make a practice folder

Run these in the terminal:

~~~bash
cd /workspaces/playwright-academy
mkdir -p python-practice
cd python-practice
~~~

### Step 2: Create hello.py

~~~bash
touch hello.py
code hello.py
~~~

Paste this and save:

~~~python
# My first Python file
print("Hello, Python")
print("I am learning automation")
~~~

### Step 3: Run it

~~~bash
python3 hello.py
~~~

You should see two lines of output.

### Step 4: Add a block

Add this at the bottom and run again:

~~~python
age = 20

if age >= 18:
    print("Adult")
    print("Can vote")
print("Done")
~~~

### Step 5: Break it on purpose

Remove the spaces before print("Can vote") and run. Read the error message. Then fix it.

### Step 6: Nest it

Add a second if inside the first one, with 8 spaces, that prints Senior citizen when age is 60 or more.

### Deliverable

You have a working hello.py, you saw an IndentationError and fixed it, and you wrote one nested block.`,
  challenge: `Create a file called marks.py.

1. Store a variable marks with the value 72
2. Print Passed if marks is 40 or more, with the line indented
3. Inside that block, print Distinction if marks is 75 or more
4. Add a final line, not indented, that prints Result checked
5. Add comments explaining why each check exists

Then:

- Change marks to 30, 60 and 90 and note the output each time
- Deliberately create two different indentation errors and write down each message
- Explain in your own words why Python uses indentation instead of braces

Finish with a short note on why mixing tabs and spaces is a bad idea.`,
  proTips: [
    "Use 4 spaces for every level of indentation. Never mix tabs and spaces.",
    "Set VS Code to insert spaces when you press Tab.",
    "Read error messages from the bottom up. The last line tells you the problem.",
    "Write comments to explain why, not what.",
    "Run small scripts often. Short feedback loops make learning faster.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the colon at the end of an if line",
      fix: "Every line that starts a block ends with a colon. Add it and run again.",
    },
    {
      mistake: "Not indenting the line after a colon",
      fix: "Indent the block by 4 spaces. Python needs it to know what belongs inside.",
    },
    {
      mistake: "Mixing tabs and spaces",
      fix: "Use only 4 spaces. Set your editor to convert the Tab key into spaces.",
    },
    {
      mistake: "Writing true or false in small letters",
      fix: "Python needs True and False with a capital first letter.",
    },
    {
      mistake: "Adding a semicolon at the end of each line like in other languages",
      fix: 'Python does not need it. Remove it, since one statement per line is the normal style.',
    },
  ],
  codeExamples: [
    {
      language: "python",
      title: "A block with indentation",
      code: `age = 20

if age >= 18:
    print("You can vote")
    print("Please carry your ID")

print("This line runs always")`,
    },
    {
      language: "python",
      title: "Nested blocks",
      code: `score = 85

if score >= 40:
    print("Passed")
    if score >= 80:
        print("With distinction")`,
    },
    {
      language: "bash",
      title: "Run a Python file",
      code: `python3 hello.py`,
    },
  ],
  furtherReading: [
    {
      title: "Python Docs — Lexical analysis (indentation)",
      url: "https://docs.python.org/3/reference/lexical_analysis.html#indentation",
    },
    {
      title: "PEP 8 — Style Guide for Python Code",
      url: "https://peps.python.org/pep-0008/",
    },
  ],
  difficulty: "Beginner",
  estimatedMinutes: 25,
  tags: ["python", "syntax", "indentation", "python-core"],
};

export default topic;