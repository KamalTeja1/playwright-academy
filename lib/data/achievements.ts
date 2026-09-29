import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  Footprints,
  Lightbulb,
  BookOpen,
  Target,
  Trophy,
  GraduationCap,
  Lightning,
  Fire,
  Calendar,
  CalendarCheck,
  Crown,
  Sparkle,
  Globe,
  Code,
  Flask,
  Robot,
  Stack,
  BracketsCurly,
  GitBranch,
  Moon,
  Sun,
  Rocket,
  Compass,
} from "@phosphor-icons/react/dist/ssr";

export type AchievementTier = "bronze" | "silver" | "gold" | "platinum";
export type AchievementCategory = "progress" | "streak" | "phase" | "special";

export type AchievementContext = {
  completedSlugs: string[];
  completed: Record<string, { completedAt: string }>;
  streak: number;
  topicsByPhase: Record<string, { total: number; done: number }>;
  completionsPerDay: Record<string, number>;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: PhosphorIcon;
  tier: AchievementTier;
  category: AchievementCategory;
  phaseSlug?: string;
  check: (ctx: AchievementContext) => boolean;
};

function inHourRange(
  completed: Record<string, { completedAt: string }>,
  startHour: number,
  endHour: number
): boolean {
  for (const entry of Object.values(completed)) {
    const h = new Date(entry.completedAt).getHours();
    if (startHour <= endHour) {
      if (h >= startHour && h < endHour) return true;
    } else {
      if (h >= startHour || h < endHour) return true;
    }
  }
  return false;
}

function onWeekend(completed: Record<string, { completedAt: string }>): boolean {
  for (const entry of Object.values(completed)) {
    const day = new Date(entry.completedAt).getDay();
    if (day === 0 || day === 6) return true;
  }
  return false;
}

function phaseCheck(slug: string) {
  return (ctx: AchievementContext) => {
    const stat = ctx.topicsByPhase[slug];
    return Boolean(stat && stat.total > 0 && stat.done === stat.total);
  };
}

