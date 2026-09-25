export type Exercise = {
  name: string
  sets: string
  rest: string
  muscles: string[]
  note: string
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
  estimatedDuration: number // total minutes including cardio
  exercises: Exercise[]
}

export type WeeklyVolumeEntry = {
  muscle: string
  sets: number
  target: string
  note: string
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroStats = ['7 Days / Week', 'V-Taper Focus', 'Wider Shoulders', 'Max 60 Min']

// ─── Training Days ────────────────────────────────────────────────────────────
export const trainingDays: TrainingDay[] = [
  // ── DAY 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-1',
    day: 'Day 1',
    title: 'Back Heavy + Rear Delts',
    type: 'Strength',
    focus: 'Lat width, upper back thickness, rear delt detail',
    intensity: 90,
    variant: 'upper',
    primary: 'Back (Lats + Thickness)',
    secondary: 'Rear Delts',
    widthFocus: 'Lateral Delts (4 sets)',
    cardio: {
      type: 'Incline Treadmill Walk',
      duration: 10,
      note: 'Steady incline pace — easy on the lower back after heavy pulling.',
    },
    estimatedDuration: 56,
    exercises: [
      {
        name: 'Pull-Up / Lat Pulldown',
        sets: '4 × 6–8',
        rest: '2–3 min',
        muscles: ['Lats', 'Biceps'],
        note: "If pull-ups aren't available use a lat pulldown machine. Focus on full stretch at the top and driving elbows down.",
      },
      {
        name: 'Chest-Supported DB Row',
        sets: '4 × 8',
        rest: '2 min',
        muscles: ['Mid Back', 'Lats', 'Rear Delts'],
        note: 'Keep chest pinned to the pad the whole set. Drive elbows up and back — don\'t shrug.',
      },
      {
        name: 'Rear Delt Machine Fly',
        sets: '4 × 12–15',
        rest: '90 sec',
        muscles: ['Rear Delts', 'Upper Back'],
        note: 'Light-to-moderate weight. Control the return — feel the stretch.',
      },
      {
        name: 'DB Lateral Raise',
        sets: '4 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'Slight forward lean. Lead with your pinky and raise to shoulder height only.',
      },
    ],
  },

  // ── DAY 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-2',
    day: 'Day 2',
    title: 'Chest + Triceps',
    type: 'Strength',
    focus: 'Upper chest push, tricep lockout, light lat pump',
    intensity: 85,
    variant: 'upper',
    primary: 'Chest',
    secondary: 'Triceps',
    widthFocus: 'Lats (3 sets — light pump)',
    cardio: {
      type: 'StairMaster',
      duration: 10,
      note: 'Moderate steady pace — keeps heart rate up without taxing chest/triceps recovery.',
    },
    estimatedDuration: 58,
    exercises: [
      {
        name: 'Incline DB Press',
        sets: '4 × 6–8',
        rest: '2–3 min',
        muscles: ['Upper Chest', 'Front Delts', 'Triceps'],
        note: 'Use 30–45° incline. Control the descent — 2 sec down. Stop 1–2 reps short of failure.',
      },
      {
        name: 'Machine Chest Press',
        sets: '3 × 8–10',
        rest: '90 sec',
        muscles: ['Chest', 'Triceps'],
        note: 'Squeeze hard at the top. Slow eccentric to keep tension through the full range.',
      },
      {
        name: 'Rope Pushdown',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Triceps (Lateral Head)'],
        note: 'Split the rope at the bottom. Keep elbows pinned to your sides.',
      },
      {
        name: 'Cable Overhead Tricep Extension',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Triceps (Long Head)'],
        note: 'Long head gets the stretch — let the cable pull your hands behind your head fully.',
      },
      {
        name: 'Neutral Grip Pulldown',
        sets: '3 × 12',
        rest: '90 sec',
        muscles: ['Lats', 'Biceps'],
        note: 'Light pump set. Stretch lats at top, squeeze shoulder blades down at the bottom.',
      },
    ],
  },

  // ── DAY 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-3',
    day: 'Day 3',
    title: 'Legs Heavy + Core',
    type: 'Strength',
    focus: 'Quad/hamstring strength, athletic performance, core stability',
    intensity: 88,
    variant: 'lower',
    primary: 'Quads / Hamstrings',
    secondary: 'Glutes / Core',
    widthFocus: 'N/A — leg day',
    cardio: {
      type: 'Incline Treadmill Walk',
      duration: 10,
      note: 'Easy incline walk — flushes the legs after heavy lifts without adding fatigue.',
    },
    estimatedDuration: 57,
    exercises: [
      {
        name: 'Leg Press',
        sets: '4 × 5–8',
        rest: '2–3 min',
        muscles: ['Quads', 'Glutes'],
        note: 'Feet shoulder-width, mid-plate. Full range — don\'t lock knees at top. No barbell squat per lower-back protocol.',
      },
      {
        name: 'Romanian Deadlift (RDL)',
        sets: '4 × 6–8',
        rest: '2–3 min',
        muscles: ['Hamstrings', 'Glutes', 'Lower Back'],
        note: 'Hinge at the hips, soft knee bend. Bar stays close to legs. Stop when you feel a strong hamstring stretch — don\'t round the lower back.',
      },
      {
        name: 'Seated Leg Curl',
        sets: '3 × 10–12',
        rest: '90 sec',
        muscles: ['Hamstrings'],
        note: 'Slow eccentric (3 sec). Full extension before curling.',
      },
      {
        name: 'Standing Calf Raise',
        sets: '4 × 12–15',
        rest: '60 sec',
        muscles: ['Calves'],
        note: 'Full range — heel below the step. Pause 1 sec at the top.',
      },
      {
        name: 'Hanging Knee Raise',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Lower Abs', 'Hip Flexors'],
        note: 'Control the swing. Curl hips up at the top for full ab contraction.',
      },
      {
        name: 'Cable Crunch',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Abs'],
        note: 'Kneel, pull rope to temples, crunch hips toward chest. Don\'t pull with your arms.',
      },
    ],
  },

  // ── DAY 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-4',
    day: 'Day 4',
    title: 'Lateral Delts + Biceps',
    type: 'Hypertrophy',
    focus: 'V-taper width, rear delt detail, arm peak',
    intensity: 75,
    variant: 'upper',
    primary: 'Lateral Delts',
    secondary: 'Rear Delts / Biceps',
    widthFocus: 'Rear Delts (7 sets)',
    cardio: {
      type: 'StairMaster',
      duration: 10,
      note: 'Steady climb, light hand support only — keeps shoulders and arms relaxed.',
    },
    estimatedDuration: 50,
    exercises: [
      {
        name: 'DB Lateral Raise',
        sets: '5 × 12–15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'This is the V-taper maker. Slight forward lean, lead with elbow, raise to shoulder height. Rest-pause the last set if needed.',
      },
      {
        name: 'Cable Single Arm Lateral Raise',
        sets: '3 × 15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'Cable keeps tension at the bottom (DB doesn\'t). Cross the cable in front of you for better line of pull.',
      },
      {
        name: 'Face Pull',
        sets: '4 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts', 'External Rotators', 'Upper Back'],
        note: 'Pull to forehead, elbows high and wide. External rotate at the end. Great for posture and rear delt pop.',
      },
      {
        name: 'Rear Delt Machine Fly',
        sets: '3 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts'],
        note: 'Arms nearly straight. Focus on squeezing rear delts, not just moving weight.',
      },
      {
        name: 'EZ Bar Curl',
        sets: '3 × 8–10',
        rest: '90 sec',
        muscles: ['Biceps', 'Brachialis'],
        note: 'Elbows stay by your sides. Full stretch at the bottom — don\'t swing.',
      },
      {
        name: 'Incline DB Curl',
        sets: '2 × 12',
        rest: '60 sec',
        muscles: ['Biceps (Long Head)'],
        note: 'Incline stretches the long head. Let the weight drop fully at the bottom.',
      },
    ],
  },

  // ── DAY 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-5',
    day: 'Day 5',
    title: 'Back Volume + Lateral Delts',
    type: 'Hypertrophy',
    focus: 'Lat width, back thickness volume, shoulder width pump',
    intensity: 78,
    variant: 'upper',
    primary: 'Back (Width + Volume)',
    secondary: 'Lateral Delts',
    widthFocus: 'Lats (11 sets)',
    cardio: {
      type: 'StairMaster',
      duration: 10,
      note: 'Steady climb — stand tall, hold the rails lightly, keep blood flowing.',
    },
    estimatedDuration: 49,
    exercises: [
      {
        name: 'Neutral Grip Pulldown',
        sets: '4 × 10',
        rest: '90 sec',
        muscles: ['Lats', 'Biceps'],
        note: 'Slightly lighter than Day 1. Focus on the mind-muscle connection — feel each lat rep.',
      },
      {
        name: 'Seated Cable Row',
        sets: '4 × 10–12',
        rest: '90 sec',
        muscles: ['Mid Back', 'Lats', 'Rear Delts'],
        note: 'Full stretch forward (chest out), row to lower chest. Squeeze for 1 sec.',
      },
      {
        name: 'Single Arm Lat Pulldown',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Lats'],
        note: 'Unilateral — lets you add a side stretch at the top. Pull elbow to hip.',
      },
      {
        name: 'Cable Single Arm Lateral Raise',
        sets: '4 × 15',
        rest: '60 sec',
        muscles: ['Lateral Delts'],
        note: 'Finishing shoulder work for the week. Keep it controlled and feel the lateral delt working.',
      },
    ],
  },

  // ── DAY 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-6',
    day: 'Day 6',
    title: 'Legs Athletic + Core',
    type: 'Athletic',
    focus: 'Unilateral strength, glute power, core anti-rotation',
    intensity: 80,
    variant: 'lower',
    primary: 'Quads / Glutes',
    secondary: 'Hamstrings / Core',
    widthFocus: 'N/A — leg day',
    cardio: {
      type: 'Incline Treadmill Walk',
      duration: 10,
      note: 'Brisk incline walk — conversational pace, legs are already worked.',
    },
    estimatedDuration: 53,
    exercises: [
      {
        name: 'Bulgarian Split Squat',
        sets: '3 × 10',
        rest: '2 min',
        muscles: ['Quads', 'Glutes', 'Hamstrings'],
        note: 'Rear foot elevated on bench. Front knee tracks over toes. Keep torso upright for quad focus.',
      },
      {
        name: 'Hip Thrust',
        sets: '3 × 8–10',
        rest: '90 sec',
        muscles: ['Glutes', 'Hamstrings'],
        note: 'Drive through the heel, squeeze glutes hard at the top. Chin to chest — don\'t hyperextend the spine.',
      },
      {
        name: 'Leg Extension',
        sets: '3 × 15',
        rest: '60 sec',
        muscles: ['Quads'],
        note: 'Finisher for quad isolation. Slow eccentric (3 sec), pause 1 sec at top.',
      },
      {
        name: 'Standing Calf Raise',
        sets: '4 × 15',
        rest: '60 sec',
        muscles: ['Calves'],
        note: 'Full range as always. This is Day 6 — push the reps.',
      },
      {
        name: 'Pallof Press',
        sets: '3 × 12 each side',
        rest: '60 sec',
        muscles: ['Core (Anti-Rotation)', 'Obliques'],
        note: 'Press out fully and hold 1 sec. The cable will try to rotate you — resist it. That\'s the whole point.',
      },
      {
        name: 'Cable Crunch',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Abs'],
        note: 'Same cue as Day 3 — crunch your ribs toward your hips, don\'t pull with the arms.',
      },
    ],
  },

  // ── DAY 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'day-7',
    day: 'Day 7',
    title: 'Arms + Core (Recovery)',
    type: 'Recovery',
    focus: 'Active recovery, arm volume, rear delt finishing, core stability',
    intensity: 65,
    variant: 'arms',
    primary: 'Triceps / Biceps',
    secondary: 'Rear Delts / Core',
    widthFocus: 'Rear Delts (3 sets)',
    cardio: {
      type: 'Incline Treadmill Walk',
      duration: 12,
      note: 'Low intensity walk — promotes blood flow for full-body recovery before the next week',
    },
    estimatedDuration: 47,
    exercises: [
      {
        name: 'Rope Pushdown',
        sets: '3 × 12–15',
        rest: '60 sec',
        muscles: ['Triceps (Lateral Head)'],
        note: 'Recovery day — moderate weight, full range, pump-focused.',
      },
      {
        name: 'Cable Overhead Tricep Extension',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Triceps (Long Head)'],
        note: 'Get a full stretch overhead. Long head gets the most growth stimulus here.',
      },
      {
        name: 'EZ Bar Curl',
        sets: '3 × 10–12',
        rest: '60 sec',
        muscles: ['Biceps'],
        note: 'Slightly higher reps than Day 4. Let the weight fully unload at the bottom.',
      },
      {
        name: 'Incline DB Curl',
        sets: '3 × 12',
        rest: '60 sec',
        muscles: ['Biceps (Long Head)'],
        note: 'Great stretch on long head. Supinate at the top for peak contraction.',
      },
      {
        name: 'Rear Delt Machine Fly',
        sets: '3 × 15',
        rest: '60 sec',
        muscles: ['Rear Delts'],
        note: 'Weekly finishing work for rear delts. Light and controlled.',
      },
      {
        name: 'Pallof Press',
        sets: '3 × 12 each side',
        rest: '60 sec',
        muscles: ['Core (Anti-Rotation)', 'Obliques'],
        note: 'End the week with stability work. Brace hard and breathe through the hold.',
      },
    ],
  },
]

