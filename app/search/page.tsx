"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function SearchPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Search
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-3">
          Find any topic
        </h1>
        <p className="text-ink-600 max-w-2xl mb-10">
          Search across all topics, notes, and code examples.
        </p>
      </motion.div>

      <div className="bg-surface border rounded-[14px] p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-blue-25 flex items-center justify-center text-[#007AC3] mx-auto mb-4">
          <MagnifyingGlass size={32} weight="duotone" />
        </div>
        <h3 className="text-[19px] font-extrabold text-ink-900 mb-2">
          Search coming soon
        </h3>
        <p className="text-ink-600 max-w-md mx-auto">
          Global search will be available once content is loaded.
        </p>
      </div>
    </div>
  );
}