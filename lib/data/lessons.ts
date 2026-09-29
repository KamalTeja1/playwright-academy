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
  ],
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}