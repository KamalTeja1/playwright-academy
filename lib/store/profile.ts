import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ProfileState = {
  name: string;
  setName: (name: string) => void;
};

export const useProfile = create<ProfileState>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) => set({ name: name.trim().slice(0, 40) }),
    }),
    {
      name: "playwright-academy-profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);