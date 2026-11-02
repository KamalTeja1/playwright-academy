import type { TopicContent } from "../../types";
import topic1 from "./classes-objects";
import topic2 from "./init-method";
import topic3 from "./instance-vs-class-attributes";
import topic4 from "./classmethod-staticmethod";
import topic5 from "./property-decorator";
import topic6 from "./inheritance";
import topic7 from "./super-function";
import topic8 from "./dunder-methods";
import topic9 from "./composition-vs-inheritance";
import topic10 from "./dataclasses";

export const topics: Record<string, TopicContent> = {
  "classes-objects": topic1,
  "init-method": topic2,
  "instance-vs-class-attributes": topic3,
  "classmethod-staticmethod": topic4,
  "property-decorator": topic5,
  "inheritance": topic6,
  "super-function": topic7,
  "dunder-methods": topic8,
  "composition-vs-inheritance": topic9,
  "dataclasses": topic10,
};