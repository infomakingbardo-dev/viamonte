export default function Contacto() {
  const whatsappUrl =
    "https://wa.me/5491154118353?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20disponibilidad%20en%20Encuadre.";

  return (
    <section id="contacto" className="py-28 px-6 border-t border-[#2a2926]">
      <div className="max-w-6xl mx-auto">

        {/* CTA banner */}
        <div className="relative overflow-hidden bg-[#151512] border border-[#2a2926] rounded-sm p-12 md:p-20 mb-16 text-center">
          {/* Decorative */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-[#c9a96e] to-transparent" />

          <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium mb-6">
            ¿Listo para reservar?
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-6xl text-[#f0ede8] mb-6">
            Escribinos.
          </h2>
          <p className="text-[#6b6860] text-base max-w-sm mx-auto mb-10 leading-relaxed">
            Respondemos por WhatsApp. Contanos qué espacio necesitás y cuándo,
            y te confirmamos disponibilidad.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#0d0d0b] font-medium rounded-sm hover:bg-[#b8924a] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.35.36 2.61.99 3.69L1.5 16.5l3.93-1.02A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M6.75 8.25c.42.9.99 1.68 1.8 2.25 1.02.72 1.95.6 2.7 0"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2926]">
          <div className="bg-[#0d0d0b] p-8">
            <p className="text-[#6b6860] text-xs tracking-widest uppercase mb-3">Dirección</p>
            <p className="text-[#f0ede8] text-sm font-medium">Viamonte 540</p>
            <p className="text-[#6b6860] text-sm">Buenos Aires, CABA</p>
          </div>
          <div className="bg-[#0d0d0b] p-8">
            <p className="text-[#6b6860] text-xs tracking-widest uppercase mb-3">Teléfono</p>
            <a
              href="tel:+5491154118353"
              className="text-[#f0ede8] text-sm font-medium hover:text-[#c9a96e] transition-colors"
            >
              +54 9 11 5411-8353
            </a>
            <p className="text-[#6b6860] text-sm mt-1">WhatsApp disponible</p>
          </div>
          <div className="bg-[#0d0d0b] p-8">
            <p className="text-[#6b6860] text-xs tracking-widest uppercase mb-3">Redes</p>
            <a
              href="#"
              className="text-[#f0ede8] text-sm font-medium hover:text-[#c9a96e] transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1"/>
                <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1"/>
                <circle cx="10.5" cy="3.5" r="0.5" fill="currentColor"/>
              </svg>
              @encuadre.ba
            </a>
            <p className="text-[#6b6860] text-sm mt-1">Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
