"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { SITE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * Lightweight enquiry form. There is no backend — on submit we compose a
 * WhatsApp message from the fields and open a wa.me chat with The BakeHouze.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const trimmedMessage = message.trim();
  const canSend = trimmedMessage.length > 0;

  const link = buildWhatsAppLink(
    [
      "THE BAKEHOUZE — ENQUIRY",
      "",
      `Name: ${name.trim() || "-"}`,
      "",
      "Message:",
      trimmedMessage || "-",
    ].join("\n")
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Your name</Label>
        <Input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're after — an order, a custom cake, or a quick question."
        />
      </div>

      <Button
        asChild={canSend}
        variant="whatsapp"
        size="lg"
        disabled={!canSend}
        className="w-full"
      >
        {canSend ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden />
            Send via WhatsApp
          </a>
        ) : (
          <span>
            <MessageCircle aria-hidden />
            Send via WhatsApp
          </span>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        This opens a WhatsApp chat with {SITE.whatsappDisplay} — no message is
        sent until you hit send there.
      </p>
    </div>
  );
}
