export type CodeExample = {
  language: "python" | "typescript" | "bash" | "text";
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
};

export function getTopicBySlug(slug: string): TopicContent | undefined {
  return topics[slug];
}