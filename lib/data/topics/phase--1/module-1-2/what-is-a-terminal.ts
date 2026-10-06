import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
