import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "compiled-vs-interpreted",
    title: "Compiled vs interpreted",
    summary:
      "How code turns into something the computer actually runs — and why Python feels different from C++.",
    whyItMatters:
      "Understanding this explains why Python starts instantly but runs slower, and why Java needs a 'build step'. It'll make many future errors easier to understand.",
    notes: `You write code in Python. You press Enter. Something happens.

But wait — the computer only understands 0s and 1s. How did your Python code become 0s and 1s? And when? That's what "compiled vs interpreted" is about.

### The two main ways

**Compiled** — turn all your code into machine code **before** you run it.

**Interpreted** — turn your code into machine code **while** you run it, line by line.

That's the entire concept. Let's make it concrete with analogies.

### Analogy — the exam hall

Imagine you're sitting for a three-hour exam. The paper is in French. You only know English.

**Compiler approach:**

Before the exam, someone translates the entire French paper into English. You sit the exam in English. You write your answers in English. After the exam, someone translates your answers back into French for the examiner.

Translation happens **once, in bulk, before and after**.

**Interpreter approach:**

You sit the exam in French. As you read each line, a translator sits next to you and reads it aloud in English. You answer in English. The translator translates each answer to French as you go.

Translation happens **in real-time, line by line, during the exam**.

### Which is which?

**Compiled languages:**
- C
- C++
- Go
- Rust
- Java (sort of — see below)
- C#

**Interpreted languages:**
- Python
- JavaScript
- Ruby
- PHP
- Bash

### Why does it matter?

**Compiled languages are faster.** Because the translation happens ahead of time, the actual execution is pure machine code. No overhead.

**Interpreted languages are slower.** Because every line has to be translated on the fly. But modern interpreters are extremely smart, so the difference often isn't noticeable for daily work.

**Compiled languages catch errors early.** The compiler refuses to produce a program if there are syntax errors. You find out before you run.

**Interpreted languages catch errors late.** You might run a program and get 100 lines in before you hit an error on line 101.

**Interpreted languages are more flexible.** You can run a single line of Python in a REPL and get instant feedback. With C++, you have to compile first.

### The Java middle ground

Java is interesting. It does a hybrid:

1. Your code is **compiled** into something called bytecode.
2. The bytecode is **interpreted** at runtime by the Java Virtual Machine (JVM).

That's why Java programs need a "build" step (compile) before you can run them. And why the JVM must be installed on the target machine.

### What about Python?

Python is interpreted. But with a twist.

When you run a Python file:
1. Python reads your code.
2. It **compiles** it into an intermediate format called bytecode (.pyc files — you might see a __pycache__ folder appear).
3. The Python Virtual Machine **interprets** the bytecode line by line.

So Python is technically "compiled to bytecode, then interpreted". But most people just call it interpreted.

You never have to run a "compile" command for Python. That's the key difference from C++ or Java.

### What about TypeScript?

TypeScript is a **typed** version of JavaScript. It's **compiled** into plain JavaScript before running.

That's why when you set up a TypeScript project, you often run a "build" command first. After that, JavaScript runs in the browser or Node.js.

### For Playwright, what matters

You'll write tests in:

**Python (interpreted):**
- No build step
- Save the file, run it
- Fast iteration

**TypeScript (compiled to JS, then JS is interpreted):**
- Build step is usually automated
- Save, run tests, it works
- The tooling handles the compilation

Either way, you don't have to think about it much. But knowing the concept helps when:

- A Python error happens at runtime, not before.
- A TypeScript error happens before you even run the tests.
- Someone at work mentions "building the project".

### Quick mental model

- **Compiled** — translate first, run later. Fast, strict, catches errors early.
- **Interpreted** — translate while running. Flexible, forgiving, catches errors late.

Neither is "better". They're built for different trade-offs.`,
    handsOn: `Let's see the difference in practice.

### Step 1: Interpret Python live

Open a terminal and type:

~~~bash
python
~~~

You're now in the Python REPL (Read-Eval-Print Loop). This is live interpretation.

Type:

~~~python
2 + 3
~~~

You get 5 instantly. The line was translated and executed on the spot.

Type:

~~~python
name = "Ravi"
print("Hello, " + name)
~~~

Instant. No compile step.

Type:

~~~python
print("Hello" + 5)
~~~

You get an error — Python tries the operation, then complains it can't add a string to a number. It only found out at runtime.

Exit by typing:

~~~python
exit()
~~~

### Step 2: See Python's bytecode

Python compiles your .py files to bytecode behind the scenes. Let's see it.

Create a file called hello.py with:

~~~python
print("Hello, world")
~~~

Run it:

~~~bash
python hello.py
~~~

Now check for a new folder:

~~~bash
ls -la
~~~

You'll likely see a __pycache__ folder (or a .pyc file inside a folder). That's the bytecode Python generated.

### Step 3: Look at a compiled language

If you have any experience with C or C++ (or even if not), open a browser and search "hello world in C++". You'll notice it has:

- A "compile" step before running
- Extra lines at the top (imports, main function)
- Errors detected before the program can even run

Compare it to Python's two-line hello world.

### Deliverable

You used the Python REPL, saw live interpretation, and saw Python's bytecode folder appear. You understand the difference between compile-time and runtime.`,
    challenge: `Let's find the difference between "syntax errors" and "runtime errors" — the practical outcome of compiled vs interpreted.

### Test 1: A syntax error

Create a file called broken.py:

~~~python
print("Line 1")
print("Line 2")
print("Line 3"
print("Line 4")
~~~

Notice the missing closing bracket on line 3.

Run it:

~~~bash
python broken.py
~~~

You get an error immediately. Python detected the syntax problem before running any lines. No output printed.

Fix the bracket and try again. Now all four lines print.

### Test 2: A runtime error

Create a file called crash.py:

~~~python
print("Line 1")
print("Line 2")
print("Line 3")
print("Line 4" + 5)
print("Line 5")
~~~

Line 4 tries to add a string to a number. That's legal syntax but an illegal operation.

Run it:

~~~bash
python crash.py
~~~

Output:

~~~
Line 1
Line 2
Line 3
Traceback (most recent call last):
  ...
TypeError: can only concatenate str (not "int") to str
~~~

Notice: lines 1, 2, and 3 printed. Line 4 crashed. Line 5 never ran.

This is the "interpreted" behaviour — Python found out about the error at runtime, not before.

### Reflection

- What's the difference between when the two errors happened?
- Which is easier to catch early?

Write your answers down. This pattern will show up a hundred more times as you learn.`,
    proTips: [
      "You never have to compile Python. Just save and run. That's why it's great for beginners.",
      "If you see a __pycache__ folder, don't panic. It's Python's way of caching bytecode for speed.",
      "TypeScript compiles to JavaScript. That's why you sometimes see .ts files turn into .js files in your project.",
      "Compilers catch syntax errors before running. Interpreters catch them while running. Each has trade-offs.",
      "Don't try to master this topic now. Just remember: compiled = ahead-of-time, interpreted = on-the-fly.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking compiled languages are always better",
        fix: "They're faster but slower to develop. Python's quick iteration is why it's the top choice for automation and data work.",
      },
      {
        mistake: "Believing Python is 'pure interpreted' with no compilation",
        fix: "Python does compile to bytecode behind the scenes. It's just hidden from you.",
      },
      {
        mistake: "Getting scared by the __pycache__ folder",
        fix: "It's Python's bytecode cache. Add it to .gitignore so it doesn't get committed.",
      },
      {
        mistake: "Confusing 'runtime' with 'real time'",
        fix: "Runtime means 'when the program is running'. It has nothing to do with clocks.",
      },
      {
        mistake: "Assuming every error will show up immediately",
        fix: "In Python, many errors show up at runtime — after previous lines have already done things. This is why tests are important.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Syntax error (caught before running)",
        code: `print("Hello"
# Missing closing bracket
# Python detects this immediately`,
      },
      {
        language: "python",
        title: "Runtime error (caught while running)",
        code: `print("Line 1")
print("Line 2")
print("Line 3" + 5)  # Runtime error
print("Line 4")     # Never runs`,
      },
      {
        language: "text",
        title: "The one-line summary",
        code: `Compiled:   translate everything first, then run
Interpreted: translate as you go, line by line

Compiled languages: C, C++, Go, Rust, Java (hybrid)
Interpreted: Python, JavaScript, Ruby, PHP, Bash`,
      },
    ],
    furtherReading: [
      {
        title: "FreeCodeCamp — Compiled vs interpreted",
        url: "https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/",
      },
      {
        title: "Real Python — Understanding Python's internals",
        url: "https://realpython.com/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "foundations", "concepts"],
  };

export default topic;
