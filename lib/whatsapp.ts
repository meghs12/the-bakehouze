import type { CartItem, CheckoutDetails, CustomCakeSelection } from "@/types";
import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

// ────────────────────────────────────────────────────────────────────────────
// WhatsApp message builder utility
// Produces the exact order/quote text and a ready-to-open wa.me deep link.
// No payment is taken on-site — orders are confirmed over WhatsApp chat.
// ────────────────────────────────────────────────────────────────────────────

/** Total of all line items (pre-shipping). */
export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/** Total number of units across all line items (for the cart badge). */
export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

/** Build the plain-text order message for a standard cart checkout. */
export function buildOrderMessage(
  items: CartItem[],
  details: CheckoutDetails
): string {
  const subtotal = getCartSubtotal(items);

  const itemLines = items
    .map((item, i) => {
      const label = item.weight ? `${item.name} (${item.weight})` : item.name;
      return [
        `${i + 1}. ${label}`,
        `   Qty: ${item.quantity}`,
        `   Price: ${formatPrice(item.price * item.quantity)}`,
      ].join("\n");
    })
    .join("\n\n");

  return [
    "THE BAKEHOUZE ORDER",
    "",
    "Customer Details:",
    `Name: ${details.name || "-"}`,
    `Phone: ${details.phone || "-"}`,
    `Email: ${details.email || "-"}`,
    `Address: ${details.address || "-"}`,
    "",
    "Items Ordered:",
    "",
    itemLines,
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    "",
    "Shipping Charges:",
    "To be calculated separately.",
    "",
    "Final Total:",
    `${formatPrice(subtotal)} + Shipping`,
    "",
    "Notes:",
    details.notes?.trim() ? details.notes.trim() : "-",
    "",
    "Please confirm availability and delivery.",
  ].join("\n");
}

/** Build the plain-text quote request for a custom cake. */
export function buildCustomCakeMessage(s: CustomCakeSelection): string {
  const toppings =
    s.toppings.length > 0 ? s.toppings.join(", ") : "None selected";

  return [
    "THE BAKEHOUZE — CUSTOM CAKE QUOTE",
    "",
    `Weight: ${s.weight || "-"}`,
    `Flavour: ${s.flavour || "-"}`,
    `Frosting: ${s.frosting || "-"}`,
    `Toppings: ${toppings}`,
    "",
    "Special Instructions:",
    s.instructions?.trim() ? s.instructions.trim() : "-",
    "",
    s.referenceImageName
      ? `Reference image: ${s.referenceImageName} (will be shared in chat)`
      : "Reference image: none",
    "",
    "Please share availability, pricing and delivery for this custom cake.",
  ].join("\n");
}

/** Wrap any message body in a tappable wa.me deep link. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
