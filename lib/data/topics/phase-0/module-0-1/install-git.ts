import type { TopicContent } from "../../types";

const topic: TopicContent = {
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
  };

export default topic;
