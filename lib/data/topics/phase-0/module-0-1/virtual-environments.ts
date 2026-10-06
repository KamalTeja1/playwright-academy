import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
