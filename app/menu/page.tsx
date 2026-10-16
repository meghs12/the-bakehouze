
import type { Metadata } from "next";
import Link from "next/link";

import {
  CATEGORY_META,
  PRODUCTS,
  getProductsByCategory,
} from "@/lib/products";
import { SectionHeading } from "@/components/shared/section-heading";
import { CategorySection } from "@/components/product/category-section";
import { FadeIn } from "@/components/shared/fade-in";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse The BakeHouze menu — eggless cookies, Basque cheesecake slices and rich brownie slabs, freshly baked to order across Bangalore.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const weeklySpecials = PRODUCTS.filter(
    (product) => product.isWeeklySpecial
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <SectionHeading
        eyebrow="The Full Menu"
        title="Everything we bake, eggless"
        subtitle="Small-batch and made to order. Pick your favourites, drop them in the cart, and we'll confirm everything over WhatsApp."
        align="center"
        className="mx-auto mb-10"
      />

      {/* Category jump bar */}
      <FadeIn className="mb-16 flex flex-wrap items-center justify-center gap-2">
        {CATEGORY_META.map((cat) => (
          <Link
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            {cat.title}
          </Link>
        ))}
      </FadeIn>

      <div className="flex flex-col gap-20">
        {/* Week's Specials */}
        {weeklySpecials.length > 0 && (
          <section id="weeks-specials" className="scroll-mt-28">
            <SectionHeading
              eyebrow="Limited-time favourites"
              title="This Week at The BakeHouze"
              subtitle="A few special treats we're highlighting this week."
              align="center"
              className="mb-10"
            />

            <CategorySection
              meta={{
  id: weeklySpecials[0].category,
  title: "Week's Specials",
  blurb: "Handpicked treats for this week.",
}}

              products={weeklySpecials}
            />
          </section>
        )}

        {/* Regular menu categories */}
        {CATEGORY_META.map((cat) => (
          <CategorySection
            key={cat.id}
            meta={cat}
            products={getProductsByCategory(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}

