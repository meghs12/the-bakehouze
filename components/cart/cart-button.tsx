"use client";

import { ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

export function CartButton({ className }: { className?: string }) {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={`Open cart${count > 0 ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
    >
      <ShoppingBag className="h-5 w-5" />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-accent-foreground tabular-nums shadow-soft"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
