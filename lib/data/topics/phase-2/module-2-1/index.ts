import type { TopicContent } from "../../types";
import topic1 from "./installing-pytest";
import topic2 from "./test-discovery";
import topic3 from "./running-tests";
import topic4 from "./writing-assertions";
import topic5 from "./pytest-raises";
import topic6 from "./pytest-approx";
import topic7 from "./skip-and-skipif";
import topic8 from "./xfail";
import topic9 from "./custom-markers";
import topic10 from "./test-reports";

export const topics: Record<string, TopicContent> = {
  "installing-pytest": topic1,
  "test-discovery": topic2,
  "running-tests": topic3,
  "writing-assertions": topic4,
  "pytest-raises": topic5,
  "pytest-approx": topic6,
  "skip-and-skipif": topic7,
  "xfail": topic8,
  "custom-markers": topic9,
  "test-reports": topic10,
};
