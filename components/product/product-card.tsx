"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/product/image-placeholder";
import { AddToCartButton } from "@/components/product/add-to-cart-button";

interface ProductCardProps {
  product: Product;
  index?: number;
  priority?: boolean;
}

export function ProductCard({ product, index = 0, priority }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.06, 0.4),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-2 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:rounded-2xl sm:p-3"
    >
      <Link
        href={`/product/${product.slug}`}
        className="relative block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-xl"
        aria-label={`View ${product.name}`}
      >
        <ProductImage src={product.image} alt={product.name} priority={priority} />

        <div className="absolute left-1.5 top-1.5 flex flex-col gap-1 sm:left-2 sm:top-2 sm:gap-1.5">
          {product.isBestseller && (
            <Badge variant="accent" className="gap-1 px-1.5 py-0 text-[10px] shadow-soft sm:px-2 sm:py-0.5 sm:text-xs">
              <Star className="h-2.5 w-2.5 fill-current sm:h-3 sm:w-3" /> Bestseller
            </Badge>
          )}
          {product.isEggless && (
            <Badge variant="soft" className="px-1.5 py-0 text-[10px] backdrop-blur-sm sm:px-2 sm:py-0.5 sm:text-xs">
              Eggless
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-2 sm:px-2 sm:pt-4">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="font-display text-sm font-semibold leading-snug sm:text-lg">
            <Link
              href={`/product/${product.slug}`}
              className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
            >
              {product.name}
            </Link>
          </h3>
          {product.weight && (
            <span className="mt-0.5 shrink-0 rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:mt-1 sm:px-2 sm:text-xs">
              {product.weight}
            </span>
          )}
        </div>

        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground sm:mt-2 sm:line-clamp-2 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-2 flex items-center justify-between gap-2 pt-1 sm:mt-4 sm:gap-3 sm:pt-2">
          <span className="font-display text-base font-semibold text-foreground sm:text-xl">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton
            product={product}
            size="sm"
            label="Add"
            openOnAdd
          />
        </div>
      </div>
    </motion.article>
  );
}