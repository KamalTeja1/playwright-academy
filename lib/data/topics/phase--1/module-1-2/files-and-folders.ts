import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
