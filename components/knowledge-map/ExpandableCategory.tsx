"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, DatabaseZap, Binary, Braces, Cpu } from "lucide-react";
import type { Category, Topic } from "@/data/topics";
import { TopicDetail } from "@/components/knowledge-map/TopicDetail";
import { portfolioCardReveal, portfolioCardTransition } from "@/components/ui/portfolio-motion";

const categoryIcons = {
  go: Braces,
  rust: Cpu,
  assembly: Binary,
  backend: DatabaseZap,
} as const;

type ExpandableCategoryProps = {
  category: Category;
  isExpanded: boolean;
  selectedTopicId: string | null;
  onToggle: (categoryId: string) => void;
  onSelectTopic: (topicId: string) => void;
  onCloseTopic: () => void;
};

export function ExpandableCategory({
  category,
  isExpanded,
  selectedTopicId,
  onToggle,
  onSelectTopic,
  onCloseTopic,
}: ExpandableCategoryProps) {
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Braces;
  const selectedTopic = category.topics.find(topic => topic.id === selectedTopicId) || null;

  return (
    <motion.div
      layout
      transition={portfolioCardTransition}
      className="portfolio-surface portfolio-card knowledge-category"
    >
      {/* Category Header */}
      <motion.header
        layout
        className="portfolio-card__header cursor-pointer"
        onClick={() => onToggle(category.id)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="portfolio-card__topline">
          <div className="portfolio-card__header-group">
            <span className="portfolio-chip knowledge-accent">
              <Icon className="h-3.5 w-3.5 mr-1" />
              Learning Track
            </span>
            <span className="portfolio-card__meta">{category.topics.length} topics</span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>

        <h3 className="portfolio-card__title">{category.label}</h3>
        <p className="portfolio-card__description">{category.description}</p>
      </motion.header>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, height: "auto", scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0.8 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              scaleY: { duration: 0.3 }
            }}
            className="overflow-hidden"
            style={{ originY: 0 }}
          >
            <motion.div
              className="portfolio-card__body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.div
                className="knowledge-topics-grid"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {category.topics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: index * 0.05
                        }
                      }
                    }}
                  >
                    <TopicItem
                      topic={topic}
                      isSelected={selectedTopicId === topic.id}
                      onSelect={() => onSelectTopic(topic.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Topic Detail View */}
              <AnimatePresence mode="wait">
                {selectedTopic && (
                  <motion.div
                    key={selectedTopic.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="mt-8"
                  >
                    <TopicDetail topic={selectedTopic} onClose={onCloseTopic} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TopicItem({
  topic,
  isSelected,
  onSelect
}: {
  topic: Topic;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      layout
      className={`knowledge-topic-item p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'border-[var(--portfolio-border-color-strong)] bg-[var(--knowledge-accent-soft)] shadow-lg'
          : 'border-[var(--portfolio-border-color)] hover:border-[var(--portfolio-border-color-strong)] hover:shadow-md'
      }`}
      onClick={onSelect}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.96,
        transition: { duration: 0.1, ease: "easeIn" }
      }}
      animate={{
        boxShadow: isSelected
          ? "0 10px 25px rgba(0, 0, 0, 0.1)"
          : "0 2px 8px rgba(0, 0, 0, 0.05)"
      }}
    >
      <motion.h4
        className="font-semibold text-lg mb-3"
        animate={{ color: isSelected ? "var(--knowledge-accent)" : "var(--knowledge-ink)" }}
        transition={{ duration: 0.2 }}
      >
        {topic.title}
      </motion.h4>
      <motion.p
        className="text-sm leading-6 knowledge-muted"
        animate={{ opacity: isSelected ? 0.9 : 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {topic.preview}
      </motion.p>
    </motion.div>
  );
}