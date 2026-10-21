export interface EducationEntry {
  id: string
  institution: string
  program: string
  period: string
  location: string
  credential: string
  description: string
  thesis?: string
  tech: string[]
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'brawijaya',
    institution: 'Universitas Brawijaya',
    program: 'Bachelor of Information Systems',
    period: '2020 — 2025',
    location: 'Malang, ID',
    credential: 'GPA 3.77 / 4.00',
    description: 'Focused on systems analysis, strategic IS planning, business process modeling, and data visualization. Graduated with a high academic score.',
    thesis: 'Thesis: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."',
    tech: ['Business Process', 'Systems Analysis', 'Enterprise Arch']
  },
  {
    id: 'bangkit',
    institution: 'Bangkit Academy',
    program: 'Machine Learning Cohort',
    period: 'Graduated 2023',
    location: 'Remote / Online',
    credential: 'Score 88.39 / 100',
    description: 'Intensive 900-hour Machine Learning curriculum by Google, GoTo, and Traveloka. Developed model workflows in Python using TensorFlow.',
    tech: ['TensorFlow', 'Python Core', 'Deep Learning']
  }
]
