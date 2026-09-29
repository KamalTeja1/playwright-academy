import type { TopicContent } from "../types";

export const topics: Record<string, TopicContent> = {
  "files-and-folders": {
    slug: "files-and-folders",
    title: "Files and folders — what they actually are",
    summary:
      "Files hold information. Folders organize files. Simple, but worth getting right.",
    whyItMatters:
      "Every project you build will live in a folder. Every test you write will be a file. Understanding this mental model makes everything else click.",
    notes: `Before we touch code, let's get one thing crystal clear. **Files** and **folders** — what are they really?

### A file is a container for information

A file is a single unit of data stored on your computer. It could be:

- A photo (the file holds the image)
- A song (the file holds the audio)
- A document (the file holds text)
- A Python script (the file holds code)

The file is just a box with a name. Open the box, and you see the contents.

### A folder is a container for files

A folder (also called a **directory**) is a box that holds other files or other folders.

You can nest folders inside folders, like a set of boxes inside boxes. This is how your entire computer is organized — millions of files, grouped into folders, into more folders, into more folders.

### Real-life analogy

Think of a physical almirah in a house.

The almirah has shelves. Each shelf has labeled compartments. Inside each compartment, there are individual items — a shirt, a book, a folder of old letters.

- **Almirah** = your computer's hard drive
- **Shelves** = top-level folders
- **Compartments** = sub-folders
- **Items inside** = individual files

When you want a specific shirt, you don't search the entire almirah. You open the right shelf, then the right compartment, then pick up the shirt.

Computers work the same way. A file's location is described by the **folders it lives inside**.

### The tree structure

Every computer organizes files in a **tree**:

~~~text
My Computer/
├── Users/
│   └── Kamal/
│       ├── Documents/
│       │   ├── resume.pdf
│       │   └── notes.txt
│       ├── Pictures/
│       │   └── family.jpg
│       └── Projects/
│           ├── hello/
│           │   └── hello.py
│           └── playwright/
│               └── tests/
~~~

Notice:
- The top is the root (your computer)
- Every indented item lives inside the one above it
- The same name can appear in different folders — they're separate files

### Files have names and extensions

The name of a file usually has two parts:

~~~text
resume.pdf
hello.py
family.jpg
notes.txt
~~~

- **Name** — "resume", "hello", "family", "notes"
- **Extension** — ".pdf", ".py", ".jpg", ".txt"

The extension tells the computer what kind of file it is. It's like the label on an envelope — "this is a photo", "this is code", "this is a text document".

The computer uses the extension to decide what program should open the file. Double-clicking "resume.pdf" opens your PDF reader. Double-clicking "hello.py" opens your code editor.

### Folders usually don't have extensions

You'll rarely see "Photos.doc" as a folder name. Folders are just named, no extension. This is one way to tell them apart at a glance.

### Why this matters for Playwright

Every Playwright project looks like this:

~~~text
my-project/
├── tests/
│   ├── login_test.py
│   └── checkout_test.py
├── pages/
│   └── login_page.py
├── requirements.txt
└── README.md
~~~

Every file, folder, and extension has a purpose:
- **tests/** — where test files live
- **pages/** — where page objects live
- **login_test.py** — an actual test file
- **requirements.txt** — a list of packages needed
- **README.md** — documentation

If you can't tell a file from a folder, or don't know what a .py extension means, this structure is confusing. But with the mental model above, it's obvious.

### The one habit to build

When you save anything, always know **which folder it's going into**. Random saving leads to random folder chaos. You'll lose files, confuse yourself, and waste hours.

Every file has a home. Every home has a reason.`,
    handsOn: `Let's explore your own computer's file structure.

### Step 1: Open your file manager

- **Windows:** Open File Explorer (Win + E)
- **Mac:** Open Finder
- **Linux:** Open Files

### Step 2: Navigate to your home folder

- **Windows:** Usually \`C:\\Users\\YourName\`
- **Mac:** Click the house icon in Finder
- **Linux:** Usually \`/home/yourname\`

### Step 3: Notice the structure

- What top-level folders do you see? (Documents, Downloads, Pictures, etc.)
- Click into Documents. What's inside?
- Click into a sub-folder. What's inside that?

### Step 4: Create a practice folder

Inside your Documents (or home) folder, create a new folder called \`coding-practice\`.

Inside \`coding-practice\`, create another folder called \`hello\`.

Inside \`hello\`, create an empty text file called \`first.txt\`.

### Step 5: Look at the full path

- **Windows:** In File Explorer, click the address bar. You'll see the full path like \`C:\\Users\\YourName\\Documents\\coding-practice\\hello\`
- **Mac:** Right-click the \`hello\` folder → **Get Info** → look at "Where:"

That long text is the **absolute path** — the exact location of your folder.

### Deliverable

You created a folder inside a folder inside a folder, and you can identify the full path to your deepest folder. You now think in terms of "folder tree".`,
    challenge: `Draw your computer's folder structure on paper.

Start from your home folder and go two levels deep. For each folder, note:

- The folder name
- What kind of files are usually inside
- Whether you'd organize it differently

Example:

\`\`\`
Home/
├── Documents/
│   ├── Work/
│   └── Personal/
├── Downloads/
│   └── (messy — sorting needed)
├── Pictures/
│   └── 2024/
└── Projects/
    └── coding-practice/
        └── hello/
\`\`\`

Now answer: where would you put a new Playwright project? Why?

### Bonus

If your Downloads folder is a mess (whose isn't?), spend 5 minutes sorting it into sub-folders. This is the exact habit you'll need for organizing test projects.`,
    proTips: [
      "Name folders in lowercase with hyphens: `my-project`, not `My Project` or `MyProject`.",
      "Never put spaces in folder or file names — they cause headaches in the terminal later.",
      "Every project gets its own folder. Don't mix projects.",
      "If a folder feels cluttered, split it. Flat folders with 50 files are hard to navigate.",
      "Use your home folder as the root for personal projects: `~/projects/...` or `~/code/...`.",
    ],
    commonMistakes: [
      {
        mistake: "Saving files to the Desktop",
        fix: "The Desktop is not a good place for projects. Use Documents or a dedicated Projects folder.",
      },
      {
        mistake: "Using spaces in file or folder names",
        fix: "Use hyphens or underscores: `login-test.py` or `login_test.py`, not `login test.py`.",
      },
      {
        mistake: "Putting every file in one giant folder",
        fix: "Group related files into sub-folders. Tests in `tests/`, configs in root, docs in `docs/`.",
      },
      {
        mistake: "Forgetting where you saved something",
        fix: "Use consistent folder structure across projects. Every project should look the same on the inside.",
      },
      {
        mistake: "Confusing a file with a folder when the folder has a dot in its name",
        fix: "Extensions come after a dot. Some folders (like `.github`) start with a dot. Look at the icon — folders have a folder icon.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Typical project folder structure",
        code: `my-playwright-project/
├── tests/
│   ├── login_test.py
│   └── checkout_test.py
├── pages/
│   └── login_page.py
├── utils/
│   └── helpers.py
├── data/
│   └── users.json
├── requirements.txt
├── pytest.ini
└── README.md`,
      },
      {
        language: "text",
        title: "What each extension means",
        code: `.py    → Python script
.js    → JavaScript file
.ts    → TypeScript file
.json  → Structured data
.html  → Web page
.css   → Stylesheet
.md    → Markdown documentation
.txt   → Plain text
.jpg   → Image
.pdf   → Document`,
      },
    ],
    furtherReading: [
      {
        title: "GCFGlobal — Computer Basics: Files and Folders",
        url: "https://edu.gcfglobal.org/en/computerbasics/working-with-files/1/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "basics", "files"],
  },

  "file-paths": {
    slug: "file-paths",
    title: "File paths — absolute vs relative",
    summary:
      "How to point at any file on your computer with a single line of text.",
    whyItMatters:
      "Every command you type in the terminal uses paths. Every import in Python uses paths. If you don't understand paths, everything is confusing.",
    notes: `A **file path** is like your home address. It tells the computer exactly where something lives.

Just like you have a full address (House No, Street, Area, City, PIN) and a short way to describe it ("my house"), a computer has full and short file paths.

### Absolute path — the full address

An absolute path starts from the very top of your computer and lists every folder down to the file.

**Examples:**

**On Windows:**
~~~text
C:\\Users\\Kamal\\Documents\\projects\\hello.py
~~~

**On Mac and Linux:**
~~~text
/Users/kamal/Documents/projects/hello.py
~~~

Notice the differences:
- Windows uses **backslashes** (\`\\\`) and starts with a drive letter (\`C:\`)
- Mac and Linux use **forward slashes** (\`/\`) and start with a single slash
- The path lists every folder from the root to the file

### Home directory — your starting point

Every user has a **home directory**. It's where your personal files live.

- **Windows:** \`C:\\Users\\YourName\`
- **Mac:** \`/Users/yourname\`
- **Linux:** \`/home/yourname\`

In the terminal, you can refer to your home directory as:
- \`~\` (tilde) — on Mac and Linux, and in modern Windows terminals too

So \`~/Documents/hello.py\` means the same as \`/Users/kamal/Documents/hello.py\` (on Mac).

### Relative path — the short way

A relative path starts from **where you currently are**, not from the root.

Say you're already inside \`~/Documents/projects\`. Instead of typing the full path:

~~~text
/Users/kamal/Documents/projects/hello.py
~~~

You can just type:

~~~text
hello.py
~~~

Because you're already in the \`projects\` folder, you only need to say "hello.py". The computer fills in the rest.

### The two special shortcuts

Two symbols show up in paths constantly:

- \`.\` — **current folder**
- \`..\` — **one folder up** (parent)

Example: you're in \`~/Documents/projects/\`. You want to get to \`~/Documents/\`.

Relative way:
~~~text
../
~~~

Absolute way:
~~~text
/Users/kamal/Documents/
~~~

The relative way is shorter because you're already inside projects — just step one folder up.

### Combining them

You can chain these:

~~~text
../tests/login_test.py
~~~

Translation: go one folder up, then into \`tests\`, then open \`login_test.py\`.

Or:

~~~text
./utils/helpers.py
~~~

Translation: from where I am right now, go into \`utils\`, then open \`helpers.py\`.

### Why both exist

**Absolute paths** are:
- Always correct, no matter where you are
- Long and tedious to type
- Different on different machines (your home folder is \`/Users/kamal\`, but your teammate's is \`/Users/priya\`)

**Relative paths** are:
- Short
- Work only if you're in the right folder
- The same for everyone on the same project

That last point matters. In a shared project, absolute paths break for teammates. Relative paths work for everyone because they describe structure, not specific locations.

**Rule of thumb:** always use relative paths inside a project. Use absolute paths only when you need to point at something outside the project.

### Special characters in paths

- **Forward slash** \`/\` — separates folders on Mac and Linux
- **Backslash** \`\\\` — separates folders on Windows
- **Dot** \`.\` — current folder
- **Double dot** \`..\` — parent folder
- **Tilde** \`~\` — home folder

In Python code, you can also use \`pathlib\` to work with paths in a cross-platform way (works on both Windows and Unix). We'll cover that in Phase 1.

### The mental model

A path is a set of directions:

- "Start from here"
- "Go into this folder"
- "Then into that folder"
- "Open this file"

Absolute paths start from the root of your computer.
Relative paths start from where you currently are.

That's the whole concept.`,
    handsOn: `Let's practice finding and using paths.

### Step 1: Create a test structure

Open your terminal (in VS Code, press Ctrl + backtick).

~~~bash
cd ~
mkdir -p path-practice/inner/deep
cd path-practice
~~~

You now have:
~~~text
~/path-practice/
└── inner/
    └── deep/
~~~

### Step 2: See where you are — absolute path

~~~bash
pwd
~~~

This prints the **absolute path** to your current folder. Something like:
~~~text
/Users/kamal/path-practice
~~~

### Step 3: Create a file

~~~bash
touch test.txt
~~~

### Step 4: Look at it two ways

Relative path from your current folder:
~~~bash
ls test.txt
~~~

Absolute path to the same file:
~~~bash
ls ~/path-practice/test.txt
~~~

Both work. Both refer to the same file.

### Step 5: Practice the \`..\` shortcut

~~~bash
cd inner
pwd
~~~

You're now inside \`inner\`. Try to reach \`test.txt\` in the parent folder:

~~~bash
cat ../test.txt
~~~

The \`..\` goes up one level, then \`test.txt\` refers to the file.

### Step 6: Go deeper, then come back

~~~bash
cd deep
pwd
~~~

You're now inside \`path-practice/inner/deep\`. To reach \`test.txt\` in \`path-practice\`:

~~~bash
cat ../../test.txt
~~~

Two levels up (\`../../\`), then the file.

### Deliverable

You created a nested folder structure, used \`pwd\` to see absolute paths, and used \`..\` and \`../..\` to reach files from nested folders. You understand both path types.`,
    challenge: `Let's map out relative paths for a realistic project.

Imagine this structure:

\`\`\`
my-project/
├── tests/
│   ├── login_test.py
│   └── search_test.py
├── pages/
│   └── login_page.py
└── config.json
\`\`\`

You are currently **inside the tests/ folder**.

Write the relative path to reach:

1. \`login_test.py\` (in your current folder)
2. \`search_test.py\` (in your current folder)
3. \`login_page.py\` (in the pages folder)
4. \`config.json\` (in the root of the project)

Answers:
1. \`login_test.py\`
2. \`search_test.py\`
3. \`../pages/login_page.py\`
4. \`../config.json\`

### Now try it in the terminal

Recreate the structure:

~~~bash
cd ~
mkdir -p my-project/tests my-project/pages
cd my-project
touch tests/login_test.py tests/search_test.py pages/login_page.py config.json
cd tests
~~~

Now run:

~~~bash
cat ../config.json
cat ../pages/login_page.py
cat login_test.py
~~~

All should work. You just used relative paths in a realistic project structure.`,
    proTips: [
      "Always use relative paths inside a project. They work for everyone, on any machine.",
      "Use `pwd` any time you're unsure where you are.",
      "The tilde `~` always means your home folder, on every Unix-like system.",
      "In Python code, use `pathlib.Path(__file__).parent` to build robust relative paths.",
      "Never hard-code absolute paths in code. Your laptop path is not your teammate's laptop path.",
    ],
    commonMistakes: [
      {
        mistake: "Using Windows backslashes in code that runs on Linux/Mac",
        fix: "Use forward slashes `/` in code. Python and Node handle them on all platforms. Or use `pathlib` in Python.",
      },
      {
        mistake: "Confusing `..` (parent) with `.` (current)",
        fix: "`..` goes up one folder. `.` refers to where you are now. `./script.py` and `script.py` are the same.",
      },
      {
        mistake: "Using absolute paths in shared code",
        fix: "Absolute paths break for anyone else. Use relative paths or `pathlib` to build from the script's location.",
      },
      {
        mistake: "Forgetting that paths are case-sensitive on Mac and Linux",
        fix: "`Documents` and `documents` are different folders on Mac and Linux. Always match the exact case.",
      },
      {
        mistake: "Running a command from the wrong folder",
        fix: "Use `pwd` to check. Use `cd` to go to the right folder. Then run the command.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Absolute paths",
        code: `Windows: C:\\Users\\Kamal\\Documents\\projects\\hello.py
Mac:     /Users/kamal/Documents/projects/hello.py
Linux:   /home/kamal/Documents/projects/hello.py

Always start from the root of the filesystem.`,
      },
      {
        language: "text",
        title: "Relative paths and shortcuts",
        code: `hello.py            → file in the current folder
./hello.py          → same thing
../hello.py         → file in the parent folder
../../hello.py      → file two folders up
./tests/run.py      → file in the tests folder here`,
      },
      {
        language: "python",
        title: "Building a safe path in Python",
        code: `from pathlib import Path

# Get the folder containing this script
here = Path(__file__).parent

# Build a path to a data file relative to this script
data_file = here / "data" / "users.json"

print(data_file)
# Works on Windows, Mac, and Linux.`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — What is a path?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
      },
      {
        title: "Python docs — pathlib",
        url: "https://docs.python.org/3/library/pathlib.html",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "basics", "paths", "files"],
  },

  "file-extensions": {
    slug: "file-extensions",
    title: "File extensions — why .py, .js, .ts, .html matter",
    summary:
      "The three letters after the dot tell the computer what to do with the file.",
    whyItMatters:
      "Every error message you see in your career will mention a file name with an extension. Knowing what each means saves you hours of confusion.",
    notes: `The **extension** is the part of a filename after the last dot. It tells the computer — and you — what kind of file this is.

~~~text
resume.pdf      ← extension is .pdf
hello.py        ← extension is .py
index.html      ← extension is .html
data.json       ← extension is .json
~~~

Simple idea. But the extension changes everything about how the file behaves.

### Why extensions exist

Computers need to know what program should open a file. When you double-click a file, the operating system:

1. Reads the extension
2. Looks up which program is registered for that extension
3. Opens the file with that program

So the extension is a hint — "this is a photo, open it in a photo viewer". "This is code, open it in an editor".

### The extensions you'll see as a Playwright engineer

**Python files:**
~~~text
.py        → Python source code
.pyc       → Python bytecode (auto-generated, ignore)
.ipynb     → Jupyter notebook (a special Python file)
~~~

**JavaScript and TypeScript:**
~~~text
.js        → JavaScript source
.ts        → TypeScript source
.jsx       → JavaScript with React
.tsx       → TypeScript with React
.mjs       → Modern JavaScript module
~~~

**Web files:**
~~~text
.html      → Web page structure
.css       → Web page styles
.scss      → SASS stylesheet (compiles to CSS)
~~~

**Data files:**
~~~text
.json      → Structured data (used by APIs, configs)
.yaml/.yml → Configuration (used by Playwright, CI)
.csv       → Table data (spreadsheet-like)
.xml       → Older structured data format
.env       → Environment variables (secrets, configs)
~~~

**Documentation:**
~~~text
.md        → Markdown (README files, docs)
.txt       → Plain text
.pdf       → Portable document
~~~

**Images and media:**
~~~text
.jpg / .jpeg → Photographs
.png        → Images with transparency
.svg        → Vector images (logos, icons)
.gif        → Animated images
.mp4        → Video
.mp3        → Audio
~~~

**Archives:**
~~~text
.zip / .tar / .gz → Compressed bundles of files
~~~

**Configs and metadata:**
~~~text
.gitignore       → List of files Git should skip
.prettierrc      → Prettier configuration
eslint.config.js → ESLint configuration
tsconfig.json    → TypeScript configuration
package.json     → Node.js project metadata
requirements.txt → Python package list
pytest.ini       → Pytest configuration
~~~

### The convention you'll see often

Config files for tools almost always start with a dot:

~~~text
.gitignore
.prettierrc
.eslintrc.json
.env
~~~

A dot at the start tells the operating system "this is a hidden file". You won't see them by default in your file manager or \`ls\` output. Use \`ls -a\` (list all) to see them.

### Extensions are a convention, not magic

Here's a fact that surprises most beginners: **the extension is just part of the file name**.

You could rename \`hello.py\` to \`hello.png\` and the file would still contain the same text. Your computer would just try to open it with a photo viewer and get confused.

The extension doesn't change the content. It changes what the computer thinks the content is. This matters when:

- You accidentally save a Python file as \`.txt\` and wonder why it won't run
- A tool expects \`.yaml\` but you named it \`.yml\` (both work)
- You rename a file and break an import in your code

### Extensions and your editor

VS Code uses the extension to decide:
- What syntax highlighting to use (Python code looks different from HTML)
- What autocomplete to offer
- Which extensions (plugins) to activate

That's why \`.py\` files have that distinct blue Python look, while \`.html\` files look colorful with tags.

### Extensions and command execution

When you run:

~~~bash
python hello.py
~~~

You're telling the \`python\` program "open and run this file". The program itself checks the extension (usually expects \`.py\`) and reads the content accordingly.

If you run:

~~~bash
python hello.txt
~~~

Python will try to run it as Python code anyway. It doesn't strictly care about the extension — it cares about the contents. But this is confusing for everyone. **Always use the correct extension.**

### The one habit to build

Before running any file, look at its extension. Make sure it matches what you're trying to do:

- Running Python? → \`.py\`
- Running JavaScript? → \`.js\` or \`.mjs\`
- Running TypeScript? → \`.ts\`
- Running Playwright tests? → \`.spec.ts\` or \`test_*.py\` depending on the project

This habit prevents 90% of "why won't this run?" moments.`,
    handsOn: `Let's see extensions in action.

### Step 1: Create files with different extensions

In the terminal:

~~~bash
cd ~
mkdir -p extensions-practice
cd extensions-practice

touch file.py
touch file.js
touch file.ts
touch file.html
touch file.json
touch file.md
touch file.txt
touch file.yaml
~~~

You now have eight empty files, each with a different extension.

### Step 2: Look at them

~~~bash
ls
~~~

You'll see all eight.

### Step 3: Open them in VS Code

If VS Code is installed and the \`code\` command is available:

~~~bash
code .
~~~

Look at the file list in VS Code's sidebar. Notice:

- \`file.py\` has a Python icon
- \`file.js\` has a JavaScript icon
- \`file.html\` has an HTML icon
- \`file.json\` has a JSON icon
- \`file.md\` has a Markdown icon

VS Code automatically detects the type from the extension.

### Step 4: Write real content and see the magic

Open \`file.py\` and type:

~~~python
print("Hello from Python")
~~~

Open \`file.html\` and type:

~~~html
<h1>Hello from HTML</h1>
~~~

Notice how VS Code shows different syntax highlighting for each. Python looks one way. HTML looks another. All because of the extension.

### Step 5: Break it

Rename \`file.py\` to \`file.txt\`:

~~~bash
mv file.py file.txt
~~~

Open \`file.txt\` in VS Code. It should look boring — no colors, no syntax highlighting. Because VS Code sees ".txt" and thinks "plain text, no special treatment".

Rename it back:

~~~bash
mv file.txt file.py
~~~

Now the highlighting returns.

### Deliverable

You created files with 8 different extensions, saw VS Code's syntax highlighting change automatically, and observed what happens when you "lie" about a file's type.`,
    challenge: `Let's identify the extension of real files on your computer.

### Task 1: List your Downloads folder

~~~bash
cd ~/Downloads
ls -1
~~~

Look at the extensions of every file. Make a note of:
- How many are images (.jpg, .png, etc.)?
- How many are documents (.pdf, .docx)?
- How many are archives (.zip, .dmg, .exe)?

### Task 2: Cross-check

For 5 files, look at the extension and guess what the file is before opening it. Then open it and check if you were right.

You'll find that extensions are usually accurate. When they're not (a .txt file that's actually code), it's because someone renamed it by mistake.

### Task 3: Find hidden files

~~~bash
ls -a
~~~

Look for files starting with a dot. These are hidden by default in most file managers and \`ls\` output. They're usually configuration files.

Write down 3 hidden files you found and guess what they do (their names usually tell you).

### Bonus

Think about a file you download — say, a bank statement PDF. What extension would it have? Now think of the audio file you send on WhatsApp — extension? The screenshot on your phone — extension?

Every file you encounter in your life has an extension. Once you start noticing them, you'll never be confused again.`,
    proTips: [
      "Always use the correct extension. `.py` for Python, `.js` for JavaScript, `.ts` for TypeScript.",
      "Config files starting with a dot are hidden by default. Use `ls -a` to see them.",
      "If a file has no extension, treat it cautiously. It might be a binary or a script that hasn't been named correctly.",
      "VS Code's syntax highlighting is a great way to double-check you used the right extension.",
      "When naming test files, follow conventions: `test_*.py` for Pytest, `*.spec.ts` for Playwright Test.",
    ],
    commonMistakes: [
      {
        mistake: "Saving code as `.txt`",
        fix: "The editor and tools may not recognize it. Always use the correct extension: `.py`, `.js`, `.ts`.",
      },
      {
        mistake: "Confusing `.yaml` and `.yml`",
        fix: "Both work. They're the same format. Pick one and use it consistently across a project.",
      },
      {
        mistake: "Hiding extensions in your file manager",
        fix: "Windows hides extensions by default. Turn them ON (View → Show → File name extensions) so you always see the real file type.",
      },
      {
        mistake: "Renaming a file but not its content",
        fix: "If you rename `config.json` to `config.yaml`, the content inside is still JSON. Rename only when you're also changing the content format.",
      },
      {
        mistake: "Not knowing what `.json` is when you see it in a Playwright config",
        fix: "JSON is structured data. Playwright configs, test data, and API responses are all JSON. Learn it early — you'll see it everywhere.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Common extensions at a glance",
        code: `.py      Python source
.js      JavaScript source
.ts      TypeScript source
.html    Web page
.css     Stylesheet
.json    Data / config
.yaml    Config
.md      Markdown documentation
.env     Environment variables
.txt     Plain text
.gitignore  Git ignore rules`,
      },
      {
        language: "text",
        title: "Playwright project file types",
        code: `tests/login.spec.ts        TypeScript test
tests/test_login.py        Python test
playwright.config.ts       TS Playwright config
pytest.ini                 Python Pytest config
requirements.txt           Python packages
package.json               Node packages
tsconfig.json              TypeScript settings
.env                       Environment variables`,
      },
    ],
    furtherReading: [
      {
        title: "FileInfo — Common file extensions",
        url: "https://fileinfo.com/",
      },
      {
        title: "VS Code — Language support",
        url: "https://code.visualstudio.com/docs/languages/overview",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "basics", "files"],
  },

  "what-is-a-terminal": {
    slug: "what-is-a-terminal",
    title: "What is a terminal / command line?",
    summary:
      "The text-based way to talk to your computer — faster than the mouse for programmers.",
    whyItMatters:
      "Every Playwright command, every Git operation, every install happens in the terminal. You cannot avoid it. Might as well befriend it early.",
    notes: `The **terminal** (also called **command line**, **shell**, **console**, or **command prompt**) is a way to control your computer by typing text instead of clicking icons.

You already know the graphical way — open a folder, right-click, new file, rename, delete. The terminal does all the same things but with typed commands.

### Why would anyone do that?

Three reasons:

1. **Faster** — for many tasks, typing one command beats clicking five times.
2. **More powerful** — some things can only be done in the terminal.
3. **Scriptable** — you can write a list of commands that runs automatically.

Programmers, sysadmins, and testers live in the terminal because it's simply faster once you know it.

### The terminal looks scary but isn't

When you open a terminal, you see something like:

~~~text
kamal@laptop:~$
~~~

That's called the **prompt**. It's the terminal saying "I'm ready, what do you want me to do?"

- \`kamal\` — the user
- \`laptop\` — the computer's name
- \`~\` — you're currently in your home folder
- \`$\` — waiting for your command

You type a command, press Enter, and the terminal executes it. Then it prints the result and shows the prompt again, ready for the next command.

### What you'll use it for (as a Playwright engineer)

- **Running tests** — \`pytest\`, \`npx playwright test\`
- **Installing packages** — \`pip install playwright\`
- **Navigating folders** — \`cd projects/my-tests\`
- **Running Python scripts** — \`python hello.py\`
- **Using Git** — \`git add .\`, \`git commit -m "..."\`, \`git push\`
- **Starting dev servers** — \`npm run dev\`
- **Debugging** — \`playwright show-trace trace.zip\`

Every single day, you'll spend time here. Get comfortable.

### Terminal vs shell vs console

These words get used interchangeably, but they mean slightly different things:

- **Terminal** — the app or window you interact with (the visual thing).
- **Shell** — the program inside that actually interprets your commands (like Bash, Zsh, PowerShell).
- **Console** — often means the same as terminal, but sometimes refers to a browser's developer console.

For everyday conversation, they all mean "the black window where I type commands". Don't stress about the distinction.

### Common shells

- **Bash** — the default on most Linux systems and older Macs.
- **Zsh** — the default on modern Macs.
- **Fish** — a friendlier shell with better defaults.
- **PowerShell** — the modern Windows shell.
- **Command Prompt (cmd)** — the old Windows shell.

The commands are 90% the same across all of them. A few differences exist (like \`ls\` vs \`dir\` on old Windows).

### The terminal inside VS Code

You don't have to leave your editor. VS Code has a built-in terminal:

- Press **Ctrl + backtick** (the backtick key is below Escape)
- Or **View → Terminal**

This terminal opens **inside your project folder**. So you can run project commands without needing to \`cd\` around.

This is the terminal you'll use 99% of the time.

### Common misconceptions

**"The terminal is only for hackers."**

Nope. Every professional developer uses it daily. It's just a tool.

**"I'll break my computer if I type the wrong thing."**

Mostly no. Some commands can cause damage (\`rm -rf /\` — never run this), but normal navigation and running scripts is safe. You can't accidentally destroy anything by just browsing around.

**"I need to memorize everything."**

No. A dozen commands get you 90% of the way. You'll Google the rest forever (even experts do).

**"It's outdated."**

It's not. It's faster than any GUI for many tasks, and it hasn't gone away in 50 years because nothing has replaced it.

### The mindset shift

Think of the terminal as a different "input method" — like typing an SMS instead of tapping icons. Both get you to the same place. One is faster for text-heavy tasks. The other is better for visual exploration.

You'll use both. Learn both.

### What you'll learn next

In Phase 0, we'll cover the actual commands: \`cd\`, \`ls\`, \`mkdir\`, \`touch\`, and friends. For now, just understand what the terminal is — a text-based way to control your computer.`,
    handsOn: `Let's just open the terminal and look around — no commands yet.

### Step 1: Open VS Code

Open VS Code. If you're working in a project, open it. Otherwise open any folder.

### Step 2: Open the built-in terminal

Press **Ctrl + backtick** (the backtick key is just below Escape, above Tab).

A panel opens at the bottom of VS Code. That's your terminal.

### Step 3: Look at the prompt

Read the text that appears. It usually shows:

- Your username
- Your computer name
- The folder you're in
- A symbol like \`$\` or \`>\`

### Step 4: Type a friendly command

Type this and press Enter:

~~~bash
pwd
~~~

It prints the absolute path of the folder you're in. If VS Code has a folder open, that's the folder shown.

### Step 5: Look at your files

Type this and press Enter:

~~~bash
ls
~~~

It lists everything in the current folder. You should recognize these as the files you see in VS Code's sidebar.

### Step 6: Close and reopen

Click the **X** on the terminal panel to close it. Now press Ctrl + backtick again to reopen it.

The terminal is always one shortcut away. It never leaves.

### Deliverable

You opened the terminal inside VS Code, ran \`pwd\` and \`ls\`, and can open/close it with Ctrl + backtick. That's your new workspace.`,
    challenge: `Compare the terminal and the graphical file manager side by side.

### Task

1. Open your computer's file manager (Finder on Mac, File Explorer on Windows, Files on Linux).
2. Open VS Code with the same folder.
3. Open the terminal inside VS Code.
4. Do these three tasks **twice** — once with the mouse, once with the terminal.

**Task A: See what's in a folder**

- Mouse: click into a folder
- Terminal: \`cd\` into that folder, then run \`ls\`

**Task B: Go up one folder**

- Mouse: click the "up" or "back" button
- Terminal: \`cd ..\`

**Task C: Find the full path of where you are**

- Mouse: click the address bar (Windows) or Get Info (Mac)
- Terminal: \`pwd\`

### Reflection

Which was faster for you? Which felt more precise?

Write two or three sentences comparing them. This is how you decide when to use which tool going forward.

Spoiler: you'll use both. The terminal for repetitive tasks and scripting, the GUI for exploration.`,
    proTips: [
      "Ctrl + backtick in VS Code is your fastest way to open a terminal. Memorize it.",
      "The terminal inside VS Code is already in your project folder — no need to cd around.",
      "Press the up arrow to recall your last command. Press it multiple times to go further back.",
      "Ctrl + C stops a command that's running or hung. Use it when something feels stuck.",
      "Ctrl + L clears the screen (keeps history, just clears the visual).",
    ],
    commonMistakes: [
      {
        mistake: "Being scared of the terminal",
        fix: "It's just a text-based way to talk to your computer. You cannot easily break anything with normal commands.",
      },
      {
        mistake: "Opening a separate terminal window instead of using VS Code's built-in one",
        fix: "The built-in one is already in your project folder and appears inside your editor. Use it.",
      },
      {
        mistake: "Typing whole file paths by hand and making typos",
        fix: "Use the Tab key to auto-complete file and folder names. Type `cd pro` and press Tab to complete `projects/`.",
      },
      {
        mistake: "Not knowing where the terminal is pointing",
        fix: "Run `pwd` when unsure. It always tells you the current folder.",
      },
      {
        mistake: "Assuming terminal and shell are exactly the same",
        fix: "The terminal is the window; the shell is the program inside. For daily use, they're the same thing.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Three commands to try right now",
        code: `pwd       # Where am I?
ls        # What's here?
cd ..     # Go up one folder`,
      },
      {
        language: "text",
        title: "Reading a prompt",
        code: `kamal@laptop:~/projects$
│     │      │          │
│     │      │          └── ready for your command
│     │      └── current folder (~ = home)
│     └── computer name
└── username`,
      },
      {
        language: "bash",
        title: "Common commands you'll use daily",
        code: `pwd                    # Where am I?
ls                     # List files here
cd folder              # Go into folder
cd ..                  # Go up one folder
mkdir new-folder       # Create a folder
touch file.txt         # Create an empty file
cat file.txt           # Show file contents
clear                  # Clear the screen`,
      },
    ],
    furtherReading: [
      {
        title: "The Missing Semester — Course overview",
        url: "https://missing.csail.mit.edu/",
      },
      {
        title: "Ubuntu — The Linux command line for beginners",
        url: "https://ubuntu.com/tutorials/command-line-for-beginners",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "basics", "terminal"],
  },

  "what-is-an-ide": {
    slug: "what-is-an-ide",
    title: "What is an IDE / code editor?",
    summary:
      "The program you'll spend 90% of your coding time in — and why it's more than a text editor.",
    whyItMatters:
      "Choosing the right editor makes everything easier — autocomplete, error detection, running tests with one click. This is your workshop.",
    notes: `An **IDE** (Integrated Development Environment) is a program built specifically for writing code. A **code editor** is a lighter version of the same thing.

Think of it as the difference between a full workshop and a workbench. Both let you work on things. One has more tools built in.

### Why not just use Notepad?

You could technically write code in Notepad, Google Docs, or even a WhatsApp message to yourself. But you'd be making life hard for no reason.

A code editor gives you:

- **Syntax highlighting** — colors that make code readable
- **Autocomplete** — suggests what you're about to type
- **Error detection** — underlines mistakes before you run
- **File tree** — see your whole project in a sidebar
- **Built-in terminal** — run commands without leaving the editor
- **Search across files** — find anything in a project instantly
- **Git integration** — see changes and commit without a terminal
- **Extensions** — add features for any language or framework

Once you've used a proper code editor, going back to Notepad feels like eating soup with a fork.

### The big names

**For general coding:**

- **VS Code** — the most popular editor in the world. Free, fast, works everywhere.
- **Cursor** — VS Code with AI built in. Rising fast.
- **Sublime Text** — fast, minimalist, paid.
- **Neovim** — terminal-based, extremely powerful, steep learning curve.

**Full IDEs (heavier):**

- **PyCharm** — the professional Python IDE. Excellent for large projects.
- **IntelliJ IDEA** — for Java. The big one.
- **WebStorm** — for JavaScript and TypeScript.
- **Visual Studio** — Microsoft's heavy IDE for C# and .NET.
- **Eclipse** — old-school Java IDE, still used in some enterprises.

**For us, we'll use VS Code.** Reasons:

1. Free
2. Works on Windows, Mac, Linux
3. Huge community and extension ecosystem
4. Excellent Python, JavaScript, and Playwright support
5. Fast and lightweight

### Code editor vs IDE

- A **code editor** (VS Code, Sublime) is lighter. You install extensions to add features.
- A **full IDE** (PyCharm, IntelliJ) comes with everything bundled. Heavier, but complete.

For Playwright work, VS Code is plenty. Many professional testers use it daily.

### What "extension" means here

An **extension** (sometimes called a plugin or add-on) is an add-on that gives the editor new abilities.

For our work, we'll install four extensions in Phase 0:

- **Python** — language support, run buttons, debugging
- **Pylance** — smarter Python autocomplete and error detection
- **Playwright Test for VS Code** — run and debug tests with one click
- **GitLens** — see git history inside the editor

Each is small. Together they turn VS Code into a Playwright power tool.

### The features you'll use daily

**Autocomplete** — as you type, a dropdown shows suggestions. Press Tab to accept. Saves enormous typing time.

**Go to definition** — hold Ctrl (or Cmd) and click a function name. Jumps to where it's defined.

**Find in files** — Ctrl + Shift + F. Search across every file in the project.

**Command palette** — Ctrl + Shift + P. Access any command by name.

**Quick open** — Ctrl + P. Jump to any file.

**Integrated terminal** — Ctrl + backtick. Run commands without leaving the editor.

**Format on save** — automatically fix indentation and spacing when you save. Set it once, forget about formatting forever.

### What an editor is not

- It's not a compiler. It doesn't turn your code into a program. It just helps you write it.
- It's not a terminal. It runs the terminal inside it for convenience.
- It's not a version control system. It just interfaces with Git.

The editor is the **workshop**. All the actual work happens in it, but the tools inside it (Python, Git, terminal) are what do the real tasks.

### Why beginners should learn their editor well

The people you'll see at work type code faster than they can speak. That's not magic — it's muscle memory from using their editor well.

Every shortcut you learn saves seconds. Over a week, that's hours. Over a career, months.

Learn three shortcuts a week. After three months, you'll feel the difference.`,
    handsOn: `Let's explore VS Code as if it's your first time.

### Step 1: Install VS Code (if not already)

Go to **code.visualstudio.com** and download the installer for your OS.

Install it. Open it.

### Step 2: Open a folder

You don't just open single files in VS Code. You open **folders** (projects).

Click **File → Open Folder** and choose your \`coding-practice\` or \`hello\` folder.

You'll see:
- The **file tree** on the left (the folder contents)
- The **editor area** in the middle (currently empty)
- The **status bar** at the bottom

### Step 3: Create a file

In the file tree, right-click → **New File**. Name it \`explore.py\`.

VS Code opens it in the editor area.

### Step 4: Type some Python

~~~python
name = "World"
print(f"Hello, {name}!")
~~~

Notice:
- Colors appear automatically (syntax highlighting)
- VS Code is guessing what comes next (autocomplete)

### Step 5: Try the command palette

Press **Ctrl + Shift + P** (Mac: Cmd + Shift + P).

A search box opens. Type "settings". You'll see options appear. This is how you access every VS Code feature.

Press **Escape** to close it.

### Step 6: Try quick open

Press **Ctrl + P**. Type "explore". Your file appears. Press Enter.

This is how you jump between files in any project.

### Step 7: Open the terminal

Press **Ctrl + backtick**. Run your file:

~~~bash
python explore.py
~~~

You see the output. You just wrote and ran code without ever leaving the editor.

### Deliverable

You opened a folder in VS Code, created a file, wrote Python, ran the command palette, used quick open, and executed code from the built-in terminal.`,
    challenge: `Learn 5 VS Code shortcuts and prove them to yourself.

For each shortcut, write a one-sentence description of what it does and one situation where you'd use it.

1. **Ctrl + P** — Quick open file
2. **Ctrl + Shift + P** — Command palette
3. **Ctrl + Shift + F** — Find across all files
4. **Ctrl + B** — Toggle sidebar
5. **Ctrl + backtick** — Toggle terminal

For each, try it and write down:

- What it does
- When you'd use it
- Whether it felt useful

### Bonus

Explore the **File** and **View** menus. Every menu item shows its keyboard shortcut on the right side. Notice what's available.

Now check the **Preferences → Keyboard Shortcuts** panel (Ctrl + K then Ctrl + S). You can see every shortcut VS Code has. Search for "comment" to see how to comment lines.

Learning shortcuts is an investment. The first few feel awkward. After a week, you can't code without them.`,
    proTips: [
      "Enable Format on Save (Settings → Format On Save). Every save auto-formats your code.",
      "Learn Ctrl + / to comment/uncomment a line. You'll use it hundreds of times.",
      "Use Ctrl + D to select the next occurrence of the current word — perfect for renaming variables.",
      "Set up a comfortable theme. Dracula, One Dark Pro, and GitHub Dark are popular.",
      "If VS Code feels slow, disable extensions you don't use. Each one costs a little performance.",
    ],
    commonMistakes: [
      {
        mistake: "Editing files without opening the project folder",
        fix: "Open the whole project folder (File → Open Folder). Without this, autocomplete, imports, and the terminal don't work as well.",
      },
      {
        mistake: "Installing too many extensions",
        fix: "Start with the 4 essentials (Python, Pylance, Playwright Test, GitLens). Add more only when a real need arises.",
      },
      {
        mistake: "Ignoring the command palette",
        fix: "Ctrl + Shift + P is your search box for VS Code features. If you don't know how to do something in VS Code, search there first.",
      },
      {
        mistake: "Typing full file paths to open files",
        fix: "Use Ctrl + P to jump between files. It's faster and less error-prone.",
      },
      {
        mistake: "Thinking you need PyCharm instead of VS Code",
        fix: "For Playwright projects, VS Code is more than enough. PyCharm is great for huge Python codebases but heavier.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "VS Code shortcuts to master first",
        code: `Ctrl + \`        Toggle terminal
Ctrl + P         Quick open file
Ctrl + Shift + P Command palette
Ctrl + B         Toggle sidebar
Ctrl + Shift + F Find in all files
Ctrl + /         Comment line
Ctrl + D         Select next occurrence
Ctrl + S         Save file
Alt + Up/Down    Move line up or down`,
      },
      {
        language: "python",
        title: "Try this in VS Code",
        code: `# Notice: syntax highlighting appears automatically
# Notice: autocomplete suggests matches after "pr"

name = "Ravi"
age = 25

if age >= 18:
    print(f"Welcome, {name}!")
else:
    print(f"Hi {name}, come back later.")`,
      },
    ],
    furtherReading: [
      {
        title: "VS Code — Tips and Tricks",
        url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks",
      },
      {
        title: "VS Code — Keyboard Shortcuts (PDF)",
        url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "basics", "tools"],
  },

  "what-is-git": {
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
  },

  "what-is-github": {
    slug: "what-is-github",
    title: "What is GitHub?",
    summary:
      "The place where your Git saves live online — so you can share, back up, and collaborate.",
    whyItMatters:
      "Your entire Playwright portfolio will live on GitHub. It's how employers see your work, how you back up your code, and how you deploy to Vercel.",
    notes: `**GitHub** is a website. It's where Git repositories live **online**.

If Git is a save-point system on your computer, GitHub is the cloud where those saves get stored, shared, and collaborated on.

### Git vs GitHub — the one-minute version

**Git:**
- A tool installed on your computer
- Tracks changes to your files
- Works entirely offline
- Made by Linus Torvalds in 2005

**GitHub:**
- A website (github.com)
- Hosts Git repositories online
- Makes collaboration possible
- Made by a company (now owned by Microsoft)

You can use Git without GitHub. You can't use GitHub without Git.

### Why GitHub matters

**1. Backup**

Your laptop will eventually crash. Your work is on GitHub — safe.

**2. Portfolio**

Recruiters and hiring managers look at GitHub profiles. A strong GitHub profile with real projects is worth more than a resume bullet point.

**3. Collaboration**

Multiple people can work on the same project. Everyone pushes their changes. Everyone pulls others' changes. It just works.

**4. Open source**

Most of the tools you use — Python, Playwright, VS Code — are open source. Their code lives on GitHub. You can read it, learn from it, and even contribute.

**5. Deployment**

Vercel, Netlify, and other hosting services pull from your GitHub repo. Push code → site auto-updates. We already used this.

**6. Free**

For public repositories, GitHub is free. Even private repos are free within reasonable limits.

### The vocabulary

**Repository (repo)**

A project. Each repo has its own history, files, and collaborators. Your \`playwright-academy\` is a repo.

**Clone**

Copy a repo from GitHub to your computer:

~~~bash
git clone https://github.com/user/repo.git
~~~

**Fork**

Copy someone else's repo to your GitHub account (not your computer). Used to make changes you can propose back to the original.

**Pull request (PR)**

A proposal to merge your changes into someone else's project. Very common in team development.

**Issue**

A tracked task, bug, or discussion about a project.

**README**

A markdown file in the root of the repo that explains what the project is and how to use it. The first thing anyone sees.

**Star**

A "like" for a repo. More stars = more popular.

**Public vs Private**

- Public: anyone can see it.
- Private: only you and invited collaborators.

### The three commands you'll use to sync

**\`git clone\`** — copy a repo from GitHub to your machine (once per project).

**\`git pull\`** — get the latest changes from GitHub to your machine.

**\`git push\`** — send your local commits to GitHub.

For a solo project, the workflow is:

~~~text
1. Edit files locally
2. git add .
3. git commit -m "..."
4. git push
~~~

After step 4, GitHub has your changes. Vercel sees them and redeploys your app.

### GitHub beyond code

GitHub isn't just for code. It has:

- **GitHub Pages** — host static websites for free
- **GitHub Actions** — run scripts automatically (CI/CD)
- **GitHub Copilot** — AI coding assistant
- **GitHub Codespaces** — full development environment in the cloud (what you're using)
- **GitHub Projects** — track tasks and issues

We're already using Codespaces. Later we'll use Actions for CI/CD.

### Your GitHub profile is your portfolio

When you finish this course, your GitHub profile will show:

- Your Playwright Academy project
- Any other practice projects
- Contributions to repos (if you help with open source)

Recruiters actually check this. A well-maintained profile with clear projects speaks louder than a resume.

**Pro tip:** Write a good README for every project. Explain what it does, how to run it, and what you learned. This is what gets you hired.

### Public vs private — which should you choose?

**Public:** Good for portfolio projects. Anyone can see your work.
**Private:** Good for personal experiments, learning, and sensitive work.

You can change visibility at any time. Start private if unsure.

For your Playwright Academy repo — **make it public**. It's a portfolio piece.

### The mindset

Think of GitHub as:

- A **filing cabinet** in the cloud for your code
- A **portfolio site** for your work
- A **social network** for developers
- A **collaboration platform** for teams

It's the LinkedIn of code. Every serious developer has a profile. Yours starts today.`,
    handsOn: `Let's create your GitHub account and push your first project.

### Step 1: Create an account

If you don't have one:

1. Go to **github.com**
2. Click **Sign up**
3. Use a professional username (your real name or a variation)
4. Use a real email (you'll verify it)
5. Choose the free plan

Choose your username carefully. It becomes part of your identity as a developer.

### Step 2: Create a new repo

1. Click the **+** icon at the top right → **New repository**
2. Repository name: **git-practice**
3. Description: **My first Git and GitHub project**
4. Visibility: **Public**
5. **Do NOT check** "Add a README" (we already have files locally)
6. Click **Create repository**

GitHub will show you setup instructions. Look for the section titled **"…or push an existing repository from the command line"**.

### Step 3: Connect your local repo to GitHub

In your terminal, navigate to your local \`git-practice\` folder:

~~~bash
cd ~/git-practice
~~~

Now run these commands (copy from GitHub's instructions, replace with your username):

~~~bash
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git branch -M main
git push -u origin main
~~~

You'll be asked for a username and password. **The password is a Personal Access Token**, not your GitHub password.

### Step 4: Create a Personal Access Token (if needed)

1. Go to **github.com/settings/tokens**
2. Click **Generate new token** → **Generate new token (classic)**
3. Note: \`codespace-access\`
4. Expiration: **90 days**
5. Check the box **repo** (top of the list)
6. Click **Generate token**
7. **Copy the token** — you won't see it again

Paste this as your password when Git asks.

### Step 5: Verify the push

Go to **github.com/YOUR-USERNAME/git-practice** in your browser. You should see:

- Your \`hello.py\` file
- Two commits in the history
- The commit messages you wrote

### Deliverable

You have a GitHub account, a new repo, and your local Git project is pushed to GitHub. You can see your code online.`,
    challenge: `Make a second push to see the full cycle.

### Task 1: Edit a file locally

In \`git-practice\`, create a new file \`notes.md\`:

~~~markdown
# My Git Practice Notes

## What I learned
- Git tracks changes to files
- GitHub hosts Git repos online
- Commit early, commit often

## Commands I used
- git init
- git add .
- git commit -m "..."
- git push
~~~

### Task 2: Add, commit, push

~~~bash
git add .
git commit -m "Add my Git practice notes"
git push
~~~

Wait — after \`git push\`, this time you don't need \`origin main\` because we set up tracking in the previous push.

### Task 3: Check GitHub

Refresh the GitHub page. You should see:

- A new file called \`notes.md\`
- A new commit in the history

### Task 4: Clone to a "new machine" simulation

Simulate working on another computer:

~~~bash
cd ~
git clone https://github.com/YOUR-USERNAME/git-practice.git git-practice-clone
cd git-practice-clone
ls
~~~

You'll see \`hello.py\` and \`notes.md\`. You've successfully copied the entire project from GitHub.

### Reflection

This is the workflow of every professional developer:

- Clone a project once
- Edit locally
- Commit changes
- Push to GitHub
- Repeat

From now on, every project you work on goes through this cycle. You just learned it.`,
    proTips: [
      "Use your real name or a professional username. It's part of your developer identity.",
      "Add a README to every public repo. It's the first thing anyone sees.",
      "Never commit `.env` files or secrets. They end up in your history forever.",
      "Star repos you find interesting. They appear on your profile and help you find them later.",
      "Follow developers you admire. Their activity often surfaces good projects.",
    ],
    commonMistakes: [
      {
        mistake: "Using your GitHub password as the push password",
        fix: "GitHub removed password authentication for Git operations. Use a Personal Access Token (PAT) instead.",
      },
      {
        mistake: "Making every repo private",
        fix: "Public repos are portfolio pieces. Make your best work public.",
      },
      {
        mistake: "Committing node_modules or venv folders",
        fix: "Add them to `.gitignore` before your first commit. They're large and regenerable.",
      },
      {
        mistake: "Forgetting to push after committing",
        fix: "Commits are local. Pushes are to GitHub. Both are needed.",
      },
      {
        mistake: "Assuming a deleted file is gone from history",
        fix: "Git keeps history forever. If you accidentally commit a password, you must change the password — you can't just delete the file.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "The push workflow",
        code: `# First time only (after creating the repo on GitHub)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main

# Every subsequent push (just this)
git add .
git commit -m "Describe your change"
git push`,
      },
      {
        language: "bash",
        title: "Clone an existing project",
        code: `git clone https://github.com/username/repo.git
cd repo
# You now have the entire project + history`,
      },
      {
        language: "bash",
        title: "Get the latest changes",
        code: `git pull
# Fetches any new commits from GitHub into your local repo`,
      },
    ],
    furtherReading: [
      {
        title: "GitHub Docs — Getting started",
        url: "https://docs.github.com/en/get-started",
      },
      {
        title: "GitHub Skills — interactive courses",
        url: "https://skills.github.com/",
      },
      {
        title: "GitHub — Personal Access Tokens",
        url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "basics", "github", "git"],
  },
};