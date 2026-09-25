import { Clock3, Dumbbell, Lightbulb, Maximize2 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Exercise } from '../data'
import { gifUrl, parseReps, parseSetCount } from '../lib/format'

interface Props {
  exercise: Exercise
  index: number
  variant: string
  onOpen: () => void
}

export function ExerciseRow({ exercise, index, variant, onOpen }: Props) {
  const setCount = parseSetCount(exercise.sets)
  const reps = parseReps(exercise.sets)

  return (
    <motion.article
      className={`ex-row ${variant}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.05, 0.3) }}
    >
      <button className="ex-media" onClick={onOpen} aria-label={`View ${exercise.name} demo`}>
        {exercise.gif ? (
          <img src={gifUrl(exercise.gif)} alt={exercise.name} loading="lazy" />
        ) : (
          <div className="ex-no-gif"><Dumbbell /></div>
        )}
        <span className="ex-zoom"><Maximize2 size={14} /></span>
      </button>

      <div className="ex-body">
        <div className="ex-header">
          <span className="ex-num">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="ex-name">{exercise.name}</h3>
        </div>

        <div className="ex-stats">
          <div className="ex-stat">
            <strong>{setCount}</strong>
            <span>{setCount === 1 ? 'set' : 'sets'}</span>
          </div>
          {reps && (
            <div className="ex-stat">
              <strong>{reps}</strong>
              <span>reps</span>
            </div>
          )}
          <div className="ex-stat rest">
            <strong><Clock3 size={13} />{exercise.rest}</strong>
            <span>rest</span>
          </div>
        </div>

        <div className="ex-muscles">
          {exercise.muscles.map(m => <span key={m}>{m}</span>)}
        </div>

        <p className="ex-note"><Lightbulb size={14} />{exercise.note}</p>
      </div>
    </motion.article>
  )
}
