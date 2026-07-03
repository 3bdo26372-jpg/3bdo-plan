import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { THEMES, type ThemeId } from '../theme'

interface Props {
  activeId: ThemeId
  onSelect: (id: ThemeId) => void
}

export function ThemePicker({ activeId, onSelect }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="theme-picker">
      <button
        className="theme-fab"
        onClick={() => setOpen(o => !o)}
        aria-label="Change color theme"
        aria-expanded={open}
      >
        <Palette size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="theme-scrim"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />
            <motion.div
              className="theme-panel"
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              role="dialog"
              aria-label="Color theme picker"
            >
              <span className="theme-panel-label">Color Theme</span>
              <div className="theme-swatch-grid">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    className={`theme-swatch ${t.id === activeId ? 'active' : ''}`}
                    onClick={() => { onSelect(t.id); setOpen(false) }}
                    aria-label={t.name}
                    aria-pressed={t.id === activeId}
                  >
                    <span
                      className="theme-swatch-dot"
                      style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})` }}
                    >
                      {t.id === activeId && <Check size={14} />}
                    </span>
                    <span className="theme-swatch-name">{t.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
