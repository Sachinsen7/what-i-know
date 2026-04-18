"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/topics";

export function useKnowledgeMap() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === openCategoryId) ?? null,
    [openCategoryId]
  );

  const selectedTopic = useMemo(
    () => activeCategory?.topics.find((topic) => topic.id === selectedTopicId) ?? null,
    [activeCategory, selectedTopicId]
  );

  const toggleCategory = (categoryId: string) => {
    setOpenCategoryId((current) => {
      if (current === categoryId) {
        setSelectedTopicId(null);
        return null;
      }

      const nextCategory = categories.find((category) => category.id === categoryId) ?? null;
      setSelectedTopicId(nextCategory?.topics[0]?.id ?? null);
      return categoryId;
    });
  };

  const selectTopic = (topicId: string) => {
    setSelectedTopicId((current) => (current === topicId ? null : topicId));
  };

  const closeTopic = () => setSelectedTopicId(null);
  const closeCategory = () => {
    setSelectedTopicId(null);
    setOpenCategoryId(null);
  };

  return {
    activeCategory,
    categories,
    closeCategory,
    openCategoryId,
    selectedTopic,
    selectedTopicId,
    toggleCategory,
    selectTopic,
    closeTopic,
  };
}
