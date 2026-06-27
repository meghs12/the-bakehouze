import { Instagram } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

// Placeholder Instagram tiles. Replace each `label` block with a real photo
// (e.g. an <Image>) once you have shots — the grid layout stays the same.
const TILES = [
  "Fresh from the oven",
  "Basque, caramelised",
  "Cookie stacks",
  "Birthday in Bangalore",
  "Brownie close-up",
  "Behind the bake",
];

export function InstagramGallery() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="On Instagram"
        title={SITE.instagramHandle}
        subtitle="A peek into the kitchen. Follow along for fresh bakes, new flavours and behind-the-scenes moments."
      />

      <FadeIn className="mt-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TILES.map((label, i) => (
            <a
              key={i}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-dashed border-accent/40 bg-secondary text-center"
              aria-label={`${label} — view on Instagram`}
            >
              <div className="flex flex-col items-center gap-2 px-2">
                <Instagram className="h-6 w-6 text-accent/60 transition-transform group-hover:scale-110" />
                <span className="text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/70 group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-8 flex justify-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Instagram className="h-4 w-4 text-accent" />
          Follow {SITE.instagramHandle}
        </a>
      </FadeIn>
    </section>
  );
}
