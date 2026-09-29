"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-[10px] border border-border" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-9 h-9 flex items-center justify-center rounded-[10px] border border-border bg-surface dark:bg-[#0e2a44] hover:bg-blue-25 dark:hover:bg-[#143550] hover:border-[#409BD2] transition-all duration-200 text-ink-600 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ y: -12, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 12, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {isDark ? (
            <Sun size={18} weight="duotone" />
          ) : (
            <Moon size={18} weight="duotone" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}