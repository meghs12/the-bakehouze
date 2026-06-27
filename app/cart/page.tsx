"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug } from "@/lib/products";
import { CartItem } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { items, subtotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-20 text-center shadow-soft">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent">
            <ShoppingBag className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="font-display text-3xl font-semibold">
            Your cart is empty
          </h1>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Looks like you haven&apos;t added anything yet. Let&apos;s fix that.
          </p>
          <Button asChild variant="accent" size="lg" className="mt-8">
            <Link href="/menu">Browse the menu</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Your Cart
        </h1>
        <span className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
        {/* Items */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-border rounded-3xl border border-border bg-card px-5 shadow-soft sm:px-6">
            {items.map((item) => (
              <li key={item.slug} className="py-5">
                <CartItem
                  item={item}
                  image={getProductBySlug(item.slug)?.image}
                />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Button asChild variant="ghost">
              <Link href="/menu">
                <ArrowLeft aria-hidden />
                Continue shopping
              </Link>
            </Button>
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 aria-hidden />
              Clear cart
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>

            <div className="mt-3 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground">
              Shipping charges will be added separately based on your delivery
              location in Bangalore.
            </div>

            <Separator className="my-5" />

            <div className="flex items-center justify-between">
              <span className="font-medium">Estimated total</span>
              <span className="font-display text-xl font-semibold text-accent">
                {formatPrice(subtotal)}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  + shipping
                </span>
              </span>
            </div>

            <Button asChild variant="accent" size="lg" className="mt-6 w-full">
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight aria-hidden />
              </Link>
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              You&apos;ll confirm your order over WhatsApp — no online payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
