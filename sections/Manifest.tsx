export default function Manifest() {
  return (
    <section className="bg-[#f3ecd9] py-24 px-10">
      <div className="grid grid-cols-2 gap-14 items-start">
        <div className="font-mono text-sm tracking-widest text-[#5e5142] font-bold uppercase">
          02
          <br />
          Manifiesto
        </div>
        <div>
          <p className="font-heading text-4xl tracking-tight font-normal">
            Creemos en una belleza{' '}
            <em className="font-heading font-light">habitada</em>: un rouge que
            se reaplica sin culpa, un polvo que se asienta como si nada, una{' '}
            <em className="font-heading font-light">pequeña ceremonia</em>
            cada mañana, frente al espejo.
          </p>
          <div className="grid grid-cols-3 gap-10 mt-20">
            {[
              [
                'Pequeñas series',
                'Cada fórmula se compone en lotes de menos de 800 piezas.',
              ],
              [
                'Atelier propio',
                'Pigmentos macerados y envasados a mano en Madrid.',
              ],
              [
                'Recargable',
                'Los estuches se rellenan. La envoltura se devuelve.',
              ],
            ].map(([h, t]) => (
              <div key={h}>
                <div className="font-heading font-italic text-2xl tracking-tight font-normal">
                  {h}
                </div>
                <div className="font-heading text-base leading-relaxed text-[#5e5142]">
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
