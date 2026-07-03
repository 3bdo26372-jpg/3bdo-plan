export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean
  const n = parseInt(full, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

export function rgbString(hex: string): string {
  return hexToRgb(hex).join(', ')
}

export function mix(hexA: string, hexB: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(hexA)
  const [r2, g2, b2] = hexToRgb(hexB)
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`
}

export function lighten(hex: string, t: number): string {
  return mix(hex, '#ffffff', t)
}
