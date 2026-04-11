"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Topic } from "@/data/topics";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { portfolioCardReveal, portfolioExpandTransition } from "@/components/ui/portfolio-motion";

type ExplanationPanelProps = {
  topic: Topic | null;
  onClose: () => void;
};

export function ExplanationPanel({ topic, onClose }: ExplanationPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {topic ? (
        <motion.section
          key={topic.id}
          layout
          initial={reduceMotion ? false : "initial"}
          animate="animate"
          exit="exit"
          variants={portfolioCardReveal}
          transition={portfolioExpandTransition}
          className="portfolio-surface portfolio-surface--panel portfolio-card"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-[var(--portfolio-stack-gap-sm)]">
            <div className="grid gap-[var(--portfolio-stack-gap-xs)]">
              <span className="text-sm font-semibold">{topic.title}</span>
              <span className="text-sm knowledge-muted">Deep dive</span>
            </div>
            <button className="knowledge-action px-3 py-1.5 text-sm" onClick={onClose} type="button">
              <span className="flex items-center gap-[var(--portfolio-stack-gap-xs)]">
                <ArrowLeft className="h-4 w-4" />
                Back
              </span>
            </button>
          </div>
          <Separator />
          <ScrollArea className="max-h-56">
            <p className="m-0 pr-[var(--portfolio-space-4)] text-sm leading-7 knowledge-muted">
              {topic.explanation}
            </p>
          </ScrollArea>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
