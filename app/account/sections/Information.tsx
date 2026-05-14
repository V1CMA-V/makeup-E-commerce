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
    <section className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-14 px-[22px] py-8 md:px-10 md:py-12">
      {/* Nav */}
      <aside>
        <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60 mb-[18px]">
          Mi cuenta
        </div>
        <ul className="hide-scroll list-none p-0 m-0 grid grid-flow-col auto-cols-max md:grid-flow-row md:auto-cols-auto gap-2 md:gap-[2px] overflow-x-auto -mx-[22px] px-[22px] md:mx-0 md:px-0">
          {tabs.map((n) => {
            const active = tab === n
            return (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => setTab(n)}
                  className={`font-heading w-full text-left px-3 md:px-[14px] py-2 md:py-3 text-sm md:text-[17px] rounded-[2px] whitespace-nowrap ${
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

        <div className="hidden md:block mt-8 p-5 bg-[#ece4d2]">
          <div className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#7a2626] mb-[10px]">
            Privée · Or
          </div>
          <div className="font-heading text-base leading-[1.5] text-[#1d1812]/60">
            Tres cuartos de camino hasta el siguiente regalo.{' '}
            <em>Coffret Initiation</em> le espera a 250 $.
          </div>
          <div className="mt-[14px] h-[2px] bg-[#d6cab0]">
            <div className="h-full bg-[#7a2626]" style={{ width: '76%' }} />
          </div>
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#1d1812]/60 mt-2">
            1 248 $ / 1 650 $
          </div>
        </div>
      </aside>

      {/* Main panel */}
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-3 mb-5 md:mb-7">
          <h2 className="font-title text-2xl md:text-4xl m-0 font-normal">
            <em className="font-heading font-light">{tab}</em>
          </h2>
          <Link
            href="/products"
            className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] md:tracking-[0.24em] uppercase border-b border-[#1d1812] pb-1 self-start"
          >
            Continuar comprando →
          </Link>
        </div>

        {tab === 'Pedidos' ? (
          <div>
            {orders.map((o, i) => (
              <div
                key={o.id}
                className={`flex md:grid items-center justify-between md:gap-6 gap-3 py-4 md:py-6 border-b border-[#1d1812]/15 ${
                  i === 0 ? 'md:border-t' : ''
                } md:grid-cols-[0.9fr_1fr_1fr_0.8fr_auto_auto]`}
              >
                <div className="min-w-0">
                  <div className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60 hidden md:block">
                    Pedido
                  </div>
                  <div className="font-heading text-base md:text-lg md:mt-1">{o.id}</div>
                  <div className="font-heading text-[13px] md:hidden italic text-[#1d1812]/60">
                    {o.date} · {o.total}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Fecha
                  </div>
                  <div className="font-heading text-base mt-1">{o.date}</div>
                </div>
                <div className="hidden md:block">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Piezas
                  </div>
                  <div className="font-heading text-base italic mt-1">
                    {o.items} obj.
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
                    Total
                  </div>
                  <div className="font-title text-[22px] mt-1">{o.total}</div>
                </div>
                <div
                  className={`font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase px-[8px] md:px-[10px] py-[3px] md:py-1 border border-current rounded-full whitespace-nowrap ${
                    o.status === 'En tránsito' ? 'text-[#7a2626]' : 'text-[#1d1812]/60'
                  }`}
                >
                  {o.status}
                </div>
                <button
                  type="button"
                  className="hidden md:inline-block font-heading text-sm italic border-b border-[#1d1812]"
                >
                  Ver →
                </button>
              </div>
            ))}

            {/* Recommendations */}
            <div className="mt-10 md:mt-14">
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-[#1d1812]/60 mb-3 md:mb-[18px]">
                Compuesto para usted
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[18px]">
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
                    <div className="font-heading text-[13px] md:text-[15px] mt-2 md:mt-[10px]">{f.name}</div>
                    <div className="font-heading text-[12px] md:text-[13px] italic text-[#1d1812]/60">
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
