import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

interface Review {
  name: string;
  area: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    name: "Ananya R.",
    area: "Indiranagar",
    rating: 5,
    text: "The Biscoff cookie is unreal — crisp edges, molten middle. You genuinely cannot tell it's eggless. Now a weekly habit.",
  },
  {
    name: "Karthik M.",
    area: "Koramangala",
    rating: 5,
    text: "Ordered the Basque cheesecake for an anniversary and it stole the show. Caramelised top, silky centre. Will be back.",
  },
  {
    name: "Sneha & Dev",
    area: "Whitefield",
    rating: 5,
    text: "Got a custom Ferrero Rocher cake for our daughter's birthday. Beautiful, fresh, and exactly like the reference we sent.",
  },
  {
    name: "Faisal A.",
    area: "HSR Layout",
    rating: 5,
    text: "The triple chocolate brownie slab is dangerously good. Fudgy, rich, and arrived perfectly fresh. Packaging was lovely too.",
  },
  {
    name: "Meghana P.",
    area: "Jayanagar",
    rating: 5,
    text: "Finally, eggless desserts that don't feel like a compromise. The cookies n cream is my comfort order now.",
  },
  {
    name: "Rohan T.",
    area: "Bellandur",
    rating: 5,
    text: "Ordering over WhatsApp was so easy and they confirmed within minutes. Quality is consistently excellent.",
  },
];

export function Reviews() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Kind Words"
        title="Sweet things people say"
        subtitle="Real reactions from dessert tables across Bangalore."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <FadeIn key={review.name} delay={(i % 3) * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-8 w-8 text-accent/30" aria-hidden />
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
                {review.text}
              </blockquote>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <figcaption>
                  <p className="font-display text-sm font-semibold">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.area}</p>
                </figcaption>
                <div className="flex" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
