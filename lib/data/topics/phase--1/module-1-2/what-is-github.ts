import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "what-is-github",
    title: "What is GitHub?",
    summary:
      "The place where your Git saves live online — so you can share, back up, and collaborate.",
    whyItMatters:
      "Your entire Playwright portfolio will live on GitHub. It's how employers see your work, how you back up your code, and how you deploy to Vercel.",
    notes: `**GitHub** is a website. It's where Git repositories live **online**.

If Git is a save-point system on your computer, GitHub is the cloud where those saves get stored, shared, and collaborated on.

### Git vs GitHub — the one-minute version

**Git:**
- A tool installed on your computer
- Tracks changes to your files
- Works entirely offline
- Made by Linus Torvalds in 2005

**GitHub:**
- A website (github.com)
- Hosts Git repositories online
- Makes collaboration possible
- Made by a company (now owned by Microsoft)

You can use Git without GitHub. You can't use GitHub without Git.

### Why GitHub matters

**1. Backup**

Your laptop will eventually crash. Your work is on GitHub — safe.

**2. Portfolio**

Recruiters and hiring managers look at GitHub profiles. A strong GitHub profile with real projects is worth more than a resume bullet point.

**3. Collaboration**

Multiple people can work on the same project. Everyone pushes their changes. Everyone pulls others' changes. It just works.

**4. Open source**

Most of the tools you use — Python, Playwright, VS Code — are open source. Their code lives on GitHub. You can read it, learn from it, and even contribute.

**5. Deployment**

Vercel, Netlify, and other hosting services pull from your GitHub repo. Push code → site auto-updates. We already used this.

**6. Free**

For public repositories, GitHub is free. Even private repos are free within reasonable limits.

### The vocabulary

**Repository (repo)**

A project. Each repo has its own history, files, and collaborators. Your \`playwright-academy\` is a repo.

**Clone**

Copy a repo from GitHub to your computer:

~~~bash
git clone https://github.com/user/repo.git
~~~

**Fork**

Copy someone else's repo to your GitHub account (not your computer). Used to make changes you can propose back to the original.

**Pull request (PR)**

A proposal to merge your changes into someone else's project. Very common in team development.

**Issue**

A tracked task, bug, or discussion about a project.

**README**

A markdown file in the root of the repo that explains what the project is and how to use it. The first thing anyone sees.

**Star**

A "like" for a repo. More stars = more popular.

**Public vs Private**

- Public: anyone can see it.
- Private: only you and invited collaborators.

### The three commands you'll use to sync

**\`git clone\`** — copy a repo from GitHub to your machine (once per project).

**\`git pull\`** — get the latest changes from GitHub to your machine.

**\`git push\`** — send your local commits to GitHub.

For a solo project, the workflow is:

~~~text
1. Edit files locally
2. git add .
3. git commit -m "..."
4. git push
~~~

After step 4, GitHub has your changes. Vercel sees them and redeploys your app.

### GitHub beyond code

GitHub isn't just for code. It has:

- **GitHub Pages** — host static websites for free
- **GitHub Actions** — run scripts automatically (CI/CD)
- **GitHub Copilot** — AI coding assistant
- **GitHub Codespaces** — full development environment in the cloud (what you're using)
- **GitHub Projects** — track tasks and issues

We're already using Codespaces. Later we'll use Actions for CI/CD.

### Your GitHub profile is your portfolio

When you finish this course, your GitHub profile will show:

- Your Playwright Academy project
- Any other practice projects
- Contributions to repos (if you help with open source)

Recruiters actually check this. A well-maintained profile with clear projects speaks louder than a resume.

**Pro tip:** Write a good README for every project. Explain what it does, how to run it, and what you learned. This is what gets you hired.

### Public vs private — which should you choose?

**Public:** Good for portfolio projects. Anyone can see your work.
**Private:** Good for personal experiments, learning, and sensitive work.

You can change visibility at any time. Start private if unsure.

For your Playwright Academy repo — **make it public**. It's a portfolio piece.

### The mindset

Think of GitHub as:

- A **filing cabinet** in the cloud for your code
- A **portfolio site** for your work
- A **social network** for developers
- A **collaboration platform** for teams

It's the LinkedIn of code. Every serious developer has a profile. Yours starts today.`,
    handsOn: `Let's create your GitHub account and push your first project.

### Step 1: Create an account

If you don't have one:

1. Go to **github.com**
2. Click **Sign up**
3. Use a professional username (your real name or a variation)
4. Use a real email (you'll verify it)
5. Choose the free plan

Choose your username carefully. It becomes part of your identity as a developer.

### Step 2: Create a new repo

1. Click the **+** icon at the top right → **New repository**
2. Repository name: **git-practice**
3. Description: **My first Git and GitHub project**
4. Visibility: **Public**
5. **Do NOT check** "Add a README" (we already have files locally)
6. Click **Create repository**

GitHub will show you setup instructions. Look for the section titled **"…or push an existing repository from the command line"**.

### Step 3: Connect your local repo to GitHub

In your terminal, navigate to your local \`git-practice\` folder:

~~~bash
cd ~/git-practice
~~~

Now run these commands (copy from GitHub's instructions, replace with your username):

~~~bash
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git branch -M main
git push -u origin main
~~~

You'll be asked for a username and password. **The password is a Personal Access Token**, not your GitHub password.

### Step 4: Create a Personal Access Token (if needed)

1. Go to **github.com/settings/tokens**
2. Click **Generate new token** → **Generate new token (classic)**
3. Note: \`codespace-access\`
4. Expiration: **90 days**
5. Check the box **repo** (top of the list)
6. Click **Generate token**
7. **Copy the token** — you won't see it again

Paste this as your password when Git asks.

### Step 5: Verify the push

Go to **github.com/YOUR-USERNAME/git-practice** in your browser. You should see:

- Your \`hello.py\` file
- Two commits in the history
- The commit messages you wrote

### Deliverable

You have a GitHub account, a new repo, and your local Git project is pushed to GitHub. You can see your code online.`,
    challenge: `Make a second push to see the full cycle.

### Task 1: Edit a file locally

In \`git-practice\`, create a new file \`notes.md\`:

~~~markdown
# My Git Practice Notes

## What I learned
- Git tracks changes to files
- GitHub hosts Git repos online
- Commit early, commit often

## Commands I used
- git init
- git add .
- git commit -m "..."
- git push
~~~

### Task 2: Add, commit, push

~~~bash
git add .
git commit -m "Add my Git practice notes"
git push
~~~

Wait — after \`git push\`, this time you don't need \`origin main\` because we set up tracking in the previous push.

### Task 3: Check GitHub

Refresh the GitHub page. You should see:

- A new file called \`notes.md\`
- A new commit in the history

### Task 4: Clone to a "new machine" simulation

Simulate working on another computer:

~~~bash
cd ~
git clone https://github.com/YOUR-USERNAME/git-practice.git git-practice-clone
cd git-practice-clone
ls
~~~

You'll see \`hello.py\` and \`notes.md\`. You've successfully copied the entire project from GitHub.

### Reflection

This is the workflow of every professional developer:

- Clone a project once
- Edit locally
- Commit changes
- Push to GitHub
- Repeat

From now on, every project you work on goes through this cycle. You just learned it.`,
    proTips: [
      "Use your real name or a professional username. It's part of your developer identity.",
      "Add a README to every public repo. It's the first thing anyone sees.",
      "Never commit `.env` files or secrets. They end up in your history forever.",
      "Star repos you find interesting. They appear on your profile and help you find them later.",
      "Follow developers you admire. Their activity often surfaces good projects.",
    ],
    commonMistakes: [
      {
        mistake: "Using your GitHub password as the push password",
        fix: "GitHub removed password authentication for Git operations. Use a Personal Access Token (PAT) instead.",
      },
      {
        mistake: "Making every repo private",
        fix: "Public repos are portfolio pieces. Make your best work public.",
      },
      {
        mistake: "Committing node_modules or venv folders",
        fix: "Add them to `.gitignore` before your first commit. They're large and regenerable.",
      },
      {
        mistake: "Forgetting to push after committing",
        fix: "Commits are local. Pushes are to GitHub. Both are needed.",
      },
      {
        mistake: "Assuming a deleted file is gone from history",
        fix: "Git keeps history forever. If you accidentally commit a password, you must change the password — you can't just delete the file.",
      },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "The push workflow",
        code: `# First time only (after creating the repo on GitHub)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main

# Every subsequent push (just this)
git add .
git commit -m "Describe your change"
git push`,
      },
      {
        language: "bash",
        title: "Clone an existing project",
        code: `git clone https://github.com/username/repo.git
cd repo
# You now have the entire project + history`,
      },
      {
        language: "bash",
        title: "Get the latest changes",
        code: `git pull
# Fetches any new commits from GitHub into your local repo`,
      },
    ],
    furtherReading: [
      {
        title: "GitHub Docs — Getting started",
        url: "https://docs.github.com/en/get-started",
      },
      {
        title: "GitHub Skills — interactive courses",
        url: "https://skills.github.com/",
      },
      {
        title: "GitHub — Personal Access Tokens",
        url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 20,
    tags: ["phase--1", "basics", "github", "git"],
  };

export default topic;
