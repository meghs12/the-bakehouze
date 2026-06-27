"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps extends Omit<ButtonProps, "onClick"> {
  product: Product;
  quantity?: number;
  label?: string;
  /** Pop the cart drawer open after adding. Default false. */
  openOnAdd?: boolean;
}

export function AddToCartButton({
  product,
  quantity = 1,
  label = "Add to Cart",
  openOnAdd = false,
  className,
  variant = "default",
  ...props
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    toast.success(`${product.name} added to cart`, {
      description: product.weight ? product.weight : undefined,
    });
    if (openOnAdd) openCart();
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <Button
      type="button"
      variant={variant}
      onClick={handleAdd}
      aria-label={`Add ${product.name} to cart`}
      className={cn(className)}
      {...props}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" /> Added
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" /> {label}
        </>
      )}
    </Button>
  );
}
