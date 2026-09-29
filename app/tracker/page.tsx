"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fire,
  Calendar,
  ChartLineUp,
  ArrowRight,
  CheckCircle,
  Target,
  PencilSimple,
} from "@phosphor-icons/react/dist/ssr";
import { useProgress, calculateStreak } from "@/lib/store/progress";
import { useSettings } from "@/lib/store/settings";
import { HeatmapCalendar, type HeatmapDay } from "@/components/ui/heatmap-calendar";
import { getTopicLocation } from "@/lib/data/lookup";
import { topics } from "@/lib/data/topics";

const DAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function formatKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function getStartOfWeek(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

export default function TrackerPage() {
  const [mounted, setMounted] = useState(false);
  const completed = useProgress((s) => s.completed);
  const weeklyGoal = useSettings((s) => s.weeklyGoal);
  const setWeeklyGoal = useSettings((s) => s.setWeeklyGoal);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(String(weeklyGoal));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setGoalInput(String(weeklyGoal));
  }, [weeklyGoal]);

  // Aggregate completions per day
  const countsByDay = useMemo(() => {
    const map: Record<string, number> = {};
    if (!mounted) return map;
    for (const entry of Object.values(completed)) {
      const key = entry.completedAt.split("T")[0];
      map[key] = (map[key] ?? 0) + 1;
    }
    return map;
  }, [completed, mounted]);

  const heatmapData: HeatmapDay[] = useMemo(() => {
    return Object.entries(countsByDay).map(([date, count]) => ({
      date,
      count,
    }));
  }, [countsByDay]);

  // Current week days
  const weekDays = useMemo(() => {
    const start = getStartOfWeek(new Date());
    const todayKey = formatKey(new Date());
    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const key = formatKey(d);
      return {
        key,
        short: DAY_SHORT[i],
        dayNumber: d.getDate(),
        month: d.toLocaleString("en-US", { month: "short" }),
        count: countsByDay[key] ?? 0,
        isToday: key === todayKey,
      };
    });
  }, [countsByDay]);

  const topicsThisWeek = weekDays.reduce((sum, d) => sum + d.count, 0);
  const totalTopics = Object.keys(topics).length;
  const totalCompleted = mounted ? Object.keys(completed).length : 0;
  const streak = mounted ? calculateStreak(completed) : 0;

  // Recent completions
  const recent = useMemo(() => {
    if (!mounted) return [];
    return Object.entries(completed)
      .sort(
        ([, a], [, b]) =>
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
      )
      .slice(0, 8)
      .map(([slug, entry]) => ({
        slug,
        title: topics[slug]?.title ?? slug,
        completedAt: entry.completedAt,
        location: getTopicLocation(slug),
      }));
  }, [completed, mounted]);

  const goalPct = weeklyGoal
    ? Math.min(100, Math.round((topicsThisWeek / weeklyGoal) * 100))
    : 0;

  const saveGoal = () => {
    const parsed = parseInt(goalInput, 10);
    if (!isNaN(parsed)) setWeeklyGoal(parsed);
    setEditingGoal(false);
  };

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Weekly Tracker
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-2">
          Your week at a glance
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Track topics completed, minutes spent, and keep your streak alive.
        </p>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
          style={{ borderLeft: "5px solid #007AC3" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={18} weight="duotone" className="text-blue-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              This Week
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {topicsThisWeek}
          </div>
          <div className="text-[11px] text-ink-400 mt-2">topics completed</div>
        </div>

        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #E8A317" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ChartLineUp size={18} weight="duotone" className="text-amber-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              All Time
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {totalCompleted}
          </div>
          <div className="text-[11px] text-ink-400 mt-2">
            of {totalTopics} topics
          </div>
        </div>

        <div
          className="bg-surface border border-border rounded-card p-5 shadow-sm"
          style={{ borderLeft: "5px solid #E5202E" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Target size={18} weight="duotone" className="text-red-500" />
            <span className="text-[11px] uppercase text-ink-400 tracking-wider font-bold">
              Goal
            </span>
          </div>
          <div className="text-[26px] font-extrabold text-ink-900 leading-none">
            {goalPct}%
          </div>
          <div className="text-[11px] text-ink-400 mt-2">
            {topicsThisWeek} of {weeklyGoal} this week
          </div>
        </div>
      </div>

      {/* This week calendar */}
      <div className="mt-10">
        <h2 className="text-[19px] font-extrabold text-ink-900 mb-1">
          This week
        </h2>
        <p className="text-ink-600 text-[13.5px] mb-5">
          Monday to Sunday — check off a day by completing a topic.
        </p>

        <div className="grid grid-cols-7 gap-2 md:gap-3">
          {weekDays.map((day, i) => (
            <motion.div
              key={day.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-card border p-3 text-center transition-all ${
                day.isToday
                  ? "border-[#007AC3] bg-blue-25 shadow-md"
                  : "border-border bg-surface"
              }`}
            >
              <div className="text-[10.5px] uppercase font-bold text-ink-400 tracking-wider">
                {day.short}
              </div>
              <div className="text-[22px] font-extrabold text-ink-900 leading-none mt-1.5">
                {day.dayNumber}
              </div>
              <div className="text-[10px] text-ink-400 mt-0.5">{day.month}</div>
              <div className="mt-3 flex flex-wrap gap-1 justify-center min-h-[10px]">
                {Array.from({ length: Math.min(day.count, 5) }).map((_, dotI) => (
                  <div
                    key={dotI}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, #007AC3, #85BC20)",
                    }}
                  />
                ))}
              </div>
              <div className="text-[11px] font-bold text-ink-600 mt-2">
                {day.count === 0
                  ? "—"
                  : day.count + (day.count === 1 ? " topic" : " topics")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly goal */}
      <div className="mt-10 bg-surface border border-border rounded-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[15.5px] font-extrabold text-ink-900">
              Weekly goal
            </div>
            <div className="text-[12.5px] text-ink-400 mt-0.5">
              Aim for a number that feels challenging but doable.
            </div>
          </div>
          {editingGoal ? (
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                min={1}
                max={50}
                className="w-16 px-2 py-1.5 rounded-[8px] border border-border bg-surface text-ink-900 text-[13px] font-semibold outline-none focus:border-[#007AC3]"
                autoFocus
              />
              <button
                onClick={saveGoal}
                className="px-3 py-1.5 rounded-[8px] bg-gradient-btn text-white text-[12px] font-bold shadow-btn"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditingGoal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-border bg-surface hover:bg-blue-25 hover:border-[#409BD2] text-[12.5px] font-semibold text-ink-600 transition-all"
            >
              <PencilSimple size={14} weight="duotone" />
              Edit
            </button>
          )}
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <div className="text-[28px] font-extrabold text-ink-900 leading-none">
            {topicsThisWeek}
          </div>
          <div className="text-[14px] text-ink-400 font-medium">
            / {weeklyGoal} topics
          </div>
        </div>

        <div className="h-3 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: goalPct + "%" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #007AC3, #85BC20)",
            }}
          />
        </div>

        {goalPct >= 100 && (
          <div className="mt-3 text-[12.5px] font-bold text-green-500">
            🎉 Goal smashed! You are on fire.
          </div>
        )}
      </div>

      {/* Heatmap */}
      <div className="mt-10 bg-surface border border-border rounded-card p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-[19px] font-extrabold text-ink-900 mb-1">
            Last 12 weeks
          </h2>
          <p className="text-ink-600 text-[13.5px]">
            Each square is a day. Darker means more topics completed.
          </p>
        </div>
        <div className="overflow-x-auto">
          <HeatmapCalendar data={heatmapData} weeks={12} />
        </div>
      </div>

      {/* Recent completions */}
      <div className="mt-10">
        <h2 className="text-[19px] font-extrabold text-ink-900 mb-1">
          Recent completions
        </h2>
        <p className="text-ink-600 text-[13.5px] mb-5">
          Your last 8 completed topics.
        </p>

        {recent.length === 0 ? (
          <div className="bg-surface border border-dashed border-border rounded-card p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-25 flex items-center justify-center text-blue-500 mx-auto mb-4">
              <Calendar size={28} weight="duotone" />
            </div>
            <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
              Nothing completed yet
            </h3>
            <p className="text-ink-600 text-[13.5px] max-w-md mx-auto mb-5">
              Complete your first topic and it will show up here.
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
          <div className="space-y-2">
            {recent.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  href={"/topics/" + item.slug}
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
                  <div className="text-[11.5px] text-ink-400 shrink-0 text-right">
                    <div>
                      {new Date(item.completedAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-[10px] opacity-70">
                      {new Date(item.completedAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
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