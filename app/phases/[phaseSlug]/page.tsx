"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import { getPhaseBySlug } from "@/lib/data/curriculum";

export default function PhaseDetailPage({
  params,
}: {
  params: Promise<{ phaseSlug: string }>;
}) {
  const { phaseSlug } = use(params);
  const phase = getPhaseBySlug(phaseSlug);

  if (!phase) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          Phase not found
        </h1>
        <p className="text-[#46586a] mb-6">
          We couldn't find a phase with that name.
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
          href="/phases"
          className="inline-flex items-center gap-2 text-[13px] text-[#46586a] hover:text-[#007AC3] font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" />
          All phases
        </Link>

        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-2">
          Phase {phase.number}
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          {phase.title}
        </h1>
        <p className="text-[#46586a] max-w-2xl text-[14.5px] mb-10">
          {phase.description}
        </p>
      </motion.div>

      <div className="mb-6 flex items-center gap-2 text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold">
        <BookOpen size={14} weight="duotone" />
        <span>{phase.modules.length} modules</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {phase.modules.map((mod, i) => (
          <motion.div
            key={mod.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={`/phases/${phase.slug}/${mod.slug}`}
              className="group block bg-white border rounded-[14px] p-6 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="w-11 h-11 rounded-xl bg-[#eef7ff] flex items-center justify-center text-[#007AC3] mb-4">
                <BookOpen size={22} weight="duotone" />
              </div>

              <h3 className="text-[15.5px] font-bold text-[#0c2536] mb-2 group-hover:text-[#007AC3] transition-colors">
                {mod.title}
              </h3>
              <p className="text-[13px] text-[#46586a] leading-relaxed mb-4 line-clamp-3">
                {mod.description}
              </p>

              <div className="flex items-center justify-between text-[12px] text-[#7c8ea0] font-medium">
                <span>{mod.lessonCount} lessons</span>
                <span className="inline-flex items-center gap-1 text-[#007AC3] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                  <ArrowRight size={14} weight="bold" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}