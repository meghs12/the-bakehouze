import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/fade-in";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent eyebrow + serif title + supporting line used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
