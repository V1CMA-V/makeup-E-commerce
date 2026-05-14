import type { Product } from '../types/types'

export const VESPER_CATALOG: Product[] = [
  { id: 'rouge-07',  ref: 'LV-07', name: 'Rouge Vesper N°07', cat: 'Labios',   price: '48 €',  finish: 'Mate satinado',   tone: 'blush', label: 'Rouge · Vermeil' },
  { id: 'rouge-12',  ref: 'LV-12', name: 'Rouge Vesper N°12', cat: 'Labios',   price: '48 €',  finish: 'Crema',           tone: 'plum',  label: 'Rouge · Bourgogne' },
  { id: 'gloss-01',  ref: 'LV-21', name: 'Brillo Vélin',      cat: 'Labios',   price: '36 €',  finish: 'Brillo glaseado', tone: 'cream', label: 'Brillo · Miel' },
  { id: 'base-04',   ref: 'FR-04', name: 'Voile de Teint',    cat: 'Rostro',   price: '72 €',  finish: 'Luminoso',        tone: 'sand',  label: 'Base · Voile' },
  { id: 'pol-02',    ref: 'FR-08', name: 'Poudre Atelier',    cat: 'Rostro',   price: '54 €',  finish: 'Polvo suelto',    tone: 'cream', label: 'Polvo · Atelier' },
  { id: 'blush-03',  ref: 'FR-12', name: 'Crème de Blush',    cat: 'Rostro',   price: '42 €',  finish: 'Crema',           tone: 'blush', label: 'Blush · Rose' },
  { id: 'mask-01',   ref: 'OJ-01', name: 'Mascara Plume',     cat: 'Ojos',     price: '38 €',  finish: 'Volumen',         tone: 'ink',   label: 'Mascara · Noir' },
  { id: 'shadow-04', ref: 'OJ-09', name: 'Quatuor d’Ombres', cat: 'Ojos', price: '76 €',  finish: 'Paleta',          tone: 'deep',  label: 'Quatuor · Terre' },
  { id: 'liner-02',  ref: 'OJ-14', name: 'Trait de Plume',    cat: 'Ojos',     price: '34 €',  finish: 'Líquido',         tone: 'ink',   label: 'Eyeliner · Encre' },
  { id: 'brow-01',   ref: 'CE-01', name: 'Sourcil Architecte', cat: 'Cejas',   price: '32 €',  finish: 'Gel fijador',     tone: 'sand',  label: 'Cejas · Gel' },
  { id: 'skin-01',   ref: 'SP-03', name: 'Sérum Préparateur', cat: 'Skincare', price: '94 €',  finish: 'Sérum',           tone: 'cream', label: 'Sérum · Préparateur' },
  { id: 'brush-set', ref: 'BR-01', name: 'Étui de Brochas N°1', cat: 'Brochas', price: '210 €', finish: '12 piezas',      tone: 'deep',  label: 'Étui · Brochas' },
  { id: 'kit-01',    ref: 'KT-01', name: 'Coffret Initiation', cat: 'Sets',    price: '180 €', finish: '5 piezas',        tone: 'plum',  label: 'Coffret · Init.' },
]

export function findProduct(id: string): Product {
  return VESPER_CATALOG.find((p) => p.id === id) ?? VESPER_CATALOG[0]
}

export function relatedTo(product: Product, limit = 4): Product[] {
  const same = VESPER_CATALOG.filter(
    (x) => x.cat === product.cat && x.id !== product.id,
  ).slice(0, limit)
  if (same.length < limit) {
    same.push(...VESPER_CATALOG.slice(0, limit - same.length))
  }
  return same
}
