"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { portfolioCardReveal, portfolioCardTransition } from "@/components/ui/portfolio-motion";

type PortfolioStructureCardProps = Omit<HTMLMotionProps<"article">, "children" | "title"> & {
  eyebrow?: ReactNode;
  meta?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  interactive?: boolean;
};

const hoverTransition = { duration: 0.2, ease: "easeOut" } as const;
const tapTransition = { duration: 0.18, ease: "easeOut" } as const;

export const PortfolioStructureCard = forwardRef<HTMLElement, PortfolioStructureCardProps>(
  (
    {
      eyebrow,
      meta,
      title,
      description,
      media,
      actions,
      footer,
      children,
      interactive = true,
      className,
      ...props
    },
    ref
  ) => (
    <motion.article
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={portfolioCardReveal}
      transition={portfolioCardTransition}
      whileHover={interactive ? { y: -2, transition: hoverTransition } : undefined}
      whileTap={interactive ? { y: 0, scale: 0.98, transition: tapTransition } : undefined}
      className={cn(
        "portfolio-surface portfolio-card",
        interactive && "portfolio-surface--interactive",
        className
      )}
      {...props}
    >
      {(eyebrow || meta || actions || title || description) && (
        <header className="portfolio-card__header">
          {(eyebrow || meta || actions) && (
            <div className="portfolio-card__topline">
              <div className="portfolio-card__header-group">
                {eyebrow ? <span className="portfolio-chip">{eyebrow}</span> : null}
                {meta ? <span className="portfolio-card__meta">{meta}</span> : null}
              </div>
              {actions ? <div className="portfolio-card__actions">{actions}</div> : null}
            </div>
          )}
          {title ? <h3 className="portfolio-card__title">{title}</h3> : null}
          {description ? <p className="portfolio-card__description">{description}</p> : null}
        </header>
      )}
      {media ? <div className="portfolio-media-frame">{media}</div> : null}
      {children ? <div className="portfolio-card__body">{children}</div> : null}
      {footer ? <footer className="portfolio-card__footer">{footer}</footer> : null}
    </motion.article>
  )
);

PortfolioStructureCard.displayName = "PortfolioStructureCard";
