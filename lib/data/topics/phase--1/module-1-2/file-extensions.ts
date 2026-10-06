import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
