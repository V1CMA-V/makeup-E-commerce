import VPlaceholder from '@/components/VPlaceholder'

const entries: [string, string][] = [
  ['I.', 'Cómo aplicar un rouge mate sin secar el labio'],
  ['II.', 'Tres minutos de preparación, antes de cualquier otra cosa'],
  ['III.', 'El ritual de las cinco. Sobre desmaquillarse'],
]

export default function Ritual() {
  return (
    <section className="px-[22px] py-12 md:px-10 md:py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-20 md:items-center">
        <div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-3 md:mb-[18px]">
            05 · Diario
          </div>
          <h2 className="font-title text-3xl md:text-5xl m-0 mb-4 md:mb-6 leading-[1.08] font-normal">
            El cuaderno de <em className="font-heading font-light">maison</em>
          </h2>
          <p className="font-heading text-[15px] md:text-[17px] leading-[1.6] text-[#1d1812]/60 m-0">
            Recetas heredadas, conversaciones con perfumistas y maquilladoras, notas
            de viaje. Un diario sobre la belleza tal como nos gusta entenderla:
            lenta, escrita a mano, en minúscula.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col gap-[14px] md:gap-[18px]">
            {entries.map(([n, t]) => (
              <div
                key={n}
                className="grid gap-3 md:gap-4 pb-3 md:pb-4 border-b border-[#1d1812]/15"
                style={{ gridTemplateColumns: '28px 1fr auto' }}
              >
                <div className="font-mono text-[10px] md:text-[11px] text-[#1d1812]/60">{n}</div>
                <div className="font-heading text-[15px] md:text-[17px]">{t}</div>
                <div className="font-mono text-[10px] md:text-[11px] text-[#1d1812]/60">→</div>
              </div>
            ))}
          </div>
        </div>
        <VPlaceholder
          big
          tone="cream"
          ratio="5/6"
          label="STILL · ATELIER N°03"
          code="MAR · MMXXVI"
          style={{}}
        />
      </div>
    </section>
  )
}
