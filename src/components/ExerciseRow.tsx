import { Check, Clock3, Dumbbell, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Exercise } from '../data'

interface Props {
  exercise: Exercise
  index: number
  isUpper: boolean
  checked: boolean
  onToggle: () => void
}

export function ExerciseRow({ exercise, index, isUpper, checked, onToggle }: Props) {
  return (
    <motion.article
      className={`ex-row ${isUpper ? 'upper' : 'lower'} ${checked ? 'done' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.04, 0.28) }}
      layout
    >
      <div className="ex-media">
        {exercise.gif ? (
          <img
            src={`${import.meta.env.BASE_URL}${exercise.gif.replace(/^\//, '')}`}
            alt={exercise.name}
            loading="lazy"
          />
        ) : (
          <div className="ex-no-gif"><Dumbbell /></div>
        )}
      </div>

      <div className="ex-body">
        <div className="ex-header">
          <span className="ex-num">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 className="ex-name">{exercise.name}</h3>
            <span className="ex-sets">{exercise.sets}</span>
          </div>
        </div>
        <div className="ex-muscles">
          {exercise.muscles.map(m => <span key={m}>{m}</span>)}
        </div>
        <div className="ex-meta">
          <span><Clock3 size={13} />{exercise.rest}</span>
          <span><Lightbulb size={13} />{exercise.note}</span>
        </div>
      </div>

      <button
        className={`ex-check ${checked ? 'checked' : ''}`}
        onClick={onToggle}
        aria-label={checked ? 'Mark incomplete' : 'Mark complete'}
      >
        <Check />
      </button>
    </motion.article>
  )
}
