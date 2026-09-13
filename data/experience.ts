// TODO: Ganti setiap `period` dengan periode magang yang sebenarnya,
// contoh: "Agu 2024 – Des 2024". Urutan di bawah ini kronologis terbalik
// (terbaru dulu) — tukar posisi item jika urutan sebenarnya berbeda.

export const experience = {
  slug: "// experience",
  num: "02",
  label: "Pengalaman",
  title: "Pengalaman",
  accent: "Kerja",
  sub: "Tiga magang industri — fullstack development, software quality assurance, dan web development.",
  endNote: "tiga pengalaman, satu standar:",
  endAccent: "siap produksi",
  items: [
    {
      role: "Fullstack Developer Intern",
      company: "Museum Geologi Bandung",
      initials: "MG",
      period: "Bulan 20XX – Bulan 20XX",
      description:
        "Membangun sistem manajemen koleksi KaGeo yang terintegrasi dengan CAS Single Sign-On dan REST API Kementerian ESDM.",
      mainTech: ["Laravel", "React.js", "PostgreSQL", "REST API", "CAS SSO"],
    },
    {
      role: "Software Quality Assurance Intern",
      company: "PT Primalogic Global Teknologi",
      initials: "PG",
      period: "Bulan 20XX – Bulan 20XX",
      description:
        "Mengelola defect tracking dan bug life cycle untuk sistem Dana Pensiun PT Pupuk Kalimantan Timur — mengeksekusi Vendor Integration Testing serta black-box testing, mengawal 102 bug hingga 84% terselesaikan dan sistem stabil siap serah terima.",
      mainTech: [
        "Black-box Testing",
        "Vendor Integration Testing",
        "Defect Tracking",
        "Bug Life Cycle",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Balai Besar Survei & Pemetaan Geologi Kelautan",
      initials: "BB",
      period: "Bulan 20XX – Bulan 20XX",
      description:
        "Mengembangkan aplikasi web operasional untuk manajemen rapat dan pemetaan riset.",
      mainTech: ["Aplikasi Web", "Sistem Informasi", "Manajemen Rapat"],
    },
  ],
} as const;

export type ExperienceData = typeof experience;
