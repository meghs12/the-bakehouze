# The BakeHouze 🍪

A premium, fully responsive home-bakery website for ordering eggless desserts across Bangalore. Customers browse the menu, build a cart (or design a custom cake), and place orders through **WhatsApp** — no online payment required.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **ShadCN-style UI components**.

---

## ✨ Features

- **Warm, boutique aesthetic** — cream palette, Fraunces serif + DM Sans, soft shadows, grain texture, micro-animations
- **Light & true-warm dark mode** (system-aware, toggleable)
- **WhatsApp ordering flow** — cart → checkout form → auto-generated order message → `wa.me` deep link
- **7-step custom cake builder** — weight, flavour, frosting, multi-select toppings, instructions, reference image, WhatsApp quote
- **Persistent cart** via Context API + `localStorage`, with an animated cart drawer
- **Type-safe product database** in a single file — swap in real photos any time
- **SEO-ready** — metadata, Open Graph, `LocalBusiness` + `Bakery` + `FAQPage` JSON-LD, dynamic `sitemap.xml` & `robots.txt`
- **Accessible** — keyboard navigation, ARIA labels, visible focus rings, reduced-motion support
- Fully static — **38 prerendered routes**, including a page per product

---

## 🚀 Getting Started

**Requirements:** Node.js 18.18+ (or 20+) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

> **Note on fonts:** `next/font/google` downloads Fraunces & DM Sans at build time, so the **build needs internet access**. The app falls back to Georgia / system-ui automatically if a font is unavailable.

---

## 🔧 Common Customizations

### Change the WhatsApp number

Everything routes through one constant. Edit `lib/constants.ts`:

```ts
export const SITE = {
  // country code + number, digits only
  whatsappNumber: "916281874741",
  whatsappDisplay: "+91 62818 74741",
  // ...
};
```

### Replace placeholder product images

Every product shows a *"Product Image Coming Soon"* card until you add a photo. To add one:

1. Drop the image into `/public` (e.g. `public/products/og-chocolate-chip.jpg`).
2. Set the `image` field on that product in `lib/products.ts`:

```ts
{
  slug: "og-chocolate-chip",
  name: "The OG Chocolate Chip",
  price: 69,
  image: "/products/og-chocolate-chip.jpg", // ← add this
  // ...
}
```

No component changes needed — the `<ProductImage />` component swaps the placeholder for the photo automatically.

### Edit menu items & prices

All products live in `lib/products.ts` (`PRODUCTS` array). Add, remove, or re-price items there — cards, the menu, product pages, sitemap and cart all update from this single source.

### Change custom-cake options

Edit the option lists in `lib/custom-cakes.ts` (weights, flavours, frostings, toppings).

### Adjust brand colours / theme

Design tokens (HSL) are defined as CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark). Tailwind maps to them in `tailwind.config.ts`.

---

## 📁 Project Structure

```
the-bakehouze/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, JSON-LD, providers, nav/footer
│   ├── page.tsx                # Home (hero, featured, why-us, reviews, CTA, instagram)
│   ├── globals.css             # Design tokens, base styles, placeholder & texture styles
│   ├── not-found.tsx           # Branded 404
│   ├── sitemap.ts              # Dynamic sitemap (static routes + every product)
│   ├── robots.ts               # robots.txt
│   ├── menu/page.tsx           # Full menu, grouped by category w/ jump nav
│   ├── product/[slug]/page.tsx # Product detail (SSG) — generateStaticParams + metadata
│   ├── custom-cakes/page.tsx   # 7-step cake builder
│   ├── about/page.tsx
│   ├── faq/page.tsx            # Accordion + FAQ schema
│   ├── contact/
│   │   ├── page.tsx            # Contact details (server)
│   │   └── contact-form.tsx    # WhatsApp enquiry form (client)
│   ├── cart/page.tsx           # Full cart page
│   └── checkout/page.tsx       # Validated checkout → WhatsApp order
│
├── components/
│   ├── ui/                     # ShadCN-style primitives (button, input, sheet, accordion…)
│   ├── layout/                 # navbar, footer, theme-toggle
│   ├── home/                   # hero, featured-products, why-choose-us, reviews, CTA, gallery
│   ├── product/                # product-card, product-grid, category-section,
│   │                           #   image-placeholder, add-to-cart-button
│   ├── cart/                   # cart-item, cart-button, cart-drawer
│   ├── shared/                 # fade-in, section-heading
│   └── providers/              # theme-provider
│
├── context/
│   └── cart-context.tsx        # Cart state (useReducer) + localStorage + drawer
│
├── lib/
│   ├── products.ts             # 🗃️ Product database + query helpers
│   ├── constants.ts            # 🏷️ Brand/site constants (WhatsApp #, email, socials)
│   ├── whatsapp.ts             # 💬 Order/quote message builders + wa.me link
│   ├── custom-cakes.ts         # Cake builder option sets
│   ├── animations.ts           # Shared Framer Motion variants
│   └── utils.ts                # cn(), formatPrice()
│
├── types/
│   └── index.ts                # Shared TypeScript types
│
├── public/
│   └── favicon.svg             # Cookie + "B" brand mark
│
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 💬 How Ordering Works

There is **no payment gateway**. Both flows generate a plain-text message and open a WhatsApp chat with the bakery:

**Standard order** (`app/checkout/page.tsx` → `buildOrderMessage`)

```
THE BAKEHOUZE ORDER

Customer Details:
Name: …
Phone: …
Email: …
Address: …

Items Ordered:

1. The OG Chocolate Chip
   Qty: 2
   Price: ₹138
…

Subtotal: ₹…

Shipping Charges:
To be calculated separately.

Final Total:
₹… + Shipping

Notes:
…

Please confirm availability and delivery.
```

**Custom cake** (`app/custom-cakes/page.tsx` → `buildCustomCakeMessage`) sends the full spec (weight, flavour, frosting, toppings, instructions) for a quote.

Phone and email are **required** at checkout (validated inline).

---

## 🧱 Tech Stack

| Area        | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 15 (App Router, RSC)                        |
| Language    | TypeScript                                          |
| Styling     | Tailwind CSS + CSS variable design tokens           |
| Animation   | Framer Motion                                       |
| UI          | ShadCN-style components on Radix UI primitives      |
| Icons       | lucide-react                                        |
| Theming     | next-themes                                         |
| Toasts      | sonner                                              |
| Fonts       | Fraunces + DM Sans (`next/font/google`)             |

---

Made with care for **The BakeHouze** — *Freshly Baked. Made to Order. Pure Indulgence.*
