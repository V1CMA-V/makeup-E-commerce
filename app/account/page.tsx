import Greeting from './sections/Greeting'
import Information from './sections/Information'
import { favorites, orders, tabs } from './data'

export default function AccountPage() {
  return (
    <div className="bg-[#f6f1e5]">
      <Greeting />
      <Information tabs={tabs} orders={orders} favorites={favorites} />
    </div>
  )
}
