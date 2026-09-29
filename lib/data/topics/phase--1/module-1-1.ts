import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "what-is-a-program": {
    slug: "what-is-a-program",
    title: "What is a computer program?",
    summary:
      "The plain-English answer to what code actually is — no jargon, no fear.",
    whyItMatters:
      "You cannot write a test until you understand what a program is. This is the very first step, and it's simpler than you think.",
    notes: `Let's start with the simplest possible question. Forget coding, forget testing, forget Playwright. Just answer this:

**What is a computer program?**

A computer program is a **list of instructions** that tells a computer what to do, step by step, in order.

That's it. That's the whole definition.

### A real-life example

Think of making chai. You don't just say "make chai" to someone and expect perfect chai. You give step-by-step instructions:

1. Boil water
2. Add tea leaves
3. Add milk
4. Add sugar
5. Stir for two minutes
6. Strain into a cup

That's a **program**. Someone (or something) follows each step in order. If you skip a step or do them out of order, the chai is ruined.

A computer program works exactly the same way. The only difference is that instead of tea leaves and milk, it's dealing with numbers, text, and actions on a screen.

### Another example — the auto meter

When you sit in an auto, the meter starts at a base fare and adds money per kilometre. Behind that meter is a tiny program:

1. Start with base fare (say 30 rupees)
2. Wait for the auto to move
3. For every kilometre travelled, add 15 rupees
4. Display the total
5. Repeat steps 2 to 4 until the ride ends

Every time you take an auto, you're seeing a program run in real time. The auto driver didn't calculate that — the program did.

### What a program is NOT

- It's not magic. It's a list of steps. Every step does something small.
- It's not smart. It does exactly what you tell it. If you tell it to add 15 for every km but you meant 12, it will happily charge the wrong amount forever.
- It's not alive. It doesn't get tired, bored, or creative. It just follows orders.

### Programs are everywhere

Once you start noticing them, you'll see them everywhere:

- **WhatsApp** — a program that sends and receives messages
- **Your bank's ATM** — a program that checks your PIN, gives cash, updates balance
- **Google Maps** — a program that finds the fastest route
- **The traffic signal** — a program that cycles red, yellow, green on a timer
- **Swiggy** — a program that takes your order, finds a delivery partner, tracks the route

Every one of these is a very long list of very simple instructions.

### Why this matters for testing

When you become a Playwright engineer, you'll write tests. Each test is also a **program** — a list of instructions that a computer follows:

1. Open the browser
2. Go to this URL
3. Click the Login button
4. Type the username
5. Type the password
6. Click Submit
7. Check that the dashboard loaded

Every test is just steps. Every step is just an instruction. Once you see code this way, nothing feels scary anymore.

You're not learning to speak to computers. You're learning to write clear, ordered instructions for a very obedient assistant who takes everything literally.`,
    handsOn: `No code yet. Just observation.

### Step 1: Pick one app on your phone

Choose any app you use daily — WhatsApp, Swiggy, Google Maps, PhonePe, anything.

### Step 2: Write down a user flow

In a notebook or a text file, write down what happens when you use one specific feature.

Example — sending a WhatsApp message:

1. Open WhatsApp
2. Tap on a contact
3. Type a message
4. Tap send
5. Message appears in the chat
6. Contact receives it

### Step 3: Break each step down further

Now break step 4 (tap send) into smaller steps:

1. You tap the send icon
2. The app reads the text you typed
3. The app packages it with your ID and the contact's ID
4. The app sends it to WhatsApp's server
5. The server forwards it to the contact's phone
6. Your phone shows a tick mark

### Step 4: Notice the pattern

Every app works this way. Every feature is a chain of small steps. Somewhere behind all of them is a program — a list of instructions — doing exactly what you designed.

### Deliverable

You wrote down a user flow with at least 5 steps and broke one step into 3 or more sub-steps. You now think in instructions, which is exactly what a program is.`,
    challenge: `Now design a program on paper — no code.

Choose one:

**Option A — Railway ticket booking**

Write the step-by-step instructions a program would follow when someone books a train ticket on IRCTC. Start from "user opens the site" and end at "user gets an email confirmation".

Aim for at least 15 steps.

**Option B — Split a restaurant bill**

Three friends eat at a restaurant. The bill is 1,500 rupees. They want to split it equally and add a 5 percent tip.

Write the steps a program would follow to calculate and display each person's share.

Hint: it starts with "read the total amount from the user", and ends with "display the amount each person should pay".

### Bonus

Look at your steps and ask: where could things go wrong? What if the user enters "abc" instead of a number? What if the network fails halfway? A good program thinks about these. A great program handles them.`,
    proTips: [
      "Programs are just ordered steps. If you can write down a recipe, you can write a program.",
      "The computer never guesses what you meant. If it seems 'stupid', it's because the instruction was unclear.",
      "Most bugs happen because a step was in the wrong order, or a step was missed. Debugging is finding the missing or misordered step.",
      "When you get stuck, say the steps out loud. This simple habit solves 80 percent of coding problems.",
      "Every big app (WhatsApp, Instagram, UPI) is made of thousands of tiny programs that each do one small thing well.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking a program is one big complicated thing",
        fix: "It's always a series of small, simple steps. If a program feels complicated, it just means the list is long — not that any single step is hard.",
      },
      {
        mistake: "Assuming the computer 'knows what you meant'",
        fix: "It never does. It does exactly what you wrote. If the output is wrong, the instruction was wrong.",
      },
      {
        mistake: "Skipping the planning step and jumping straight to writing code",
        fix: "Write the steps on paper first. Every professional does this. It saves hours.",
      },
      {
        mistake: "Confusing a program with the thing that runs it",
        fix: "The program is the recipe. The computer is the cook. Same recipe can run on any computer.",
      },
      {
        mistake: "Thinking programs have to be about maths or computers",
        fix: "A program can be about anything — chai, chess, cricket scores, wedding budgets. It's just ordered steps.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "A program in plain English (pseudo-code)",
        code: `START
  Ask the user for their name
  Store the name in memory
  Print "Hello, " followed by the name
END`,
      },
      {
        language: "text",
        title: "The same program in Python",
        code: `name = input("What is your name? ")
print("Hello, " + name)`,
      },
      {
        language: "text",
        title: "The same program in JavaScript",
        code: `const name = prompt("What is your name?");
console.log("Hello, " + name);`,
      },
    ],
    furtherReading: [
      {
        title: "Khan Academy — Intro to programming",
        url: "https://www.khanacademy.org/computing/computer-programming",
      },
      {
        title: "Code.org — What is a program?",
        url: "https://code.org/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 10,
    tags: ["phase--1", "foundations", "concepts"],
  },

  "programming-language": {
    slug: "programming-language",
    title: "What is a programming language?",
    summary:
      "Why we can't just talk to computers in English — and what a language gives us.",
    whyItMatters:
      "Knowing why languages exist helps you pick the right one and understand why Python and JavaScript look the way they do.",
    notes: `If a program is just steps, why do we need a special language? Why can't we just write instructions in English?

Great question. The answer is: **computers don't understand English**.

### The problem with English

Computers only understand one thing: **electrical signals**. On or off. One or zero. That's it.

The very first programmers literally rewired machines and typed in binary — long strings of 0s and 1s:

~~~text
10110000 01100001
~~~

Imagine writing a WhatsApp clone in that. You'd go mad. And if you made one typo — wrong 0 instead of 1 — the whole program breaks.

### The solution — a middle language

So we invented **programming languages**. These are a middle ground: closer to English for us to read, but with a strict grammar that can be reliably translated into 0s and 1s for the computer.

Think of it like this:

- **English** — natural, flexible, full of ambiguity. "Get me some chai, but not too much, and if it's too hot let me know." A human gets it.
- **Computer binary** — 0s and 1s. Unambiguous but unreadable by humans.
- **Programming language** — a structured way to say things that a human can read and a computer can translate.

### What every programming language has

Every language — Python, JavaScript, Java, C#, Go, whatever — has these same basic building blocks:

**1. Variables** — a named box to store something

~~~python
name = "Ravi"
age = 28
~~~

**2. Instructions** — commands that do something

~~~python
print(name)
~~~

**3. Decisions** — if this, then that

~~~python
if age >= 18:
    print("Adult")
~~~

**4. Repetition** — do this many times

~~~python
for i in range(5):
    print("Hello")
~~~

**5. Functions** — reusable chunks of steps

~~~python
def greet(name):
    print("Hello, " + name)
~~~

Learn these five concepts once, and you can pick up any language in a few weeks. The syntax changes. The ideas don't.

### The big families

Programming languages fall into a few families:

**By purpose:**
- **Web frontend** — runs inside the browser. JavaScript, TypeScript.
- **Web backend** — runs on a server. Python, Java, Node.js, PHP, Go.
- **Desktop apps** — installed on your computer. C#, Java, C++.
- **Mobile apps** — for phones. Swift (iOS), Kotlin (Android), Flutter.
- **Data science / automation** — Python is king.
- **Testing / scripting** — Python, JavaScript, Bash.

**By level:**
- **High-level** — easy to read. Python, JavaScript.
- **Low-level** — closer to the machine. C, Assembly.

For Playwright, you'll use **high-level** languages: Python and TypeScript. Both readable, both friendly.

### What makes a good language for testing

Three things:

1. **Readable** — you'll write hundreds of tests. The code should read like sentences.
2. **Ecosystem** — lots of libraries for automation, HTTP, JSON, assertions.
3. **Community** — when you're stuck, someone has already solved it.

Python and TypeScript both score high on all three. That's why we chose them.

### The same logic, different look

Here's the exact same logic — print a greeting — in three languages:

**Python:**
~~~python
name = "Ravi"
print("Hello, " + name)
~~~

**JavaScript:**
~~~javascript
const name = "Ravi";
console.log("Hello, " + name);
~~~

**Java:**
~~~java
String name = "Ravi";
System.out.println("Hello, " + name);
~~~

Same idea. Slightly different words. Once you learn one language, the others feel like dialects of the same thing.

### You already speak one language

If you know English, you already understand the concept of a language. Programming languages are just dialects with stricter grammar and no small talk. No "how are you, uncle?" allowed. Only useful instructions.`,
    handsOn: `Let's compare three languages side by side.

### Step 1: Open a text file

Create a file called language-compare.txt.

### Step 2: Write the same thing three times

The goal: greet a user by name.

**Version 1 — plain English (pseudo-code):**
~~~text
Ask for a name
Store the name
Print "Hello, " + the name
~~~

**Version 2 — Python style (don't run it yet, just look):**
~~~python
name = input("Name? ")
print("Hello, " + name)
~~~

**Version 3 — JavaScript style:**
~~~javascript
const name = prompt("Name?");
console.log("Hello, " + name);
~~~

### Step 3: Notice the differences

Write down:

- What word creates the variable? (Python: just type the name. JavaScript: needs 'const'.)
- What word prints output? (Python: print. JavaScript: console.log.)
- What character ends a line? (Python: newline. JavaScript: semicolon.)

### Step 4: Notice the similarities

Write down:

- Both have a way to store something in a named box.
- Both have a way to print.
- Both look readable.

### Deliverable

You compared two languages and identified three differences and three similarities. You now see languages as dialects, not as magic.`,
    challenge: `Pick three languages you've heard of — for example, Python, Java, and C++.

Look up (search online) how to do each of these in every language:

1. Print "Hello, world"
2. Add two numbers
3. Check if a number is even or odd

Write each snippet down. You'll notice:

- Some languages are verbose (Java, C++).
- Some are compact (Python).
- All do the same thing.

### Reflection

After looking at all three, which one feels most readable? That's likely the one you'll enjoy learning most.

For most beginners, it's Python. Not because it's "better", but because the grammar is closest to English.`,
    proTips: [
      "Learn the concepts once (variables, decisions, loops, functions). They transfer between every language.",
      "Don't try to learn three languages at once. Master one, then the next takes a week.",
      "Pick a language based on what you want to build, not on what's 'hot'. For automation, Python and TypeScript are ideal.",
      "Read code more than you write, in the beginning. Find examples online and see how people express ideas.",
      "Every language has a style guide. For Python, it's called PEP 8. Follow it — you'll match what everyone else writes.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to learn all languages at once",
        fix: "Pick one. Get comfortable. Then the second one is 10x faster to learn.",
      },
      {
        mistake: "Thinking a language is 'better' than another",
        fix: "Languages are tools. Use the right tool for the job. Python for scripts, JS for browsers, Java for enterprise.",
      },
      {
        mistake: "Judging a language by how many symbols it uses",
        fix: "Compact languages like Python aren't 'simpler'. They just hide more work behind cleaner syntax.",
      },
      {
        mistake: "Avoiding a language because it looks 'scary'",
        fix: "Java and C# look verbose but are extremely well-documented. Reading one program in them makes them friendly.",
      },
      {
        mistake: "Confusing a programming language with a framework or library",
        fix: "React, Playwright, Django are not languages. They are tools written in a language. Python is a language; Playwright is a library.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Same logic, three languages",
        code: `# Python
name = "Ravi"
print("Hello, " + name)

// JavaScript
const name = "Ravi";
console.log("Hello, " + name);

// Java
String name = "Ravi";
System.out.println("Hello, " + name);`,
      },
      {
        language: "python",
        title: "Five building blocks of every language",
        code: `# 1. Variable
age = 25

# 2. Print (instruction)
print(age)

# 3. Decision
if age >= 18:
    print("Adult")

# 4. Loop
for i in range(3):
    print(i)

# 5. Function
def greet(name):
    print("Hello, " + name)

greet("Ravi")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is JavaScript?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
      },
      {
        title: "Python.org — Beginner's guide",
        url: "https://www.python.org/about/gettingstarted/",
      },
      {
        title: "Stack Overflow Developer Survey — Most used languages",
        url: "https://survey.stackoverflow.co/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 12,
    tags: ["phase--1", "foundations", "languages"],
  },

  "compiled-vs-interpreted": {
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
  },

  "python-vs-javascript": {
    slug: "python-vs-javascript",
    title: "Python vs JavaScript",
    summary:
      "The two languages we'll use in this course, and when to use which.",
    whyItMatters:
      "Playwright supports both. Knowing their strengths helps you pick the right one for the right job — and understand why we teach both.",
    notes: `Every coding course has to choose a language. We chose **two**: Python and JavaScript (specifically, TypeScript — a typed version of JavaScript).

Why both? Because each has a superpower.

### Python — the friendly one

Python was created in 1991 by Guido van Rossum, a Dutch programmer. His goal was simple: **make code readable**.

Look at Python:

~~~python
name = "Ravi"
age = 25

if age >= 18:
    print("Welcome, " + name)
~~~

Read it out loud. It almost sounds like English.

**Python's strengths:**
- Extremely readable — code looks like pseudo-code
- Huge standard library (JSON, dates, files, HTTP — all built in)
- Best-in-class for automation, testing, data science
- Simple enough that schools teach it as a first language
- Massive community — every question has been asked already

**Python's weaknesses:**
- Slower than compiled languages
- Not great for browser-based code (it runs on servers, not in browsers)
- Not the first choice for mobile apps

**Where Python shines:**
- Automation scripts
- Playwright tests (Python API)
- Backend servers (with frameworks like Django, FastAPI)
- Data analysis, machine learning
- DevOps tooling

### JavaScript — the browser native

JavaScript was created in 1995 by Brendan Eich, in **10 days**. It was meant to be a tiny scripting language for web pages. Today it runs everywhere.

Look at JavaScript:

~~~javascript
const name = "Ravi";
const age = 25;

if (age >= 18) {
  console.log("Welcome, " + name);
}
~~~

Same idea as Python. Slightly different grammar — curly braces instead of indentation, semicolons at line ends.

**JavaScript's strengths:**
- The **only** language that runs in browsers (this will likely be true for years)
- Runs on servers too (via Node.js)
- Powers almost every interactive website you've used
- Huge ecosystem (npm has millions of packages)
- Perfect for Playwright in its most modern form

**JavaScript's weaknesses:**
- Historically prone to weird bugs (a famous example: "0.1 + 0.2 is not 0.3")
- Without TypeScript, errors hide until runtime
- The ecosystem moves fast — libraries get abandoned
- Some syntax quirks take a while to get used to

**Where JavaScript shines:**
- Any browser-based UI work
- Full-stack web apps (React, Vue, Next.js)
- Node.js backend
- Real-time applications (chat, live dashboards)
- Playwright (native TypeScript API)

### What is TypeScript?

TypeScript is **JavaScript with types**.

In plain JavaScript, you can accidentally do this:

~~~javascript
let age = 25;
age = "twenty five";
~~~

JavaScript happily accepts it. Then later, when you try to do maths with 'age', it crashes — but only when that line runs.

In TypeScript:

~~~typescript
let age: number = 25;
age = "twenty five";
~~~

The compiler refuses to build. You find out **immediately**, not at runtime.

TypeScript catches bugs before you even run the code. It's JavaScript with a safety net. That's why professional teams prefer it.

### So why does Playwright support both?

Playwright's team wants to serve all developers. Python devs want Python. JavaScript devs want JavaScript. Playwright provides both APIs with nearly identical features.

**The TypeScript version is considered the "first-class" one.** It gets new features first. It has the best tooling — the test runner, UI mode, the trace viewer. It's the version the Playwright team itself uses.

**The Python version is equally powerful** but relies on external tools (Pytest for the runner). It's the friendlier choice for beginners and for teams already using Python.

### For this course, here's the plan

**Start with Python.** Reasons:
- Easier syntax to read
- Synchronous API — no async/await to learn on day one
- Pytest is a gentle introduction to testing frameworks
- You'll get to writing real tests faster

**Then learn TypeScript.** Reasons:
- It's Playwright's native language
- Better tooling out of the box
- The version most companies hire for
- Type safety makes large test suites easier to maintain

**By the end, you'll be fluent in both.** That's a rare and valuable skill.

### A quick comparison table

| Aspect | Python | JavaScript / TypeScript |
|---|---|---|
| Readability | Very high | High (TS), medium (JS) |
| Type safety | Optional (type hints) | Compulsory with TS |
| Runs in browser | No | Yes |
| Runs on server | Yes | Yes (Node.js) |
| Playwright support | Yes | Yes (native) |
| Learning curve | Gentle | Slightly steeper |
| Community size | Massive | Massive |
| Job market for testing | Strong | Stronger |
| Best for | Automation, data, backend | Web, frontend, full-stack |

### Don't stress about picking

They're both excellent. Both will teach you the same concepts. Once you've learned one, the other is a two-week holiday.

For your career, being good at both is the real unlock. And that's what we're building.`,
    handsOn: `Write the same program in both languages.

### Step 1: Same problem, two languages

The program:

- Ask the user for two numbers.
- Add them.
- Print the result.

**Python version** — save as calc.py:

~~~python
num1 = int(input("First number: "))
num2 = int(input("Second number: "))
total = num1 + num2
print("Total is: " + str(total))
~~~

Run:

~~~bash
python calc.py
~~~

**JavaScript version** — save as calc.js:

~~~javascript
const num1 = Number(prompt("First number:"));
const num2 = Number(prompt("Second number:"));
const total = num1 + num2;
console.log("Total is: " + total);
~~~

To run JavaScript outside a browser, you need Node.js. If you don't have it yet, don't worry — you can paste this code into your browser console (F12 → Console tab) and it will work.

### Step 2: Compare the two

Write down:

- How do you read input in each?
- How do you convert a string to a number?
- How do you print output?
- What symbols are used for grouping?

### Step 3: Notice the differences

Python uses indentation to group lines. JavaScript uses curly braces.

Python has fewer special characters. JavaScript has more punctuation.

Both do the same thing.

### Deliverable

You wrote the same simple program in Python and JavaScript. You identified three concrete differences between the languages.`,
    challenge: `Extend the calculator with one feature: subtract, multiply, or divide.

**Task 1 — Python version:**

Update calc.py so it asks for an operation (add, subtract, multiply, divide) and does the right thing.

**Task 2 — JavaScript version:**

Do the same in calc.js.

**Task 3 — Compare which felt easier**

Write a short paragraph in a note file:

- Which language felt more readable?
- Which one had fewer characters to type?
- Where did you get stuck in each?

### Bonus

Look up how each language handles errors when the user types "abc" instead of a number. Both have ways. Python has try / except. JavaScript has try / catch. They're similar but worded differently.

Playwright tests use these same patterns for handling failures gracefully.`,
    proTips: [
      "Python was designed for readability. That's why we start with it.",
      "TypeScript is JavaScript with types. If you know JavaScript, TypeScript is a small step up.",
      "Every professional Playwright team uses one of these two languages. Learning both means doubling your job options.",
      "If you're unsure which to learn first, pick Python. It has fewer symbols to memorize.",
      "Don't switch between languages every week. Pick one, get comfortable, then add the other.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to learn Python and JavaScript at the same time",
        fix: "Pick one for at least a month. Then add the second. Trying both at once confuses syntax.",
      },
      {
        mistake: "Thinking JavaScript is 'just for browsers'",
        fix: "Node.js runs JavaScript on servers. You can build an entire backend in JavaScript.",
      },
      {
        mistake: "Assuming Python is slower so it's worse",
        fix: "For automation and testing, Python is plenty fast. The speed difference only matters at massive scale.",
      },
      {
        mistake: "Confusing JavaScript with Java",
        fix: "They are completely different. Java is a statically-typed compiled language used mostly for enterprise apps. JavaScript is a dynamic scripting language for the web.",
      },
      {
        mistake: "Skipping TypeScript and staying on plain JavaScript",
        fix: "TypeScript is now the industry default for new JavaScript projects. Learn it if you're serious about JavaScript.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Greeting in Python",
        code: `name = "Ravi"
age = 25

if age >= 18:
    print("Welcome, " + name)
else:
    print("Sorry, " + name + ", you're too young")`,
      },
      {
        language: "javascript",
        title: "The same in JavaScript",
        code: `const name = "Ravi";
const age = 25;

if (age >= 18) {
  console.log("Welcome, " + name);
} else {
  console.log("Sorry, " + name + ", you're too young");
}`,
      },
      {
        language: "typescript",
        title: "The same in TypeScript (with types)",
        code: `const name: string = "Ravi";
const age: number = 25;

if (age >= 18) {
  console.log("Welcome, " + name);
} else {
  console.log("Sorry, " + name + ", you're too young");
}`,
      },
    ],
    furtherReading: [
      {
        title: "Python.org — Official site",
        url: "https://www.python.org/",
      },
      {
        title: "MDN — JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "TypeScript — Official site",
        url: "https://www.typescriptlang.org/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 12,
    tags: ["phase--1", "foundations", "languages"],
  },

  "how-code-runs": {
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
  },

  "hello-world": {
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
  },
};
