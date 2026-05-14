import Link from 'next/link'

type Screen = 'home' | 'plp' | 'account' | (string & {})

type HeaderProps = {
  screen: Screen
  setScreen: (screen: Screen) => void
  brand: string
  cartCount?: number
}

const primaryLinks: { label: string; to?: Screen }[] = [
  { label: 'Tienda', to: '/products' },
  { label: 'Maison' },
  { label: 'Diario' },
  { label: 'Boutiques' },
]

const railCategories = [
  'Sets & Kits',
  'Brochas',
  'Skincare',
  'Labios',
  'Ojos',
  'Rostro',
  'Cejas',
]

const navButton = 'font-sans text-[12px] tracking-[0.2em] uppercase'

export default function Header({ screen, brand, cartCount = 2 }: HeaderProps) {
  return (
    <header className="bg-[#f6f1e5] relative">
      {/* Promo strip */}
      <div className="font-mono text-center py-2 text-[10px] tracking-[0.32em] uppercase text-[#f6f1e5] bg-[#1d1812]">
        Envío gratuito a península · Muestras de cortesía en cada pedido
      </div>

      {/* Main bar */}
      <div
        className="grid items-center px-10 py-[22px] border-b border-[#1d1812]/15"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <div className="flex gap-7">
          {primaryLinks.map(({ label, to }) => (
            <Link key={label} href={to ? to : '/'} className={navButton}>
              <button type="button" className={navButton}>
                {label}
              </button>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="font-title text-[28px] tracking-[0.36em] whitespace-nowrap"
        >
          {brand}
        </button>

        <div className="flex gap-6 justify-end items-center">
          <button type="button" className={navButton}>
            Buscar
          </button>
          <Link href="/account" className={navButton}>
            Cuenta
          </Link>
          <button type="button" className={navButton}>
            Bolsa{' '}
            <span className="font-mono ml-1 text-[11px]">[{cartCount}]</span>
          </button>
        </div>
      </div>

      {/* Category rail */}
      <nav className="flex justify-center gap-9 px-10 py-[14px] border-b border-[#1d1812]/10">
        {railCategories.map((c, i) => {
          const isLabios = i === 3
          const isActive = isLabios && screen === 'plp'
          return (
            <button
              key={c}
              type="button"
              className={`font-heading text-base ${
                isLabios ? 'italic' : 'not-italic'
              } ${isActive ? 'text-[#7a2626]' : 'text-[#1d1812]'}`}
            >
              {c}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
