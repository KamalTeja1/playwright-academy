export type Topic = {
  slug: string;
  title: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: Topic[];
};

export const lessonsByModule: Record<string, Lesson[]> = {
  // PHASE -1 · MODULE -1.1
  "what-even-is-code": [
    {
      slug: "what-is-a-program",
      title: "What is a computer program?",
      summary: "The plain-English answer to what code actually is.",
      estimatedMinutes: 10,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "programming-language",
      title: "What is a programming language?",
      summary: "Why we need languages to talk to computers.",
      estimatedMinutes: 12,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "compiled-vs-interpreted",
      title: "Compiled vs interpreted",
      summary: "How code turns into something the computer actually runs.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "python-vs-javascript",
      title: "Python vs JavaScript",
      summary: "The two languages we'll use, and when to use which.",
      estimatedMinutes: 12,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "how-code-runs",
      title: "How code runs: source to result",
      summary: "The journey from your keystroke to something happening on screen.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "hello-world",
      title: "Your very first Hello World",
      summary: "Write and run your first line of code in both Python and JavaScript.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
  ],

  // PHASE -1 · MODULE -1.2 — ADD THIS NEW BLOCK
  "your-computer-explained": [
    {
      slug: "files-and-folders",
      title: "Files and folders",
      summary: "What files and folders actually are.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "file-paths",
      title: "File paths — absolute vs relative",
      summary: "How to point at any file on your computer.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "file-extensions",
      title: "File extensions",
      summary: "Why .py, .js, .html matter.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-a-terminal",
      title: "What is a terminal?",
      summary: "The text-based way to talk to your computer.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-an-ide",
      title: "What is an IDE / code editor?",
      summary: "Your workshop for writing code.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-git",
      title: "What is Git?",
      summary: "A save-point system for your code.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-github",
      title: "What is GitHub?",
      summary: "Where your Git saves live online.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
  ],
  // PHASE -1 · MODULE -1.3
  "internet-and-browser": [
    {
      slug: "what-happens-when-you-type-url",
      title: "What happens when you type a URL?",
      summary: "The 7-step journey from keypress to page.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-a-browser",
      title: "What is a browser?",
      summary: "The program that turns HTML into visual pages.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "browser-engines",
      title: "Browser engines",
      summary: "Chromium, Gecko, WebKit — and why Playwright bundles all three.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-a-web-server",
      title: "What is a web server?",
      summary: "The computer that stores and serves websites.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "web-page-vs-web-app",
      title: "Web page vs web app",
      summary: "The difference between a document you read and an application you use.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "url-anatomy",
      title: "What is a URL? Breaking it down",
      summary: "Protocol, domain, path, query, fragment.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
  ],
    // PHASE -1 · MODULE -1.4
  "what-is-testing": [
    {
      slug: "what-is-a-bug",
      title: "What is a bug?",
      summary: "The plain-English definition, with real examples.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "manual-vs-automated-testing",
      title: "Manual vs automated testing",
      summary: "Two ways to test software — and why you need both.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "why-companies-automate",
      title: "Why do companies automate tests?",
      summary: "The business case for automation.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "what-is-a-test-script",
      title: "What is a test script?",
      summary: "The code that tests your app — and its four parts.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "qa-vs-sdet",
      title: "Who is a QA engineer? Who is an SDET?",
      summary: "The different roles in testing and where you fit.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
  ],
  // PHASE -1 · MODULE -1.5
  "soft-skills-setup": [
    {
      slug: "how-to-read-errors",
      title: "How to read error messages",
      summary: "The skill that saves you the most time in your career.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "how-to-google-errors",
      title: "How to Google an error properly",
      summary: "The search formula that finds answers in seconds.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "how-to-ask-for-help",
      title: "How to ask for help the right way",
      summary: "The 5-part formula that gets fast, great answers.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "keyboard-shortcuts-worth-learning",
      title: "Keyboard shortcuts worth learning",
      summary: "The shortcuts that save hours every week.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "folder-organization",
      title: "Folder organization for learning",
      summary: "Where to put your projects so you never lose anything.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "taking-notes-while-learning",
      title: "Taking notes during learning",
      summary: "How to write notes that actually help you learn.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
  ],

  
  // PHASE 0 · MODULE 0.1
  "environment-setup": [
    {
      slug: "install-python-vscode-git",
      title: "Install Python, VS Code, and Git",
      summary: "The three tools every automation engineer needs.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [
        { slug: "install-python", title: "Install Python 3.10+" },
        { slug: "install-vscode", title: "Install VS Code" },
        { slug: "install-git", title: "Install Git" },
        { slug: "verify-tools", title: "Verify all three work" },
      ],
    },
    {
      slug: "vscode-extensions",
      title: "VS Code extensions",
      summary: "The four extensions that make life easier.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "terminal-basics",
      title: "Terminal basics",
      summary: "The 8 commands you'll use every single day.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "virtual-environments",
      title: "Virtual environments",
      summary: "Why every Python project needs its own sandbox.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "pip-essentials",
      title: "pip essentials",
      summary: "Install, freeze, and share Python packages.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "devtools-tour",
      title: "Browser DevTools tour",
      summary: "The 7 tabs every tester must know.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [],
    },
  ],

  // PHASE 0 · MODULE 0.2
  "web-fundamentals": [
    {
      slug: "html-structure",
      title: "HTML Structure",
      summary: "The basic skeleton every web page is built on.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "html-tags",
      title: "HTML Tags",
      summary: "The building blocks — div, span, button, input, and more.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "html-attributes",
      title: "HTML Attributes",
      summary: "id, class, name, href, aria-*, data-*, role — and why they matter.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "semantic-html",
      title: "Semantic HTML vs Div Soup",
      summary: "Why good HTML makes testing easier.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "accessibility-attributes",
      title: "Accessibility Attributes",
      summary: "aria-label, aria-labelledby, role — and how Playwright uses them.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "css-selectors",
      title: "CSS Selectors",
      summary: "Element, .class, #id, [attr] — the locator language of the web.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [],
    },
        {
      slug: "xpath-absolute-vs-relative",
      title: "XPath: Absolute vs Relative",
      summary:
        "Two XPath styles, why full paths break easily, and how to recognise a safer one.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "xpath-predicates",
      title: "XPath Predicates",
      summary:
        "Use square brackets to filter XPath by attributes, text, position, and conditions.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "xpath-axes",
      title: "XPath Axes",
      summary:
        "Move through parent, child, sibling, ancestor, and descendant relationships.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "why-playwright-discourages-xpath",
      title: "Why Playwright Discourages XPath",
      summary:
        "Why user-facing locators are usually clearer and more stable than XPath.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "dom-vs-html-source",
      title: "DOM vs HTML Source",
      summary:
        "Why DevTools and View Page Source can differ, and which one Playwright sees.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "dynamic-content",
      title: "Dynamic Content",
      summary:
        "How pages update after loading, and how Playwright waits for useful final states.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
  ],
  
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}