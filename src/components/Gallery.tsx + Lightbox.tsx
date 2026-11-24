"use client";
import { useState } from "react";
import { gallery, site } from "@/lib/config";
import Reveal from "./Reveal";
import { Instagram } from "lucide-react";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-charcoal text-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label text-ember mb-4">Gallery</p>
          <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight">
            FROM OUR
            <br />
            <span className="italic text-cream/60">FEED.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <button
                onClick={() => setIdx(i)}
                className={`group relative block overflow-hidden rounded-lg w-full ${
                  i === 0 || i === 4 ? "aspect-square md:aspect-[3/4]" : "aspect-square"
                }`}
                aria-label={`Open image: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.social.instagram}
            target={site.social.instagram !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ember text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
          >
            <Instagram size={15} /> Follow Our Food Journey
          </a>
        </div>
      </div>

      {idx !== null && (
        <Lightbox
          images={gallery}
          index={idx}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx((i) => ((i! - 1 + gallery.length) % gallery.length))}
          onNext={() => setIdx((i) => ((i! + 1) % gallery.length))}
        />
      )}
    </section>
  );
}
