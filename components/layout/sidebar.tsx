"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <aside className="sticky top-0 h-screen w-[248px] shrink-0 border-r bg-white hidden md:flex flex-col">
      {/* Brand */}
      <div className="h-16 flex items-center px-4 border-b">
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
            style={{
              background: "linear-gradient(120deg, #007AC3, #409BD2)",
              boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
            }}
          >
            <Robot size={20} weight="duotone" />
          </div>
          <div>
            <div className="text-[13.5px] font-extrabold text-[#0c2536] leading-tight">
              Playwright
            </div>
            <div className="text-[11px] font-semibold text-[#7c8ea0] leading-tight">
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
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[13.5px] font-medium transition-all ${
                isActive
                  ? "bg-[#eef7ff] text-[#007AC3]"
                  : "text-[#46586a] hover:bg-[#eef7ff] hover:text-[#007AC3]"
              }`}
            >
              <item.icon size={20} weight={isActive ? "duotone" : "regular"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}