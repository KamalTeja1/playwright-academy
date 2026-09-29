"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { getPhaseBySlug } from "@/lib/data/curriculum";
import { getModuleLessons } from "@/lib/data/lessons";

export default function LessonDetailPage({
  params,
}: {
  params: Promise<{
    phaseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { phaseSlug, moduleSlug, lessonSlug } = use(params);
  const phase = getPhaseBySlug(phaseSlug);
  const mod = phase?.modules.find((m) => m.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);
  const lesson = lessons?.find((l) => l.slug === lessonSlug);

  if (!phase || !mod || !lesson) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          Lesson not found
        </h1>
        <p className="text-[#46586a] mb-6">
          We couldn't find that lesson.
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
          href={`/phases/${phase.slug}/${mod.slug}`}
          className="inline-flex items-center gap-2 text-[13px] text-[#46586a] hover:text-[#007AC3] font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" />
          {mod.title}
        </Link>

        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-2">
          Lesson
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          {lesson.title}
        </h1>
        <p className="text-[#46586a] max-w-2xl text-[14.5px] mb-6">
          {lesson.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <span className="flex items-center gap-1.5 text-[12.5px] text-[#7c8ea0] font-medium">
            <Clock size={14} weight="duotone" />
            {lesson.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1.5 text-[12.5px] text-[#7c8ea0] font-medium">
            <Sparkle size={14} weight="duotone" />
            {lesson.topics.length} topics
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#eef7ff] text-[#007AC3]">
            {lesson.difficulty}
          </span>
        </div>
      </motion.div>

      <div className="mb-6 text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold">
        Topics in this lesson
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {lesson.topics.map((topic, i) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/topics/${topic.slug}`}
              className="group flex items-center gap-4 bg-white border rounded-[14px] p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-full bg-[#eef7ff] flex items-center justify-center text-[#007AC3] shrink-0">
                <CheckCircle size={20} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-bold text-[#0c2536] group-hover:text-[#007AC3] transition-colors truncate">
                  {topic.title}
                </h3>
              </div>
              <ArrowRight
                size={16}
                weight="bold"
                className="text-[#007AC3] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-white border rounded-[14px] p-6 shadow-sm">
        <h3 className="text-[15.5px] font-bold text-[#0c2536] mb-2">
          Topic content coming soon
        </h3>
        <p className="text-[13.5px] text-[#46586a]">
          Each topic above will have detailed notes, hands-on exercises, a
          challenge, pro tips, common mistakes, and code examples in both
          Python and TypeScript.
        </p>
      </div>
    </div>
  );
}