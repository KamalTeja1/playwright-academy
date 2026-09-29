import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "how-to-read-errors": {
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
  },

  "how-to-google-errors": {
    slug: "how-to-google-errors",
    title: "How to Google an error properly",
    summary:
      "Search is a skill. Learn to find the exact answer in seconds, not hours.",
    whyItMatters:
      "Every working developer Googles constantly. The difference between a fast developer and a slow one is often just how they search.",
    notes: `Every developer Googles. The best developers Google better than everyone else.

Search is not a sign of weakness. It is a professional skill. But it is a skill most people never learn to do well.

### The wrong way to search

Wrong: python error help

This returns hundreds of millions of results. None of them are your problem.

Wrong: my code does not work

This describes nothing. Google cannot help.

Wrong: playwright

Way too broad. You will get the homepage, not the answer to your question.

### The right way — three principles

**Principle 1: Include the exact error message**

Copy the last line of your error and paste it into Google, wrapped in quotes. Quotes tell Google to search for this exact phrase. Now you get results about your exact error.

**Principle 2: Include the technology**

Add the language and library. For example, add python and playwright to the search. Now Google knows the context.

**Principle 3: Describe what you were doing**

Add context in plain words. For example: python playwright timeout waiting for selector click.

This tells search engines the context: you tried to click something and it timed out.

### The formula

Here is the exact formula that works for almost every error:

"EXACT ERROR MESSAGE" TECHNOLOGY WHAT YOU WERE DOING

For example:

"SyntaxError: unexpected EOF while parsing" python input

"TimeoutError: waiting for selector" playwright python click

"ModuleNotFoundError: No module named pytest" python

### Shortcut: use Stack Overflow

Most errors you will hit already have answers on Stack Overflow.

If your Google search shows a Stack Overflow result, click it first. It is usually the correct answer, voted up by thousands of developers.

Read the accepted answer (marked with a green checkmark). Then read the top two or three other answers. Sometimes the accepted answer is outdated and a newer answer works better for your version.

### When Stack Overflow does not help

**Trick 1: Search the error without quotes.** Removing the quotes gives you more results, including ones with slightly different wording.

**Trick 2: Add the year.** For example: python playwright timeout 2024. Recent results are usually more relevant for fast-moving libraries.

**Trick 3: Search GitHub issues.** Go to github.com and search for the error inside the library's issues. This finds real bugs and discussions from the library maintainers.

**Trick 4: Search the docs directly.** Most libraries have a search feature in their docs. Playwright does. If you know the general topic, search the docs first. It is often faster than Google.

### The mindset

Beginners think: I should know this without looking it up.

Experts think: the answer is thirty seconds away. Let me find it.

Nobody remembers every API. Nobody remembers every error. What matters is how fast you can find the answer and apply it.

### A real example

Say you get this error:

TimeoutError: Timeout 30000ms exceeded waiting for locator text equals Submit

Wrong search: python error

Right search: playwright python "Timeout 30000ms exceeded waiting for locator"

You will get Playwright docs, Stack Overflow threads, and GitHub issues. Within sixty seconds you will know:

- Playwright waited thirty seconds for a Submit button that never appeared
- The button was probably not on the page, or was inside an iframe, or had a different label
- Your fix is to inspect the actual page and use the correct locator

### What good searchers actually do

They copy the error message verbatim. They never retype it. This avoids typos.

They wrap the exact message in quotes. This filters out noise.

They add the technology. This narrows the results.

They read three to five results, not just the first. The best answer is often the second or third.

They click through to the source (the docs or the GitHub issue), not the blog post summary.

They bookmark useful pages. Their browser has a folder called reference full of these.

### When to stop searching and ask for help

Searching is fast, but sometimes you spend two hours on a problem that a colleague could solve in two minutes.

Rule of thumb: search for twenty minutes. If still stuck, ask. The next topic covers exactly how to ask well.`,
    handsOn: `Let us practice searching for real errors.

### Step 1: Generate a real error

Run this Python code: print("Hello" + 5)

You will see: TypeError: can only concatenate str (not int) to str

### Step 2: Search the wrong way first

Open Google. Search: python error

Notice: the results are generic, none of them address your specific error, and you would have to click ten links to find anything useful.

### Step 3: Search the right way

Now search: python "can only concatenate str (not int) to str"

Notice: the first result is usually Stack Overflow with the exact answer. The second and third results are also relevant. You can read the fix in under sixty seconds.

### Step 4: Apply the fix

From the search results, you learned: convert the number to a string first.

Fix the code: print("Hello" + str(5))

Run it. It works.

### Deliverable

You triggered a real error, searched for it the wrong way, searched for it the right way, and applied the fix in under two minutes.`,
    challenge: `Build your search muscle with three real errors.

### Error 1

Run code that uses an undefined variable. Expected search: python "NameError: name undefined_variable is not defined"

### Error 2

Run code that imports a module that is not installed. Expected search: python "ModuleNotFoundError: No module named notinstalledmodule"

### Error 3

Run code that accesses a list index out of range. Expected search: python "IndexError: list index out of range"

For each error:

- Copy the exact error message
- Search with the formula
- Read the top three results
- Apply the fix
- Note down how long it took

### Reflection

Write down how long each search took. If you can find and fix an error in under two minutes, you are on the right track. If a search took longer than five minutes, what went wrong?

### Bonus

Create a text file called searched-errors.md. Every time you search for an error from now on, add an entry with the error, the search you used, the fix, and the link. In six months, this file will save you hours.`,
    proTips: [
      "Always wrap the exact error message in quotes. This is the single biggest improvement you can make.",
      "Use site:github.com to search GitHub issues directly. Add the library name for precision.",
      "Stack Overflow answers with a green checkmark are usually best, but read the next two answers too. Sometimes they are newer.",
      "If a Stack Overflow answer is old, check the date. A 2015 answer for a 2024 library may be outdated.",
      "Bookmark pages you find useful. Build a personal reference folder.",
    ],
    commonMistakes: [
      {
        mistake: "Retyping the error message instead of copying it",
        fix: "Copy and paste. Always. Retyping introduces typos that hide the answer.",
      },
      {
        mistake: "Searching without quotes around the error",
        fix: "Without quotes, Google searches word by word, ignoring your exact phrasing. Quotes preserve it.",
      },
      {
        mistake: "Reading only the first result",
        fix: "Read three to five results. The best answer is often not the first.",
      },
      {
        mistake: "Assuming a Stack Overflow answer is correct because it has many upvotes",
        fix: "Check the date and the version. Older answers may not apply to your case.",
      },
      {
        mistake: "Searching for two hours without asking for help",
        fix: "Twenty minutes is the limit. If still stuck, ask.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The search formula in action",
        code: `Wrong:  python error
Right:  "TypeError: can only concatenate str (not int) to str" python

Wrong:  playwright not working
Right:  playwright python "Timeout 30000ms exceeded waiting for locator"

Wrong:  how to fix my code
Right:  python "ModuleNotFoundError: No module named pytest" install`,
      },
      {
        language: "text",
        title: "Bonus search operators",
        code: `"exact phrase"          Search the exact phrase
site:github.com         Search only GitHub
site:stackoverflow.com  Search only Stack Overflow
-filetype:pdf           Exclude PDFs
2024                    Prefer recent results`,
      },
    ],
    furtherReading: [
      {
        title: "Stack Overflow — How to ask a good question",
        url: "https://stackoverflow.com/help/how-to-ask",
      },
      {
        title: "Google — Advanced search operators",
        url: "https://support.google.com/websearch/answer/2466433",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "search"],
  },

  "how-to-ask-for-help": {
    slug: "how-to-ask-for-help",
    title: "How to ask for help the right way",
    summary:
      "Ask a good question and get a fast answer. Ask a bad one and wait forever.",
    whyItMatters:
      "Every developer needs help sometimes. The ones who ask well get answers in minutes. The ones who ask badly get ignored.",
    notes: `Asking for help is a skill. And like any skill, there is a right way and a wrong way.

The difference between a question that gets a great answer in two minutes and one that gets ignored for two days is not the person asking. It is the way they ask.

### The wrong way to ask

Help, my code does not work.

I have an error, please fix.

Playwright is broken.

Can someone tell me what is wrong?

These questions do not say what you were doing, do not show the error, do not show the code, do not show what you tried. They cannot be answered without twenty back-and-forth messages.

People ignore these questions. Not because they are mean. Because they cannot help until you give them information.

### The five-part formula for a good question

Every great question has these five parts.

**1. What you are trying to do.** For example: trying to click a Login button in Playwright.

**2. What you expected to happen.** For example: after the click, the dashboard loads.

**3. What actually happened.** For example: a timeout error after thirty seconds.

**4. What you tried.** For example: I tried get_by_role, get_by_text, and a CSS selector. All timed out. I checked the page and the button exists. I searched for the error and tried adding wait_for_load_state.

**5. The exact error and code.** Paste the exact error message and the minimal code that reproduces it.

### Putting it together

A great question looks like this.

Subject: Playwright click times out even though button exists

Hi all, I am trying to click a Login button in Playwright (Python 3.11, Playwright 1.40). Expected: after click, the dashboard loads. Actual: timeout after thirty seconds. Error: TimeoutError waiting for locator button with id login. Code: page dot goto login page, then locator of button, then click. Things I tried: get_by_role, get_by_text, adding wait for network idle, checking the DevTools Elements panel. The button is there. I searched for the error and tried the top three Stack Overflow suggestions. Nothing worked. Any ideas? Thanks.

This question will get an answer in minutes. Sometimes seconds.

### Why this works

- It respects the reader's time. No back and forth.
- It shows you have tried things.
- It provides the exact error and code.
- It is specific, not vague.

### The rubber duck method — try this first

Before asking, explain the problem out loud to an imaginary person, or a rubber duck on your desk. This is called rubber duck debugging.

Describe what the code should do, what it actually does, and where you are stuck. Half the time, you will solve the problem yourself during the explanation. Your brain notices gaps in logic when you articulate them.

Many developers have a literal rubber duck on their desk for this reason.

### Where to ask

Stack Overflow for technical questions with clear answers. Follow their How to ask guide or your question gets closed.

Reddit communities like r/learnpython, r/playwright, r/QualityAssurance. Casual and helpful.

Discord servers for Playwright and Pytest. Fast and interactive.

GitHub Issues if you think you found a bug in a library. Read their issue template first.

Your team's Slack or Teams if you are at work. Best for internal questions.

### When NOT to ask

If the answer is in the documentation, read the documentation. Nobody likes being asked questions they already answered in writing.

If you can find it with two minutes of Googling, do that first.

If you have not tried anything yet, try something first. Show effort.

The rule: search for twenty minutes, try three things, then ask.

### How to receive help well

When someone answers: thank them, say whether it worked, give them the new error and code if it did not, and post your solution when you find it yourself.

The last point matters. The next person with the same problem will find your question. If you solved it after asking, update the question with the solution. This is called closing the loop and it makes you a valued community member.

### The mindset

Asking for help is not weakness. It is efficiency.

The smartest people in the industry ask questions constantly. They just ask them well.

You will spend your whole career asking and answering questions. Learn to do both well, and you will be the person everyone wants on their team.`,
    handsOn: `Write a great question even without asking it.

### Step 1: Trigger a real problem

Create a small script that fails. If you do not have Playwright installed yet, use plain Python:

numbers = [1, 2, 3]
print(numbers[10])

You will get an IndexError.

### Step 2: Write a question using the five-part formula

Open a text file called my-question.md. Write:

- What I was trying to do
- What I expected to happen
- What actually happened
- What I tried
- The exact error and code

Do not post it anywhere yet. Just write it.

### Step 3: Read your own question

Imagine you are a stranger reading this question. Could you answer it in two minutes? If yes, it is a good question. If you still need to ask what were you doing or what is the exact error, the question needs work.

### Step 4: Now solve it yourself

Go back to the code. Read your own question. Try to fix it.

Most of the time, writing a clear question exposes the answer. This is the rubber duck effect.

### Deliverable

You wrote a well-structured question and probably solved the problem yourself in the process. That is exactly what experienced developers do every day.`,
    challenge: `Practice asking on a real forum.

Find a real problem. It could be a Python error you cannot fix, a Playwright issue, or a configuration problem.

Then:

1. Search for it first
2. Try three different solutions
3. If still stuck, write a full question using the five-part formula
4. Post it on r/learnpython, r/playwright, or Stack Overflow
5. Wait for answers
6. Respond to whoever helps
7. Post the solution when you figure it out

Track the experience: how long did it take to get an answer, was your question well-received, did you end up solving it yourself.

### Reflection

The first time you post on Stack Overflow, you might get downvoted. This is normal. Read their How to ask guide again, edit your question, and try once more. It is a rite of passage.

### Bonus

Answer someone else's question. Even if you only know the basics, you might know the answer to their specific problem. This is how the community works.`,
    proTips: [
      "Try the rubber duck method first. Explain the problem out loud. You will often solve it before asking.",
      "Include the exact error message, not a paraphrase. Copy and paste it.",
      "Show the minimal code that reproduces the problem. Do not paste five hundred lines.",
      "Say what you already tried. This proves you made an effort and saves the responder time.",
      "If you get a helpful answer, thank the person and post what worked. Close the loop.",
    ],
    commonMistakes: [
      {
        mistake: "Asking without trying anything first",
        fix: "Search for twenty minutes, try three things, then ask. Show effort.",
      },
      {
        mistake: "Not including the exact error message",
        fix: "Copy the error verbatim. Paraphrasing hides the answer.",
      },
      {
        mistake: "Pasting the entire codebase",
        fix: "Provide a minimal reproducible example. Just enough code to trigger the problem.",
      },
      {
        mistake: "Posting on Stack Overflow without reading their How to ask guide",
        fix: "Read it. Stack Overflow is strict. Bad questions get closed fast.",
      },
      {
        mistake: "Not responding when someone helps you",
        fix: "Thank them. Tell them if it worked. Post the solution if you found it yourself.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The five-part question formula",
        code: `1. What I was trying to do
2. What I expected to happen
3. What actually happened
4. What I tried
5. The exact error and minimal code`,
      },
      {
        language: "text",
        title: "Bad question vs good question",
        code: `BAD:
Help, my code does not work. Any ideas?

GOOD:
Playwright button click times out after 30 seconds.
Expected: dashboard loads.
Actual: TimeoutError.
Error: TimeoutError: Timeout 30000ms exceeded waiting for locator.
Tried: get_by_role, get_by_text, wait_for_load_state.
Code: [pasted]
Any ideas?`,
      },
    ],
    furtherReading: [
      {
        title: "Stack Overflow — How to ask a good question",
        url: "https://stackoverflow.com/help/how-to-ask",
      },
      {
        title: "Rubber Duck Debugging",
        url: "https://rubberduckdebugging.com/",
      },
      {
        title: "Writing the perfect question",
        url: "https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "communication"],
  },

  "keyboard-shortcuts-worth-learning": {
    slug: "keyboard-shortcuts-worth-learning",
    title: "Keyboard shortcuts worth learning",
    summary:
      "The shortcuts that save you hours every week, and the order to learn them in.",
    whyItMatters:
      "Professionals use their keyboard. Beginners use their mouse. The difference in speed is enormous over a year.",
    notes: `Shortcuts are not optional if you want to be fast. They are how you go from writing code at twenty words per minute to a hundred.

But there are hundreds of shortcuts. You do not learn them all. You learn a small set that covers ninety percent of your daily work.

### The absolute essentials

Ctrl + C: copy. Ctrl + V: paste. Ctrl + X: cut. Ctrl + Z: undo (your best friend when you break something). Ctrl + Y: redo. Ctrl + S: save. Ctrl + A: select all. Ctrl + F: find in the current file. Ctrl + Shift + F: find across all files. Ctrl + P: quick open file in VS Code. Ctrl + forward slash: comment or uncomment a line.

### VS Code specific

Ctrl + backtick: toggle the built-in terminal.

Ctrl + Shift + P: command palette. Search any VS Code command by name.

Ctrl + B: toggle the sidebar.

Ctrl + D: select the next occurrence of the current word. Perfect for renaming variables.

Alt + Up or Alt + Down: move the current line up or down.

Shift + Alt + Down: duplicate the current line below.

Ctrl + Shift + K: delete the current line.

Ctrl + Enter: insert a new line below.

F2: rename a symbol everywhere it is used. Safe refactoring.

Ctrl + G: go to a specific line number.

Ctrl + Tab: switch between open files.

### Browser shortcuts

F12: open DevTools. Or Ctrl + Shift + I.

Ctrl + Shift + C: inspect element. Toggle the picker, then click any element to see its HTML.

Ctrl + T: new tab. Ctrl + W: close tab. Ctrl + Shift + T: reopen closed tab.

Ctrl + L: focus the address bar.

Ctrl + Shift + R: hard reload ignoring cache.

Ctrl + Shift + M: mobile emulation in DevTools.

### Terminal shortcuts

Ctrl + C: stop the running command. Use this when something is hung.

Ctrl + L: clear the screen.

Up arrow: cycle through your command history.

Tab: autocomplete file and folder names.

Ctrl + R: search through your command history.

### How to learn shortcuts

Do not try to memorize all of these at once.

Week 1: learn Ctrl + C, V, Z, S, and forward slash.

Week 2: add Ctrl + F, P, and Shift + F.

Week 3: add Ctrl + backtick, Ctrl + B, Ctrl + D.

Week 4: add the terminal shortcuts (up arrow, Tab, Ctrl + C).

By the end of a month, these will feel automatic.

### The rule

Every time you reach for the mouse to do something repetitive, ask: is there a shortcut for this?

Google it. Learn it. Use it five times to make it stick.

After a few weeks, you will wonder how you ever worked without them.

### Why this matters more than you think

A developer using shortcuts is roughly thirty percent faster than one who is not. Over a career, that is years of saved time.

But speed is not the real point. The real point is flow. When you are not switching between mouse and keyboard constantly, your mind stays focused on the problem. Shortcuts are not about typing faster. They are about thinking faster.

### The mindset

Every professional you admire uses shortcuts unconsciously. They are not geniuses who type faster than you. They have practiced small habits for years.

You can start today. Pick three shortcuts. Use them for a week. Then add three more.

Six months from now, you will not remember how you used to work.`,
    handsOn: `Practice the essential shortcuts in VS Code.

### Step 1: Create a practice file

Open VS Code in any folder. Create a new file called shortcuts.py.

### Step 2: Type this

name = "Ravi"
age = 25
print("Hello, " + name)
print("Age: " + str(age))

### Step 3: Practice Ctrl + forward slash

Click anywhere in the line with print("Hello, " + name). Press Ctrl + forward slash. The line becomes a comment. Press it again to uncomment.

### Step 4: Practice Ctrl + D

Double-click the word name to select it. Press Ctrl + D. Both occurrences of name are now selected. Type person. Both occurrences change at once. That is fast renaming.

### Step 5: Practice Alt + Up and Alt + Down

Click on the line with print("Age: " + str(age)). Press Alt + Up. The line moves up. Press Alt + Down to move it back.

### Step 6: Practice Ctrl + Shift + K

Click on any line. Press Ctrl + Shift + K. The line is deleted instantly.

### Step 7: Practice Ctrl + Shift + P

Press Ctrl + Shift + P. Type "format". Click "Format Document". Your code is auto-formatted.

### Deliverable

You practiced five essential VS Code shortcuts and felt how much faster they are than clicking menus.`,
    challenge: `Learn three shortcuts you did not know and use them for a week.

Pick three shortcuts from the notes that you have not used before. Good candidates: Ctrl + R in the terminal (search history), F2 for rename symbol, Ctrl + Shift + T in the browser (reopen closed tab), Ctrl + Shift + R (hard reload).

Use them daily for a week. After one week, reflect: which one saved you the most time, which one felt awkward but is now natural, which one did you forget to use and why.

### Bonus

Find the keyboard shortcut cheat sheet for your OS. VS Code: Help menu, Keyboard Shortcut Reference. Chrome: Settings, Keyboard shortcuts. Print it. Stick it near your monitor.

### Reflection

Shortcuts feel weird for three days. On day five, they feel natural. On day ten, you cannot imagine going back. Stick with them.`,
    proTips: [
      "Learn three shortcuts a week. Any more and you will forget them all.",
      "If you keep reaching for the mouse for the same action, that is a signal to learn the shortcut.",
      "F2 (rename symbol) is the safest way to rename a variable across a whole file. Never use find and replace for this.",
      "Ctrl + Shift + P is your universal search for VS Code features. When you forget a shortcut, search there.",
      "Enable format on save in VS Code. Every save auto-formats, and you never think about indentation again.",
    ],
    commonMistakes: [
      {
        mistake: "Trying to learn fifty shortcuts at once",
        fix: "Learn three per week. Build muscle memory slowly.",
      },
      {
        mistake: "Using the mouse for common actions because it is familiar",
        fix: "Force yourself to use the shortcut for three days. After that, it is faster than the mouse.",
      },
      {
        mistake: "Not knowing that Ctrl + forward slash comments code",
        fix: "It is the most used shortcut for coders. Learn it today.",
      },
      {
        mistake: "Ignoring terminal shortcuts",
        fix: "The up arrow, Tab, and Ctrl + R will save hours over a year.",
      },
      {
        mistake: "Never customizing shortcuts",
        fix: "If a shortcut is awkward on your keyboard layout, remap it in VS Code settings.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The core ten, memorize these first",
        code: `Ctrl + C            Copy
Ctrl + V            Paste
Ctrl + Z            Undo
Ctrl + S            Save
Ctrl + /            Comment line
Ctrl + F            Find
Ctrl + P            Quick open file
Ctrl + Shift + P    Command palette
Ctrl + backtick     Toggle terminal
Ctrl + B            Toggle sidebar`,
      },
      {
        language: "text",
        title: "Terminal essentials",
        code: `Up arrow      Previous command
Tab           Autocomplete file/folder name
Ctrl + C      Stop running command
Ctrl + L      Clear screen
Ctrl + R      Search command history`,
      },
      {
        language: "text",
        title: "Browser essentials",
        code: `F12              Open DevTools
Ctrl + Shift + C Inspect element
Ctrl + Shift + R Hard reload
Ctrl + Shift + M Mobile emulation
Ctrl + T         New tab
Ctrl + W         Close tab
Ctrl + Shift + T Reopen closed tab`,
      },
    ],
    furtherReading: [
      {
        title: "VS Code — Keyboard shortcuts (Windows)",
        url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
      },
      {
        title: "VS Code — Keyboard shortcuts (macOS)",
        url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf",
      },
      {
        title: "Chrome — Keyboard shortcuts",
        url: "https://support.google.com/chrome/answer/157179",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "productivity"],
  },

  "folder-organization": {
    slug: "folder-organization",
    title: "Folder organization for learning projects",
    summary:
      "Where to put your practice projects so you never lose anything again.",
    whyItMatters:
      "A clean folder structure saves you minutes every time you open your editor. Over a year, that is days.",
    notes: `Where do you save your practice projects?

If the answer is wherever I happen to be or on my desktop, you are setting yourself up for chaos. Files everywhere. Half-finished projects in random folders. Duplicate versions called project-final-final-v2.

Let us fix this once. Ten minutes of setup saves months of mess.

### The single most important rule

Every project gets its own folder.

Not a file inside another project. Not a subfolder of your downloads. A dedicated folder for the project. Just the project.

Every file related to that project lives inside it. Nothing lives outside.

This is how professional developers work. It is also how they avoid the endless where is that file problem.

### The recommended structure

Here is a clean layout that works for learning.

Inside your home folder, create a folder called projects. Inside it, create three folders: learning, experiments, portfolio.

Inside learning, you will have folders like python-basics, pytest-practice, playwright-python, playwright-typescript.

Inside experiments, quick tests like scraping-demo or api-testing.

Inside portfolio, your best work like playwright-academy or ecommerce-tests.

Let us break this down.

The projects folder is your root folder for all coding work. Just one. Nothing else lives in your home directory.

The learning folder holds practice projects, tutorials, courses. Things you are doing to learn, not to show off.

The experiments folder holds quick tests, random scripts, ideas you are exploring.

The portfolio folder holds your best work. Things you want to show employers. Your Playwright Academy app goes here.

### Inside each project

Every project follows the same structure inside.

At the top: README.md (what this project is), .gitignore (what Git should ignore), and requirements.txt (if Python) or package.json (if JavaScript).

Then folders: tests, pages, data, utils. And a .env file for secrets.

You do not need every folder for every project. But the ones you use should follow this pattern consistently. When you move between projects, they all look familiar.

### Naming conventions

Folders: lowercase, hyphens or underscores. Never spaces.

Good: python-basics, playwright-python, ecommerce-tests

Bad: Python Basics, PlaywrightPython, My Tests

Files: lowercase, underscores for Python (PEP 8), hyphens or dots for others.

Good: test_login.py, login.spec.ts, users.json

Bad: TestLogin.py, LOGIN.SPEC.TS, USERS.JSON

Test files follow the convention of your framework. Pytest expects test_login.py, starting with test underscore. Playwright Test expects login.spec.ts, ending with .spec.ts.

### What to put in each folder

The tests folder has only test files. No helpers, no data.

The pages folder has Page Object Model classes. One file per page.

The data folder has JSON, YAML, or CSV files with test data.

The utils folder has helper functions.

The .env file has environment variables. This file goes in .gitignore.

The README.md is a short description of the project. Keep it up to date.

### What NOT to do

Do not put projects on your Desktop. Desktops are for quick access, not for storage. Over time they become a graveyard of forgotten folders.

Do not nest projects inside projects. If project B is inside project A, both get confusing.

Do not use spaces in folder names. The terminal and Git both hate them.

Do not duplicate the project folder just in case. Use Git for versioning.

Do not mix learning projects with work projects. Different folders. Different mental models.

### Cleaning up an existing mess

If your current folder structure is a mess, here is how to fix it.

Create a projects folder with the three subfolders. Create a to-sort folder on your Desktop. Move every random code folder into to-sort. Go through to-sort one folder at a time. Decide: learning, experiment, portfolio, or delete. Move each folder to its new home. Delete to-sort when empty.

This takes thirty minutes if you have been coding for a while. It saves hours.

### Why this matters

A clean structure means you open VS Code and instantly know where things are. You never accidentally commit the wrong file. Your tests run against the right data. Your future self thanks you.

A mess means you waste five to ten minutes per session finding things. You accidentally edit an old version. You lose track of what is where. You dread starting new projects.

The setup cost is ten minutes. The payoff is every single day.

### The one habit

Before you start any project, create the folder first.

Before you save any file, know which folder it goes in.

Before you commit, check the structure.

Three habits. Clean forever.`,
    handsOn: `Set up your permanent folder structure.

### Step 1: Create the root folder

Open your terminal. Navigate to your home directory.

cd tilde symbol

Create the projects folder with three subfolders using mkdir dash p.

### Step 2: Verify

List what you created with ls projects. You should see three folders: learning, experiments, portfolio.

### Step 3: Move existing projects

If you have existing practice projects scattered around, move them into the appropriate folder. For example, if you have a folder called hello on your desktop, use mv to move it into projects/learning.

### Step 4: Open it in VS Code

cd into projects and run code dot to open it. You now see all your projects in the sidebar.

### Step 5: Create a README for the root

In the projects folder, create a file called README.md with a short description of the three subfolders.

### Deliverable

You have a clean projects folder with three subfolders. Every future project goes into one of these. No more scattered files.`,
    challenge: `Clean up one existing messy folder.

Pick one folder on your computer that is a mess. Could be your Downloads folder, your Desktop, or an old code folder with random files.

### Survey

List every file and folder. How many are code projects, random files, duplicates, or old junk you do not need?

### Sort

Move real projects to the projects folder. Delete duplicates and old junk. Move non-code files to the right place.

### Verify

Your folder should now have very few items. Maybe zero. That is the goal.

### Reflection

How much stuff did you find that you had forgotten about? Most people find five to ten forgotten projects in their downloads folder.

Now you have a system. Every future project goes into your projects folder from day one. No more chaos.

### Bonus

Take a screenshot of your clean projects folder. Whenever you feel disorganized, look at the screenshot and remember: it is possible.`,
    proTips: [
      "Every project gets its own folder. No exceptions.",
      "Use lowercase and hyphens for folder names. Never spaces.",
      "Open the parent folder in VS Code, not individual projects. You see everything at once.",
      "Add a .gitignore in every project from day one, before you even commit.",
      "Your best projects go in the portfolio folder. Future employers will look at your GitHub.",
    ],
    commonMistakes: [
      {
        mistake: "Saving projects to the Desktop",
        fix: "Use a projects folder. Desktops become graveyards.",
      },
      {
        mistake: "Using spaces in folder names",
        fix: "Use hyphens or underscores. Spaces cause endless terminal problems.",
      },
      {
        mistake: "Mixing learning, experiments, and portfolio projects",
        fix: "Keep them separate. Learning can be messy. Portfolio should be polished.",
      },
      {
        mistake: "Nesting projects inside other projects",
        fix: "Each project is independent. No project should be a subfolder of another.",
      },
      {
        mistake: "Not knowing where a file is",
        fix: "Use Ctrl + P in VS Code to find any file by name. If you cannot find it, your structure is broken.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The recommended folder structure",
        code: `~/projects/
  learning/
    python-basics/
    pytest-practice/
    playwright-python/
  experiments/
    scraping-demo/
    api-testing/
  portfolio/
    playwright-academy/
    ecommerce-tests/`,
      },
      {
        language: "text",
        title: "Inside a typical Playwright project",
        code: `playwright-python/
  tests/
    test_login.py
    test_search.py
  pages/
    login_page.py
    search_page.py
  data/
    users.json
  utils/
    helpers.py
  .gitignore
  requirements.txt
  pytest.ini
  README.md`,
      },
      {
        language: "bash",
        title: "The setup commands",
        code: `cd ~
mkdir -p projects/learning projects/experiments projects/portfolio
cd projects
code .`,
      },
    ],
    furtherReading: [
      {
        title: "GitHub — Repo naming conventions",
        url: "https://github.com/github/gitignore",
      },
      {
        title: "Real Python — Structuring your project",
        url: "https://docs.python-guide.org/writing/structure/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "organization"],
  },

  "taking-notes-while-learning": {
    slug: "taking-notes-while-learning",
    title: "Taking notes during learning",
    summary:
      "How to take notes that actually help you learn, not just fill pages.",
    whyItMatters:
      "Learning without notes is like eating without tasting. You swallow a lot but remember little. Notes turn information into knowledge.",
    notes: `You are going to learn hundreds of concepts over the next few months. Python, Playwright, testing, Git, TypeScript. If you do not take notes, you will forget eighty percent of it within a week.

Taking notes is not about writing everything down. It is about writing the right things in a way your future self can use.

### The wrong way to take notes

Copying everything from a tutorial into a document. You end up with five hundred lines of text you never read again.

Highlighting every important sentence in a book. Highlights feel productive but do nothing.

Taking notes without any structure. Random thoughts across ten files.

Watching tutorials without writing anything. You think you will remember. You will not.

### The right way: take notes for your future self

Imagine you in three months. You are working on a real project. You hit a problem you solved before but cannot remember the solution.

Your notes should answer this exact question. If they do not, they are not useful notes.

### The three types of notes you need

**Type 1: Concept notes**

The big ideas. What is a locator? What is a fixture? What is a context?

Write a short definition in your own words. Not the textbook definition. Your version.

Example: a fixture in Pytest is a function that runs setup before a test. Used for things like creating a browser, logging in a user, or setting up test data. Tests ask for fixtures as arguments.

**Type 2: Command notes**

The commands you use over and over. The terminal ones, the Git ones, the Playwright ones.

You will forget them. Everyone does. Write them down.

Example: git reset dash dash soft HEAD tilde 1 undoes the last commit but keeps changes.

**Type 3: Problem and solution notes**

Every time you solve a problem, write it down. This is the most valuable type of note.

Example: problem: Playwright click timing out on a button. Tried: get_by_role, get_by_text, CSS selector. Solution: the button was inside an iframe. Needed frame_locator first. Lesson: always check if the element is inside an iframe when clicks fail.

These notes become your personal knowledge base. In six months, you will have a mini-book that nobody else has, tailored exactly to the problems you have faced.

### How to structure your notes

Use Markdown files. They are plain text, work everywhere, and render beautifully on GitHub.

One file per topic or project. Do not put everything in one giant file.

Suggested structure: create a notes folder in your home directory. Inside it, have python-notes.md, playwright-notes.md, git-notes.md, problems-solved.md, and commands-cheatsheet.md.

The commands-cheatsheet.md file is the one you will read most. Every command you learn goes there.

### What to write

For each concept: one-line definition in your own words, one example, one gotcha or pitfall.

That is it. Three lines per concept. Not a page. Three lines.

If you cannot write a concept in three lines, you do not understand it yet.

### When to write

Right when you learn something. Not later. Not tonight. Now.

In the moment, you understand it. An hour later, you have already forgotten the details. Write immediately.

### How to review

Read your notes weekly. Not skim. Read.

Read the commands-cheatsheet every Monday. Read problems-solved before starting a new feature.

Notes are useless if you never review them.

### The Markdown advantage

Markdown is text with simple formatting. You can write it in any editor. It renders as a nice HTML page on GitHub.

Basic Markdown: a hash symbol makes a heading. A dash makes a bullet. Two asterisks around a word make it bold. One asterisk makes it italic.

If you have never used Markdown, learn the basics. It takes ten minutes and saves you for a lifetime.

### The one habit that matters

After every learning session, write one thing you learned.

One. Not five. Not ten. One.

Over ninety days, that is ninety notes. Over a year, three hundred sixty-five. You will have built a personal reference that no tutorial can match.

### Why this matters more than you think

Most people learn without notes. They forget. They relearn. They forget again.

The people who take notes accumulate knowledge. Six months in, they know five times more than someone who did not.

Notes are the compound interest of learning. Small daily effort, massive long-term payoff.

### The mindset

Your notes are not for anyone else. They are for you in six months, in one year, in five years.

Write for that person. They will thank you.`,
    handsOn: `Set up your notes folder and write your first note.

### Step 1: Create the notes folder

In your terminal: cd to your home, then mkdir notes, then cd notes, then open it in VS Code.

### Step 2: Create your first three files

In VS Code, create these three files: commands-cheatsheet.md, problems-solved.md, concepts.md.

### Step 3: Fill in the command cheatsheet

Open commands-cheatsheet.md and add the commands you have learned so far in this course. Terminal commands like pwd, ls, cd, mkdir, touch, cat. Git commands like git init, git add, git commit, git push. Python commands like python file.py and pip install.

### Step 4: Write one concept

Open concepts.md and write one concept in your own words. For example, a virtual environment is a private Python sandbox for one project. Keeps packages separate from other projects.

### Step 5: Add one problem

Open problems-solved.md and write one problem you have already solved. For example, if you have ever fixed a TypeScript error, describe it here.

### Deliverable

You have a notes folder with three Markdown files. You will add to these for the rest of the course.`,
    challenge: `Build a habit.

For the next seven days, after every learning session, add one note to one of your three files.

Rules: the note must be about something you learned that day. It must be at least two lines. It must be in your own words, not copied from the tutorial.

At the end of seven days, review: how many notes did you write, which file has the most entries, did writing notes help you remember.

### Bonus

Open your notes folder in VS Code and set up a keyboard shortcut to open it quickly. Or create a habit of opening notes automatically when you start a session.

### Reflection

Most people who start a daily note habit keep it for life. It is the single highest-leverage habit for long-term learning.

Write down why this habit might be worth keeping. Then keep it.`,
    proTips: [
      "Write in your own words. Copying the textbook is not learning, it is transcription.",
      "Three lines per concept is enough. If you cannot fit it in three lines, you do not understand it yet.",
      "Keep a commands-cheatsheet.md. It will be your most-used file.",
      "Review your notes every Monday. Notes you never read are wasted effort.",
      "Use Markdown. It is plain text, works everywhere, and renders nicely on GitHub.",
    ],
    commonMistakes: [
      {
        mistake: "Copying entire tutorials into notes",
        fix: "Write only what helps future-you. Definitions, gotchas, examples you wrote yourself.",
      },
      {
        mistake: "Not taking notes at all because it feels slow",
        fix: "Three lines per concept is enough. The time saved from relearning is enormous.",
      },
      {
        mistake: "Writing notes but never reviewing them",
        fix: "Read your cheatsheet every Monday. It takes five minutes.",
      },
      {
        mistake: "Putting everything in one giant file",
        fix: "Separate files for commands, concepts, and problems. Easier to find.",
      },
      {
        mistake: "Waiting until the end of the day to write notes",
        fix: "Write immediately. Details fade within an hour.",
      },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "concepts.md — one concept per entry",
        code: `## Fixture (Pytest)
A function that runs setup before a test. Tests ask for fixtures
as arguments. Used for browsers, logins, test data.

## Locator (Playwright)
A lazy reference to an element on the page. Resolves when used.
Prefer role-based locators for stability across redesigns.`,
      },
      {
        language: "markdown",
        title: "commands-cheatsheet.md — the commands you forget",
        code: `## Git
- git status                See what changed
- git diff                  See the actual changes
- git log --oneline         See history
- git reset --soft HEAD~1   Undo last commit, keep changes

## Playwright
- playwright install         Download browsers
- pytest --headed            Run tests with visible browser
- pytest -k "login"          Run only tests matching login`,
      },
      {
        language: "markdown",
        title: "problems-solved.md — the most valuable file",
        code: `## Playwright timeout on iframe element
Symptoms: TimeoutError waiting for a button that exists.
Root cause: Button was inside an iframe.
Fix: use frame_locator first, then get_by_role on the button.
Lesson: If a click times out but the element exists, check for iframes.`,
      },
    ],
    furtherReading: [
      {
        title: "Markdown Guide",
        url: "https://www.markdownguide.org/",
      },
      {
        title: "Obsidian — a note-taking app for developers",
        url: "https://obsidian.md/",
      },
      {
        title: "Stack Overflow — How to write good documentation",
        url: "https://stackoverflow.com/help/how-to-ask",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "soft-skills", "learning"],
  },
};