import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
