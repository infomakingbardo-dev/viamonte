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
    <section id="reservar" className="py-28 px-6 bg-[#7F1114]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-[#F0E6D3]/60 uppercase font-medium mb-4 tracking-[0.2em]" style={{ fontSize: "19px" }}>
            Cómo reservar
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#F0E6D3]">
            Tres pasos,
            <br />
            nada más.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#9a1518] mb-16">
          {pasos.map((p) => (
            <div key={p.n} className="bg-[#7F1114] p-8 md:p-10">
              <p
                className="font-[family-name:var(--font-dm-serif)] text-[#F0E6D3] mb-8 leading-none"
                style={{ fontSize: "72px" }}
              >
                {p.n}
              </p>
              <h3 className="text-[#F0E6D3] text-xl font-medium mb-3">{p.titulo}</h3>
              <p className="text-[#F0E6D3]/60 leading-relaxed" style={{ fontSize: "20px" }}>{p.texto}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#6a0e11] border border-[#9a1518] rounded-sm p-8 md:p-10">
          <p className="text-[#F0E6D3]/60 text-xs tracking-widest uppercase font-medium mb-6">
            Ejemplos de reserva
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Sesión de fotos en living", detalle: "3 horas — Living de ingreso + Galería", precio: "$219.300" },
              { label: "Producción en salón", detalle: "2 horas — Salón principal + Patio", precio: "$154.800" },
              { label: "Contenido en habitación", detalle: "2 horas — 3 habitaciones (coordinado)", precio: "$248.400" },
            ].map((ej) => (
              <div key={ej.label} className="border-l-2 border-[#9a1518] pl-4">
                <p className="text-[#F0E6D3] font-medium mb-1" style={{ fontSize: "20px" }}>{ej.label}</p>
                <p className="text-[#F0E6D3]/50 text-sm mb-3">{ej.detalle}</p>
                <p className="text-[#F0E6D3] font-[family-name:var(--font-dm-serif)] text-2xl">{ej.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
