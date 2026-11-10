import type { ImpactMetric } from '../types/career'
import type { Locale } from '../i18n'

export interface ExperienceEntry {
  id: string
  role: string
  team?: string
  organization: string
  period: string
  location: string
  current: boolean
  type: string
  bullets: string[]
  metrics: ImpactMetric[]
  tech: string[]
}

export const EXPERIENCE: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      id: 'pesta-pora',
      role: 'Strategic Business Analytic Officer',
      team: 'Project Management — External Relation & Facilities Maintenance',
      organization: 'PT. Pesta Pora Abadi',
      period: 'Jun 2026 — Present',
      location: 'Malang, East Java, ID',
      current: true,
      type: 'Full-time',
      bullets: [
        'Collect, clean, and analyze daily Facilities and Maintenance (FNM) and External Relation data using Microsoft Excel and Google Sheets to support operational efficiency analysis.',
        'Design, develop, and maintain an interactive "Operating Document Request" dashboard in Looker Studio and Power BI, enabling stakeholders to monitor the status of 8,000+ documents and identify process bottlenecks.',
        'Collaborate with IT project managers to document business processes in the Business Requirements Document (BRD) and translate them into prototypes for the digital transformation of FNM business processes.'
      ],
      metrics: [
        { value: '8,000+ Docs', label: 'Tracked in Dashboard' },
        { value: 'FNM & Ext. Relation', label: 'Ops Coverage' },
        { value: 'Looker & Power BI', label: 'BI Stack' }
      ],
      tech: ['Looker Studio', 'Power BI', 'Google Sheets', 'Excel Analytics', 'BRD & Prototyping']
    },
    {
      id: 'ojk',
      role: 'Business Analyst Intern',
      team: 'Dept. of Regulation and Capital Market Development (DPPM)',
      organization: 'Otoritas Jasa Keuangan (OJK) — DPPM',
      period: 'Nov 2025 — May 2026',
      location: 'Central Jakarta, ID',
      current: false,
      type: 'Internship',
      bullets: [
        'Supported the drafting of the OJK Regulation (RPOJK) on Digital Assets (digital stocks) by benchmarking existing and proposed capital market regulations against global regulatory frameworks, international standards, and market trends to support policy formulation, regulatory compliance, and alignment with best practices.',
        'Supported the review and revision of the Capital Market Activities regulation through cross-agency comparative analysis, evaluating compliance and policy alignment between proposed regional financing guidelines and existing capital market frameworks, and standardizing reporting exemption guidelines.',
        'Prepared minutes of meetings, summarized key discussion points, and followed up on outstanding matters.'
      ],
      metrics: [
        { value: 'RPOJK Digital Asset', label: 'Policy Impact' },
        { value: 'Global Benchmarking', label: 'Compliance Focus' },
        { value: 'Cross-Agency Study', label: 'Research Scope' }
      ],
      tech: ['Regulatory Benchmarking', 'Capital Market Regulation', 'Compliance Analysis', 'Policy Alignment']
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
        'Translated complex programming and database concepts into clear learning materials for 270+ students.',
        'Facilitated workshops on data modeling and logical system design, mentoring students in building Entity Relationship Diagrams (ERDs) and writing SQL queries to extract, structure, and analyze data.',
        "Evaluated students' problem-solving and logical thinking and provided constructive feedback."
      ],
      metrics: [
        { value: '270+ Scholars', label: 'Students Mentored' },
        { value: 'SQL & Database', label: 'Domain Scope' },
        { value: '4 Semesters', label: 'Workshop Cohort' }
      ],
      tech: ['Advanced SQL', 'Data Modeling', 'ERD Architecture', 'Technical Mentoring']
    }
  ],
  id: [
    {
      id: 'pesta-pora',
      role: 'Strategic Business Analytic Officer',
      team: 'Manajemen Proyek — Hubungan Eksternal & Pemeliharaan Fasilitas',
      organization: 'PT. Pesta Pora Abadi',
      period: 'Jun 2026 — Sekarang',
      location: 'Malang, Jawa Timur, ID',
      current: true,
      type: 'Penuh waktu',
      bullets: [
        'Mengumpulkan, membersihkan, dan menganalisis data harian Fasilitas dan Pemeliharaan (FNM) serta Hubungan Eksternal menggunakan Microsoft Excel dan Google Sheets untuk mendukung analisis efisiensi operasional.',
        'Merancang, mengembangkan, dan memelihara dashboard interaktif "Operating Document Request" di Looker Studio dan Power BI, sehingga pemangku kepentingan dapat memantau status 8.000+ dokumen dan mengidentifikasi hambatan proses.',
        'Berkolaborasi dengan project manager IT untuk mendokumentasikan proses bisnis dalam Business Requirements Document (BRD) dan menerjemahkannya menjadi prototipe untuk transformasi digital proses bisnis FNM.'
      ],
      metrics: [
        { value: '8.000+ Dokumen', label: 'Dipantau di Dashboard' },
        { value: 'FNM & Hub. Eksternal', label: 'Cakupan Operasional' },
        { value: 'Looker & Power BI', label: 'Stack BI' }
      ],
      tech: ['Looker Studio', 'Power BI', 'Google Sheets', 'Analitik Excel', 'BRD & Prototyping']
    },
    {
      id: 'ojk',
      role: 'Business Analyst Intern',
      team: 'Departemen Pengaturan dan Pengembangan Pasar Modal (DPPM)',
      organization: 'Otoritas Jasa Keuangan (OJK) — DPPM',
      period: 'Nov 2025 — Mei 2026',
      location: 'Jakarta Pusat, ID',
      current: false,
      type: 'Magang',
      bullets: [
        'Mendukung penyusunan Rancangan Peraturan OJK (RPOJK) tentang Aset Digital (saham digital) dengan membandingkan regulasi pasar modal yang ada dan yang diusulkan terhadap kerangka regulasi global, standar internasional, dan tren pasar untuk mendukung perumusan kebijakan, kepatuhan regulasi, dan keselarasan dengan praktik terbaik.',
        'Mendukung review dan revisi regulasi Kegiatan Pasar Modal melalui analisis perbandingan lintas lembaga, mengevaluasi kepatuhan dan keselarasan kebijakan antara usulan pedoman pembiayaan daerah dan kerangka pasar modal yang ada, serta menstandarkan pedoman pengecualian pelaporan.',
        'Menyusun notulen rapat, merangkum poin-poin diskusi utama, dan menindaklanjuti hal-hal yang belum selesai.'
      ],
      metrics: [
        { value: 'RPOJK Aset Digital', label: 'Dampak Kebijakan' },
        { value: 'Benchmarking Global', label: 'Fokus Kepatuhan' },
        { value: 'Studi Lintas Lembaga', label: 'Lingkup Riset' }
      ],
      tech: ['Benchmarking Regulasi', 'Regulasi Pasar Modal', 'Analisis Kepatuhan', 'Keselarasan Kebijakan']
    },
    {
      id: 'lab-assistant',
      role: 'Asisten Praktikum Laboratorium',
      organization: 'Fakultas Ilmu Komputer, Universitas Brawijaya',
      period: 'Sep 2021 — Jul 2023',
      location: 'Malang, Jawa Timur, ID',
      current: false,
      type: 'Akademik',
      bullets: [
        'Menerjemahkan konsep pemrograman dan basis data yang kompleks menjadi materi belajar yang jelas bagi 270+ mahasiswa.',
        'Memfasilitasi workshop pemodelan data dan desain sistem logis, membimbing mahasiswa membuat Entity Relationship Diagram (ERD) dan menulis query SQL untuk mengambil, menstruktur, dan menganalisis data.',
        'Menilai kemampuan pemecahan masalah dan berpikir logis mahasiswa serta memberikan umpan balik yang konstruktif.'
      ],
      metrics: [
        { value: '270+ Mahasiswa', label: 'Mahasiswa Dibimbing' },
        { value: 'SQL & Basis Data', label: 'Lingkup Domain' },
        { value: '4 Semester', label: 'Kohort Workshop' }
      ],
      tech: ['SQL Lanjutan', 'Pemodelan Data', 'Arsitektur ERD', 'Mentoring Teknis']
    }
  ]
}
