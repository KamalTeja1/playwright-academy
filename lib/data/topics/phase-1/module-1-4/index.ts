import type { TopicContent } from "../../types";
import fileReadingWriting from "./file-reading-writing";
import csvHandling from "./csv-handling";
import jsonHandling from "./json-handling";
import yamlBasics from "./yaml-basics";
import pathlib from "./pathlib";
import exceptionHandling from "./exception-handling";
import customExceptions from "./custom-exceptions";

export const topics: Record<string, TopicContent> = {
  "file-reading-writing": fileReadingWriting,
  "csv-handling": csvHandling,
  "json-handling": jsonHandling,
  "yaml-basics": yamlBasics,
  "pathlib": pathlib,
  "exception-handling": exceptionHandling,
  "custom-exceptions": customExceptions,
};