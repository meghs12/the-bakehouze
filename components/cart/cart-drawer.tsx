"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/components/cart/cart-item";

export function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-accent" />
            Your Cart
            {count > 0 && (
              <span className="text-sm font-normal text-muted-foreground">
                ({count} {count === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review the desserts in your cart and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-9 w-9 text-accent" />
            </div>
            <div className="space-y-1">
              <p className="font-display text-lg font-semibold">
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground">
                Time to add something sweet.
              </p>
            </div>
            <Button asChild onClick={closeCart} className="mt-2">
              <Link href="/menu">Browse the Menu</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((item) => (
                <CartItem
                  key={item.slug}
                  item={item}
                  image={getProductBySlug(item.slug)?.image}
                  compact
                />
              ))}
            </div>

            <div className="border-t border-border bg-card px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg font-semibold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Shipping charges will be added separately.
              </p>
              <Separator className="my-4" />
              <div className="flex flex-col gap-2">
                <Button asChild size="lg" onClick={closeCart} className="w-full">
                  <Link href="/checkout">
                    Checkout <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  onClick={closeCart}
                  className="w-full"
                >
                  <Link href="/cart">View full cart</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
