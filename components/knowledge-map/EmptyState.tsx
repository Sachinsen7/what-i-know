import { BookOpenText } from "lucide-react";

export function EmptyState() {
  return (
    <div className="knowledge-empty portfolio-subcard portfolio-stack-sm">
      <div className="flex items-center gap-[var(--portfolio-stack-gap-sm)] knowledge-accent">
        <BookOpenText className="h-4 w-4" />
        <span className="text-sm font-medium">Nothing mapped yet</span>
      </div>
      <p className="m-0 text-sm leading-7 knowledge-muted">
        This category is ready for the next useful YouTube rabbit hole.
      </p>
    </div>
  );
}
