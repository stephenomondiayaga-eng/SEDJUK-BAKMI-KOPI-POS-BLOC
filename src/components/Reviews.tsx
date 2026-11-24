import { Star, ExternalLink } from "lucide-react";
import { site, reviewPlaceholders } from "@/lib/config";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="bg-charcoal text-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="label text-ember mb-4">Reviews</p>
              <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight">
                GOOD FOOD.
                <br />
                <span className="italic text-cream/60">GOOD MOOD. GOOD COMPANY.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl md:text-7xl">{site.rating}</span>
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.round(site.rating) ? "fill-ember text-ember" : "text-cream/30"}
                    />
                  ))}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                  Rating / 5
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviewPlaceholders.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-ember text-ember" />
                  ))}
                </div>
                <p className="text-cream/75 leading-relaxed text-sm italic">
                  "{r.text}"
                </p>
                <div className="mt-6 text-xs uppercase tracking-widest text-cream/40">
                  — {r.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={site.googleReviewsUrl || "#contact"}
            target={site.googleReviewsUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all"
          >
            Read Customer Reviews <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
