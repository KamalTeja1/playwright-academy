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
