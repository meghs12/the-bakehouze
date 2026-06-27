import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock, Instagram } from "lucide-react";

import { SITE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The BakeHouze to place an order or ask a question. Reach us on WhatsApp, by email or on Instagram — serving freshly baked eggless treats across Bangalore.",
  alternates: { canonical: "/contact" },
};

const quickHello = buildWhatsAppLink(
  "THE BAKEHOUZE — ENQUIRY\n\nHi! I'd like to know more about your eggless desserts."
);

export default function ContactPage() {
  const details = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE.whatsappDisplay,
      href: quickHello,
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: SITE.instagramHandle,
      href: SITE.instagram,
      external: true,
    },
    {
      icon: MapPin,
      label: "Service area",
      value: SITE.serviceArea,
      href: null,
      external: false,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <SectionHeading
        eyebrow="Say Hello"
        title="Let's talk dessert"
        subtitle="The fastest way to order or ask a question is a quick WhatsApp message. We'd love to hear from you."
        align="center"
        className="mx-auto mb-14"
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Details */}
        <FadeIn className="flex flex-col gap-4">
          {details.map((d) => {
            const Icon = d.icon;
            const inner = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-accent/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="font-medium text-foreground">{d.value}</p>
                </div>
              </div>
            );

            return d.href ? (
              <a
                key={d.label}
                href={d.href}
                target={d.external ? "_blank" : undefined}
                rel={d.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={d.label}>{inner}</div>
            );
          })}

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Order hours
              </p>
              <p className="font-medium text-foreground">
                Mon – Sun · 9:00 AM – 9:00 PM
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Messages outside these hours are answered next morning.
              </p>
            </div>
          </div>

          <Button asChild variant="whatsapp" size="lg" className="mt-2">
            <a href={quickHello} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              Message us on WhatsApp
            </a>
          </Button>
        </FadeIn>

        {/* Form */}
        <FadeIn
          delay={0.1}
          className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8"
        >
          <h2 className="font-display text-2xl font-semibold">
            Send a quick message
          </h2>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Fill this in and we&apos;ll pick it up in WhatsApp.
          </p>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
