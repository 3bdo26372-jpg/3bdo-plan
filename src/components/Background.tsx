import { useEffect } from 'react'
import {
  AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform,
  type MotionValue,
} from 'framer-motion'

export type BgVariant = 'home' | 'upper' | 'lower' | 'arms'

// Microsoft Fluent Emoji 3D (MIT licensed), served from jsDelivr.
const FLUENT = 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/'

const EMOJI = {
  biceps:   'Flexed%20biceps/Default/3D/flexed_biceps_3d_default.png',
  lifter:   'Person%20lifting%20weights/Default/3D/person_lifting_weights_3d_default.png',
  runner:   'Person%20running/Default/3D/person_running_3d_default.png',
  biker:    'Person%20biking/Default/3D/person_biking_3d_default.png',
  leg:      'Leg/Default/3D/leg_3d_default.png',
  fire:     'Fire/3D/fire_3d.png',
  bolt:     'High%20voltage/3D/high_voltage_3d.png',
  trophy:   'Trophy/3D/trophy_3d.png',
  medal:    '1st%20place%20medal/3D/1st_place_medal_3d.png',
  stopwatch:'Stopwatch/3D/stopwatch_3d.png',
  hundred:  'Hundred%20points/3D/hundred_points_3d.png',
  heart:    'Anatomical%20heart/3D/anatomical_heart_3d.png',
  rocket:   'Rocket/3D/rocket_3d.png',
  droplet:  'Droplet/3D/droplet_3d.png',
  chicken:  'Poultry%20leg/3D/poultry_leg_3d.png',
} as const

type EmojiKey = keyof typeof EMOJI

// Each page type gets its own cast; slots below cycle through it.
const CAST: Record<BgVariant, EmojiKey[]> = {
  home:  ['stopwatch', 'fire', 'bolt', 'lifter', 'medal', 'hundred', 'runner', 'biceps', 'rocket', 'trophy', 'chicken', 'droplet'],
  upper: ['bolt', 'fire', 'medal', 'lifter', 'hundred', 'rocket', 'trophy', 'biceps'],
  lower: ['stopwatch', 'fire', 'droplet', 'runner', 'heart', 'bolt', 'biker', 'leg'],
  arms:  ['bolt', 'fire', 'medal', 'biceps', 'hundred', 'chicken', 'trophy', 'lifter'],
}

interface Slot {
  x: number; y: number     // % of viewport
  size: number             // px
  depth: number            // 0 = far (small, blurred, slow) … 1 = near (big, sharp, fast)
  anim: 1 | 2 | 3 | 4
  delay: number
  desktopOnly?: boolean
}

// Kept mostly to the edges so the content column stays clean.
const SLOTS: Slot[] = [
  { x: 42, y:  1, size: 104, depth: 0.9, anim: 1, delay: 0.0, desktopOnly: true },
  { x: 84, y:  5, size:  96, depth: 0.6, anim: 2, delay: 1.2 },
  { x: 62, y: 16, size:  54, depth: 0.2, anim: 3, delay: 2.4, desktopOnly: true },
  { x: 90, y: 30, size: 110, depth: 0.8, anim: 4, delay: 0.6 },
  { x:  1, y: 38, size:  64, depth: 0.3, anim: 2, delay: 3.0 },
  { x: 36, y: 30, size:  44, depth: 0.1, anim: 1, delay: 4.2, desktopOnly: true },
  { x: 12, y: 58, size: 100, depth: 0.7, anim: 3, delay: 1.8, desktopOnly: true },
  { x: 80, y: 56, size:  70, depth: 0.35, anim: 1, delay: 2.8 },
  { x: 48, y: 70, size:  48, depth: 0.15, anim: 4, delay: 0.9, desktopOnly: true },
  { x: 88, y: 78, size: 124, depth: 1.0, anim: 2, delay: 3.6 },
  { x:  4, y: 82, size:  86, depth: 0.55, anim: 4, delay: 2.1 },
  { x: 66, y: 90, size:  58, depth: 0.25, anim: 3, delay: 4.8, desktopOnly: true },
]

interface FloaterProps {
  slot: Slot
  emoji: EmojiKey
  index: number
  scrollY: MotionValue<number>
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
}

function Floater({ slot, emoji, index, scrollY, pointerX, pointerY }: FloaterProps) {
  const x = useTransform(pointerX, p => p * slot.depth * 40)
  const y = useTransform<number, number>([scrollY, pointerY], ([s, p]) => -s * slot.depth * 0.4 + p * slot.depth * 30)
  const blur = (1 - slot.depth) * 3.5
  const opacity = 0.3 + slot.depth * 0.4

  return (
    <motion.div
      className={`emoji-float ${slot.desktopOnly ? 'desktop-only' : ''}`}
      style={{ left: `${slot.x}%`, top: `${slot.y}%`, width: slot.size, height: slot.size, x, y, zIndex: Math.round(slot.depth * 10) }}
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      animate={{ opacity, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: index * 0.05 }}
    >
      <div
        className={`emoji-inner anim-${slot.anim}`}
        style={{ animationDelay: `${slot.delay}s`, filter: blur > 0.4 ? `blur(${blur.toFixed(1)}px)` : undefined }}
      >
        <img src={FLUENT + EMOJI[emoji]} alt="" draggable={false} loading="lazy" decoding="async" />
      </div>
    </motion.div>
  )
}

export function Background({ variant = 'home' }: { variant?: BgVariant }) {
  const cast = CAST[variant]
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
      <div className="bg-grid" />

      <AnimatePresence>
        <motion.div
          key={variant}
          className="bg-cast"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SLOTS.map((slot, i) => (
            <Floater
              key={i}
              slot={slot}
              emoji={cast[i % cast.length]}
              index={i}
              scrollY={reduceMotion ? still : scrollY}
              pointerX={reduceMotion ? still : pointerX}
              pointerY={reduceMotion ? still : pointerY}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="bg-vignette" />
    </div>
  )
}
