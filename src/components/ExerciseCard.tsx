import { Clock3, Dumbbell, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Exercise } from '../data'

export function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  return (
    <motion.article
      className="exercise-row"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.22) }}
    >
      <div className="exercise-media">
        {exercise.gif ? (
          <img src={`${import.meta.env.BASE_URL}${exercise.gif.replace(/^\//, '')}`} alt={exercise.name} loading="lazy" />
        ) : (
          <div className="gif-placeholder">
            <Dumbbell />
            <strong>No GIF available</strong>
          </div>
        )}
      </div>
      <div className="exercise-copy">
        <div className="exercise-title">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h4>{exercise.name}</h4>
            <p>{exercise.sets}</p>
          </div>
        </div>
        <div className="muscle-badges">
          {exercise.muscles.map((muscle) => <span key={muscle}>{muscle}</span>)}
        </div>
        <div className="exercise-meta">
          <span><Clock3 />{exercise.rest}</span>
          <span><Lightbulb />{exercise.note}</span>
        </div>
      </div>
    </motion.article>
  )
}
