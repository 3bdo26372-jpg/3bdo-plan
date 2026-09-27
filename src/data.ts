export type Exercise = {
  name: string
  sets: string
  rest: string
  muscles: string[]
  note: string
  alternative: string
  gif?: string
}

export type CardioSession = {
  type: string
  duration: number // minutes
  note: string
}

export type TrainingDay = {
  id: string
  day: string
  title: string
  type: string
  focus: string
  intensity: number
  variant: 'upper' | 'lower' | 'arms'
  primary: string
  secondary: string
  widthFocus: string
  cardio: CardioSession
  estimatedDuration: number // total minutes including cardio, computed below
  exercises: Exercise[]
}

export type WeeklyVolumeEntry = {
  muscle: string
  sets: number
  target: string
  note: string
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroStats = ['7 Days / Week', 'Upper-Body Width', 'Chest ×2 · Back ×2', 'Max 60 Min']

// ─── Training Days ────────────────────────────────────────────────────────────
export const trainingDays: TrainingDay[] = [
  // ── DAY 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-1',
    day: 'Day 1',
    title: 'Heavy Back + Rear Delts',
    type: 'Strength',
    focus: 'Lat width, upper back thickness, rear delt detail',
    intensity: 90,
    variant: 'upper',
    primary: 'Back (Lats + Thickness)',
    secondary: 'Rear Delts',
    widthFocus: 'Lats (10 sets) + Lateral Delts (3 sets)',
    cardio: {
      type: 'StairMaster + Incline Walk',
      duration: 13,
      note: '7 min StairMaster at a steady climb, then 6 min incline walk to cool down. Stand tall — no leaning on the rails.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'Lat Pulldown',
        sets: '4 × 6–8',
        rest: '2 min',
        muscles: ['Lats', 'Biceps'],
        note: 'Widest builder of the week. Chest up, drive elbows down to your pockets, full stretch at the top.',
        alternative: 'Assisted Pull-Up machine',
      },
      {
        name: 'Chest-Supported DB Row',
        sets: '4 × 8–10',
        rest: '2 min',
        muscles: ['Mid Back', 'Lats', 'Rear Delts'],
        note: 'Chest stays pinned to the pad — this keeps all load off the lower back. Drive elbows up and back, no shrugging.',
        alternative: 'Seated Cable Row (chest against pad)',
      },
      {
        name: 'Cable Straight-Arm Pulldown',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Lats'],
        note: 'Pure lat isolation. Slight hip hinge but keep a braced, neutral spine — arms do the work, not the torso.',
        alternative: 'Machine Pullover',
      },
      {
        name: 'Rear Delt Machine Fly',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Rear Delts', 'Upper Back'],
        note: 'Light to moderate. Arms nearly straight, squeeze the rear delts — control the return.',
        alternative: 'Chest-Supported DB Reverse Fly',
      },
      {
        name: 'Face Pull',
        sets: '2 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts', 'External Rotators'],
        note: 'Pull to forehead height, elbows high and wide, rotate thumbs back at the end. Great for posture.',
        alternative: 'Band Pull-Apart',
      },
      {
        name: 'DB Lateral Raise',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'First of three shoulder-width sessions. Slight forward lean, lead with the elbow, stop at shoulder height.',
        alternative: 'Machine Lateral Raise',
      },
    ],
  },

  // ── DAY 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-2',
    day: 'Day 2',
    title: 'Heavy Chest + Triceps',
    type: 'Strength',
    focus: 'Upper chest thickness, pressing strength, tricep lockout',
    intensity: 88,
    variant: 'upper',
    primary: 'Chest',
    secondary: 'Triceps',
    widthFocus: 'Upper chest — front of the V',
    cardio: {
      type: 'StairMaster + Incline Walk',
      duration: 13,
      note: '7 min StairMaster, then 6 min incline walk. Keep it easy — pressing strength comes first today.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'Incline DB Press',
        sets: '4 × 6–8',
        rest: '2–3 min',
        muscles: ['Upper Chest', 'Front Delts', 'Triceps'],
        note: 'Main chest lift of the week. 30–45° bench, 2 sec down, stop 1–2 reps short of failure. Feet flat, lower back supported.',
        alternative: 'Incline Smith Machine Press',
      },
      {
        name: 'Machine Chest Press',
        sets: '3 × 8–10',
        rest: '90 sec',
        muscles: ['Chest', 'Triceps'],
        note: 'Machine keeps the spine supported — push hard here. Squeeze at the top, slow eccentric.',
        alternative: 'Flat DB Press',
      },
      {
        name: 'Rope Pushdown',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Triceps (Lateral Head)'],
        note: 'Elbows pinned to your sides. Split the rope apart at the bottom for a full lockout.',
        alternative: 'Straight-Bar Pushdown',
      },
      {
        name: 'Cable Overhead Tricep Extension',
        sets: '2 × 12',
        rest: '60 sec',
        muscles: ['Triceps (Long Head)'],
        note: 'The long head only grows under stretch — let the cable pull your hands fully behind your head.',
        alternative: 'Seated DB Overhead Extension',
      },
    ],
  },

  // ── DAY 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-3',
    day: 'Day 3',
    title: 'Light Legs + Core',
    type: 'Light',
    focus: 'Minimum effective leg work, core stability, full recovery for upper body',
    intensity: 60,
    variant: 'lower',
    primary: 'Quads / Hamstrings',
    secondary: 'Core',
    widthFocus: 'N/A — light leg day',
    cardio: {
      type: 'Easy Walk',
      duration: 15,
      note: 'Flat or very low incline only. Conversational pace — no StairMaster today, the legs already worked.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'Leg Press',
        sets: '3 × 10–12',
        rest: '2 min',
        muscles: ['Quads', 'Glutes'],
        note: 'Maintenance only. Feet shoulder-width mid-plate, never let the hips round off the pad at the bottom. No barbell squat.',
        alternative: 'Horizontal (seated) Leg Press',
      },
      {
        name: 'Seated Leg Curl',
        sets: '2 × 12–15',
        rest: '90 sec',
        muscles: ['Hamstrings'],
        note: 'Seated version keeps the lower back supported. Slow 3 sec eccentric, full extension between reps.',
        alternative: 'Lying Leg Curl',
      },
      {
        name: 'Standing Calf Raise',
        sets: '2 × 15',
        rest: '60 sec',
        muscles: ['Calves'],
        note: 'Full range — heel below the step, 1 sec pause at the top. No bouncing.',
        alternative: 'Seated Calf Raise',
      },
      {
        name: 'Cable Crunch',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Abs'],
        note: 'Kneel, rope at your temples, curl the ribs toward the hips. Spinal flexion under control — stop if it pinches.',
        alternative: 'Seated Ab Crunch Machine',
      },
      {
        name: 'Pallof Press',
        sets: '2 × 12 each side',
        rest: '60 sec',
        muscles: ['Core (Anti-Rotation)', 'Obliques'],
        note: 'The safest core work for a disc issue — you brace against rotation instead of bending the spine.',
        alternative: 'Dead Bug',
      },
    ],
  },

  // ── DAY 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-4',
    day: 'Day 4',
    title: 'Lateral Delts + Biceps',
    type: 'Hypertrophy',
    focus: 'Shoulder width, rear delt detail, arm peak',
    intensity: 75,
    variant: 'upper',
    primary: 'Lateral Delts',
    secondary: 'Biceps',
    widthFocus: 'Lateral Delts (8 sets) — biggest width day',
    cardio: {
      type: 'StairMaster + Incline Walk',
      duration: 13,
      note: '6 min StairMaster, then 7 min incline walk. Light hand support only so the shoulders stay fresh.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'DB Lateral Raise',
        sets: '4 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'The single most important movement for your V-taper. Strict form, slight forward lean, pinky slightly high.',
        alternative: 'Machine Lateral Raise',
      },
      {
        name: 'Leaning Cable Lateral Raise',
        sets: '4 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'Leaning away puts tension on the delt at the bottom where dumbbells give none. Hold the upright, lean out, raise.',
        alternative: 'Cable Single-Arm Lateral Raise (upright)',
      },
      {
        name: 'Face Pull',
        sets: '3 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts', 'Upper Back'],
        note: 'Rear delts round out the shoulder from the side. Elbows high, external rotation at the finish.',
        alternative: 'Rear Delt Machine Fly',
      },
      {
        name: 'EZ Bar Curl',
        sets: '3 × 8–10',
        rest: '90 sec',
        muscles: ['Biceps', 'Brachialis'],
        note: 'Elbows stay at your sides, full stretch at the bottom. Stand tall — no swinging or leaning back.',
        alternative: 'Cable EZ-Bar Curl',
      },
      {
        name: 'Incline DB Curl',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Biceps (Long Head)'],
        note: 'The incline stretches the long head — let the arms hang fully back at the bottom, supinate at the top.',
        alternative: 'Preacher Curl',
      },
    ],
  },

  // ── DAY 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-5',
    day: 'Day 5',
    title: 'Back Volume + Lateral Delts',
    type: 'Hypertrophy',
    focus: 'Lat volume, mid-back detail, more shoulder width',
    intensity: 78,
    variant: 'upper',
    primary: 'Back (Width + Volume)',
    secondary: 'Lateral Delts',
    widthFocus: 'Lats (9 sets) + Lateral Delts (4 sets)',
    cardio: {
      type: 'StairMaster + Incline Walk',
      duration: 13,
      note: '7 min StairMaster, then 6 min incline walk. Steady effort, nose-breathing pace.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'Neutral Grip Pulldown',
        sets: '3 × 10–12',
        rest: '90 sec',
        muscles: ['Lats', 'Biceps'],
        note: 'Lighter than Day 1 — chase the stretch and the squeeze, not the weight. Feel each rep in the lats.',
        alternative: 'Close-Grip Lat Pulldown',
      },
      {
        name: 'Seated Cable Row',
        sets: '3 × 10–12',
        rest: '90 sec',
        muscles: ['Mid Back', 'Lats', 'Rear Delts'],
        note: 'Sit tall with a braced spine — let the arms reach forward, not the lower back. Squeeze 1 sec at the chest.',
        alternative: 'Chest-Supported Seal Row',
      },
      {
        name: 'Single Arm Lat Pulldown',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Lats'],
        note: 'One side at a time lets you add a side stretch at the top. Pull the elbow down toward the hip.',
        alternative: 'Cable Straight-Arm Pulldown',
      },
      {
        name: 'Machine Lateral Raise',
        sets: '4 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'Final width work of the week. The machine keeps the path fixed so you can push close to failure safely.',
        alternative: 'DB Lateral Raise',
      },
    ],
  },

  // ── DAY 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-6',
    day: 'Day 6',
    title: 'Chest Volume + Triceps',
    type: 'Hypertrophy',
    focus: 'Chest volume and stretch, upper chest shelf, tricep long head',
    intensity: 76,
    variant: 'upper',
    primary: 'Chest',
    secondary: 'Triceps',
    widthFocus: 'Chest volume — fills out the upper torso',
    cardio: {
      type: 'StairMaster + Incline Walk',
      duration: 13,
      note: '7 min StairMaster, then 6 min incline walk. Finish relaxed — tomorrow is a recovery day.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'Incline Cable Press',
        sets: '3 × 10–12',
        rest: '90 sec',
        muscles: ['Upper Chest', 'Front Delts'],
        note: 'Cables hold tension through the whole range. Press up and slightly inward, squeeze at the top.',
        alternative: 'Incline Chest Press Machine',
      },
      {
        name: 'Pec Deck Fly',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Chest'],
        note: 'Chest tall against the pad, slow stretch, squeeze toward the midline. Back fully supported.',
        alternative: 'Machine Chest Fly',
      },
      {
        name: 'Cable Crossover',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Chest (Inner + Lower)'],
        note: 'Soft elbow bend, hands meet in front of the hips. Stagger your stance and brace — no leaning forward.',
        alternative: 'Low-to-High Cable Fly',
      },
      {
        name: 'Cable Overhead Tricep Extension',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Triceps (Long Head)'],
        note: 'Main tricep builder. Elbows forward and narrow, deep stretch overhead, smooth lockout.',
        alternative: 'Seated DB Overhead Extension',
      },
      {
        name: 'Rope Pushdown',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Triceps (Lateral Head)'],
        note: 'Pump finisher. Moderate weight, full lockout, slow return.',
        alternative: 'One-Arm Tricep Pushdown',
      },
    ],
  },

  // ── DAY 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-7',
    day: 'Day 7',
    title: 'Arms + Light Core',
    type: 'Recovery',
    focus: 'Arm volume, rear delt finishing, easy core — recover for next week',
    intensity: 62,
    variant: 'arms',
    primary: 'Biceps / Triceps',
    secondary: 'Rear Delts / Core',
    widthFocus: 'Rear Delts (2 sets) — light finishing work',
    cardio: {
      type: 'StairMaster + Easy Walk',
      duration: 12,
      note: '5 min easy StairMaster, then 7 min flat walk. Lowest-effort cardio of the week.',
    },
    estimatedDuration: 0,
    exercises: [
      {
        name: 'EZ Bar Curl',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Biceps'],
        note: 'Higher reps than Day 4. Let the weight fully unload at the bottom, no swing.',
        alternative: 'Cable Curl',
      },
      {
        name: 'Hammer Curl',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Brachialis', 'Forearms'],
        note: 'Neutral grip builds the brachialis underneath the bicep — that is what pushes the arm wider.',
        alternative: 'Rope Cable Hammer Curl',
      },
      {
        name: 'Rope Pushdown',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Triceps (Lateral Head)'],
        note: 'Recovery day — moderate weight, full range, chase the pump not the load.',
        alternative: 'Band Pushdown',
      },
      {
        name: 'Cable Overhead Tricep Extension',
        sets: '2 × 12–15',
        rest: '60 sec',
        muscles: ['Triceps (Long Head)'],
        note: 'Easy stretch work to finish the arms for the week.',
        alternative: 'Seated DB Overhead Extension',
      },
      {
        name: 'Rear Delt Machine Fly',
        sets: '2 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts'],
        note: 'Light and controlled. Rounds out the shoulder and balances all the pressing.',
        alternative: 'Face Pull',
      },
      {
        name: 'Dead Bug',
        sets: '2 × 10 each side',
        rest: '45 sec',
        muscles: ['Core (Deep Stabilisers)'],
        note: 'Press the lower back flat into the floor the whole time. The safest core drill for a disc issue.',
        alternative: 'Bird Dog',
      },
      {
        name: 'Pallof Press',
        sets: '2 × 12 each side',
        rest: '45 sec',
        muscles: ['Core (Anti-Rotation)', 'Obliques'],
        note: 'End the week bracing, not bending. Press out, hold 1 sec, resist the pull.',
        alternative: 'Half-Kneeling Pallof Press',
      },
    ],
  },
]

