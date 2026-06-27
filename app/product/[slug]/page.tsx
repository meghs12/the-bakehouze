import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";

import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
  CATEGORY_META,
} from "@/lib/products";
import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ProductImage } from "@/components/product/image-placeholder";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${SITE.name}`,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);
  const categoryTitle =
    CATEGORY_META.find((c) => c.id === product.category)?.title ??
    product.category;

  const directMessage = [
    "THE BAKEHOUZE — PRODUCT ENQUIRY",
    "",
    `I'd like to order: ${
      product.weight ? `${product.name} (${product.weight})` : product.name
    }`,
    `Price: ${formatPrice(product.price)}`,
    "",
    "Please confirm availability and delivery.",
  ].join("\n");

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Link href="/menu" className="transition-colors hover:text-accent">
          Menu
        </Link>
        <span aria-hidden>/</span>
        <Link
          href={`/menu#${product.category}`}
          className="transition-colors hover:text-accent"
        >
          {categoryTitle}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="group lg:sticky lg:top-28 lg:self-start">
          <ProductImage
            src={product.image}
            alt={product.name}
            priority
            className="aspect-square w-full rounded-3xl"
          />
        </div>

        {/* Detail */}
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {product.isBestseller && <Badge variant="accent">Bestseller</Badge>}
            {product.isEggless && <Badge variant="soft">100% Eggless</Badge>}
            {product.weight && <Badge variant="outline">{product.weight}</Badge>}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {product.longDescription ?? product.description}
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-4xl font-semibold text-accent">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-muted-foreground">
              {product.weight ? `per ${product.weight}` : "each"}
            </span>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col gap-3 sm:flex-row">
            <AddToCartButton
              product={product}
              size="lg"
              openOnAdd
              className="flex-1"
            />
            <Button asChild variant="whatsapp" size="lg" className="flex-1">
              <a
                href={buildWhatsAppLink(directMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden />
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Assurances */}
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Freshly baked to order",
              "100% eggless recipe",
              "Premium ingredients",
              "Delivered across Bangalore",
            ].map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24">
          <SectionHeading
            eyebrow="You might also love"
            title="More from the bakery"
            align="left"
            className="mb-10"
          />
          <ProductGrid products={related} />
        </section>
      )}

      <div className="mt-16">
        <Button asChild variant="ghost">
          <Link href="/menu">
            <ArrowLeft aria-hidden />
            Back to full menu
          </Link>
        </Button>
      </div>
    </div>
  );
}
