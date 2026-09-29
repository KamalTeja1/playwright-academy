export type Module = {
  slug: string;
  title: string;
  description: string;
  lessonCount: number;
};

export type Phase = {
  slug: string;
  number: string;
  title: string;
  description: string;
  modules: Module[];
};

export const phases: Phase[] = [
  {
    slug: "phase--1",
    number: "-1",
    title: "Absolute Beginner Primer",
    description:
      "Never coded before? Start here. We cover what code is, how your computer works, and how the internet works.",
    modules: [
      {
        slug: "what-even-is-code",
        title: "What Even Is Code?",
        description: "What is a program, a language, and how code actually runs.",
        lessonCount: 8,
      },
      {
        slug: "your-computer-explained",
        title: "Your Computer, Explained",
        description: "Files, folders, terminal, IDE, Git, and GitHub in plain English.",
        lessonCount: 10,
      },
      {
        slug: "internet-and-browser",
        title: "The Internet & the Browser",
        description: "URLs, browser engines, servers, and how pages load.",
        lessonCount: 8,
      },
      {
        slug: "what-is-testing",
        title: "What Is Testing, Really?",
        description: "Bugs, manual vs automated testing, and what a QA engineer does.",
        lessonCount: 7,
      },
      {
        slug: "soft-skills-setup",
        title: "Soft Skills & Setup Habits",
        description: "How to read errors, ask for help, and organize your learning.",
        lessonCount: 6,
      },
    ],
  },
  {
    slug: "phase-0",
    number: "0",
    title: "Automation & Web Foundations",
    description:
      "Set up your environment, learn HTML/CSS/XPath, understand HTTP, and get the testing mindset.",
    modules: [
      {
        slug: "environment-setup",
        title: "Environment Setup",
        description: "Install Python, VS Code, Git. Learn the terminal, venv, and pip.",
        lessonCount: 6,
      },
      {
        slug: "web-fundamentals",
        title: "Web Fundamentals",
        description: "HTML, CSS, XPath, DOM, HTTP, cookies, and JSON.",
        lessonCount: 27,
      },
      {
        slug: "automation-concepts",
        title: "Automation Concepts",
        description: "Test pyramid, defect lifecycle, flaky tests, and more.",
        lessonCount: 16,
      },
    ],
  },
  {
    slug: "phase-1",
    number: "1",
    title: "Python for Automation",
    description:
      "Learn Python from scratch — syntax, collections, functions, OOP, and API basics.",
    modules: [
      {
        slug: "python-core",
        title: "Python Core",
        description: "Syntax, variables, data types, operators, strings, f-strings.",
        lessonCount: 7,
      },
      {
        slug: "collections-control-flow",
        title: "Collections and Control Flow",
        description: "Lists, tuples, sets, dicts, conditionals, and loops.",
        lessonCount: 8,
      },
      {
        slug: "functions-modules",
        title: "Functions and Modules",
        description: "Functions, args, lambdas, scope, modules, and the standard library.",
        lessonCount: 10,
      },
      {
        slug: "files-json-exceptions",
        title: "Files, JSON and Exceptions",
        description: "Reading files, JSON handling, CSV, and error handling.",
        lessonCount: 7,
      },
      {
        slug: "oop",
        title: "Object-Oriented Programming",
        description: "Classes, methods, inheritance, dunder methods, and dataclasses.",
        lessonCount: 10,
      },
      {
        slug: "api-basics",
        title: "API Basics",
        description: "The requests library, HTTP methods, auth, and sessions.",
        lessonCount: 14,
      },
    ],
  },
  {
    slug: "phase-2",
    number: "2",
    title: "Pytest",
    description:
      "Master the Python testing framework: fixtures, parametrization, plugins, and organization.",
    modules: [
      {
        slug: "pytest-basics",
        title: "Pytest Basics",
        description: "Install, discovery, assertions, markers, and skips.",
        lessonCount: 10,
      },
      {
        slug: "fixtures",
        title: "Fixtures",
        description: "Setup/teardown, scopes, conftest.py, and built-in fixtures.",
        lessonCount: 9,
      },
      {
        slug: "parametrization-plugins",
        title: "Parametrization and Plugins",
        description: "Parametrize, IDs, and the plugin ecosystem.",
        lessonCount: 15,
      },
      {
        slug: "organization",
        title: "Organization",
        description: "Folder structure, markers, config files, and logging.",
        lessonCount: 6,
      },
    ],
  },
  {
    slug: "phase-3",
    number: "3",
    title: "Playwright with Python",
    description:
      "The core. Locators, actions, assertions, network, storage, debugging, and more.",
    modules: [
      {
        slug: "setup-core-architecture",
        title: "Setup and Core Architecture",
        description: "Install, browsers, core objects, launch options, and context options.",
        lessonCount: 60,
      },
      {
        slug: "locators-deep-dive",
        title: "Locators Deep Dive",
        description: "Roles, text, labels, chaining, filtering, and shadow DOM.",
        lessonCount: 40,
      },
      {
        slug: "actions-interactions",
        title: "Actions and Interactions",
        description: "Click, type, drag, scroll, keyboard, mouse, and more.",
        lessonCount: 40,
      },
      {
        slug: "assertions-waits-debugging",
        title: "Assertions, Waits and Debugging",
        description: "Auto-waiting, expect API, and debugging tools.",
        lessonCount: 50,
      },
      {
        slug: "pages-frames-dialogs-files",
        title: "Pages, Frames, Dialogs, Files and Popups",
        description: "Multiple pages, iframes, dialogs, uploads, and downloads.",
        lessonCount: 22,
      },
      {
        slug: "network-storage-auth-js",
        title: "Network, Storage, Auth and JavaScript",
        description: "Routing, mocking, cookies, storage state, and page.evaluate.",
        lessonCount: 38,
      },
      {
        slug: "emulation-media-tracing",
        title: "Emulation, Media, Tracing and Events",
        description: "Devices, geolocation, screenshots, videos, and tracing.",
        lessonCount: 32,
      },
      {
        slug: "advanced-fundamentals-async",
        title: "Advanced Fundamentals and Async Bridge",
        description: "API + UI, async, parallel contexts, WebSockets, and GraphQL.",
        lessonCount: 30,
      },
      {
        slug: "playwright-python-bonus",
        title: "Playwright Python Bonus",
        description: "Codegen, CLI, PDF, integrations, and the MCP.",
        lessonCount: 22,
      },
    ],
  },
  {
    slug: "phase-4",
    number: "4",
    title: "Playwright + Pytest Framework",
    description:
      "Build a real test framework with the Page Object Model, fixtures, and auth reuse.",
    modules: [
      {
        slug: "integration",
        title: "Integration",
        description: "pytest-playwright plugin, built-in fixtures, and CLI flags.",
        lessonCount: 13,
      },
      {
        slug: "page-object-model",
        title: "Page Object Model",
        description: "Page classes, components, fluent interfaces, and builders.",
        lessonCount: 10,
      },
      {
        slug: "config-auth-parallel",
        title: "Config, Auth and Parallel",
        description: "Environment config, auth state, parallelism, and reports.",
        lessonCount: 9,
      },
    ],
  },
  {
    slug: "phase-5",
    number: "5",
    title: "TypeScript Basics",
    description:
      "Learn TypeScript — types, interfaces, generics, and async/await — the right way.",
    modules: [
      {
        slug: "typescript-fundamentals",
        title: "TypeScript Fundamentals",
        description: "Node.js, tsc, types, interfaces, generics, modules, and classes.",
        lessonCount: 19,
      },
      {
        slug: "async-await",
        title: "Async and Await",
        description: "Promises, async/await, and error handling.",
        lessonCount: 10,
      },
    ],
  },
  {
    slug: "phase-6",
    number: "6",
    title: "Playwright with TypeScript",
    description:
      "The full modern Playwright experience with TypeScript, native tooling, and richer features.",
    modules: [
      {
        slug: "setup-scaffolding",
        title: "Setup, Scaffolding and Configuration",
        description: "npm init, playwright.config.ts, tsconfig, and CLI.",
        lessonCount: 90,
      },
      {
        slug: "test-anatomy",
        title: "Test Anatomy, Hooks and Structure",
        description: "Hooks, grouping, tags, timeouts, and retries.",
        lessonCount: 40,
      },
      {
        slug: "locators-actions-assertions",
        title: "Locators, Actions and Assertions",
        description: "The full TS locator and assertion API.",
        lessonCount: 80,
      },
      {
        slug: "fixtures",
        title: "Fixtures",
        description: "Built-in, custom, mergeTests, and auth fixtures.",
        lessonCount: 40,
      },
      {
        slug: "pom-design-patterns",
        title: "Page Object Model and Design Patterns",
        description: "POM, component objects, builders, and data.",
        lessonCount: 38,
      },
      {
        slug: "network-api-mocking",
        title: "Network, API and Mocking",
        description: "Routes, HAR, request fixture, WebSockets, and GraphQL.",
        lessonCount: 38,
      },
      {
        slug: "auth-storage-state",
        title: "Authentication, Storage and State",
        description: "Cookies, storageState, auth setup, and multi-user tests.",
        lessonCount: 24,
      },
      {
        slug: "tracing-debugging-reporting",
        title: "Tracing, Debugging and Reporting",
        description: "Trace viewer, UI mode, and reporters.",
        lessonCount: 48,
      },
      {
        slug: "emulation-visual",
        title: "Emulation, Devices and Visual Testing",
        description: "Devices, screenshots, visual regression, and ARIA snapshots.",
        lessonCount: 34,
      },
      {
        slug: "advanced-real-world",
        title: "Advanced Patterns and Real-World Scenarios",
        description: "Multi-user, iframes, uploads, clipboard, and accessibility.",
        lessonCount: 40,
      },
      {
        slug: "cicd-docker-scaling",
        title: "CI/CD, Docker and Scaling",
        description: "GitHub Actions, Docker, sharding, and flaky tests.",
        lessonCount: 40,
      },
      {
        slug: "ai-mcp-tooling",
        title: "AI, MCP and Modern Tooling",
        description: "MCP, Copilot, ESLint, and monorepos.",
        lessonCount: 20,
      },
      {
        slug: "migration-interop",
        title: "Migration and Interop",
        description: "Python → TypeScript migration and side-by-side running.",
        lessonCount: 12,
      },
      {
        slug: "ts-patterns-tests",
        title: "TypeScript Patterns for Test Code",
        description: "Generics, utility types, and test code quality.",
        lessonCount: 20,
      },
    ],
  },
  {
    slug: "phase-7",
    number: "7",
    title: "CI/CD & Advanced Testing",
    description:
      "Run tests in pipelines, Docker, sharding, visual regression, accessibility, and AI tooling.",
    modules: [
      {
        slug: "cicd",
        title: "CI/CD",
        description: "GitHub Actions, GitLab, Docker, secrets, and matrix builds.",
        lessonCount: 18,
      },
      {
        slug: "advanced-testing",
        title: "Advanced Testing",
        description: "Visual regression, a11y, performance, and remote browsers.",
        lessonCount: 15,
      },
    ],
  },
  {
    slug: "phase-8",
    number: "8",
    title: "Hero Project",
    description:
      "Build a full automation framework from scratch in both Python and TypeScript.",
    modules: [
      {
        slug: "plan",
        title: "Plan",
        description: "Environments, test strategy, page objects, and CI strategy.",
        lessonCount: 6,
      },
      {
        slug: "build-from-scratch",
        title: "Build from Scratch",
        description: "Config, fixtures, POM, API setup, and mocking.",
        lessonCount: 9,
      },
      {
        slug: "harden",
        title: "Harden",
        description: "Parallel, retries, traces, reports, and linting.",
        lessonCount: 7,
      },
      {
        slug: "document-present",
        title: "Document and Present",
        description: "README, test strategy doc, and onboarding.",
        lessonCount: 5,
      },
    ],
  },
];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}