// ─── Weekly Volume ─────────────────────────────────────────────────────────────
export const weeklyVolume: WeeklyVolumeEntry[] = [
  { muscle: 'Back / Lats',     sets: 19, target: '18–20', note: 'Day 1 heavy (10) · Day 5 volume (9)' },
  { muscle: 'Lateral Delts',   sets: 15, target: '14–16', note: 'Day 1 (3) · Day 4 (8) · Day 5 (4) — width priority' },
  { muscle: 'Chest',           sets: 14, target: '12–14', note: 'Day 2 heavy (7) · Day 6 volume (7) — primary muscle' },
  { muscle: 'Triceps',         sets: 14, target: '12–14', note: 'Day 2 (5) · Day 6 (5) · Day 7 (4)' },
  { muscle: 'Biceps',          sets: 12, target: '10–14', note: 'Day 4 (6) · Day 7 (6)' },
  { muscle: 'Rear Delts',      sets: 10, target: '9–12',  note: 'Day 1 (5) · Day 4 (3) · Day 7 (2)' },
  { muscle: 'Core',            sets:  9, target: '8–10',  note: 'Day 3 (5) · Day 7 (4) — two sessions' },
  { muscle: 'Legs (light)',    sets:  7, target: '6–8',   note: 'Day 3 only — daily walking and stairs cover the rest' },
]

