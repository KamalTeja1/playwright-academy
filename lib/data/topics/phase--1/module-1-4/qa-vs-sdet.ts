import type { TopicContent } from "../../types";

const topic: TopicContent = {
    slug: "qa-vs-sdet",
    title: "Who is a QA engineer? Who is an SDET?",
    summary:
      "The different roles in testing — and where you fit in with Playwright skills.",
    whyItMatters:
      "The path you're on leads to specific job titles. Knowing them helps you search for the right roles, write the right resume, and set the right expectations.",
    notes: `The world of software testing has several job titles. They sound similar but mean different things. Let's break them down.

### QA Engineer (Quality Assurance Engineer)

**What they do:** Test software manually. Execute test cases. Report bugs. Verify fixes.

**Skills:** Understanding of testing concepts, attention to detail, good communication, basic technical knowledge.

**Tools:** Jira, TestRail, spreadsheets, browser DevTools.

**How they spend their day:** Open the app. Run through test cases. Document what works and what doesn't.

**Career path:** QA Engineer → Senior QA → QA Lead → QA Manager.

**In one sentence:** The person who finds bugs by using the app carefully.

### SDET (Software Development Engineer in Test)

**What they do:** Write code that tests software. Build test frameworks. Automate everything that can be automated.

**Skills:** Programming (Python, JavaScript, Java), test frameworks (Pytest, Playwright, Cypress), CI/CD, Docker, APIs.

**Tools:** Playwright, Selenium, Pytest, Jest, Git, Docker, Jenkins, GitHub Actions.

**How they spend their day:** Write code. Debug flaky tests. Improve test infrastructure. Review other engineers' test code.

**Career path:** SDET → Senior SDET → Test Architect → Engineering Manager.

**In one sentence:** A software engineer who specialises in testing.

### The blurred line

In reality, most modern test roles mix both. You might be called a "QA Engineer" but write Playwright tests all day. Or you might be an "SDET" but also do exploratory manual testing.

The distinction matters most at:

- **Large enterprises** with separate QA and Dev teams
- **Startups**, where everyone does a bit of everything
- **Job listings**, where the title hints at what the role actually is

### Test Automation Engineer

A third common title. This role is closer to SDET, focused specifically on automation.

**Day-to-day:** Build test frameworks, write automated tests, maintain CI pipelines.

**Difference from SDET:** Sometimes Test Automation Engineers focus only on automation, while SDETs also build test infrastructure and participate in code reviews of production code.

In most companies, these are interchangeable.

### Manual QA vs Automation QA

Another way roles are split:

**Manual QA:** Tests by hand. Doesn't code. Focuses on exploratory testing, usability, edge cases.

**Automation QA:** Writes test code. Focuses on speed, coverage, regression.

**Reality check:** Manual QA roles are shrinking. Companies increasingly expect even manual testers to know some automation.

### Where Playwright engineers fit

You're learning Playwright. Your natural fit is:

- **SDET** — if you enjoy writing code and building frameworks
- **Test Automation Engineer** — if you focus on writing tests and pipelines
- **Automation QA** — if your company calls the role that

All three pay well and are in demand. All three require exactly the skills you're building.

### Salaries — a rough idea

Salaries vary wildly by country, company, and experience. But in general:

- Manual QA: entry to mid-level pay
- Automation QA / Test Automation Engineer: mid to upper-mid
- SDET: similar to Software Development Engineer, often slightly less at big tech, similar at mid-size companies

The gap between manual QA and automation roles is often 30 to 50 percent. This is one reason to learn automation.

### What companies actually want (SDET / Automation role)

Reading real job listings, they ask for:

- **Programming** in Python, JavaScript, or Java
- **Experience with Playwright** or Cypress or Selenium
- **API testing** skills
- **CI/CD knowledge** (GitHub Actions, Jenkins)
- **Git and version control**
- **Understanding of testing concepts** (test pyramid, TDD, BDD)
- **Docker basics**
- **Good communication** — you'll report bugs to developers

You're going to learn all of this in this course. Not just enough to pass an interview — enough to do the job.

### The title doesn't matter. The skills do.

Here's a secret: two people with the same title can have completely different jobs. And two people with different titles can have identical jobs.

What matters is what you can do:

- Can you write a Playwright test for a complex flow?
- Can you debug a flaky test with a trace viewer?
- Can you build a test framework from scratch?
- Can you set up CI to run tests on every push?
- Can you explain to a developer why their change broke a test?

If yes to those, you're employable as an SDET, Test Automation Engineer, or Senior QA. The title is negotiable. The skills are not.

### The career arc

Most people follow one of two paths:

**Path 1 — Manual → Automation**

Start as manual QA. Learn programming. Move into automation. Become an SDET.

**Path 2 — Developer → SDET**

Start as a developer. Discover you enjoy testing. Move into test infrastructure. Become an SDET.

You're on Path 1, but starting directly at the automation stage. That's efficient. You skip years of manual-only work.

### The one piece of advice

Don't get attached to a title. Get attached to a skill set.

Titles change between companies. Job descriptions are often wrong. But if you can build a Playwright framework, debug flaky tests, and mentor junior testers — you'll always find work.

That's the goal. Titles are just labels. Skills are permanent.

### How to talk about yourself

When someone asks what you do:

Wrong: "I'm learning Playwright."

Right: "I'm a test automation engineer. I build Playwright frameworks to catch bugs before they reach users."

The second answer tells them what you do, not what you're learning. Even as a beginner, you can use this framing. The confidence comes through in the answer.

You're not "just learning". You're building a career. Start talking like it.`,
    handsOn: `Explore real job listings.

### Step 1: Open a job site

Go to LinkedIn, Naukri, Indeed, or any job site.

### Step 2: Search for three roles

Search for these three separately:

- "QA engineer"
- "Automation QA" or "Test Automation Engineer"
- "SDET"

Look at 3 to 5 listings for each.

### Step 3: Compare them

For each listing, note:

- What programming languages do they ask for?
- Do they mention Playwright, Cypress, or Selenium?
- Do they mention CI/CD or Docker?
- Is there a coding requirement, or manual only?

### Step 4: Write down what you have vs what you need

For an SDET role, list:

- What skills you already have (or are building in this course)
- What skills you still need to learn
- What you can learn next

### Deliverable

You read at least 10 real job listings across the three roles and can describe how they differ. You now know exactly what skills you need to build for the role you want.`,
    challenge: `Write your career plan.

### Task 1: Define your target role

Out of QA Engineer, Automation QA, SDET — which one do you want to be in 12 months?

Write one sentence explaining why.

### Task 2: Map your skills

List 10 skills you think you'll need for that role. Mark each:

- Already have it (green)
- Partially know it (yellow)
- Need to learn (red)

### Task 3: Order your learning

Take the red skills and order them from "most urgent" to "least urgent". This is your learning priority.

### Task 4: Set a 3-month milestone

Write one concrete thing you want to have built or achieved in 3 months.

Example: "Have a Playwright test suite of 30 tests running in GitHub Actions against a real demo site."

### Bonus

Update your LinkedIn profile (or create one). Change your headline to something that reflects where you're heading:

"Test Automation Engineer | Learning Playwright | Building reliable test frameworks"

You don't need to have arrived. You need to signal direction. Recruiters notice that.`,
    proTips: [
      "SDET roles often pay like developers. The investment in learning to code properly pays off.",
      "Manual QA experience is valuable, not wasted. It teaches you how to find bugs — a skill no code can replace.",
      "Job titles vary wildly. Focus on the job description, not the title.",
      "If you're applying for SDET roles, have a public GitHub with real test projects. It speaks louder than a resume.",
      "Learn Playwright deeply. It's currently the most in-demand automation tool, beating Cypress and Selenium in new job listings.",
    ],
    commonMistakes: [
      {
        mistake: "Assuming QA is less prestigious than development",
        fix: "Modern QA engineers write more code than many developers. The line has blurred. Respect the craft.",
      },
      {
        mistake: "Ignoring manual testing skills because you're 'doing automation'",
        fix: "The best testers combine judgment and code. Both matter.",
      },
      {
        mistake: "Chasing job titles instead of skills",
        fix: "A strong Playwright engineer will find work under any title. Skills first, titles second.",
      },
      {
        mistake: "Thinking SDET means writing unit tests all day",
        fix: "SDETs write E2E tests, build infrastructure, review code, and improve test pipelines. It's a broad role.",
      },
      {
        mistake: "Waiting until you feel 'ready' to apply",
        fix: "If you can build a Playwright framework, you're ready for junior SDET roles. Apply while learning the rest.",
      },
    ],
    codeExamples: [
      {
        language: "text",
        title: "The roles at a glance",
        code: `QA Engineer
  Manual testing, bug reports, test cases
  Some coding: optional
  Salary: moderate

Automation QA / Test Automation Engineer
  Writes automated tests, maintains CI
  Coding: required
  Salary: mid to upper

SDET
  Builds test frameworks, treats testing as engineering
  Coding: strong requirement
  Salary: engineer-level

All three: overlap heavily in modern companies.`,
      },
      {
        language: "text",
        title: "Typical SDET job listing skills",
        code: `Required:
- 3+ years writing test automation
- Python or JavaScript
- Playwright, Cypress, or Selenium
- Git and code review experience
- CI/CD (GitHub Actions, Jenkins)
- API testing

Nice to have:
- Docker
- Kubernetes
- Performance testing (k6, JMeter)
- Accessibility testing

This is what you're building toward.`,
      },
    ],
    furtherReading: [
      {
        title: "Ministry of Testing — Career resources",
        url: "https://www.ministryoftesting.com/",
      },
      {
        title: "Playwright — Success stories and use cases",
        url: "https://playwright.dev/",
      },
    ],
    difficulty: "Beginner",
    estimatedMinutes: 15,
    tags: ["phase--1", "testing", "career"],
  };

export default topic;
