"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Lock,
  ArrowRight,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { useProgress, calculateStreak } from "@/lib/store/progress";
import { getTopicLocation } from "@/lib/data/lookup";
import { topics } from "@/lib/data/topics";
import {
  ACHIEVEMENTS,
  evaluateAchievements,
  type Achievement,
  type AchievementContext,
  type AchievementTier,
} from "@/lib/data/achievements";

const TIER_STYLES: Record<
  AchievementTier,
  { color: string; bg: string; label: string }
> = {
  bronze: { color: "#C97B45", bg: "#fdf0e5", label: "Bronze" },
  silver: { color: "#7c8ea0", bg: "#eef2f5", label: "Silver" },
  gold: { color: "#E8A317", bg: "#fdf3dd", label: "Gold" },
  platinum: { color: "#007AC3", bg: "#eef7ff", label: "Platinum" },
};

type Filter = "all" | "unlocked" | "locked";

export default function AchievementsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const completed = useProgress((s) => s.completed);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctx = useMemo<AchievementContext | null>(() => {
    if (!mounted) return null;

    const completionsPerDay: Record<string, number> = {};
    for (const entry of Object.values(completed)) {
      const key = entry.completedAt.split("T")[0];
      completionsPerDay[key] = (completionsPerDay[key] ?? 0) + 1;
    }

    const topicsByPhase: Record<string, { total: number; done: number }> = {};
    for (const slug of Object.keys(topics)) {
      const loc = getTopicLocation(slug);
      if (!loc) continue;
      if (!topicsByPhase[loc.phaseSlug]) {
        topicsByPhase[loc.phaseSlug] = { total: 0, done: 0 };
      }
      topicsByPhase[loc.phaseSlug].total += 1;
      if (completed[slug]) topicsByPhase[loc.phaseSlug].done += 1;
    }

    return {
      completedSlugs: Object.keys(completed),
      completed,
      streak: calculateStreak(completed),
      topicsByPhase,
      completionsPerDay,
    };
  }, [completed, mounted]);

  const evaluated = useMemo(() => {
    if (!ctx) return {} as Record<string, boolean>;
    return evaluateAchievements(ctx);
  }, [ctx]);

  // Hide phase achievements for phases that have no published content yet
  const visibleAchievements = useMemo(() => {
    if (!ctx) return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter((a) => {
      if (a.category === "phase" && a.phaseSlug) {
        const stat = ctx.topicsByPhase[a.phaseSlug];
        return Boolean(stat && stat.total > 0);
      }
      return true;
    });
  }, [ctx]);

  const unlocked = useMemo(
    () => visibleAchievements.filter((a) => evaluated[a.id]),
    [visibleAchievements, evaluated]
  );
  const locked = useMemo(
    () => visibleAchievements.filter((a) => !evaluated[a.id]),
    [visibleAchievements, evaluated]
  );

  const total = visibleAchievements.length;
  const unlockedCount = unlocked.length;
  const pct = total > 0 ? Math.round((unlockedCount / total) * 100) : 0;

  const filtered = useMemo(() => {
    if (filter === "unlocked") return unlocked;
    if (filter === "locked") return locked;
    return visibleAchievements;
  }, [filter, unlocked, locked, visibleAchievements]);

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Achievements
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-2">
          Your badges
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Milestones you unlock as you learn. Complete topics, build streaks,
          finish phases, and discover hidden badges.
        </p>
      </motion.div>

      {/* Progress summary */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 bg-surface border border-border rounded-card p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
              <Trophy size={26} weight="duotone" />
            </div>
            <div>
              <div className="text-[19px] font-extrabold text-ink-900 leading-tight">
                {unlockedCount} of {total} unlocked
              </div>
              <div className="text-[13px] text-ink-400 mt-0.5">
                {pct}% of all achievements
              </div>
            </div>
          </div>
          {unlockedCount > 0 && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-green-100 text-green-500 text-[12px] font-bold">
              <Star size={14} weight="fill" />
              Keep going!
            </div>
          )}
        </div>
        <div className="h-3 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: pct + "%" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #007AC3, #85BC20)",
            }}
          />
        </div>
      </motion.div>

      {/* Filter tabs */}
      <div className="mt-8 flex items-center gap-2 p-1.5 bg-surface border border-border rounded-[12px] shadow-sm w-fit">
        {(
          [
            { key: "all" as Filter, label: "All", count: total },
            { key: "unlocked" as Filter, label: "Unlocked", count: unlockedCount },
            { key: "locked" as Filter, label: "Locked", count: locked.length },
          ]
        ).map((tab) => {
          const isActive = filter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={
                "flex items-center gap-2 px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-all " +
                (isActive
                  ? "text-white"
                  : "text-ink-600 hover:bg-blue-25")
              }
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(120deg, #007AC3, #409BD2)",
                      boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
                    }
                  : undefined
              }
            >
              <span>{tab.label}</span>
              <span
                className={
                  "text-[11px] font-bold px-1.5 py-0.5 rounded-[6px] " +
                  (isActive
                    ? "bg-white/25 text-white"
                    : "bg-border text-ink-600")
                }
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-8 bg-surface border border-dashed border-border rounded-card p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-blue-25 flex items-center justify-center text-blue-500 mx-auto mb-4">
            <Trophy size={28} weight="duotone" />
          </div>
          <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
            {filter === "unlocked"
              ? "No achievements unlocked yet"
              : "Nothing in this category"}
          </h3>
          <p className="text-ink-600 text-[13.5px] max-w-md mx-auto mb-5">
            Complete your first topic to unlock your first badge.
          </p>
          <Link
            href="/phases"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-btn text-white bg-gradient-btn shadow-btn hover:shadow-btn-hover transition-all hover:-translate-y-0.5 font-semibold text-[13.5px]"
          >
            Start learning
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((a, i) => {
            const isUnlocked = Boolean(evaluated[a.id]);
            const tier = TIER_STYLES[a.tier];
            const IconComp = a.icon;

            return (
              <motion.div
                key={a.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
                className={
                  "relative rounded-card p-5 border transition-all " +
                  (isUnlocked
                    ? "bg-surface border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    : "bg-surface/60 border-dashed border-border opacity-70")
                }
              >
                {/* Tier badge */}
                <div
                  className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[6px]"
                  style={{
                    background: isUnlocked ? tier.bg : "var(--color-border)",
                    color: isUnlocked ? tier.color : "#7c8ea0",
                  }}
                >
                  {tier.label}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 relative"
                  style={{
                    background: isUnlocked ? tier.bg : "#eef2f5",
                    color: isUnlocked ? tier.color : "#b6c3ce",
                  }}
                >
                  {isUnlocked ? (
                    <>
                      <IconComp size={28} weight="duotone" />
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ border: "2px solid " + tier.color }}
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  ) : (
                    <Lock size={22} weight="duotone" />
                  )}
                </div>

                {/* Content */}
                <h3
                  className={
                    "text-[15px] font-bold mb-1 " +
                    (isUnlocked ? "text-ink-900" : "text-ink-400")
                  }
                >
                  {a.title}
                </h3>
                <p
                  className={
                    "text-[13px] leading-relaxed " +
                    (isUnlocked ? "text-ink-600" : "text-ink-400")
                  }
                >
                  {a.description}
                </p>

                {/* Category label */}
                <div className="mt-4 pt-3 border-t border-border text-[10.5px] uppercase tracking-wider font-bold text-ink-400">
                  {a.category}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}