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
  {
    slug: "shadow-dom-basics",
    title: "Shadow DOM Basics",
    summary:
      "Some components hide their inner HTML in a private box. See how Playwright reaches inside.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "http-request-response-cycle",
    title: "The HTTP Request-Response Cycle",
    summary:
      "Every page is a conversation. Your browser asks, a server answers.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "http-methods",
    title: "HTTP Methods",
    summary:
      "GET, POST, PUT, PATCH and DELETE tell the server what you want to do.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "http-status-codes",
    title: "HTTP Status Codes",
    summary:
      "A three-digit number tells you how a request went. Learn the codes you will meet most.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "http-headers",
    title: "HTTP Headers",
    summary:
      "Small labels on every request and response that carry tokens, types and caching details.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "cookies-vs-localstorage-vs-sessionstorage",
    title: "Cookies vs localStorage vs sessionStorage",
    summary:
      "Three browser storage boxes, how long each lasts, and how Playwright reuses a login.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "cors",
    title: "CORS",
    summary:
      "The browser permission system that decides which sites may read which servers.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "rest-vs-graphql-vs-websockets",
    title: "REST vs GraphQL vs WebSockets",
    summary:
      "Three ways a page talks to a server, and what each means for your tests.",
    estimatedMinutes: 35,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "json-structure",
    title: "JSON Structure",
    summary:
      "The plain-text format every API uses. Learn its shape, rules and how to read it.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "devtools-elements-panel",
    title: "DevTools: The Elements Panel",
    summary:
      "Inspect the live page, read roles and labels, and test locator ideas in the browser.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "devtools-network-panel",
    title: "DevTools: The Network Panel",
    summary:
      "See every request your page makes, and use it to debug and plan waits.",
    estimatedMinutes: 35,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "devtools-console-panel",
    title: "DevTools: The Console Panel",
    summary:
      "Read page errors and run JavaScript on the live page to test selectors.",
    estimatedMinutes: 30,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "inspecting-elements-for-locators",
    title: "Inspecting Elements to Build Locators",
    summary:
      "A calm routine to go from a button on screen to a short, stable locator.",
    estimatedMinutes: 35,
    difficulty: "Beginner",
    topics: [],
  },
  {
    slug: "css-selector-anti-patterns",
    title: "CSS Selector Anti-Patterns",
    summary:
      "Selector habits that look fine today and break next week, and better options.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
  {
    slug: "css-specificity-advanced",
    title: "CSS Specificity (Advanced)",
    summary:
      "How CSS scores rules when they fight, and why short selectors are easier to live with.",
    estimatedMinutes: 30,
    difficulty: "Intermediate",
    topics: [],
  },
];

export default lessons;