"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Topic } from "@/data/topics";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTopicChapters } from "@/lib/topic-content";

type TopicDetailProps = {
  topic: Topic;
  onClose: () => void;
};

export function TopicDetail({ topic, onClose }: TopicDetailProps) {
  const chapters = useMemo(() => getTopicChapters(topic.explanation), [topic.explanation]);

  return (
    <motion.div
      className="portfolio-surface portfolio-surface--panel p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
          <p className="text-sm knowledge-muted leading-relaxed">{topic.preview}</p>
        </div>
        <button
          onClick={onClose}
          className="knowledge-action p-2 hover:bg-[var(--portfolio-surface-fill-muted)] rounded-md transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <ScrollArea className="h-96 pr-4">
        <div className="prose prose-sm max-w-none">
          {chapters.length > 0 ? (
            <div className="space-y-8">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-[var(--knowledge-ink)] border-b border-[var(--portfolio-border-color)] pb-2">
                    {chapter.title}
                  </h3>
                  <div className="text-sm leading-7 knowledge-muted">
                    {chapter.blocks.map((block, blockIndex) => {
                      switch (block.type) {
                        case 'paragraph':
                          return (
                            <p key={blockIndex} className="mb-4 whitespace-pre-wrap">
                              {block.text}
                            </p>
                          );
                        case 'list':
                          return (
                            <ul key={blockIndex} className="mb-4 ml-4 list-disc space-y-1">
                              {block.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-sm leading-7 knowledge-muted whitespace-pre-wrap">
              {topic.explanation}
            </div>
          )}
        </div>
      </ScrollArea>
    </motion.div>
  );
}