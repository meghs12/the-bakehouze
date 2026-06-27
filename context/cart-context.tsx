"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types";
import { getCartCount, getCartSubtotal } from "@/lib/whatsapp";

// ────────────────────────────────────────────────────────────────────────────
// Cart state is managed with useReducer and persisted to localStorage so a
// customer's basket survives refreshes. The drawer's open/closed state lives
// here too, so any "Add to Cart" button can pop the drawer open.
// ────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = "bakehouze-cart-v1";

type Action =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD"; product: Product; quantity: number }
  | { type: "REMOVE"; slug: string }
  | { type: "SET_QTY"; slug: string; quantity: number }
  | { type: "INCREMENT"; slug: string }
  | { type: "DECREMENT"; slug: string }
  | { type: "CLEAR" };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "HYDRATE":
      return action.items;

    case "ADD": {
      const existing = state.find((i) => i.slug === action.product.slug);
      if (existing) {
        return state.map((i) =>
          i.slug === action.product.slug
            ? { ...i, quantity: i.quantity + action.quantity }
            : i
        );
      }
      const { slug, name, price, weight } = action.product;
      return [...state, { slug, name, price, weight, quantity: action.quantity }];
    }

    case "REMOVE":
      return state.filter((i) => i.slug !== action.slug);

    case "SET_QTY":
      return state
        .map((i) =>
          i.slug === action.slug
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        )
        .filter((i) => i.quantity > 0);

    case "INCREMENT":
      return state.map((i) =>
        i.slug === action.slug ? { ...i, quantity: i.quantity + 1 } : i
      );

    case "DECREMENT":
      return state
        .map((i) =>
          i.slug === action.slug ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  increment: (slug: string) => void;
  decrement: (slug: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) dispatch({ type: "HYDRATE", items: parsed });
      }
    } catch {
      // Corrupt storage — start with an empty cart.
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist on every change (after the initial hydrate).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be unavailable (private mode) — fail silently.
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: getCartCount(items),
      subtotal: getCartSubtotal(items),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, quantity = 1) =>
        dispatch({ type: "ADD", product, quantity }),
      removeItem: (slug) => dispatch({ type: "REMOVE", slug }),
      setQuantity: (slug, quantity) =>
        dispatch({ type: "SET_QTY", slug, quantity }),
      increment: (slug) => dispatch({ type: "INCREMENT", slug }),
      decrement: (slug) => dispatch({ type: "DECREMENT", slug }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
