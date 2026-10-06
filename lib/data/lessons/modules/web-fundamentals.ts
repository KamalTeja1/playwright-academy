import type { Lesson } from "../types";

export const lessons: Lesson[] = [
    {
      slug: "html-structure",
      title: "HTML Structure",
      summary: "The basic skeleton every web page is built on.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "html-tags",
      title: "HTML Tags",
      summary: "The building blocks — div, span, button, input, and more.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "html-attributes",
      title: "HTML Attributes",
      summary: "id, class, name, href, aria-*, data-*, role — and why they matter.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "semantic-html",
      title: "Semantic HTML vs Div Soup",
      summary: "Why good HTML makes testing easier.",
      estimatedMinutes: 20,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "accessibility-attributes",
      title: "Accessibility Attributes",
      summary: "aria-label, aria-labelledby, role — and how Playwright uses them.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "css-selectors",
      title: "CSS Selectors",
      summary: "Element, .class, #id, [attr] — the locator language of the web.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [],
    },
        {
      slug: "xpath-absolute-vs-relative",
      title: "XPath: Absolute vs Relative",
      summary:
        "Two XPath styles, why full paths break easily, and how to recognise a safer one.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "xpath-predicates",
      title: "XPath Predicates",
      summary:
        "Use square brackets to filter XPath by attributes, text, position, and conditions.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "xpath-axes",
      title: "XPath Axes",
      summary:
        "Move through parent, child, sibling, ancestor, and descendant relationships.",
      estimatedMinutes: 35,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "why-playwright-discourages-xpath",
      title: "Why Playwright Discourages XPath",
      summary:
        "Why user-facing locators are usually clearer and more stable than XPath.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "dom-vs-html-source",
      title: "DOM vs HTML Source",
      summary:
        "Why DevTools and View Page Source can differ, and which one Playwright sees.",
      estimatedMinutes: 25,
      difficulty: "Beginner",
      topics: [],
    },
    {
      slug: "dynamic-content",
      title: "Dynamic Content",
      summary:
        "How pages update after loading, and how Playwright waits for useful final states.",
      estimatedMinutes: 30,
      difficulty: "Beginner",
      topics: [],
    },
  ];

export default lessons;
