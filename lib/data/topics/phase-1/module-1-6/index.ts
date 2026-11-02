import type { TopicContent } from "../../types";
import topic1 from "./installing-requests";
import topic2 from "./get-requests";
import topic3 from "./post-requests";
import topic4 from "./put-patch-requests";
import topic5 from "./delete-requests";
import topic6 from "./query-params";
import topic7 from "./request-headers";
import topic8 from "./authentication-basics";
import topic9 from "./json-responses";
import topic10 from "./status-code-checks";
import topic11 from "./timeouts";
import topic12 from "./retries";
import topic13 from "./session-objects";
import topic14 from "./os-environ";

export const topics: Record<string, TopicContent> = {
  "installing-requests": topic1,
  "get-requests": topic2,
  "post-requests": topic3,
  "put-patch-requests": topic4,
  "delete-requests": topic5,
  "query-params": topic6,
  "request-headers": topic7,
  "authentication-basics": topic8,
  "json-responses": topic9,
  "status-code-checks": topic10,
  "timeouts": topic11,
  "retries": topic12,
  "session-objects": topic13,
  "os-environ": topic14,
};
