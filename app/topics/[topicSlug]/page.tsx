"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  BookOpen,
  Code,
  Trophy,
  Lightbulb,
  WarningCircle,
  Terminal,
  Clock,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { getTopicBySlug } from "@/lib/data/topics";

type TabKey = "notes" | "handsOn" | "challenge" | "proTips" | "mistakes" | "code";

const TABS: { key: TabKey; label: string; icon: any }[] = [
  { key: "notes", label: "Notes", icon: BookOpen },
  { key: "handsOn", label: "Hands-On", icon: Code },
  { key: "challenge", label: "Challenge", icon: Trophy },
  { key: "proTips", label: "Pro Tips", icon: Lightbulb },
  { key: "mistakes", label: "Mistakes", icon: WarningCircle },
  { key: "code", label: "Code", icon: Terminal },
];

export default function TopicPage({
  params,
}: {
  params: Promise<{ topicSlug: string }>;
}) {
  const { topicSlug } = use(params);
  const topic = getTopicBySlug(topicSlug);
  const [activeTab, setActiveTab] = useState<TabKey>("notes");

  if (!topic) {
    return (
      <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          Topic not found
        </h1>
        <p className="text-[#46586a] mb-6">
          We haven't written this topic yet. Coming soon!
        </p>
        <Link
          href="/phases"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] text-white font-semibold text-[13.5px]"
          style={{
            background: "linear-gradient(120deg, #007AC3, #409BD2)",
            boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
          }}
        >
          <ArrowLeft size={16} weight="bold" />
          Back to phases
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          href="/phases"
          className="inline-flex items-center gap-2 text-[13px] text-[#46586a] hover:text-[#007AC3] font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" />
          Back
        </Link>

        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-2">
          Topic
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0c2536] mb-3">
          {topic.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="flex items-center gap-1.5 text-[12.5px] text-[#7c8ea0] font-medium">
            <Clock size={14} weight="duotone" />
            {topic.estimatedMinutes} min
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#eef7ff] text-[#007AC3]">
            {topic.difficulty}
          </span>
        </div>

        <div className="bg-[#eef7ff] border border-[#A6D1EA] rounded-[14px] p-5 mb-8">
          <div className="text-[12px] uppercase text-[#007AC3] tracking-wider font-bold mb-2">
            Why this matters
          </div>
          <p className="text-[13.5px] text-[#0c2536] leading-relaxed">
            {topic.whyItMatters}
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-6 p-1.5 bg-white border rounded-[12px] shadow-sm">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all ${
                isActive
                  ? "text-white"
                  : "text-[#46586a] hover:bg-[#eef7ff]"
              }`}
              style={
                isActive
                  ? {
                      background: "linear-gradient(120deg, #007AC3, #409BD2)",
                      boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
                    }
                  : undefined
              }
            >
              <tab.icon size={16} weight={isActive ? "duotone" : "regular"} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-white border rounded-[14px] p-8 shadow-sm"
        >
          {activeTab === "notes" && (
            <div className="prose-content">
              <ReactMarkdown
                components={{
                  h3: ({ children }) => (
                    <h3 className="text-[15.5px] font-bold text-[#0c2536] mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-[14.5px] text-[#46586a] leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#0c2536]">
                      {children}
                    </strong>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007AC3] font-semibold underline hover:text-[#409BD2]"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block text-[13px] font-mono text-[#e0e6ed]">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="bg-[#eef7ff] text-[#007AC3] px-1.5 py-0.5 rounded-[4px] text-[13px] font-mono font-semibold">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-[#0c2536] rounded-[10px] p-4 mb-4 overflow-x-auto text-[13px] font-mono leading-relaxed">
                      {children}
                    </pre>
                  ),
                }}
              >
                {topic.notes}
              </ReactMarkdown>
            </div>
          )}

          {activeTab === "handsOn" && (
            <div>
              <ReactMarkdown
                components={{
                  h3: ({ children }) => (
                    <h3 className="text-[15.5px] font-bold text-[#0c2536] mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-[14.5px] text-[#46586a] leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#0c2536]">
                      {children}
                    </strong>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block text-[13px] font-mono text-[#e0e6ed]">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="bg-[#eef7ff] text-[#007AC3] px-1.5 py-0.5 rounded-[4px] text-[13px] font-mono font-semibold">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-[#0c2536] rounded-[10px] p-4 mb-4 overflow-x-auto text-[13px] font-mono leading-relaxed">
                      {children}
                    </pre>
                  ),
                }}
              >
                {topic.handsOn}
              </ReactMarkdown>
            </div>
          )}

          {activeTab === "challenge" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={22} weight="duotone" className="text-[#E8A317]" />
                <h3 className="text-[15.5px] font-bold text-[#0c2536]">
                  Stretch yourself
                </h3>
              </div>
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="text-[14.5px] text-[#46586a] leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-[14.5px] text-[#46586a]">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#0c2536]">
                      {children}
                    </strong>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block text-[13px] font-mono text-[#e0e6ed]">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="bg-[#eef7ff] text-[#007AC3] px-1.5 py-0.5 rounded-[4px] text-[13px] font-mono font-semibold">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-[#0c2536] rounded-[10px] p-4 mb-4 overflow-x-auto text-[13px] font-mono leading-relaxed">
                      {children}
                    </pre>
                  ),
                }}
              >
                {topic.challenge}
              </ReactMarkdown>
            </div>
          )}

          {activeTab === "proTips" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={22} weight="duotone" className="text-[#E8A317]" />
                <h3 className="text-[15.5px] font-bold text-[#0c2536]">
                  Pro tips from experience
                </h3>
              </div>
              <ul className="space-y-3">
                {topic.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      weight="duotone"
                      className="text-[#85BC20] mt-0.5 shrink-0"
                    />
                    <span className="text-[14px] text-[#46586a] leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "mistakes" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <WarningCircle
                  size={22}
                  weight="duotone"
                  className="text-[#E5202E]"
                />
                <h3 className="text-[15.5px] font-bold text-[#0c2536]">
                  Common mistakes and how to fix them
                </h3>
              </div>
              <div className="space-y-4">
                {topic.commonMistakes.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[10px] p-4 border"
                    style={{
                      background: "#fdeced",
                      borderColor: "#f6c7cb",
                    }}
                  >
                    <div className="text-[13.5px] font-bold text-[#b8151f] mb-2">
                      ✗ {item.mistake}
                    </div>
                    <div className="text-[13.5px] text-[#0c2536] leading-relaxed">
                      <span className="font-bold">Fix: </span>
                      {item.fix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={22} weight="duotone" className="text-[#007AC3]" />
                <h3 className="text-[15.5px] font-bold text-[#0c2536]">
                  Code examples
                </h3>
              </div>
              <div className="space-y-5">
                {topic.codeExamples.map((ex, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[13px] font-bold text-[#0c2536]">
                        {ex.title}
                      </div>
                      <span className="text-[11px] font-mono uppercase text-[#7c8ea0] font-bold">
                        {ex.language}
                      </span>
                    </div>
                    <pre className="bg-[#0c2536] rounded-[10px] p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-[#e0e6ed]">
                      {ex.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Further reading */}
      <div className="mt-8 bg-white border rounded-[14px] p-6 shadow-sm">
        <div className="text-[12px] uppercase text-[#7c8ea0] tracking-wider font-bold mb-3">
          Further reading
        </div>
        <ul className="space-y-2">
          {topic.furtherReading.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] text-[#007AC3] font-semibold hover:text-[#409BD2] inline-flex items-center gap-2"
              >
                <Sparkle size={14} weight="duotone" />
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}