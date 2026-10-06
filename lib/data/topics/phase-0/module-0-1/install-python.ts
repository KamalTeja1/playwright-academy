import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
