export default function Contacto() {
  const whatsappUrl =
    "https://wa.me/5491155058300?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20disponibilidad%20en%20Encuadre%20Studio.";

  return (
    <section id="contacto" className="py-28 px-6 bg-[#F0E6D3]">
      <div className="max-w-6xl mx-auto">

        {/* CTA card */}
        <div className="relative overflow-hidden bg-[#372010] rounded-sm p-12 md:p-20 mb-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-[#c9a96e] to-transparent" />

          <p className="text-[#c9a96e] uppercase font-medium mb-6 tracking-[0.2em]" style={{ fontSize: "19px" }}>
            ¿Listo para reservar?
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl md:text-7xl text-[#F0E6D3] mb-6 leading-tight">
            Escribinos.
          </h2>
          <p className="text-[#c9a96e] max-w-sm mx-auto mb-10 leading-relaxed" style={{ fontSize: "20px" }}>
            Respondemos por WhatsApp. Contanos qué espacio necesitás y cuándo,
            y te confirmamos disponibilidad.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00422E] text-[#F0E6D3] text-base font-medium rounded-sm hover:bg-[#005a3e] transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1.5C5.36 1.5 1.5 5.36 1.5 10c0 1.5.4 2.9 1.1 4.1L1.5 18.5l4.5-1.14A8.48 8.48 0 0010 18.5c4.64 0 8.5-3.86 8.5-8.5S14.64 1.5 10 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M7.5 9c.48 1.02 1.13 1.92 2.06 2.57 1.16.82 2.22.68 3.08 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c9b89a]">
          <div className="bg-[#F0E6D3] p-8">
            <p className="text-[#7a5c3a] text-xs tracking-widest uppercase mb-3">Dirección</p>
            <p className="text-[#372010] font-medium" style={{ fontSize: "20px" }}>Viamonte 540</p>
            <p className="text-[#7a5c3a]" style={{ fontSize: "20px" }}>Buenos Aires, CABA</p>
          </div>
          <div className="bg-[#F0E6D3] p-8">
            <p className="text-[#7a5c3a] text-xs tracking-widest uppercase mb-3">Teléfono</p>
            <a href="tel:+5491155058300" className="text-[#372010] font-medium hover:text-[#7F1114] transition-colors block" style={{ fontSize: "20px" }}>
              +54 9 11 5505-8300
            </a>
            <p className="text-[#7a5c3a]" style={{ fontSize: "20px" }}>WhatsApp disponible</p>
          </div>
          <div className="bg-[#F0E6D3] p-8">
            <p className="text-[#7a5c3a] text-xs tracking-widest uppercase mb-3">Redes</p>
            <a href="#" className="text-[#372010] font-medium hover:text-[#7F1114] transition-colors flex items-center gap-2" style={{ fontSize: "20px" }}>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1"/>
                <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1"/>
                <circle cx="10.5" cy="3.5" r="0.5" fill="currentColor"/>
              </svg>
              Fotografía & Video
            </a>
            <p className="text-[#7a5c3a]" style={{ fontSize: "20px" }}>Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
