"use client";

import { motion } from "framer-motion";
import { Calendar } from "@phosphor-icons/react/dist/ssr";

export default function TrackerPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Weekly Tracker
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-3">
          Your week at a glance
        </h1>
        <p className="text-ink-600 max-w-2xl mb-10">
          Track topics, minutes, and streaks. The calendar fills up as you learn.
        </p>
      </motion.div>

      <div className="bg-surface border rounded-[14px] p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-blue-25 flex items-center justify-center text-[#007AC3] mx-auto mb-4">
          <Calendar size={32} weight="duotone" />
        </div>
        <h3 className="text-[19px] font-extrabold text-ink-900 mb-2">
          Tracker coming soon
        </h3>
        <p className="text-ink-600 max-w-md mx-auto">
          Weekly calendar, 12-week heatmap, and progress charts will show here.
        </p>
      </div>
    </div>
  );
}