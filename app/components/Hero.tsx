import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 overflow-hidden bg-[#F0E6D3]">
      {/* Background photo */}
      <Image
        src="/hero.png"
        alt="Encuadre Studio — salón principal"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a0e06]/55" />

      {/* Decorative line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c9b89a] to-transparent" />

      <div className="relative max-w-6xl mx-auto w-full pt-40">
        {/* Eyebrow */}
        <p className="text-[#c9b89a] text-xs tracking-[0.2em] uppercase font-medium mb-8">
          Estudio &mdash; Buenos Aires
        </p>

        {/* Heading */}
        <h1 className="text-[#F0E6D3] mb-10">
          <span className="block font-[family-name:var(--font-dm-serif)] text-6xl md:text-8xl lg:text-9xl leading-none tracking-[-0.02em]">El encuadre</span>
          <span className="block font-dellamor leading-none" style={{ fontSize: "188px", color: "#c9a96e", marginTop: "-72px", marginBottom: "-52px" }}>perfecto</span>
          <span className="block font-[family-name:var(--font-dm-serif)] text-6xl md:text-8xl lg:text-9xl leading-none tracking-[-0.02em]">para tu marca.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#c9b89a] text-base md:text-lg max-w-md leading-relaxed mb-14">
          Producís audiovisual, necesitás un lugar que lo entienda.
          Luz natural, ambientado, flexible. En el centro de Buenos Aires.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#7F1114] text-[#F0E6D3] text-base font-medium rounded-sm hover:bg-[#9a1518] transition-colors duration-200"
          >
            Reservar ahora
          </a>
          <a
            href="#espacio"
            className="inline-flex items-center justify-center px-10 py-5 border border-[#F0E6D3]/40 text-[#F0E6D3] text-base rounded-sm hover:bg-[#F0E6D3]/10 transition-colors duration-200 gap-2"
          >
            Ver el espacio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Luz natural */}
          <div className="bg-[#e8d9c0] border border-[#c9b89a] rounded-sm p-7 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-full border border-[#c9b89a] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" stroke="#372010" strokeWidth="1.2"/>
                <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.34 4.34l1.42 1.42M14.24 14.24l1.42 1.42M4.34 15.66l1.42-1.42M14.24 5.76l1.42-1.42" stroke="#372010" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[#372010] text-2xl font-[family-name:var(--font-dm-serif)] mb-1">Luz natural</p>
              <p className="text-[#7a5c3a] text-sm leading-relaxed">Ventanas amplias en todos los ambientes. Sin luz artificial forzada.</p>
            </div>
          </div>

          {/* Flexible */}
          <div className="bg-[#372010] rounded-sm p-7 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-full border border-[#5a3318] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="10" rx="1.5" stroke="#F0E6D3" strokeWidth="1.2"/>
                <path d="M6 5V4a1 1 0 011-1h6a1 1 0 011 1v1" stroke="#F0E6D3" strokeWidth="1.2"/>
                <path d="M7 10h6M10 8v4" stroke="#F0E6D3" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F0E6D3] text-2xl font-[family-name:var(--font-dm-serif)] mb-1">Flexible</p>
              <p className="text-[#c9a96e] text-sm leading-relaxed">Reservá por la cantidad de horas que necesitás, sin mínimos.</p>
            </div>
          </div>

          {/* Ambientado */}
          <div className="bg-[#00422E] rounded-sm p-7 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-full border border-[#005a3e] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 15h16M4 15V9l6-5 6 5v6" stroke="#F0E6D3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="8" y="11" width="4" height="4" rx="0.5" stroke="#F0E6D3" strokeWidth="1.2"/>
              </svg>
            </div>
            <div>
              <p className="text-[#F0E6D3] text-2xl font-[family-name:var(--font-dm-serif)] mb-1">Ambientado</p>
              <p className="text-[#7dbf9e] text-sm leading-relaxed">Muebles y decoración incluidos. Llegás y producís.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
