import type { Product } from '../products/types/types'
import { VESPER_CATALOG } from '../products/[id]/data'

export type Order = {
  id: string
  date: string
  total: string
  status: 'Entregado' | 'En tránsito'
  items: number
}

export const orders: Order[] = [
  { id: 'V-001284', date: '14 abril, 2026',   total: '156 $', status: 'Entregado',   items: 3 },
  { id: 'V-001102', date: '22 marzo, 2026',   total: '94 $',  status: 'En tránsito', items: 2 },
  { id: 'V-000981', date: '08 febrero, 2026', total: '210 $', status: 'Entregado',   items: 5 },
  { id: 'V-000814', date: '12 enero, 2026',   total: '48 $',  status: 'Entregado',   items: 1 },
]

export const favorites: Product[] = VESPER_CATALOG.slice(2, 6)

export const tabs = [
  'Pedidos',
  'Privée · Mis tonos',
  'Favoritos',
  'Direcciones',
  'Métodos de pago',
  'Correspondencia',
  'Ajustes',
] as const

export type Tab = (typeof tabs)[number]
