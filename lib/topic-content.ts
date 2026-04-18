export type TopicBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type TopicChapter = {
  id: string;
  title: string;
  summary: string;
  blocks: TopicBlock[];
  tone: "sage" | "amber" | "sky" | "rose" | "mint";
};

const chapterTones: TopicChapter["tone"][] = ["sage", "amber", "sky", "rose", "mint"];

export function getTopicChapters(explanation: string): TopicChapter[] {
  const lines = explanation.split(/\r?\n/).map((line) => line.trim());
  const chapters: Array<{ title: string; lines: string[] }> = [];
  let current = { title: "Overview", lines: [] as string[] };

  for (const line of lines) {
    if (!line) {
      current.lines.push("");
      continue;
    }

    if (isChapterHeading(line)) {
      if (current.lines.some(hasMeaningfulText)) {
        chapters.push(current);
      }
      current = { title: normalizeHeading(line), lines: [] };
      continue;
    }

    current.lines.push(line);
  }

  if (current.lines.some(hasMeaningfulText)) {
    chapters.push(current);
  }

  return chapters.map((chapter, index) => {
    const blocks = toBlocks(chapter.lines);
    return {
      id: `${slugify(chapter.title)}-${index}`,
      title: chapter.title,
      summary: getChapterSummary(blocks),
      blocks,
      tone: chapterTones[index % chapterTones.length],
    };
  });
}

function toBlocks(lines: string[]): TopicBlock[] {
  const blocks: TopicBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2).trim());
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function getChapterSummary(blocks: TopicBlock[]) {
  const firstParagraph = blocks.find((block) => block.type === "paragraph");
  if (firstParagraph?.type === "paragraph") {
    return truncate(firstParagraph.text, 120);
  }

  const firstList = blocks.find((block) => block.type === "list");
  if (firstList?.type === "list") {
    return truncate(firstList.items.join(", "), 120);
  }

  return "Open this chapter to read the key ideas.";
}

function isChapterHeading(line: string) {
  if (line.endsWith(":") || line.endsWith("?")) {
    return true;
  }

  const lettersOnly = line.replace(/[^A-Za-z]/g, "");
  return lettersOnly.length > 3 && line === line.toUpperCase();
}

function normalizeHeading(line: string) {
  return line
    .toLowerCase()
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .replace(/\bTls\b/g, "TLS")
    .replace(/\bSsl\b/g, "SSL")
    .replace(/\bHttp\b/g, "HTTP")
    .replace(/\bCors\b/g, "CORS")
    .replace(/\bOsi\b/g, "OSI");
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function truncate(value: string, maxLength: number) {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function hasMeaningfulText(line: string) {
  return line.trim().length > 0;
}
