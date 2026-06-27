"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/product/image-placeholder";

interface CartItemProps {
  item: CartItemType;
  image?: string;
  compact?: boolean;
}

export function CartItem({ item, image, compact = false }: CartItemProps) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4">
      <div className={compact ? "w-16 shrink-0" : "w-20 shrink-0"}>
        <ProductImage src={image} alt={item.name} className="rounded-lg" />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-display text-base font-semibold leading-snug">
              {item.name}
            </h4>
            {item.weight && (
              <span className="text-xs text-muted-foreground">{item.weight}</span>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.slug)}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center rounded-full border border-border bg-secondary/60">
            <button
              type="button"
              onClick={() => decrement(item.slug)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Decrease ${item.name} quantity`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span
              className="w-8 text-center text-sm font-semibold tabular-nums"
              aria-label={`Quantity: ${item.quantity}`}
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => increment(item.slug)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Increase ${item.name} quantity`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          <span className="font-display text-base font-semibold tabular-nums">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
