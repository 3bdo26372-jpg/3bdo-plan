import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Background } from './components/Background'
import { ProgramHome } from './components/ProgramHome'
import { DayPage } from './components/DayPage'
import { trainingDays } from './data'

type Dir = 1 | -1 | 0

const variants = {
  initial: (dir: Dir) => ({
    opacity: 0,
    x: dir !== 0 ? (dir > 0 ? '60vw' : '-60vw') : 0,
    y: dir === 0 ? 40 : 0,
    scale: dir === 0 ? 0.97 : 1,
  }),
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: (dir: Dir) => ({
    opacity: 0,
    x: dir !== 0 ? (dir > 0 ? '-60vw' : '60vw') : 0,
    y: dir === 0 ? -30 : 0,
    scale: dir === 0 ? 0.97 : 1,
  }),
}

// Each day is linkable as #/day-3 so a specific workout can be shared.
function dayFromHash(): string | null {
  const id = window.location.hash.replace(/^#\/?/, '')
  return trainingDays.some(d => d.id === id) ? id : null
}

function App() {
  const [activeDayId, setActiveDayId] = useState<string | null>(dayFromHash)
  const [dir, setDir] = useState<Dir>(0)

  const activeDay = trainingDays.find(d => d.id === activeDayId) ?? null
  const activeIndex = trainingDays.findIndex(d => d.id === activeDayId)
  const bgVariant = activeDay?.variant ?? 'home'

  const navigate = useCallback((id: string | null, d: Dir) => {
    setDir(d)
    setActiveDayId(id)
    const hash = id ? `#/${id}` : ''
    if (window.location.hash !== hash) {
      history.pushState(null, '', hash || window.location.pathname)
    }
  }, [])

  const goNext = useCallback(() => {
    if (activeIndex >= 0 && activeIndex < trainingDays.length - 1) navigate(trainingDays[activeIndex + 1].id, 1)
  }, [activeIndex, navigate])
  const goPrev = useCallback(() => {
    if (activeIndex > 0) navigate(trainingDays[activeIndex - 1].id, -1)
  }, [activeIndex, navigate])

  useEffect(() => {
    const onPop = () => { setDir(0); setActiveDayId(dayFromHash()) }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (!activeDay) return
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector('.modal-backdrop')) return
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'Escape') navigate(null, 0)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeDay, goNext, goPrev, navigate])

  return (
    <MotionConfig reducedMotion="user">
    <div className="app-root">
      <Background variant={bgVariant} />
      <AnimatePresence mode="wait" custom={dir} onExitComplete={() => window.scrollTo(0, 0)}>
        {!activeDay ? (
          <motion.div
            key="home"
            custom={dir}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="page-wrap"
          >
            <ProgramHome onSelectDay={id => navigate(id, 0)} />
          </motion.div>
        ) : (
          <motion.div
            key={activeDay.id}
            custom={dir}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
            className="page-wrap"
          >
            <DayPage
              day={activeDay}
              index={activeIndex}
              total={trainingDays.length}
              hasPrev={activeIndex > 0}
              hasNext={activeIndex < trainingDays.length - 1}
              onBack={() => navigate(null, 0)}
              onPrev={goPrev}
              onNext={goNext}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MotionConfig>
  )
}

export default App
