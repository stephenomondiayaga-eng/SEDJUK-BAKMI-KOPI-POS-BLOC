"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/config";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#visit", label: "Visit Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md text-cream py-3 shadow-lg"
            : "bg-transparent text-cream py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="leading-none group" aria-label="Sedjuk home">
            <span className="block font-display text-2xl md:text-3xl tracking-tight">
              SEDJUK
            </span>
            <span className="block text-[9px] tracking-ultra uppercase opacity-70 mt-1">
              Bakmi &amp; Kopi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase font-semibold">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" data-active="false">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-ember text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors"
            >
              Explore Menu
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal text-cream md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-2xl">SEDJUK</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={28} />
              </button>
            </div>
            <nav className="mt-10 px-6 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl block"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-0 right-0 px-6">
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-80"
              >
                <MapPin size={16} /> Pos Bloc Jakarta · Pasar Baru
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
