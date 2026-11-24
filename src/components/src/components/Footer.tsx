import Link from "next/link";
import { MapPin, Phone, Instagram } from "lucide-react";
import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="leading-none">
              <span className="block font-display text-3xl tracking-tight">SEDJUK</span>
              <span className="block text-[10px] tracking-ultra uppercase opacity-60 mt-1">
                Bakmi &amp; Kopi Pos Bloc
              </span>
            </div>
            <p className="mt-6 text-cream/60 text-sm max-w-sm leading-relaxed">
              Comforting bakmi and coffee inside Pos Bloc Jakarta, Pasar Baru,
              Central Jakarta.
            </p>
          </div>

          <div>
            <h3 className="label text-cream/40 mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-ember transition-colors">Home</Link></li>
              <li><Link href="/#story" className="hover:text-ember transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-ember transition-colors">Menu</Link></li>
              <li><Link href="/#gallery" className="hover:text-ember transition-colors">Gallery</Link></li>
              <li><Link href="/#contact" className="hover:text-ember transition-colors">Contact</Link></li>
              <li>
                <a href={site.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember transition-colors">
                  Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label text-cream/40 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-ember" />
                <span className="text-cream/70">
                  {site.address.street}, {site.address.city} {site.address.postalCode}
                </span>
              </li>
              <li>
                <a href={`tel:${site.phones[0]}`} className="flex items-center gap-2 hover:text-ember transition-colors">
                  <Phone size={15} className="text-ember" />
                  {site.phoneDisplay[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phones[1]}`} className="flex items-center gap-2 hover:text-ember transition-colors">
                  <Phone size={15} className="text-ember" />
                  {site.phoneDisplay[1]}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target={site.social.instagram !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-ember transition-colors"
                >
                  <Instagram size={15} className="text-ember" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Sedjuk Bakmi &amp; Kopi Pos Bloc. All rights reserved.</p>
          <p className="uppercase tracking-widest">Pasar Baru · Jakarta · Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
