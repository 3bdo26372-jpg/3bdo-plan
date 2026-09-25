import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Calendar, Dumbbell, Flame, Timer } from 'lucide-react'
import { heroStats, importantNotes, trainingDays, weeklyVolume } from '../data'
import { totalSets } from '../lib/format'

interface Props {
  onSelectDay: (id: string) => void
}

const VOLUME_SCALE = 24

function parseRange(target: string): [number, number] {
  const [lo, hi] = target.split(/[–-]/).map(Number)
  return [lo, hi ?? lo]
}

export function ProgramHome({ onSelectDay }: Props) {
  const weekSets = trainingDays.reduce((sum, d) => sum + totalSets(d.exercises), 0)
  const weekCardio = trainingDays.reduce((sum, d) => sum + d.cardio.duration, 0)

  return (
    <div className="home-shell">
      <nav className="home-nav">
        <div className="nav-brand">
          <Dumbbell />
          <span>3bdo</span>
        </div>
        <span className="nav-tag">7-Day V-Taper Program</span>
      </nav>

      <section className="home-hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-eyebrow"><Flame size={14} /><span>Muscle Build · V-Taper · Daily Cardio</span></div>
          <h1 className="hero-h1">Your <span>Program.</span></h1>
          <p className="hero-sub">180 cm · 120 kg · 7 days / week · Max 60 min · Low-back aware</p>
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
          <div className="hero-numbers">
            <div><strong>7</strong><span>Training days</span></div>
            <div><strong>{weekSets}</strong><span>Sets / week</span></div>
            <div><strong>{weekCardio}</strong><span>Cardio min</span></div>
          </div>
        </motion.div>

      </section>

      <section className="days-grid-section">
        <div className="section-label"><Calendar size={14} /><span>The Week</span></div>
        <div className="days-grid">
          {trainingDays.map((day, i) => {
            return (
              <motion.button
                key={day.id}
                className={`day-tile ${day.variant}`}
                onClick={() => onSelectDay(day.id)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.2 + i * 0.06 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="tile-glow" aria-hidden="true" />
                <span className="tile-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>

                <div className="tile-top">
                  <span className="tile-day">{day.day}</span>
                  <span className="tile-count">{day.exercises.length} ex</span>
                </div>

                <div className="tile-title">{day.title}</div>
                <div className="tile-primary">{day.primary}</div>

                <div className="tile-meta">
                  <span className="tile-badge">{day.type}</span>
                  <span className="tile-duration"><Timer size={11} />{day.estimatedDuration}m · {day.intensity}%</span>
                </div>
                <div className="tile-bar-wrap" title={`Intensity ${day.intensity}%`} aria-hidden="true">
                  <div className="tile-bar" style={{ width: `${day.intensity}%` }} />
                </div>
                <div className="tile-cta">
                  Open workout <ArrowRight size={12} />
                </div>
              </motion.button>
            )
          })}
        </div>
      </section>

      <motion.section
        className="home-volume"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label"><BarChart2 size={14} /><span>Weekly Volume · sets per muscle</span></div>
        <div className="volume-table">
          {weeklyVolume.map((entry, i) => {
            const [lo, hi] = parseRange(entry.target)
            return (
              <div key={entry.muscle} className="volume-row">
                <div className="vol-head">
                  <span className="vol-muscle">{entry.muscle}</span>
                  <span className="vol-sets">{entry.sets}<small> sets</small></span>
                </div>
                <div className="vol-bar-wrap">
                  <span
                    className="vol-target-band"
                    style={{ left: `${(lo / VOLUME_SCALE) * 100}%`, width: `${((hi - lo) / VOLUME_SCALE) * 100}%` }}
                    title={`Target ${entry.target}`}
                  />
                  <motion.div
                    className="vol-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(100, (entry.sets / VOLUME_SCALE) * 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </div>
                <div className="vol-foot">
                  <span>{entry.note}</span>
                  <span className="vol-target">target {entry.target}</span>
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        className="home-notes"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label"><Flame size={14} /><span>Training Rules</span></div>
        <ol className="notes-list">
          {importantNotes.map((note, i) => (
            <li key={note}><span className="note-num">{i + 1}</span>{note}</li>
          ))}
        </ol>
      </motion.section>

      <footer className="home-footer">
        <span>3bdo · 7-Day V-Taper Program</span>
        <a href="https://wa.me/201064057506" target="_blank" rel="noreferrer">
          Developed by 3bdo
        </a>
      </footer>
    </div>
  )
}
