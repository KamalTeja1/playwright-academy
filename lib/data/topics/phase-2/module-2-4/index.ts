import type { TopicContent } from "../../types";
import topic1 from "./folder-structure";
import topic2 from "./using-markers";
import topic3 from "./selective-runs";
import topic4 from "./pytest-ini-config";
import topic5 from "./logging-in-pytest";
import topic6 from "./capturing-output";

export const topics: Record<string, TopicContent> = {
  "folder-structure": topic1,
  "using-markers": topic2,
  "selective-runs": topic3,
  "pytest-ini-config": topic4,
  "logging-in-pytest": topic5,
  "capturing-output": topic6,
};
