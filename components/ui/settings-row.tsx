"use client";

import type { ReactNode } from "react";

export function SettingsRow({
  title,
  description,
  children,
  danger,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  danger?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-5 border-b border-border last:border-b-0">
      <div className="flex-1 min-w-0">
        <div
          className={
            "text-[14.5px] font-bold " +
            (danger ? "text-red-500" : "text-ink-900")
          }
        >
          {title}
        </div>
        {description && (
          <div className="text-[12.5px] text-ink-400 mt-1 leading-relaxed">
            {description}
          </div>
        )}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}