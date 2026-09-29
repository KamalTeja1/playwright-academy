import { lessonsByModule } from "./lessons";
import { phases } from "./curriculum";

export type TopicLocation = {
  phaseSlug: string;
  phaseNumber: string;
  phaseTitle: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
};

const topicToLocation: Record<string, TopicLocation> = {};

for (const [moduleSlug, lessons] of Object.entries(lessonsByModule)) {
  const phase = phases.find((p) =>
    p.modules.some((m) => m.slug === moduleSlug)
  );
  if (!phase) continue;
  const mod = phase.modules.find((m) => m.slug === moduleSlug);
  if (!mod) continue;

  for (const lesson of lessons) {
    const location: TopicLocation = {
      phaseSlug: phase.slug,
      phaseNumber: phase.number,
      phaseTitle: phase.title,
      moduleSlug: mod.slug,
      moduleTitle: mod.title,
      lessonSlug: lesson.slug,
    };
    topicToLocation[lesson.slug] = location;
    for (const topic of lesson.topics) {
      topicToLocation[topic.slug] = location;
    }
  }
}

export function getTopicLocation(slug: string): TopicLocation | undefined {
  return topicToLocation[slug];
}

export function getAllPublishedPhases(): string[] {
  const set = new Set<string>();
  for (const loc of Object.values(topicToLocation)) {
    set.add(loc.phaseSlug);
  }
  return Array.from(set);
}