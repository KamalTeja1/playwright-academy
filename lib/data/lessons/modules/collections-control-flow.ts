import type { Lesson } from "../types";

export const lessons: Lesson[] = [
  {
    slug: "lists",
    title: "Lists",
    summary: "An ordered, changeable collection. Create, read, change, slice and sort.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "tuples",
    title: "Tuples",
    summary: "A fixed ordered collection. Unpack values and return several from a function.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "sets",
    title: "Sets",
    summary: "Unique values with no order. Remove duplicates and find missing or extra items.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "dictionaries",
    title: "Dictionaries",
    summary: "Key and value pairs, the shape of JSON and API data.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "conditionals",
    title: "Conditionals: if, elif, else",
    summary: "Make code choose between paths, including the match statement.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "loops",
    title: "Loops: for and while",
    summary: "Repeat code with for and while, and control it with break and continue.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "enumerate-zip-range",
    title: "enumerate, zip and range",
    summary: "Cleaner loops: get the index, pair two lists and count numbers.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "walrus-operator",
    title: "The Walrus Operator",
    summary: "Assign and use a value in one expression, and know when not to.",
    estimatedMinutes: 20,
    difficulty: "Intermediate",
    topics: [],
  },
];

export default lessons;