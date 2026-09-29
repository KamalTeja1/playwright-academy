"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export type HeatmapDay = {
  date: string;
  count: number;
};

function formatKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function colorFor(count: number) {
  if (count === 0) return "var(--color-border)";
  if (count === 1) return "#A6D1EA";
  if (count === 2) return "#409BD2";
  if (count === 3) return "#007AC3";
  return "#85BC20";
}

export function HeatmapCalendar({
  data,
  weeks = 12,
}: {
  data: HeatmapDay[];
  weeks?: number;
}) {
  const { grid, months } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayOfWeek = today.getDay();
    const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - daysFromMonday);

    const grid: { date: Date; dateKey: string; count: number }[][] = [];
    const monthLabels: { label: string; col: number }[] = [];
    let lastMonth = -1;

    for (let w = weeks - 1; w >= 0; w--) {
      const weekStart = new Date(currentMonday);
      weekStart.setDate(currentMonday.getDate() - w * 7);

      const col: { date: Date; dateKey: string; count: number }[] = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + d);
        const dateKey = formatKey(date);
        const entry = data.find((x) => x.date === dateKey);
        col.push({ date, dateKey, count: entry?.count ?? 0 });
      }
      grid.push(col);

      const monthOfMonday = weekStart.getMonth();
      if (monthOfMonday !== lastMonth) {
        monthLabels.push({
          label: weekStart.toLocaleString("en-US", { month: "short" }),
          col: weeks - 1 - w,
        });
        lastMonth = monthOfMonday;
      }
    }

    return { grid, months: monthLabels };
  }, [data, weeks]);

  const cell = 14;
  const gap = 3;

  return (
    <div>
      {/* Month labels */}
      <div className="relative ml-8 mb-1.5" style={{ height: 14 }}>
        {months.map((m, i) => (
          <span
            key={i}
            className="absolute text-[10.5px] font-bold uppercase tracking-wider text-ink-400"
            style={{ left: m.col * (cell + gap) }}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="flex">
        {/* Day labels */}
        <div
          className="flex flex-col text-[10px] font-semibold text-ink-400 pr-2 text-right"
          style={{ gap, width: 32 }}
        >
          <span className="flex items-center justify-end" style={{ height: cell }}>
            Mon
          </span>
          <span style={{ height: cell }} />
          <span className="flex items-center justify-end" style={{ height: cell }}>
            Wed
          </span>
          <span style={{ height: cell }} />
          <span className="flex items-center justify-end" style={{ height: cell }}>
            Fri
          </span>
          <span style={{ height: cell }} />
          <span style={{ height: cell }} />
        </div>

        {/* Grid */}
        <div className="flex" style={{ gap }}>
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col" style={{ gap }}>
              {week.map((day) => (
                <motion.div
                  key={day.dateKey}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: wi * 0.012, duration: 0.2 }}
                  className="rounded-[3px] cursor-pointer hover:ring-2 hover:ring-[#007AC3]/30 transition-all"
                  style={{
                    width: cell,
                    height: cell,
                    backgroundColor: colorFor(day.count),
                  }}
                  title={
                    day.dateKey +
                    ": " +
                    day.count +
                    " topic" +
                    (day.count === 1 ? "" : "s")
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-3 text-[11px] text-ink-400">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="w-3.5 h-3.5 rounded-[3px]"
            style={{ backgroundColor: colorFor(n) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}