// ─── Weekly Volume ─────────────────────────────────────────────────────────────
export const weeklyVolume: WeeklyVolumeEntry[] = [
  { muscle: 'Back / Lats',     sets: 22, target: '20–24', note: 'Day 1 heavy (8) · Day 2 pump (3) · Day 5 volume (11)' },
  { muscle: 'Lateral Delts',   sets: 16, target: '14–18', note: 'Day 1 (4) · Day 4 (8) · Day 5 (4) — V-taper priority' },
  { muscle: 'Rear Delts',      sets: 14, target: '12–16', note: 'Day 1 (4) · Day 4 (7) · Day 7 (3)' },
  { muscle: 'Triceps',         sets: 12, target: '10–14', note: 'Day 2 (6) · Day 7 (6)' },
  { muscle: 'Biceps',          sets: 11, target: '10–14', note: 'Day 4 (5) · Day 7 (6)' },
  { muscle: 'Quads',           sets: 10, target: '10–14', note: 'Day 3 (4) · Day 6 (6)' },
  { muscle: 'Hamstrings',      sets: 10, target: '10–14', note: 'Day 3 (7) · Day 6 (3)' },
  { muscle: 'Chest',           sets:  7, target: '6–10',  note: 'Day 2 only — V-taper secondary priority' },
  { muscle: 'Core',            sets: 15, target: '12–18', note: 'Day 3 (6) · Day 6 (6) · Day 7 (3)' },
  { muscle: 'Calves',          sets:  8, target: '8–12',  note: 'Day 3 (4) · Day 6 (4)' },
]

