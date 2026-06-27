"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cake,
  Check,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  CAKE_WEIGHTS,
  CAKE_FLAVOURS,
  CAKE_FROSTINGS,
  CAKE_TOPPINGS,
  CUSTOM_CAKE_STEPS,
} from "@/lib/custom-cakes";
import type { CustomCakeSelection } from "@/types";
import { buildCustomCakeMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";

const TOTAL_STEPS = CUSTOM_CAKE_STEPS.length;

/** A large tappable choice chip used across the single/multi select steps. */
function ChoiceChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "relative flex items-center justify-center rounded-2xl border px-4 py-4 text-center text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-accent bg-accent/10 text-accent shadow-soft"
          : "border-border bg-card text-foreground/80 hover:border-accent/40 hover:text-foreground"
      )}
    >
      {selected && (
        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-2.5 w-2.5" aria-hidden />
        </span>
      )}
      {label}
    </button>
  );
}

export default function CustomCakesPage() {
  const [step, setStep] = useState(1);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selection, setSelection] = useState<CustomCakeSelection>({
    weight: "",
    flavour: "",
    frosting: "",
    toppings: [],
    instructions: "",
    referenceImageName: undefined,
  });

  function toggleTopping(topping: string) {
    setSelection((prev) => ({
      ...prev,
      toppings: prev.toppings.includes(topping)
        ? prev.toppings.filter((t) => t !== topping)
        : [...prev.toppings, topping],
    }));
  }

  // Steps 1–3 require a pick before advancing; 4–6 are optional.
  const canAdvance = useMemo(() => {
    if (step === 1) return Boolean(selection.weight);
    if (step === 2) return Boolean(selection.flavour);
    if (step === 3) return Boolean(selection.frosting);
    return true;
  }, [step, selection]);

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(buildCustomCakeMessage(selection)),
    [selection]
  );

  const progress = (step / TOTAL_STEPS) * 100;
  const current = CUSTOM_CAKE_STEPS[step - 1];

  function next() {
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <SectionHeading
        eyebrow="Custom Celebration Cakes"
        title="Design your dream cake"
        subtitle="Build it step by step, then send the brief straight to our WhatsApp for a quick quote. No payment now — we confirm price, availability and delivery in chat."
        align="center"
        className="mx-auto mb-12"
      />

      {/* Progress */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-accent">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-muted-foreground">{current.title}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Step body */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
        <div className="mb-8 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
            <Cake className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {current.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{current.hint}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* STEP 1 — Weight */}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CAKE_WEIGHTS.map((w) => (
                  <ChoiceChip
                    key={w}
                    label={w}
                    selected={selection.weight === w}
                    onClick={() =>
                      setSelection((prev) => ({ ...prev, weight: w }))
                    }
                  />
                ))}
              </div>
            )}

            {/* STEP 2 — Flavour */}
            {step === 2 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CAKE_FLAVOURS.map((f) => (
                  <ChoiceChip
                    key={f}
                    label={f}
                    selected={selection.flavour === f}
                    onClick={() =>
                      setSelection((prev) => ({ ...prev, flavour: f }))
                    }
                  />
                ))}
              </div>
            )}

            {/* STEP 3 — Frosting */}
            {step === 3 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CAKE_FROSTINGS.map((fr) => (
                  <ChoiceChip
                    key={fr}
                    label={fr}
                    selected={selection.frosting === fr}
                    onClick={() =>
                      setSelection((prev) => ({ ...prev, frosting: fr }))
                    }
                  />
                ))}
              </div>
            )}

            {/* STEP 4 — Toppings (multi) */}
            {step === 4 && (
              <>
                <p className="mb-4 text-sm text-muted-foreground">
                  Select as many as you like.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {CAKE_TOPPINGS.map((t) => (
                    <ChoiceChip
                      key={t}
                      label={t}
                      selected={selection.toppings.includes(t)}
                      onClick={() => toggleTopping(t)}
                    />
                  ))}
                </div>
              </>
            )}

            {/* STEP 5 — Special instructions */}
            {step === 5 && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="instructions">
                  Message on cake, theme, colours, allergies…
                </Label>
                <Textarea
                  id="instructions"
                  rows={6}
                  placeholder="e.g. 'Happy 30th Anniversary' in gold, blush-pink theme, no nuts please."
                  value={selection.instructions}
                  onChange={(e) =>
                    setSelection((prev) => ({
                      ...prev,
                      instructions: e.target.value,
                    }))
                  }
                />
              </div>
            )}

            {/* STEP 6 — Reference image */}
            {step === 6 && (
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-secondary/40 px-6 py-12 text-center transition-colors hover:border-accent/50"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <ImagePlus className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {selection.referenceImageName
                      ? "Choose a different image"
                      : "Upload a reference image"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    PNG or JPG — you&apos;ll attach it in the WhatsApp chat
                  </span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) =>
                    setSelection((prev) => ({
                      ...prev,
                      referenceImageName: e.target.files?.[0]?.name,
                    }))
                  }
                />
                {selection.referenceImageName && (
                  <div className="flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">
                    <Check className="h-4 w-4" aria-hidden />
                    <span className="truncate">
                      {selection.referenceImageName}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* STEP 7 — Summary + request */}
            {step === 7 && (
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                  <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                    <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                    Your cake brief
                  </h3>
                  <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                    <SummaryRow label="Weight" value={selection.weight} />
                    <SummaryRow label="Flavour" value={selection.flavour} />
                    <SummaryRow label="Frosting" value={selection.frosting} />
                    <SummaryRow
                      label="Toppings"
                      value={
                        selection.toppings.length
                          ? selection.toppings.join(", ")
                          : "None"
                      }
                    />
                    <div className="sm:col-span-2">
                      <SummaryRow
                        label="Instructions"
                        value={selection.instructions.trim() || "None"}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <SummaryRow
                        label="Reference image"
                        value={selection.referenceImageName || "None"}
                      />
                    </div>
                  </dl>
                </div>

                <Button asChild variant="whatsapp" size="lg" className="w-full">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden />
                    Request Quote via WhatsApp
                  </a>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Don&apos;t forget to attach your reference image in the chat.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-6">
          <Button
            variant="ghost"
            onClick={back}
            disabled={step === 1}
            className={cn(step === 1 && "invisible")}
          >
            <ChevronLeft aria-hidden />
            Back
          </Button>

          {step < TOTAL_STEPS ? (
            <Button onClick={next} disabled={!canAdvance} variant="accent">
              Continue
              <ChevronRight aria-hidden />
            </Button>
          ) : (
            <Badge variant="soft" className="px-3 py-1.5">
              Ready to send
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="font-medium text-foreground">{value || "—"}</dd>
    </div>
  );
}
