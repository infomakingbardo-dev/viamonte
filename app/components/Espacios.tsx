const espacios = [
  {
    numero: "01",
    nombre: "Living de ingreso + Galería",
    descripcion: "Espacio de entrada con galería abierta. Ideal para producciones que requieren circulación o un ambiente más dinámico y editorial.",
    desde: "86.000",
    tag: "Zona común",
    reserva: "Reserva directa",
  },
  {
    numero: "02",
    nombre: "Salón principal + Patio",
    descripcion: "El corazón del estudio. Un salón amplio que se abre al patio, con excelente luz natural y la mayor flexibilidad para escenas y producciones.",
    desde: "86.000",
    tag: "Zona común",
    reserva: "Reserva directa",
  },
  {
    numero: "03",
    nombre: "Habitación privada",
    descripcion: "Espacios íntimos y controlados, perfectos para sesiones de retrato, contenido de marca o grabaciones que requieren privacidad.",
    desde: "46.000",
    tag: "Privada",
    reserva: "Requiere confirmación",
  },
  {
    numero: "04",
    nombre: "Habitación con baño",
    descripcion: "Habitación privada con baño propio. Mayor autonomía para el equipo y los talentos durante la producción.",
    desde: "63.500",
    tag: "Privada",
    reserva: "Requiere confirmación",
  },
];

export default function Espacios() {
  return (
    <section id="espacios" className="py-28 px-6 bg-[#00422E]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-[#7dbf9e] uppercase font-medium mb-4 tracking-[0.2em]" style={{ fontSize: "19px" }}>
            Espacios disponibles
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#F0E6D3]">
            Elegí tu ambiente.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#005a3e]">
          {espacios.map((e) => (
            <article key={e.numero} className="bg-[#00422E] p-8 md:p-10 group hover:bg-[#003824] transition-colors duration-300">
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-[family-name:var(--font-dm-serif)] leading-none text-[#F0E6D3]/20 group-hover:text-[#F0E6D3]/30 transition-colors duration-300"
                  style={{ fontSize: "72px" }}
                >
                  {e.numero}
                </span>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs px-2.5 py-1 border border-[#7dbf9e]/40 text-[#7dbf9e] rounded-sm">
                    {e.tag}
                  </span>
                  <span className="text-xs text-[#005a3e]">{e.reserva}</span>
                </div>
              </div>

              <h3
                className="font-[family-name:var(--font-dm-serif)] text-[#F0E6D3] mb-4 leading-snug"
                style={{ fontSize: "30px" }}
              >
                {e.nombre}
              </h3>
              <p className="text-[#7dbf9e] leading-relaxed mb-8" style={{ fontSize: "20px" }}>
                {e.descripcion}
              </p>

              <div className="flex items-end justify-between pt-6 border-t border-[#005a3e]">
                <div>
                  <p className="text-[#F0E6D3] font-medium text-xl">
                    ${e.desde}
                    <span className="text-[#7dbf9e] text-sm font-normal"> / hora</span>
                  </p>
                </div>
                <a href="#contacto" className="text-sm text-[#F0E6D3] hover:underline flex items-center gap-1.5">
                  Reservar
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 p-5 bg-[#003824] border border-[#005a3e] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-[#F0E6D3] font-medium" style={{ fontSize: "20px" }}>Cocina / Baño</p>
            <p className="text-[#7dbf9e] text-sm mt-0.5">Adicional disponible para complementar cualquier reserva</p>
          </div>
          <p className="text-[#F0E6D3] font-medium text-xl whitespace-nowrap">
            $46.000 <span className="text-[#7dbf9e] text-sm font-normal">/ hora</span>
          </p>
        </div>

        <a
          href="https://wa.me/5491155058300?text=Hola%2C%20me%20interesa%20alquilar%20el%20piso%20completo%20de%20Encuadre%20Studio.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#F0E6D3] rounded-sm p-7 hover:bg-[#e8d9c0] transition-colors duration-200 group"
        >
          <div>
            <p className="font-[family-name:var(--font-dm-serif)] text-[#372010] text-2xl mb-1">
              ¿Querés alquilar el piso completo?
            </p>
            <p className="text-[#7a5c3a]" style={{ fontSize: "20px" }}>
              Todos los ambientes disponibles para vos. Hablámoslo por WhatsApp.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#00422E] text-[#F0E6D3] text-sm font-medium rounded-sm group-hover:bg-[#005a3e] transition-colors whitespace-nowrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.35.36 2.61.99 3.69L1.5 16.5l3.93-1.02A7.46 7.46 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            Hablanos
          </span>
        </a>
      </div>
    </section>
  );
}
