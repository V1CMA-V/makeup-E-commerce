import Hero from '@/components/Hero'
import Manifest from '@/sections/Manifest'

export default async function Home() {
  return (
    <>
      <div className="px-10">
        <Hero />
        <Manifest />
      </div>
    </>
  )
}
