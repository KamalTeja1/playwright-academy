import type { Lesson } from "../types";

export const lessons: Lesson[] = [
  {
    slug: "file-reading-writing",
    title: "Reading and Writing Files",
    summary: "Read, write and append text using explicit modes and context managers.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "csv-handling",
    title: "Working with CSV Files",
    summary: "Read and write tabular test data with DictReader and DictWriter.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "json-handling",
    title: "Working with JSON",
    summary: "Parse JSON text and read and write structured fixture files.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "yaml-basics",
    title: "YAML Basics",
    summary: "Load YAML configuration safely and validate its structure.",
    estimatedMinutes: 35,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "pathlib",
    title: "Paths with pathlib",
    summary: "Build paths and organise fixture and report directories.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "exception-handling",
    title: "Handling Exceptions",
    summary: "Handle expected failures with try, except, else and finally.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "custom-exceptions",
    title: "Raising and Customising Exceptions",
    summary: "Raise meaningful errors and preserve their underlying causes.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
];

export default lessons;