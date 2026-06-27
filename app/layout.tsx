import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { SITE } from "@/lib/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { CartProvider } from "@/context/cart-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import "./globals.css";

// Warm, artisanal serif for headings + clean sans for body.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The BakeHouze | Premium Eggless Desserts in Bangalore",
    template: "%s | The BakeHouze",
  },
  description:
    "Order freshly baked eggless cookies, brownies, cheesecakes, and custom cakes across Bangalore.",
  keywords: [
    "eggless desserts Bangalore",
    "NYC cookies Bangalore",
    "Basque cheesecake",
    "brownies Bangalore",
    "custom cakes Bangalore",
    "birthday cakes",
    "The BakeHouze",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "The BakeHouze | Premium Eggless Desserts in Bangalore",
    description:
      "Order freshly baked eggless cookies, brownies, cheesecakes, and custom cakes across Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The BakeHouze | Premium Eggless Desserts in Bangalore",
    description:
      "Order freshly baked eggless cookies, brownies, cheesecakes, and custom cakes across Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
    { media: "(prefers-color-scheme: dark)", color: "#191108" },
  ],
};

// Local Business + Bakery structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: `+${SITE.whatsappNumber}`,
  priceRange: "₹₹",
  servesCuisine: "Desserts",
  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [SITE.instagram],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Eggless cookies, brownies, cheesecakes and custom cakes",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <CartDrawer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                classNames: {
                  toast:
                    "!bg-card !text-card-foreground !border-border !rounded-2xl !shadow-soft-lg",
                  description: "!text-muted-foreground",
                },
              }}
            />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
