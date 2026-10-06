import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
