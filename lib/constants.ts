// ────────────────────────────────────────────────────────────────────────────
// Brand-wide constants. Update these in one place to re-skin contact details.
// ────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "The BakeHouze",
  tagline: "Freshly Baked. Made to Order. Pure Indulgence.",
  description:
    "Premium eggless desserts — NYC-style thick cookies, Basque cheesecakes, brownies, cupcakes, birthday cakes and custom celebration cakes. Freshly prepared to order across Bangalore.",
  serviceArea: "Entire Bangalore",
  url: "https://the-bakehouze-eosin.vercel.app/menu",
  email: "meghamurari12@gmail.com",
  // Placeholder WhatsApp number (country code + number, digits only).
  whatsappNumber: "916376395531",
  whatsappDisplay: "+91 63763 95531",
  instagram: "https://instagram.com/the.bakehouze",
  instagramHandle: "@the.bakehouze",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/custom-cakes", label: "Custom Cakes" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Eggless",
    description:
      "Every recipe is crafted fully eggless — without ever compromising on richness, texture or taste.",
    icon: "EggOff",
  },
  {
    title: "Freshly Baked To Order",
    description:
      "Nothing sits on a shelf. We bake each order fresh so it reaches you at its absolute best.",
    icon: "Croissant",
  },
  {
    title: "Premium Ingredients",
    description:
      "Belgian chocolate, real Biscoff, vanilla bean and quality butter. We never cut corners.",
    icon: "Sparkles",
  },
  {
    title: "Home Crafted With Love",
    description:
      "A home kitchen, small batches and real attention to detail in every single dessert.",
    icon: "Heart",
  },
] as const;
