export type CodeExample = {
  language: "python" | "typescript" | "javascript" | "bash" | "text";
  title: string;
  code: string;
};

export type CommonMistake = {
  mistake: string;
  fix: string;
};

export type FurtherReading = {
  title: string;
  url: string;
};

export type TopicContent = {
  slug: string;
  title: string;
  summary: string;
  whyItMatters: string;
  notes: string;
  handsOn: string;
  challenge: string;
  proTips: string[];
  commonMistakes: CommonMistake[];
  codeExamples: CodeExample[];
  furtherReading: FurtherReading[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  tags: string[];
};

export const topics: Record<string, TopicContent> = {
  "install-python": {
    slug: "install-python",
    title: "Install Python",
    summary:
      "Install Python 3.10 or newer on your computer — the language we'll use for all our Playwright tests.",
    whyItMatters:
      "You cannot write Python code without Python installed. It's like trying to cook without a kitchen. Install it once, use it forever.",
    notes: `So, first things first. **What is Python?**

Python is a programming language. Think of it like English — but instead of talking to people, you're talking to your computer. You write instructions in Python, and the computer follows them, one line at a time.

### Why Python for Playwright?

Three reasons:

1. **The code is easy to read.** Even if you've never coded before, Python reads almost like English.
2. **The community is huge.** If you get stuck, someone has already asked your exact question on Google.
3. **Playwright supports Python really well.** Locators, actions, assertions — everything works beautifully.

Now let's install it. You need **version 3.10 or newer**. Why? Because Playwright uses some newer features that only exist in 3.10+. If you install an older version, things will break later — and that's painful to debug.

### On Windows

1. Go to python.org/downloads
2. Click the yellow button that says Download Python 3.x.x
3. Run the installer
4. **IMPORTANT:** On the first screen, tick the checkbox that says "Add Python to PATH"
5. Click Install Now
6. Wait for it to finish
7. Close the installer

That checkbox is the single most important thing. If you forget it, Python will install but your terminal won't be able to find it.

### On Mac

The easy way is to use Homebrew. If you don't have Homebrew, go to brew.sh and follow the one-line install command they show.

Then in your terminal, run:

~~~bash
brew install python@3.11
~~~

That's it. Homebrew handles everything.

### On Linux

Most Linux distributions come with Python already. Check the version first. If it's 3.10 or newer, you're done.

If not, use your package manager. For Ubuntu or Debian:

~~~bash
sudo apt update
sudo apt install python3.11
~~~

### How to verify it worked

Close your terminal. **Open a fresh one.** Type:

~~~bash
python --version
~~~

You should see something like:

~~~text
Python 3.11.4
~~~

If it says "python: command not found", jump to the Common Mistakes tab. Don't panic — it's a very common issue with a simple fix.`,
    handsOn: `Let's install Python step by step.

1. Open your browser and go to python.org/downloads
2. Click the yellow download button for the latest stable version (3.11 or 3.12)
3. Run the downloaded installer
4. On the first screen, tick "Add Python to PATH" (Windows only)
5. Click Install Now
6. Wait for it to complete
7. Close the installer

Now open a **new terminal**:

- Windows: Press Win + R, type cmd, press Enter
- Mac: Press Cmd + Space, type terminal, press Enter
- Linux: Press Ctrl + Alt + T

Type this and press Enter:

~~~bash
python --version
~~~

If it worked, you'll see something like "Python 3.11.4".

### Deliverable

You can type "python --version" in any new terminal and see a version number starting with 3.10 or higher.`,
    challenge: `Now that Python is installed, let's check something else.

Run these **three commands** one at a time, pressing Enter after each:

~~~bash
python --version
~~~

~~~bash
pip --version
~~~

~~~bash
python -c "print('Hello from Python')"
~~~

The last one should print "Hello from Python" — that's your first line of Python actually running on your machine.

If any of these fail, note down the **exact error message**. We'll fix it in the next topic.`,
    proTips: [
      "On Mac and Linux, you might need to type python3 instead of python. Both work. Try 'python3 --version' if 'python --version' fails.",
      "Always install the latest stable version. Skip any version labelled 'pre-release' or 'beta' — those are for testing, not for learning.",
      "If you're on Windows and have a choice between Microsoft Store Python and python.org Python, always prefer python.org. It's the official one.",
      "Note down your Python version somewhere. You'll need it if you ask for help later.",
      "Never install Python from random websites. Only use python.org or your OS package manager.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting to tick 'Add Python to PATH' on Windows",
        fix: "Re-run the installer, choose 'Modify', and tick the PATH option. Or uninstall and reinstall — honestly, that's often faster.",
      },
      {
        mistake: "Installing Python 2.x by accident",
        fix: "Always check the version. Python 2 is dead — nobody uses it anymore. You need 3.10 or newer.",
      },
      {
        mistake: "Typing 'Python' (capital P) instead of 'python' (lowercase)",
        fix: "Commands are case-sensitive on Mac and Linux. Always use lowercase: python.",
      },
      {
        mistake: "Not opening a fresh terminal after installing",
        fix: "Close every terminal window and open a brand new one. The old ones don't know Python exists yet.",
      },
      {
        mistake: "Confusing Python with Anaconda",
        fix: "Anaconda is a Python distribution, not Python itself. For learning Playwright, plain Python is simpler.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Check Python version",
        code: "python --version\n# Expected output: Python 3.10.x or higher",
      },
      {
        language: "bash",
        title: "Check pip (Python's package installer)",
        code: "pip --version\n# Expected output: pip 23.x.x from ... (python 3.11)",
      },
      {
        language: "python",
        title: "Your first line of Python",
        code: "# Save this as hello.py\n# Then run: python hello.py\n\nprint(\"Hello, Python!\")\nprint(\"I am learning Playwright.\")",
      },
    ],
    furtherReading: [
      {
        title: "Official Python Downloads",
        url: "https://www.python.org/downloads/",
      },
      {
        title: "Real Python — Installation & Setup Guide",
        url: "https://realpython.com/installing-python/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["setup", "python", "installation"],
  },

  "install-vscode": {
    slug: "install-vscode",
    title: "Install VS Code",
    summary:
      "Install Visual Studio Code — the code editor we'll use to write all our tests.",
    whyItMatters:
      "You could write code in Notepad, but that's like eating soup with a fork. VS Code makes writing, reading, and debugging code ten times easier.",
    notes: `**VS Code** (short for Visual Studio Code) is a code editor made by Microsoft. It's free, it's fast, and it's the editor most professional developers use.

### Why VS Code?

Because:

- It's **free** and works on Windows, Mac, and Linux.
- It has **extensions** that make Python and Playwright easier to write.
- It has a **built-in terminal** so you don't have to switch between windows.
- It has **Git support** built right in.

### Installing it

Go to code.visualstudio.com and click the big **Download** button. The website will detect your operating system automatically.

- **Windows:** Run the .exe file. Accept the defaults.
- **Mac:** Open the .dmg file. Drag VS Code to your Applications folder.
- **Linux:** Download the .deb or .rpm file and install it with your package manager.

### First-time setup

When you open VS Code for the first time, it will ask you a few questions. Just accept the defaults — you can change them later.

The most useful thing to know about VS Code:

**Press Ctrl + backtick** (Ctrl + the key below Esc) to open the built-in terminal at the bottom. You'll use this constantly.

**Press Ctrl + P** to quickly open any file by name. This is a lifesaver on big projects.

**Press Ctrl + Shift + P** to open the command palette. Anything you can do in VS Code is searchable here.

### Do you need extensions?

Not yet — but we'll install four in the next lesson:

- Python
- Pylance
- Playwright Test
- GitLens

We'll do that step by step. Don't install anything yet.`,
    handsOn: `Let's install VS Code.

1. Open your browser and go to code.visualstudio.com
2. Click the big **Download** button (it auto-detects your OS)
3. Run the installer
   - Windows: Run the .exe, accept defaults, click Finish
   - Mac: Open the .dmg, drag to Applications
   - Linux: Install the .deb or .rpm
4. Open VS Code from your Applications or Start menu
5. You should see a Welcome tab with options like "New File" and "Open Folder"

### Test the built-in terminal

1. In VS Code, press **Ctrl + backtick** (Ctrl + the key below Esc)
2. A terminal panel should appear at the bottom
3. Type: python --version
4. If you see a version number, both VS Code and Python are working together

### Deliverable

You can open VS Code, open the built-in terminal, and run "python --version" successfully inside it.`,
    challenge: `Learn three VS Code shortcuts that will save you hours.

Press each shortcut and see what it does:

1. **Ctrl + P** — Quick file open. Type any filename and it appears.
2. **Ctrl + Shift + P** — Command palette. Try typing "toggle terminal".
3. **Ctrl + B** — Toggle the sidebar on and off.

Bonus: In VS Code, go to Help → Keyboard Shortcut Reference and print the cheat sheet if you can. Pin it near your desk.`,
    proTips: [
      "Set your VS Code theme to something easy on the eyes. The default is fine, but 'Dracula' or 'One Dark Pro' are popular among developers.",
      "Enable Auto Save from the File menu. It saves your file every time you switch windows.",
      "Learn Ctrl + / — it comments or uncomments the selected line. You'll use it constantly.",
      "Learn Alt + Up/Down — it moves the current line up or down. Great for reordering code.",
      "If VS Code feels slow, disable extensions you don't use. Fewer extensions = faster editor.",
    ],
    commonMistakes: [
      {
        mistake: "Installing VS Code from a fake website",
        fix: "Only download from code.visualstudio.com. Everything else is a scam or a copy.",
      },
      {
        mistake: "Ignoring the built-in terminal and opening a separate one",
        fix: "The built-in terminal is already inside your project folder. Use it — press Ctrl + backtick.",
      },
      {
        mistake: "Not saving files before running them",
        fix: "VS Code shows a dot next to unsaved files. Always save with Ctrl + S before running.",
      },
      {
        mistake: "Using a VS Code from a random tutorial video without checking the version",
        fix: "Your VS Code might look different from an older tutorial. The core features are the same — don't worry.",
      },
      {
        mistake: "Thinking 'VS Code' and 'Visual Studio' are the same thing",
        fix: "They are completely different. 'Visual Studio' is a heavy IDE for C# and .NET. 'VS Code' is the lightweight editor we're using.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "VS Code shortcuts you'll use every day",
        code: "Ctrl + backtick   Open/close terminal\nCtrl + P          Quick open file\nCtrl + Shift + P  Command palette\nCtrl + S          Save file\nCtrl + /          Toggle comment\nCtrl + B          Toggle sidebar\nCtrl + F          Find in file\nCtrl + Shift + F  Find in all files\nAlt + Up/Down     Move line up/down",
      },
    ],
    furtherReading: [
      {
        title: "Official VS Code site",
        url: "https://code.visualstudio.com/",
      },
      {
        title: "VS Code Tips and Tricks (official docs)",
        url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["setup", "editor", "vscode"],
  },

  "install-git": {
    slug: "install-git",
    title: "Install Git",
    summary:
      "Install Git — the tool that tracks every change you make to your code.",
    whyItMatters:
      "Git is how professional developers save their work. It's like a time machine for your code. You'll use it every single day.",
    notes: `**Git** is a version control system. That sounds scary, but it's actually very simple.

Think of Git like this:

Imagine you're writing a long essay. Every time you finish a paragraph, you save the whole document as "essay_v1", then "essay_v2", then "essay_v3". That way, if you make a mistake, you can always go back to an older version.

Git does exactly this — but **automatically** and **for every line of code**. It's faster, smarter, and it lets multiple people work on the same project without stepping on each other.

### Why do testers need Git?

Because:

- You'll write hundreds of tests. Git tracks every change.
- When something breaks, you can see exactly what changed and when.
- You can try a risky change on a separate branch and throw it away if it fails.
- Every company you work at will use Git. It's non-negotiable.

### Installing Git

**Windows:** Go to git-scm.com and download the installer. Run it. Accept all the defaults — you don't need to customize anything.

**Mac:** If you have Homebrew, run:

~~~bash
brew install git
~~~

If you don't have Homebrew, install it first from brew.sh.

**Linux:** Use your package manager:

~~~bash
sudo apt install git
~~~

### Configure Git (one time only)

After installing, open a terminal and run these two commands. Replace the values with your real name and email — this is what will be attached to every change you make:

~~~bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
~~~

That's it. Git is ready.`,
    handsOn: `Install Git and set it up.

1. Download the installer:
   - Windows: git-scm.com
   - Mac: brew install git
   - Linux: sudo apt install git
2. Run the installer. Accept all defaults.
3. Open a new terminal.
4. Verify Git is installed:

~~~bash
git --version
~~~

You should see something like: git version 2.42.0

5. Configure Git with your name and email:

~~~bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
~~~

6. Verify it worked:

~~~bash
git config --global user.name
~~~

It should print your name.

### Deliverable

"git --version" prints a version number, and "git config --global user.name" prints your name.`,
    challenge: `Explore what Git knows about you.

Run these commands and read the output:

~~~bash
git config --list
~~~

That shows every setting Git is using.

Now let's try something small. Create a folder, initialize it as a Git repo, and see what happens:

~~~bash
mkdir git-practice
cd git-practice
git init
~~~

You'll see a message like: "Initialized empty Git repository in ..."

Now run:

~~~bash
git status
~~~

It says "nothing to commit" because you haven't added anything yet.

Congratulations — you just created your first Git repository.`,
    proTips: [
      "Set your Git email to the same one you used for GitHub. It makes GitHub recognize your commits automatically.",
      "Commit often, with clear messages. 'Fix login bug' is better than 'update'.",
      "Never commit passwords, API keys, or secrets. Use environment variables instead.",
      "If you're new to Git, learn just 5 commands first: init, add, commit, status, push. That's 90% of daily use.",
      "Write commit messages in the present tense: 'Add login test' not 'Added login test'.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting to configure Git name and email",
        fix: "Run 'git config --global user.name' and 'user.email'. Do it once, forget it forever.",
      },
      {
        mistake: "Committing to the wrong branch",
        fix: "Always run 'git status' before committing. It shows which branch you're on.",
      },
      {
        mistake: "Making huge commits that change 50 files at once",
        fix: "Small, focused commits are easier to review and easier to undo. One logical change per commit.",
      },
      {
        mistake: "Committing sensitive data",
        fix: "Use a .gitignore file to exclude files like .env, node_modules/, and secrets.txt.",
      },
      {
        mistake: "Panicking when Git says 'detached HEAD'",
        fix: "You accidentally checked out a specific commit instead of a branch. Run 'git checkout main' to go back to safety.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Check Git version",
        code: "git --version\n# Expected: git version 2.x.x",
      },
      {
        language: "bash",
        title: "Configure Git (one time)",
        code: "git config --global user.name \"Your Name\"\ngit config --global user.email \"your@email.com\"",
      },
      {
        language: "bash",
        title: "Create a new repo",
        code: "mkdir my-project\ncd my-project\ngit init\ngit status",
      },
    ],
    furtherReading: [
      {
        title: "Official Git site",
        url: "https://git-scm.com/",
      },
      {
        title: "Git — The Simple Guide",
        url: "https://rogerdudler.github.io/git-guide/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["setup", "git", "version-control"],
  },

  "verify-tools": {
    slug: "verify-tools",
    title: "Verify All Three Tools Work",
    summary:
      "Make sure Python, VS Code, and Git are all working together before we move on.",
    whyItMatters:
      "Installing is only half the job. Verifying that everything works now saves you hours of debugging later. Trust me on this.",
    notes: `Now that you've installed Python, VS Code, and Git, let's make sure they're all working **together**, not just individually.

This step is boring, but you'll thank yourself later. Every minute you spend verifying now saves an hour of head-scratching when something mysteriously fails during a Playwright test.

### The three commands to check

Open your **terminal inside VS Code** (press Ctrl + backtick in VS Code), and run these one at a time:

~~~bash
python --version
git --version
code --version
~~~

Each should print a version number. If any of them fails, note down the exact error message — we'll fix it.

### The sanity check

Let's make sure all three tools can talk to each other. Create a new Python file:

1. In VS Code, press Ctrl + N for a new file
2. Save it as test_setup.py in a folder of your choice (Ctrl + S)
3. Type this in the file:

~~~python
print("Setup is working!")
~~~

4. Press Ctrl + S to save
5. In the terminal, run:

~~~bash
python test_setup.py
~~~

You should see "Setup is working!" printed.

### What if something fails?

Almost every failure at this stage is one of these:

- Python not found: The PATH issue. See Common Mistakes.
- Git not found: You didn't install it or didn't restart the terminal.
- 'code' command not found on Mac: Open VS Code, press Cmd + Shift + P, type "shell command", and select "Install 'code' command in PATH".

Once all three commands work and the sanity check passes, you're ready for the next phase.`,
    handsOn: `Let's verify everything.

1. Open VS Code
2. Press Ctrl + backtick to open the built-in terminal
3. Run this command:

~~~bash
python --version && git --version
~~~

The && means "run the first command, then the second if the first succeeds."

You should see something like:

~~~text
Python 3.11.4
git version 2.42.0
~~~

4. Create a new Python file:
   - Press Ctrl + N for a new file
   - Paste this: print("Setup is working!")
   - Save as test_setup.py (Ctrl + S)

5. Run the file:

~~~bash
python test_setup.py
~~~

You should see: Setup is working!

### Deliverable

All three tools (Python, VS Code, Git) work in the same terminal, and you can run a Python file from VS Code.`,
    challenge: `Let's build something slightly more complex.

Create a new Python file called check_setup.py with this code:

~~~python
import sys
import subprocess

print("=== Setup Verification ===")
print(f"Python version: {sys.version.split()[0]}")
print(f"Python location: {sys.executable}")

try:
    result = subprocess.run(
        ["git", "--version"],
        capture_output=True,
        text=True,
        check=True,
    )
    print(f"Git: {result.stdout.strip()}")
except Exception as e:
    print(f"Git not found: {e}")

print("All checks complete!")
~~~

Run it:

~~~bash
python check_setup.py
~~~

You should see your Python version, the path where it's installed, and your Git version. If everything prints, your setup is solid.`,
    proTips: [
      "Run the verification again any time you change computers or OS versions.",
      "Take a screenshot of the working output. If things break later, you can compare.",
      "If a tool works in one terminal but not another, it's almost always a PATH issue.",
      "Never skip the sanity check. 2 minutes now saves 2 hours later.",
      "Keep your tools updated. Once a month is enough.",
    ],
    commonMistakes: [
      {
        mistake: "Thinking installation is done once you see the version number",
        fix: "Version numbers confirm the tool is installed. The sanity check confirms it actually runs. Do both.",
      },
      {
        mistake: "Not restarting the terminal after installation",
        fix: "Close every terminal and open a fresh one. Old terminals don't know about new PATH entries.",
      },
      {
        mistake: "Running commands from the wrong folder",
        fix: "Use pwd to check your current folder. Use cd to navigate. The test_setup.py file must be in the folder you run the command from.",
      },
      {
        mistake: "Ignoring small warnings in the terminal",
        fix: "Warnings are usually fine. Errors are not. Learn the difference. Red text = error = stop and read.",
      },
      {
        mistake: "Copy-pasting commands from tutorials without reading them",
        fix: "Read every command before pressing Enter. Understand what it does. This is a skill you'll need forever.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Verify all tools at once",
        code: "python --version && git --version && code --version",
      },
      {
        language: "python",
        title: "Simple sanity check",
        code: "# test_setup.py\nprint(\"Setup is working!\")",
      },
      {
        language: "python",
        title: "Full setup check",
        code: "# check_setup.py\nimport sys\nimport subprocess\n\nprint(\"=== Setup Verification ===\")\nprint(f\"Python version: {sys.version.split()[0]}\")\nprint(f\"Python location: {sys.executable}\")\n\nresult = subprocess.run(\n    [\"git\", \"--version\"],\n    capture_output=True,\n    text=True,\n)\nprint(f\"Git: {result.stdout.strip()}\")\nprint(\"All checks complete!\")",
      },
    ],
    furtherReading: [
      {
        title: "Real Python — Verify Python Installation",
        url: "https://realpython.com/installing-python/",
      },
      {
        title: "Git First-Time Setup",
        url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 10,
    tags: ["setup", "verification", "sanity-check"],
  },
    "vscode-extensions": {
    slug: "vscode-extensions",
    title: "VS Code Extensions",
    summary:
      "Install the four extensions that turn VS Code from a text editor into a Python and Playwright power tool.",
    whyItMatters:
      "Extensions give VS Code superpowers. Without them, you write code blind. With them, you get autocomplete, error highlighting, and one-click test running.",
    notes: `VS Code is already good. But with the **right four extensions**, it becomes brilliant.

Think of extensions like apps on your phone. VS Code is the phone. Extensions are WhatsApp, Google Maps, UPI — each one adds a specific skill.

For our setup, we need exactly **four extensions**:

### 1. Python (by Microsoft)

This is the big one. It gives you:

- **Autocomplete** — as you type, VS Code suggests what comes next
- **Error detection** — red squiggly lines under mistakes
- **Run buttons** — click a play icon to run any Python file
- **Debugging** — pause code, inspect variables, step through line by line

Without this extension, VS Code treats Python files as plain text.

### 2. Pylance

This is a companion to Python. Where Python gives you the basics, Pylance gives you:

- **Type checking** — catches more errors before you run
- **Better autocomplete** — understands your code's structure
- **Quick fixes** — suggests how to fix common mistakes

Pylance usually installs automatically when you install Python. If not, install it separately.

### 3. Playwright Test for VS Code

This is the extension Microsoft built specifically for Playwright. It adds:

- A **test explorer panel** — see all your tests in a tree
- **Run individual tests** with one click
- **Record new tests** with the picker tool
- **Debug tests** with breakpoints
- **Show traces inline** when a test fails

Once we start writing tests, this extension becomes your best friend.

### 4. GitLens

GitLens shows you the **story of every line** in your code:

- Who wrote it and when (hover over any line)
- Why it was changed (see the commit)
- Side-by-side comparisons of file history

You'll use this when you're working with a team and need to understand why a line exists.

### How to install

We'll do it step by step in the Hands-On tab. It takes about 3 minutes for all four.`,
    handsOn: `Let's install all four extensions.

### Method 1: From the Extensions panel

1. Open VS Code
2. Click the **Extensions** icon in the left sidebar (it looks like 4 squares)
3. OR press **Ctrl + Shift + X**

Now install each extension:

**Install Python:**
1. In the search box, type: **Python**
2. Find the one by **Microsoft** (look for the blue checkmark)
3. Click **Install**
4. Wait for it to finish

**Install Pylance:**
1. Search: **Pylance**
2. Find the one by **Microsoft**
3. Click **Install**

**Install Playwright Test for VS Code:**
1. Search: **Playwright**
2. Find **Playwright Test for VSCode** by **Microsoft**
3. Click **Install**

**Install GitLens:**
1. Search: **GitLens**
2. Find **GitLens — Git supercharged** by **GitKraken**
3. Click **Install**

### Verify installation

After all four are installed:

1. Click the **Extensions** icon again
2. You should see all four under the **Installed** section
3. Reload VS Code: **Ctrl + Shift + P** → type **"Reload Window"** → click it

### Deliverable

All four extensions appear in the Installed list, and VS Code has been reloaded.`,
    challenge: `Explore what each extension can do.

1. Open any Python file (or create a blank one called \`test.py\`)
2. Type: \`import sys\` on the first line
3. Then type: \`sys.\` on the next line and stop
4. You should see a **dropdown list** of everything inside the sys module — that's Pylance working

Now try this:
1. Type: \`x = "hello"\` on a new line
2. Then type: \`x.append(1)\` on the next line
3. You should see a **red squiggly underline** under \`.append\` — because strings don't have an append method. VS Code caught the error **before** you ran the code.

That is the power of extensions.`,
    proTips: [
      "Only install extensions you actually use. Each one slows VS Code slightly.",
      "If an extension feels buggy, reload the window (Ctrl + Shift + P → Reload Window). That fixes 90% of issues.",
      "The Python extension by Microsoft is the official one. There are many copycats — always check the publisher.",
      "The Playwright extension only activates when you have a Playwright project open. Don't worry if it seems quiet at first.",
      "You can see all installed extensions' keyboard shortcuts by pressing Ctrl + K then Ctrl + S.",
    ],
    commonMistakes: [
      {
        mistake: "Installing the wrong 'Python' extension",
        fix: "There are many extensions called Python. Only install the one by **Microsoft** — it has a blue checkmark next to the name.",
      },
      {
        mistake: "Forgetting to reload after installing",
        fix: "Some extensions need a reload. Press Ctrl + Shift + P → type 'Reload Window' → click it.",
      },
      {
        mistake: "Installing Playwright (test library) instead of Playwright Test for VSCode (extension)",
        fix: "The extension has 'for VSCode' in its name and is published by Microsoft. The library is a different thing entirely.",
      },
      {
        mistake: "Disabling extensions to speed up VS Code, then forgetting to re-enable",
        fix: "If VS Code feels slow, disable one extension at a time and test. Re-enable everything you actually need.",
      },
      {
        mistake: "Ignoring the extension's own settings",
        fix: "Each extension has settings. Click the gear icon next to any extension to see what you can customize.",
      },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Test Pylance's autocomplete",
        code: "import sys\n\n# Type 'sys.' below and wait for the dropdown\nsys.",
      },
      {
        language: "python",
        title: "Test Pylance's error detection",
        code: "# Pylance should underline .append here in red\nx = \"hello\"\nx.append(1)  # Error: str has no append",
      },
    ],
    furtherReading: [
      {
        title: "VS Code Marketplace",
        url: "https://marketplace.visualstudio.com/",
      },
      {
        title: "Official Python extension",
        url: "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
      },
      {
        title: "Official Playwright extension",
        url: "https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["setup", "vscode", "extensions"],
  },

  "terminal-basics": {
    slug: "terminal-basics",
    title: "Terminal Basics",
    summary:
      "Learn the 8 commands you'll use every single day in the terminal.",
    whyItMatters:
      "You cannot avoid the terminal. Every Playwright command, every test run, every Git push happens through it. Learn these 8 commands and you're set for life.",
    notes: `The terminal looks scary at first. Black screen, blinking cursor, no buttons to click. But once you learn **8 commands**, it becomes the fastest way to do anything on your computer.

### What is a terminal?

A terminal is just a text-based way to talk to your computer. Instead of clicking on folders with a mouse, you type commands to move around, create files, and run programs.

On Windows, it's called **Command Prompt** or **PowerShell**. On Mac and Linux, it's called **Terminal** or **Bash**.

VS Code has a built-in terminal — press **Ctrl + backtick** (the key below Esc). That's the one you'll use.

### The 8 commands you need

**1. pwd — "Where am I?"**

Short for **print working directory**. It tells you the full path of the folder you're currently in.

~~~bash
pwd
~~~

**2. ls — "What's in this folder?"**

Short for **list**. Shows all files and folders in your current location.

~~~bash
ls
~~~

On Windows Command Prompt, this command is \`dir\` instead. Both do the same thing.

**3. cd — "Take me to another folder"**

Short for **change directory**. This is the command you'll use the most.

~~~bash
cd Documents
cd ..
cd ~/projects/my-app
~~~

- \`cd folder\` — go into a folder
- \`cd ..\` — go up one level
- \`cd ~\` — go to your home folder
- \`cd -\` — go back to your previous folder

**4. mkdir — "Create a new folder"**

Short for **make directory**.

~~~bash
mkdir my-project
mkdir -p a/b/c
~~~

The \`-p\` flag creates nested folders in one shot.

**5. touch — "Create a new empty file"**

~~~bash
touch hello.py
touch index.html styles.css
~~~

You can create multiple files at once.

**6. cat — "Show me what's inside a file"**

Short for **concatenate**, but really it means "print this file's contents."

~~~bash
cat README.md
~~~

**7. rm — "Delete this file"**

Short for **remove**. Careful — deleted files don't go to the trash.

~~~bash
rm oldfile.txt
rm -r oldfolder/
~~~

The \`-r\` means "recursive" — needed for folders.

**8. cp and mv — "Copy or move a file"**

~~~bash
cp source.txt destination.txt
mv oldname.txt newname.txt
mv file.txt folder/
~~~

- \`cp\` — copy
- \`mv\` — move or rename

### That's it — 8 commands, endless power

Memorize these and you can navigate any project, on any computer, in any language.`,
    handsOn: `Practice these commands in a scratch folder.

### Step 1: Open the terminal

In VS Code, press **Ctrl + backtick** to open the built-in terminal.

### Step 2: Create a practice folder

Type each command, pressing Enter after each:

~~~bash
cd ~
mkdir terminal-practice
cd terminal-practice
pwd
~~~

You should see the full path of \`terminal-practice\` printed.

### Step 3: Create files and folders

~~~bash
touch notes.txt
mkdir python-playwright
ls
~~~

You should see both \`notes.txt\` and \`python-playwright\` listed.

### Step 4: Write something in the file

~~~bash
echo "My first terminal file" > notes.txt
cat notes.txt
~~~

The \`echo\` command writes text to a file. The \`cat\` command reads it back.

### Step 5: Move and rename

~~~bash
mv notes.txt python-playwright/notes.txt
cd python-playwright
ls
~~~

You should see \`notes.txt\` inside the new folder.

### Step 6: Go back up

~~~bash
cd ..
pwd
ls
~~~

You should be back in \`terminal-practice\`.

### Deliverable

You created a folder, made files inside it, wrote text, moved the file, and navigated back. All using the terminal.`,
    challenge: `Build a mini project structure using only the terminal.

From inside \`terminal-practice\`, run these commands one by one:

~~~bash
mkdir -p my-tests/tests my-tests/pages my-tests/fixtures
touch my-tests/tests/login_test.py my-tests/tests/search_test.py
touch my-tests/pages/login_page.py my-tests/pages/search_page.py
touch my-tests/README.md
touch my-tests/requirements.txt
~~~

Now run this to see the whole tree:

~~~bash
cd my-tests
ls -R
~~~

The \`-R\` flag means "recursive" — it lists everything inside every subfolder.

You just built a project structure identical to what professional Playwright projects use. All without a mouse.`,
    proTips: [
      "Press the **up arrow** to cycle through your previous commands. You'll use this constantly.",
      "Press **Tab** to auto-complete file and folder names. Type 'cd term' and press Tab — it completes to 'terminal-practice'.",
      "Press **Ctrl + C** to stop a running command. Use this when something hangs.",
      "Type 'clear' (or press Ctrl + L) to clear the screen. Clean slate.",
      "Learn one shortcut per day. After a week, the terminal will feel faster than the mouse.",
    ],
    commonMistakes: [
      {
        mistake: "Using 'dir' on Mac/Linux or 'ls' on Windows Command Prompt",
        fix: "On Mac and Linux, use 'ls'. On Windows PowerShell and modern Command Prompt, 'ls' also works now. Only ancient Windows CMD requires 'dir'.",
      },
      {
        mistake: "Forgetting that Linux/Mac filenames are case-sensitive",
        fix: "'Notes.txt' and 'notes.txt' are different files on Mac and Linux. Be consistent with lowercase.",
      },
      {
        mistake: "Running 'rm' without thinking",
        fix: "There's no trash can. Once you rm a file, it's gone. Always check with 'ls' first.",
      },
      {
        mistake: "Typing 'c d' with a space instead of 'cd'",
        fix: "Commands must be one word. 'cd' not 'c d'.",
      },
      {
        mistake: "Not knowing where you are",
        fix: "Run 'pwd' every few commands. It tells you exactly where you are.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Navigate and explore",
        code: "pwd             # Where am I?\nls              # What's here?\nls -la          # Detailed list (hidden files too)\ncd ..           # Go up one level\ncd ~            # Go home",
      },
      {
        language: "bash",
        title: "Create things",
        code: "mkdir my-project           # New folder\nmkdir -p a/b/c             # Nested folders\ntouch file.txt             # New empty file\ntouch a.py b.py c.py       # Multiple files",
      },
      {
        language: "bash",
        title: "Read and delete",
        code: "cat file.txt           # Show contents\nrm file.txt            # Delete file\nrm -r folder/          # Delete folder\ncp a.txt b.txt         # Copy\nmv a.txt b.txt         # Rename or move",
      },
    ],
    furtherReading: [
      {
        title: "Linux Journey — Command Line",
        url: "https://linuxjourney.com/lesson/the-shell",
      },
      {
        title: "Microsoft — Windows Terminal Docs",
        url: "https://learn.microsoft.com/en-us/windows/terminal/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["terminal", "commands", "basics"],
  },

  "virtual-environments": {
    slug: "virtual-environments",
    title: "Virtual Environments",
    summary:
      "Why every Python project needs its own sandbox — and how to create one.",
    whyItMatters:
      "Without virtual environments, you'll install a package for one project and break three others. This is the #1 mistake beginners make. One lesson fixes it forever.",
    notes: `Imagine you're a chef cooking for three different clients. Client A wants Italian, client B wants Mexican, client C wants Japanese. If you used the same pan for all three, everything would taste mixed.

**Virtual environments** solve the same problem for Python projects.

### The problem without virtual environments

Say you have two Playwright projects:

- Project A uses Playwright version 1.40
- Project B uses Playwright version 1.50

If you install Playwright globally, you can only have one version at a time. Install 1.50 and Project A breaks. Install 1.40 and Project B breaks.

This is called **dependency hell**. It's real, and it's painful.

### The solution: virtual environments

A virtual environment is a **copy of Python** just for one project. When you install packages inside it, they don't affect your system Python or any other project.

Each project gets its own:

- Python interpreter (same version, but isolated)
- Packages (site-packages folder)
- Environment variables

Think of it as a private sandbox. Whatever happens in the sandbox stays in the sandbox.

### How it works

You create a virtual environment **once** per project. It's a folder, usually called \`venv\` or \`.venv\`.

Then every time you work on the project, you **activate** the environment. This tells your terminal: "I'm working in this project now. Use its Python and its packages."

When you're done, you **deactivate** — the terminal goes back to normal.

### The three commands you need

~~~bash
python -m venv venv       # Create the environment (once)
source venv/bin/activate  # Activate (Mac/Linux)
venv\\Scripts\\activate    # Activate (Windows)
deactivate                # Deactivate
~~~

That's it. Three commands. Once you learn them, you'll use them on every project forever.

### What about the venv folder name?

You can call it anything:

- \`venv\` — the traditional name
- \`.venv\` — modern convention (hidden folder)
- \`env\` — older convention
- \`my-project-env\` — descriptive but long

Pick one and stick with it. **Always add it to .gitignore** so you don't accidentally commit thousands of files.`,
    handsOn: `Let's create your first virtual environment.

### Step 1: Make a practice project

~~~bash
cd ~
mkdir venv-practice
cd venv-practice
~~~

### Step 2: Create the environment

~~~bash
python -m venv venv
~~~

Wait 5–10 seconds. A folder called \`venv\` appears.

### Step 3: Look inside it (optional)

~~~bash
ls venv
~~~

You'll see folders like \`bin\` (or \`Scripts\` on Windows), \`include\`, \`lib\`. That's your sandbox.

### Step 4: Activate it

**On Mac or Linux:**

~~~bash
source venv/bin/activate
~~~

**On Windows:**

~~~bash
venv\\Scripts\\activate
~~~

You'll notice your terminal prompt changes. It now starts with \`(venv)\`. That means you're inside the virtual environment.

### Step 5: Prove you're isolated

While inside the environment, run:

~~~bash
pip list
~~~

You'll see a very short list — just pip and a couple of default packages. Compare that to your system Python's packages (probably dozens). That's the isolation working.

### Step 6: Deactivate

~~~bash
deactivate
~~~

The \`(venv)\` prefix disappears. You're back in normal Python.

### Deliverable

You created a virtual environment, activated it (saw \`(venv)\` in the prompt), and deactivated it.`,
    challenge: `Create two environments and prove they're isolated.

1. Set up two projects:

~~~bash
cd ~
mkdir project-a project-b
~~~

2. Create a venv in each:

~~~bash
cd project-a
python -m venv venv
source venv/bin/activate
pip install requests
deactivate

cd ../project-b
python -m venv venv
source venv/bin/activate
pip list
~~~

Notice that \`project-b\` doesn't have \`requests\` installed. That's the isolation.

3. Now install a different package in project-b:

~~~bash
pip install pyyaml
pip list
~~~

Only \`pyyaml\` is there, not \`requests\`.

4. Go back to project-a:

~~~bash
cd ../project-a
source venv/bin/activate
pip list
~~~

Only \`requests\` is there, not \`pyyaml\`.

You now have two completely separate Python environments on the same machine. That's the superpower.`,
    proTips: [
      "Always create a venv for every new Python project. No exceptions.",
      "Name it `.venv` (with a leading dot) — it keeps your project folder cleaner.",
      "Add `venv/` or `.venv/` to your `.gitignore` immediately after creating the project.",
      "If you ever see `(venv)` in your prompt but packages aren't installed right, you might have the wrong venv activated. Run `which python` to check.",
      "Never commit a venv folder to Git. It's thousands of files and platform-specific.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting to activate the venv before installing packages",
        fix: "Look for `(venv)` in your terminal prompt. If it's missing, activate first.",
      },
      {
        mistake: "Committing the venv folder to Git",
        fix: "Add 'venv/' to .gitignore. Do it right after creating the project.",
      },
      {
        mistake: "Creating the venv, then installing packages globally by accident",
        fix: "Always check the prompt. If it doesn't say (venv), you're installing globally.",
      },
      {
        mistake: "Using a venv from another project",
        fix: "Each project has its own venv. Don't share them. Create a new one.",
      },
      {
        mistake: "Naming it 'venv' in one project and '.venv' in another",
        fix: "Pick one convention. I recommend `.venv` because it's the modern default.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Create and activate (Mac/Linux)",
        code: "cd my-project\npython -m venv .venv\nsource .venv/bin/activate\n# Prompt now shows: (.venv)",
      },
      {
        language: "bash",
        title: "Create and activate (Windows)",
        code: "cd my-project\npython -m venv .venv\n.venv\\Scripts\\activate\n# Prompt now shows: (.venv)",
      },
      {
        language: "bash",
        title: "Check isolation",
        code: "pip list\n# Short list — only pip and defaults\n\nwhich python\n# Should point inside .venv/",
      },
    ],
    furtherReading: [
      {
        title: "Official Python venv docs",
        url: "https://docs.python.org/3/library/venv.html",
      },
      {
        title: "Real Python — Python Virtual Environments",
        url: "https://realpython.com/python-virtual-environments-a-primer/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["python", "venv", "setup"],
  },

  "pip-essentials": {
    slug: "pip-essentials",
    title: "pip Essentials",
    summary:
      "Install, freeze, and share Python packages — the three pip commands every project needs.",
    whyItMatters:
      "pip is how you install every Python library you'll ever use, including Playwright. Three commands cover 95% of your needs.",
    notes: `**pip** is Python's package installer. Whenever you need a new library — Playwright, requests, pytest — pip fetches it from the internet and installs it in your project.

Think of pip like the App Store on your phone. You search for an app, tap install, and it appears. Same thing, but for Python packages.

### The three pip commands you actually need

**1. pip install — get a package**

~~~bash
pip install requests
pip install pytest
pip install pytest-playwright
~~~

You can install multiple at once:

~~~bash
pip install requests pytest pytest-playwright
~~~

You can install a specific version:

~~~bash
pip install requests==2.31.0
~~~

You can upgrade:

~~~bash
pip install --upgrade requests
~~~

**2. pip freeze — list what's installed**

~~~bash
pip freeze
~~~

This prints every package and its exact version. Useful when you want to know what's in your environment.

**3. pip install -r requirements.txt — install everything from a list**

This is the teamwork command. When you clone a project from GitHub, you don't install packages one by one. You install them all from a list.

~~~bash
pip install -r requirements.txt
~~~

### The requirements.txt file

This is a plain text file that lists every package your project needs:

~~~text
pytest==7.4.0
pytest-playwright==0.4.3
requests==2.31.0
~~~

Generate it automatically with:

~~~bash
pip freeze > requirements.txt
~~~

The \`>\` symbol means "write the output of the command on the left into the file on the right."

### Why versions matter

Notice the \`==\` in \`requests==2.31.0\`? That pins the exact version. It means "I want version 2.31.0 specifically."

Why pin versions? Because if you don't, one day pip installs a newer version with breaking changes, and suddenly your tests fail with no code changes. Pinning prevents that.

### The workflow

For a new project:

1. Create a virtual environment
2. Activate it
3. pip install whatever you need
4. pip freeze > requirements.txt (to save the list)

For a shared project (cloned from Git):

1. Create a virtual environment
2. Activate it
3. pip install -r requirements.txt (installs everything)
4. Start working`,
    handsOn: `Let's practice the pip workflow.

### Step 1: Create a fresh project

~~~bash
cd ~
mkdir pip-practice
cd pip-practice
python -m venv .venv
source .venv/bin/activate
~~~

(Windows users: use \`.venv\\Scripts\\activate\`)

### Step 2: Check what's installed

~~~bash
pip list
~~~

You'll see a very short list. Just pip and a couple of basics.

### Step 3: Install a package

~~~bash
pip install requests
~~~

Wait a few seconds. You'll see output like:

~~~text
Collecting requests
  Downloading requests-2.31.0-py3-none-any.whl
Installing collected packages: requests
Successfully installed requests-2.31.0
~~~

### Step 4: Verify it's installed

~~~bash
pip list
~~~

Now \`requests\` appears in the list. Also notice: pip installed \`requests\` plus its dependencies (\`certifi\`, \`charset-normalizer\`, \`idna\`, \`urllib3\`).

### Step 5: Save the list

~~~bash
pip freeze > requirements.txt
cat requirements.txt
~~~

You'll see every package and its version written to the file.

### Step 6: Install from the file (simulate a teammate)

Delete the environment and rebuild it:

~~~bash
deactivate
rm -rf .venv
python -m venv .venv
source .venv/bin/activate
pip list
~~~

The environment is empty again — no \`requests\`.

Now install from the requirements file:

~~~bash
pip install -r requirements.txt
pip list
~~~

All packages are back. This is exactly how you'll set up Playwright projects later.

### Deliverable

You installed a package, saved the list, wiped the environment, and rebuilt it from the list.`,
    challenge: `Build a requirements.txt for a Playwright project — before you've started it.

Imagine you're starting a Playwright Python project. You know you'll need:

- \`pytest\` — for the test runner
- \`pytest-playwright\` — the plugin that connects Playwright with Pytest
- \`requests\` — for API calls

Create a folder called \`future-playwright-project\`:

~~~bash
cd ~
mkdir future-playwright-project
cd future-playwright-project
python -m venv .venv
source .venv/bin/activate
~~~

Install all three at once:

~~~bash
pip install pytest pytest-playwright requests
~~~

Save the list:

~~~bash
pip freeze > requirements.txt
cat requirements.txt
~~~

You now have a project that's ready for a teammate to clone and set up with one command. That's professional-level setup, and you just did it.`,
    proTips: [
      "Always pin versions in requirements.txt. Your future self will thank you.",
      "Use `pip install --upgrade pip` first — the latest pip is faster and safer.",
      "If pip is slow, add the `--quiet` flag: `pip install --quiet requests`.",
      "Never install packages without activating your venv first. Check the (venv) prefix in your prompt.",
      "If a package fails to install, read the error. It usually says exactly which other package or Python version is missing.",
    ],
    commonMistakes: [
      {
        mistake: "Installing packages globally instead of in a venv",
        fix: "Always activate your venv first. Look for (venv) in the prompt.",
      },
      {
        mistake: "Forgetting to run 'pip freeze > requirements.txt' after installing new packages",
        fix: "Make it a habit. After every install session, update the file.",
      },
      {
        mistake: "Not pinning versions",
        fix: "Always use pip freeze, not pip list, to generate requirements.txt. freeze includes exact versions.",
      },
      {
        mistake: "Committing requirements.txt with system packages included",
        fix: "Only freeze from inside a clean venv. If your venv has extra packages you don't need, uninstall them first.",
      },
      {
        mistake: "Using 'pip' when you should use 'pip3'",
        fix: "On most modern systems, 'pip' works. If it doesn't, try 'pip3'. If neither works, use 'python -m pip'.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Install a package",
        code: "pip install requests\npip install pytest pytest-playwright\npip install --upgrade requests",
      },
      {
        language: "bash",
        title: "Save and restore",
        code: "# Save the current list\npip freeze > requirements.txt\n\n# Install from a saved list\npip install -r requirements.txt",
      },
      {
        language: "text",
        title: "Example requirements.txt",
        code: "pytest==7.4.0\npytest-playwright==0.4.3\nrequests==2.31.0\nplaywright==1.40.0",
      },
    ],
    furtherReading: [
      {
        title: "Official pip documentation",
        url: "https://pip.pypa.io/en/stable/",
      },
      {
        title: "PyPI — the Python Package Index",
        url: "https://pypi.org/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["python", "pip", "packages"],
  },

  "devtools-tour": {
    slug: "devtools-tour",
    title: "Browser DevTools Tour",
    summary:
      "The 7 DevTools panels every tester must know — because this is where you'll find locators.",
    whyItMatters:
      "Playwright finds elements by their HTML. To write good locators, you need to inspect the page. DevTools is your window into the DOM.",
    notes: `**DevTools** (short for Developer Tools) is a built-in browser toolkit. Every browser has it — Chrome, Firefox, Edge, Safari.

You'll use DevTools every single day as a Playwright engineer. It's how you:

- Inspect elements to find good locators
- Watch network requests to debug APIs
- Check cookies and storage
- See console errors

Let's open it and tour the seven panels you'll actually use.

### Opening DevTools

**Windows/Linux:** Press **F12** or **Ctrl + Shift + I**
**Mac:** Press **Cmd + Option + I**

Or right-click anywhere on a page and choose **Inspect**.

DevTools appears as a panel on the side or bottom of the browser. It has a bunch of tabs across the top.

### Panel 1: Elements

This is the most important panel for Playwright work.

It shows you the **HTML structure** of the page. Hover over any element on the page, right-click, choose **Inspect** — and the Elements panel highlights that exact HTML element.

You'll use this constantly to:

- Find the element's id, class, role, aria-label
- See if the element has a data-testid
- Understand parent-child relationships

**This is where you'll look for good locators.**

### Panel 2: Console

The Console shows **messages from the page's JavaScript**. Errors, warnings, and any custom logs.

Useful for:

- Seeing if JavaScript errors appear when you click something
- Running JavaScript on the page directly
- Debugging issues that don't show up in the UI

You can type JavaScript directly into the console. Try: \`document.title\` and press Enter.

### Panel 3: Network

Every request the page makes — API calls, images, fonts, scripts — appears here.

You'll use this to:

- See what API calls a page makes
- Check request and response headers
- Verify what data is being sent
- Debug slow-loading pages

Pro tip: tick the **Preserve log** checkbox. It keeps requests visible even after navigation.

### Panel 4: Application

This panel shows **storage** — cookies, localStorage, sessionStorage, IndexedDB.

You'll use this for:

- Checking if a login created a cookie
- Viewing what's stored in localStorage
- Testing auth state

For Playwright, this is how you'll understand \`storage_state\` — the file we save and reuse for tests.

### Panel 5: Sources

The Sources panel shows **every file the browser loaded** — HTML, CSS, JavaScript.

You'll rarely need this as a Playwright engineer. But you'll use it when a test fails because a JavaScript file didn't load.

### Panel 6: Performance

Records and analyzes page performance. Shows frame rate, rendering time, and CPU usage.

Advanced. You'll mostly ignore this at first.

### Panel 7: Lighthouse

Runs an automated audit of the page and gives it a score for:

- Performance
- Accessibility
- Best practices
- SEO

Useful for getting a quick "health check" of any web page. Playwright has similar features, so we'll revisit this later.

### The three panels you'll use daily

For Playwright work, remember these three:

1. **Elements** — for locators
2. **Network** — for API debugging
3. **Application** — for cookies and storage

The other four are secondary. Learn them as you need them.`,
    handsOn: `Let's tour DevTools on a real page.

### Step 1: Open DevTools

1. Open Chrome (or any browser)
2. Go to: **playwright.dev**
3. Press **F12** (or right-click → Inspect)

### Step 2: Practice with the Elements panel

1. Click the **Elements** tab in DevTools
2. Look at the top-left of the Elements panel — there's a small arrow icon (the **selection tool**)
3. Click that arrow (or press **Ctrl + Shift + C**)
4. Now hover over the "Get started" button on the playwright.dev page
5. Click it

The Elements panel jumps to the exact HTML for that button. You'll see something like:

~~~html
<a class="getStarted..." href="/docs/intro">Get started</a>
~~~

**This is how you find locators.** For this element, Playwright could use:

- \`page.get_by_role("link", name="Get started")\`
- \`page.get_by_text("Get started")\`

Both work. Role-based is preferred.

### Step 3: Play with the Console

1. Click the **Console** tab
2. Type this and press Enter:

~~~javascript
document.title
~~~

You'll see the page title printed. That's JavaScript running on the live page.

Try this too:

~~~javascript
document.querySelectorAll("a").length
~~~

It tells you how many links are on the page.

### Step 4: Explore Network

1. Click the **Network** tab
2. Click the **Preserve log** checkbox
3. Refresh the page (F5)
4. Watch requests flow in

Click any request to see its details — headers, response, timing. This is what a real tester does to understand how a page works.

### Step 5: Check Application

1. Click the **Application** tab
2. In the left sidebar, expand **Cookies**
3. Click **https://playwright.dev**

You'll see the cookies this site stored on your browser.

Try **Local Storage** and **Session Storage** too — same idea.

### Deliverable

You opened DevTools, used the selection tool to inspect an element, ran JavaScript in the console, watched a network request, and viewed cookies.`,
    challenge: `Pick any website you use daily — a shopping site, a bank, a news site — and explore it with DevTools.

Complete these tasks:

1. **Find three different elements** using the selection tool
   - A button
   - A link
   - An input field

2. **For each element**, write down what locator you'd use in Playwright
   - Does it have a role you can use?
   - Does it have visible text?
   - Does it have a data-testid?

3. **Open the Network tab** and log into the site (if you can)
   - What API request fires when you log in?
   - What's the response?

4. **Open the Application tab** after logging in
   - What cookies were created?
   - What's stored in localStorage?

This is exactly the exploration a Playwright engineer does before writing tests for a new site. You just did it manually.`,
    proTips: [
      "Learn the keyboard shortcut Ctrl + Shift + C (or Cmd + Shift + C) — it toggles the element selector instantly.",
      "In the Elements panel, right-click any element and choose 'Copy → Copy selector' for a CSS selector, or 'Copy → Copy JS path' for the JavaScript path. Both are useful starting points.",
      "DevTools remembers what tab you were on per site. So if you always use Elements on your test site, it opens to that tab.",
      "Use the Network panel's 'Fetch/XHR' filter to see only API calls. Hides images and fonts.",
      "Undock DevTools into its own window (three-dot menu → Dock side → Undock) if you have two monitors. It's much easier to work with.",
    ],
    commonMistakes: [
      {
        mistake: "Using the Elements panel to find locators, then copying brittle CSS classes",
        fix: "Prefer role-based locators. Copy the CSS only as a fallback. Playwright encourages role-based for a reason.",
      },
      {
        mistake: "Not using the selection tool, and searching through raw HTML by hand",
        fix: "Click the arrow icon in the top-left of Elements (or Ctrl + Shift + C). Then click the element on the page. Instant match.",
      },
      {
        mistake: "Forgetting to enable 'Preserve log' in Network",
        fix: "Without it, all requests vanish when the page navigates. Always enable it when debugging login flows.",
      },
      {
        mistake: "Trying to learn all 7 panels at once",
        fix: "Learn Elements first. Then Network. Then Application. Ignore the rest until you need them.",
      },
      {
        mistake: "Thinking DevTools is only for developers",
        fix: "Testers use DevTools more than most developers. It's your primary tool.",
      },
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "Console snippets you'll use",
        code: "document.title                         // Page title\ndocument.querySelectorAll(\"a\").length // Count links\nwindow.location.href                   // Current URL\ndocument.cookie                        // All cookies",
      },
      {
        language: "text",
        title: "What a good Playwright locator looks like",
        code: "Preferred (role-based):\n  get_by_role(\"button\", name=\"Submit\")\n\nGood (text-based):\n  get_by_text(\"Sign in\")\n\nGood (label-based):\n  get_by_label(\"Email address\")\n\nFallback (CSS):\n  locator(\"button.submit-btn\")\n\nAvoid (XPath):\n  locator(\"//button[contains(@class, 'submit')]\")",
      },
    ],
    furtherReading: [
      {
        title: "Chrome DevTools Documentation",
        url: "https://developer.chrome.com/docs/devtools/",
      },
      {
        title: "Playwright — Locators guide",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 35,
    tags: ["devtools", "debugging", "locators"],
  },
    "html-structure": {
    slug: "html-structure",
    title: "HTML Structure",
    summary:
      "The basic skeleton every web page is built on — html, head, and body.",
    whyItMatters:
      "Every Playwright test starts with a page written in HTML. If you can't read HTML, you can't write good locators. This is the foundation.",
    notes: `**HTML** stands for **HyperText Markup Language**. It's the language that describes the *structure* of every web page. Not the colors, not the fonts — just the structure.

Think of a web page like a building. HTML is the walls, doors, windows, and rooms. CSS is the paint and furniture. JavaScript is the electricity and plumbing.

### The basic skeleton

Every single HTML page, from a simple blog to Google, follows the same basic pattern:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world</h1>
    <p>This is my first page.</p>
  </body>
</html>
~~~

Only **six lines** and you already have a valid web page. Let's break it down line by line.

### 1. \`<!DOCTYPE html>\`

This is a **declaration**, not a tag. It tells the browser: "This is modern HTML5, not some ancient version from 1999." Always put it on line 1.

### 2. \`<html lang="en">\`

The root element. Everything else lives inside this. The \`lang="en"\` attribute tells the browser and screen readers that the page is in English. Important for accessibility.

### 3. \`<head>\`

This is the **metadata** section. Nothing here shows up on the visible page. It contains:

- \`<title>\` — shown in the browser tab
- \`<meta>\` — character set, viewport, description
- \`<link>\` — CSS files
- \`<script>\` — JavaScript files

Think of \`<head>\` as the backstage of a theatre. The audience (user) doesn't see it, but it's crucial for the show.

### 4. \`<body>\`

Everything **visible** on the page goes here. Headings, paragraphs, images, buttons, forms — all inside \`<body>\`.

When Playwright looks for elements, it's almost always looking inside \`<body>\`.

### 5. Closing tags

Almost every tag has a matching closing tag:

~~~html
<h1>Hello</h1>     <!-- opening + closing -->
<p>Some text</p>   <!-- opening + closing -->
~~~

The \`/\` character tells the browser "this is the end of the element."

Some tags are **self-closing** — they don't have content inside:

~~~html
<img src="cat.jpg" />
<br />
<input type="text" />
~~~

### Why this matters for Playwright

When you write a test, you'll inspect the page and see HTML like this:

~~~html
<div class="login-form">
  <label for="email">Email</label>
  <input id="email" type="email" />
  <button type="submit">Log in</button>
</div>
~~~

Every Playwright locator you write — \`get_by_label\`, \`get_by_role\`, \`locator("#email")\` — is based on this structure. Knowing what \`<head>\` vs \`<body>\` means, or what a closing tag looks like, is the difference between guessing and understanding.

### The DOM — one small note

When you inspect a page in DevTools, you're looking at the **DOM** — the live version of the HTML after JavaScript has run. The original HTML source (right-click → View Page Source) might be different, because the DOM can change dynamically.

For Playwright, we always care about the **DOM**, not the raw source. Playwright sees what the browser sees after JavaScript has done its job.`,
    handsOn: `Let's build a page from scratch.

### Step 1: Create a new folder

~~~bash
cd ~
mkdir html-practice
cd html-practice
~~~

### Step 2: Create an HTML file

In VS Code, create a new file called \`index.html\` in the \`html-practice\` folder.

### Step 3: Type this into the file

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to my practice page</h1>
    <p>This is my first HTML page. It took me 5 minutes.</p>
    <p>Soon I'll add buttons, forms, and images.</p>
  </body>
</html>
~~~

### Step 4: Open it in a browser

In VS Code, right-click the \`index.html\` file → **Reveal in File Explorer** → double-click the file.

Or in the terminal:

~~~bash
# Mac
open index.html

# Windows
start index.html
~~~

Your browser opens and shows a simple page with a heading and two paragraphs.

### Step 5: Inspect it

Right-click the heading → **Inspect**.

You'll see the Elements panel showing your exact HTML. This is the *same view* Playwright will use to find elements.

### Deliverable

You created an HTML file, opened it in a browser, and inspected it with DevTools. The page shows your heading and paragraphs.`,
    challenge: `Now break the page on purpose to see how HTML handles mistakes.

### Task 1: Remove the closing tag

Delete the \`</p>\` after the second paragraph. Save. Refresh the browser.

The page still renders. Browsers are forgiving — they guess where you meant to close a tag. But this is **bad practice**. Playwright locators can break on malformed HTML.

Fix it — put the \`</p>\` back.

### Task 2: Change the doctype

Change \`<!DOCTYPE html>\` to \`<!DOCTYPE html5>\`.

Refresh. The page probably still works, but the browser is now in "quirks mode" — old, weird behaviour for ancient sites. Modern browsers do their best to fix things, but you don't want to be in quirks mode. Playwright works better with modern mode.

Fix it — change it back to \`<!DOCTYPE html>\`.

### Task 3: Add a meta viewport

Add this inside \`<head>\`:

~~~html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
~~~

Save, refresh, then **resize your browser window** to be very narrow. You'll see the text adjust — the page is now mobile-friendly.

This tag is required for any modern site. Testing mobile viewports with Playwright works best when pages include it.`,
    proTips: [
      "Always write `<!DOCTYPE html>` on line 1. It's a declaration, not a tag, so no closing slash.",
      "Use 2 spaces or 4 spaces for indentation — pick one and be consistent. VS Code can auto-format with `Ctrl + Shift + I`.",
      "Self-closing tags like `<img />`, `<br />`, `<input />` don't have children. Don't write `</img>`.",
      "Line numbers on the left side of VS Code help you spot missing closing tags.",
      "In DevTools, you can collapse/expand any element with the small triangle on its left. Handy on big pages.",
    ],
    commonMistakes: [
      {
        mistake: "Forgetting the closing tag on a container element",
        fix: "Every `<div>`, `<p>`, `<h1>`, etc. needs a matching `</tag>`. VS Code highlights matching brackets automatically — use it.",
      },
      {
        mistake: "Putting visible content inside `<head>`",
        fix: "If it should show on the page, it goes inside `<body>`. `<head>` is metadata only.",
      },
      {
        mistake: "Using capital tags like `<DIV>` or `<Body>`",
        fix: "HTML is case-insensitive, but convention is all-lowercase. Use `<div>`, `<body>`.",
      },
      {
        mistake: "Forgetting `lang=\"en\"` on `<html>`",
        fix: "Always set it. Screen readers use it to decide pronunciation. Accessibility tools flag missing lang.",
      },
      {
        mistake: "Viewing page source instead of the DOM when debugging",
        fix: "Right-click → Inspect gives you the live DOM (what Playwright sees). Right-click → View Page Source gives you the raw file. They can differ.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The minimal valid HTML page",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`,
      },
      {
        language: "text",
        title: "A typical page with head and body content",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login — MyApp</title>
  </head>
  <body>
    <h1>Sign in</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Log in</button>
    </form>
  </body>
</html>`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
      },
      {
        title: "MDN — Document and website structure",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["html", "web-fundamentals", "structure"],
  },

  "html-tags": {
    slug: "html-tags",
    title: "HTML Tags",
    summary:
      "The building blocks of every page — div, span, p, a, button, input, and more.",
    whyItMatters:
      "Every Playwright locator targets a specific tag. If you don't know what a button looks like in HTML, you can't reliably find it.",
    notes: `HTML has **over 100 tags**, but you'll use about **15 of them** every single day. Let's look at the ones that matter.

### Text tags

**\`<h1>\` to \`<h6>\` — Headings**

~~~html
<h1>Main title</h1>
<h2>Section heading</h2>
<h3>Sub-section</h3>
~~~

\`<h1>\` is the most important heading. \`<h6>\` is the least. Search engines and screen readers use this hierarchy.

**\`<p>\` — Paragraph**

~~~html
<p>This is a paragraph of text.</p>
~~~

**\`<span>\` — Inline container**

~~~html
<p>My name is <span class="highlight">Ravi</span>.</p>
~~~

Useful for styling a small piece of text inside a paragraph.

### Layout tags

**\`<div>\` — Block container**

~~~html
<div class="card">
  <h3>Card title</h3>
  <p>Card content</p>
</div>
~~~

The most generic container. Used everywhere. Div soup (too many divs) is a problem we'll discuss in the semantic HTML lesson.

### Links and buttons

**\`<a>\` — Link**

~~~html
<a href="https://example.com">Visit example</a>
<a href="/about">About us</a>
<a href="#section-2">Jump to section 2</a>
~~~

\`<a>\` **navigates** somewhere. It has an \`href\` attribute.

**\`<button>\` — Button**

~~~html
<button type="button">Click me</button>
<button type="submit">Submit form</button>
~~~

\`<button>\` **does something** without navigating. No \`href\`.

Playwright's \`get_by_role\` treats these differently — links have role \`link\`, buttons have role \`button\`. Knowing which is which matters.

### Form tags

**\`<form>\` — Form wrapper**

~~~html
<form action="/login" method="post">
  ...
</form>
~~~

**\`<input>\` — Input field**

~~~html
<input type="text" placeholder="Enter your name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
<input type="submit" value="Send" />
~~~

The \`type\` attribute changes behaviour completely.

**\`<select>\` and \`<option>\` — Dropdown**

~~~html
<select name="country">
  <option value="in">India</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
~~~

**\`<textarea>\` — Multi-line text**

~~~html
<textarea rows="4" cols="50">Your message here</textarea>
~~~

**\`<label>\` — Form field label**

~~~html
<label for="email">Email address</label>
<input id="email" type="email" />
~~~

The \`for\` attribute on \`<label>\` matches the \`id\` on \`<input>\`. This is what makes \`get_by_label\` work in Playwright.

### Lists

~~~html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
~~~

\`<ul>\` — unordered (bullets). \`<ol>\` — ordered (numbers). \`<li>\` — list item.

### Images and embeds

~~~html
<img src="logo.png" alt="Company logo" />
<iframe src="https://www.youtube.com/embed/xyz"></iframe>
~~~

\`<img>\` embeds an image. The \`alt\` attribute is critical — it describes the image for screen readers and for Playwright's \`get_by_alt_text\`.

\`<iframe>\` embeds another web page inside yours. Playwright handles iframes with \`frame_locator\`.

### Tables

~~~html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ravi</td>
      <td>ravi@example.com</td>
    </tr>
  </tbody>
</table>
~~~

Tables are less common today but still everywhere in admin dashboards. Playwright's role-based locators work beautifully with them — \`get_by_role("row")\`, \`get_by_role("cell")\`.

### That's your 15 tags

\`<html>\`, \`<head>\`, \`<body>\`, \`<h1>\`–\`<h6>\`, \`<p>\`, \`<span>\`, \`<div>\`, \`<a>\`, \`<button>\`, \`<form>\`, \`<input>\`, \`<select>\`, \`<option>\`, \`<textarea>\`, \`<label>\`, \`<ul>\`, \`<ol>\`, \`<li>\`, \`<img>\`, \`<iframe>\`, \`<table>\`.

That's 90% of what you'll see in real projects.`,
    handsOn: `Let's build a page that uses all the important tags.

### Step 1: Create a file

In your \`html-practice\` folder, create \`tags.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tag Practice</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <h2>About me</h2>
    <p>I am learning Playwright. My name is <span>Ravi</span>.</p>

    <h2>Contact</h2>
    <a href="mailto:ravi@example.com">Send email</a>

    <h2>Sign up</h2>
    <form>
      <label for="username">Name</label>
      <input id="username" type="text" placeholder="Your name" />

      <label for="country">Country</label>
      <select id="country">
        <option value="in">India</option>
        <option value="us">United States</option>
      </select>

      <label for="bio">Bio</label>
      <textarea id="bio" rows="3"></textarea>

      <button type="submit">Submit</button>
    </form>

    <h2>Skills</h2>
    <ul>
      <li>Python</li>
      <li>Playwright</li>
      <li>Pytest</li>
    </ul>

    <h2>Logo</h2>
    <img src="https://via.placeholder.com/100" alt="Placeholder logo" />
  </body>
</html>
~~~

### Step 3: Open it in the browser

Open the file the same way as before — right-click → open in browser.

### Step 4: Inspect each element

1. Right-click the heading → **Inspect**. Look for \`<h1>\`
2. Right-click the button → **Inspect**. Look for \`<button type="submit">\`
3. Right-click the dropdown → **Inspect**. Look for \`<select>\`
4. Right-click the image → **Inspect**. Look for \`<img>\`

### Deliverable

You built a page with headings, paragraphs, a form, a dropdown, a list, and an image. You inspected 4 different elements in DevTools.`,
    challenge: `Now build a mini "User Profile" card using only the tags you've learned.

Requirements:
- One \`<h1>\` with the profile's name
- One \`<p>\` with a short bio
- One \`<img>\` with an alt text
- One \`<ul>\` with at least 3 hobbies
- One \`<a>\` linking to a fake social profile
- One \`<button>\` labelled "Follow"

Bonus: add a small form with an email input and a submit button.

Once you've built it, open DevTools and answer:
- What role would Playwright use for the "Follow" button?
- What locator would you use for the bio paragraph?
- What role would Playwright use for the "Send email" link?

Write your answers down. This is exactly how you'll think as a Playwright engineer.`,
    proTips: [
      "Learn `<button>` vs `<a>` cold. `<a>` navigates (has href). `<button>` does something without navigating. Playwright treats them as different roles.",
      "Every `<input>` should have a matching `<label for=\"...\">`. This makes `get_by_label` in Playwright work perfectly.",
      "Use `<img alt=\"...\">` for every image. Screen readers and Playwright's `get_by_alt_text` both depend on it.",
      "Prefer `<button>` over clickable `<div>` — browsers, screen readers, and Playwright all understand buttons better.",
      "Tables are still common in enterprise dashboards. Learn `<tr>`, `<th>`, `<td>` — you'll need them.",
    ],
    commonMistakes: [
      {
        mistake: "Using a clickable `<div>` instead of `<button>`",
        fix: "A `<div>` with `onclick` is invisible to screen readers and to Playwright's role-based locators. Use `<button>`.",
      },
      {
        mistake: "Forgetting `type` on `<input>`",
        fix: "Always specify: `type=\"text\"`, `type=\"email\"`, `type=\"password\"`, etc. Default is `text` but being explicit avoids surprises.",
      },
      {
        mistake: "Using `<a href=\"#\">` as a button",
        fix: "That's a link that goes nowhere. If it does an action, use `<button>`. If it navigates, use `<a href=\"...\">`.",
      },
      {
        mistake: "Skipping `<label>` on form inputs",
        fix: "Labels are free accessibility. Without them, screen readers and Playwright's `get_by_label` can't find the input.",
      },
      {
        mistake: "Using `<br>` for spacing instead of CSS",
        fix: "`<br>` is for line breaks in text, not for spacing. Use CSS `margin` or `padding`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The most common tags in one page",
        code: `<h1>Main heading</h1>
<h2>Section heading</h2>
<p>Paragraph with <span>inline span</span>.</p>
<div>Block container</div>
<a href="/page">Link</a>
<button type="button">Button</button>`,
      },
      {
        language: "text",
        title: "A realistic login form",
        code: `<form>
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="you@example.com" />

  <label for="password">Password</label>
  <input id="password" type="password" />

  <label for="remember">
    <input id="remember" type="checkbox" />
    Remember me
  </label>

  <button type="submit">Log in</button>
</form>`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML element reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      },
      {
        title: "MDN — Forms guide",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["html", "tags", "web-fundamentals"],
  },

  "html-attributes": {
    slug: "html-attributes",
    title: "HTML Attributes",
    summary:
      "id, class, name, href, aria-*, data-*, role — the extra info attached to every element.",
    whyItMatters:
      "Locators in Playwright are built on attributes. If you know which attributes to look for, your tests are stable. If you don't, they break every week.",
    notes: `Attributes are **extra information** attached to an HTML tag. They sit inside the opening tag, like \`name="value"\`.

~~~html
<a href="https://example.com" target="_blank" class="btn">Visit</a>
~~~

Here:
- \`href="https://example.com"\` is an attribute
- \`target="_blank"\` is an attribute
- \`class="btn"\` is an attribute

Let's walk through the ones that matter.

### \`id\` — Unique identifier

~~~html
<input id="email" />
<button id="submit-btn">Submit</button>
~~~

An \`id\` must be **unique** on the page. Only one element can have \`id="email"\`.

In Playwright: \`page.locator("#email")\`.

**Caution:** \`id\`s often change in modern apps (React, Vue generate random ones). Use them if they're meaningful, avoid them if they look like \`id="input-4f8e92"\`.

### \`class\` — Style group

~~~html
<div class="card">
<div class="card highlight">
<div class="btn btn-primary">
~~~

An element can have **multiple classes** separated by spaces.

In Playwright: \`page.locator(".card")\`, \`page.locator(".btn-primary")\`.

**Caution:** Classes are for styling. Designers change them. Prefer role-based locators over classes when possible.

### \`name\` — Form field name

~~~html
<input name="email" />
<input name="password" />
~~~

Used when a form is submitted, to identify the field's value.

In Playwright: less common, but useful for \`page.locator("[name='email']")\`.

### \`href\` — Link destination

~~~html
<a href="/about">About</a>
<a href="https://google.com">Google</a>
~~~

Only on \`<a>\` tags. Playwright: \`page.get_by_role("link", name="About")\` — you usually use the text, not the href.

### \`src\` — Source URL

~~~html
<img src="/logo.png" />
<script src="/app.js"></script>
<iframe src="/widget"></iframe>
~~~

Points to an external file. Only on \`<img>\`, \`<script>\`, \`<iframe>\`, \`<video>\`, \`<audio>\`.

### \`type\` — Input type

~~~html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
~~~

Completely changes how the input behaves. Playwright treats \`type="checkbox"\` differently from \`type="text"\`.

### \`placeholder\` — Hint text

~~~html
<input placeholder="Enter your email" />
~~~

The grey text shown when the field is empty.

In Playwright: \`page.get_by_placeholder("Enter your email")\` — this is a great locator when there's no label.

### \`value\` — Current value

~~~html
<input value="Ravi" />
<option value="in">India</option>
~~~

The current value of a field or option.

### \`disabled\` and \`readonly\`

~~~html
<input disabled />
<input readonly />
<button disabled>Submit</button>
~~~

\`disabled\` — the user can't interact with it. Playwright: \`expect(button).to_be_disabled()\`.

\`readonly\` — the user can't edit it, but it's still submitted with the form.

### ARIA attributes — accessibility

~~~html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<div aria-hidden="true">Decorative</div>
<input aria-describedby="help-text" />

<nav role="navigation">
<form role="search">
~~~

These are **gold** for Playwright. ARIA attributes describe the *purpose* of elements, not their appearance. They rarely change, even in design refactors.

- \`aria-label\` — describes the element's purpose in text
- \`aria-labelledby\` — references another element that labels this one
- \`aria-describedby\` — references another element that describes this one
- \`aria-hidden\` — hides the element from screen readers
- \`role\` — explicitly sets the element's role

We'll go deep on these in the accessibility lesson.

### \`data-*\` — Custom data attributes

~~~html
<button data-testid="login-btn">Log in</button>
<div data-user-id="42">Ravi</div>
<li data-product-id="abc-123">Notebook</li>
~~~

Any attribute starting with \`data-\` is custom. It's a way for developers to attach extra info that JavaScript (or test frameworks!) can read.

**\`data-testid\` is the single best attribute for testing.** It's added specifically so tests can find elements. It never changes with design updates.

In Playwright: \`page.get_by_test_id("login-btn")\` — designed exactly for this.

### Attribute priority for locators

When you're choosing a locator, aim in this order:

1. \`role\` + accessible name (best)
2. \`data-testid\` (great)
3. \`label\` or \`placeholder\` (very good)
4. \`id\` (good, if stable)
5. \`name\` (decent)
6. CSS selector (last resort)
7. XPath (avoid unless nothing else works)

This is what Playwright's own documentation recommends. Stick to it and your tests will be rock solid.`,
    handsOn: `Let's attach attributes to elements and inspect them.

### Step 1: Create a file

In \`html-practice\`, create \`attributes.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Attribute Practice</title>
  </head>
  <body>
    <h1>Attribute Playground</h1>

    <input
      id="email"
      name="user-email"
      type="email"
      placeholder="you@example.com"
    />

    <input
      id="password"
      name="user-password"
      type="password"
      placeholder="Enter password"
      aria-label="Password input field"
    />

    <button
      id="login-btn"
      class="btn btn-primary"
      data-testid="login-submit"
    >
      Log in
    </button>

    <img
      src="https://via.placeholder.com/80"
      alt="Company logo"
      width="80"
      height="80"
    />

    <a href="https://example.com" target="_blank" rel="noopener">
      Visit example
    </a>

    <div
      class="card"
      data-user-id="42"
      data-role="admin"
    >
      User card
    </div>
  </body>
</html>
~~~

### Step 3: Inspect

Open the page in your browser, right-click each element, and inspect.

For each element, write down:
- What \`id\` does it have?
- What \`class\` does it have?
- Does it have a \`data-testid\`?
- Does it have an \`aria-label\`?
- What \`role\` would Playwright use?

### Step 4: Test in the browser console

Open DevTools → Console and try:

~~~javascript
document.querySelector("#email")
document.querySelector(".btn-primary")
document.querySelector("[data-testid='login-submit']")
document.querySelectorAll("[data-testid]").length
~~~

Each returns an element or a list. These are the same selectors Playwright uses.

### Deliverable

You inspected 6 different elements and identified each element's attributes. You ran 4 selector queries in the browser console and got results.`,
    challenge: `Now design your own locator strategy for a login form.

Build this form in a new HTML file:

- Email input
- Password input
- "Remember me" checkbox
- "Log in" button
- "Forgot password?" link

For **each element**, add:
- A meaningful \`id\`
- A \`data-testid\` attribute
- An \`aria-label\` (if the visible label doesn't describe it well)

Then, for each element, write down **two Playwright locators** you'd use:

Example:
\`\`\`
Email input:
  1. page.get_by_label("Email")
  2. page.get_by_placeholder("you@example.com")
\`\`\`

Do this for all 5 elements. You now have a small locator strategy document. This is what a real Playwright engineer prepares before writing tests.`,
    proTips: [
      "Always prefer `data-testid` over `class` — classes are for styling and change often; test IDs are stable.",
      "`aria-label` beats `placeholder` because placeholders disappear when the user starts typing.",
      "Never use a locator based on a random-looking `id` like `id=\"input-4f9a\"`. It will break the moment the app rebuilds.",
      "Ask your frontend team to add `data-testid` to important elements. It's a 5-minute task that saves you hours.",
      "In DevTools, the search bar (Ctrl + F while the Elements panel is focused) can find elements by CSS selector. Test your locator there first.",
    ],
    commonMistakes: [
      {
        mistake: "Reusing the same `id` on multiple elements",
        fix: "`id` must be unique. Use `class` for repeating styles, `id` for unique elements.",
      },
      {
        mistake: "Using `class` for locators when a `data-testid` exists",
        fix: "If a test ID is available, use it. Classes are for designers, test IDs are for testers.",
      },
      {
        mistake: "Relying on `placeholder` when a `<label>` exists",
        fix: "Labels survive after the user starts typing. Placeholders don't. Prefer `get_by_label` over `get_by_placeholder`.",
      },
      {
        mistake: "Reading `value` on an input to check what the user typed",
        fix: "For text inputs, the value updates. But for checkboxes, use the `checked` property, not value. Playwright handles this — use `to_be_checked()`.",
      },
      {
        mistake: "Thinking `role` is only for accessibility",
        fix: "Playwright leans heavily on `role` for locators. It's the single most stable attribute you can use.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Elements with their most useful attributes",
        code: `<button data-testid="save" aria-label="Save changes">
  Save
</button>

<input
  id="email"
  name="email"
  type="email"
  placeholder="you@example.com"
  aria-label="Email address"
/>

<a href="/about" target="_blank" rel="noopener">About</a>`,
      },
      {
        language: "python",
        title: "Playwright locators using each attribute type",
        code: `# By role (best)
page.get_by_role("button", name="Save")

# By test id (great)
page.get_by_test_id("save")

# By label (very good)
page.get_by_label("Email address")

# By placeholder (good)
page.get_by_placeholder("you@example.com")

# By id (okay)
page.locator("#email")

# By class (last resort)
page.locator(".btn-primary")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML attribute reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",
      },
      {
        title: "Playwright — Locators best practices",
        url: "https://playwright.dev/python/docs/locators",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 25,
    tags: ["html", "attributes", "locators", "web-fundamentals"],
  },

  "semantic-html": {
    slug: "semantic-html",
    title: "Semantic HTML vs Div Soup",
    summary:
      "Why good HTML makes testing easier — and why div soup is a nightmare.",
    whyItMatters:
      "Semantic HTML is the difference between a test that survives redesigns and one that breaks every sprint. It also happens to be the secret behind Playwright's best locators.",
    notes: `**Semantic HTML** means using the right tag for the right job. Not just \`<div>\` for everything.

Let's look at two versions of the same page.

### Version A — Div soup

~~~html
<div class="header">
  <div class="logo">MyApp</div>
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
    <div class="nav-item">Contact</div>
  </div>
</div>

<div class="main">
  <div class="title">Welcome</div>
  <div class="text">This is the main content.</div>
</div>

<div class="footer">
  <div class="copyright">© 2025 MyApp</div>
</div>
~~~

Everything is a \`<div>\`. It renders fine in a browser. A human can read it. But nothing tells the browser (or Playwright) *what each thing actually is*.

### Version B — Semantic

~~~html
<header>
  <div class="logo">MyApp</div>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <h1>Welcome</h1>
  <p>This is the main content.</p>
</main>

<footer>
  <p>© 2025 MyApp</p>
</footer>
~~~

Same page. Same visual output. But now the browser knows:

- \`<header>\` is the top region
- \`<nav>\` is navigation
- \`<main>\` is the primary content
- \`<footer>\` is the bottom region
- \`<h1>\` is the most important heading
- \`<a>\` are links

### Why this matters for Playwright

Playwright's role-based locators depend on semantic HTML. Compare:

**Finding the Home link in Version A:**
~~~python
page.locator(".nav-item").first  # fragile — will break if classes change
~~~

**Finding the Home link in Version B:**
~~~python
page.get_by_role("link", name="Home")  # stable — uses the actual role
~~~

Version B's locator survives:
- CSS class renames
- Layout changes
- Framework migration (React → Vue → Svelte)
- Dark mode redesigns

Because it's not tied to how things *look*. It's tied to what things *are*.

### The semantic tags you need to know

**\`<header>\`** — Top region of a page or section. Usually contains a logo, title, or nav.

**\`<nav>\`** — Navigation links.

**\`<main>\`** — The main content of the page. Only one per page.

**\`<section>\`** — A thematic grouping of content. Usually has a heading.

**\`<article>\`** — A self-contained piece of content. A blog post, a product card, a comment.

**\`<aside>\`** — Sidebar or supplementary content.

**\`<footer>\`** — Bottom region. Copyright, links, etc.

**\`<figure>\` and \`<figcaption>\`** — An image with a caption.

**\`<time>\`** — A date or time.

### Headings are semantic too

\`<h1>\`, \`<h2>\`, \`<h3>\` — these aren't just styled text. They describe document structure. Screen readers let users jump between headings, like a table of contents.

If you use \`<div class="heading">\` instead of \`<h1>\`, that navigation is lost.

### Lists are semantic

\`<ul>\`, \`<ol>\`, \`<li>\` — a list of items. Screen readers announce "list of 5 items" when they hit a \`<ul>\`.

If it's a list, use \`<ul>\`. Not 5 sibling \`<div>\`s.

### Buttons are semantic

If it does something → \`<button>\`.
If it navigates → \`<a href="...">\`.

Not \`<div onclick="...">\`. That div looks like a button but:
- Screen readers don't announce it as a button
- Playwright's \`get_by_role("button")\` can't find it
- Keyboard users can't Tab to it

### When is a \`<div>\` okay?

Plenty of times. \`<div>\` is fine when:

- You need a wrapper purely for styling
- You're grouping things without a semantic meaning
- You need a layout container (grid or flex child)

Just don't use it for *everything*. A page should have meaningful tags at the top level, and \`<div>\` for layout inside them.

### The test

Look at your page's HTML. Cover the CSS. Ask yourself: does the structure still tell a story? Can someone read the tags and know what each section is?

If yes — you're writing semantic HTML.
If no — you're serving div soup.`,
    handsOn: `Let's convert a div-soup page into semantic HTML.

### Step 1: Create the bad version

In \`html-practice\`, create \`semantic.html\` with:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic Practice</title>
  </head>
  <body>
    <div class="top">
      <div class="logo">MyBlog</div>
      <div class="links">
        <div class="link">Home</div>
        <div class="link">Articles</div>
        <div class="link">About</div>
      </div>
    </div>

    <div class="content">
      <div class="heading">My First Post</div>
      <div class="date">May 15, 2025</div>
      <div class="body">
        This is the content of the post. It talks about learning Playwright.
      </div>
    </div>

    <div class="bottom">
      <div>© 2025 MyBlog</div>
    </div>
  </body>
</html>
~~~

Open in the browser. Looks fine. Now inspect it — everything is a div. No meaning.

### Step 2: Rewrite it semantically

Replace the entire file with:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic Practice</title>
  </head>
  <body>
    <header>
      <div class="logo">MyBlog</div>
      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <article>
        <h1>My First Post</h1>
        <time datetime="2025-05-15">May 15, 2025</time>
        <p>
          This is the content of the post. It talks about learning Playwright.
        </p>
      </article>
    </main>

    <footer>
      <p>© 2025 MyBlog</p>
    </footer>
  </body>
</html>
~~~

Refresh. Visually, it looks nearly identical. But now inspect it.

### Step 3: Inspect and observe

Right-click the nav links → Inspect. They're \`<a>\` tags, not \`<div>\`s.

Right-click the post → Inspect. It's inside \`<article>\`.

### Step 4: Test in console

Open DevTools → Console:

~~~javascript
document.querySelectorAll("nav a").length
document.querySelector("article h1").textContent
document.querySelectorAll("div").length
~~~

Notice: version B has fewer \`<div>\`s. More semantic tags. Same visual result.

### Deliverable

You rebuilt the page with semantic tags. You have fewer divs, more meaning.`,
    challenge: `Take this paragraph and convert it into semantic HTML:

> **Tech Blog** — Home | Posts | About
>
> **How Playwright Changed My Testing Workflow**
> *Posted on April 10, 2025*
>
> After years of dealing with flaky tests, I switched to Playwright. The auto-waiting alone cut my flaky failures by 80%. The trace viewer is genuinely delightful.
>
> [Read more](read-more.html)
>
> ---
>
> © 2025 Tech Blog

Use:
- \`<header>\` for the top bar
- \`<nav>\` for the menu
- \`<article>\` for the blog post
- \`<h1>\` for the post title
- \`<time>\` for the date
- \`<p>\` for the body
- \`<a>\` for the read-more link
- \`<footer>\` for the copyright

Once done, inspect it and identify **3 Playwright locators** you could use to find key elements.`,
    proTips: [
      "Use `<button>` for actions and `<a>` for navigation. Never a `<div>` with `onclick`.",
      "Every page should have exactly one `<h1>` and one `<main>`.",
      "Headings should not skip levels. `<h1>` → `<h2>` → `<h3>`, not `<h1>` → `<h4>`.",
      "If a section feels like a blog post or product card, use `<article>`. If it's a themed block, use `<section>`.",
      "Semantic HTML is free — it doesn't cost anything to use the right tag. The benefits are permanent.",
    ],
    commonMistakes: [
      {
        mistake: "Using `<div>` for clickable elements",
        fix: "Use `<button>`. It's accessible, focusable, and Playwright finds it by role.",
      },
      {
        mistake: "Using `<h3>` for a big subtitle because of how it looks",
        fix: "Headings are for structure, not appearance. Use `<h3>` only if it's a third-level heading. Style with CSS if you need visual hierarchy.",
      },
      {
        mistake: "Wrapping everything in `<section>`",
        fix: "`<section>` should have a heading. If a block doesn't need a heading, use `<div>` or `<article>` or another semantic tag.",
      },
      {
        mistake: "Using `<br>` for vertical spacing between blocks",
        fix: "Use CSS `margin`. `<br>` is for line breaks inside text.",
      },
      {
        mistake: "Confusing `<article>` and `<section>`",
        fix: "`<article>` = standalone (a tweet, a product, a post). `<section>` = thematic grouping with a heading. When in doubt, use `<section>`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Div soup vs semantic",
        code: `<!-- BAD -->
<div class="header">
  <div class="link">Home</div>
</div>

<!-- GOOD -->
<header>
  <a href="/">Home</a>
</header>`,
      },
      {
        language: "text",
        title: "A full semantic page skeleton",
        code: `<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>Post title</h1>
    <time datetime="2025-01-01">Jan 1, 2025</time>
    <p>Body text</p>
  </article>
</main>

<footer>
  <p>© 2025</p>
</footer>`,
      },
      {
        language: "python",
        title: "Playwright locators that work because of semantics",
        code: `page.get_by_role("navigation")
page.get_by_role("link", name="Home")
page.get_by_role("main")
page.get_by_role("article")
page.get_by_role("heading", level=1)`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — HTML sections and outlines",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",
      },
      {
        title: "MDN — Semantics",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["html", "semantic", "accessibility", "web-fundamentals"],
  },

  "accessibility-attributes": {
    slug: "accessibility-attributes",
    title: "Accessibility Attributes",
    summary:
      "aria-label, aria-labelledby, aria-describedby, aria-hidden, and role — and how Playwright uses them.",
    whyItMatters:
      "ARIA attributes are the secret sauce behind Playwright's best locators. Understand them and your tests will survive any redesign.",
    notes: `**ARIA** stands for **Accessible Rich Internet Applications**. It's a set of attributes that make web pages understandable to screen readers — and, as a lucky side effect, to Playwright.

Think of ARIA as **subtitles for the visually impaired**. The element might be an icon-only button (just an X), but ARIA tells screen readers: "This is a Close button."

### Why Playwright loves ARIA

Playwright's \`get_by_role\` locator uses ARIA roles and names. This is the single most reliable way to find elements:

~~~python
page.get_by_role("button", name="Close")
~~~

This works if:
- The element is a \`<button>\` (native role), OR
- The element has \`role="button"\`, OR
- The element has \`aria-label="Close"\`

And it survives:
- CSS class changes
- Layout changes
- Framework migrations

Because it finds the element the same way a screen reader does — by meaning, not by appearance.

### \`role\` — the element's purpose

The \`role\` attribute explicitly sets what an element is:

~~~html
<button role="button">Save</button>
<div role="button">Save</div>
<div role="dialog">...</div>
<div role="navigation">...</div>
<form role="search">...</form>
<ul role="list">
~~~

Common roles:
- \`button\`
- \`link\`
- \`textbox\`
- \`checkbox\`
- \`radio\`
- \`combobox\`
- \`heading\`
- \`navigation\`
- \`main\`
- \`dialog\`
- \`alert\`
- \`search\`
- \`list\`
- \`listitem\`

Native tags get implicit roles:
- \`<button>\` → role "button"
- \`<a href>\` → role "link"
- \`<input type="text">\` → role "textbox"
- \`<input type="checkbox">\` → role "checkbox"
- \`<h1>\` → role "heading", level 1
- \`<nav>\` → role "navigation"
- \`<main>\` → role "main"

You only need explicit \`role\` when the tag doesn't match the intent (e.g., a \`<div>\` acting as a button).

### \`aria-label\` — the accessible name

Used when there's no visible text, or the visible text alone isn't enough.

~~~html
<button aria-label="Close dialog">
  <svg>×</svg>
</button>
~~~

A screen reader (and Playwright) sees this as a button named "Close dialog".

In Playwright:
~~~python
page.get_by_role("button", name="Close dialog")
~~~

**Icon-only buttons need this.** Without it, the button has no name and Playwright can't find it by role.

### \`aria-labelledby\` — reference to another element

Points to another element's \`id\` that contains this element's label.

~~~html
<h2 id="dialog-title">Confirm Delete</h2>
<div role="dialog" aria-labelledby="dialog-title">
  ...
</div>
~~~

The dialog is now labelled "Confirm Delete" — from the \`<h2>\` above it.

### \`aria-describedby\` — reference to a description

Similar, but for **description** instead of **name**. A description is supplementary info.

~~~html
<input
  id="email"
  aria-describedby="email-help"
/>
<p id="email-help">We never share your email.</p>
~~~

A screen reader announces: "Email input field. We never share your email."

### \`aria-hidden\` — hide from screen readers

~~~html
<div aria-hidden="true">Just for decoration</div>
~~~

The element still renders but is ignored by screen readers — and by Playwright's role-based locators.

Useful for:
- Decorative icons
- Duplicate text
- Background shapes

**Caution:** Never use \`aria-hidden\` on interactive elements. That breaks accessibility and Playwright.

### \`aria-expanded\` — is it open or closed?

~~~html
<button aria-expanded="false">Menu</button>
<button aria-expanded="true">Menu</button>
~~~

Common for dropdown menus. Playwright:

~~~python
expect(page.get_by_role("button", name="Menu")).to_have_attribute("aria-expanded", "true")
~~~

### \`aria-checked\` — is it selected?

~~~html
<div role="checkbox" aria-checked="true">Subscribe</div>
~~~

For custom checkboxes that aren't native \`<input type="checkbox">\`.

### \`aria-current\` — current item in a set

~~~html
<nav>
  <a href="/" aria-current="page">Home</a>
  <a href="/about">About</a>
</nav>
~~~

Screen readers announce: "Home, current page." Playwright can find the active page link with:

~~~python
page.get_by_role("link", name="Home").and_(page.locator("[aria-current='page']"))
~~~

### Rules for ARIA — the big five

1. **Prefer native tags.** \`<button>\` beats \`<div role="button">\`. Native is more reliable.
2. **Every interactive element needs a name.** Either visible text, \`aria-label\`, or \`aria-labelledby\`.
3. **Don't use ARIA if native works.** \`<h1>\` already has role "heading". Don't add \`role="heading"\` on top.
4. **Don't hide interactive elements.** \`aria-hidden="true"\` on a button breaks everything.
5. **Test with a screen reader once.** It's 10 minutes and you'll never forget it.

### Why this matters for your career

Every serious company cares about accessibility. WCAG compliance is often legally required. Playwright engineers who understand ARIA write tests that:

- Survive redesigns
- Test the same way users (and screen readers) experience the site
- Catch real accessibility bugs

This is a real career skill, not a toy.`,
    handsOn: `Let's build a page using ARIA attributes and inspect them.

### Step 1: Create a file

In \`html-practice\`, create \`accessibility.html\`.

### Step 2: Paste this

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Accessibility Practice</title>
  </head>
  <body>
    <header>
      <nav aria-label="Main navigation">
        <a href="/" aria-current="page">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <h1>Contact us</h1>

      <form aria-label="Contact form">
        <label for="name">Name</label>
        <input id="name" type="text" required />

        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          aria-describedby="email-help"
          required
        />
        <p id="email-help">We'll never share your email.</p>

        <button
          type="button"
          aria-label="Close form"
          aria-expanded="false"
        >
          ×
        </button>

        <button type="submit" data-testid="contact-submit">
          Send message
        </button>
      </form>
    </main>

    <footer>
      <div aria-hidden="true">🎨</div>
      <p>© 2025 MyApp</p>
    </footer>
  </body>
</html>
~~~

### Step 3: Inspect each ARIA element

Open in the browser. Right-click and inspect:

1. The **nav** element → \`aria-label="Main navigation"\`
2. The **Home link** → \`aria-current="page"\`
3. The **email input** → \`aria-describedby="email-help"\`
4. The **close button** → \`aria-label="Close form"\` and \`aria-expanded="false"\`
5. The **decorative emoji** in the footer → \`aria-hidden="true"\`

### Step 4: Test in the browser console

~~~javascript
document.querySelector("[aria-label='Main navigation']")
document.querySelector("[aria-current='page']")
document.querySelector("[aria-describedby='email-help']")
document.querySelector("[aria-label='Close form']")
document.querySelectorAll("[aria-hidden='true']").length
~~~

Each query returns an element or count.

### Deliverable

You built a page with 5 ARIA attribute types and inspected all of them. You queried each with JavaScript successfully.`,
    challenge: `Build an accessible dropdown menu.

Requirements:
- A \`<button>\` with \`aria-expanded\` (false by default)
- A \`<ul role="menu">\` with 3 \`<li role="menuitem">\` items
- Each menu item is an \`<a>\` with a meaningful name
- The button has an \`aria-label\` describing what it opens

Starter structure:

~~~html
<button aria-label="Open account menu" aria-expanded="false">
  Account
</button>

<ul role="menu">
  <li role="menuitem"><a href="/profile">Profile</a></li>
  <li role="menuitem"><a href="/settings">Settings</a></li>
  <li role="menuitem"><a href="/logout">Logout</a></li>
</ul>
~~~

Now, for each element, write the Playwright locator you'd use:

- The button → \`get_by_role("button", name="Open account menu")\`
- The "Profile" item → \`get_by_role("menuitem")\` + name, or \`get_by_role("link", name="Profile")\`
- The "Settings" item → similar

Then add an \`aria-describedby\` on the button linking to a hidden paragraph explaining the menu.

Bonus: add a decorative icon inside the button using \`aria-hidden="true"\`.`,
    proTips: [
      "Icon-only buttons must have `aria-label`. Without it, neither screen readers nor Playwright can find them.",
      "Use `get_by_role` with `name=` — it works on native tags AND elements with ARIA. It's the most resilient locator.",
      "Test your page with the free Chrome extension 'axe DevTools'. It finds missing ARIA automatically.",
      "Never put `aria-hidden='true'` on something the user clicks. It hides the element from assistive tech.",
      "If you're unsure whether an element needs ARIA, run the browser's built-in accessibility inspector (DevTools → Lighthouse → Accessibility).",
    ],
    commonMistakes: [
      {
        mistake: "Using `<div role=\"button\">` instead of `<button>`",
        fix: "Native `<button>` gives you keyboard focus, Enter/Space handling, and role for free. Only use `role=\"button\"` on a div when you literally cannot use a button element.",
      },
      {
        mistake: "Adding `aria-label` to an element that already has visible text",
        fix: "If the button says 'Save', its accessible name is already 'Save'. Adding `aria-label=\"Save\"` is redundant.",
      },
      {
        mistake: "Using `aria-hidden='true'` on an interactive element",
        fix: "Screen readers will skip it, and so will Playwright's role locators. Remove it.",
      },
      {
        mistake: "Pointing `aria-labelledby` at an id that doesn't exist",
        fix: "Always double-check the id exists. Broken references silently fail.",
      },
      {
        mistake: "Using ARIA where native HTML already works",
        fix: "`<h1>` already has role heading, level 1. Don't write `<h1 role='heading' aria-level='1'>`.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "Icon button with ARIA",
        code: `<button aria-label="Close dialog">
  <svg>×</svg>
</button>

<!-- Playwright -->
<!-- page.get_by_role("button", name="Close dialog").click() -->`,
      },
      {
        language: "text",
        title: "Form field with helper text",
        code: `<label for="password">Password</label>
<input
  id="password"
  type="password"
  aria-describedby="password-help"
/>
<p id="password-help">
  Must be at least 8 characters.
</p>`,
      },
      {
        language: "python",
        title: "Playwright locators using ARIA",
        code: `# By role + accessible name
page.get_by_role("button", name="Save")

# Custom role
page.get_by_role("dialog").get_by_role("button", name="Close")

# By ARIA attribute directly
page.locator("[aria-expanded='true']")

# Check state
expect(page.get_by_role("button", name="Menu")).to_have_attribute(
    "aria-expanded", "true"
)`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — ARIA basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/ARIA",
      },
      {
        title: "W3C — Using ARIA",
        url: "https://www.w3.org/TR/using-aria/",
      },
      {
        title: "Playwright — get_by_role reference",
        url: "https://playwright.dev/python/docs/api/class-locator#locator-get-by-role",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 30,
    tags: ["accessibility", "aria", "html", "locators"],
  },

  "css-selectors": {
    slug: "css-selectors",
    title: "CSS Selectors",
    summary:
      "Element, .class, #id, [attr] — the locator language of the web, and how Playwright extends it.",
    whyItMatters:
      "CSS selectors are the fallback when role-based locators aren't enough. Knowing them well means you're never stuck.",
    notes: `**CSS selectors** are the universal language of the web for finding elements. Playwright supports them fully. Even if you prefer role-based locators (you should), you'll need CSS selectors for edge cases.

Let's learn them properly.

### The 5 basic selectors

**1. Element selector**

~~~css
button
input
a
h1
~~~

Matches by tag name. \`button\` selects every \`<button>\` on the page.

In Playwright: \`page.locator("button")\`.

**2. Class selector**

~~~css
.btn
.btn-primary
.card
~~~

Starts with a dot. Matches elements with that class.

\`.btn\` matches \`<button class="btn">\` and \`<div class="btn">\`.

An element with multiple classes is matched by any single class:
~~~html
<button class="btn btn-primary large">Save</button>
~~~
Matches \`.btn\`, \`.btn-primary\`, and \`.large\`.

**3. ID selector**

~~~css
#email
#login-btn
#submit-form
~~~

Starts with \`#\`. Matches the element with that exact \`id\`.

Since IDs are unique, \`#email\` matches at most one element.

**4. Universal selector**

~~~css
*
~~~

Matches every element. Rarely useful in Playwright but good to know.

**5. Attribute selector**

~~~css
[type="text"]
[data-testid="login-btn"]
[aria-expanded="true"]
[href^="https"]
[href$=".pdf"]
[href*="example"]
~~~

Matches elements by attribute.

- \`[attr="value"]\` — exact match
- \`[attr^="prefix"]\` — starts with
- \`[attr$="suffix"]\` — ends with
- \`[attr*="contains"]\` — contains
- \`[attr~="word"]\` — contains word (space-separated)
- \`[attr|="prefix"]\` — starts with prefix followed by hyphen

Very useful in Playwright: \`page.locator("[data-testid='login']")\`.

### Combinators — combining selectors

**Descendant (space)**

~~~css
form input
~~~

Matches any \`<input>\` that is *anywhere inside* a \`<form>\`.

**Child (\`>\`)**

~~~css
form > input
~~~

Matches \`<input>\` that is a **direct child** of \`<form>\`. Not grandchildren.

**Adjacent sibling (\`+\`)**

~~~css
label + input
~~~

Matches an \`<input>\` immediately after a \`<label>\`.

**General sibling (\`~\`)**

~~~css
h2 ~ p
~~~

Matches all \`<p>\` siblings after an \`<h2>\`.

### Pseudo-classes

**\`:first-child\`, \`:last-child\`**

~~~css
li:first-child
li:last-child
~~~

**\`:nth-child(n)\`**

~~~css
li:nth-child(2)   /* the second li */
li:nth-child(odd) /* every odd li */
li:nth-child(even)
~~~

**\`:hover\`, \`:focus\`**

~~~css
button:hover
input:focus
~~~

**\`:checked\`, \`:disabled\`**

~~~css
input:checked
button:disabled
~~~

**\`:not()\`**

~~~css
input:not([type="hidden"])
button:not(.disabled)
~~~

Matches everything except what's inside \`not()\`.

### Chaining and grouping

**Chaining** — no space, means "and":

~~~css
button.btn-primary       /* a button AND has class btn-primary */
input[type="email"]      /* an input AND has type="email" */
div.card.highlight       /* has BOTH classes */
~~~

**Grouping** — comma, means "or":

~~~css
h1, h2, h3   /* matches any of these */
~~~

### Playwright CSS extensions

Playwright adds extra pseudo-classes on top of standard CSS:

**\`:has-text()\`**

~~~python
page.locator("button:has-text('Submit')")
~~~

Matches buttons containing the text "Submit".

**\`:text()\`**

~~~python
page.locator(":text('Welcome')")
~~~

Matches any element with exact text.

**\`:visible\`**

~~~python
page.locator("button:visible")
~~~

Only matches visible buttons. Useful when there are hidden duplicates.

**\`:has()\`**

~~~python
page.locator("div:has(button.submit)")
~~~

Matches \`<div>\` that contains a submit button.

**\`:not()\`**

~~~python
page.locator("button:not(.disabled)")
~~~

### When to use CSS vs role-based

**Use role-based locators when:**
- The element has a clear role and name
- You want the test to survive redesigns
- Accessibility is a priority (it always is)

**Use CSS selectors when:**
- You need to find by data-testid
- You need position-based selection (first, last, nth)
- You need complex combinations (element with class + attribute + child)
- The element has no good role (rare)

**Never use:**
- Deeply nested CSS like \`div > div > div > span.x\` — very fragile
- XPath for anything CSS can do

### Playwright shorthand comparison

~~~python
# Role-based (BEST)
page.get_by_role("button", name="Submit")

# Test ID (GREAT)
page.get_by_test_id("submit")

# Label (VERY GOOD)
page.get_by_label("Email")

# Placeholder (GOOD)
page.get_by_placeholder("you@example.com")

# CSS — id (OKAY if stable)
page.locator("#submit-btn")

# CSS — class (LAST RESORT)
page.locator(".submit-btn")

# CSS with :has-text
page.locator("button:has-text('Submit')")

# CSS attribute
page.locator("[data-testid='submit']")
~~~

### The mental model

CSS selectors are like a **query language**. You describe what you're looking for, and the browser (or Playwright) returns matching elements.

Playwright's built-in locators (\`get_by_role\`, \`get_by_test_id\`, etc.) are **shortcuts** that compile down to CSS selectors internally — but with extra intelligence (waiting for elements, checking for visibility, etc.).`,
    handsOn: `Let's practice CSS selectors in the browser console first — where you can see immediate results.

### Step 1: Open any real page

Go to **https://playwright.dev**.

Open DevTools → **Console**.

### Step 2: Try these selectors

Type each one and press Enter. You'll see how many elements match.

~~~javascript
document.querySelectorAll("a").length
document.querySelectorAll("button").length
document.querySelectorAll("nav a").length
document.querySelectorAll("main a").length
document.querySelectorAll("a[href^='http']").length
document.querySelectorAll("a:not([target])").length
document.querySelectorAll("h1, h2").length
document.querySelector("h1").textContent
~~~

### Step 3: Create your own test page

In \`html-practice\`, create \`css.html\`:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Practice</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/" class="nav-link active">Home</a>
        <a href="/blog" class="nav-link">Blog</a>
        <a href="/about" class="nav-link">About</a>
      </nav>
    </header>

    <main>
      <h1>Welcome</h1>

      <ul class="features">
        <li data-feature="fast">Fast</li>
        <li data-feature="reliable">Reliable</li>
        <li data-feature="modern">Modern</li>
      </ul>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" data-testid="signup-btn">
          Sign up
        </button>
      </form>
    </main>
  </body>
</html>
~~~

### Step 4: Test 8 selectors in the console

Open this file in the browser. In DevTools → Console:

~~~javascript
document.querySelectorAll("nav a").length              // 3
document.querySelectorAll(".nav-link").length          // 3
document.querySelectorAll(".active").length            // 1
document.querySelectorAll("li").length                 // 3
document.querySelectorAll("li:first-child").length     // 1
document.querySelectorAll("[data-testid]").length      // 1
document.querySelectorAll("input[type='email']").length // 1
document.querySelectorAll("button:has-text")           // won't work — that's Playwright-only
~~~

The last one fails because \`:has-text()\` is a Playwright extension, not real CSS.

### Deliverable

You tested 8 CSS selectors in the browser console and confirmed the expected counts.`,
    challenge: `Write CSS selectors for these scenarios — without using DevTools' "Copy Selector" tool.

Assume a page has:

~~~html
<form class="login">
  <label for="email">Email</label>
  <input id="email" type="email" required />

  <label for="password">Password</label>
  <input id="password" type="password" required />

  <button type="submit" class="btn btn-primary" disabled>
    Log in
  </button>
</form>
~~~

**Write a selector for each:**

1. The form (by class)
2. Every input inside the form
3. Only the email input
4. Only the password input (by type)
5. Only required inputs
6. The submit button
7. Only the button's class attribute
8. Only the disabled button

Now write the same thing in **Playwright syntax**:

Example: "Only the email input" → \`page.get_by_label("Email")\`.

Do all 8. Then decide: for each, which is better — a Playwright locator or a CSS selector?`,
    proTips: [
      "Prefer `[data-testid='...']` over `.class` — test IDs are stable, classes aren't.",
      "Use `:has-text()` in Playwright when you want to find a button by its visible text but want to be more flexible than `get_by_role`.",
      "`button:visible` is a Playwright extension that filters out hidden buttons — very useful on SPAs.",
      "The `>` combinator (direct child) is your friend when the page has multiple nested elements with similar classes.",
      "In the browser console, `document.querySelectorAll('selector').length` is the fastest way to test a selector before putting it in Playwright.",
    ],
    commonMistakes: [
      {
        mistake: "Using long descendant chains like `div > div > div.card > span`",
        fix: "Fragile. Even a small HTML change breaks it. Use test IDs or role-based locators instead.",
      },
      {
        mistake: "Using `.class` when the class changes every build",
        fix: "Framework-generated classes like `.css-1x2y3z` are useless for testing. Ask for `data-testid` or find a role-based locator.",
      },
      {
        mistake: "Confusing `,` (or) with ` ` (descendant)",
        fix: "`h1, h2` means 'any h1 or h2'. `h1 h2` means 'h2 inside h1' — which is almost always impossible. Read carefully.",
      },
      {
        mistake: "Using XPath when CSS can do the job",
        fix: "XPath is slower and less readable. Use CSS unless you specifically need parent navigation.",
      },
      {
        mistake: "Not using `:has-text()` when you have visible text to match",
        fix: "If you need to find a button by its text but `get_by_role` doesn't fit (e.g., no accessible name), `button:has-text('Save')` works well.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The 5 basic CSS selectors",
        code: `button              /* tag */
.btn                /* class */
#email              /* id */
[type="text"]       /* attribute */
*                   /* universal (avoid) */`,
      },
      {
        language: "text",
        title: "Combinators and pseudo-classes",
        code: `form input              /* any input inside form */
form > input            /* direct child only */
label + input           /* input right after label */
li:first-child          /* first list item */
li:nth-child(2)         /* second list item */
input:checked           /* checked input */
button:disabled         /* disabled button */
input:not([type="hidden"])  /* every input except hidden */`,
      },
      {
        language: "python",
        title: "Same locator in Playwright — five ways",
        code: `# Best
page.get_by_role("button", name="Log in")

# Very good
page.get_by_test_id("login-btn")

# Good
page.get_by_label("Email")

# CSS with Playwright extension
page.locator("button:has-text('Log in')")

# Plain CSS
page.locator("[data-testid='login-btn']")`,
      },
    ],
    furtherReading: [
      {
        title: "MDN — CSS selectors reference",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
      },
      {
        title: "Playwright — Other locators (CSS, XPath)",
        url: "https://playwright.dev/python/docs/other-locators",
      },
      {
        title: "CSS Diner — interactive selector game",
        url: "https://flukeout.github.io/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 35,
    tags: ["css", "selectors", "locators", "web-fundamentals"],
  },
};

export function getTopicBySlug(slug: string): TopicContent | undefined {
  return topics[slug];
}