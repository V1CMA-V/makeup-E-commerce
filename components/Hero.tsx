import { ArrowRightIcon } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="flex items-center justify-center max-w-7xl mx-auto w-full px-10 pt-16 pb-20">
      {/* Information Hero */}
      <div className="flex flex-col gap-4 flex-1">
        <span className="text-sm font-mono uppercase text-foreground tracking-widest">
          Coleccion Otoño · MMXXVI
        </span>
        <h1 className="text-9xl font-title text-[#1d1812] leading-none font-normal">
          El rito <br />
          <span className="font-heading font-light">
            de la <br />
          </span>
          hora azul.
        </h1>
        <p className="text-lg text-muted-foreground">
          Una colección compuesta en doce gestos. Texturas que recuerdan al
          velo, pigmentos macerados en pequeñas series, y el cuidado de quien
          aún cree en el oficio del tocador.
        </p>
        <div className="flex gap-4">
          <Button>Descrubrir la colección</Button>
          <Button variant="outline">
            Ver el Rouguer N°07 <ArrowRightIcon />
          </Button>
        </div>
      </div>
      {/* Image Hero */}
      <div className="w-full h-full flex items-center justify-center flex-1 relative">
        <div className="w-full h-full bg-purple-900/50 rounded-lg">a</div>

        {/* Decorative elements */}
        

      </div>
    </section>
  )
}
