import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
