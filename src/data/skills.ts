import type { SkillCategory } from '../types/skills'
import type { Locale } from '../i18n'

export interface SkillCategoryWithColor extends SkillCategory {
  color: string
}

export const SKILL_CATEGORIES: Record<Locale, SkillCategoryWithColor[]> = {
  en: [
    {
      id: 'business',
      title: 'Data Analytics & Statistics',
      icon: 'i-material-symbols:monitoring',
      color: 'primary',
      skills: [
        { id: 'stats', name: 'Statistical Analysis' },
        { id: 'predictive', name: 'Predictive Modeling' },
        { id: 'rca', name: 'Root Cause Analysis (RCA)' },
        { id: 'market', name: 'Market Research' },
        { id: 'doc', name: 'Process Documentation' }
      ]
    },
    {
      id: 'visualization',
      title: 'Visualization & Reporting',
      icon: 'i-material-symbols:dashboard',
      color: 'tertiary',
      skills: [
        { id: 'powerbi', name: 'Power BI' },
        { id: 'tableau', name: 'Tableau' },
        { id: 'looker', name: 'Looker Studio' },
        { id: 'seaborn', name: 'Matplotlib / Seaborn' },
        { id: 'exec', name: 'Dashboards & Presentation' }
      ]
    },
    {
      id: 'technical',
      title: 'Programming & Databases',
      icon: 'i-material-symbols:database',
      color: 'secondary',
      skills: [
        { id: 'python', name: 'Python & Pandas' },
        { id: 'sql', name: 'SQL' },
        { id: 'excel', name: 'Excel & Google Sheets' },
        { id: 'db2', name: 'IBM DB2' },
        { id: 'rdbms', name: 'Data Modeling (ERD)' }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning & NLP',
      icon: 'i-material-symbols:neurology',
      color: 'eva-orange',
      skills: [
        { id: 'tf', name: 'TensorFlow' },
        { id: 'indobert', name: 'IndoBERT' },
        { id: 'sentiment', name: 'Sentiment Analysis' },
        { id: 'imgclass', name: 'Image Classification' }
      ]
    },
    {
      id: 'governance',
      title: 'Business, Governance & Compliance',
      icon: 'i-material-symbols:gavel',
      color: 'primary',
      skills: [
        { id: 'regbench', name: 'Regulatory Benchmarking' },
        { id: 'capmarket', name: 'Capital Market Regulation' },
        { id: 'compliance', name: 'Compliance Analysis' },
        { id: 'brd', name: 'BRD & Prototyping' },
        { id: 'dt', name: 'Digital Transformation' },
        { id: 'ea', name: 'Enterprise Architecture' },
        { id: 'bpm', name: 'Business Process Modeling' }
      ]
    }
  ],
  id: [
    {
      id: 'business',
      title: 'Analitik Data & Statistik',
      icon: 'i-material-symbols:monitoring',
      color: 'primary',
      skills: [
        { id: 'stats', name: 'Analisis Statistik' },
        { id: 'predictive', name: 'Pemodelan Prediktif' },
        { id: 'rca', name: 'Root Cause Analysis (RCA)' },
        { id: 'market', name: 'Riset Pasar' },
        { id: 'doc', name: 'Dokumentasi Proses' }
      ]
    },
    {
      id: 'visualization',
      title: 'Visualisasi & Pelaporan',
      icon: 'i-material-symbols:dashboard',
      color: 'tertiary',
      skills: [
        { id: 'powerbi', name: 'Power BI' },
        { id: 'tableau', name: 'Tableau' },
        { id: 'looker', name: 'Looker Studio' },
        { id: 'seaborn', name: 'Matplotlib / Seaborn' },
        { id: 'exec', name: 'Dashboard & Presentasi' }
      ]
    },
    {
      id: 'technical',
      title: 'Pemrograman & Basis Data',
      icon: 'i-material-symbols:database',
      color: 'secondary',
      skills: [
        { id: 'python', name: 'Python & Pandas' },
        { id: 'sql', name: 'SQL' },
        { id: 'excel', name: 'Excel & Google Sheets' },
        { id: 'db2', name: 'IBM DB2' },
        { id: 'rdbms', name: 'Pemodelan Data (ERD)' }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning & NLP',
      icon: 'i-material-symbols:neurology',
      color: 'eva-orange',
      skills: [
        { id: 'tf', name: 'TensorFlow' },
        { id: 'indobert', name: 'IndoBERT' },
        { id: 'sentiment', name: 'Analisis Sentimen' },
        { id: 'imgclass', name: 'Klasifikasi Gambar' }
      ]
    },
    {
      id: 'governance',
      title: 'Bisnis, Tata Kelola & Kepatuhan',
      icon: 'i-material-symbols:gavel',
      color: 'primary',
      skills: [
        { id: 'regbench', name: 'Benchmarking Regulasi' },
        { id: 'capmarket', name: 'Regulasi Pasar Modal' },
        { id: 'compliance', name: 'Analisis Kepatuhan' },
        { id: 'brd', name: 'BRD & Prototyping' },
        { id: 'dt', name: 'Transformasi Digital' },
        { id: 'ea', name: 'Arsitektur Enterprise' },
        { id: 'bpm', name: 'Pemodelan Proses Bisnis' }
      ]
    }
  ]
}
