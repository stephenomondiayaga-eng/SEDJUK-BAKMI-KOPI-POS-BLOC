import Reveal from "./Reveal";

const cards = [
  {
    title: "THE BAKMI MOMENT",
    text: "Comforting noodles, satisfying flavors, and a meal worth slowing down for.",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "THE COFFEE BREAK",
    text: "Your favorite cup, a good conversation, and a moment to breathe.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "THE POS BLOC EXPERIENCE",
    text: "Food, culture, architecture, community, and urban Jakarta energy.",
    img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80&auto=format&fit=crop",
  },
];

export default function SignatureExperience() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label text-coffee mb-4">Signature Experience</p>
          <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-tight max-w-3xl">
            MADE FOR YOUR EVERYDAY CRAVINGS.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1.3s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-cream">
                  <span className="text-[10px] font-bold tracking-ultra text-ember mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
