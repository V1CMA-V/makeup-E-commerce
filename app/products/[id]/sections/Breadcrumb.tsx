import type { Product } from '../../types/types'

type BreadcrumbProps = {
  product: Product
}

export default function Breadcrumb({ product }: BreadcrumbProps) {
  return (
    <div className="px-[22px] py-4 md:px-10 md:py-7 border-b border-[#1d1812]/10">
      <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] md:tracking-[0.24em] uppercase text-[#1d1812]/60">
        <button type="button">Maison</button> · {' '}
        <button type="button">{product.cat}</button> · {' '}
        <span className="text-[#1d1812]">{product.name}</span>
      </div>
    </div>
  )
}
