import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
