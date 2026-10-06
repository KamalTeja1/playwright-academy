import type { TopicContent } from "../../types";
import topic1 from "./install-python";
import topic2 from "./install-vscode";
import topic3 from "./install-git";
import topic4 from "./verify-tools";
import topic5 from "./vscode-extensions";
import topic6 from "./terminal-basics";
import topic7 from "./virtual-environments";
import topic8 from "./pip-essentials";
import topic9 from "./devtools-tour";

export const topics: Record<string, TopicContent> = {
  "install-python": topic1,
  "install-vscode": topic2,
  "install-git": topic3,
  "verify-tools": topic4,
  "vscode-extensions": topic5,
  "terminal-basics": topic6,
  "virtual-environments": topic7,
  "pip-essentials": topic8,
  "devtools-tour": topic9,
};
