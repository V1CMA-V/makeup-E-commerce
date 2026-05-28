import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} · Cosmética de autor en pequeñas series`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f6f1e5',
          color: '#1d1812',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 14,
            textTransform: 'uppercase',
          }}
        >
          México · MMXIX
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 96, letterSpacing: 24, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, marginTop: 16, color: '#5e5142' }}>
            Cosmética de autor en pequeñas series
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#5e5142',
          }}
        >
          Pigmentos macerados a mano · Estuches recargables
        </div>
      </div>
    ),
    size,
  )
}
