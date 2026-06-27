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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
    >
      <Link
        href={`/product/${product.slug}`}
        className="relative block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${product.name}`}
      >
        <ProductImage src={product.image} alt={product.name} priority={priority} />

        <div className="absolute left-2 top-2 flex flex-col gap-1.5">
          {product.isBestseller && (
            <Badge variant="accent" className="gap-1 shadow-soft">
              <Star className="h-3 w-3 fill-current" /> Bestseller
            </Badge>
          )}
          {product.isEggless && (
            <Badge variant="soft" className="backdrop-blur-sm">
              Eggless
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">
            <Link
              href={`/product/${product.slug}`}
              className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
            >
              {product.name}
            </Link>
          </h3>
          {product.weight && (
            <span className="mt-1 shrink-0 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {product.weight}
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 pt-2">
          <span className="font-display text-xl font-semibold text-foreground">
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
