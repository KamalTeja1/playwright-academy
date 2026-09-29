"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gear,
  User,
  Palette,
  Sun,
  Moon,
  DownloadSimple,
  UploadSimple,
  Trash,
  Check,
  Warning,
  Info,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { SettingsRow } from "@/components/ui/settings-row";
import { useProgress } from "@/lib/store/progress";
import { useProfile } from "@/lib/store/profile";

type Theme = "light" | "dark";

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const completed = useProgress((s) => s.completed);
  const resetProgress = useProgress((s) => s.reset);
  const profileName = useProfile((s) => s.name);
  const setProfileName = useProfile((s) => s.setName);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    setName(profileName);
  }, [profileName]);

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const applyTheme = (next: Theme) => {
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const saveName = () => {
    setProfileName(name);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const exportData = () => {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      profile: { name: profileName },
      progress: { completed },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      "playwright-academy-backup-" +
      new Date().toISOString().split("T")[0] +
      ".json";
    a.click();
    URL.revokeObjectURL(url);
    setToast("Backup downloaded");
  };

  const importData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(String(e.target?.result));
        if (!parsed || typeof parsed !== "object") {
          throw new Error("Invalid file");
        }
        if (parsed.progress?.completed) {
          const current = useProgress.getState();
          for (const slug of Object.keys(parsed.progress.completed)) {
            current.markComplete(slug);
          }
        }
        if (parsed.profile?.name) {
          setProfileName(parsed.profile.name);
          setName(parsed.profile.name);
        }
        setToast("Backup restored");
      } catch {
        setToast("Could not read that file");
      }
    };
    reader.readAsText(file);
  };

  const doReset = () => {
    resetProgress();
    setResetConfirm(false);
    setToast("Progress cleared");
  };

  const completedCount = Object.keys(completed).length;

  return (
    <div className="px-6 md:px-12 py-8 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Settings
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-2">
          Preferences
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Customise your learning experience. All settings are stored locally
          on this device.
        </p>
      </motion.div>

      {/* Profile */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-8 bg-surface border border-border rounded-card shadow-sm"
      >
        <div className="flex items-center gap-2 px-6 pt-6 pb-2">
          <User size={18} weight="duotone" className="text-blue-500" />
          <h2 className="text-[15.5px] font-extrabold text-ink-900">Profile</h2>
        </div>
        <div className="px-6">
          <SettingsRow
            title="Your name"
            description="Shown on the dashboard to personalise your experience."
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={40}
                className="w-44 px-3 py-2 rounded-[8px] border border-border bg-surface text-ink-900 text-[13px] outline-none focus:border-[#007AC3] focus:ring-2 focus:ring-[#007AC3]/10 transition-all"
              />
              <button
                onClick={saveName}
                disabled={!mounted || name === profileName}
                className={
                  "px-4 py-2 rounded-[8px] text-[12.5px] font-bold transition-all " +
                  (name === profileName
                    ? "bg-border text-ink-400 cursor-not-allowed"
                    : "bg-gradient-btn text-white shadow-btn hover:shadow-btn-hover")
                }
              >
                {saved ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} weight="bold" />
                    Saved
                  </span>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </SettingsRow>
        </div>
      </motion.section>

      {/* Appearance */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 bg-surface border border-border rounded-card shadow-sm"
      >
        <div className="flex items-center gap-2 px-6 pt-6 pb-2">
          <Palette size={18} weight="duotone" className="text-blue-500" />
          <h2 className="text-[15.5px] font-extrabold text-ink-900">
            Appearance
          </h2>
        </div>
        <div className="px-6">
          <SettingsRow
            title="Theme"
            description="Choose between light and dark. You can also toggle with the icon in the top bar."
          >
            <div className="inline-flex p-1 bg-border rounded-[10px]">
              {(
                [
                  { key: "light" as Theme, label: "Light", icon: Sun },
                  { key: "dark" as Theme, label: "Dark", icon: Moon },
                ]
              ).map((opt) => {
                const isActive = theme === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => applyTheme(opt.key)}
                    className={
                      "inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[12.5px] font-semibold transition-all " +
                      (isActive
                        ? "bg-surface text-ink-900 shadow-sm"
                        : "text-ink-600 hover:text-ink-900")
                    }
                  >
                    <opt.icon size={15} weight="duotone" />
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </SettingsRow>
        </div>
      </motion.section>

      {/* Data */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6 bg-surface border border-border rounded-card shadow-sm"
      >
        <div className="flex items-center gap-2 px-6 pt-6 pb-2">
          <DownloadSimple size={18} weight="duotone" className="text-blue-500" />
          <h2 className="text-[15.5px] font-extrabold text-ink-900">Data</h2>
        </div>
        <div className="px-6">
          <SettingsRow
            title="Completed topics"
            description="Your progress is saved in this browser only. It does not sync across devices."
          >
            <div className="text-[22px] font-extrabold text-ink-900">
              {completedCount}
              <span className="text-[13px] text-ink-400 font-medium ml-1.5">
                topics
              </span>
            </div>
          </SettingsRow>

          <SettingsRow
            title="Export backup"
            description="Download a JSON file with your name and progress. Useful before switching devices."
          >
            <button
              onClick={exportData}
              disabled={!mounted || completedCount === 0}
              className={
                "inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[12.5px] font-bold transition-all " +
                (completedCount === 0
                  ? "bg-border text-ink-400 cursor-not-allowed"
                  : "bg-gradient-btn text-white shadow-btn hover:shadow-btn-hover")
              }
            >
              <DownloadSimple size={14} weight="bold" />
              Download
            </button>
          </SettingsRow>

          <SettingsRow
            title="Import backup"
            description="Restore your progress from a backup file. Your current progress will be kept and merged."
          >
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) importData(f);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={!mounted}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[12.5px] font-bold border border-border bg-surface text-ink-900 hover:bg-blue-25 hover:border-[#409BD2] transition-all"
              >
                <UploadSimple size={14} weight="bold" />
                Choose file
              </button>
            </>
          </SettingsRow>
        </div>
      </motion.section>

      {/* Danger zone */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 bg-surface border border-red-500/30 rounded-card shadow-sm overflow-hidden"
      >
        <div className="flex items-center gap-2 px-6 pt-6 pb-2">
          <Warning size={18} weight="duotone" className="text-red-500" />
          <h2 className="text-[15.5px] font-extrabold text-red-500">
            Danger zone
          </h2>
        </div>
        <div className="px-6">
          <SettingsRow
            title="Reset all progress"
            description="Clears your completed topics from this browser. Cannot be undone."
            danger
          >
            <button
              onClick={() => setResetConfirm(true)}
              disabled={!mounted || completedCount === 0}
              className={
                "inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[12.5px] font-bold transition-all " +
                (completedCount === 0
                  ? "bg-border text-ink-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-500/90 shadow-sm")
              }
            >
              <Trash size={14} weight="bold" />
              Reset
            </button>
          </SettingsRow>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-6 bg-gradient-to-br from-[#f7fbff] to-[#eef6fc] dark:from-[#0e2a44] dark:to-[#143550] border border-border rounded-card p-6 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-btn flex items-center justify-center text-white shadow-btn shrink-0">
            <Info size={22} weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="text-[15.5px] font-extrabold text-ink-900 mb-1">
              Playwright AI Academy
            </h3>
            <p className="text-[13px] text-ink-600 leading-relaxed">
              A free, self-paced learning platform that takes you from zero to
              job-ready in Playwright automation. Everything is stored locally
              in your browser, so nothing leaves your device.
            </p>
            <div className="flex items-center gap-2 mt-3 text-[12px] text-ink-400 font-semibold">
              <Heart size={14} weight="fill" className="text-red-500" />
              Built with care for learners everywhere
            </div>
          </div>
        </div>
      </motion.section>

      {/* Reset confirmation modal */}
      <AnimatePresence>
        {resetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setResetConfirm(false)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              background: "rgba(6,20,32,0.6)",
              backdropFilter: "blur(3px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-surface rounded-modal p-6 shadow-2xl"
              style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.35)" }}
            >
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Warning size={28} weight="duotone" />
              </div>
              <h2 className="text-[18px] font-extrabold text-ink-900 text-center mb-2">
                Reset all progress?
              </h2>
              <p className="text-[13.5px] text-ink-600 text-center mb-6">
                This will permanently clear all{" "}
                <span className="font-bold text-ink-900">
                  {completedCount}
                </span>{" "}
                completed topics from this browser. This cannot be undone.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setResetConfirm(false)}
                  className="flex-1 px-4 py-3 rounded-[10px] border border-border bg-surface text-ink-900 font-semibold text-[13.5px] hover:bg-blue-25 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={doReset}
                  className="flex-1 px-4 py-3 rounded-[10px] bg-red-500 text-white font-semibold text-[13.5px] hover:bg-red-500/90 transition-all shadow-sm"
                >
                  Yes, reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-[12px] bg-[#0c2536] text-white text-[13px] font-semibold shadow-lg flex items-center gap-2"
          >
            <Check size={16} weight="bold" className="text-green-500" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}