export const ACHIEVEMENTS: Achievement[] = [
  // PROGRESS
  { id: "first-steps", title: "First Steps", description: "Complete your first topic", icon: Footprints, tier: "bronze", category: "progress", check: (c) => c.completedSlugs.length >= 1 },
  { id: "curious-mind", title: "Curious Mind", description: "Complete 5 topics", icon: Lightbulb, tier: "bronze", category: "progress", check: (c) => c.completedSlugs.length >= 5 },
  { id: "getting-serious", title: "Getting Serious", description: "Complete 10 topics", icon: BookOpen, tier: "silver", category: "progress", check: (c) => c.completedSlugs.length >= 10 },
  { id: "committed", title: "Committed", description: "Complete 25 topics", icon: Target, tier: "silver", category: "progress", check: (c) => c.completedSlugs.length >= 25 },
  { id: "dedicated", title: "Dedicated", description: "Complete 50 topics", icon: Trophy, tier: "gold", category: "progress", check: (c) => c.completedSlugs.length >= 50 },
  { id: "scholar", title: "Scholar", description: "Complete 100 topics", icon: GraduationCap, tier: "platinum", category: "progress", check: (c) => c.completedSlugs.length >= 100 },

  // STREAK
  { id: "spark", title: "Spark", description: "1-day streak", icon: Lightning, tier: "bronze", category: "streak", check: (c) => c.streak >= 1 },
  { id: "on-fire", title: "On Fire", description: "3-day streak", icon: Fire, tier: "bronze", category: "streak", check: (c) => c.streak >= 3 },
  { id: "week-warrior", title: "Week Warrior", description: "7-day streak", icon: Calendar, tier: "silver", category: "streak", check: (c) => c.streak >= 7 },
  { id: "fortnight-force", title: "Fortnight Force", description: "14-day streak", icon: CalendarCheck, tier: "gold", category: "streak", check: (c) => c.streak >= 14 },
  { id: "monthly-master", title: "Monthly Master", description: "30-day streak", icon: Crown, tier: "platinum", category: "streak", check: (c) => c.streak >= 30 },

  // PHASE
  { id: "phase--1-master", title: "Primer Pro", description: "Complete all of Phase -1", icon: Sparkle, tier: "silver", category: "phase", phaseSlug: "phase--1", check: phaseCheck("phase--1") },
  { id: "phase-0-master", title: "Foundations Rock", description: "Complete all of Phase 0", icon: Globe, tier: "silver", category: "phase", phaseSlug: "phase-0", check: phaseCheck("phase-0") },
  { id: "phase-1-master", title: "Pythonic", description: "Complete all of Phase 1", icon: Code, tier: "gold", category: "phase", phaseSlug: "phase-1", check: phaseCheck("phase-1") },
  { id: "phase-2-master", title: "Pytest Pro", description: "Complete all of Phase 2", icon: Flask, tier: "gold", category: "phase", phaseSlug: "phase-2", check: phaseCheck("phase-2") },
  { id: "phase-3-master", title: "Playwright Pioneer", description: "Complete all of Phase 3", icon: Robot, tier: "gold", category: "phase", phaseSlug: "phase-3", check: phaseCheck("phase-3") },
  { id: "phase-4-master", title: "Framework Builder", description: "Complete all of Phase 4", icon: Stack, tier: "gold", category: "phase", phaseSlug: "phase-4", check: phaseCheck("phase-4") },
  { id: "phase-5-master", title: "Type Saver", description: "Complete all of Phase 5", icon: BracketsCurly, tier: "gold", category: "phase", phaseSlug: "phase-5", check: phaseCheck("phase-5") },
  { id: "phase-6-master", title: "TS Playwright Master", description: "Complete all of Phase 6", icon: Robot, tier: "platinum", category: "phase", phaseSlug: "phase-6", check: phaseCheck("phase-6") },
  { id: "phase-7-master", title: "CI/CD Champion", description: "Complete all of Phase 7", icon: GitBranch, tier: "platinum", category: "phase", phaseSlug: "phase-7", check: phaseCheck("phase-7") },
  { id: "phase-8-master", title: "Hero", description: "Complete all of Phase 8", icon: Trophy, tier: "platinum", category: "phase", phaseSlug: "phase-8", check: phaseCheck("phase-8") },

  // SPECIAL
  { id: "night-owl", title: "Night Owl", description: "Complete a topic after 10 PM", icon: Moon, tier: "bronze", category: "special", check: (c) => inHourRange(c.completed, 22, 4) },
  { id: "early-bird", title: "Early Bird", description: "Complete a topic before 7 AM", icon: Sun, tier: "bronze", category: "special", check: (c) => inHourRange(c.completed, 4, 7) },
  { id: "weekend-warrior", title: "Weekend Warrior", description: "Complete a topic on Saturday or Sunday", icon: Calendar, tier: "bronze", category: "special", check: (c) => onWeekend(c.completed) },
  { id: "speed-demon", title: "Speed Demon", description: "Complete 3 topics in one day", icon: Lightning, tier: "silver", category: "special", check: (c) => Object.values(c.completionsPerDay).some((n) => n >= 3) },
  { id: "marathon", title: "Marathon", description: "Complete 5 topics in one day", icon: Rocket, tier: "gold", category: "special", check: (c) => Object.values(c.completionsPerDay).some((n) => n >= 5) },
  { id: "thorough", title: "Thorough", description: "Complete topics from 3+ different phases", icon: Compass, tier: "silver", category: "special", check: (c) => Object.keys(c.topicsByPhase).filter((k) => (c.topicsByPhase[k].done ?? 0) > 0).length >= 3 },
];

export function evaluateAchievements(
  ctx: AchievementContext
): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const a of ACHIEVEMENTS) {
    result[a.id] = a.check(ctx);
  }
  return result;
}