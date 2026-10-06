import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
