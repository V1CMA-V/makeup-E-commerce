import VPlaceholder from '@/components/VPlaceholder'

const stats: [string, string][] = [
  ['8h', 'de duración'],
  ['96 %', 'ingredientes naturales'],
  ['+218', 'opiniones verificadas'],
]

export default function Editorial() {
  return (
    <section className="bg-[#ece4d2] px-10 py-24">
      <div
        className="grid gap-16 items-center"
        style={{ gridTemplateColumns: '1fr 1.2fr' }}
      >
        <VPlaceholder
          big
          tone="plum"
          ratio="4/5"
          label="ATELIER · ROUGE"
          code="MAC · MMXXVI"
          style={{}}
        />
        <div>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-[18px]">
            Sobre el rojo
          </div>
          <h2 className="font-title text-[56px] m-0 leading-[1.05] font-normal">
            Un rouge <em className="font-heading font-light">compuesto</em>
            <br />
            como un perfume.
          </h2>
          <p className="font-heading text-[17px] leading-[1.65] text-[#1d1812]/60 mt-7 max-w-[520px]">
            El pigmento se macera durante cuatro semanas en aceite de almendra dulce.
            Después se incorpora a una emulsión de ceras vegetales —mimosa, carnauba—
            que da al rouge su acabado mate, su confort, su persistencia.
            Tres minutos en cada labio. Ocho horas de hold.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-6">
            {stats.map(([n, t]) => (
              <div key={n}>
                <div className="font-title text-4xl">{n}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60 mt-1">
                  {t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
