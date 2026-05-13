export default function Footer() {
  return (
    <footer className="border-t border-[#2a2926] mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-dm-serif)] text-lg text-[#f0ede8]">
          Encuadre
        </span>
        <p className="text-sm text-[#6b6860]">
          Viamonte 540, Buenos Aires &mdash; +54 9 11 5411-8353
        </p>
        <p className="text-xs text-[#3a3835]">
          &copy; {new Date().getFullYear()} Encuadre. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
