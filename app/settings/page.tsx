"use client";

import { motion } from "framer-motion";
import { Gear } from "@phosphor-icons/react/dist/ssr";

export default function SettingsPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-2">
          Settings
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          Preferences
        </h1>
        <p className="text-[#46586a] max-w-2xl mb-10">
          Manage your theme, notifications, and progress.
        </p>
      </motion.div>

      <div className="bg-white border rounded-[14px] p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#eef7ff] flex items-center justify-center text-[#007AC3] mx-auto mb-4">
          <Gear size={32} weight="duotone" />
        </div>
        <h3 className="text-[19px] font-extrabold text-[#0c2536] mb-2">
          Settings coming soon
        </h3>
        <p className="text-[#46586a] max-w-md mx-auto">
          Theme, notifications, and reset options will live here.
        </p>
      </div>
    </div>
  );
}