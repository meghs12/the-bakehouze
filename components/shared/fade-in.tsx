"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Pixels to translate up from. Default 24. */
  y?: number;
}

/**
 * Reveals its children with a soft fade + rise the first time they scroll
 * into view. Respects prefers-reduced-motion via the global CSS override.
 */
export function FadeIn({ children, delay = 0, className, y = 24 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export { fadeInUp };
