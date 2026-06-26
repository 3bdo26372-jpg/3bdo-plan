import { ArrowUpRight, Gauge, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { ExerciseCard } from './ExerciseCard'
import type { TrainingDay } from '../data'

export function WorkoutDayCard({ day, index }: { day: TrainingDay; index: number }) {
  return (
    <motion.article
      className="day-card"
      data-variant={day.title.toLowerCase().startsWith('upper') ? 'upper' : 'lower'}
      id={day.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.06, 0.28) }}
    >
      <div className="day-head">
        <div>
          <span className="day-kicker">{day.day}</span>
          <h3>{day.title}</h3>
          <p>{day.focus}</p>
        </div>
        <a href={`#${day.id}`} aria-label={`${day.title} section`}>
          <ArrowUpRight />
        </a>
      </div>
      <div className="day-metrics">
        <span><Target />{day.type}</span>
        <span><Gauge />Priority {day.intensity}%</span>
      </div>
      <div className="priority-track" aria-hidden="true">
        <span style={{ width: `${day.intensity}%` }} />
      </div>
      <div className="exercise-stack">
        {day.exercises.map((exercise, exerciseIndex) => (
          <ExerciseCard key={`${day.id}-${exercise.name}`} exercise={exercise} index={exerciseIndex} />
        ))}
      </div>
    </motion.article>
  )
}
