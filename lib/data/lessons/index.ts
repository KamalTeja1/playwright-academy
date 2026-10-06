import type { Lesson } from "./types";
import module1 from "./modules/what-even-is-code";
import module2 from "./modules/your-computer-explained";
import module3 from "./modules/internet-and-browser";
import module4 from "./modules/what-is-testing";
import module5 from "./modules/soft-skills-setup";
import module6 from "./modules/environment-setup";
import module7 from "./modules/web-fundamentals";
import module8 from "./modules/automation-concepts";

export type { Topic, Lesson } from "./types";

export const lessonsByModule: Record<string, Lesson[]> = {
  "what-even-is-code": module1,
  "your-computer-explained": module2,
  "internet-and-browser": module3,
  "what-is-testing": module4,
  "soft-skills-setup": module5,
  "environment-setup": module6,
  "web-fundamentals": module7,
  "automation-concepts": module8,
};

export function getModuleLessons(moduleSlug: string): Lesson[] | undefined {
  return lessonsByModule[moduleSlug];
}