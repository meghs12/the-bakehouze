import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Crowd Favourites"
        title="The ones everyone orders"
        subtitle="A taste of the bakery's most-loved bakes — from gooey NYC cookies to our signature Basque slice."
      />
      <div className="mt-12">
        <ProductGrid products={featured} priorityCount={4} />
      </div>
      <FadeIn className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/menu">
            View the full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </FadeIn>
    </section>
  );
}
