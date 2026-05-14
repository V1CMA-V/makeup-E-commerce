'use client'

import { useState } from 'react'
import VPlaceholder from '@/components/VPlaceholder'
import type { Product } from '../../types/types'

type InformationProps = {
  product: Product
}

type Shade = {
  code: string
  name: string
  hex: string
  selected?: boolean
}

const shades: Shade[] = [
  { code: 'N°05', name: 'Rose ancien', hex: '#a55a55' },
  { code: 'N°07', name: 'Vermeil', hex: '#762a26', selected: true },
  { code: 'N°09', name: 'Brique', hex: '#8a3a2c' },
  { code: 'N°12', name: 'Bourgogne', hex: '#4a1820' },
  { code: 'N°14', name: 'Noir Cerise', hex: '#2d0e16' },
]

const accordion: [string, string][] = [
  ['Sobre la fórmula', 'Una emulsión de cera de mimosa y aceite de almendra dulce, infusionada con pigmentos macerados durante cuatro semanas. Acabado mate satinado, comodidad de bálsamo.'],
  ['Aplicación', 'Aplicar desde el centro del labio hacia las comisuras. Para un trazo más definido, perfilar con un pincel de poils de marta. Reaplicar sin secar.'],
  ['Ingredientes', 'Castor seed oil · Hydrogenated jojoba oil · Mimosa wax · Carnauba wax · Tocopherol · Vanilla planifolia · CI pigments. Lista completa en envase.'],
  ['Envío y devolución', 'Envío gratuito en península (24-72h). Devolución sin coste durante 30 días. Recargas disponibles en boutique física.'],
]

export default function Information({ product }: InformationProps) {
  const [open, setOpen] = useState(0)
  const [first, ...rest] = product.name.split(' ')

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-8 md:gap-14 px-[22px] pt-6 pb-12 md:px-10 md:pt-10 md:pb-24">
      {/* Gallery */}
      <div>
        <VPlaceholder
          big
          tone={product.tone}
          ratio="4/5"
          label={product.label}
          code={`${product.ref} · 01/04`}
          style={{}}
        />
        <div className="grid grid-cols-3 gap-2 md:gap-3 mt-2 md:mt-3">
          <VPlaceholder tone="cream" ratio="1/1" label="MACRO" code="02" style={{}} big={false} />
          <VPlaceholder tone="sand" ratio="1/1" label="TEXTURA" code="03" style={{}} big={false} />
          <VPlaceholder tone="ink" ratio="1/1" label="EN PIEL" code="04" style={{}} big={false} />
        </div>
      </div>

      {/* Info column */}
      <div className="md:sticky md:top-8 self-start">
        <div className="font-mono text-[9px] md:text-[11px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-[#1d1812]/60 mb-[10px] md:mb-[14px]">
          {product.cat} · <span className="hidden md:inline">Edición permanente · </span>Ref. {product.ref}
        </div>
        <h1 className="font-title text-[36px] md:text-[56px] m-0 leading-[1.0] md:leading-[1.05] font-normal">
          {first} <em className="font-heading font-light">{rest.join(' ')}</em>
        </h1>
        <p className="font-heading text-[15px] md:text-lg italic text-[#1d1812]/60 mt-[14px] md:mt-[18px] mb-5 md:mb-7 leading-[1.5] md:leading-[1.45]">
          Un rouge mate de comodidad inmediata. Pigmento profundo, acabado de seda
          envejecida. Pensado para reaplicarse sin pensar.
        </p>

        <div className="flex items-baseline gap-3 md:gap-[14px] pb-4 md:pb-[22px] border-b border-[#1d1812]/15">
          <div className="font-title text-[26px] md:text-4xl">{product.price}</div>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#1d1812]/60">
            3.6 g
          </div>
          <div className="flex-1" />
          <div className="font-heading text-[12px] md:text-sm italic text-[#1d1812]/60">
            ★★★★★ <span className="not-italic">· 218</span>
          </div>
        </div>

        {/* Shades */}
        <div className="mt-7">
          <div className="flex justify-between mb-[14px]">
            <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#1d1812]/60">
              Tono — <span className="text-[#1d1812]">N°07 Vermeil</span>
            </div>
            <button
              type="button"
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#7a2626]"
            >
              Guía de tonos →
            </button>
          </div>
          <div className="flex gap-3">
            {shades.map((s) => (
              <button
                key={s.code}
                type="button"
                title={s.name}
                className="w-9 h-9 md:w-11 md:h-11 rounded-full shrink-0"
                style={{
                  background: s.hex,
                  border: s.selected ? '1px solid #1d1812' : '1px solid transparent',
                  outline: s.selected ? '1px solid #1d1812' : 'none',
                  outlineOffset: 3,
                }}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-7 md:mt-9 grid grid-cols-[90px_1fr] md:grid-cols-[110px_1fr] gap-3">
          <div className="flex items-center justify-between border border-[#1d1812] px-[14px]">
            <button type="button" className="font-heading text-xl">−</button>
            <div className="font-heading text-lg">1</div>
            <button type="button" className="font-heading text-xl">+</button>
          </div>
          <button
            type="button"
            className="font-sans bg-[#1d1812] text-[#f6f1e5] py-[14px] text-[10px] md:text-[11px] tracking-[0.28em] md:tracking-[0.32em] uppercase"
          >
            Añadir a la bolsa · {product.price}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 md:gap-6">
          <button
            type="button"
            className="font-heading text-[13px] md:text-sm italic border-b border-[#1d1812]/60"
          >
            ♡ Guardar en favoritos
          </button>
          <button
            type="button"
            className="font-heading text-[13px] md:text-sm italic border-b border-[#1d1812]/60"
          >
            Solicitar muestra (gratis)
          </button>
        </div>

        {/* Service ribbon */}
        <div className="font-mono mt-7 py-[14px] border-y border-[#1d1812]/15 flex justify-between text-[10px] tracking-[0.22em] uppercase text-[#1d1812]/60">
          <span>Envío 24-72h</span>
          <span>·</span>
          <span>Devolución 30 días</span>
          <span>·</span>
          <span>Recargable</span>
        </div>

        {/* Accordion */}
        <div className="mt-6">
          {accordion.map(([title, body], i) => (
            <div key={title} className="border-b border-[#1d1812]/15">
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center py-[18px]"
              >
                <span className="font-heading text-lg">{title}</span>
                <span className="font-mono text-sm">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="font-heading text-[15px] text-[#1d1812]/60 leading-[1.6] m-0 mb-[18px] max-w-[540px]">
                  {body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
