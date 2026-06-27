// ────────────────────────────────────────────────────────────────────────────
// Option sets for the custom cake builder. Edit here to change the form choices.
// ────────────────────────────────────────────────────────────────────────────

export const CAKE_WEIGHTS = [
  "500g",
  "1kg",
  "1.5kg",
  "2kg",
  "3kg",
  "4kg",
  "5kg",
] as const;

export const CAKE_FLAVOURS = [
  "Chocolate Truffle",
  "Belgian Chocolate",
  "Red Velvet",
  "Vanilla Bean",
  "Black Forest",
  "White Forest",
  "Butterscotch",
  "Biscoff",
  "Nutella",
  "Blueberry",
  "Strawberry",
  "Ferrero Rocher",
  "Coffee Mocha",
] as const;

export const CAKE_FROSTINGS = [
  "Whipped Cream",
  "Buttercream",
  "Cream Cheese",
  "Ganache",
] as const;

export const CAKE_TOPPINGS = [
  "Fresh Fruits",
  "Oreos",
  "KitKat",
  "Ferrero Rocher",
  "Chocolate Shards",
  "Biscoff Crumbs",
  "Sprinkles",
  "Macarons",
  "Dry Fruits",
  "Flowers",
] as const;

export const CUSTOM_CAKE_STEPS = [
  { id: 1, title: "Cake Weight", hint: "How much cake do you need?" },
  { id: 2, title: "Flavour", hint: "Pick the heart of your cake." },
  { id: 3, title: "Frosting", hint: "Choose your finish." },
  { id: 4, title: "Toppings", hint: "Pile on the extras — choose any." },
  { id: 5, title: "Special Instructions", hint: "Message, theme, allergies…" },
  { id: 6, title: "Reference Image", hint: "Show us the vibe (optional)." },
  { id: 7, title: "Request Quote", hint: "We'll confirm price on WhatsApp." },
] as const;
