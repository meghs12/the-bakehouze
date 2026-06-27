import { EggOff, Croissant, Sparkles, Heart, type LucideIcon } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const ICONS: Record<string, LucideIcon> = {
  EggOff,
  Croissant,
  Sparkles,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why The BakeHouze"
          title="Made the way it should be"
          subtitle="No shortcuts, no preservatives, no eggs. Just honest, small-batch baking."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Heart;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
