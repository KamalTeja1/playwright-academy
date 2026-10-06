import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
