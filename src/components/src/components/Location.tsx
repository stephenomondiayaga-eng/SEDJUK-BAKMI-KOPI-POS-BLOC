"use client";
import { useState } from "react";
import { MapPin, Copy, Check, Navigation } from "lucide-react";
import { site } from "@/lib/config";
import Reveal from "./Reveal";

export default function Location() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="visit" className="bg-charcoal text-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label text-ember mb-4">Find Us</p>
          <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight">
            FIND YOUR WAY
            <br />
            <span className="italic text-cream/60">TO SEDJUK.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[520px] border border-white/10">
              <iframe
                src={site.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Sedjuk Bakmi & Kopi Pos Bloc location"
              />
            </div>
          </Reveal>

          {/* Card */}
          <Reveal delay={150}>
            <div className="flex flex-col justify-between h-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
              <div>
                <div className="flex items-center gap-2 text-ember mb-5">
                  <MapPin size={20} />
                  <span className="label">Pos Bloc Jakarta</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  SEDJUK BAKMI &amp; KOPI
                </h3>
                <p className="mt-5 text-cream/70 leading-relaxed">
                  {site.address.street},<br />
                  {site.address.district},<br />
                  {site.address.city},<br />
                  {site.address.region} {site.address.postalCode},<br />
                  {site.address.country}
                </p>
                <p className="mt-4 text-sm text-cream/50 italic">
                  {site.address.landmark}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={site.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ember text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
                >
                  <Navigation size={14} /> Get Directions
                </a>
                <button
                  onClick={copy}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy Address"}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
