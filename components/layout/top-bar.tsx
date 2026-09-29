"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export function TopBar() {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-30 h-16 bg-surface/85 dark:bg-[#0e2a44]/85 backdrop-blur-md border-b border-border flex items-center px-6 gap-4">
      <nav className="flex-1 flex items-center gap-2 text-[13px] text-ink-400 truncate">
        <Link
          href="/"
          className="hover:text-[#007AC3] font-medium transition-colors"
        >
          Home
        </Link>
        {crumbs.map((crumb, i) => {
          const href = "/" + crumbs.slice(0, i + 1).join("/");
          const isLast = i === crumbs.length - 1;
          const label = crumb.charAt(0).toUpperCase() + crumb.slice(1);

          return (
            <motion.span
              key={href}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-ink-400/40 text-[10px]">●</span>
              {isLast ? (
                <span className="text-ink-900 font-semibold">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-[#007AC3] font-medium transition-colors"
                >
                  {label}
                </Link>
              )}
            </motion.span>
          );
        })}
      </nav>

      <ThemeToggle />
    </header>
  );
}