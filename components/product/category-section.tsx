import type { CategoryMeta, Product } from "@/types";
import { ProductGrid } from "@/components/product/product-grid";
import { FadeIn } from "@/components/shared/fade-in";

interface CategorySectionProps {
  meta: CategoryMeta;
  products: Product[];
}

export function CategorySection({ meta, products }: CategorySectionProps) {
  return (
    <section id={meta.id} className="scroll-mt-28">
      <FadeIn className="mb-8 flex flex-col gap-2 border-b border-border pb-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {meta.title}
          </h2>
          <span className="text-sm font-medium text-muted-foreground">
            {products.length} {products.length === 1 ? "option" : "options"}
          </span>
        </div>
        <p className="max-w-2xl text-base text-muted-foreground">{meta.blurb}</p>
      </FadeIn>
      <ProductGrid products={products} />
    </section>
  );
}
