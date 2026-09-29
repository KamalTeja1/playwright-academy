"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { getTopicBySlug } from "@/lib/data/topics";

export default function LessonDetailPage({
  params,
}: {
  params: Promise<{
    phaseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}) {
  const router = useRouter();
  const { phaseSlug, moduleSlug, lessonSlug } = use(params);
  const phase = getPhaseBySlug(phaseSlug);
  const mod = phase?.modules.find((m) => m.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);
  const lesson = lessons?.find((l) => l.slug === lessonSlug);
  const lessonHasContent = !!getTopicBySlug(lessonSlug);

  // Auto-redirect: lesson IS a topic → go straight to topic page
  useEffect(() => {
    if (lessonHasContent && lesson && lesson.topics.length === 0) {
      router.replace(`/topics/${lessonSlug}`);
    }
  }, [lessonHasContent, lesson, lessonSlug, router]);

  if (!phase || !mod || !lesson) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          Lesson not found
        </h1>
        <p className="text-[#46586a] mb-6">We couldn't find that lesson.</p>
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

  // While redirecting, show a friendly message
  if (lessonHasContent && lesson.topics.length === 0) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[14px] text-[#46586a]"
        >
          Opening lesson…
        </motion.div>
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

        <div className="flex flex-wrap items-center gap-4 mb-8">
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
        {lesson.topics.map((topic, i) => {
          const hasContent = !!getTopicBySlug(topic.slug);
          return (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {hasContent ? (
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
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#85BC20] mt-1">
                      Ready to read
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="text-[#007AC3] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </Link>
              ) : (
                <div className="flex items-center gap-4 bg-[#f7fbff] border border-dashed rounded-[14px] p-5 opacity-70">
                  <div className="w-10 h-10 rounded-full bg-[#eef7ff] flex items-center justify-center text-[#7c8ea0] shrink-0">
                    <Clock size={20} weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-bold text-[#46586a] truncate">
                      {topic.title}
                    </h3>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8A317] mt-1">
                      Coming soon
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}