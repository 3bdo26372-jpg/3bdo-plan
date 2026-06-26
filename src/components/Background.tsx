type Variant = 'home' | 'upper' | 'lower'
type Icon = 'db' | 'bb' | 'kb'

interface GymElem {
  type: Icon; x: number; y: number
  size: number; anim: 1|2|3|4; opacity: number; delay: number
}

const ELEMENTS: GymElem[] = [
  { type: 'bb', x:  4, y:  3, size: 118, anim: 1, opacity: 0.12, delay: 0.0 },
  { type: 'db', x: 79, y:  2, size: 145, anim: 2, opacity: 0.13, delay: 2.0 },
  { type: 'bb', x: 73, y: 14, size: 102, anim: 3, opacity: 0.10, delay: 0.8 },
  { type: 'db', x:  0, y: 33, size: 118, anim: 4, opacity: 0.11, delay: 3.2 },
  { type: 'kb', x: 87, y: 38, size:  82, anim: 1, opacity: 0.10, delay: 1.5 },
  { type: 'db', x: 46, y: 52, size: 105, anim: 2, opacity: 0.09, delay: 4.0 },
  { type: 'bb', x:  5, y: 61, size: 112, anim: 3, opacity: 0.12, delay: 0.4 },
  { type: 'db', x: 78, y: 60, size: 135, anim: 4, opacity: 0.12, delay: 2.6 },
  { type: 'kb', x: 32, y: 80, size:  75, anim: 1, opacity: 0.10, delay: 1.0 },
  { type: 'bb', x: 67, y: 80, size: 105, anim: 2, opacity: 0.10, delay: 3.5 },
  { type: 'db', x: 16, y: 88, size: 108, anim: 3, opacity: 0.11, delay: 2.2 },
  { type: 'bb', x: 89, y: 86, size:  88, anim: 4, opacity: 0.09, delay: 0.2 },
  { type: 'kb', x: 55, y: 18, size:  68, anim: 2, opacity: 0.09, delay: 5.0 },
  { type: 'db', x: 20, y: 50, size:  90, anim: 1, opacity: 0.09, delay: 6.0 },
]

function DumbbellSVG() {
  return (
    <svg viewBox="0 0 120 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Left outer plate */}
      <rect x="0"   y="7"  width="15" height="24" rx="4"/>
      {/* Left inner plate */}
      <rect x="13"  y="11" width="10" height="16" rx="3"/>
      {/* Bar with grip knurling illusion */}
      <rect x="23"  y="16" width="74" height="6"  rx="3"/>
      <rect x="40"  y="15" width="4"  height="8"  rx="1" opacity="0.4"/>
      <rect x="50"  y="15" width="4"  height="8"  rx="1" opacity="0.4"/>
      <rect x="60"  y="15" width="4"  height="8"  rx="1" opacity="0.4"/>
      <rect x="70"  y="15" width="4"  height="8"  rx="1" opacity="0.4"/>
      {/* Right inner plate */}
      <rect x="97"  y="11" width="10" height="16" rx="3"/>
      {/* Right outer plate */}
      <rect x="105" y="7"  width="15" height="24" rx="4"/>
    </svg>
  )
}

function BodybuilderSVG() {
  return (
    <svg viewBox="-12 0 144 172" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="60" cy="16" rx="13" ry="15"/>
      {/* Neck */}
      <rect x="53" y="29" width="14" height="9" rx="3"/>
      {/* Traps / wide upper torso */}
      <path d="M10 38 Q60 32 110 38 L92 98 Q60 106 28 98 Z"/>
      {/* Left upper arm (going outward) */}
      <path d="M10 38 L-10 52 Q-14 65 -8 76 Q-2 86 10 82 Q20 78 18 64 L14 42 Z"/>
      {/* Left forearm (going upward from elbow) */}
      <path d="M-10 52 Q-16 36 -6 26 L10 34 Q2 42 -8 56"/>
      {/* Right upper arm */}
      <path d="M110 38 L130 52 Q134 65 128 76 Q122 86 110 82 Q100 78 102 64 L106 42 Z"/>
      {/* Right forearm */}
      <path d="M130 52 Q136 36 126 26 L110 34 Q118 42 128 56"/>
      {/* Legs */}
      <path d="M28 98 Q24 126 26 158 L42 158 Q45 136 60 124 Q75 136 78 158 L94 158 Q96 126 92 98 Z"/>
    </svg>
  )
}

function KettlebellSVG() {
  return (
    <svg viewBox="0 0 64 76" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Handle arch */}
      <path d="M14 40 Q12 8 32 8 Q52 8 52 40 L46 40 Q46 16 32 16 Q18 16 18 40 Z"/>
      {/* Ball */}
      <circle cx="32" cy="52" r="22"/>
      {/* Horn bumps */}
      <ellipse cx="18" cy="40" rx="5" ry="4"/>
      <ellipse cx="46" cy="40" rx="5" ry="4"/>
    </svg>
  )
}

const ICONS = { db: DumbbellSVG, bb: BodybuilderSVG, kb: KettlebellSVG }

const COLORS: Record<Variant, string[]> = {
  home:  ['#00ff88', '#00c8ff', '#a78bfa'],
  upper: ['#00c8ff', '#4d9fff', '#00e5ff'],
  lower: ['#00ff88', '#00e87a', '#00d4ff'],
}

export function Background({ variant = 'home' }: { variant?: Variant }) {
  const palette = COLORS[variant]

  return (
    <div className={`bg-canvas ${variant}`} aria-hidden="true">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      {ELEMENTS.map((el, i) => {
        const SvgComp = ICONS[el.type]
        const color = palette[i % palette.length]
        return (
          <div
            key={i}
            className={`gym-icon anim-${el.anim}`}
            style={{
              left: `${el.x}%`,
              top:  `${el.y}%`,
              width:  el.size,
              height: el.size,
              opacity: el.opacity,
              color,
              animationDelay: `${el.delay}s`,
              filter: `drop-shadow(0 0 8px ${color}80)`,
            }}
          >
            <SvgComp />
          </div>
        )
      })}

      <div className="bg-grid" />
      <div className="bg-vignette" />
    </div>
  )
}
