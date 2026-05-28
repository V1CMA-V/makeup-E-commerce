import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tienda · Maquillaje y skincare de autor',
  description:
    'Descubre la colección YEY BEAUTY: labios, rostro, ojos, cejas, skincare y sets en pequeñas series. Pigmentos macerados a mano y estuches recargables.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    type: 'website',
    title: 'Tienda · YEY BEAUTY',
    description:
      'Maquillaje y skincare de autor en pequeñas series. Labios, rostro, ojos, cejas, skincare y sets recargables.',
    url: '/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
