import type { Metadata } from 'next'
import Breadcrumb from './sections/Breadcrumb'
import Information from './sections/Information'
import Editorial from './sections/Editorial'
import Related from './sections/Related'
import { findProduct, relatedTo, VESPER_CATALOG } from './data'
import { absoluteUrl, priceToNumber, siteConfig } from '@/lib/site'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return VESPER_CATALOG.map((product) => ({ id: product.id }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = findProduct(id)
  const title = `${product.name} · ${product.cat}`
  const description = `${product.name} — ${product.finish}, cosmética de autor de YEY BEAUTY. ${product.cat} en pequeñas series, ${product.price}. Envío gratuito y devolución en 30 días.`
  const canonical = `/products/${product.id}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title: `${product.name} · YEY BEAUTY`,
      description,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} · YEY BEAUTY`,
      description,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = findProduct(id)
  const related = relatedTo(product)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.ref,
    category: product.cat,
    description: `${product.name} — ${product.finish}. Cosmética de autor en pequeñas series de YEY BEAUTY.`,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      price: priceToNumber(product.price),
      priceCurrency: siteConfig.currency,
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(`/products/${product.id}`),
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tienda',
        item: absoluteUrl('/products'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: absoluteUrl(`/products/${product.id}`),
      },
    ],
  }

  return (
    <div className="bg-[#f6f1e5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumb product={product} />
      <Information product={product} />
      <Editorial />
      <Related product={product} related={related} />
    </div>
  )
}
