import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock3, Dumbbell, Lightbulb, X } from 'lucide-react'
import type { Exercise } from '../data'
import { gifUrl, parseReps, parseSetCount } from '../lib/format'

interface Props {
  exercise: Exercise | null
  variant: string
  onClose: () => void
}

export function ExerciseModal({ exercise, variant, onClose }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  // Keep the latest onClose without re-running the effect on every render.
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const isOpen = exercise !== null

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    cardRef.current?.querySelector<HTMLElement>('.modal-close')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onCloseRef.current(); return }
      if (e.key !== 'Tab' || !cardRef.current) return
      // Keep keyboard focus inside the dialog
      const focusable = cardRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [isOpen])

  // Portal to <body>: the page wrapper is transformed during transitions,
  // which would otherwise break position: fixed.
  return createPortal(
    <AnimatePresence>
      {exercise && (
        <motion.div
          className={`modal-backdrop ${variant}`}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={cardRef}
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={exercise.name}
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
            <div className="modal-media">
              {exercise.gif
                ? <img src={gifUrl(exercise.gif)} alt={exercise.name} />
                : <div className="ex-no-gif"><Dumbbell /></div>}
            </div>
            <div className="modal-body">
              <h2>{exercise.name}</h2>
              <div className="ex-stats">
                <div className="ex-stat"><strong>{parseSetCount(exercise.sets)}</strong><span>sets</span></div>
                {parseReps(exercise.sets) && (
                  <div className="ex-stat"><strong>{parseReps(exercise.sets)}</strong><span>reps</span></div>
                )}
                <div className="ex-stat rest"><strong><Clock3 size={13} />{exercise.rest}</strong><span>rest</span></div>
              </div>
              <div className="ex-muscles">
                {exercise.muscles.map(m => <span key={m}>{m}</span>)}
              </div>
              <p className="ex-note"><Lightbulb size={14} />{exercise.note}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
