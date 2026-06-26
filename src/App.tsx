import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

function App() {
  const [activeDayId, setActiveDayId] = useState<string | null>(null)
  const [dir, setDir] = useState<Dir>(0)

  const activeDay = trainingDays.find(d => d.id === activeDayId) ?? null
  const activeIndex = trainingDays.findIndex(d => d.id === activeDayId)
  const bgVariant = activeDay
    ? activeDay.title.toLowerCase().startsWith('upper') ? 'upper' : 'lower'
    : 'home'

  function openDay(id: string) { setDir(0); setActiveDayId(id) }
  function goBack()            { setDir(0); setActiveDayId(null) }
  function goNext() {
    if (activeIndex < trainingDays.length - 1) {
      setDir(1); setActiveDayId(trainingDays[activeIndex + 1].id)
    }
  }
  function goPrev() {
    if (activeIndex > 0) {
      setDir(-1); setActiveDayId(trainingDays[activeIndex - 1].id)
    }
  }

  return (
    <div className="app-root">
      <Background variant={bgVariant} />
      <AnimatePresence mode="wait" custom={dir}>
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
            <ProgramHome onSelectDay={openDay} />
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
              onBack={goBack}
              onPrev={goPrev}
              onNext={goNext}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
