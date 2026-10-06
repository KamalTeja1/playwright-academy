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
import topic13 from "./shadow-dom-basics";
import topic14 from "./http-request-response-cycle";
import topic15 from "./http-methods";
import topic16 from "./http-status-codes";
import topic17 from "./http-headers";
import topic18 from "./cookies-vs-localstorage-vs-sessionstorage";
import topic19 from "./cors";
import topic20 from "./rest-vs-graphql-vs-websockets";
import topic21 from "./json-structure";
import topic22 from "./devtools-elements-panel";
import topic23 from "./devtools-network-panel";
import topic24 from "./devtools-console-panel";
import topic25 from "./inspecting-elements-for-locators";
import topic26 from "./css-selector-anti-patterns";
import topic27 from "./css-specificity-advanced";

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
  "shadow-dom-basics": topic13,
  "http-request-response-cycle": topic14,
  "http-methods": topic15,
  "http-status-codes": topic16,
  "http-headers": topic17,
  "cookies-vs-localstorage-vs-sessionstorage": topic18,
  "cors": topic19,
  "rest-vs-graphql-vs-websockets": topic20,
  "json-structure": topic21,
  "devtools-elements-panel": topic22,
  "devtools-network-panel": topic23,
  "devtools-console-panel": topic24,
  "inspecting-elements-for-locators": topic25,
  "css-selector-anti-patterns": topic26,
  "css-specificity-advanced": topic27,
};