export interface ProjectEntry {
  id: string
  category: string
  title: string
  description: string
  tech: string[]
  glyph: string
  artClass: string
  link: string
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: 'indobert',
    category: 'Thesis // NLP & Analytics',
    title: 'Sentiment Analysis for Product Improvement (IndoBERT)',
    description: 'Root Cause Analysis applied to large-scale qualitative user reviews in the Ajaib Kripto app — from problem formulation to concrete product improvement recommendations.',
    tech: ['IndoBERT', 'Python NLP', 'RCA'],
    glyph: 'i-material-symbols:neurology',
    artClass: 'art-primary',
    link: 'https://github.com/bhazheng'
  },
  {
    id: 'semar',
    category: 'Capstone // Computer Vision',
    title: 'Semar — Wayang Image Classification',
    description: 'Led a cross-disciplinary team to build an image classifier preserving Indonesian cultural heritage, covering model design through prediction system integration.',
    tech: ['CNN Model', 'Cloud API', 'TensorFlow'],
    glyph: 'i-material-symbols:image-search',
    artClass: 'art-eva-orange',
    link: 'https://github.com/bhazheng'
  }
]
