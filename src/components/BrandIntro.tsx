import Reveal from "./Reveal";

export default function BrandIntro() {
  return (
    <section id="story" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label text-ember mb-6">Our Story</p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image stack */}
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80&auto=format&fit=crop"
                  alt="Café interior with warm lighting"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="absolute -bottom-10 -right-4 w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-xl border-4 border-cream shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop"
                  alt="Fresh coffee being poured"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Text */}
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-tight">
              A LITTLE COMFORT.
              <br />
              <span className="italic text-coffee">A LOT OF FLAVOR.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-charcoal/70 leading-relaxed max-w-lg">
              Good food has a way of bringing people together. At Sedjuk Bakmi
              &amp; Kopi Pos Bloc, enjoy comforting noodle moments, coffee
              breaks, and a welcoming atmosphere in the heart of Jakarta.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/40">
              Draft website copy — editable by the owner.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
