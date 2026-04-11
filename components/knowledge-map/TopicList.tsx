"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Topic } from "@/data/topics";
import { EmptyState } from "@/components/knowledge-map/EmptyState";
import { TopicRow } from "@/components/knowledge-map/TopicRow";
import { portfolioExpandTransition, portfolioStagger } from "@/components/ui/portfolio-motion";

type TopicListProps = {
  topics: Topic[];
  selectedTopicId: string | null;
  onSelect: (topicId: string) => void;
};

export function TopicList({ topics, selectedTopicId, onSelect }: TopicListProps) {
  const reduceMotion = useReducedMotion();

  if (!topics.length) {
    return <EmptyState />;
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
      transition={portfolioExpandTransition}
      className="overflow-hidden"
    >
      <motion.div
        variants={portfolioStagger}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        className="portfolio-stack-sm"
      >
        {topics.map((topic) => (
          <TopicRow
            key={topic.id}
            topic={topic}
            isActive={selectedTopicId === topic.id}
            onSelect={onSelect}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