// ─── Important Notes ──────────────────────────────────────────────────────────
export const importantNotes: string[] = [
  'Goal is a wider upper body: lats, lateral delts, rear delts, chest and arms get the volume.',
  'No push-ups, barbell squats, deadlifts or bent-over rows — lumbar disc protection protocol.',
  'Every row and press is machine, cable or chest-supported so the lower back stays braced.',
  'Chest is a primary muscle now: 14 sets across two dedicated sessions.',
  'One light leg day only (7 sets) — daily walking and stair cardio already cover the legs.',
  'Cardio every day, never more than 15 minutes: stairs plus walking on upper days, easy walking on leg day.',
  'Progressive overload: hit the top of the rep range with clean form, then add weight next session.',
  'Keep 1–2 reps in reserve on all main lifts — stop before true failure.',
  'Every session including cardio is capped at 60 minutes.',
]

// ─── Exercise GIFs ────────────────────────────────────────────────────────────
// Demo animations live in public/exercises; matched by exercise name so the
// plan above stays readable.
const exerciseGifs: Record<string, string> = {
  'Lat Pulldown':                    '/exercises/lat-pulldown.gif',
  'Chest-Supported DB Row':          '/exercises/chest-supported-dumbbell-row.gif',
  'Cable Straight-Arm Pulldown':     '/exercises/cable-straight-arm-pulldown.gif',
  'Rear Delt Machine Fly':           '/exercises/rear-delt-machine-fly.gif',
  'Face Pull':                       '/exercises/face-pull.gif',
  'DB Lateral Raise':                '/exercises/lateral-raise.gif',
  'Incline DB Press':                '/exercises/incline-press.gif',
  'Machine Chest Press':             '/exercises/chest-press.gif',
  'Rope Pushdown':                   '/exercises/triceps-pushdown.gif',
  'Cable Overhead Tricep Extension': '/exercises/cable-rope-overhead-triceps-extension.gif',
  'Leg Press':                       '/exercises/leg-press.gif',
  'Seated Leg Curl':                 '/exercises/seated-leg-curl.gif',
  'Standing Calf Raise':             '/exercises/calf-raise.gif',
  'Cable Crunch':                    '/exercises/cable-crunch.gif',
  'Pallof Press':                    '/exercises/pallof-press.gif',
  'Leaning Cable Lateral Raise':     '/exercises/leaning-cable-lateral-raise.gif',
  'EZ Bar Curl':                     '/exercises/z-bar-curl.gif',
  'Incline DB Curl':                 '/exercises/incline-curl.gif',
  'Neutral Grip Pulldown':           '/exercises/neutral-pulldown.gif',
  'Seated Cable Row':                '/exercises/seated-row.gif',
  'Single Arm Lat Pulldown':         '/exercises/single-arm-pulldown.gif',
  'Machine Lateral Raise':           '/exercises/machine-lateral-raise.gif',
  'Incline Cable Press':             '/exercises/incline-cable-press.gif',
  'Pec Deck Fly':                    '/exercises/pec-deck-fly.gif',
  'Cable Crossover':                 '/exercises/cable-crossover.gif',
  'Hammer Curl':                     '/exercises/hammer-curl.gif',
  'Dead Bug':                        '/exercises/dead-bug.gif',
}

