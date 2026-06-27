import Link from "next/link";
import { ArrowRight, Cake } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function CustomCakesCTA() {
  return (
    <section className="container py-20 md:py-28">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-8 py-14 text-primary-foreground shadow-soft-lg sm:px-14 md:py-20">
          {/* Decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
                <Cake className="h-3.5 w-3.5" /> Celebration Cakes
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Dreaming up a cake? Let&apos;s build it together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                Pick the weight, flavour, frosting and toppings — add a reference
                photo — and we&apos;ll craft a one-of-a-kind cake for your moment.
                Get a personalised quote over WhatsApp in minutes.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="accent">
                  <Link href="/custom-cakes">
                    Start your cake <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Flavour chips */}
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              {[
                "Ferrero Rocher",
                "Red Velvet",
                "Belgian Chocolate",
                "Biscoff",
                "Black Forest",
                "Butterscotch",
                "Nutella",
              ].map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-sm font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
