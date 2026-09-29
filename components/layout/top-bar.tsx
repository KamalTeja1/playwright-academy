"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function TopBar() {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/85 backdrop-blur-md border-b flex items-center px-6 gap-4">
      <nav className="flex-1 flex items-center gap-2 text-[13px] text-[#7c8ea0] truncate">
        <Link href="/" className="hover:text-[#007AC3] font-medium">
          Home
        </Link>
        {crumbs.map((crumb, i) => {
          const href = "/" + crumbs.slice(0, i + 1).join("/");
          const isLast = i === crumbs.length - 1;
          const label = crumb.charAt(0).toUpperCase() + crumb.slice(1);

          return (
            <span key={href} className="flex items-center gap-2">
              <span className="text-[#7c8ea0]/60">/</span>
              {isLast ? (
                <span className="text-[#0c2536] font-semibold">{label}</span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-[#007AC3] font-medium transition-colors"
                >
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>

      <ThemeToggle />
    </header>
  );
}