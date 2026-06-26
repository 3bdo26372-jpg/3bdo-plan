import { motion } from 'framer-motion'
import { Calendar, Dumbbell, Flame, Moon, Zap } from 'lucide-react'
import { heroStats, importantNotes, trainingDays, weeklySplit } from '../data'

interface Props {
  onSelectDay: (id: string) => void
}

export function ProgramHome({ onSelectDay }: Props) {
  return (
    <div className="home-shell">
      {/* Nav */}
      <nav className="home-nav">
        <div className="nav-brand">
          <Dumbbell />
          <span>3bdo</span>
        </div>
        <span className="nav-tag">Upper / Lower Program</span>
      </nav>

      {/* Hero */}
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hero-eyebrow"><Flame size={14} /><span>Fat Loss · Muscle Retention</span></div>
        <h1 className="hero-h1">Your <span>Program.</span></h1>
        <p className="hero-sub">180 cm · 116 kg · 6 days / week · Low-back aware · No cardio inside split</p>
        <div className="hero-chips">
          {heroStats.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Day grid */}
      <section className="days-grid-section">
        <div className="section-label"><Calendar size={14} /><span>Select a Workout Day</span></div>
        <div className="days-grid">
          {weeklySplit.map((split, i) => {
            const trainingDay = trainingDays.find(d => d.day === split.day)
            const isRest = split.plan === 'Rest'
            const variant = isRest
              ? 'rest'
              : split.plan.toLowerCase().startsWith('upper')
              ? 'upper'
              : 'lower'

            return (
              <motion.button
                key={split.day}
                className={`day-tile ${variant}`}
                onClick={() => trainingDay && onSelectDay(trainingDay.id)}
                disabled={isRest}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.15 + i * 0.06 }}
                whileHover={!isRest ? { y: -5 } : {}}
                whileTap={!isRest ? { scale: 0.97 } : {}}
              >
                {/* Tile inner glow overlay */}
                <span className="tile-glow" aria-hidden="true" />

                <div className="tile-top">
                  <span className="tile-day">{split.day}</span>
                  {!isRest && (
                    <span className="tile-count">{trainingDay?.exercises.length} ex</span>
                  )}
                </div>

                <div className="tile-title">{split.plan}</div>

                {!isRest && trainingDay && (
                  <>
                    <div className="tile-meta">
                      <span className="tile-badge">{trainingDay.type}</span>
                    </div>
                    <div className="tile-bar-wrap">
                      <div className="tile-bar" style={{ width: `${trainingDay.intensity}%` }} />
                    </div>
                    <div className="tile-cta">
                      Open workout <Zap size={12} />
                    </div>
                  </>
                )}

                {isRest && (
                  <div className="tile-rest">
                    <Moon size={28} />
                    <span>Recovery Day</span>
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Notes */}
      <motion.section
        className="home-notes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="section-label"><Flame size={14} /><span>Training Notes</span></div>
        <ul className="notes-list">
          {importantNotes.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </motion.section>

      <footer className="home-footer">
        <span>3bdo Upper/Lower Program</span>
        <a href="https://wa.me/201064057506" target="_blank" rel="noreferrer">
          Developed by 3bdo
        </a>
      </footer>
    </div>
  )
}
