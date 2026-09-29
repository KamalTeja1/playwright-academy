"use client";

import { motion } from "framer-motion";
import {
  Sparkle,
  Globe,
  Code,
  Flask,
  Robot,
  BracketsCurly,
  Stack,
  GitBranch,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { PhaseCard } from "@/components/ui/phase-card";

const PHASES = [
  {
    slug: "phase--1",
    number: "-1",
    title: "Absolute Beginner Primer",
    description:
      "Never coded before? Start here. We cover what code is, how your computer works, and how the internet works.",
    moduleCount: 5,
    progress: 0,
    Icon: Sparkle,
  },
  {
    slug: "phase-0",
    number: "0",
    title: "Automation & Web Foundations",
    description:
      "Set up your environment, learn HTML/CSS/XPath, understand HTTP, and get the testing mindset.",
    moduleCount: 3,
    progress: 0,
    Icon: Globe,
  },
  {
    slug: "phase-1",
    number: "1",
    title: "Python for Automation",
    description:
      "Learn Python from scratch — syntax, collections, functions, OOP, and API basics.",
    moduleCount: 6,
    progress: 0,
    Icon: Code,
  },
  {
    slug: "phase-2",
    number: "2",
    title: "Pytest",
    description:
      "Master the Python testing framework: fixtures, parametrization, plugins, and organization.",
    moduleCount: 4,
    progress: 0,
    Icon: Flask,
  },
  {
    slug: "phase-3",
    number: "3",
    title: "Playwright with Python",
    description:
      "The core. Locators, actions, assertions, network, storage, debugging, and more.",
    moduleCount: 9,
    progress: 0,
    Icon: Robot,
  },
  {
    slug: "phase-4",
    number: "4",
    title: "Playwright + Pytest Framework",
    description:
      "Build a real test framework with the Page Object Model, fixtures, and auth reuse.",
    moduleCount: 3,
    progress: 0,
    Icon: Stack,
  },
  {
    slug: "phase-5",
    number: "5",
    title: "TypeScript Basics",
    description:
      "Learn TypeScript — types, interfaces, generics, and async/await — the right way.",
    moduleCount: 2,
    progress: 0,
    Icon: BracketsCurly,
  },
  {
    slug: "phase-6",
    number: "6",
    title: "Playwright with TypeScript",
    description:
      "The full modern Playwright experience with TypeScript, native tooling, and richer features.",
    moduleCount: 14,
    progress: 0,
    Icon: Robot,
  },
  {
    slug: "phase-7",
    number: "7",
    title: "CI/CD & Advanced Testing",
    description:
      "Run tests in pipelines, Docker, sharding, visual regression, accessibility, and AI tooling.",
    moduleCount: 2,
    progress: 0,
    Icon: GitBranch,
  },
  {
    slug: "phase-8",
    number: "8",
    title: "Hero Project",
    description:
      "Build a full automation framework from scratch in both Python and TypeScript.",
    moduleCount: 4,
    progress: 0,
    Icon: Trophy,
  },
];

export default function PhasesPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-2">
          Learning Path
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          All Phases
        </h1>
        <p className="text-[#46586a] max-w-2xl text-[14.5px]">
          From "what is code?" to a full-fledged Playwright framework. Follow
          the phases in order, or jump to what you need. Every topic has notes,
          hands-on practice, and a challenge.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.slug} {...phase} />
        ))}
      </div>
    </div>
  );
}