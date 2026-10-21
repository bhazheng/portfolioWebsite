import type { ImpactMetric } from '../types/career'

export interface ExperienceEntry {
  id: string
  role: string
  organization: string
  period: string
  location: string
  current: boolean
  type: string
  bullets: string[]
  metrics: ImpactMetric[]
  tech: string[]
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'pesta-pora',
    role: 'Strategic Business Analytic Officer',
    organization: 'PT. Pesta Pora Abadi',
    period: 'Jun 2026 — Present',
    location: 'Malang, East Java, ID',
    current: true,
    type: 'Full-time',
    bullets: [
      'Manage and process daily Maintenance & Repair (MnR) data for the Store Operation division using Microsoft Excel and Google Spreadsheets to support operational efficiency analysis.',
      'Design, develop, and maintain the interactive "Operating Document Request" dashboard in Looker Studio and Power BI, providing document status visibility and process bottlenecks to stakeholders.'
    ],
    metrics: [
      { value: '5+ Dashboards', label: 'Live Systems' },
      { value: 'Store Operation MnR', label: 'Ops Coverage' },
      { value: 'Looker & Power BI', label: 'BI Stack' }
    ],
    tech: ['Looker Studio', 'Power BI', 'Google Spreadsheets', 'Excel Analytics']
  },
  {
    id: 'ojk',
    role: 'Business Analyst Intern',
    organization: 'Otoritas Jasa Keuangan (OJK) — DPPM / DPAM',
    period: 'Nov 2025 — May 2026',
    location: 'Central Jakarta, ID',
    current: false,
    type: 'Internship',
    bullets: [
      'Assisted the Capital Market Regulation and Development Directorate (DPPM) in comparative research regarding emerging digital financial assets and global regulatory frameworks.',
      'Supported the formulation of RPOJK on Digital Assets through comparative studies of international standards and global market trends.',
      'Supported the review of Capital Market Activity regulation revisions through cross-agency compliance analysis and standardization of reporting exemptions.'
    ],
    metrics: [
      { value: 'RPOJK Digital Asset', label: 'Policy Impact' },
      { value: 'Global Assets', label: 'Compliance Focus' },
      { value: 'Cross-Agency Study', label: 'Research Scope' }
    ],
    tech: ['Digital Financial Assets', 'OJK Regulations', 'Market Analysis', 'Compliance Study']
  },
  {
    id: 'lab-assistant',
    role: 'Laboratory Teaching Assistant',
    organization: 'Faculty of Computer Science, Universitas Brawijaya',
    period: 'Sep 2021 — Jul 2023',
    location: 'Malang, East Java, ID',
    current: false,
    type: 'Academic',
    bullets: [
      'Translated complex programming and database architecture concepts into easily digestible learning materials for over 270 students.',
      'Facilitated workshops on data modeling, logical system design, ERD creation, and SQL querying.',
      "Evaluated students' work and provided constructive feedback on problem-solving approaches and programming logic."
    ],
    metrics: [
      { value: '270+ Scholars', label: 'Students Mentored' },
      { value: 'SQL & Database', label: 'Domain Scope' },
      { value: '4 Semesters', label: 'Workshop Cohort' }
    ],
    tech: ['Advanced SQL', 'Data Modeling', 'ERD Architecture', 'Technical Mentoring']
  }
]
