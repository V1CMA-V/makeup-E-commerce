'use client'

import { useMemo, useState } from 'react'
import Breadcrumb from './sections/Breadcrumb'
import Categories from './sections/Categories'
import Products from './sections/Products'
import type { Product, SortOrder } from './types/types'

const cats = [
  'Todo',
  'Labios',
  'Rostro',
  'Ojos',
  'Cejas',
  'Skincare',
  'Sets & Kits',
] as const

const catalog: Product[] = [
  {
    id: '1',
    ref: '014',
    name: 'Rouge mate',
    label: 'ROUGE · MATE',
    finish: 'Mate satinado',
    cat: 'Labios',
    tone: 'plum',
    price: '$48',
  },
  {
    id: '2',
    ref: '021',
    name: 'Crema de día',
    label: 'CRÈME · JOUR',
    finish: 'Crema',
    cat: 'Rostro',
    tone: 'sand',
    price: '$92',
  },
  {
    id: '3',
    ref: '033',
    name: 'Sombra terre',
    label: 'OMBRE · TERRE',
    finish: 'Polvo',
    cat: 'Ojos',
    tone: 'deep',
    price: '$36',
  },
  {
    id: '4',
    ref: '047',
    name: 'Lápiz de cejas',
    label: 'TRAIT · SOURCIL',
    finish: 'Crema',
    cat: 'Cejas',
    tone: 'ink',
    price: '$28',
  },
  {
    id: '5',
    ref: '052',
    name: 'Sérum nocturne',
    label: 'SÉRUM · NUIT',
    finish: 'Luminoso',
    cat: 'Skincare',
    tone: 'cream',
    price: '$140',
  },
  {
    id: '6',
    ref: '061',
    name: 'Set Privée',
    label: 'SET · PRIVÉE',
    finish: 'Brillo',
    cat: 'Sets & Kits',
    tone: 'blush',
    price: '$210',
  },
]

export default function Page() {
  const [cat, setCat] = useState<string>('Todo')
  const [sort, setSort] = useState<SortOrder>('Editorial')

  const items = useMemo(() => {
    const filtered =
      cat === 'Todo' ? catalog : catalog.filter((p) => p.cat === cat)
    if (sort === 'Precio') {
      return [...filtered].sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^\d.]/g, '')) -
          parseFloat(b.price.replace(/[^\d.]/g, '')),
      )
    }
    return filtered
  }, [cat, sort])

  return (
    <div className="bg-[#f6f1e5]">
      <Breadcrumb />
      <Categories
        cats={cats}
        cat={cat}
        setCat={setCat}
        sort={sort}
        setSort={setSort}
        count={items.length}
      />
      <Products items={items} />
    </div>
  )
}
