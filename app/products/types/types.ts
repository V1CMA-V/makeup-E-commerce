export type Product = {
  id: string
  ref: string
  name: string
  label: string
  finish: string
  cat: string
  tone: 'cream' | 'deep' | 'ink' | 'blush' | 'sand' | 'plum'
  price: string
}

export type SortOrder = 'Editorial' | 'Precio'
