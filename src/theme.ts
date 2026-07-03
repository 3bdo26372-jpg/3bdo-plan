import { mix, rgbString } from './lib/color'

export type ThemeId = 'aurora' | 'violet' | 'inferno' | 'ocean' | 'candy'

export interface ThemeDef {
  id: ThemeId
  name: string
  /** accent used for "lower" days / brand */
  primary: string
  /** accent used for "upper" days */
  secondary: string
}

export const THEMES: ThemeDef[] = [
  { id: 'aurora', name: 'Aurora', primary: '#00ff88', secondary: '#00c8ff' },
  { id: 'violet', name: 'Violet', primary: '#c084fc', secondary: '#60a5fa' },
  { id: 'inferno', name: 'Inferno', primary: '#ff9d3d', secondary: '#ff4d6a' },
  { id: 'ocean', name: 'Deep Ocean', primary: '#22d3ee', secondary: '#3b82f6' },
  { id: 'candy', name: 'Candy', primary: '#ff6ec7', secondary: '#7c5cff' },
]

export const DEFAULT_THEME_ID: ThemeId = 'aurora'
export const THEME_STORAGE_KEY = '3bdo-theme'

export function getTheme(id: string | null): ThemeDef {
  return THEMES.find(t => t.id === id) ?? THEMES[0]
}

export function applyTheme(theme: ThemeDef) {
  const root = document.documentElement.style
  root.setProperty('--green', theme.primary)
  root.setProperty('--green-rgb', rgbString(theme.primary))
  root.setProperty('--blue', theme.secondary)
  root.setProperty('--blue-rgb', rgbString(theme.secondary))
  const accent3 = mix(theme.primary, theme.secondary, 0.5)
  root.setProperty('--purple', accent3)
  root.setProperty('--purple-rgb', rgbString(accent3))
}
