import type { TopicContent } from "../../types";
import topic1 from "./parametrize-single";
import topic2 from "./parametrize-multiple";
import topic3 from "./stacked-parametrize";
import topic4 from "./test-ids";
import topic5 from "./indirect-parametrization";
import topic6 from "./pytest-html";
import topic7 from "./pytest-xdist";
import topic8 from "./pytest-cov";
import topic9 from "./pytest-rerunfailures";
import topic10 from "./pytest-playwright";
import topic11 from "./pytest-base-url";
import topic12 from "./pytest-dotenv";
import topic13 from "./pytest-check";
import topic14 from "./pytest-order";
import topic15 from "./allure-pytest";

export const topics: Record<string, TopicContent> = {
  "parametrize-single": topic1,
  "parametrize-multiple": topic2,
  "stacked-parametrize": topic3,
  "test-ids": topic4,
  "indirect-parametrization": topic5,
  "pytest-html": topic6,
  "pytest-xdist": topic7,
  "pytest-cov": topic8,
  "pytest-rerunfailures": topic9,
  "pytest-playwright": topic10,
  "pytest-base-url": topic11,
  "pytest-dotenv": topic12,
  "pytest-check": topic13,
  "pytest-order": topic14,
  "allure-pytest": topic15,
};
