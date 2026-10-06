import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
