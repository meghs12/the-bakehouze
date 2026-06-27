import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about ordering from The BakeHouze — eggless baking, WhatsApp ordering, delivery across Bangalore, lead times, custom cakes and storage.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "Is everything really 100% eggless?",
    a: "Yes — every single item on our menu is fully eggless, from the cookies and brownies to the Basque cheesecake and all custom cakes. Our recipes are built to be eggless from the start, so you never lose out on taste or texture.",
  },
  {
    q: "How do I place an order?",
    a: "Browse the menu, add what you'd like to your cart, and head to checkout. Instead of paying online, we generate a neat order summary and open WhatsApp for you. You send it across, and we confirm availability, final total and delivery in chat.",
  },
  {
    q: "Why is there no online payment?",
    a: "We keep things personal. Because everything is freshly made to order, we like to confirm availability, delivery slot and any customisations with you directly before taking payment. Payment is arranged over WhatsApp once your order is confirmed.",
  },
  {
    q: "How much is delivery and how is it calculated?",
    a: `Shipping is calculated separately based on your location within ${SITE.serviceArea.toLowerCase()}. Once you send your order on WhatsApp, we'll share the exact delivery charge before you confirm.`,
  },
  {
    q: "How much notice do you need?",
    a: "For cookies, brownies and cheesecakes, we usually need at least 1–2 days. Custom celebration cakes are best ordered 3–5 days in advance, especially for larger sizes or detailed designs. Need something sooner? Message us and we'll do our best.",
  },
  {
    q: "Can I fully customise a celebration cake?",
    a: "Absolutely. Use the Custom Cakes builder to choose weight, flavour, frosting and toppings, add special instructions and even attach a reference image. We'll send back a quote and confirm everything over WhatsApp.",
  },
  {
    q: "How should I store my desserts?",
    a: "Cookies are best enjoyed fresh and keep well at room temperature for 2–3 days. Brownies, cheesecake and cream cakes should be refrigerated and are best within 3–4 days. We'll always share specific storage tips with your order.",
  },
  {
    q: "Which areas do you deliver to?",
    a: `We deliver across ${SITE.serviceArea}. If you're unsure whether we reach your area, just drop us a message on WhatsApp and we'll let you know.`,
  },
];

export default function FAQPage() {
  // FAQPage structured data for richer search results.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SectionHeading
        eyebrow="Good to Know"
        title="Frequently asked questions"
        subtitle="Everything you need to know before placing your order. Still curious? We're a message away."
        align="center"
        className="mx-auto mb-12"
      />

      <FadeIn>
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-5">
              <AccordionTrigger className="text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>

      <FadeIn className="mt-12 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
        <h2 className="font-display text-2xl font-semibold">
          Still have a question?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          We&apos;re always happy to help with orders, customisations or
          anything sweet.
        </p>
        <div className="mt-6">
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
