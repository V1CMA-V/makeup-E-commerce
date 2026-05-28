import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { VESPER_CATALOG } from './products/[id]/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = VESPER_CATALOG.map((product) => ({
    url: `${siteConfig.url}/products/${product.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
}
