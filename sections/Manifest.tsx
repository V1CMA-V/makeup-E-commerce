export default function Manifest() {
  return (
    <section className="bg-[#f3ecd9] py-10 md:py-24 px-[22px] md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-start">
        <div className="font-mono text-[9px] md:text-sm tracking-[0.28em] md:tracking-widest text-[#5e5142] font-bold uppercase">
          02
          <span className="md:hidden"> · </span>
          <br className="hidden md:inline" />
          Manifiesto
        </div>
        <div>
          <p className="font-heading text-[22px] md:text-4xl leading-[1.2] md:leading-tight tracking-tight font-normal">
            Creemos en una belleza{' '}
            <em className="font-heading font-light">habitada</em>: un rouge que
            se reaplica sin culpa, un polvo que se asienta como si nada, una{' '}
            <em className="font-heading font-light">pequeña ceremonia</em>
            cada mañana, frente al espejo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-20">
            {[
              [
                'Pequeñas series',
                'Cada fórmula se compone en lotes de menos de 800 piezas.',
              ],
              [
                'Atelier propio',
                'Pigmentos macerados y envasados a mano en México.',
              ],
              [
                'Recargable',
                'Los estuches se rellenan. La envoltura se devuelve.',
              ],
            ].map(([h, t]) => (
              <div key={h}>
                <div className="font-heading font-italic text-xl md:text-2xl tracking-tight font-normal">
                  {h}
                </div>
                <div className="font-heading text-[15px] md:text-base leading-relaxed text-[#5e5142]">
                  {t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
