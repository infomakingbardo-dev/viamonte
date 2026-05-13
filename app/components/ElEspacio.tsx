const stats = [
  { value: "540", label: "Viamonte" },
  { value: "4", label: "Ambientes" },
  { value: "100%", label: "Luz natural" },
  { value: "CABA", label: "Centro" },
];

export default function ElEspacio() {
  return (
    <section id="espacio" className="py-28 px-6 bg-[#372010]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium mb-4">
              El espacio
            </p>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-6xl text-[#F0E6D3] leading-tight">
              Un estudio pensado
              <br />
              para producir.
            </h2>
          </div>
          <p className="text-[#c9a96e] text-sm leading-relaxed max-w-xs md:text-right">
            Cada rincón del espacio fue pensado para adaptarse a producciones
            audiovisuales, sesiones de fotos y contenidos creativos.
          </p>
        </div>

        {/* Image placeholder grid */}
        <div className="grid grid-cols-12 gap-3 mb-20">
          <div className="col-span-12 md:col-span-8 h-96 md:h-[520px] bg-[#2a1808] rounded-sm border border-[#5a3318] flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border border-[#5a3318] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="1" stroke="#c9a96e" strokeWidth="1"/>
                  <circle cx="8" cy="8" r="2.5" stroke="#c9a96e" strokeWidth="1"/>
                </svg>
              </div>
              <p className="text-[#5a3318] text-xs">Salón principal + patio</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-3">
            <div className="flex-1 h-48 md:h-auto bg-[#2a1808] rounded-sm border border-[#5a3318] flex items-center justify-center">
              <p className="text-[#5a3318] text-xs">Living + galería</p>
            </div>
            <div className="flex-1 h-48 md:h-auto bg-[#2a1808] rounded-sm border border-[#5a3318] flex items-center justify-center">
              <p className="text-[#5a3318] text-xs">Habitaciones</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#5a3318]">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#372010] p-8 text-center">
              <p className="font-[family-name:var(--font-dm-serif)] text-4xl text-[#F0E6D3] mb-1">
                {value}
              </p>
              <p className="text-[#c9a96e] text-xs tracking-widest uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
