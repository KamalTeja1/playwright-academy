export type CodeExample = {
  language: "python" | "typescript" | "javascript" | "bash" | "text" | "markdown";
  title: string;
  code: string;
};

export type CommonMistake = {
  mistake: string;
  fix: string;
};

export type FurtherReading = {
  title: string;
  url: string;
};

export type TopicContent = {
  slug: string;
  title: string;
  summary: string;
  whyItMatters: string;
  notes: string;
  handsOn: string;
  challenge: string;
  proTips: string[];
  commonMistakes: CommonMistake[];
  codeExamples: CodeExample[];
  furtherReading: FurtherReading[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  tags: string[];
};
