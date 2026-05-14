const stats: [string, string][] = [
  ['Pedidos del año', '14'],
  ['Acumulado', '1 248 $'],
  ['Muestras pendientes', '03'],
  ['Estatus', 'Privée · Or'],
]

export default function Greeting() {
  return (
    <section className="px-[22px] pt-8 pb-6 md:px-10 md:pt-16 md:pb-8 border-b border-[#1d1812]/15">
      <div className="font-mono text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-[#1d1812]/60 mb-3 md:mb-[18px]">
        Privée — Cliente N° 02841 · Desde MMXXII
      </div>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
        <h1 className="font-title text-[44px] md:text-[80px] m-0 leading-none font-normal">
          Bonjour, <em className="font-heading font-light">Sofía</em>.
        </h1>
        <div className="font-heading text-[14px] md:text-[17px] italic text-[#1d1812]/60 md:text-right">
          Última visita: 09 mayo, 2026
          <br />
          Su tono ·{' '}
          <span className="font-mono not-italic text-[10px] md:text-xs tracking-[0.18em]">
            N°07 VERMEIL
          </span>
        </div>
      </div>

      <div className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1d1812]/15 border border-[#1d1812]/15">
        {stats.map(([t, n]) => (
          <div key={t} className="bg-[#f6f1e5] px-4 py-4 md:px-6 md:py-5">
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.22em] uppercase text-[#1d1812]/60">
              {t}
            </div>
            <div className="font-title text-xl md:text-[28px] mt-1 md:mt-2">{n}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
