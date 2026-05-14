import VPlaceholder from '@/components/VPlaceholder'

const entries: [string, string][] = [
  ['I.', 'Cómo aplicar un rouge mate sin secar el labio'],
  ['II.', 'Tres minutos de preparación, antes de cualquier otra cosa'],
  ['III.', 'El ritual de las cinco. Sobre desmaquillarse'],
]

export default function Ritual() {
  return (
    <section className="px-10 py-[120px]">
      <div
        className="grid gap-20 items-center"
        style={{ gridTemplateColumns: '0.9fr 1.1fr' }}
      >
        <div>
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-[18px]">
            05 · Diario
          </div>
          <h2 className="font-title text-5xl m-0 mb-6 leading-[1.08] font-normal">
            El cuaderno de <em className="font-heading font-light">maison</em>
          </h2>
          <p className="font-heading text-[17px] leading-[1.6] text-[#1d1812]/60 m-0">
            Recetas heredadas, conversaciones con perfumistas y maquilladoras, notas
            de viaje. Un diario sobre la belleza tal como nos gusta entenderla:
            lenta, escrita a mano, en minúscula.
          </p>
          <div className="mt-8 flex flex-col gap-[18px]">
            {entries.map(([n, t]) => (
              <div
                key={n}
                className="grid gap-4 pb-4 border-b border-[#1d1812]/15"
                style={{ gridTemplateColumns: '32px 1fr auto' }}
              >
                <div className="font-mono text-[11px] text-[#1d1812]/60">{n}</div>
                <div className="font-heading text-[17px]">{t}</div>
                <div className="font-mono text-[11px] text-[#1d1812]/60">→</div>
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
