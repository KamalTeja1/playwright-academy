import type { TopicContent } from "../../types";
import topic1 from "./css-locators";
import topic2 from "./xpath-locators";
import topic3 from "./css-has-text";
import topic4 from "./css-text-pseudo";
import topic5 from "./css-visible-pseudo";
import topic6 from "./css-has-pseudo";
import topic7 from "./css-not-pseudo";
import topic8 from "./locator-chaining";
import topic9 from "./locator-filter-text";
import topic10 from "./locator-filter-has";
import topic11 from "./locator-filter-has-not";
import topic12 from "./locator-first-last-nth";
import topic13 from "./locator-and-or";
import topic14 from "./shadow-dom-piercing";
import topic15 from "./frame-locator";
import topic16 from "./locator-all";
import topic17 from "./locator-count";
import topic18 from "./locator-bounding-box";

export const topics: Record<string, TopicContent> = {
  "css-locators": topic1,
  "xpath-locators": topic2,
  "css-has-text": topic3,
  "css-text-pseudo": topic4,
  "css-visible-pseudo": topic5,
  "css-has-pseudo": topic6,
  "css-not-pseudo": topic7,
  "locator-chaining": topic8,
  "locator-filter-text": topic9,
  "locator-filter-has": topic10,
  "locator-filter-has-not": topic11,
  "locator-first-last-nth": topic12,
  "locator-and-or": topic13,
  "shadow-dom-piercing": topic14,
  "frame-locator": topic15,
  "locator-all": topic16,
  "locator-count": topic17,
  "locator-bounding-box": topic18,
};
