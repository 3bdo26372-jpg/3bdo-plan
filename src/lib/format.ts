const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/** "4 × 8–10" → 4 · "3 × 12 each side" → 3 · "4" → 4 */
export function parseSetCount(sets: string): number {
  const m = sets.match(/^\s*(\d+)/)
  return m ? Number(m[1]) : 1
}

/** "4 × 8–10" → "8–10" · "4" → "" */
export function parseReps(sets: string): string {
  const parts = sets.split(/[×x]/)
  return parts.length > 1 ? parts.slice(1).join('×').trim() : ''
}

export function totalSets(exercises: { sets: string }[]): number {
  return exercises.reduce((sum, ex) => sum + parseSetCount(ex.sets), 0)
}

export function todayName(date = new Date()): string {
  return WEEKDAYS[date.getDay()]
}

export function gifUrl(gif: string): string {
  return `${import.meta.env.BASE_URL}${gif.replace(/^\//, '')}`
}
