import { topics } from "./topics";
import { getTopicLocation } from "./lookup";

export type SearchResult = {
  slug: string;
  title: string;
  summary: string;
  difficulty: string;
  estimatedMinutes: number;
  tags: string[];
  phaseNumber: string;
  phaseTitle: string;
  moduleTitle: string;
  score: number;
  snippet: string;
};

type IndexEntry = {
  slug: string;
  title: string;
  titleLower: string;
  summary: string;
  summaryLower: string;
  tags: string[];
  tagsLower: string[];
  difficulty: string;
  estimatedMinutes: number;
  bodyLower: string;
  bodyPlain: string;
  phaseNumber: string;
  phaseTitle: string;
  moduleTitle: string;
};

function stripMarkdown(md: string): string {
  return md
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/#+\s*/g, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

let cachedIndex: IndexEntry[] | null = null;

function buildIndex(): IndexEntry[] {
  if (cachedIndex) return cachedIndex;

  const entries: IndexEntry[] = [];
  for (const [slug, topic] of Object.entries(topics)) {
    const loc = getTopicLocation(slug);
    const bodyPlain =
      stripMarkdown(topic.notes) +
      " " +
      stripMarkdown(topic.whyItMatters) +
      " " +
      stripMarkdown(topic.handsOn) +
      " " +
      stripMarkdown(topic.challenge) +
      " " +
      topic.proTips.join(" ");

    entries.push({
      slug,
      title: topic.title,
      titleLower: topic.title.toLowerCase(),
      summary: topic.summary,
      summaryLower: topic.summary.toLowerCase(),
      tags: topic.tags,
      tagsLower: topic.tags.map((t) => t.toLowerCase()),
      difficulty: topic.difficulty,
      estimatedMinutes: topic.estimatedMinutes,
      bodyLower: bodyPlain.toLowerCase(),
      bodyPlain,
      phaseNumber: loc?.phaseNumber ?? "?",
      phaseTitle: loc?.phaseTitle ?? "",
      moduleTitle: loc?.moduleTitle ?? "",
    });
  }

  cachedIndex = entries;
  return entries;
}

function makeSnippet(body: string, query: string): string {
  const lower = body.toLowerCase();
  const idx = lower.indexOf(query);
  if (idx === -1) return body.slice(0, 160) + (body.length > 160 ? "…" : "");
  const start = Math.max(0, idx - 60);
  const end = Math.min(body.length, idx + query.length + 100);
  let snippet = body.slice(start, end).trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < body.length) snippet = snippet + "…";
  return snippet;
}

export function searchTopics(query: string, limit = 20): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const index = buildIndex();
  const results: SearchResult[] = [];

  for (const entry of index) {
    let score = 0;
    let snippet = entry.summary;

    if (entry.titleLower.includes(q)) {
      score += 100;
      if (entry.titleLower.startsWith(q)) score += 50;
      if (entry.titleLower === q) score += 100;
    }

    for (const tag of entry.tagsLower) {
      if (tag.includes(q)) {
        score += 40;
        if (tag === q) score += 20;
      }
    }

    if (entry.summaryLower.includes(q)) {
      score += 25;
    }

    if (entry.bodyLower.includes(q)) {
      score += 10;
      const occurrences =
        entry.bodyLower.split(q).length - 1;
      score += Math.min(occurrences, 5) * 2;
      snippet = makeSnippet(entry.bodyPlain, q);
    }

    if (score > 0) {
      results.push({
        slug: entry.slug,
        title: entry.title,
        summary: entry.summary,
        difficulty: entry.difficulty,
        estimatedMinutes: entry.estimatedMinutes,
        tags: entry.tags,
        phaseNumber: entry.phaseNumber,
        phaseTitle: entry.phaseTitle,
        moduleTitle: entry.moduleTitle,
        score,
        snippet,
      });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

export function getAllTags(): { tag: string; count: number }[] {
  const index = buildIndex();
  const map: Record<string, number> = {};
  for (const entry of index) {
    for (const tag of entry.tags) {
      map[tag] = (map[tag] ?? 0) + 1;
    }
  }
  return Object.entries(map)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}