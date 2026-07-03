import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronLeft, Flame, LayoutGrid, Trophy } from 'lucide-react'
import type { TrainingDay } from '../data'
import { ExerciseRow } from './ExerciseRow'

interface Props {
  day: TrainingDay
  index: number
  total: number
  hasPrev: boolean
  hasNext: boolean
  onBack: () => void
  onPrev: () => void
  onNext: () => void
}

export function DayPage({ day, index, total, hasPrev, hasNext, onBack, onPrev, onNext }: Props) {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const isUpper = day.title.toLowerCase().startsWith('upper')
  const progress = day.exercises.length > 0 ? (checked.size / day.exercises.length) * 100 : 0
  const isComplete = day.exercises.length > 0 && checked.size === day.exercises.length

  function toggle(i: number) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <div className={`day-shell ${isUpper ? 'upper' : 'lower'}`}>
      {/* Sticky top bar */}
      <div className="day-topbar">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft /><span>All Days</span>
        </button>

        <div className="day-progress-display">
          <motion.span
            key={checked.size}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {checked.size}
          </motion.span>
          <small>/{day.exercises.length}</small>
          <span className="progress-label">done</span>
        </div>

        <div className="day-nav-mini">
          <button onClick={onPrev} disabled={!hasPrev} aria-label="Previous day">
            <ArrowLeft size={16} />
          </button>
          <span>{index + 1} / {total}</span>
          <button onClick={onNext} disabled={!hasNext} aria-label="Next day">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 22 }}
        />
      </div>

      {/* Day header */}
      <header className="day-header">
        <span className="day-kicker">{day.day}</span>
        <h1 className="day-title">{day.title}</h1>
        <p className="day-focus">{day.focus}</p>
        <div className="day-tags">
          <span className="tag-type"><Flame size={13} />{day.type}</span>
          <span className="tag-intensity">Intensity {day.intensity}%</span>
          <span className="tag-count">{day.exercises.length} exercises</span>
        </div>
        <div className="day-intensity-bar">
          <motion.div
            className="day-intensity-fill"
            initial={{ width: 0 }}
            animate={{ width: `${day.intensity}%` }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          />
        </div>
      </header>

      {/* Exercises */}
      <section className="exercise-list">
        {day.exercises.map((ex, i) => (
          <ExerciseRow
            key={ex.name}
            exercise={ex}
            index={i}
            isUpper={isUpper}
            checked={checked.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </section>

      {/* Completion banner */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="completion-banner"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 250, damping: 22 }}
          >
            <Trophy size={20} />
            <span>Workout Complete! Beast mode.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation */}
      <nav className="day-bottom-nav">
        <button className="nav-btn prev" onClick={onPrev} disabled={!hasPrev}>
          <ArrowLeft size={16} /><span>Prev</span>
        </button>
        <button className="nav-btn home" onClick={onBack}>
          <LayoutGrid size={16} /><span>All Days</span>
        </button>
        <button className="nav-btn next" onClick={onNext} disabled={!hasNext}>
          <span>Next</span><ArrowRight size={16} />
        </button>
      </nav>
    </div>
  )
}
