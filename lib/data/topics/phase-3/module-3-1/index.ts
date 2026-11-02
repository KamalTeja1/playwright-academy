import type { TopicContent } from "../../types";
import topic1 from "./page-goto";
import topic2 from "./page-goto-wait-until";
import topic3 from "./page-title-url";
import topic4 from "./page-content";
import topic5 from "./page-reload";
import topic6 from "./page-back-forward";
import topic7 from "./page-wait-load-state";
import topic8 from "./context-isolation";
import topic9 from "./fresh-context-per-test";

export const topics: Record<string, TopicContent> = {
  "page-goto": topic1,
  "page-goto-wait-until": topic2,
  "page-title-url": topic3,
  "page-content": topic4,
  "page-reload": topic5,
  "page-back-forward": topic6,
  "page-wait-load-state": topic7,
  "context-isolation": topic8,
  "fresh-context-per-test": topic9,
};
