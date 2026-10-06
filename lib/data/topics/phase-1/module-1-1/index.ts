import type { TopicContent } from "../../types";
import topic1 from "./syntax-indentation";
import topic2 from "./variables-typing";
import topic3 from "./data-types";
import topic4 from "./operators";
import topic5 from "./string-methods";
import topic6 from "./f-strings";
import topic7 from "./type-conversion";

export const topics: Record<string, TopicContent> = {
  "syntax-indentation": topic1,
  "variables-typing": topic2,
  "data-types": topic3,
  "operators": topic4,
  "string-methods": topic5,
  "f-strings": topic6,
  "type-conversion": topic7,
};