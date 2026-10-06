import type { TopicContent } from "../../types";
import topic1 from "./html-structure";
import topic2 from "./html-tags";
import topic3 from "./html-attributes";
import topic4 from "./semantic-html";
import topic5 from "./accessibility-attributes";
import topic6 from "./css-selectors";
import topic7 from "./xpath-absolute-vs-relative";
import topic8 from "./xpath-predicates";
import topic9 from "./xpath-axes";
import topic10 from "./why-playwright-discourages-xpath";
import topic11 from "./dom-vs-html-source";
import topic12 from "./dynamic-content";

export const topics: Record<string, TopicContent> = {
  "html-structure": topic1,
  "html-tags": topic2,
  "html-attributes": topic3,
  "semantic-html": topic4,
  "accessibility-attributes": topic5,
  "css-selectors": topic6,
  "xpath-absolute-vs-relative": topic7,
  "xpath-predicates": topic8,
  "xpath-axes": topic9,
  "why-playwright-discourages-xpath": topic10,
  "dom-vs-html-source": topic11,
  "dynamic-content": topic12,
};
