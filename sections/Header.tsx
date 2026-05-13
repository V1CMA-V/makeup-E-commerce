import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between px-10 py-6">
        {/* Navbar */}
        <div>
          <ul className="flex items-center gap-4 font-sans text-sm">
            <li className="font-sans">
              <Link href="/tienda" className="font-sans">
                Tienda
              </Link>
            </li>
            <li className="font-sans">
              <Link href="/maison" className="font-sans">
                Maison
              </Link>
            </li>
            <li>
              <Link href="/diario" className="font-sans">
                Diario
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="font-sans">
                Boutique
              </Link>
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
              <Link href="/search" className="font-sans">
                Buscar
              </Link>
            </li>
            <li>
              <Link href="/account" className="font-sans">
                Cuenta
              </Link>
            </li>
            <li>
              <Link href="/cart" className="font-sans">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Links Categories */}
      <div className="border-y border-border py-4 px-10 flex justify-center">
        <ul className="flex items-stretch gap-9 font-sans text-sm justify-center">
          <li>
            <Link href="/categories/labios" className="font-heading">
              Seets & Kits
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Brochas
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Skincare
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Labios
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Ojos
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Rostro
            </Link>
          </li>
          <li>
            <Link href="/categories/labios" className="font-heading">
              Cejas
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
