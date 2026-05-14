export default function Breadcrumb() {
  return (
    <section className="px-[22px] pt-8 pb-6 md:px-10 md:pt-14 md:pb-8 border-b border-[#1d1812]/15">
      <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] md:tracking-[0.28em] uppercase text-[#1d1812]/60 mb-3 md:mb-[18px]">
        <button type="button">Maison</button>
        &nbsp;/&nbsp; Boutique &nbsp;/&nbsp;{' '}
        <span className="text-[#1d1812]">La colección</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 md:gap-12 md:items-end">
        <h1 className="font-title text-[44px] md:text-[96px] m-0 leading-[0.95] tracking-[0.005em] font-normal">
          La colección,
          <br />
          <em className="font-heading font-light">completa</em>.
        </h1>
        <p className="font-heading text-[15px] md:text-[17px] leading-[1.55] text-[#1d1812]/60 m-0 md:pb-3">
          Setenta y dos piezas, organizadas en siete familias. Filtre por gesto,
          por finish o por color; reordene a su gusto.
        </p>
      </div>
    </section>
  )
}
