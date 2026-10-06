import type { TopicContent } from "../../types";
import topic1 from "./what-is-a-bug";
import topic2 from "./manual-vs-automated-testing";
import topic3 from "./why-companies-automate";
import topic4 from "./what-is-a-test-script";
import topic5 from "./qa-vs-sdet";

export const topics: Record<string, TopicContent> = {
  "what-is-a-bug": topic1,
  "manual-vs-automated-testing": topic2,
  "why-companies-automate": topic3,
  "what-is-a-test-script": topic4,
  "qa-vs-sdet": topic5,
};
