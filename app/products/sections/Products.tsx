import VPlaceholder from '@/components/VPlaceholder'
import Link from 'next/link'
import type { Product } from '../types'

type Filter = {
  title: string
  options: string[]
}

const filters: Filter[] = [
  {
    title: 'Finish',
    options: ['Mate satinado', 'Crema', 'Brillo', 'Luminoso', 'Polvo'],
  },
  {
    title: 'Familia de color',
    options: ['Rouge', 'Bourgogne', 'Vermeil', 'Nude', 'Terre', 'Encre'],
  },
  {
    title: 'Precio',
    options: ['Hasta 40 $', '40 – 80 $', '80 – 150 $', 'Más de 150 $'],
  },
  { title: 'Edición', options: ['Permanente', 'Pequeña serie', 'Numerada'] },
]

type ProductsProps = {
  items: Product[]
}

export default function Products({ items }: ProductsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 p-[22px] md:p-10">
      <aside className="hidden md:block">
        {filters.map(({ title, options }) => (
          <div key={title} className="mb-8">
            <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60 mb-[14px] pb-[10px] border-b border-[#1d1812]/15">
              {title}
            </div>
            <ul className="list-none p-0 m-0 grid gap-2">
              {options.map((o, i) => {
                const selected = i === 0 && title === 'Finish'
                return (
                  <li
                    key={o}
                    className={`font-heading text-[15px] flex justify-between ${
                      selected ? 'text-[#7a2626]' : 'text-[#1d1812]'
                    }`}
                  >
                    <span>
                      {selected ? '✕ ' : ''}
                      {o}
                    </span>
                    <span className="font-mono text-[10px] text-[#1d1812]/40">
                      {(3 + i * 2).toString().padStart(2, '0')}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </aside>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
        {items.map((p, idx) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="text-left relative"
          >
            <VPlaceholder
              tone={p.tone}
              ratio="4/5"
              label={p.label}
              code={p.ref}
              style={{}}
              big={false}
            />
            {idx === 0 && (
              <div className="font-mono absolute top-3 right-3 bg-[#f6f1e5] text-[9px] tracking-[0.22em] uppercase px-2 py-1 text-[#7a2626]">
                Nuevo
              </div>
            )}
            <div className="mt-2 md:mt-4 flex justify-between items-baseline gap-2">
              <div className="min-w-0">
                <div className="font-mono text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-[#1d1812]/60">
                  N° {p.ref}
                </div>
                <div className="font-heading text-sm md:text-xl mt-1 truncate">{p.name}</div>
                <div className="font-heading text-[12px] md:text-sm italic text-[#1d1812]/60 mt-[2px]">
                  {p.finish} · {p.cat}
                </div>
              </div>
              <div className="font-heading text-sm md:text-[18px] italic whitespace-nowrap">{p.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
