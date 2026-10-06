import type { TopicContent } from "../../types";
import topic1 from "./defining-functions";
import topic2 from "./docstrings";
import topic3 from "./function-arguments";
import topic4 from "./args-kwargs";
import topic5 from "./return-values";
import topic6 from "./lambdas";
import topic7 from "./scope-nonlocal";
import topic8 from "./modules-packages";
import topic9 from "./init-file";
import topic10 from "./standard-library";

export const topics: Record<string, TopicContent> = {
  "defining-functions": topic1,
  "docstrings": topic2,
  "function-arguments": topic3,
  "args-kwargs": topic4,
  "return-values": topic5,
  "lambdas": topic6,
  "scope-nonlocal": topic7,
  "modules-packages": topic8,
  "init-file": topic9,
  "standard-library": topic10,
};