// ─── Important Notes ──────────────────────────────────────────────────────────
export const importantNotes: string[] = [
  'No barbell squat or conventional deadlift — lower back protection protocol.',
  'Progressive overload: when you hit the top of the rep range with clean form, add weight next session.',
  'Keep 1–2 reps in reserve on all main lifts — stop before true failure.',
  'Every session is capped at 60 minutes including cardio — quality over quantity.',
  'No same muscle trained heavy on consecutive days — built into the 7-day structure.',
  'V-taper priority: lateral delts hit 16 sets/week across 3 days, rear delts 14 sets across 3 days.',
  'Lower body goal is strength and athletic performance — not maximum size.',
]

// ─── Exercise GIFs ────────────────────────────────────────────────────────────
// Demo animations live in public/exercises; matched by exercise name so the
// plan above stays readable.
const exerciseGifs: Record<string, string> = {
  'Pull-Up / Lat Pulldown':          '/exercises/lat-pulldown.gif',
  'Chest-Supported DB Row':          '/exercises/chest-supported-dumbbell-row.gif',
  'Rear Delt Machine Fly':           '/exercises/rear-delt-machine-fly.gif',
  'DB Lateral Raise':                '/exercises/lateral-raise.gif',
  'Incline DB Press':                '/exercises/incline-press.gif',
  'Machine Chest Press':             '/exercises/chest-press.gif',
  'Rope Pushdown':                   '/exercises/triceps-pushdown.gif',
  'Cable Overhead Tricep Extension': '/exercises/cable-rope-overhead-triceps-extension.gif',
  'Neutral Grip Pulldown':           '/exercises/neutral-pulldown.gif',
  'Leg Press':                       '/exercises/leg-press.gif',
  'Romanian Deadlift (RDL)':         '/exercises/rdl.gif',
  'Seated Leg Curl':                 '/exercises/seated-leg-curl.gif',
  'Standing Calf Raise':             '/exercises/calf-raise.gif',
  'Hanging Knee Raise':              '/exercises/hanging-knee-raise.gif',
  'Cable Crunch':                    '/exercises/cable-crunch.gif',
  'Cable Single Arm Lateral Raise':  '/exercises/cable-single-arm-lateral-raise.gif',
  'Face Pull':                       '/exercises/face-pull.gif',
  'EZ Bar Curl':                     '/exercises/z-bar-curl.gif',
  'Incline DB Curl':                 '/exercises/incline-curl.gif',
  'Seated Cable Row':                '/exercises/seated-row.gif',
  'Single Arm Lat Pulldown':         '/exercises/single-arm-pulldown.gif',
  'Bulgarian Split Squat':           '/exercises/bulgarian-split-squat.gif',
  'Hip Thrust':                      '/exercises/hip-thrust.gif',
  'Leg Extension':                   '/exercises/leg-extension.gif',
  'Pallof Press':                    '/exercises/pallof-press.gif',
}

for (const day of trainingDays) {
  for (const ex of day.exercises) ex.gif ??= exerciseGifs[ex.name]
}
