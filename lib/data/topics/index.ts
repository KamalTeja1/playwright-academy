import { topics as phaseMinus1Module11 } from "./phase--1/module-1-1";
import { topics as phaseMinus1Module12 } from "./phase--1/module-1-2";
import { topics as phaseMinus1Module13 } from "./phase--1/module-1-3";
import { topics as phase0Module01 } from "./phase-0/module-0-1";
import { topics as phase0Module02 } from "./phase-0/module-0-2";
import type { TopicContent } from "./types";

export type {
  TopicContent,
  CodeExample,
  CommonMistake,
  FurtherReading,
} from "./types";

export const topics: Record<string, TopicContent> = {
  ...phaseMinus1Module11,
  ...phaseMinus1Module12,
  ...phaseMinus1Module13,
  ...phase0Module01,
  ...phase0Module02,
};

export function getTopicBySlug(slug: string): TopicContent | undefined {
  return topics[slug];
}