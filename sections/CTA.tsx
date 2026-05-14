export default function CTA() {
  return (
    <section className="bg-[#f6f1e5] px-10 py-16">
      <div
        className="grid gap-14 items-center"
        style={{ gridTemplateColumns: 'auto 1fr auto' }}
      >
        <div className="font-heading font-light italic text-[40px]">
          Conseil privé
        </div>
        <p className="font-heading text-[17px] text-[#1d1812]/60 max-w-[560px] leading-[1.55] m-0">
          Una cita virtual con una de nuestras maquilladoras. Cuarenta minutos,
          una conversación, una rutina compuesta para usted. Sin coste, sin
          compromiso.
        </p>
        <button
          type="button"
          className="font-sans border border-[#1d1812] px-6 py-[14px] text-[11px] tracking-[0.26em] uppercase"
        >
          Reservar cita
        </button>
      </div>
    </section>
  )
}
