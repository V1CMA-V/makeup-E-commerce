import Link from 'next/link'
import VPlaceholder from '@/components/VPlaceholder'
import type { Product } from '../../types/types'

type RelatedProps = {
  product: Product
  related: Product[]
}

export default function Related({ product, related }: RelatedProps) {
  return (
    <section className="px-[22px] py-12 md:px-10 md:py-24">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6 md:mb-8">
        <h3 className="font-title text-2xl md:text-4xl m-0 font-normal">
          Combinar con <em className="font-heading font-light">{product.name}</em>
        </h3>
        <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
          Curaduría · Atelier
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((r) => (
          <Link
            key={`${r.id}-rel`}
            href={`/products/${r.id}`}
            className="text-left"
          >
            <VPlaceholder
              tone={r.tone}
              ratio="4/5"
              label={r.label}
              code={r.ref}
              style={{}}
              big={false}
            />
            <div className="font-heading text-sm md:text-lg mt-2 md:mt-[14px]">{r.name}</div>
            <div className="font-heading text-[12px] md:text-sm italic text-[#1d1812]/60">
              {r.finish} · {r.price}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
