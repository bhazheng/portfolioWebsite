export type Locale = 'en' | 'id'

export const LOCALES: readonly Locale[] = ['en', 'id']
export const DEFAULT_LOCALE: Locale = 'en'

/** English lives at `/`, Indonesian at `/id/`. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`
}


export interface UiStrings {
  htmlLang: string
  title: string
  description: string
  skipLink: string
  /** Nav labels keyed by `NAV_SECTIONS[].id`. */
  nav: Record<'hero' | 'experience' | 'education' | 'projects' | 'skills' | 'contact', string>
  header: {
    brandAria: string
    navLabel: string
    showNav: string
    toLight: string
    toDark: string
    languageLabel: string
  }
  hero: {
    intro: string
    paragraph: string
    emailCta: string
    moreContact: string
    copyEmail: string
    emailCopied: string
    cvCta: string
    newTab: string
    status: string
    projectsCta: string
    portraitAlt: string
  }
  experience: { heading: string; subtitle: string; stamp: string; current: string; more: string; less: string }
  education: { heading: string; subtitle: string }
  projects: {
    heading: string
    subtitle: string
    openCaseStudy: string
    close: string
    problem: string
    approach: string
    outcome: string
    viewGithub: string
  }
  skills: { heading: string; subtitle: string }
  contact: { heading: string; subtitle: string; copy: string; copied: string; whatsappHint: string; cvHint: string }
  footer: { rights: string }
}

/** Public Google Drive copy of the CV (view or download). */
export const CV_URL = 'https://drive.google.com/file/d/175hnUPSlgz3KgXQ4bfhhujAA4wTawXff/view?usp=sharing'

const TITLE ='Akbar Lucky Basuki — Business Analyst & Data Storyteller'

export const UI: Record<Locale, UiStrings> = {
  en: {
    htmlLang: 'en',
    title: TITLE,
    description:
      'Portfolio of Akbar Lucky Basuki — Business Analyst & Data Storyteller. Information Systems graduate focused on dashboards, regulatory and compliance analysis, SQL, Python, and machine learning.',
    skipLink: 'Skip to content',
    nav: {
      hero: 'Home',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    header: {
      brandAria: 'Akbar Lucky Basuki — home',
      navLabel: 'Main navigation',
      showNav: 'Show navigation',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      languageLabel: 'Language'
    },
    hero: {
      intro: "Hello, I'm Akbar",
      paragraph:
        'An Information Systems graduate from Universitas Brawijaya. I turn data into dashboards in Power BI and Looker Studio, support regulatory and compliance analysis at OJK, and build SQL, Python, and machine learning solutions that guide decisions leaders act on.',
      emailCta: 'Contact me',
      moreContact: 'More contact options',
      copyEmail: 'Copy email',
      emailCopied: 'Email copied',
      cvCta: 'View CV',
      newTab: 'opens in a new tab',
      status: 'Open to IT Assurance & Data Analytics roles',
      projectsCta: 'Explore projects',
      portraitAlt: 'Akbar Lucky Basuki'
    },
    experience: {
      heading: 'Experience',
      subtitle: 'My work in analytics, compliance research, and academic mentoring.',
      stamp: 'Security & software, data-driven.',
      current: 'Current',
      more: 'Show {n} more',
      less: 'Show less'
    },
    education: {
      heading: 'Education',
      subtitle: 'Academic foundations and certifications that shaped my analytical practice.'
    },
    projects: {
      heading: 'Projects',
      subtitle: 'Some of my work in analytics, machine learning, and data storytelling.',
      openCaseStudy: 'Open case study',
      close: 'Close dialog',
      problem: 'Problem',
      approach: 'Approach',
      outcome: 'Outcome',
      viewGithub: 'View on GitHub'
    },
    skills: {
      heading: 'Skills',
      subtitle: 'The capabilities I use to turn raw data into decisions leaders act on.'
    },
    contact: {
      copy: 'Copy',
      copied: 'Copied',
      whatsappHint: 'Chat directly',
      cvHint: 'Google Drive',
      heading: 'Have something in mind?',
      subtitle:
        "A project, a challenge, or just a hello. I'm open for data analytics and IT assurance roles (audit, governance, risk & compliance), BI work, and research."
    },
    footer: { rights: 'All rights reserved.' }
  },
  id: {
    htmlLang: 'id',
    title: TITLE,
    description:
      'Portofolio Akbar Lucky Basuki — Business Analyst & Data Storyteller. Lulusan Sistem Informasi yang berfokus pada dashboard, analisis regulasi dan kepatuhan, SQL, Python, dan machine learning.',
    skipLink: 'Langsung ke konten',
    nav: {
      hero: 'Beranda',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak'
    },
    header: {
      brandAria: 'Akbar Lucky Basuki — beranda',
      navLabel: 'Navigasi utama',
      showNav: 'Tampilkan navigasi',
      toLight: 'Ganti ke tema terang',
      toDark: 'Ganti ke tema gelap',
      languageLabel: 'Bahasa'
    },
    hero: {
      intro: 'Halo, saya Akbar',
      paragraph:
        'Lulusan Sistem Informasi Universitas Brawijaya. Saya mengubah data menjadi dashboard di Power BI dan Looker Studio, mendukung analisis regulasi dan kepatuhan di OJK, serta membangun solusi SQL, Python, dan machine learning yang membantu para pemimpin mengambil keputusan.',
      emailCta: 'Hubungi saya',
      moreContact: 'Opsi kontak lainnya',
      copyEmail: 'Salin email',
      emailCopied: 'Email tersalin',
      cvCta: 'Lihat CV',
      newTab: 'terbuka di tab baru',
      status: 'Terbuka untuk peran IT Assurance & Data Analytics',
      projectsCta: 'Lihat proyek',
      portraitAlt: 'Akbar Lucky Basuki'
    },
    experience: {
      heading: 'Pengalaman',
      subtitle: 'Perjalanan saya di bidang analitik, riset kepatuhan, dan mentoring akademik.',
      stamp: 'Keamanan & perangkat lunak, berbasis data.',
      current: 'Saat ini',
      more: 'Tampilkan {n} lagi',
      less: 'Tampilkan lebih sedikit'
    },
    education: {
      heading: 'Pendidikan',
      subtitle: 'Fondasi akademik dan sertifikasi yang membentuk cara saya menganalisis.'
    },
    projects: {
      heading: 'Proyek',
      subtitle: 'Sebagian karya saya di bidang analitik, machine learning, dan data storytelling.',
      openCaseStudy: 'Buka studi kasus',
      close: 'Tutup dialog',
      problem: 'Masalah',
      approach: 'Pendekatan',
      outcome: 'Hasil',
      viewGithub: 'Lihat di GitHub'
    },
    skills: {
      heading: 'Keahlian',
      subtitle: 'Kemampuan yang saya gunakan untuk mengubah data mentah menjadi keputusan yang ditindaklanjuti para pemimpin.'
    },
    contact: {
      copy: 'Salin',
      copied: 'Tersalin',
      whatsappHint: 'Chat langsung',
      cvHint: 'Google Drive',
      heading: 'Punya sesuatu di benak?',
      subtitle:
        'Sebuah proyek, tantangan, atau sekadar menyapa. Saya terbuka untuk peran data analytics dan IT assurance (audit, governance, risk & compliance), pekerjaan BI, dan riset.'
    },
    footer: { rights: 'Hak cipta dilindungi.' }
  }
}
