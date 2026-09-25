import { useEffect } from 'react'
import {
  AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform,
  type MotionValue,
} from 'framer-motion'
import { lighten, mix } from '../lib/color'
import { ART, type ArtKey } from './gymArt'

export type BgVariant = 'home' | 'upper' | 'lower' | 'arms'

type Slot = 'figure' | 'gear'

interface GymElem {
  slot: Slot
  x: number; y: number
  size: number
  anim: 1 | 2 | 3 | 4
  opacity: number
  delay: number
  depth: number   // parallax strength: 0 = static, 1 = strong
  desktopOnly?: boolean
}

const ELEMENTS: GymElem[] = [
  { slot: 'figure', x:  3, y:  6, size: 150, anim: 1, opacity: 0.16, delay: 0.0, depth: 0.35 },
  { slot: 'gear',   x: 80, y:  3, size: 130, anim: 2, opacity: 0.14, delay: 2.0, depth: 0.15 },
  { slot: 'figure', x: 70, y: 17, size: 125, anim: 3, opacity: 0.13, delay: 0.8, depth: 0.5, desktopOnly: true },
  { slot: 'gear',   x:  1, y: 34, size: 105, anim: 4, opacity: 0.12, delay: 3.2, depth: 0.25 },
  { slot: 'figure', x: 86, y: 38, size: 140, anim: 1, opacity: 0.15, delay: 1.5, depth: 0.4 },
  { slot: 'gear',   x: 44, y: 50, size:  95, anim: 2, opacity: 0.09, delay: 4.0, depth: 0.1, desktopOnly: true },
  { slot: 'figure', x:  6, y: 60, size: 135, anim: 3, opacity: 0.14, delay: 0.4, depth: 0.45 },
  { slot: 'gear',   x: 78, y: 62, size: 120, anim: 4, opacity: 0.13, delay: 2.6, depth: 0.2 },
  { slot: 'gear',   x: 30, y: 80, size:  90, anim: 1, opacity: 0.11, delay: 1.0, depth: 0.3, desktopOnly: true },
  { slot: 'figure', x: 64, y: 80, size: 130, anim: 2, opacity: 0.14, delay: 3.5, depth: 0.5 },
  { slot: 'gear',   x: 12, y: 88, size: 100, anim: 3, opacity: 0.12, delay: 2.2, depth: 0.2 },
  { slot: 'figure', x: 90, y: 86, size: 110, anim: 4, opacity: 0.12, delay: 0.2, depth: 0.35, desktopOnly: true },
  { slot: 'gear',   x: 55, y: 20, size:  70, anim: 2, opacity: 0.10, delay: 5.0, depth: 0.6, desktopOnly: true },
  { slot: 'figure', x: 22, y: 44, size: 115, anim: 1, opacity: 0.10, delay: 6.0, depth: 0.25, desktopOnly: true },
]

// Each page type gets its own cast of characters.
const CAST: Record<BgVariant, Record<Slot, ArtKey[]>> = {
  home:  { figure: ['lateral', 'squat', 'pullup', 'runner', 'curl'], gear: ['dumbbell', 'barbell', 'kettlebell', 'plate', 'heart', 'timer'] },
  upper: { figure: ['pullup', 'lateral', 'curl'],                    gear: ['dumbbell', 'barbell', 'plate', 'timer'] },
  lower: { figure: ['squat', 'runner'],                              gear: ['kettlebell', 'barbell', 'plate', 'heart'] },
  arms:  { figure: ['curl', 'lateral'],                              gear: ['dumbbell', 'timer', 'plate', 'heart'] },
}

// Deep Ocean palette
const PRIMARY = '#22d3ee'
const SECONDARY = '#3b82f6'
const VIOLET = '#a855f7'

const COLORS: Record<BgVariant, string[]> = {
  home:  [PRIMARY, SECONDARY, mix(PRIMARY, SECONDARY, 0.5)],
  upper: [SECONDARY, lighten(SECONDARY, 0.3), mix(SECONDARY, PRIMARY, 0.3)],
  lower: [PRIMARY, lighten(PRIMARY, 0.25), mix(PRIMARY, SECONDARY, 0.4)],
  arms:  [VIOLET, lighten(VIOLET, 0.25), mix(VIOLET, SECONDARY, 0.4)],
}

function castFor(variant: BgVariant) {
  const counters: Record<Slot, number> = { figure: 0, gear: 0 }
  return ELEMENTS.map(el => {
    const list = CAST[variant][el.slot]
    return list[counters[el.slot]++ % list.length]
  })
}

interface FloaterProps {
  el: GymElem
  art: ArtKey
  color: string
  index: number
  scrollY: MotionValue<number>
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

function Floater({ el, art, color, index, scrollY, pointerX, pointerY }: FloaterProps) {
  const Art = ART[art]
  const x = useTransform(pointerX, p => p * el.depth * 36)
  const y = useTransform<number, number>([scrollY, pointerY], ([s, p]) => -s * el.depth * 0.35 + p * el.depth * 28)

  return (
    <motion.div
      className={`gym-icon ${el.desktopOnly ? 'desktop-only' : ''}`}
      style={{ left: `${el.x}%`, top: `${el.y}%`, width: el.size, height: el.size, x, y, color }}
      initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
      animate={{ opacity: el.opacity, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.9, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className={`gym-icon-inner anim-${el.anim}`}
        style={{ animationDelay: `${el.delay}s`, filter: `drop-shadow(0 0 10px ${color}90)` }}
      >
        <Art />
      </div>
    </motion.div>
  )
}

export function Background({ variant = 'home' }: { variant?: BgVariant }) {
  const palette = COLORS[variant]
  const cast = castFor(variant)
  const reduceMotion = useReducedMotion()

  const { scrollY } = useScroll()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const pointerX = useSpring(rawX, { stiffness: 40, damping: 18 })
  const pointerY = useSpring(rawY, { stiffness: 40, damping: 18 })
  const still = useMotionValue(0)

  useEffect(() => {
    if (reduceMotion) return
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      rawX.set((e.clientX / window.innerWidth) * 2 - 1)
      rawY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduceMotion, rawX, rawY])

  return (
    <div className={`bg-canvas ${variant}`} aria-hidden="true">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <AnimatePresence>
        <motion.div
          key={variant}
          className="bg-cast"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {ELEMENTS.map((el, i) => (
            <Floater
              key={i}
              el={el}
              art={cast[i]}
              color={palette[i % palette.length]}
              index={i}
              scrollY={reduceMotion ? still : scrollY}
              pointerX={reduceMotion ? still : pointerX}
              pointerY={reduceMotion ? still : pointerY}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="bg-grid" />
      <div className="bg-vignette" />
    </div>
  )
}
