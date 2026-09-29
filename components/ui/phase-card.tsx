"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ProgressRing } from "./progress-ring";

export function PhaseCard({
  slug,
  number,
  title,
  description,
  moduleCount,
  progress,
  Icon,
}: {
  slug: string;
  number: string;
  title: string;
  description: string;
  moduleCount: number;
  progress: number;
  Icon: Icon;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Link
        href={`/phases/${slug}`}
        className="group block bg-surface border rounded-[14px] p-6 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-25 flex items-center justify-center text-[#007AC3]">
            <Icon size={26} weight="duotone" />
          </div>
          <ProgressRing value={progress} size={48} strokeWidth={5} />
        </div>

        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-1">
          Phase {number}
        </div>
        <h3 className="text-[15.5px] font-bold text-ink-900 mb-2 group-hover:text-[#007AC3] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] text-ink-600 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-[12px] text-ink-400 font-medium">
          <span>{moduleCount} modules</span>
          <span className="inline-flex items-center gap-1 text-[#007AC3] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Open
            <ArrowRight size={14} weight="bold" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}