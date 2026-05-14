'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function categorySlug(c: string) {
  return c.toLowerCase().replaceAll(' ', '-')
}

type Screen = 'home' | 'plp' | 'account' | (string & {})

type HeaderProps = {
  screen?: Screen
  brand: string
  cartCount?: number
}

const primaryLinks: { label: string; to: string }[] = [
  { label: 'Tienda', to: '/products' },
  { label: 'Maison', to: '/' },
  { label: 'Diario', to: '/' },
  { label: 'Boutiques', to: '/' },
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

export default function Header({ brand, cartCount = 2 }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeCategoryParam =
    pathname.startsWith('/products') ? searchParams.get('cat') : null

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="bg-[#f6f1e5] relative">
      {/* Promo strip */}
      <div className="font-mono text-center py-2 text-[9px] md:text-[10px] tracking-[0.28em] md:tracking-[0.32em] uppercase text-[#f6f1e5] bg-[#1d1812] px-3">
        Envío gratuito a península · Muestras de cortesía
      </div>

      {/* Mobile bar */}
      <div
        className="md:hidden grid items-center px-[18px] py-[14px] border-b border-[#1d1812]/15"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <button
          type="button"
          aria-label="Menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="justify-self-start"
        >
          <svg width="20" height="14" viewBox="0 0 20 14">
            <path d="M0 1h20M0 7h20M0 13h14" stroke="#1d1812" strokeWidth="1" />
          </svg>
        </button>
        <Link
          href="/"
          className="font-title text-[18px] tracking-[0.28em] whitespace-nowrap"
        >
          {brand}
        </Link>
        <Link
          href="/account"
          className="font-mono text-[10px] tracking-[0.2em] uppercase justify-self-end"
        >
          Bolsa · {cartCount}
        </Link>
      </div>

      {/* Desktop bar */}
      <div
        className="hidden md:grid items-center px-10 py-[22px] border-b border-[#1d1812]/15"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        <div className="flex gap-7">
          {primaryLinks.map(({ label, to }) => (
            <Link key={label} href={to} className={navButton}>
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="font-title text-[28px] tracking-[0.36em] whitespace-nowrap"
        >
          {brand}
        </Link>

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
      <nav className="hide-scroll flex gap-5 md:gap-9 md:justify-center px-[18px] md:px-10 py-[10px] md:py-[14px] border-b border-[#1d1812]/10 overflow-x-auto">
        {railCategories.map((c) => {
          const slug = categorySlug(c)
          const isActive = activeCategoryParam === slug
          return (
            <Link
              href={`/products?cat=${encodeURIComponent(slug)}`}
              key={c}
              className={`font-heading text-sm md:text-base whitespace-nowrap pb-1 ${
                isActive ? 'italic' : 'not-italic'
              } ${
                isActive
                  ? 'text-[#7a2626] border-b border-[#7a2626]'
                  : 'text-[#1d1812] border-b border-transparent'
              }`}
            >
              {c}
            </Link>
          )
        })}
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-[#1d1812]/40"
        />

        {/* Panel */}
        <aside
          className={`absolute top-0 left-0 h-full w-[84%] max-w-[340px] bg-[#f6f1e5] flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-[22px] py-[18px] border-b border-[#1d1812]/15">
            <span className="font-title text-[18px] tracking-[0.28em]">
              {brand}
            </span>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-[0.2em] uppercase"
            >
              Cerrar ✕
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-[22px] py-6">
            <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-4">
              Navegación
            </div>
            <ul className="grid gap-1 mb-8">
              {primaryLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    href={to}
                    onClick={() => setMenuOpen(false)}
                    className="font-title block py-3 text-[28px] leading-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-4">
              Categorías
            </div>
            <ul className="grid gap-2 mb-8">
              {railCategories.map((c) => (
                <li key={c}>
                  <Link
                    href={`/products?cat=${encodeURIComponent(categorySlug(c))}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading block py-2 text-[17px]"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-4">
              Cuenta
            </div>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/account"
                  onClick={() => setMenuOpen(false)}
                  className="font-heading block py-2 text-[17px]"
                >
                  Mi cuenta
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="font-heading block py-2 text-[17px] text-left w-full"
                >
                  Buscar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="font-heading block py-2 text-[17px] text-left w-full"
                >
                  Bolsa · {cartCount}
                </button>
              </li>
            </ul>
          </nav>

          <div className="px-[22px] py-4 border-t border-[#1d1812]/15 font-mono text-[9px] tracking-[0.22em] uppercase text-[#1d1812]/40">
            © MMXXVI {brand}
          </div>
        </aside>
      </div>
    </header>
  )
}
