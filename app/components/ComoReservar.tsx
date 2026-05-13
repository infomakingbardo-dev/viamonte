const pasos = [
  {
    n: "01",
    titulo: "Elegí el espacio",
    texto: "Seleccioná la zona que necesitás: salón, living, habitación o una combinación. Para zonas comunes, la reserva es inmediata.",
  },
  {
    n: "02",
    titulo: "Confirmá fecha y horario",
    texto: "Indicanos el día y el rango horario exacto. Para habitaciones privadas, esperamos tu mensaje para confirmar disponibilidad.",
  },
  {
    n: "03",
    titulo: "Pagá y listo",
    texto: "Una vez confirmada la disponibilidad, realizás el pago anticipado y el espacio queda reservado. Simple.",
  },
];

export default function ComoReservar() {
  return (
    <section id="reservar" className="py-28 px-6 border-t border-[#2a2926]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#00422E] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Cómo reservar
          </p>
          <h2 className="font-canela uppercase text-5xl md:text-6xl text-[#f0ede8] tracking-tight leading-[0.9]">
            Tres pasos,
            <br />
            nada más.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2926] mb-16">
          {pasos.map((p) => (
            <div key={p.n} className="bg-[#0d0d0b] p-8 md:p-10">
              <p className="font-canela uppercase text-6xl text-[#1e1e1b] mb-8 leading-none tracking-tight">
                {p.n}
              </p>
              <h3 className="text-[#f0ede8] text-lg font-medium mb-3">{p.titulo}</h3>
              <p className="text-[#6b6860] text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>

        {/* Ejemplos */}
        <div className="bg-[#151512] border border-[#2a2926] rounded-sm p-8 md:p-10">
          <p className="text-[#00422E] text-xs tracking-widest uppercase font-medium mb-6">
            Ejemplos de reserva
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Sesión de fotos en living", detalle: "3 horas — Living de ingreso + Galería", precio: "$220.000" },
              { label: "Producción en salón", detalle: "2 horas — Salón principal + Patio", precio: "$155.000" },
              { label: "Contenido en habitación", detalle: "2 horas — 3 habitaciones privadas (coordinado)", precio: "$249.000" },
            ].map((ej) => (
              <div key={ej.label} className="border-l-2 border-[#7F1114]/30 pl-4">
                <p className="text-[#f0ede8] text-sm font-medium mb-1">{ej.label}</p>
                <p className="text-[#6b6860] text-xs mb-3">{ej.detalle}</p>
                <p className="text-[#7F1114] font-medium">{ej.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
