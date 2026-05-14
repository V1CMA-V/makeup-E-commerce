import VPlaceholder from './VPlaceholder'

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 px-10">
      <div className="grid grid-cols-2 gap-14 items-end">
        <div>
          <div className="font-mono text-sm tracking-widest text-[#5e5142] font-bold mb-8 uppercase">
            Colección Otoño · MMXXVI
          </div>
          <h1 className="text-[132px] leading-none tracking-tight font-heading font-normal text-[#1d1812]">
            El rito
            <br />
            <span className="font-heading font-italic font-light">de la</span>
            <br />
            hora azul.
          </h1>
          <p className="font-heading text-lg leading-relaxed text-[#5e5142] max-w-md mt-6 mb-10 ">
            Una colección compuesta en doce gestos. Texturas que recuerdan al
            velo, pigmentos macerados en pequeñas series, y el cuidado de quien
            aún cree en el oficio del tocador.
          </p>
          <div className="flex gap-3.5 items-center">
            <button className="font-sans uppercase tracking-widest text-xs text-[#f3ecd9] bg-[#1d1812] px-8 py-4">
              Descubrir la colección
            </button>
            <button className="font-heading font-italic text-lg leading-relaxed text-[#1d1812] px-4 py-2 border-b border-[#1d1812]">
              Ver el Rouge N°07 →
            </button>
          </div>
        </div>

        <div className="relative">
          <VPlaceholder
            big
            tone="plum"
            style={{}}
            ratio="3/4"
            label="EDITORIAL · MODELO N°01"
            code="N° 0001"
          />
          <div className="absolute left-[-40px] bottom-[36px] bg-[#f3ecd9] px-10 py-6 border-l border-[#1d1812] max-w-60">
            <div className="font-mono tracking-widest text-xs text-[#1d1812] font-bold mb-2 uppercase">
              Pieza destacada
            </div>
            <div className="font-heading text-2xl tracking-tight font-normal">
              Rouge Vesper N°07
            </div>
            <div className="font-heading font-italic text-base leading-relaxed text-[#5e5142]">
              —— vermeil mate, 3.6 g
            </div>
          </div>
        </div>
      </div>

      {/* Editorial caption row */}
      <div className="flex justify-between mt-18 pt-6 border-t border-[#1d1812]">
        <div className="font-mono tracking-widest text-xs text-[#5e5142] font-bold uppercase">
          01 · Hora azul
        </div>
        <div className="font-mono tracking-widest text-xs text-[#5e5142] font-bold uppercase">
          Fotografía — Atelier interno, París
        </div>
        <div className="font-mono tracking-widest text-xs text-[#5e5142] font-bold uppercase">
          Compuesto en Madrid
        </div>
      </div>
    </section>
  )
}
