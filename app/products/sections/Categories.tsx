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
    <section className="px-[22px] md:px-10 py-3 md:py-5 border-b border-[#1d1812]/15 flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 sticky top-0 bg-[#f6f1e5] z-10">
      <div className="hide-scroll flex gap-1 overflow-x-auto -mx-[22px] px-[22px] md:mx-0 md:px-0">
        {cats.map((c) => {
          const active = cat === c
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`font-sans px-3 md:px-[14px] py-2 text-[10px] md:text-[11px] tracking-[0.18em] uppercase rounded-full whitespace-nowrap ${
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
      <div className="flex items-center gap-3 md:gap-[18px] justify-between md:justify-end">
        <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
          {String(count).padStart(2, '0')} piezas
        </div>
        <div className="hidden md:block w-px h-[14px] bg-[#1d1812]/15" />
        <button
          type="button"
          className="font-sans text-[10px] md:text-[11px] tracking-[0.18em] uppercase"
        >
          Filtros +
        </button>
        <button
          type="button"
          onClick={() => setSort(sort === 'Editorial' ? 'Precio' : 'Editorial')}
          className="font-sans text-[10px] md:text-[11px] tracking-[0.18em] uppercase"
        >
          Orden · <em className="font-heading italic">{sort}</em>
        </button>
      </div>
    </section>
  )
}
