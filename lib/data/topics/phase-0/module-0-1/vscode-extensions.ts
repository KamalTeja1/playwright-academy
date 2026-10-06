import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
