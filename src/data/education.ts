import type { Locale } from '../i18n'

export interface EducationNote {
  icon: string
  text: string
}

export interface EducationEntry {
  id: string
  institution: string
  program: string
  period: string
  location: string
  credential: string
  description: string
  thesis?: string
  notes?: EducationNote[]
  tech: string[]
}

export const EDUCATION: Record<Locale, EducationEntry[]> = {
  en: [
    {
      id: 'brawijaya',
      institution: 'Universitas Brawijaya',
      program: 'Bachelor of Information Systems, Faculty of Computer Science',
      period: 'Aug 2020 — Jan 2025',
      location: 'Malang, ID',
      credential: 'GPA 3.77 / 4.00',
      description: 'Coursework in Business Process Modeling, Information Systems Analysis and Design, Strategic IS Planning, Enterprise Architecture, IS Project Management, Quantitative & Qualitative Analysis, and Data Visualization.',
      thesis: 'Thesis: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."',
      notes: [
        { icon: 'i-material-symbols:groups', text: 'Staff of Creative Division and Master of Ceremony, Bima Sakti 3.0 (Jul 2022 — Dec 2022).' }
      ],
      tech: ['Business Process', 'Systems Analysis', 'Enterprise Arch']
    },
    {
      id: 'bangkit',
      institution: 'Bangkit Academy 2023',
      program: 'Machine Learning Cohort (Google, GoTo, Traveloka)',
      period: 'Feb 2023 — Jul 2023',
      location: 'Indonesia',
      credential: 'Score 88.39 / 100',
      description: 'Completed a 900-hour Machine Learning curriculum and a capstone project using Python, SQL, and TensorFlow.',
      notes: [
        { icon: 'i-material-symbols:workspace-premium', text: 'TensorFlow Developer Certification — Bangkit Academy 2023 (Google, GoTo, Traveloka).' },
        { icon: 'i-material-symbols:translate', text: 'Languages: Indonesian (native); English (TOEFL ITP score 510).' }
      ],
      tech: ['TensorFlow', 'Python', 'SQL']
    }
  ],
  id: [
    {
      id: 'brawijaya',
      institution: 'Universitas Brawijaya',
      program: 'Sarjana Sistem Informasi, Fakultas Ilmu Komputer',
      period: 'Agu 2020 — Jan 2025',
      location: 'Malang, ID',
      credential: 'IPK 3,77 / 4,00',
      description: 'Mata kuliah: Pemodelan Proses Bisnis, Analisis dan Desain Sistem Informasi, Perencanaan Strategis SI, Arsitektur Enterprise, Manajemen Proyek SI, Analisis Kuantitatif & Kualitatif, dan Visualisasi Data.',
      // Official thesis title is quoted as it appears on the CV (English); not re-translated.
      thesis: 'Skripsi: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."',
      notes: [
        { icon: 'i-material-symbols:groups', text: 'Staf Divisi Kreatif dan Master of Ceremony, Bima Sakti 3.0 (Jul 2022 — Des 2022).' }
      ],
      tech: ['Proses Bisnis', 'Analisis Sistem', 'Arsitektur Enterprise']
    },
    {
      id: 'bangkit',
      institution: 'Bangkit Academy 2023',
      program: 'Kohort Machine Learning (Google, GoTo, Traveloka)',
      period: 'Feb 2023 — Jul 2023',
      location: 'Indonesia',
      credential: 'Skor 88,39 / 100',
      description: 'Menyelesaikan kurikulum Machine Learning 900 jam dan proyek capstone menggunakan Python, SQL, dan TensorFlow.',
      notes: [
        { icon: 'i-material-symbols:workspace-premium', text: 'Sertifikasi TensorFlow Developer — Bangkit Academy 2023 (Google, GoTo, Traveloka).' },
        { icon: 'i-material-symbols:translate', text: 'Bahasa: Indonesia (bahasa ibu); Inggris (skor TOEFL ITP 510).' }
      ],
      tech: ['TensorFlow', 'Python', 'SQL']
    }
  ]
}
