import type { Variants } from "framer-motion";

// ────────────────────────────────────────────────────────────────────────────
// Reusable Framer Motion variants. Centralised so motion feels consistent.
// ────────────────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const; // gentle, premium ease-out

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Parent that staggers its children (use with fadeInUp items). */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
