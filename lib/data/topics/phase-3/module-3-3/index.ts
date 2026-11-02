import type { TopicContent } from "../../types";
import topic1 from "./click-basics";
import topic2 from "./dblclick";
import topic3 from "./right-click";
import topic4 from "./click-modifiers";
import topic5 from "./click-count-delay";
import topic6 from "./click-position-force";
import topic7 from "./click-no-wait-trial";
import topic8 from "./hover";
import topic9 from "./focus";
import topic10 from "./blur";
import topic11 from "./fill-basics";
import topic12 from "./clear-input";
import topic13 from "./type-deprecated";
import topic14 from "./press-sequentially";
import topic15 from "./insert-text";
import topic16 from "./check-uncheck";
import topic17 from "./set-checked";
import topic18 from "./select-option-value";
import topic19 from "./select-option-label";
import topic20 from "./select-option-index";
import topic21 from "./multiple-selects";
import topic22 from "./set-input-files-single";
import topic23 from "./set-input-files-multiple";
import topic24 from "./set-input-files-buffer";
import topic25 from "./drag-and-drop";
import topic26 from "./drag-to";
import topic27 from "./manual-mouse-drag";
import topic28 from "./keyboard-press";
import topic29 from "./keyboard-down-up";
import topic30 from "./keyboard-insert";
import topic31 from "./keyboard-shortcuts";
import topic32 from "./mouse-move-down-up";
import topic33 from "./mouse-click";
import topic34 from "./mouse-wheel";
import topic35 from "./scroll-into-view";
import topic36 from "./scroll-wheel";
import topic37 from "./tap";
import topic38 from "./touchscreen";
import topic39 from "./dispatch-event";
import topic40 from "./evaluate-basics";

export const topics: Record<string, TopicContent> = {
  "click-basics": topic1,
  "dblclick": topic2,
  "right-click": topic3,
  "click-modifiers": topic4,
  "click-count-delay": topic5,
  "click-position-force": topic6,
  "click-no-wait-trial": topic7,
  "hover": topic8,
  "focus": topic9,
  "blur": topic10,
  "fill-basics": topic11,
  "clear-input": topic12,
  "type-deprecated": topic13,
  "press-sequentially": topic14,
  "insert-text": topic15,
  "check-uncheck": topic16,
  "set-checked": topic17,
  "select-option-value": topic18,
  "select-option-label": topic19,
  "select-option-index": topic20,
  "multiple-selects": topic21,
  "set-input-files-single": topic22,
  "set-input-files-multiple": topic23,
  "set-input-files-buffer": topic24,
  "drag-and-drop": topic25,
  "drag-to": topic26,
  "manual-mouse-drag": topic27,
  "keyboard-press": topic28,
  "keyboard-down-up": topic29,
  "keyboard-insert": topic30,
  "keyboard-shortcuts": topic31,
  "mouse-move-down-up": topic32,
  "mouse-click": topic33,
  "mouse-wheel": topic34,
  "scroll-into-view": topic35,
  "scroll-wheel": topic36,
  "tap": topic37,
  "touchscreen": topic38,
  "dispatch-event": topic39,
  "evaluate-basics": topic40,
};
