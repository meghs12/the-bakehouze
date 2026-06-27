import Link from "next/link";
import { Cookie } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent">
        <Cookie className="h-7 w-7" aria-hidden />
      </span>
      <p className="eyebrow justify-center">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        Error 404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        This page crumbled
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for has been eaten. Let&apos;s get you back
        to something sweet.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="accent" size="lg">
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/menu">See the menu</Link>
        </Button>
      </div>
    </div>
  );
}
