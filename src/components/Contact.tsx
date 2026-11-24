"use client";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/lib/config";
import Reveal from "./Reveal";

export default function Contact() {
  const primary = site.phones[0].replace(/\D/g, "");
  const secondary = site.phones[1].replace(/\D/g, "");

  // Build order link: prefer WhatsApp, fall back to phone call
  const orderHref = site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hi Sedjuk! I'd like to place an order."
      )}`
    : site.orderUrl || `tel:${site.phones[0]}`;

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="label text-ember mb-4">Contact &amp; Ordering</p>
            <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight">
              CRAVING
              <br />
              <span className="italic text-coffee">SOMETHING GOOD?</span>
            </h2>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:+${primary}`}
                className="flex items-center gap-4 group"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-cream group-hover:bg-ember transition-colors">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-charcoal/50">Primary</div>
                  <div className="font-medium text-lg group-hover:text-ember transition-colors">
                    {site.phoneDisplay[0]}
                  </div>
                </div>
              </a>
              <a
                href={`tel:+${secondary}`}
                className="flex items-center gap-4 group"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-cream group-hover:bg-ember transition-colors">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-charcoal/50">Additional</div>
                  <div className="font-medium text-lg group-hover:text-ember transition-colors">
                    {site.phoneDisplay[1]}
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:+${primary}`}
                className="flex items-center justify-between rounded-xl bg-charcoal text-cream px-6 py-5 hover:bg-ember transition-colors group"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Call Us</span>
                <Phone size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={orderHref}
                target={site.whatsappNumber || site.orderUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-ember text-white px-6 py-5 hover:bg-charcoal transition-colors group"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Place an Order</span>
                <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border-2 border-charcoal px-6 py-5 hover:bg-charcoal hover:text-cream transition-colors group"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Get Directions</span>
                <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
