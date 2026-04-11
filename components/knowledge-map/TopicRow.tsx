"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Topic } from "@/data/topics";
import { cn } from "@/lib/utils";
import { portfolioCardReveal, portfolioCardTransition } from "@/components/ui/portfolio-motion";

type TopicRowProps = {
  topic: Topic;
  isActive: boolean;
  onSelect: (topicId: string) => void;
};

export function TopicRow({ topic, isActive, onSelect }: TopicRowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      variants={portfolioCardReveal}
      transition={portfolioCardTransition}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(topic.id);
      }}
      className={cn(
        "knowledge-topic portfolio-subcard grid w-full items-start gap-[var(--portfolio-stack-gap-sm)] text-left",
        "transition-[border-color,transform] duration-200 ease-in-out hover:border-[var(--portfolio-border-color-strong)]",
        isActive && "border-[var(--portfolio-border-color-strong)] bg-[var(--knowledge-accent-soft)]"
      )}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <div className="flex items-start justify-between gap-[var(--portfolio-stack-gap-sm)]">
        <div className="grid gap-[var(--portfolio-stack-gap-xs)]">
          <span className="text-sm font-semibold">{topic.title}</span>
          <span className="text-sm leading-7 knowledge-muted">{topic.preview}</span>
        </div>
        <ChevronRight className={cn("mt-1 h-4 w-4 shrink-0", isActive && "rotate-90")} />
      </div>
    </motion.button>
  );
}
