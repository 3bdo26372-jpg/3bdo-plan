export type Exercise = {
  name: string
  sets: string
  rest: string
  muscles: string[]
  note: string
  gif?: string
}

export type TrainingDay = {
  id: string
  day: string
  title: string
  type: string
  focus: string
  intensity: number
  exercises: Exercise[]
}

export const heroStats = [
  '6 Days / Week',
  'Upper Bias',
  'Strong Core',
  'Athletic Lower',
]

export const weeklySplit = [
  { day: 'Saturday', plan: 'Upper A - Strength' },
  { day: 'Sunday', plan: 'Lower A + Core - Strength' },
  { day: 'Monday', plan: 'Upper B - Hypertrophy' },
  { day: 'Tuesday', plan: 'Lower B + Core' },
  { day: 'Wednesday', plan: 'Upper C - Pump' },
  { day: 'Thursday', plan: 'Lower C + Core' },
  { day: 'Friday', plan: 'Rest' },
]

export const trainingDays: TrainingDay[] = [
  {
    id: 'upper-a',
    day: 'Saturday',
    title: 'Upper A',
    type: 'Strength',
    focus: 'Heavy upper-body base with back, chest, side delts, rear delts, and arms.',
    intensity: 92,
    exercises: [
      { name: 'Incline Dumbbell Press', sets: '4x6-8', rest: '2-3 min', muscles: ['Upper Chest', 'Triceps'], note: 'Low incline, controlled bottom, press without shoulder shrug.', gif: '/exercises/incline-press.gif' },
      { name: 'Machine Chest Press', sets: '3x8-10', rest: '90 sec', muscles: ['Chest'], note: 'Keep scapula stable and stop one rep before form breaks.', gif: '/exercises/chest-press.gif' },
      { name: 'Pull-Up or Lat Pulldown', sets: '4x6-8', rest: '2 min', muscles: ['Lats', 'Biceps'], note: 'Drive elbows down and keep ribs stacked.', gif: '/exercises/lat-pulldown.gif' },
      { name: 'Chest Supported Dumbbell Row', sets: '4x8', rest: '90 sec', muscles: ['Upper Back', 'Lats'], note: 'Chest stays glued to the bench; pull the dumbbells toward lower ribs.', gif: '/exercises/chest-supported-dumbbell-row.gif' },
      { name: 'Dumbbell Lateral Raise', sets: '5x12-15', rest: '60 sec', muscles: ['Side Delts'], note: 'Lead with elbows and pause lightly at shoulder height.', gif: '/exercises/lateral-raise.gif' },
      { name: 'Rear Delt Machine Fly', sets: '4x12-15', rest: '60 sec', muscles: ['Rear Delts'], note: 'Small bend in elbows, open wide without neck tension.', gif: '/exercises/rear-delt-machine-fly.gif' },
      { name: 'EZ Bar Curl', sets: '3x8-10', rest: '60 sec', muscles: ['Biceps'], note: 'Elbows still, full lower, no backward lean.', gif: '/exercises/z-bar-curl.gif' },
      { name: 'Rope Pushdown', sets: '3x10-12', rest: '60 sec', muscles: ['Triceps'], note: 'Split the rope at lockout and keep elbows pinned.', gif: '/exercises/triceps-pushdown.gif' },
    ],
  },
  {
    id: 'lower-a',
    day: 'Sunday',
    title: 'Lower A + Core',
    type: 'Strength',
    focus: 'Back-friendly lower strength with direct core work.',
    intensity: 88,
    exercises: [
      { name: 'Leg Press (Strength Focus)', sets: '4x5-8', rest: '2-3 min', muscles: ['Quads', 'Glutes'], note: 'Use a controlled heavy press path, brace hard, and keep the lower back pinned.', gif: '/exercises/leg-press.gif' },
      { name: 'Romanian Deadlift', sets: '4x6-8', rest: '2 min', muscles: ['Hamstrings', 'Glutes'], note: 'Hinge from hips, neutral spine, stop at strong hamstring stretch.', gif: '/exercises/rdl.gif' },
      { name: 'Seated Leg Curl', sets: '3x10', rest: '75 sec', muscles: ['Hamstrings'], note: 'Lock hips down and squeeze the shortened position.', gif: '/exercises/seated-leg-curl.gif' },
      { name: 'Standing Calf Raise', sets: '5x12-15', rest: '60 sec', muscles: ['Calves'], note: 'Full stretch, full top pause, no bouncing.', gif: '/exercises/calf-raise.gif' },
      { name: 'Hanging Knee Raise', sets: '4×12-15', rest: '60 sec', muscles: ['Lower Abs'], note: 'Curl pelvis up instead of swinging legs.', gif: '/exercises/hanging-knee-raise.gif' },
      { name: 'Cable Crunch', sets: '4×12-15', rest: '60 sec', muscles: ['Abs'], note: 'Ribs down, crunch through the spine, hips still.', gif: '/exercises/cable-crunch.gif' },
    ],
  },
  {
    id: 'upper-b',
    day: 'Monday',
    title: 'Upper B',
    type: 'Hypertrophy',
    focus: 'More volume for chest, back, delts, and arms with smoother rep ranges.',
    intensity: 82,
    exercises: [
      { name: 'Incline Smith Press', sets: '4x8-10', rest: '90 sec', muscles: ['Upper Chest'], note: 'Set bench angle modestly and press in a stable line.', gif: '/exercises/incline-smith-press.gif' },
      { name: 'Pec Deck / Fly Machine', sets: '3x12-15', rest: '60 sec', muscles: ['Chest'], note: 'Keep the chest tall, use a slow stretch, and squeeze toward midline.', gif: '/exercises/pec-deck-fly.gif' },
      { name: 'Neutral Grip Pulldown', sets: '4x10', rest: '90 sec', muscles: ['Lats'], note: 'Pull elbows to pockets and avoid leaning back hard.', gif: '/exercises/neutral-pulldown.gif' },
      { name: 'Seated Cable Row', sets: '4x10-12', rest: '90 sec', muscles: ['Mid Back'], note: 'Tall torso, one-second squeeze, controlled reach.', gif: '/exercises/seated-row.gif' },
      { name: 'Cable Single Arm Lateral Raise', sets: '5x15', rest: '60 sec', muscles: ['Side Delts'], note: 'Keep tension continuous, lead with the elbow, and avoid shrugging.', gif: '/exercises/cable-single-arm-lateral-raise.gif' },
      { name: 'Face Pull', sets: '4x15', rest: '60 sec', muscles: ['Rear Delts'], note: 'Pull to eye line and rotate thumbs back.', gif: '/exercises/face-pull.gif' },
      { name: 'Incline Curl', sets: '3x12', rest: '60 sec', muscles: ['Biceps'], note: 'Arms hang back, curl without shoulder movement.', gif: '/exercises/incline-curl.gif' },
      { name: 'Cable Rope Overhead Triceps Extension', sets: '3x12', rest: '60 sec', muscles: ['Triceps'], note: 'Elbows forward, deep stretch, smooth lockout.', gif: '/exercises/cable-rope-overhead-triceps-extension.gif' },
    ],
  },
  {
    id: 'lower-b',
    day: 'Tuesday',
    title: 'Lower B + Core',
    type: 'Athletic Control',
    focus: 'Single-leg strength, glutes, hamstrings, and trunk stability.',
    intensity: 78,
    exercises: [
      { name: 'Bulgarian Split Squat', sets: '3x10', rest: '90 sec', muscles: ['Quads', 'Glutes'], note: 'Small forward torso lean and steady knee path.', gif: '/exercises/bulgarian-split-squat.gif' },
      { name: 'Hip Thrust', sets: '3x8-10', rest: '90 sec', muscles: ['Glutes'], note: 'Posterior pelvic tilt at the top, no low-back arch.', gif: '/exercises/hip-thrust.gif' },
      { name: 'Seated Leg Curl', sets: '3x12', rest: '75 sec', muscles: ['Hamstrings'], note: 'Lock hips down and squeeze the shortened position.', gif: '/exercises/seated-leg-curl.gif' },
      { name: 'Standing Calf Raise', sets: '5x15', rest: '60 sec', muscles: ['Calves'], note: 'Pause at top and bottom to remove bounce.', gif: '/exercises/calf-raise.gif' },
      { name: 'Pallof Press', sets: '3×12-15 each side', rest: '45 sec', muscles: ['Anti-Rotation Core'], note: 'Press straight out and resist cable rotation.', gif: '/exercises/pallof-press.gif' },
      { name: 'Standing Cable Wood Chop', sets: '3×12-15 each side', rest: '45 sec', muscles: ['Obliques'], note: 'Rotate through upper trunk, hips quiet.', gif: '/exercises/standing-cable-high-to-low-twist.gif' },
    ],
  },
  {
    id: 'upper-c',
    day: 'Wednesday',
    title: 'Upper C',
    type: 'Pump',
    focus: 'High-quality upper pump with extra side and rear delt attention.',
    intensity: 74,
    exercises: [
      { name: 'Incline Dumbbell Press', sets: '3x12', rest: '75 sec', muscles: ['Upper Chest'], note: 'Use a controlled incline press path and keep the shoulders packed.', gif: '/exercises/incline-press.gif' },
      { name: 'Single Arm Lat Pulldown', sets: '4x12', rest: '75 sec', muscles: ['Lats'], note: 'Reach tall, then pull elbow down toward hip.', gif: '/exercises/single-arm-pulldown.gif' },
      { name: 'Chest Supported Dumbbell Row', sets: '4x12', rest: '75 sec', muscles: ['Upper Back'], note: 'Use the bench support to remove low-back stress.', gif: '/exercises/chest-supported-dumbbell-row.gif' },
      { name: 'Heavy Lateral Raise', sets: '5x15', rest: '60 sec', muscles: ['Side Delts'], note: 'Strict first, controlled partials only at the end.', gif: '/exercises/lateral-raise.gif' },
      { name: 'Wide Grip Cable Upright Row', sets: '3x12', rest: '60 sec', muscles: ['Side Delts'], note: 'Wide grip, elbows out, stop below shoulder discomfort.', gif: '/exercises/cable-upright-row.gif' },
      { name: 'Rear Delt Fly', sets: '4x15', rest: '60 sec', muscles: ['Rear Delts'], note: 'Think wide sweep, not heavy row.', gif: '/exercises/rear-delt-fly.gif' },
      { name: 'Hammer Curl', sets: '3x12', rest: '60 sec', muscles: ['Biceps', 'Forearms'], note: 'Neutral grip and no torso swing.', gif: '/exercises/hammer-curl.gif' },
      { name: 'Rope Pushdown', sets: '3x15', rest: '60 sec', muscles: ['Triceps'], note: 'Clean lockout with slow return.', gif: '/exercises/triceps-pushdown.gif' },
    ],
  },
  {
    id: 'lower-c',
    day: 'Thursday',
    title: 'Lower C + Core',
    type: 'Athletic Lower',
    focus: 'Leg strength without chasing maximum leg size, plus loaded core work.',
    intensity: 80,
    exercises: [
      { name: 'Leg Press, Narrow Stance', sets: '4x10', rest: '2 min', muscles: ['Quads'], note: 'Feet narrow but knees track cleanly.', gif: '/exercises/leg-press.gif' },
      { name: 'Walking Lunges', sets: '3x12', rest: '90 sec', muscles: ['Quads', 'Glutes'], note: 'Long controlled steps, push through whole foot.', gif: '/exercises/walking-lunges.gif' },
      { name: 'Leg Extension', sets: '3x15', rest: '60 sec', muscles: ['Quads'], note: 'One-second top squeeze and slow negative.', gif: '/exercises/leg-extension.gif' },
      { name: 'Standing Calf Raise', sets: '5x15', rest: '60 sec', muscles: ['Calves'], note: 'Keep reps smooth and use full ankle range.', gif: '/exercises/calf-raise.gif' },
      { name: 'Hanging Knee Raise', sets: '4×10-15', rest: '60 sec', muscles: ['Lower Abs'], note: 'Curl pelvis up and control the descent without swinging.', gif: '/exercises/hanging-knee-raise.gif' },
      { name: 'Cable Crunch', sets: '4×12-15', rest: '60 sec', muscles: ['Abs'], note: 'Ribs down, crunch through the spine, hips still.', gif: '/exercises/cable-crunch.gif' },
    ],
  },
]

export const restDay = {
  day: 'Friday',
  title: 'Rest',
  items: ['Recovery', 'Steps optional', 'Mobility optional', 'Sleep and nutrition focus'],
}

export const weeklyVolume = [
  { label: 'Back', value: '24 sets', percent: 100 },
  { label: 'Side Delts', value: '15 sets', percent: 72 },
  { label: 'Rear Delts', value: '12 sets', percent: 62 },
  { label: 'Chest', value: '16 sets', percent: 78 },
  { label: 'Biceps', value: '9 sets', percent: 48 },
  { label: 'Triceps', value: '9 sets', percent: 48 },
  { label: 'Lower Body', value: '13-15 sets', percent: 66 },
  { label: 'Core', value: '2 per lower day', percent: 70 },
]

export const importantNotes = [
  'Progressive Overload: when you reach the top of the rep range with clean form, increase load gradually.',
  'Keep 1-2 reps in reserve for most working sets.',
  'Avoid ego lifting and keep every rep controlled.',
  'Focus on clean form before adding weight.',
  'Lower body goal is strength and athletic performance, not maximum size.',
  'Core is trained with lower days only.',
  'Avoid heavy free barbell squat and conventional deadlift due to lower-back consideration.',
]
