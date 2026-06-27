"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cake, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            100% Eggless · Made in Bangalore
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Freshly baked.
            <br />
            Made to order.
            <br />
            <span className="text-accent italic">Pure indulgence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Premium eggless cookies, Basque cheesecakes, fudgy brownies and
            custom celebration cakes — crafted in small batches and delivered
            fresh across Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/menu">
                Shop Desserts <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/custom-cakes">
                <Cake className="h-4 w-4" /> Custom Cakes
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </span>
              Loved across Bangalore
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>Freshly baked to order</span>
          </motion.div>
        </div>

        {/* Signature illustrated centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
        >
          {/* Plate */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary to-card shadow-soft-lg" />
          <div className="absolute inset-10 rounded-full border border-dashed border-accent/30" />

          {/* The cookie */}
          <div className="relative h-56 w-56 animate-float sm:h-64 sm:w-64">
            <CookieSVG />
          </div>

          {/* Floating chips */}
          <FloatingChip
            className="left-0 top-8 animate-float-slow"
            label="NYC Cookies"
            sub="from ₹69"
          />
          <FloatingChip
            className="right-0 top-24 [animation-delay:1.5s] animate-float"
            label="Basque Slice"
            sub="₹170"
            accent
          />
          <FloatingChip
            className="bottom-6 left-10 [animation-delay:0.8s] animate-float-slow"
            label="Custom Cakes"
            sub="Made to order"
          />
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="container">
        <div className="rule-dot" />
      </div>
    </section>
  );
}

function FloatingChip({
  className = "",
  label,
  sub,
  accent = false,
}: {
  className?: string;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`absolute z-10 rounded-2xl border border-border bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur ${className}`}
    >
      <p className="font-display text-sm font-semibold leading-tight">{label}</p>
      <p
        className={`text-xs ${accent ? "text-accent" : "text-muted-foreground"}`}
      >
        {sub}
      </p>
    </div>
  );
}

/** Decorative chocolate-chip cookie drawn in SVG (no photo needed). */
function CookieSVG() {
  const chips = [
    [46, 54],
    [78, 70],
    [62, 96],
    [98, 100],
    [120, 72],
    [86, 120],
    [110, 130],
    [54, 86],
    [134, 100],
  ];
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full drop-shadow-[0_18px_30px_hsl(25_40%_25%/0.25)]">
      <defs>
        <radialGradient id="dough" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="hsl(35 70% 78%)" />
          <stop offset="60%" stopColor="hsl(30 55% 66%)" />
          <stop offset="100%" stopColor="hsl(26 48% 54%)" />
        </radialGradient>
        <radialGradient id="chip" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="hsl(24 45% 32%)" />
          <stop offset="100%" stopColor="hsl(22 50% 18%)" />
        </radialGradient>
      </defs>
      <circle cx="90" cy="92" r="82" fill="url(#dough)" stroke="hsl(26 45% 48%)" strokeWidth="2" />
      <circle cx="90" cy="92" r="82" fill="none" stroke="hsl(35 80% 85% / 0.5)" strokeWidth="3" strokeDasharray="2 7" />
      {chips.map(([cx, cy], i) => (
        <g key={i}>
          <ellipse
            cx={cx}
            cy={cy}
            rx={9 + (i % 3)}
            ry={7 + (i % 2)}
            fill="url(#chip)"
            transform={`rotate(${i * 35} ${cx} ${cy})`}
          />
          <circle cx={cx - 2} cy={cy - 2} r="2" fill="hsl(35 60% 70% / 0.6)" />
        </g>
      ))}
    </svg>
  );
}
