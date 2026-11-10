import type { Locale } from '../i18n'

export interface ProjectEntry {
  id: string
  category: string
  title: string
  description: string
  tech: string[]
  highlights: { value: string; label: string }[]
  glyph: string
  artClass: string
  link: string
}

export const PROJECTS: Record<Locale, ProjectEntry[]> = {
  en: [
    {
      id: 'indobert',
      category: 'Thesis // NLP & Analytics',
      title: 'Sentiment Analysis for Product Improvement (IndoBERT)',
      description: 'Formulated the business problem, processed 20,000+ Ajaib Kripto app reviews, and paired IndoBERT sentiment analysis with Root Cause Analysis to surface core product issues across 5 categories — then presented insights and visualizations to stakeholders.',
      tech: ['IndoBERT', 'Python NLP', 'RCA'],
      highlights: [
        { value: '20,000+', label: 'App reviews analysed' },
        { value: '5', label: 'Issue categories' }
      ],
      glyph: 'i-material-symbols:neurology',
      artClass: 'art-primary',
      link: 'https://github.com/bhazheng'
    },
    {
      id: 'semar',
      category: 'Capstone // Computer Vision',
      title: 'Semar — Wayang Image Recognition',
      description: 'Co-led a multidisciplinary team building a TensorFlow image classifier for cultural heritage preservation — defined scope, gathered user requirements, documented the end-to-end product life cycle, and delivered a model with 91% accuracy.',
      tech: ['CNN Model', 'TensorFlow'],
      highlights: [{ value: '91%', label: 'Model accuracy' }],
      glyph: 'i-material-symbols:image-search',
      artClass: 'art-eva-orange',
      link: 'https://github.com/bhazheng'
    }
  ],
  id: [
    {
      id: 'indobert',
      category: 'Skripsi // NLP & Analitik',
      title: 'Sentiment Analysis for Product Improvement (IndoBERT)',
      description: 'Merumuskan masalah bisnis, memproses 20.000+ ulasan aplikasi Ajaib Kripto, dan memadukan analisis sentimen IndoBERT dengan Root Cause Analysis untuk mengungkap masalah inti produk di 5 kategori — lalu mempresentasikan temuan dan visualisasi kepada pemangku kepentingan.',
      tech: ['IndoBERT', 'Python NLP', 'RCA'],
      highlights: [
        { value: '20.000+', label: 'Ulasan aplikasi dianalisis' },
        { value: '5', label: 'Kategori masalah' }
      ],
      glyph: 'i-material-symbols:neurology',
      artClass: 'art-primary',
      link: 'https://github.com/bhazheng'
    },
    {
      id: 'semar',
      category: 'Capstone // Computer Vision',
      title: 'Semar — Wayang Image Recognition',
      description: 'Memimpin bersama tim multidisiplin membangun pengklasifikasi gambar TensorFlow untuk pelestarian warisan budaya — menentukan ruang lingkup, mengumpulkan kebutuhan pengguna, mendokumentasikan siklus hidup produk end-to-end, dan menghasilkan model dengan akurasi 91%.',
      tech: ['CNN Model', 'TensorFlow'],
      highlights: [{ value: '91%', label: 'Akurasi model' }],
      glyph: 'i-material-symbols:image-search',
      artClass: 'art-eva-orange',
      link: 'https://github.com/bhazheng'
    }
  ]
}
