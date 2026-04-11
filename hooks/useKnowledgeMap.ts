"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/topics";

export function useKnowledgeMap() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(categories[0]?.id ?? null);
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
    setSelectedTopicId(null);
    setOpenCategoryId((current) => (current === categoryId ? null : categoryId));
  };

  const selectTopic = (topicId: string) => {
    setSelectedTopicId((current) => (current === topicId ? null : topicId));
  };

  const closeTopic = () => setSelectedTopicId(null);

  return {
    categories,
    openCategoryId,
    selectedTopic,
    selectedTopicId,
    toggleCategory,
    selectTopic,
    closeTopic,
  };
}
