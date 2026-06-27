import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (handles conflicting utilities). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a whole-rupee amount as ₹1,234 (Indian digit grouping). */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
