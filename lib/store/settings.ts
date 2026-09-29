import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SettingsState = {
  weeklyGoal: number;
  setWeeklyGoal: (goal: number) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      weeklyGoal: 5,
      setWeeklyGoal: (goal) =>
        set({ weeklyGoal: Math.max(1, Math.min(50, goal)) }),
    }),
    {
      name: "playwright-academy-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);