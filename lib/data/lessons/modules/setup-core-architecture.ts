import type { Lesson } from "../types";

const lessons: Lesson[] = [
  {
    slug: "page-goto",
    title: "Navigating with page.goto",
    summary: "Navigate a page to a URL with Playwright.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "page-goto-wait-until",
    title: "Choosing a Navigation Wait Condition",
    summary: "Choose a navigation milestone that fits the test.",
    estimatedMinutes: 25,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "page-title-url",
    title: "Reading the Page Title and URL",
    summary: "Inspect the current document title and page URL.",
    estimatedMinutes: 20,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "page-content",
    title: "Inspecting Page Content",
    summary: "Read the document HTML and check page behaviour.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "page-reload",
    title: "Reloading a Page",
    summary: "Reload the current page and verify its state.",
    estimatedMinutes: 20,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "page-back-forward",
    title: "Going Back and Forward",
    summary: "Navigate through the page's browser history.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "page-wait-load-state",
    title: "Waiting for a Page Load State",
    summary: "Wait for a navigation milestone before continuing.",
    estimatedMinutes: 25,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "context-isolation",
    title: "Isolating Browser Contexts",
    summary: "Keep cookies and storage separate between sessions.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "fresh-context-per-test",
    title: "A Fresh Context for Each Test",
    summary: "Create isolated browser state for each test.",
    estimatedMinutes: 25,
    difficulty: "Beginner",
    topics: [],
  },
];

export default lessons;
