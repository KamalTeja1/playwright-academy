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
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}