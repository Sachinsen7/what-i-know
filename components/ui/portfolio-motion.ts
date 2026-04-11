export const portfolioCardReveal = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 1.01,
  },
};

export const portfolioCardTransition = {
  duration: 0.2,
  ease: "easeInOut",
} as const;

export const portfolioExpandTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const portfolioStagger = {
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};
