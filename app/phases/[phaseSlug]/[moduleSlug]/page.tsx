"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { getPhaseBySlug } from "@/lib/data/curriculum";
import { getModuleLessons } from "@/lib/data/lessons";

const DIFFICULTY_COLORS = {
  Beginner: { bg: "#eef6dc", text: "#5a8116" },
  Intermediate: { bg: "#fdf3dd", text: "#a06f10" },
  Advanced: { bg: "#fdeced", text: "#b8151f" },
};

export default function ModuleDetailPage({
  params,
}: {
  params: Promise<{ phaseSlug: string; moduleSlug: string }>;
}) {
  const { phaseSlug, moduleSlug } = use(params);
  const phase = getPhaseBySlug(phaseSlug);
  const mod = phase?.modules.find((m) => m.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);

  if (!phase || !mod) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-3">
          Module not found
        </h1>
        <p className="text-ink-600 mb-6">
          We couldn't find that module.
        </p>
        <Link
          href="/phases"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-white font-semibold text-[13.5px]"
          style={{
            background: "linear-gradient(120deg, #007AC3, #409BD2)",
            boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
          }}
        >
          <ArrowLeft size={16} weight="bold" />
          Back to all phases
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          href={`/phases/${phase.slug}`}
          className="inline-flex items-center gap-2 text-[13px] text-ink-600 hover:text-[#007AC3] font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" />
          Phase {phase.number} · {phase.title}
        </Link>

        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Module
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-3">
          {mod.title}
        </h1>
        <p className="text-ink-600 max-w-2xl text-[14.5px] mb-10">
          {mod.description}
        </p>
      </motion.div>

      {lessons && lessons.length > 0 ? (
        <>
          <div className="mb-6 flex items-center gap-2 text-[12px] uppercase text-ink-400 tracking-wider font-bold">
            <BookOpen size={14} weight="duotone" />
            <span>{lessons.length} lessons</span>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson, i) => {
              const diff = DIFFICULTY_COLORS[lesson.difficulty];
              return (
                <motion.div
                  key={lesson.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/phases/${phase.slug}/${mod.slug}/${lesson.slug}`}
                    className="group block bg-surface border rounded-[14px] p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px]"
                            style={{ background: diff.bg, color: diff.text }}
                          >
                            {lesson.difficulty}
                          </span>
                          <span className="flex items-center gap-1 text-[12px] text-ink-400 font-medium">
                            <Clock size={13} weight="duotone" />
                            {lesson.estimatedMinutes} min
                          </span>
                          <span className="flex items-center gap-1 text-[12px] text-ink-400 font-medium">
                            <Sparkle size={13} weight="duotone" />
                            {lesson.topics.length} topics
                          </span>
                        </div>
                        <h3 className="text-[15.5px] font-bold text-ink-900 group-hover:text-[#007AC3] transition-colors mb-1">
                          {lesson.title}
                        </h3>
                        <p className="text-[13px] text-ink-600 leading-relaxed">
                          {lesson.summary}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-blue-25 flex items-center justify-center text-[#007AC3] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <ArrowRight size={16} weight="bold" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="bg-surface border rounded-[14px] p-10 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-blue-25 flex items-center justify-center text-[#007AC3] mx-auto mb-4">
            <BookOpen size={32} weight="duotone" />
          </div>
          <h3 className="text-[19px] font-extrabold text-ink-900 mb-2">
            Lessons coming soon
          </h3>
          <p className="text-ink-600 max-w-md mx-auto">
            This module has {mod.lessonCount} lessons planned. Content will be
            added soon.
          </p>
        </div>
      )}
    </div>
  );
}