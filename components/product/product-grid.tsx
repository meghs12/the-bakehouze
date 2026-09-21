import type { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
  priorityCount?: number;
}

export function ProductGrid({
  products,
  className,
  priorityCount = 0,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {products.map((product, i) => (
        <ProductCard
          key={product.slug}
          product={product}
          index={i}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}