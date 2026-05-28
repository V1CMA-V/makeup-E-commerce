/**
 * Central site/brand configuration used for SEO metadata, structured data,
 * sitemaps and robots. Override the public URL per environment with
 * NEXT_PUBLIC_SITE_URL (e.g. https://www.yeybeauty.com).
 */
export const siteConfig = {
  name: 'YEY BEAUTY',
  // Short brand line shown in titles after the page name.
  shortName: 'YEY BEAUTY',
  // Default <title> for the homepage and the suffix template for inner pages.
  defaultTitle: 'YEY BEAUTY · Cosmética de autor en pequeñas series',
  titleTemplate: '%s · YEY BEAUTY',
  description:
    'Cosmética de autor compuesta en pequeñas series en México desde 2019. Pigmentos macerados a mano, estuches recargables y rituales de belleza para cada mañana.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.yeybeauty.com').replace(
    /\/$/,
    '',
  ),
  locale: 'es_MX',
  // ISO 4217 currency used in Product structured data (prices shown as "48 $").
  currency: 'USD',
  keywords: [
    'YEY BEAUTY',
    'cosmética de autor',
    'maquillaje artesanal',
    'cosméticos México',
    'belleza pequeñas series',
    'maquillaje recargable',
    'labiales mate',
    'rouge',
    'skincare',
  ],
  sameAs: [
    'https://www.instagram.com/yeybeauty',
    'https://www.tiktok.com/@yeybeauty',
  ],
} as const

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

/** Extract a numeric price string (e.g. "48 $" -> "48.00") for structured data. */
export function priceToNumber(price: string): string {
  const value = parseFloat(price.replace(/[^\d.]/g, ''))
  return Number.isFinite(value) ? value.toFixed(2) : '0.00'
}
