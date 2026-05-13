const incluidos = [
  {
    icono: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.5" stroke="#c9a96e" strokeWidth="1"/>
        <path d="M6 9l2 2 4-4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titulo: "Muebles y decoración",
    texto: "Todos los ambientes están completamente amoblados y decorados. No necesitás traer nada.",
  },
  {
    icono: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v7M9 13v3M3 9H2M16 9h-3M5 5L4 4M14 14l-1-1M5 13l-1 1M14 4l-1 1" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "Luz natural",
    texto: "El espacio trabaja con luz natural. Podés traer tu propia iluminación sin problema.",
  },
  {
    icono: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="9" rx="1" stroke="#c9a96e" strokeWidth="1"/>
        <path d="M6 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#c9a96e" strokeWidth="1"/>
        <path d="M9 9.5v1M7 9.5h4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "Reserva flexible",
    texto: "Podés reservar por la cantidad de horas que necesitás. Sin mínimos para zonas comunes.",
  },
];

const cancelacion = [
  {
    condicion: "Más de 72 hs antes",
    estado: "Cancelación sin cargo",
    color: "text-[#6b9b6b]",
  },
  {
    condicion: "Menos de 72 hs antes",
    estado: "Seña no reembolsable",
    color: "text-[#9b6b6b]",
  },
  {
    condicion: "Cambio de fecha",
    estado: "Gratis con 48 hs de aviso",
    color: "text-[#c9a96e]",
  },
];

const reglas = [
  "El tiempo de reserva comienza al ingresar al espacio.",
  "Solo podés usar las áreas incluidas en tu reserva.",
  "Si necesitás circular entre sectores simultáneamente, se cobra cada uno.",
  "Al finalizar tu tiempo, desalojás y trasladás tus equipos de inmediato.",
  "Para cerrar un sector completo, consultá precio diferencial.",
];

export default function Reglas() {
  return (
    <section id="reglas" className="py-28 px-6 border-t border-[#2a2926]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Incluido & Reglas
          </p>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-[#f0ede8]">
            Todo lo que
            <br />
            necesitás saber.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Incluidos */}
          <div>
            <p className="text-[#f0ede8] text-sm font-medium mb-8 uppercase tracking-widest">
              Qué está incluido
            </p>
            <div className="space-y-8">
              {incluidos.map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <div className="mt-0.5 shrink-0">{item.icono}</div>
                  <div>
                    <p className="text-[#f0ede8] text-sm font-medium mb-1.5">{item.titulo}</p>
                    <p className="text-[#6b6860] text-sm leading-relaxed">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {/* Política de cancelación */}
            <div>
              <p className="text-[#f0ede8] text-sm font-medium mb-6 uppercase tracking-widest">
                Política de cancelación
              </p>
              <div className="space-y-3">
                {cancelacion.map((c) => (
                  <div
                    key={c.condicion}
                    className="flex items-center justify-between py-3 border-b border-[#2a2926]"
                  >
                    <p className="text-[#6b6860] text-sm">{c.condicion}</p>
                    <p className={`text-sm font-medium ${c.color}`}>{c.estado}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reglas de uso */}
            <div>
              <p className="text-[#f0ede8] text-sm font-medium mb-6 uppercase tracking-widest">
                Reglas de uso
              </p>
              <ul className="space-y-3">
                {reglas.map((r) => (
                  <li key={r} className="flex gap-3 text-[#6b6860] text-sm leading-relaxed">
                    <span className="text-[#3a3835] mt-1 shrink-0">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
