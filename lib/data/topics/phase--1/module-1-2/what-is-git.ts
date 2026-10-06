import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-git",
    title: "What is Git?",
    summary:
      "A save-point system for your code — so you can always go back to a working version.",
    whyItMatters:
      "Every professional project uses Git. It's how you protect your work, collaborate with teammates, and never lose progress again.",
    notes: `**Git** is a **version control system**. That's the technical term. In plain English: **a save-point system for your code**.

Think of a video game. You play for a while, you reach an important milestone, you save. If you die later, you restart from the save, not from the beginning.

Git does this for code. Every time you reach a good state, you "commit" (save). If a later change breaks everything, you go back to the last commit and try again.

### The problem Git solves

Imagine you're writing a 500-line Playwright test file. It works. Then you try to add a new feature. Now it's broken. You've made 50 changes since it worked, and you can't remember which one broke it.

Without Git: you're stuck. You rewrite from scratch or painstakingly undo changes.

With Git: you run:

~~~bash
git checkout .
~~~

You're back to the last commit — the version that worked. Problem solved in one second.

### Real-life analogy

Think of writing a very important letter on paper.

**Without Git:** every time you edit, you cross out the old text and write the new. After 20 edits, the page is unreadable. You can't remember what you changed.

**With Git:** each edit is written on a fresh copy. You staple the pages in order. If you don't like edit #15, you can go back to page 14 and continue from there.

Git gives you a **filing cabinet** of versions instead of one messy paper.

### The three things Git tracks

**1. Your files**

The contents of every file in your project. When you commit, Git saves a snapshot of every file.

**2. The history**

Every commit has a timestamp, an author, and a message describing what changed.

**3. The differences**

Git can show you exactly what changed between two commits — line by line.

### The four basic Git commands

You'll use these every day:

**\`git init\`** — "Start tracking this folder"
Run once per project.

**\`git add .\`** — "Include all my changes in the next save"
Adds every changed file to the staging area.

**\`git commit -m "message"\`** — "Save these changes with this description"
Creates a snapshot. The message is your note about what you did.

**\`git push\`** — "Send my saves to a remote server (like GitHub)"
Uploads your commits. More on this in the GitHub lesson.

### What's a commit message?

A commit message is a short description of what you changed. Good messages tell a story:

Bad:
~~~text
update
fixed stuff
changes
~~~

Good:
~~~text
Add login test for valid credentials
Fix flaky test by increasing timeout
Refactor page objects to use base class
~~~

Reading the history of a well-committed project feels like reading a diary. Every line tells you why a change was made.

### What Git does NOT do

- **It's not GitHub.** Git is the tool. GitHub is a website that hosts Git projects. They're related but different.
- **It's not a backup.** You still need backups. Git tracks changes, not files that were never committed.
- **It's not automatic.** You have to commit. Git doesn't save anything until you tell it to.
- **It doesn't work on binary files well.** Git tracks code and text very well. Images, videos, and executables less so.

### Branches — the killer feature

Once you're comfortable with the basics, Git introduces **branches**.

A branch is a parallel version of your project. You can:

- Keep the main version stable
- Work on a new feature in a branch
- Test it freely without breaking the main version
- Merge it back when it works

Most teams work this way. You'll learn it in Phase 3 or 4.

### Why testers need Git

As a Playwright engineer:

- Every test file you write is tracked in Git
- Every bug fix has a commit
- You can see who changed what and when
- Collaborating with developers works smoothly

When something breaks in CI, you check the git history to see what changed. It's how professional debugging works.

### The mindset

Commit early, commit often. Every commit is a save-point.

Not committing because "it's not finished yet" is a beginner mistake. Half-finished work with a clear message ("WIP: adding login test") is better than no save at all.

The more save-points you have, the safer you are.`,
    handsOn: `Let's set up Git on your first project and make a commit.

### Step 1: Check Git is installed

In the terminal:

~~~bash
git --version
~~~

You should see something like:

~~~text
git version 2.42.0
~~~

If it says "command not found", install Git first (see Phase 0 Module 0.1 for details).

### Step 2: Configure Git (once ever)

~~~bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
~~~

Replace with your real name and email. Use the same email as your GitHub account later.

### Step 3: Create a new project

~~~bash
cd ~
mkdir git-practice
cd git-practice
~~~

### Step 4: Turn it into a Git project

~~~bash
git init
~~~

You'll see:

~~~text
Initialized empty Git repository in /Users/kamal/git-practice/.git/
~~~

A hidden \`.git\` folder was created. That's where all the history lives. Don't touch it.

### Step 5: Create a file

~~~bash
touch hello.py
~~~

Open \`hello.py\` in VS Code and add:

~~~python
print("Hello from Git practice!")
~~~

Save.

### Step 6: Check status

~~~bash
git status
~~~

You'll see:

~~~text
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hello.py
~~~

"Untracked" means Git sees the file but isn't saving changes yet.

### Step 7: Add the file

~~~bash
git add .
~~~

The \`.\` means "all files in the current folder and below".

Run \`git status\` again:

~~~text
Changes to be committed:
        new file:   hello.py
~~~

The file is now "staged" — ready to commit.

### Step 8: Commit it

~~~bash
git commit -m "Add first hello world file"
~~~

You'll see:

~~~text
[main (root-commit) a1b2c3d] Add first hello world file
 1 file changed, 1 insertion(+)
 create mode 100644 hello.py
~~~

That's a save-point. Your code is now tracked.

### Step 9: Make a change and see the difference

Edit \`hello.py\`:

~~~python
print("Hello from Git practice!")
print("This is my second line.")
~~~

Save. Run:

~~~bash
git status
~~~

You'll see:

~~~text
Changes not staged for commit:
        modified:   hello.py
~~~

Git knows the file changed since the last commit.

### Step 10: Commit the change

~~~bash
git add .
git commit -m "Add second line to hello"
~~~

Now you have two commits. Run:

~~~bash
git log --oneline
~~~

You'll see both commits listed.

### Deliverable

You created a Git repo, made two commits, and can read the git log. You now understand the workflow: edit → add → commit.`,
    challenge: `Let's practice the "undo" superpower.

### Task 1: Make a "bad" change

Edit \`hello.py\`:

~~~python
print("This is broken")
print("I regret everything")
this_is_not_valid_python = )
~~~

Save. Run:

~~~bash
python hello.py
~~~

You'll see a syntax error. Good.

### Task 2: Undo the bad change using Git

~~~bash
git checkout .
~~~

That command means "throw away all changes since the last commit". Run:

~~~bash
cat hello.py
~~~

The file is back to your last committed version. The bad change is gone.

### Task 3: Do it again intentionally

Make another bad change. This time, look at the difference first:

~~~bash
git diff
~~~

This shows exactly what's different from the last commit — line by line, with colors. Then undo:

~~~bash
git checkout .
~~~

### Reflection

Now you understand why Git exists. It's not about "saving files". It's about being able to **confidently experiment** because you can always go back.

That confidence changes how you write code. You try things. You break things. You fix them. You commit. That's the cycle.`,
    proTips: [
      "Commit early, commit often. Small commits are easier to review and undo.",
      "Write commit messages in the present tense: 'Add login test' not 'Added login test'.",
      "Never commit secrets (passwords, API keys, tokens). Use `.gitignore` and `.env` files.",
      "Run `git status` before every commit. It shows exactly what's about to be saved.",
      "Use `git diff` to see uncommitted changes. Best way to double-check before committing.",
    ],
    commonMistakes: [
      {
        mistake: "Confusing Git with GitHub",
        fix: "Git is the tool on your computer. GitHub is a website that hosts Git projects. Related, not the same.",
      },
      {
        mistake: "Committing everything in one giant commit",
        fix: "Small, focused commits are better. One logical change per commit.",
      },
      {
        mistake: "Writing vague commit messages",
        fix: "'Fix bug' tells nothing. 'Fix login test failing on slow networks' tells everything.",
      },
      {
        mistake: "Forgetting to commit and losing work",
        fix: "Commit at every small milestone. If you go 4 hours without committing, you're going too long.",
      },
      {
        mistake: "Committing sensitive files",
        fix: "Never commit `.env` files, credentials, or API keys. Add them to `.gitignore` before the first commit.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "The Git workflow you'll use every day",
        code: `git status                       # What's changed?
git diff                         # Show me the actual changes
git add .                        # Stage everything
git commit -m "Add login test"   # Save with a message
git log --oneline                # See the history`,
      },
      {
        language: "bash",
        title: "Undo operations",
        code: `git checkout .              # Discard changes since last commit
git reset HEAD file.py      # Unstage a file
git reset --soft HEAD~1     # Undo the last commit (keep changes)
git reset --hard HEAD~1     # Undo the last commit AND discard changes`,
      },
      {
        language: "bash",
        title: "Setup on a new machine",
        code: `git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list              # See all your config`,
      },
    ],
    furtherReading: [
      {
        title: "Git — The Simple Guide (short & friendly)",
        url: "https://rogerdudler.github.io/git-guide/",
      },
      {
        title: "Pro Git Book — free, comprehensive",
        url: "https://git-scm.com/book/en/v2",
      },
      {
        title: "Oh Shit, Git!?! — how to fix common mistakes",
        url: "https://ohshitgit.com/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "basics", "git"],
  };

export default topic;
