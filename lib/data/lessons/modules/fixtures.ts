import type { Lesson } from "../types";

const lessons: Lesson[] = [
  {
    slug: "what-are-fixtures",
    title: "What Are Fixtures?",
    summary: "Provide reusable setup and values to tests with fixtures.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "setup-and-teardown",
    title: "Fixture Setup and Teardown",
    summary: "Prepare resources and clean them up with yield fixtures.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "fixture-scopes",
    title: "Fixture Scopes",
    summary: "Choose how often pytest creates and reuses a fixture.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "autouse-fixtures",
    title: "Autouse Fixtures",
    summary: "Apply fixture setup automatically when every test needs it.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "conftest-py",
    title: "The conftest.py File",
    summary: "Share fixtures across test files in a directory tree.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "built-in-fixtures",
    title: "Useful Built-in Fixtures",
    summary: "Use pytest fixtures for temporary paths and captured output.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "request-fixture",
    title: "The request Fixture",
    summary: "Inspect the current test and fixture context with request.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "fixture-params",
    title: "Parametrizing Fixtures",
    summary: "Run tests with multiple values provided by a fixture.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "yielding-fixtures",
    title: "Yielding Fixtures",
    summary: "Provide a resource and run its cleanup after the test.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
];

export default lessons;
