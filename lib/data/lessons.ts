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
  // PHASE -1 · MODULE 1
  "what-even-is-code": [
    {
      slug: "what-is-a-program",
      title: "What is a computer program?",
      summary: "The plain-English answer to what code actually is.",
      estimatedMinutes: 10,
      difficulty: "Beginner",
      topics: [
        { slug: "definition", title: "The definition" },
        { slug: "real-examples", title: "Real-life examples" },
        { slug: "why-it-matters", title: "Why this matters for testing" },
      ],
    },
    {
      slug: "programming-language",
      title: "What is a programming language?",
      summary: "Why we need languages to talk to computers.",
      estimatedMinutes: 12,
      difficulty: "Beginner",
      topics: [
        { slug: "why-languages", title: "Why we need languages" },
        { slug: "common-languages", title: "Common languages you'll hear about" },
        { slug: "python-vs-js", title: "Python vs JavaScript" },
      ],
    },
    {
      slug: "compiled-vs-interpreted",
      title: "Compiled vs interpreted",
      summary: "How code turns into something the computer runs.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [
        { slug: "compiled", title: "Compiled languages" },
        { slug: "interpreted", title: "Interpreted languages" },
        { slug: "which-is-better", title: "Which one is better?" },
      ],
    },
    {
      slug: "hello-world",
      title: "Your first Hello World",
      summary: "Write and run your very first line of code.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [
        { slug: "python-hello", title: "Hello World in Python" },
        { slug: "js-hello", title: "Hello World in JavaScript" },
        { slug: "what-happened", title: "What just happened?" },
      ],
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
        { slug: "verify", title: "Verify all three work" },
      ],
    },
    {
      slug: "vscode-extensions",
      title: "VS Code extensions",
      summary: "The four extensions that make life easier.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [
        { slug: "python-ext", title: "Python extension" },
        { slug: "pylance", title: "Pylance" },
        { slug: "playwright-ext", title: "Playwright Test" },
        { slug: "gitlens", title: "GitLens" },
      ],
    },
    {
      slug: "terminal-basics",
      title: "Terminal basics",
      summary: "The 8 commands you'll use every single day.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [
        { slug: "cd", title: "cd — change directory" },
        { slug: "ls", title: "ls — list files" },
        { slug: "mkdir", title: "mkdir — make a folder" },
        { slug: "touch", title: "touch — create a file" },
        { slug: "pwd", title: "pwd — where am I?" },
        { slug: "cat", title: "cat — show file contents" },
        { slug: "rm", title: "rm — remove a file" },
        { slug: "cp-mv", title: "cp and mv — copy and move" },
      ],
    },
    {
      slug: "virtual-environments",
      title: "Virtual environments",
      summary: "Why every Python project needs its own sandbox.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [
        { slug: "why-venv", title: "Why virtual environments exist" },
        { slug: "create-venv", title: "Creating a venv" },
        { slug: "activate", title: "Activating and deactivating" },
      ],
    },
    {
      slug: "pip-essentials",
      title: "pip essentials",
      summary: "Install, freeze, and share Python packages.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [
        { slug: "pip-install", title: "pip install" },
        { slug: "pip-freeze", title: "pip freeze" },
        { slug: "requirements", title: "requirements.txt" },
      ],
    },
    {
      slug: "devtools-tour",
      title: "Browser DevTools tour",
      summary: "The 7 tabs every tester must know.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [
        { slug: "elements", title: "Elements" },
        { slug: "console", title: "Console" },
        { slug: "network", title: "Network" },
        { slug: "application", title: "Application" },
        { slug: "sources", title: "Sources" },
        { slug: "performance", title: "Performance" },
        { slug: "lighthouse", title: "Lighthouse" },
      ],
    },
  ],

  // PHASE 1 · MODULE 1.1
  "python-core": [
    {
      slug: "syntax-indentation",
      title: "Syntax, indentation, and comments",
      summary: "How Python reads your code.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [
        { slug: "indentation", title: "Indentation matters" },
        { slug: "comments", title: "Comments" },
        { slug: "print", title: "print()" },
      ],
    },
    {
      slug: "variables-typing",
      title: "Variables and dynamic typing",
      summary: "Store values without declaring types.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [
        { slug: "variables", title: "Creating variables" },
        { slug: "dynamic", title: "Dynamic typing" },
        { slug: "pep8", title: "PEP 8 naming" },
      ],
    },
    {
      slug: "data-types",
      title: "Data types",
      summary: "int, float, str, bool, and None.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [
        { slug: "int-float", title: "int and float" },
        { slug: "str", title: "str" },
        { slug: "bool", title: "bool" },
        { slug: "none", title: "None" },
      ],
    },
    {
      slug: "operators",
      title: "Operators",
      summary: "Arithmetic, comparison, logical, and more.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [
        { slug: "arithmetic", title: "Arithmetic operators" },
        { slug: "comparison", title: "Comparison operators" },
        { slug: "logical", title: "Logical operators" },
        { slug: "membership", title: "Membership operators" },
        { slug: "identity", title: "Identity operators" },
      ],
    },
    {
      slug: "string-methods",
      title: "String methods",
      summary: "split, join, strip, replace, and more.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [
        { slug: "split-join", title: "split and join" },
        { slug: "strip", title: "strip" },
        { slug: "replace", title: "replace" },
        { slug: "case-methods", title: "Case methods" },
      ],
    },
    {
      slug: "f-strings",
      title: "f-strings",
      summary: "The cleanest way to format strings.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [
        { slug: "basics", title: "f-string basics" },
        { slug: "expressions", title: "Expressions inside f-strings" },
        { slug: "formatting", title: "Formatting numbers" },
      ],
    },
    {
      slug: "type-conversion",
      title: "Type conversion",
      summary: "Turn strings into numbers and back.",
      estimatedMinutes: 15,
      difficulty: "Beginner",
      topics: [
        { slug: "int-str", title: "int() and str()" },
        { slug: "float", title: "float()" },
        { slug: "list-dict", title: "list() and dict()" },
      ],
    },
  ],
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}