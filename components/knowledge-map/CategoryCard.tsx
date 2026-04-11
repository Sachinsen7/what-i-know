"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Binary, Braces, ChevronDown, Cpu, DatabaseZap } from "lucide-react";
import type { Category, Topic } from "@/data/topics";
import { Badge } from "@/components/ui/badge";
import { Collapsible } from "@/components/ui/collapsible";
import { PortfolioStructureCard } from "@/components/ui/PortfolioStructureCard";
import { ExplanationPanel } from "@/components/knowledge-map/ExplanationPanel";
import { TopicList } from "@/components/knowledge-map/TopicList";
import { portfolioExpandTransition } from "@/components/ui/portfolio-motion";

const categoryIcons = {
  go: Braces,
  rust: Cpu,
  assembly: Binary,
  backend: DatabaseZap,
} as const;

type CategoryCardProps = {
  category: Category;
  isOpen: boolean;
  selectedTopic: Topic | null;
  selectedTopicId: string | null;
  onToggle: (categoryId: string) => void;
  onSelectTopic: (topicId: string) => void;
  onCloseTopic: () => void;
};

export function CategoryCard(props: CategoryCardProps) {
  const { category, isOpen, selectedTopic, selectedTopicId, onToggle, onSelectTopic, onCloseTopic } = props;
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Braces;
  const reduceMotion = useReducedMotion();

  return (
    <Collapsible open={isOpen}>
      <motion.div layout transition={portfolioExpandTransition}>
        <PortfolioStructureCard
          layout
          interactive
          onClick={() => onToggle(category.id)}
          title={category.label}
          description={category.description}
          className="portfolio-card--roomy cursor-pointer"
          eyebrow={<span className="knowledge-accent">Learning Track</span>}
          meta={`${category.topics.length} mapped`}
          actions={
            <Badge className="gap-[var(--portfolio-stack-gap-xs)]">
              <Icon className="h-3.5 w-3.5" />
              {category.topics.length} topics
            </Badge>
          }
          footer={
            <div className="flex w-full items-center justify-between gap-[var(--portfolio-stack-gap-sm)] text-sm">
              <span className="knowledge-muted">Click to {isOpen ? "collapse" : "expand"}</span>
              <ChevronDown className={isOpen ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
            </div>
          }
        >
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key={`${category.id}-content`}
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                transition={portfolioExpandTransition}
                className="overflow-hidden portfolio-stack-md"
                onClick={(event) => event.stopPropagation()}
              >
                <TopicList
                  topics={category.topics}
                  selectedTopicId={selectedTopicId}
                  onSelect={onSelectTopic}
                />
                <ExplanationPanel topic={selectedTopic} onClose={onCloseTopic} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </PortfolioStructureCard>
      </motion.div>
    </Collapsible>
  );
}
