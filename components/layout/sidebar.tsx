"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  House,
  BookOpen,
  ChartLineUp,
  Calendar,
  MagnifyingGlass,
  Terminal,
  Medal,
  Gear,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: House },
  { href: "/dashboard", label: "Dashboard", icon: ChartLineUp },
  { href: "/phases", label: "Phases", icon: BookOpen },
  { href: "/tracker", label: "Tracker", icon: Calendar },
  { href: "/search", label: "Search", icon: MagnifyingGlass },
  { href: "/playground", label: "Playground", icon: Terminal },
  { href: "/achievements", label: "Achievements", icon: Medal },
  { href: "/settings", label: "Settings", icon: Gear },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-[248px] shrink-0 border-r border-border bg-surface dark:bg-[#0e2a44] hidden md:flex flex-col">
      {/* Brand */}
      <div className="h-16 flex items-center px-4 border-b border-border">
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-btn relative"
            style={{
              background: "linear-gradient(120deg, #007AC3, #409BD2)",
            }}
          >
            <Robot size={20} weight="duotone" />
            <span className="absolute inset-0 rounded-lg animate-pulse-glow" />
          </motion.div>
          <div>
            <div className="text-[13.5px] font-extrabold text-ink-900 leading-tight">
              Playwright
            </div>
            <div className="text-[11px] font-semibold text-ink-400 leading-tight">
              AI Academy
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[13.5px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-25 text-[#007AC3]"
                  : "text-ink-600 hover:bg-blue-25 dark:hover:bg-[#143550] hover:text-[#007AC3] hover:translate-x-0.5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                  style={{
                    background: "linear-gradient(180deg, #007AC3, #85BC20)",
                    boxShadow: "0 0 12px rgba(0,122,195,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <item.icon
                  size={20}
                  weight={isActive ? "duotone" : "regular"}
                  className={
                    isActive
                      ? "text-[#007AC3]"
                      : "group-hover:text-[#007AC3]"
                  }
                />
              </motion.div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <div className="text-[10.5px] uppercase tracking-wider font-bold text-ink-400 text-center">
          Built with ❤️ for learners
        </div>
      </div>
    </aside>
  );
}