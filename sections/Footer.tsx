type FooterProps = {
  brand: string
}

type Column = {
  title: string
  items: string[]
}

const columns: Column[] = [
  {
    title: 'Maison',
    items: [
      'Nuestra historia',
      'Filosofía',
      'Ingredientes',
      'Sostenibilidad',
      'Prensa',
    ],
  },
  {
    title: 'Servicios',
    items: [
      'Consulta privada',
      'Lista de regalo',
      'Devoluciones',
      'Envíos',
      'Programa Privée',
    ],
  },
  {
    title: 'Atención',
    items: [
      'Contacto',
      'Preguntas',
      'Boutiques físicas',
      'Profesionales',
      'Trazabilidad',
    ],
  },
]

function FooterColumn({ title, items }: Column) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60 mb-[18px]">
        {title}
      </div>
      <ul className="list-none p-0 m-0 grid gap-2">
        {items.map((i) => (
          <li key={i} className="font-heading text-[15px]">
            {i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer({ brand }: FooterProps) {
  return (
    <footer className="bg-[#ece4d2] px-[22px] pt-12 pb-8 md:px-10 md:pt-[72px] border-t border-[#1d1812]/15">
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-12 md:mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="font-title text-2xl md:text-[32px] tracking-[0.28em] mb-[18px]">
            {brand}
          </div>
          <p className="font-heading text-[15px] md:text-base leading-[1.55] text-[#1d1812]/60 max-w-[320px] m-0">
            Cosmética de autor compuesta en pequeñas series. México, desde
            MMXIX.
          </p>
          <div className="font-mono mt-[22px] text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/40">
            N° 14 · Calle de la Beneficencia · México
          </div>
        </div>

        {columns.map((c) => (
          <FooterColumn key={c.title} title={c.title} items={c.items} />
        ))}

        <div className="col-span-2 md:col-span-1">
          <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60 mb-[18px]">
            Correspondencia
          </div>
          <p className="font-heading text-sm leading-normal text-[#1d1812]/60 mt-0 mb-[14px]">
            Cartas, ritos y avances en exclusiva, una vez al mes.
          </p>
          <div className="flex border-b border-[#1d1812]">
            <input
              placeholder="su correo"
              className="font-heading flex-1 bg-transparent border-0 outline-none py-2 text-[15px] text-[#1d1812]"
            />
            <button
              type="button"
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
            >
              Suscribir →
            </button>
          </div>
        </div>
      </div>

      <hr className="border-0 border-t border-[#1d1812]/15" />

      <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-6">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/40">
          © MMXXVI {brand} · Tous droits réservés
        </div>
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/40 flex flex-wrap gap-3 md:gap-6">
          <span>Aviso legal</span>
          <span>Privacidad</span>
          <span>Cookies</span>
          <span>MX · $</span>
        </div>
      </div>
    </footer>
  )
}
