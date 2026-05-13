"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "El espacio", href: "#espacio" },
  { label: "Espacios", href: "#espacios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0b]/95 backdrop-blur-sm border-b border-[#2a2926]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-dm-serif)] text-xl text-[#f0ede8] tracking-wide"
        >
          Encuadre
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#6b6860] hover:text-[#f0ede8] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0d0d0b] transition-all duration-200 rounded-sm font-medium"
        >
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f0ede8] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-px bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0b] border-t border-[#2a2926] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#f0ede8] text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-4 py-2.5 border border-[#c9a96e] text-[#c9a96e] text-sm font-medium rounded-sm"
          >
            Reservar
          </a>
        </div>
      )}
    </header>
  );
}
