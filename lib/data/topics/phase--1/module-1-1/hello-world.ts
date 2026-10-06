import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "hello-world",
    title: "Your very first Hello World",
    summary:
      "Write and run your first line of code in both Python and JavaScript.",
    whyItMatters:
      "This is the moment you stop reading about code and start writing it. Everything else builds on this.",
    notes: `Every programmer in history has started with the same program: **Hello, World**.

It does one thing — prints the words "Hello, World" to the screen. That's it. But it teaches you the entire workflow: write, save, run, see output.

Let's do it.

### Step 1: Open a terminal

**In VS Code:** press Ctrl + backtick (the backtick key is just below Escape).

**Or standalone:**
- Windows: Win + R, type cmd, press Enter
- Mac: Cmd + Space, type Terminal, press Enter
- Linux: Ctrl + Alt + T

### Step 2: Create a folder

In the terminal:

~~~bash
mkdir hello
cd hello
~~~

You're now inside a folder called hello.

### Step 3: Open it in VS Code

If you're using VS Code, use the terminal inside it — you're already in the right place. Otherwise:

~~~bash
code .
~~~

That opens the current folder in VS Code.

### Step 4: Write Python's version

Create a file called hello.py in VS Code.

Type exactly this:

~~~python
print("Hello, World!")
~~~

Save (Ctrl + S).

### Step 5: Run it

In the terminal:

~~~bash
python hello.py
~~~

Output:

~~~text
Hello, World!
~~~

That's it. You just wrote and ran your first Python program.

### Step 6: Break it — on purpose

Change the file to:

~~~python
print("Hello, World!"
~~~

Notice: missing closing bracket. Save and run.

Python prints:

~~~text
  File "hello.py", line 1
    print("Hello, World!"
         ^
SyntaxError: '(' was never closed
~~~

Read it. Python is telling you exactly what went wrong and where. This is the compiler/interpreter being helpful, not scary.

Fix it. Save. Run. Works again.

### Step 7: The same in JavaScript

Create a file called hello.js:

~~~javascript
console.log("Hello, World!");
~~~

Save.

To run it in Node.js (if installed):

~~~bash
node hello.js
~~~

To run it without Node.js — no problem. Open any browser, press F12 to open DevTools, go to the Console tab, paste the line, press Enter. You'll see:

~~~text
Hello, World!
~~~

Same output. Different language.

### What just happened

You did four things that every programmer does, every single day:

1. **Wrote** code in a file
2. **Saved** the file
3. **Ran** the file using an interpreter
4. **Read** the output

You also experienced a syntax error and fixed it. That's the loop. You'll repeat this loop thousands of times in your career. The only thing that changes is what's inside the file.

### Why "Hello, World"?

The tradition started in 1974, in a book about the C programming language. The author used it as the very first example. Every language since has copied it as a friendly handshake.

Today, "Hello, World" is your way of saying: *the compiler, interpreter, editor, and computer are all talking to each other. I'm ready to build.*

### What you actually learned

Behind the simple output, you learned:

- How to create and save a Python file
- How to run it from the terminal
- What a syntax error looks like
- How to fix a syntax error
- The same thing in JavaScript
- That you can run JavaScript in the browser without any installation

That's a real milestone. Every single professional developer started with this exact step. You're now officially a beginner programmer.`,
    handsOn: `Do it step by step. Don't skip anything.

### Step 1: Create the folder

~~~bash
cd ~
mkdir hello
cd hello
~~~

### Step 2: Create hello.py

In VS Code, create a new file called hello.py inside the hello folder.

Type:

~~~python
print("Hello, World!")
~~~

Save with Ctrl + S.

### Step 3: Run it

~~~bash
python hello.py
~~~

Expected output:

~~~text
Hello, World!
~~~

### Step 4: Personalise it

Change the file to:

~~~python
print("Hello, World!")
print("My name is Ravi")
print("I am learning Playwright")
print("Today's date is 2025")
~~~

Save and run again.

You should see four lines of output.

### Step 5: Try the JavaScript version

Create hello.js:

~~~javascript
console.log("Hello, World!");
console.log("I am learning JavaScript too");
~~~

If you have Node.js:

~~~bash
node hello.js
~~~

If not, open a browser → F12 → Console tab → paste the lines → Enter.

### Deliverable

You have:
- A Python file that prints your greeting
- A JavaScript file that prints the same
- Both files run successfully
- You've seen and fixed one error already

You are officially a programmer.`,
    challenge: `Let's make your first program interactive.

### Python version — greet by name

Create greet.py:

~~~python
name = input("What is your name? ")
print("Hello, " + name + "!")
print("Welcome to the world of coding.")
print("You just took your first real step.")
~~~

Run:

~~~bash
python greet.py
~~~

Type your name. Press Enter. Watch it respond.

### JavaScript version — same idea

Create greet.js:

~~~javascript
const name = prompt("What is your name?");
console.log("Hello, " + name + "!");
console.log("Welcome to the world of coding.");
~~~

Run it in the browser console. (Or with Node.js, using readline — but the browser is easier for now.)

### Bonus

Make it print three lines in both languages, using the name at least twice:

- "Hello, [name]!"
- "[name], you're going to enjoy this."
- "Bye for now, [name]."

### Reflection

Notice: you had to store the name somewhere (that's a variable), and print something that mixed text with the name (that's string concatenation).

Those are two of the five building blocks of every language. You're already using them.`,
    proTips: [
      "Always save the file before running. Unsaved changes don't run.",
      "Use Ctrl + backtick in VS Code to open the built-in terminal. It's already in the right folder.",
      "When you see a SyntaxError, look at the line number in the message. It points to the actual problem.",
      "Python's input function always returns text. If you want a number, convert it: int(input(...)).",
      "Run JavaScript in the browser console for quick experiments. No install needed.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting to save the file before running",
        fix: "VS Code shows a dot next to unsaved files. Always press Ctrl + S first.",
      },
      {
        mistake: "Typing print without quotes, or with mismatched quotes",
        fix: "Text in Python must be wrapped in quotes: print(\"Hello\"). Single or double quotes both work, but they must match.",
      },
      {
        mistake: "Running the wrong file",
        fix: "Check the filename in your command matches the file you edited. Case matters on Mac and Linux.",
      },
      {
        mistake: "Running python in the wrong folder",
        fix: "Run pwd to see where you are. Run ls to see the files. The file must be in the current folder.",
      },
      {
        mistake: "Mixing up Python's print and JavaScript's console.log",
        fix: "Python: print(\"text\"). JavaScript: console.log(\"text\"). They do the same thing but the words differ.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "The minimal Python program",
        code: `print("Hello, World!")`,
      },
      {
        language: "javascript",
        title: "The minimal JavaScript program",
        code: `console.log("Hello, World!");`,
      },
      {
        language: "python",
        title: "Interactive Python greeting",
        code: `name = input("What is your name? ")
print("Hello, " + name + "!")
print("Welcome to coding.")`,
      },
      {
        language: "javascript",
        title: "Interactive JavaScript greeting",
        code: `const name = prompt("What is your name?");
console.log("Hello, " + name + "!");
console.log("Welcome to coding.");`,
      },
    ],
    furtherReading: [
      {
        title: "Python.org — Hello World tutorial",
        url: "https://www.python.org/about/gettingstarted/",
      },
      {
        title: "MDN — Your first JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "hello-world", "hands-on"],
  };

export default topic;
