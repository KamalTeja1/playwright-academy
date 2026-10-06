import type { TopicContent } from "../../types";
import topic1 from "./what-is-a-program";
import topic2 from "./programming-language";
import topic3 from "./compiled-vs-interpreted";
import topic4 from "./python-vs-javascript";
import topic5 from "./how-code-runs";
import topic6 from "./hello-world";

export const topics: Record<string, TopicContent> = {
  "what-is-a-program": topic1,
  "programming-language": topic2,
  "compiled-vs-interpreted": topic3,
  "python-vs-javascript": topic4,
  "how-code-runs": topic5,
  "hello-world": topic6,
};
