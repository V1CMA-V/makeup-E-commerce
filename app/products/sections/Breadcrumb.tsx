export default function Breadcrumb() {
  return (
    <section className="px-10 pt-14 pb-8 border-b border-[#1d1812]/15">
      <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-[18px]">
        <button type="button">Maison</button>
        &nbsp;/&nbsp; Boutique &nbsp;/&nbsp;{' '}
        <span className="text-[#1d1812]">La colección</span>
      </div>
      <div
        className="grid gap-12 items-end"
        style={{ gridTemplateColumns: '1.2fr 1fr' }}
      >
        <h1
          className="font-title text-[96px] m-0 leading-[0.95] tracking-[0.005em] font-normal"
        >
          La colección,
          <br />
          <em className="font-heading font-light">completa</em>.
        </h1>
        <p className="font-heading text-[17px] leading-[1.55] text-[#1d1812]/60 m-0 pb-3">
          Setenta y dos piezas, organizadas en siete familias. Filtre por gesto,
          por finish o por color; reordene a su gusto.
        </p>
      </div>
    </section>
  )
}
