"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CartButton } from "@/components/cart/cart-button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none"
          aria-label={`${SITE.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground transition-transform group-hover:scale-105">
            B
          </span>
          <span className="font-display text-xl font-semibold leading-none tracking-tight">
            The BakeHouze
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartButton />

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="border-b border-border px-6 py-5">
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                    B
                  </span>
                  The BakeHouze
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          isActive(link.href)
                            ? "bg-secondary text-accent"
                            : "hover:bg-secondary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="px-4">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href="/menu">Shop Desserts</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
