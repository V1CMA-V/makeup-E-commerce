import type { SortOrder } from '../types/types'

type CategoriesProps = {
  cats: readonly string[]
  cat: string
  setCat: (cat: string) => void
  sort: SortOrder
  setSort: (sort: SortOrder) => void
  count: number
}

export default function Categories({
  cats,
  cat,
  setCat,
  sort,
  setSort,
  count,
}: CategoriesProps) {
  return (
    <section className="px-10 py-5 border-b border-[#1d1812]/15 flex justify-between items-center sticky top-0 bg-[#f6f1e5] z-5">
      <div className="flex gap-1">
        {cats.map((c) => {
          const active = cat === c
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`font-sans px-[14px] py-2 text-[11px] tracking-[0.18em] uppercase rounded-full ${
                active
                  ? 'bg-[#1d1812] text-[#f6f1e5]'
                  : 'bg-transparent text-[#1d1812]'
              }`}
            >
              {c}
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-[18px]">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
          {String(count).padStart(2, '0')} piezas
        </div>
        <div className="w-px h-[14px] bg-[#1d1812]/15" />
        <button
          type="button"
          className="font-sans text-[11px] tracking-[0.18em] uppercase"
        >
          Filtros +
        </button>
        <button
          type="button"
          onClick={() => setSort(sort === 'Editorial' ? 'Precio' : 'Editorial')}
          className="font-sans text-[11px] tracking-[0.18em] uppercase"
        >
          Orden · <em className="font-heading italic">{sort}</em>
        </button>
      </div>
    </section>
  )
}
