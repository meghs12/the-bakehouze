import Link from "next/link";
import { Instagram, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  const helloLink = buildWhatsAppLink("Hi The BakeHouze! I'd like to place an order.");

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                B
              </span>
              <span className="font-display text-xl font-semibold">
                The BakeHouze
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline} Premium eggless desserts, freshly baked to order
              across Bangalore.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Instagram className="h-4 w-4 text-accent" />
              {SITE.instagramHandle}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Shop */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Sweet Things
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/menu#cookies" className="text-muted-foreground transition-colors hover:text-accent">
                  NYC-Style Cookies
                </Link>
              </li>
              <li>
                <Link href="/menu#cheesecake" className="text-muted-foreground transition-colors hover:text-accent">
                  Basque Cheesecake
                </Link>
              </li>
              <li>
                <Link href="/menu#brownies" className="text-muted-foreground transition-colors hover:text-accent">
                  Brownie Slabs
                </Link>
              </li>
              <li>
                <Link href="/custom-cakes" className="text-muted-foreground transition-colors hover:text-accent">
                  Custom Celebration Cakes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Delivering across {SITE.serviceArea}</span>
              </li>
              <li>
                <a
                  href={`tel:+${SITE.whatsappNumber}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{SITE.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={helloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-accent"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>Order on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {SITE.name}. Crafted with love in Bangalore.
          </p>
          <p className="flex items-center gap-1.5">
            100% Eggless
            <span className="h-1 w-1 rounded-full bg-accent" />
            Made to Order
          </p>
        </div>
      </div>
    </footer>
  );
}
