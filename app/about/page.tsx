import type { Metadata } from "next";
import Link from "next/link";
import { EggOff, Croissant, Sparkles, Heart, MapPin } from "lucide-react";

import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind The BakeHouze — a home bakery in Bangalore crafting premium eggless cookies, cheesecakes, brownies and custom cakes in small, lovingly made batches.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: EggOff,
    title: "Eggless, always",
    body: "Every recipe is developed from the ground up to be fully eggless — never an afterthought, never a compromise on texture or taste.",
  },
  {
    icon: Croissant,
    title: "Baked to order",
    body: "We don't stock a shelf. Each order is baked fresh for you, so it arrives at the peak of softness and flavour.",
  },
  {
    icon: Sparkles,
    title: "Honest ingredients",
    body: "Belgian chocolate, real Biscoff, vanilla bean, good butter and quality cream cheese. The good stuff, every time.",
  },
  {
    icon: Heart,
    title: "Made by hand",
    body: "A home kitchen, small batches and genuine care folded into every cookie, slab and cake we send out.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <SectionHeading
        eyebrow="Our Story"
        title="A little home bakery with big flavour"
        subtitle="The BakeHouze started with a simple belief — that eggless desserts should never feel like a substitute."
        align="center"
        className="mx-auto mb-14"
      />

      <FadeIn className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          What began as weekend baking for friends and family quickly turned
          into something more. Word spread about the thick, gooey NYC-style
          cookies and the silky burnt Basque cheesecake — all completely
          eggless, none of them tasting like they were missing a thing.
        </p>
        <p>
          Today, The BakeHouze bakes across {SITE.serviceArea.toLowerCase()},
          one fresh order at a time. We&apos;ve grown, but the heart of it
          hasn&apos;t changed: small batches, premium ingredients, and a real
          person behind every box. No factory lines, no shortcuts — just
          desserts we&apos;d proudly serve at our own table.
        </p>
        <p>
          Whether it&apos;s a midnight cookie craving or a show-stopping
          celebration cake, we&apos;d love to bake it for you.
        </p>
      </FadeIn>

      {/* Values */}
      <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {VALUES.map((value, i) => {
          const Icon = value.icon;
          return (
            <FadeIn
              key={value.title}
              delay={i * 0.06}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{value.body}</p>
            </FadeIn>
          );
        })}
      </div>

      {/* Service area + CTA */}
      <FadeIn className="mt-16 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
              <MapPin className="h-4 w-4" aria-hidden />
              Now serving {SITE.serviceArea}
            </span>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Hungry yet? Let&apos;s bake something.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href="/menu">Shop Desserts</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/custom-cakes">Custom Cakes</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
