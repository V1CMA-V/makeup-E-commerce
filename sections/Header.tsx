import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-border">
      {/* Navbar */}
      <div>
        <ul className="flex items-center gap-4 font-sans text-sm">
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/maison">Maison</Link>
          </li>
          <li>
            <Link href="/diario">Diario</Link>
          </li>
          <li>
            <Link href="/boutique">Boutique</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/"
          className="text-4xl font-medium font-title tracking-widest leading-none"
        >
          MAISON VESPER
        </Link>
      </div>

      {/* User Actions */}
      <div>
        <ul className="flex items-center gap-4 font-sans text-sm">
          <li>
            <Link href="/login">Buscar</Link>
          </li>
          <li>
            <Link href="/login">Cuenta</Link>
          </li>
          <li>
            <Link href="/login">Carrito</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
