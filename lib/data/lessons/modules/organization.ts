import type { Lesson } from "../types";

const lessons: Lesson[] = [
  {
    slug: "folder-structure",
    title: "Organizing Test Folders",
    summary: "Arrange application code and tests in a predictable layout.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "using-markers",
    title: "Using Built-in Markers",
    summary: "Use pytest markers to describe and control test runs.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "selective-runs",
    title: "Selecting Which Tests to Run",
    summary: "Select tests by path, node ID, keyword, or marker.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "pytest-ini-config",
    title: "Configuring pytest with pytest.ini",
    summary: "Set shared pytest defaults and register custom markers.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "logging-in-pytest",
    title: "Logging in pytest",
    summary: "Use caplog to inspect important application log messages.",
    estimatedMinutes: 25,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "capturing-output",
    title: "Capturing Test Output",
    summary: "Capture and check text written to stdout and stderr.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
];

export default lessons;
