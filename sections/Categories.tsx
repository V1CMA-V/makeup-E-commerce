import type { CSSProperties } from 'react'
import VPlaceholder from '@/components/VPlaceholder'

type Category = {
  label: string
  code: string
  tone: 'plum' | 'sand' | 'ink' | 'deep' | 'blush'
  cell?: CSSProperties
}

const categories: Category[] = [
  { label: 'Labios', code: 'LV', tone: 'plum', cell: { gridColumn: '1', gridRow: '1 / span 2' } },
  { label: 'Rostro', code: 'FR', tone: 'sand', cell: { gridColumn: '2', gridRow: '1' } },
  { label: 'Ojos', code: 'OJ', tone: 'ink', cell: { gridColumn: '3', gridRow: '1' } },
  { label: 'Cejas', code: 'CE', tone: 'deep', cell: { gridColumn: '4', gridRow: '1' } },
  { label: 'Sets & Kits', code: 'KT', tone: 'blush', cell: { gridColumn: '2 / span 3', gridRow: '2' } },
]

const mobileFour = categories.slice(0, 4)

export default function Categories() {
  return (
    <section className="bg-[#1d1812] text-[#f6f1e5] px-[22px] py-10 md:px-10 md:py-[120px]">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#f6f1e5]/60 mb-3">
          04 · Catálogo
        </div>
        <h2 className="font-title text-[36px] m-0 leading-none font-normal">
          Siete gestos,
          <br />
          <em className="font-heading font-light">una silueta.</em>
        </h2>
        <div className="grid grid-cols-2 gap-[10px] mt-6">
          {mobileFour.map(({ label, code, tone }) => (
            <button key={label} type="button" className="relative text-left">
              <VPlaceholder
                style={{}}
                tone={tone}
                ratio="1/1"
                code={code}
                label={label.toUpperCase()}
                big={false}
              />
              <div className="absolute left-3 bottom-[10px] font-title text-[20px] text-[#f6f1e5]">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
        <div className="flex flex-col gap-6 justify-between pr-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#f6f1e5]/55 mb-[18px]">
              04 · Catálogo
            </div>
            <h2 className="font-title text-[64px] m-0 leading-none font-normal">
              Siete
              <br />
              gestos,
              <br />
              <em className="font-heading font-light">una</em>
              <br />
              silueta.
            </h2>
          </div>
          <p className="font-heading text-base text-[#f6f1e5]/70 leading-[1.55] max-w-[320px]">
            Cada categoría se compone como un movimiento: un preludio de piel,
            un trazo de ojo, un rouge en el final. Elija el suyo.
          </p>
        </div>

        <div
          className="col-span-2 grid gap-[14px]"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 240px)',
          }}
        >
          {categories.map(({ label, code, tone, cell }) => (
            <button
              key={label}
              type="button"
              className="relative text-left"
              style={cell}
            >
              <VPlaceholder
                style={{ height: '100%' }}
                tone={tone}
                ratio="auto"
                code={code}
                label={label.toUpperCase()}
                big={false}
              />
              <div className="absolute left-[18px] bottom-4 text-[#f6f1e5]">
                <div
                  className="font-title text-[28px] tracking-[0.02em]"
                  style={{ textShadow: '0 1px 0 rgba(0,0,0,0.2)' }}
                >
                  {label}
                </div>
                <div className="font-mono text-[9px] tracking-[0.24em] uppercase opacity-85">
                  Ver categoría →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
