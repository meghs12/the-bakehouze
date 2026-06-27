"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";

import { useCart } from "@/context/cart-context";
import type { CheckoutDetails } from "@/types";
import { formatPrice } from "@/lib/utils";
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type FieldErrors = Partial<Record<"phone" | "email", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  const [details, setDetails] = useState<CheckoutDetails>({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  function update<K extends keyof CheckoutDetails>(
    key: K,
    value: CheckoutDetails[K]
  ) {
    setDetails((prev) => ({ ...prev, [key]: value }));
    if (key === "phone" || key === "email") {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!details.phone.trim()) {
      next.phone = "Phone number is required.";
    } else if (!PHONE_RE.test(details.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!details.email.trim()) {
      next.email = "Email address is required.";
    } else if (!EMAIL_RE.test(details.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit() {
    if (items.length === 0) return;
    if (!validate()) return;

    const link = buildWhatsAppLink(buildOrderMessage(items, details));
    window.open(link, "_blank", "noopener,noreferrer");
  }

  // Empty cart guard
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-20 text-center shadow-soft">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent">
            <ShoppingBag className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="font-display text-3xl font-semibold">
            Nothing to check out
          </h1>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Add a few treats to your cart and come right back.
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
      <h1 className="mb-10 font-display text-4xl font-semibold sm:text-5xl">
        Checkout
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-xl font-semibold">
              Your details
            </h2>
            <p className="mt-1 mb-6 text-sm text-muted-foreground">
              We&apos;ll use these to confirm your order on WhatsApp. Phone and
              email are required.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={details.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    value={details.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    value={details.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jane@email.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="address">Delivery address</Label>
                <Textarea
                  id="address"
                  rows={3}
                  value={details.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="Flat / house no, street, area, Bangalore, pincode"
                  autoComplete="street-address"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="notes">Additional notes</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  value={details.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Preferred delivery date/time, message on cake, allergies…"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-semibold">Your order</h2>

            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-foreground/85">
                    {item.name}
                    {item.weight ? ` (${item.weight})` : ""}
                    <span className="text-muted-foreground"> × {item.quantity}</span>
                  </span>
                  <span className="shrink-0 font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <Separator className="my-5" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>

            <div className="mt-3 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground">
              Shipping charges will be added separately and confirmed on
              WhatsApp.
            </div>

            <Separator className="my-5" />

            <div className="flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span className="font-display text-xl font-semibold text-accent">
                {formatPrice(subtotal)}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  + shipping
                </span>
              </span>
            </div>

            <Button
              onClick={handleSubmit}
              variant="whatsapp"
              size="lg"
              className="mt-6 w-full"
            >
              <MessageCircle aria-hidden />
              Order via WhatsApp
            </Button>

            <Button asChild variant="ghost" className="mt-2 w-full">
              <Link href="/cart">
                <ArrowLeft aria-hidden />
                Back to cart
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
