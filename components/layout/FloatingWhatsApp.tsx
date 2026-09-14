"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Prodigy Construction Limited, I would like to discuss a construction/project requirement.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}