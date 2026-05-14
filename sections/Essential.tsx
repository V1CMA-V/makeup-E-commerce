import VPlaceholder from '@/components/VPlaceholder'
import Link from 'next/link'

// Catalog data
const VESPER_CATALOG = [
  {
    id: 'rouge-07',
    name: 'Rouge Vesper N°07',
    cat: 'Labios',
    ref: 'LV-07',
    price: '48 $',
    finish: 'Mate satinado',
    tone: 'blush',
    label: 'Rouge · Vermeil',
  },
  {
    id: 'rouge-12',
    name: 'Rouge Vesper N°12',
    cat: 'Labios',
    ref: 'LV-12',
    price: '48 $',
    finish: 'Crema',
    tone: 'plum',
    label: 'Rouge · Bourgogne',
  },
  {
    id: 'gloss-01',
    name: 'Brillo Vélin',
    cat: 'Labios',
    ref: 'LV-21',
    price: '36 $',
    finish: 'Brillo glaseado',
    tone: 'cream',
    label: 'Brillo · Miel',
  },
  {
    id: 'base-04',
    name: 'Voile de Teint',
    cat: 'Rostro',
    ref: 'FR-04',
    price: '72 $',
    finish: 'Luminoso',
    tone: 'sand',
    label: 'Base · Voile',
  },
  {
    id: 'pol-02',
    name: 'Poudre Atelier',
    cat: 'Rostro',
    ref: 'FR-08',
    price: '54 $',
    finish: 'Polvo suelto',
    tone: 'cream',
    label: 'Polvo · Atelier',
  },
  {
    id: 'blush-03',
    name: 'Crème de Blush',
    cat: 'Rostro',
    ref: 'FR-12',
    price: '42 $',
    finish: 'Crema',
    tone: 'blush',
    label: 'Blush · Rose',
  },
  {
    id: 'mask-01',
    name: 'Mascara Plume',
    cat: 'Ojos',
    ref: 'OJ-01',
    price: '38 $',
    finish: 'Volumen',
    tone: 'ink',
    label: 'Mascara · Noir',
  },
  {
    id: 'shadow-04',
    name: 'Quatuor d\u2019Ombres',
    cat: 'Ojos',
    ref: 'OJ-09',
    price: '76 $',
    finish: 'Paleta',
    tone: 'deep',
    label: 'Quatuor · Terre',
  },
  {
    id: 'liner-02',
    name: 'Trait de Plume',
    cat: 'Ojos',
    ref: 'OJ-14',
    price: '34 $',
    finish: 'Líquido',
    tone: 'ink',
    label: 'Eyeliner · Encre',
  },
  {
    id: 'brow-01',
    name: 'Sourcil Architecte',
    cat: 'Cejas',
    ref: 'CE-01',
    price: '32 $',
    finish: 'Gel fijador',
    tone: 'sand',
    label: 'Cejas · Gel',
  },
  {
    id: 'skin-01',
    name: 'Sérum Préparateur',
    cat: 'Skincare',
    ref: 'SP-03',
    price: '94 $',
    finish: 'Sérum',
    tone: 'cream',
    label: 'Sérum · Préparateur',
  },
  {
    id: 'brush-set',
    name: 'Étui de Brochas N°1',
    cat: 'Brochas',
    ref: 'BR-01',
    price: '210 $',
    finish: '12 piezas',
    tone: 'deep',
    label: 'Étui · Brochas',
  },
  {
    id: 'kit-01',
    name: 'Coffret Initiation',
    cat: 'Sets',
    ref: 'KT-01',
    price: '180 $',
    finish: '5 piezas',
    tone: 'plum',
    label: 'Coffret · Init.',
  },
]

export default function Essential() {
  const featured = VESPER_CATALOG.slice(0, 4)
  return (
    <section className="px-[22px] py-10 md:px-10 md:py-24">
      <div className="flex items-baseline justify-between mb-6 md:mb-12">
        <div>
          <div className="font-mono text-[9px] md:text-xs tracking-[0.24em] md:tracking-widest text-[#5e5142] font-bold uppercase mb-1 md:mb-4">
            03 · Lo esencial
          </div>
          <h2 className="text-[28px] md:text-[56px] leading-[1.05] tracking-tight font-heading font-normal">
            <span className="md:hidden">Imprescindibles</span>
            <span className="hidden md:inline">
              Las piezas{' '}
              <em className="font-heading font-light">imprescindibles</em>
            </span>
          </h2>
        </div>
        <button className="font-mono text-[9px] md:text-xs tracking-[0.22em] md:tracking-widest text-[#5e5142] font-bold uppercase pb-1 md:border-b md:border-[#1d1812] whitespace-nowrap">
          Ver <span className="hidden md:inline">toda la colección </span>→
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">
        {featured.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="text-left">
            <VPlaceholder
              style={{}}
              big={false}
              tone={p.tone}
              ratio="4/5"
              label={p.label}
              code={p.ref}
            />
            <div className="flex justify-between items-baseline mt-2 md:mt-4 gap-2">
              <div className="min-w-0">
                <div className="font-heading text-sm md:text-lg truncate">
                  {p.name}
                </div>
                <div className="hidden md:block font-mono text-xs tracking-widest text-[#5e5142] font-bold uppercase mt-2">
                  {p.finish}
                </div>
              </div>
              <div className="font-heading text-xs md:text-lg italic md:font-italic text-[#5e5142] md:text-[#1d1812] whitespace-nowrap">
                {p.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
