const espacios = [
  {
    numero: "01",
    nombre: "Living de ingreso + Galería",
    descripcion:
      "Espacio de entrada con galería abierta. Ideal para producciones que requieren circulación o un ambiente más dinámico y editorial.",
    desde: "86.000",
    tag: "Zona común",
    reserva: "Reserva directa",
  },
  {
    numero: "02",
    nombre: "Salón principal + Patio",
    descripcion:
      "El corazón del estudio. Un salón amplio que se abre al patio, con excelente luz natural y la mayor flexibilidad para escenas y producciones.",
    desde: "86.000",
    tag: "Zona común",
    reserva: "Reserva directa",
  },
  {
    numero: "03",
    nombre: "Habitación privada",
    descripcion:
      "Espacios íntimos y controlados, perfectos para sesiones de retrato, contenido de marca o grabaciones que requieren privacidad.",
    desde: "46.000",
    tag: "Privada",
    reserva: "Requiere confirmación",
  },
  {
    numero: "04",
    nombre: "Habitación con baño",
    descripcion:
      "Habitación privada con baño propio. Mayor autonomía para el equipo y los talentos durante la producción.",
    desde: "63.500",
    tag: "Privada",
    reserva: "Requiere confirmación",
  },
];

export default function Espacios() {
  return (
    <section id="espacios" className="py-28 px-6 border-t border-[#2a2926]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#00422E] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Espacios disponibles
          </p>
          <h2 className="font-canela uppercase text-5xl md:text-6xl text-[#f0ede8] tracking-tight leading-[0.9]">
            Elegí tu ambiente.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2926]">
          {espacios.map((e) => (
            <article
              key={e.numero}
              className="bg-[#0d0d0b] p-8 md:p-10 group hover:bg-[#151512] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-canela uppercase text-5xl text-[#2a2926] leading-none group-hover:text-[#3a3835] transition-colors duration-300">
                  {e.numero}
                </span>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs px-2.5 py-1 border border-[#00422E]/40 text-[#00422E] rounded-sm">
                    {e.tag}
                  </span>
                  <span className="text-xs text-[#3a3835]">{e.reserva}</span>
                </div>
              </div>

              <h3 className="text-[#f0ede8] text-xl font-medium mb-3 leading-snug">
                {e.nombre}
              </h3>
              <p className="text-[#6b6860] text-sm leading-relaxed mb-8">
                {e.descripcion}
              </p>

              <div className="flex items-end justify-between pt-6 border-t border-[#2a2926]">
                <div>
                  <p className="text-[#3a3835] text-xs mb-1">desde</p>
                  <p className="text-[#f0ede8] font-medium">
                    ${e.desde}
                    <span className="text-[#6b6860] text-sm font-normal"> / hora</span>
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="text-xs text-[#7F1114] hover:underline flex items-center gap-1.5"
                >
                  Reservar
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Adicionales note */}
        <div className="mt-4 p-5 bg-[#151512] border border-[#2a2926] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-[#f0ede8] text-sm font-medium">Cocina / Baño</p>
            <p className="text-[#6b6860] text-xs mt-0.5">
              Adicional disponible para complementar cualquier reserva
            </p>
          </div>
          <p className="text-[#7F1114] font-medium whitespace-nowrap">
            $46.000 <span className="text-[#6b6860] text-sm font-normal">/ hora</span>
          </p>
        </div>
      </div>
    </section>
  );
}
