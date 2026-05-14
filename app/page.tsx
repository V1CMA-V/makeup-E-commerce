import Hero from '@/components/Hero'
import Categories from '@/sections/Categories'
import CTA from '@/sections/CTA'
import Essential from '@/sections/Essential'
import Manifest from '@/sections/Manifest'
import Ritual from '@/sections/Ritual'

export default async function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Manifest />
        <Essential />
        <Categories />
        <Ritual />
        <CTA />
      </div>
    </>
  )
}
