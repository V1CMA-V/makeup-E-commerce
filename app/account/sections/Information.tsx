'use client'

import { useState } from 'react'
import Link from 'next/link'
import VPlaceholder from '@/components/VPlaceholder'
import type { Product } from '../../products/types/types'
import type { Order, Tab } from '../data'

type InformationProps = {
  tabs: readonly Tab[]
  orders: Order[]
  favorites: Product[]
}

export default function Information({ tabs, orders, favorites }: InformationProps) {
  const [tab, setTab] = useState<Tab>('Pedidos')

  return (
    <section
      className="grid gap-14 px-10 py-12"
      style={{ gridTemplateColumns: '240px 1fr' }}
    >
      {/* Nav */}
      <aside>
        <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60 mb-[18px]">
          Mi cuenta
        </div>
        <ul className="list-none p-0 m-0 grid gap-[2px]">
          {tabs.map((n) => {
            const active = tab === n
            return (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => setTab(n)}
                  className={`font-heading w-full text-left px-[14px] py-3 text-[17px] rounded-[2px] ${
                    active
                      ? 'bg-[#1d1812] text-[#f6f1e5] italic'
                      : 'bg-transparent text-[#1d1812] not-italic'
                  }`}
                >
                  {n}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 p-5 bg-[#ece4d2]">
          <div className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#7a2626] mb-[10px]">
            Privée · Or
          </div>
          <div className="font-heading text-base leading-[1.5] text-[#1d1812]/60">
            Tres cuartos de camino hasta el siguiente regalo.{' '}
            <em>Coffret Initiation</em> le espera a 250 €.
          </div>
          <div className="mt-[14px] h-[2px] bg-[#d6cab0]">
            <div className="h-full bg-[#7a2626]" style={{ width: '76%' }} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#1d1812]/60 mt-2">
            1 248 € / 1 650 €
          </div>
        </div>
      </aside>

      {/* Main panel */}
      <div>
        <div className="flex justify-between items-baseline mb-7">
          <h2 className="font-title text-4xl m-0 font-normal">
            <em className="font-heading font-light">{tab}</em>
          </h2>
          <Link
            href="/products"
            className="font-mono text-[11px] tracking-[0.24em] uppercase border-b border-[#1d1812] pb-1"
          >
            Continuar comprando →
          </Link>
        </div>

        {tab === 'Pedidos' ? (
          <div>
            {orders.map((o, i) => (
              <div
                key={o.id}
                className={`grid gap-6 items-center py-6 border-b border-[#1d1812]/15 ${
                  i === 0 ? 'border-t' : ''
                }`}
                style={{ gridTemplateColumns: '0.9fr 1fr 1fr 0.8fr auto auto' }}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Pedido
                  </div>
                  <div className="font-heading text-lg mt-1">{o.id}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Fecha
                  </div>
                  <div className="font-heading text-base mt-1">{o.date}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Piezas
                  </div>
                  <div className="font-heading text-base italic mt-1">
                    {o.items} obj.
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Total
                  </div>
                  <div className="font-title text-[22px] mt-1">{o.total}</div>
                </div>
                <div
                  className={`font-mono text-[10px] tracking-[0.22em] uppercase px-[10px] py-1 border border-current rounded-full ${
                    o.status === 'En tránsito' ? 'text-[#7a2626]' : 'text-[#1d1812]/60'
                  }`}
                >
                  {o.status}
                </div>
                <button
                  type="button"
                  className="font-heading text-sm italic border-b border-[#1d1812]"
                >
                  Ver →
                </button>
              </div>
            ))}

            {/* Recommendations */}
            <div className="mt-14">
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-[18px]">
                Compuesto para usted
              </div>
              <div className="grid grid-cols-4 gap-[18px]">
                {favorites.map((f) => (
                  <Link
                    key={`${f.id}-rec`}
                    href={`/products/${f.id}`}
                    className="text-left"
                  >
                    <VPlaceholder
                      tone={f.tone}
                      ratio="1/1"
                      label={f.label}
                      code={f.ref}
                      style={{}}
                      big={false}
                    />
                    <div className="font-heading text-[15px] mt-[10px]">{f.name}</div>
                    <div className="font-heading text-[13px] italic text-[#1d1812]/60">
                      {f.price}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <VPlaceholder
              tone="cream"
              ratio="auto"
              label={tab.toUpperCase()}
              code="EN COMPOSICIÓN"
              style={{ aspectRatio: 'auto', height: 280 }}
              big={false}
            />
            <p className="font-heading text-[17px] italic text-[#1d1812]/60 mt-6">
              Sección en preparación. Vuelva pronto.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
