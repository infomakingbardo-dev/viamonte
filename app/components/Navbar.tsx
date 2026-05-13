"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "El espacio", href: "#espacio" },
  { label: "Espacios", href: "#espacios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Contacto", href: "#contacto" },
];

function Logo() {
  return (
    <a href="#" className="flex flex-col items-start leading-none select-none">
      <div className="relative px-3 pt-1 pb-0.5">
        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#372010]" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#372010]" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#372010]" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#372010]" />
        <span className="block font-[family-name:var(--font-dm-serif)] text-xl tracking-[0.12em] text-[#372010] uppercase">
          Encuadre
        </span>
      </div>
      <span className="font-dellamor text-[#00422E] -mt-1 ml-6" style={{ fontSize: "26px" }}>
        Studio
      </span>
    </a>
  );
}

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
        scrolled ? "bg-[#F0E6D3]/95 backdrop-blur-sm border-b border-[#c9b89a]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#7a5c3a] hover:text-[#372010] transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-[#7F1114] text-[#7F1114] hover:bg-[#7F1114] hover:text-[#F0E6D3] transition-all duration-200 rounded-sm font-medium">
          Reservar
        </a>

        <button className="md:hidden text-[#372010] p-1" onClick={() => setOpen(!open)} aria-label="Menú">
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F0E6D3] border-t border-[#c9b89a] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[#372010] text-base">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-4 py-3 border border-[#7F1114] text-[#7F1114] text-sm font-medium rounded-sm">
            Reservar
          </a>
        </div>
      )}
    </header>
  );
}
