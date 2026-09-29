"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChartLineUp,
  Fire,
  Trophy,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { ProgressRing } from "@/components/ui/progress-ring";
import { useProgress, calculateStreak } from "@/lib/store/progress";
import { getTopicLocation } from "@/lib/data/lookup";
import { topics } from "@/lib/data/topics";

const PHASE_LABELS: Record<string, { num: string; title: string }> = {
  "phase--1": { num: "-1", title: "Beginner Primer" },
  "phase-0": { num: "0", title: "Web Foundations" },
  "phase-1": { num: "1", title: "Python" },
  "phase-2": { num: "2", title: "Pytest" },
  "phase-3": { num: "3", title: "Playwright Python" },
  "phase-4": { num: "4", title: "PW + Pytest" },
  "phase-5": { num: "5", title: "TypeScript" },
  "phase-6": { num: "6", title: "Playwright TS" },
  "phase-7": { num: "7", title: "CI/CD" },
  "phase-8": { num: "8", title: "Hero Project" },
};

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const completed = useProgress((s) => s.completed);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPublished = Object.keys(topics).length;
  const completedCount = mounted ? Object.keys(completed).length : 0;
  const overallPct = totalPublished
    ? Math.round((completedCount / totalPublished) * 100)
    : 0;
  const streak = mounted ? calculateStreak(completed) : 0;

  // Per-phase progress
  const perPhase: Record<string, { total: number; done: number }> = {};
  for (const slug of Object.keys(topics)) {
    const loc = getTopicLocation(slug);
    if (!loc) continue;
    if (!perPhase[loc.phaseSlug]) {
      perPhase[loc.phaseSlug] = { total: 0, done: 0 };
    }
    perPhase[loc.phaseSlug].total += 1;
    if (mounted && completed[slug]) perPhase[loc.phaseSlug].done += 1;
  }

  // Recent activity — last 6 completed topics
  const recent = mounted
    ? Object.entries(completed)
        .sort(
          ([, a], [, b]) =>
            new Date(b.completedAt).getTime() -
            new Date(a.completedAt).getTime()
        )
        .slice(0, 6)
        .map(([slug, entry]) => ({
          slug,
          title: topics[slug]?.title ?? slug,
          completedAt: entry.completedAt,
          location: getTopicLocation(slug),
        }))
    : [];

  // Recommended next topic
  const nextTopic = (() => {
    const order = Object.values(topics).map((t) => t.slug);
    for (const slug of order) {
      if (!mounted || !completed[slug]) return topics[slug];
    }
    return null;
  })();

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Dashboard
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-2">
          Welcome back 👋
        </h1>
        <p className="text-ink-600">
          Here is where you are on your Playwright journey.
        </p>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #007AC3" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ChartLineUp size={18} weight="duotone" className="text-blue-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              Progress
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-[26px] font-extrabold text-ink-900 leading-none">
              {overallPct}%
            </div>
            <ProgressRing value={overallPct} size={40} strokeWidth={4} showLabel={false} />
          </div>
          <div className="text-[11px] text-ink-400 mt-2">
            {completedCount} of {totalPublished} topics
          </div>
        </div>

        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #85BC20" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Fire size={18} weight="duotone" className="text-green-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              Streak
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {streak}
          </div>
          <div className="text-[11px] text-ink-400 mt-2">
            {streak === 1 ? "day in a row" : "days in a row"}
          </div>
        </div>

        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #E8A317" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} weight="duotone" className="text-amber-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              Topics
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {completedCount}
          </div>
          <div className="text-[11px] text-ink-400 mt-2">completed</div>
        </div>

        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #E5202E" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={18} weight="duotone" className="text-red-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              Phases
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {Object.values(perPhase).filter((p) => p.done === p.total).length}
          </div>
          <div className="text-[11px] text-ink-400 mt-2">fully complete</div>
        </div>
      </div>

      {/* Continue learning */}
      {nextTopic ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-modal p-8 text-white shadow-lg relative overflow-hidden mt-8"
          style={{
            background:
              "linear-gradient(125deg, #005c95 0%, #007AC3 40%, #409BD2 75%, #85BC20 140%)",
          }}
        >
          <div className="relative z-10">
            <div className="text-[11px] uppercase tracking-wider font-bold mb-2 opacity-90">
              Continue where you left off
            </div>
            <h2 className="text-[22px] font-extrabold mb-2 max-w-2xl">
              {nextTopic.title}
            </h2>
            <p className="text-white/85 text-[13.5px] mb-5 max-w-lg">
              {nextTopic.summary}
            </p>
            <Link
              href={`/topics/${nextTopic.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-white text-blue-500 font-semibold text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Resume learning
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <div
            className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)",
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-modal p-8 text-white shadow-lg mt-8"
          style={{
            background:
              "linear-gradient(125deg, #005c95 0%, #007AC3 40%, #409BD2 75%, #85BC20 140%)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Sparkle size={28} weight="duotone" />
            <div className="text-[22px] font-extrabold">
              You have finished every published topic!
            </div>
          </div>
          <p className="text-white/85 text-[14px]">
            More content is coming soon. Meanwhile, revisit any topic or try
            building your own project.
          </p>
        </motion.div>
      )}

      {/* Per-phase progress */}
      <div className="mt-10">
        <h2 className="text-[19px] font-extrabold text-ink-900 mb-1">
          Progress by phase
        </h2>
        <p className="text-ink-600 text-[13.5px] mb-5">
          Your journey, phase by phase.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {Object.entries(perPhase).map(([slug, stat]) => {
            const label = PHASE_LABELS[slug] ?? { num: "?", title: slug };
            const pct = stat.total ? Math.round((stat.done / stat.total) * 100) : 0;
            const done = stat.done === stat.total && stat.total > 0;
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface border border-border rounded-card p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                      Phase {label.num}
                    </span>
                    {done && (
                      <CheckCircle
                        size={14}
                        weight="fill"
                        className="text-green-500"
                      />
                    )}
                  </div>
                  <span className="text-[12px] font-bold text-ink-900">
                    {stat.done}/{stat.total}
                  </span>
                </div>
                <div className="text-[13.5px] font-semibold text-ink-900 mb-3">
                  {label.title}
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #007AC3, #85BC20)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-10">
        <h2 className="text-[19px] font-extrabold text-ink-900 mb-1">
          Recent activity
        </h2>
        <p className="text-ink-600 text-[13.5px] mb-5">
          The last few topics you completed.
        </p>

        {recent.length === 0 ? (
          <div className="bg-surface border border-dashed border-border rounded-card p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-25 flex items-center justify-center text-blue-500 mx-auto mb-4">
              <BookOpen size={28} weight="duotone" />
            </div>
            <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
              No activity yet
            </h3>
            <p className="text-ink-600 text-[13.5px] max-w-md mx-auto mb-5">
              Open any topic and tap "Mark as complete" to start your journey.
            </p>
            <Link
              href="/phases"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn text-white bg-gradient-btn shadow-btn hover:shadow-btn-hover transition-all hover:-translate-y-0.5 font-semibold text-[13.5px]"
            >
              Start with Phase -1
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {recent.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={`/topics/${item.slug}`}
                  className="group flex items-center gap-4 bg-surface border border-border rounded-card p-4 hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                    <CheckCircle size={18} weight="fill" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-bold text-ink-900 group-hover:text-blue-500 transition-colors truncate">
                      {item.title}
                    </div>
                    {item.location && (
                      <div className="text-[11.5px] text-ink-400 mt-0.5">
                        Phase {item.location.phaseNumber} ·{" "}
                        {item.location.moduleTitle}
                      </div>
                    )}
                  </div>
                  <div className="text-[11.5px] text-ink-400 shrink-0">
                    {new Date(item.completedAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}