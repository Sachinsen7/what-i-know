"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";
import { ExpandableCategory } from "@/components/knowledge-map/ExpandableCategory";
import { useKnowledgeMap } from "@/hooks/useKnowledgeMap";
import { portfolioCardReveal, portfolioCardTransition } from "@/components/ui/portfolio-motion";

export function CategoryGrid() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const {
    categories,
    openCategoryId,
    selectedTopicId,
    toggleCategory,
    selectTopic,
    closeTopic,
  } = useKnowledgeMap();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="knowledge-app">
      <motion.div
        initial="initial"
        animate="animate"
        variants={portfolioCardReveal}
        transition={portfolioCardTransition}
        className="knowledge-hero"
      >
        <div className="flex flex-col gap-[var(--portfolio-stack-gap-md)] md:flex-row md:items-end md:justify-between">
          <div className="grid max-w-2xl gap-[var(--portfolio-stack-gap-sm)]">
            <span className="portfolio-card__meta">Learning Map</span>
            <h1 className="m-0 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              A live map of the systems and backend ideas I am actively studying.
            </h1>
            <p className="m-0 text-sm leading-7 knowledge-muted sm:text-base">
              Each track expands in place to show all topics clearly with proper spacing and natural flow.
            </p>
          </div>
          <button
            type="button"
            className="knowledge-toggle flex items-center gap-[var(--portfolio-stack-gap-xs)] px-3 py-1.5 text-sm"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </motion.div>

      <div className="knowledge-categories">
        {categories.map((category) => (
          <ExpandableCategory
            key={category.id}
            category={category}
            isExpanded={openCategoryId === category.id}
            selectedTopicId={selectedTopicId}
            onToggle={toggleCategory}
            onSelectTopic={selectTopic}
            onCloseTopic={closeTopic}
          />
        ))}
      </div>
    </div>
  );
}
