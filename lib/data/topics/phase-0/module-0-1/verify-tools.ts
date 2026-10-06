import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
