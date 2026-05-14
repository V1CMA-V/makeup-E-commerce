import Breadcrumb from './sections/Breadcrumb'
import Information from './sections/Information'
import Editorial from './sections/Editorial'
import Related from './sections/Related'
import { findProduct, relatedTo } from './data'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = findProduct(id)
  const related = relatedTo(product)

  return (
    <div className="bg-[#f6f1e5]">
      <Breadcrumb product={product} />
      <Information product={product} />
      <Editorial />
      <Related product={product} related={related} />
    </div>
  )
}
