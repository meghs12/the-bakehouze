// ────────────────────────────────────────────────────────────────────────────
// Shared application types for The BakeHouze
// ────────────────────────────────────────────────────────────────────────────

export type ProductCategory =
  | "cookies"
  | "cheesecake"
  | "brownies"
  | "cookie-tins"
  | "banana-bread"
  | "tiramisu"
  | "gifting";

export interface Product {
  /** URL-safe unique id, used for routing (/product/[slug]) and cart keys */
  slug: string;
  name: string;
  /** Price in INR (whole rupees) */
  price: number;
  category: ProductCategory;
  /** Short marketing line shown on cards & product page */
  description: string;
  /** Longer copy shown only on the product detail page */
  longDescription?: string;
  /** Optional weight/size label, e.g. "250g" or "Slice" */
  weight?: string;
  /** Marketing flags used for badges & the featured rail */
  isEggless?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
  /**
   * Path to a real product photo once available, relative to /public.
   * Leave undefined to render the "Product Image Coming Soon" placeholder.
   */
  image?: string;
}

export interface CategoryMeta {
  id: ProductCategory;
  title: string;
  blurb: string;
}

// ── Cart ────────────────────────────────────────────────────────────────────

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  weight?: string;
}

export interface CheckoutDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

// ── Custom cakes ────────────────────────────────────────────────────────────

export interface CustomCakeSelection {
  weight: string;
  flavour: string;
  frosting: string;
  toppings: string[];
  instructions: string;
  referenceImageName?: string;
}
