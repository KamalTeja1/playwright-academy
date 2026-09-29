"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle } from "@phosphor-icons/react/dist/ssr";
import { useProgress } from "@/lib/store/progress";

export function CompleteButton({ topicSlug }: { topicSlug: string }) {
  const [mounted, setMounted] = useState(false);
  const completed = useProgress((s) => s.completed);
  const toggle = useProgress((s) => s.toggle);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDone = mounted && Boolean(completed[topicSlug]);

  return (
    <motion.button
      onClick={() => toggle(topicSlug)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-[10px] text-[13.5px] font-semibold transition-all ${
        isDone
          ? "bg-[#85BC20] text-white shadow-md"
          : "bg-white dark:bg-[#0e2a44] text-[#007AC3] border border-[#007AC3] hover:bg-[#eef7ff] dark:hover:bg-[#143550]"
      }`}
      style={
        isDone
          ? { boxShadow: "0 6px 18px rgba(133,188,32,0.35)" }
          : undefined
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDone ? "done" : "not-done"}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDone ? (
            <CheckCircle size={18} weight="fill" />
          ) : (
            <Circle size={18} weight="bold" />
          )}
        </motion.span>
      </AnimatePresence>
      <span>{isDone ? "Completed" : "Mark as complete"}</span>
    </motion.button>
  );
}