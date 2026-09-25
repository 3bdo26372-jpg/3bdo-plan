import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Bike, ChevronLeft, Flame, LayoutGrid, Ruler, Target, Timer, Zap } from 'lucide-react'
import type { Exercise, TrainingDay } from '../data'
import { todayName, totalSets } from '../lib/format'
import { ExerciseRow } from './ExerciseRow'
import { ExerciseModal } from './ExerciseModal'

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
  const [openExercise, setOpenExercise] = useState<Exercise | null>(null)
  const isToday = day.day === todayName()
  const sets = totalSets(day.exercises)

  return (
    <div className={`day-shell ${day.variant}`}>
      <div className="day-topbar">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft /><span>All Days</span>
        </button>

        <div className="day-dots" aria-hidden="true">
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className={i === index ? 'active' : ''} />
          ))}
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

      <header className="day-header">
        <div className="day-kicker">
          <span>Day {index + 1} · {day.day}</span>
          {isToday && <span className="today-pill">Today</span>}
        </div>
        <h1 className="day-title">{day.title}</h1>
        <p className="day-focus">{day.focus}</p>

        <div className="day-summary">
          <div className="summary-stat">
            <Flame size={16} />
            <strong>{day.type}</strong>
            <span>Intensity {day.intensity}%</span>
          </div>
          <div className="summary-stat">
            <Zap size={16} />
            <strong>{day.exercises.length}</strong>
            <span>Exercises · {sets} sets</span>
          </div>
          <div className="summary-stat">
            <Bike size={16} />
            <strong>{day.cardio.duration} min</strong>
            <span>Cardio</span>
          </div>
          <div className="summary-stat">
            <Timer size={16} />
            <strong>~{day.estimatedDuration} min</strong>
            <span>Total session</span>
          </div>
        </div>

        <div className="day-intensity-bar">
          <motion.div
            className="day-intensity-fill"
            initial={{ width: 0 }}
            animate={{ width: `${day.intensity}%` }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          />
        </div>

        <div className="muscle-focus-grid">
          <div className="muscle-focus-card primary">
            <span className="mf-label"><Target size={12} /> Primary</span>
            <span className="mf-value">{day.primary}</span>
          </div>
          <div className="muscle-focus-card secondary">
            <span className="mf-label"><Zap size={12} /> Secondary</span>
            <span className="mf-value">{day.secondary}</span>
          </div>
          {day.variant !== 'lower' && (
            <div className="muscle-focus-card width">
              <span className="mf-label"><Ruler size={12} /> V-Taper Focus</span>
              <span className="mf-value">{day.widthFocus}</span>
            </div>
          )}
        </div>
      </header>

      <section className="exercise-list">
        {day.exercises.map((ex, i) => (
          <ExerciseRow
            key={ex.name}
            exercise={ex}
            index={i}
            variant={day.variant}
            onOpen={() => setOpenExercise(ex)}
          />
        ))}

        <motion.div
          className="cardio-block"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="cardio-icon"><Bike size={22} /></div>
          <div className="cardio-body">
            <span className="cardio-label">Finish with cardio</span>
            <div className="cardio-type">{day.cardio.type}</div>
            <p className="cardio-note">{day.cardio.note}</p>
          </div>
          <div className="cardio-duration">
            <strong>{day.cardio.duration}</strong>
            <span>min</span>
          </div>
        </motion.div>
      </section>

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

      <ExerciseModal exercise={openExercise} variant={day.variant} onClose={() => setOpenExercise(null)} />
    </div>
  )
}
