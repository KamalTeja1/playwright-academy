import type { TopicContent } from "../../types";
import topic1 from "./lists";
import topic2 from "./tuples";
import topic3 from "./sets";
import topic4 from "./dictionaries";
import topic5 from "./conditionals";
import topic6 from "./loops";
import topic7 from "./enumerate-zip-range";
import topic8 from "./walrus-operator";

export const topics: Record<string, TopicContent> = {
  "lists": topic1,
  "tuples": topic2,
  "sets": topic3,
  "dictionaries": topic4,
  "conditionals": topic5,
  "loops": topic6,
  "enumerate-zip-range": topic7,
  "walrus-operator": topic8,
};