// ─── Session duration ─────────────────────────────────────────────────────────
// Derived from the sets and rest above so the times on screen can never drift
// away from the plan. Every session must land inside the 60-minute cap.
const WORK_SECONDS_PER_SET = 45
const TRANSITION_SECONDS = 45   // walking to the next station, setting up
const WARMUP_MINUTES = 5

/** "2–3 min" → 150 · "90 sec" → 90 · "60 sec" → 60 */
export function restSeconds(rest: string): number {
  const nums = rest.match(/\d+/g)?.map(Number) ?? [60]
  const avg = nums.reduce((a, b) => a + b, 0) / nums.length
  return /min/i.test(rest) ? avg * 60 : avg
}

export function liftingMinutes(day: TrainingDay): number {
  const seconds = day.exercises.reduce((total, ex) => {
    const sets = Number(ex.sets.match(/^\s*(\d+)/)?.[1] ?? 1)
    // No rest is taken after the final set — you move on to the next station.
    return total + sets * WORK_SECONDS_PER_SET + (sets - 1) * restSeconds(ex.rest) + TRANSITION_SECONDS
  }, 0)
  return seconds / 60
}

for (const day of trainingDays) {
  for (const ex of day.exercises) ex.gif ??= exerciseGifs[ex.name]
  day.estimatedDuration = Math.round(WARMUP_MINUTES + liftingMinutes(day) + day.cardio.duration)
}

export const SESSION_CAP_MINUTES = 60
