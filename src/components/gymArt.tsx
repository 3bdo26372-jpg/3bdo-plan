import type { ReactElement } from 'react'
import { HeartPulse, Timer } from 'lucide-react'

// Pictogram-style gym characters and equipment for the animated background.
// All drawn on a 100×100 grid in currentColor so the palette can tint them.

const S = { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const

function Svg({ children }: { children: React.ReactNode }) {
  return <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">{children}</svg>
}

// V-shaped torso shared by the front-facing athletes
const TORSO = 'M34 30 Q50 26 66 30 L58 62 Q50 64 42 62 Z'

/** Front view, arms out to the sides holding dumbbells — the V-taper move. */
function LateralRaise() {
  return (
    <Svg>
      <circle cx="50" cy="16" r="8" fill="currentColor" />
      <path d={TORSO} fill="currentColor" />
      <path d="M37 33 L12 35 M63 33 L88 35" {...S} strokeWidth="6" />
      <rect x="5" y="27" width="6" height="16" rx="2" fill="currentColor" />
      <rect x="89" y="27" width="6" height="16" rx="2" fill="currentColor" />
      <path d="M45 62 L41 94 M55 62 L59 94" {...S} strokeWidth="7" />
    </Svg>
  )
}

/** Front view, elbows pinned, dumbbells curled to the shoulders. */
function Curl() {
  return (
    <Svg>
      <circle cx="50" cy="16" r="8" fill="currentColor" />
      <path d={TORSO} fill="currentColor" />
      <path d="M36 33 L31 55 L24 38 M64 33 L69 55 L76 38" {...S} strokeWidth="6" />
      <path d="M17 37 L31 37 M69 37 L83 37" {...S} strokeWidth="4" />
      <rect x="13" y="31" width="5" height="12" rx="2" fill="currentColor" />
      <rect x="30" y="31" width="5" height="12" rx="2" fill="currentColor" />
      <rect x="65" y="31" width="5" height="12" rx="2" fill="currentColor" />
      <rect x="82" y="31" width="5" height="12" rx="2" fill="currentColor" />
      <path d="M45 62 L41 94 M55 62 L59 94" {...S} strokeWidth="7" />
    </Svg>
  )
}

/** Hanging from a bar, arms in a wide V. */
function PullUp() {
  return (
    <Svg>
      <path d="M6 8 L94 8" {...S} strokeWidth="5" />
      <circle cx="50" cy="26" r="8" fill="currentColor" />
      <path d="M38 38 L26 10 M62 38 L74 10" {...S} strokeWidth="6" />
      <path d="M35 37 Q50 33 65 37 L58 66 Q50 68 42 66 Z" fill="currentColor" />
      <path d="M45 66 L43 84 L52 92 M55 66 L57 84 L66 90" {...S} strokeWidth="7" />
    </Svg>
  )
}

/** Side view back squat, bar seen end-on across the shoulders. */
function Squat() {
  return (
    <Svg>
      <circle cx="62" cy="16" r="8" fill="currentColor" />
      <circle cx="49" cy="29" r="12" {...S} strokeWidth="5" />
      <circle cx="49" cy="29" r="3" fill="currentColor" />
      <path d="M54 30 L42 57" {...S} strokeWidth="10" />
      <path d="M56 33 L64 40" {...S} strokeWidth="5" />
      <path d="M42 57 L68 61 L63 90 L74 90" {...S} strokeWidth="8" />
    </Svg>
  )
}

/** Side view sprint — cardio finisher. */
function Runner() {
  return (
    <Svg>
      <circle cx="64" cy="13" r="8" fill="currentColor" />
      <path d="M59 25 L50 54" {...S} strokeWidth="10" />
      <path d="M57 30 L69 42 L80 34 M57 30 L45 40 L37 31" {...S} strokeWidth="6" />
      <path d="M50 54 L68 63 L64 90 M50 54 L41 73 L22 77" {...S} strokeWidth="7" />
    </Svg>
  )
}

function Barbell() {
  return (
    <Svg>
      <path d="M4 50 L96 50" {...S} strokeWidth="4" />
      <rect x="13" y="26" width="8" height="48" rx="3" fill="currentColor" />
      <rect x="22" y="33" width="6" height="34" rx="2" fill="currentColor" />
      <rect x="29" y="44" width="3" height="12" rx="1" fill="currentColor" />
      <rect x="79" y="26" width="8" height="48" rx="3" fill="currentColor" />
      <rect x="72" y="33" width="6" height="34" rx="2" fill="currentColor" />
      <rect x="68" y="44" width="3" height="12" rx="1" fill="currentColor" />
    </Svg>
  )
}

function DumbbellArt() {
  return (
    <Svg>
      <path d="M28 50 L72 50" {...S} strokeWidth="7" />
      <path d="M40 46 L40 54 M47 46 L47 54 M54 46 L54 54 M61 46 L61 54" {...S} strokeWidth="2" opacity="0.5" />
      <rect x="16" y="30" width="12" height="40" rx="4" fill="currentColor" />
      <rect x="7" y="37" width="8" height="26" rx="3" fill="currentColor" />
      <rect x="72" y="30" width="12" height="40" rx="4" fill="currentColor" />
      <rect x="85" y="37" width="8" height="26" rx="3" fill="currentColor" />
    </Svg>
  )
}

function Kettlebell() {
  return (
    <Svg>
      <path d="M33 44 Q31 12 50 12 Q69 12 67 44" {...S} strokeWidth="8" />
      <circle cx="50" cy="63" r="26" fill="currentColor" />
      <path d="M38 58 Q42 50 50 49" stroke="#000" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" fill="none" />
    </Svg>
  )
}

function Plate() {
  return (
    <Svg>
      <circle cx="50" cy="50" r="42" {...S} strokeWidth="6" />
      <circle cx="50" cy="50" r="28" {...S} strokeWidth="3" opacity="0.6" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <text x="50" y="21" textAnchor="middle" fontSize="11" fontWeight="900" fill="currentColor" fontFamily="Inter, sans-serif">20</text>
      <text x="50" y="86" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor" fontFamily="Inter, sans-serif" letterSpacing="1">KG</text>
    </Svg>
  )
}

const Heart = () => <HeartPulse strokeWidth={1.6} width="100%" height="100%" />
const Clock = () => <Timer strokeWidth={1.6} width="100%" height="100%" />

export type ArtKey =
  | 'lateral' | 'curl' | 'pullup' | 'squat' | 'runner'
  | 'barbell' | 'dumbbell' | 'kettlebell' | 'plate' | 'heart' | 'timer'

export const ART: Record<ArtKey, () => ReactElement> = {
  lateral: LateralRaise,
  curl: Curl,
  pullup: PullUp,
  squat: Squat,
  runner: Runner,
  barbell: Barbell,
  dumbbell: DumbbellArt,
  kettlebell: Kettlebell,
  plate: Plate,
  heart: Heart,
  timer: Clock,
}
