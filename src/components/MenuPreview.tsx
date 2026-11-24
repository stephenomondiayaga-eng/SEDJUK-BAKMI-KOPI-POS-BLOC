"use client";
import { useState } from "react";
import { menu } from "@/lib/config";
import Reveal from "./Reveal";
import { Phone } from "lucide-react";

export default function MenuPreview({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(menu[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const cat = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-charcoal text-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label text-ember mb-4">The Menu</p>
          <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight">
            SOMETHING FOR
            <br />
            <span className="italic text-cream/60">EVERY CRAVING.</span>
          </h2>
          <p className="mt-6 max-w-xl text-cream/60 text-sm md:text-base">
            Menu items and prices are currently placeholders — the owner can edit
            them at any time. Please confirm availability in-store.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-12 flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${
                active === c.id
                  ? "bg-ember text-white"
                  : "bg-white/5 text-cream/70 hover:bg-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cat.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-ember/50 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`h-full w-full object-cover transition-transform duration-[1.1s] ${
                      hovered === item.name ? "scale-110" : "scale-100"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  {item.featured && (
                    <span className="absolute top-3 left-3 rounded-full bg-ember px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                      Signature
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                    <span className="text-xs font-bold tracking-widest text-ember whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-cream/60">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="tel:+6285111315692"
            className="inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-ember hover:text-white transition-all"
          >
            <Phone size={14} /> Ask About Today's Menu
          </a>
          {!full && (
            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
            >
              View Full Menu
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
