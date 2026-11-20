import type { Locale } from '../i18n'

export interface ProjectCaseStudy {
  problem: string
  approach: string
  outcome: string
}

export interface ProjectEntry {
  id: string
  category: string
  title: string
  description: string
  tech: string[]
  highlights: { value: string; label: string }[]
  caseStudy: ProjectCaseStudy
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
      caseStudy: {
        problem: 'High-volume user feedback across Ajaib Kripto app reviews made it difficult to isolate which specific product pain points drove negative sentiment and required priority attention.',
        approach: 'Formulated the business problem, processed 20,000+ Ajaib Kripto app reviews, and paired IndoBERT sentiment classification with Root Cause Analysis (RCA) across 5 issue categories.',
        outcome: 'Surfaced core product issues across the 5 categories and presented actionable insights and visualizations to stakeholders to support product improvement.'
      },
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
      caseStudy: {
        problem: 'Cultural heritage preservation for traditional wayang figures needed an accessible digital recognition workflow so users could identify wayang visually.',
        approach: 'Co-led a multidisciplinary team to define scope, gather user requirements, document the end-to-end product life cycle, and build a TensorFlow CNN image classifier.',
        outcome: 'Delivered complete end-to-end product life cycle documentation and a trained TensorFlow image recognition model achieving 91% accuracy.'
      },
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
      caseStudy: {
        problem: 'Volume ulasan pengguna aplikasi Ajaib Kripto yang besar menyulitkan tim untuk mengisolasi titik masalah produk mana yang memicu sentimen negatif dan perlu diprioritaskan.',
        approach: 'Merumuskan masalah bisnis, memproses 20.000+ ulasan aplikasi Ajaib Kripto, dan memadukan klasifikasi sentimen IndoBERT dengan Root Cause Analysis (RCA) pada 5 kategori masalah.',
        outcome: 'Mengungkap masalah inti produk di 5 kategori serta mempresentasikan temuan dan visualisasi yang dapat ditindaklanjuti kepada pemangku kepentingan untuk perbaikan produk.'
      },
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
      caseStudy: {
        problem: 'Pelestarian warisan budaya tokoh wayang membutuhkan alur pengenalan visual digital yang mudah digunakan agar pengguna dapat mengidentifikasi wayang secara akurat.',
        approach: 'Memimpin bersama tim multidisiplin untuk menentukan ruang lingkup, mengumpulkan kebutuhan pengguna, mendokumentasikan siklus hidup produk end-to-end, dan membangun model CNN TensorFlow.',
        outcome: 'Menghasilkan dokumentasi siklus hidup produk end-to-end yang lengkap serta model pengenalan gambar TensorFlow dengan akurasi 91%.'
      },
      glyph: 'i-material-symbols:image-search',
      artClass: 'art-eva-orange',
      link: 'https://github.com/bhazheng'
    }
  ]
}
