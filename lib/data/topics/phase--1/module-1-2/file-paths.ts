import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
