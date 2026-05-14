export default function VPlaceholder({
  label = '—',
  tone = 'cream',
  ratio = '1/1',
  code,
  style = {},
  big = false,
}: {
  label: string
  tone: string
  ratio: string
  code: string
  style: React.CSSProperties
  big: boolean
}) {
  // Tones: cream, deep, ink, blush
  const palettes = {
    cream: { bg: '#e8e1cf', stripe: 'rgba(29,24,18,0.10)', ink: '#1d1812' },
    deep: { bg: '#d6cab0', stripe: 'rgba(29,24,18,0.14)', ink: '#1d1812' },
    blush: { bg: '#e9d6cc', stripe: 'rgba(122,38,38,0.18)', ink: '#3a1b1b' },
    ink: { bg: '#1d1812', stripe: 'rgba(246,241,229,0.10)', ink: '#f3ecd9' },
    sand: { bg: '#d8cfb6', stripe: 'rgba(29,24,18,0.13)', ink: '#1d1812' },
    plum: { bg: '#3a1f2a', stripe: 'rgba(246,241,229,0.10)', ink: '#f0d7c8' },
  }
  const p = palettes[tone as keyof typeof palettes] || palettes.cream
  const stripeSize = big ? 22 : 14
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${p.bg} 0, ${p.bg} ${stripeSize - 1}px, ${p.stripe} ${stripeSize - 1}px, ${p.stripe} ${stripeSize}px)`,
        color: p.ink,
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Center plaque */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: p.bg,
            padding: big ? '10px 18px' : '6px 12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: big ? 11 : 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            border: `1px solid ${p.ink === '#1d1812' ? 'rgba(29,24,18,0.25)' : 'rgba(246,241,229,0.25)'}`,
            color: p.ink,
          }}
        >
          {label}
        </div>
      </div>
      {code && (
        <div
          style={{
            position: 'absolute',
            left: big ? 16 : 10,
            top: big ? 16 : 10,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: big ? 10 : 8,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: p.ink,
            opacity: 0.7,
          }}
        >
          {code}
        </div>
      )}
    </div>
  )
}
