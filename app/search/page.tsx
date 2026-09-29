"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  Clock,
  ArrowRight,
  Tag,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { SearchBox } from "@/components/ui/search-box";
import { searchTopics, getAllTags, type SearchResult } from "@/lib/data/search";

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "#eef6dc", text: "#5a8116" },
  Intermediate: { bg: "#fdf3dd", text: "#a06f10" },
  Advanced: { bg: "#fdeced", text: "#b8151f" },
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  // Debounce input by 150ms
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 150);
    return () => clearTimeout(t);
  }, [query]);

  const results: SearchResult[] = useMemo(() => {
    return searchTopics(debounced, 30);
  }, [debounced]);

  const tags = useMemo(() => getAllTags().slice(0, 14), []);

  return (
    <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-[12px] uppercase text-ink-400 tracking-wider font-bold mb-2">
          Search
        </div>
        <h1 className="text-[32px] font-extrabold text-ink-900 mb-2">
          Find any topic
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Search across every topic title, summary, tag, and the content inside.
        </p>
      </motion.div>

      {/* Search input */}
      <div className="mt-8">
        <SearchBox value={query} onChange={setQuery} autoFocus />
      </div>

      {/* Tag quick filters */}
      {!query && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6"
        >
          <div className="flex items-center gap-2 mb-3 text-[11.5px] uppercase tracking-wider font-bold text-ink-400">
            <Tag size={14} weight="duotone" />
            Popular tags
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] border border-border bg-surface hover:bg-blue-25 hover:border-[#409BD2] transition-all text-[12.5px] font-semibold text-ink-600 hover:text-blue-500"
              >
                <span>{tag}</span>
                <span className="text-[10.5px] text-ink-400 group-hover:text-blue-500/70 font-mono">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Results */}
      <div className="mt-8">
        {debounced.length >= 2 && (
          <div className="text-[13px] text-ink-400 mb-4">
            {results.length === 0
              ? "No results for " + debounced
              : results.length +
                " result" +
                (results.length === 1 ? "" : "s") +
                " for " +
                debounced}
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {results.map((r, i) => {
            const diff = DIFFICULTY_COLORS[r.difficulty] ?? {
              bg: "#eef7ff",
              text: "#007AC3",
            };
            return (
              <motion.div
                key={r.slug}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ delay: i * 0.02 }}
                className="mb-3"
              >
                <Link
                  href={"/topics/" + r.slug}
                  className="group block bg-surface border border-border rounded-card p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 gradient-border-hover"
                >
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[6px]"
                      style={{ background: diff.bg, color: diff.text }}
                    >
                      {r.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-[11.5px] text-ink-400 font-medium">
                      <Clock size={12} weight="duotone" />
                      {r.estimatedMinutes} min
                    </span>
                    <span className="text-[11.5px] text-ink-400 font-medium">
                      Phase {r.phaseNumber}
                    </span>
                  </div>

                  <h3 className="text-[15.5px] font-bold text-ink-900 group-hover:text-blue-500 transition-colors mb-1.5">
                    {r.title}
                  </h3>

                  <p className="text-[13px] text-ink-600 leading-relaxed mb-3 line-clamp-2">
                    {r.snippet}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10.5px] px-2 py-0.5 rounded-[6px] bg-blue-25 text-blue-500 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty states */}
        {query.length === 0 && (
          <div className="bg-surface border border-dashed border-border rounded-card p-10 text-center mt-6">
            <div className="w-16 h-16 rounded-full bg-blue-25 flex items-center justify-center text-blue-500 mx-auto mb-4">
              <MagnifyingGlass size={32} weight="duotone" />
            </div>
            <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
              Start typing to search
            </h3>
            <p className="text-ink-600 text-[13.5px] max-w-md mx-auto">
              Try a topic name like "locator", a tag like "phase--1", or any
              word that appears inside the content.
            </p>
          </div>
        )}

        {query.length > 0 && query.length < 2 && (
          <div className="text-[13.5px] text-ink-400 text-center py-12">
            Keep typing… at least 2 characters.
          </div>
        )}

        {debounced.length >= 2 && results.length === 0 && (
          <div className="bg-surface border border-dashed border-border rounded-card p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mx-auto mb-4">
              <Sparkle size={32} weight="duotone" />
            </div>
            <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
              No topics found
            </h3>
            <p className="text-ink-600 text-[13.5px] max-w-md mx-auto">
              Try a different word, or use one of the popular tags above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}