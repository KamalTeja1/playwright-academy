import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CompletedEntry = {
  completedAt: string;
};

type ProgressState = {
  completed: Record<string, CompletedEntry>;
  markComplete: (slug: string) => void;
  markIncomplete: (slug: string) => void;
  toggle: (slug: string) => void;
  isComplete: (slug: string) => boolean;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: {},
      markComplete: (slug) =>
        set((state) => ({
          completed: {
            ...state.completed,
            [slug]: { completedAt: new Date().toISOString() },
          },
        })),
      markIncomplete: (slug) =>
        set((state) => {
          const next = { ...state.completed };
          delete next[slug];
          return { completed: next };
        }),
      toggle: (slug) => {
        const state = get();
        if (state.completed[slug]) state.markIncomplete(slug);
        else state.markComplete(slug);
      },
      isComplete: (slug) => Boolean(get().completed[slug]),
      reset: () => set({ completed: {} }),
    }),
    {
      name: "playwright-academy-progress",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function calculateStreak(
  completed: Record<string, CompletedEntry>
): number {
  const dates = new Set(
    Object.values(completed).map((v) => v.completedAt.split("T")[0])
  );
  if (dates.size === 0) return 0;

  const toKey = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  // If today is not done, start checking from yesterday
  if (!dates.has(toKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!dates.has(toKey(cursor))) return 0;
  }

  let streak = 0;
  while (dates.has(toKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}