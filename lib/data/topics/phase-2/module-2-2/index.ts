import type { TopicContent } from "../../types";
import topic1 from "./what-are-fixtures";
import topic2 from "./setup-and-teardown";
import topic3 from "./fixture-scopes";
import topic4 from "./autouse-fixtures";
import topic5 from "./conftest-py";
import topic6 from "./built-in-fixtures";
import topic7 from "./request-fixture";
import topic8 from "./fixture-params";
import topic9 from "./yielding-fixtures";

export const topics: Record<string, TopicContent> = {
  "what-are-fixtures": topic1,
  "setup-and-teardown": topic2,
  "fixture-scopes": topic3,
  "autouse-fixtures": topic4,
  "conftest-py": topic5,
  "built-in-fixtures": topic6,
  "request-fixture": topic7,
  "fixture-params": topic8,
  "yielding-fixtures": topic9,
};
