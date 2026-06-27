import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  /** Real photo path (relative to /public). Falls back to placeholder if absent. */
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a real product photo when `src` is provided, otherwise the branded
 * "Product Image Coming Soon" placeholder. Swap in photos later by setting the
 * `image` field on a product in lib/products.ts — no component changes needed.
 */
export function ProductImage({
  src,
  alt,
  className,
  priority,
}: ProductImageProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-xl bg-secondary",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={cn("image-placeholder", className)} aria-label={`${alt} — photo coming soon`}>
      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
        <ImageIcon className="h-7 w-7 text-accent/70" aria-hidden />
        <span className="leading-tight">Product Image Coming Soon</span>
      </div>
    </div>
  );
}
