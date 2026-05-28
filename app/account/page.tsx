import type { Metadata } from 'next'
import Greeting from './sections/Greeting'
import Information from './sections/Information'
import { favorites, orders, tabs } from './data'

export const metadata: Metadata = {
  title: 'Mi cuenta',
  description: 'Gestiona tus pedidos, favoritos y datos en YEY BEAUTY.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/account' },
}

export default function AccountPage() {
  return (
    <div className="bg-[#f6f1e5]">
      <Greeting />
      <Information tabs={tabs} orders={orders} favorites={favorites} />
    </div>
  )
}
