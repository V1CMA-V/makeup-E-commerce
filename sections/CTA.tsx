export default function CTA() {
  return (
    <section className="bg-[#f6f1e5] px-[22px] py-10 md:px-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-14 md:items-center">
        <div className="font-heading font-light italic text-3xl md:text-[40px]">
          Conseil privé
        </div>
        <p className="font-heading text-[15px] md:text-[17px] text-[#1d1812]/60 max-w-[560px] leading-[1.55] m-0">
          Una cita virtual con una de nuestras maquilladoras. Cuarenta minutos,
          una conversación, una rutina compuesta para usted. Sin coste, sin
          compromiso.
        </p>
        <button
          type="button"
          className="font-sans border border-[#1d1812] px-6 py-[14px] text-[10px] md:text-[11px] tracking-[0.26em] uppercase self-start md:self-auto"
        >
          Reservar cita
        </button>
      </div>
    </section>
  )
}
