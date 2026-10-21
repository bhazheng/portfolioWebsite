import type { SkillCategory } from '../types/skills'

export interface SkillCategoryWithColor extends SkillCategory {
  color: string
}

export const SKILL_CATEGORIES: SkillCategoryWithColor[] = [
  {
    id: 'business',
    title: 'Business & Data Analytics',
    icon: 'i-material-symbols:monitoring',
    color: 'primary',
    skills: [
      { id: 'rca', name: 'Root Cause Analysis (RCA)', appliedIn: 'Ajaib Kripto Thesis & Store Ops' },
      { id: 'market', name: 'Market Research & Analysis', appliedIn: 'OJK Digital Financial Assets RPOJK' },
      { id: 'strategy', name: 'Data Analysis & Strategy', appliedIn: 'PT. Pesta Pora Abadi MnR' },
      { id: 'doc', name: 'Process Documentation', appliedIn: 'System Analysis & Compliance' }
    ]
  },
  {
    id: 'visualization',
    title: 'Data Visualization & BI',
    icon: 'i-material-symbols:dashboard',
    color: 'tertiary',
    skills: [
      { id: 'looker', name: 'Looker Studio', appliedIn: 'Store Operation Dashboards' },
      { id: 'powerbi', name: 'Power BI', appliedIn: 'Operating Document Request System' },
      { id: 'exec', name: 'Executive Dashboard Design', appliedIn: 'Stakeholder Reporting' },
      { id: 'seaborn', name: 'Matplotlib / Seaborn', appliedIn: 'Python Data Storytelling' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Database Tools',
    icon: 'i-material-symbols:database',
    color: 'secondary',
    skills: [
      { id: 'excel', name: 'Excel & Google Sheets', appliedIn: 'Daily Operational Data' },
      { id: 'sql', name: 'Advanced SQL', appliedIn: 'UB Database Lab & Analytics' },
      { id: 'python', name: 'Python Core', appliedIn: 'Data Pipelines & ML' },
      { id: 'rdbms', name: 'RDBMS & Data Modeling', appliedIn: 'ERD & System Architecture' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'i-material-symbols:neurology',
    color: 'eva-orange',
    skills: [
      { id: 'indobert', name: 'IndoBERT & NLP', appliedIn: 'Sentiment Analysis Thesis' },
      { id: 'tf', name: 'TensorFlow & CNN', appliedIn: 'Semar Wayang Classifier (89.2%)' },
      { id: 'pandas', name: 'Pandas & NumPy', appliedIn: 'Feature Engineering' },
      { id: 'predictive', name: 'Predictive Modeling', appliedIn: 'Bangkit ML Curriculum' }
    ]
  }
]
