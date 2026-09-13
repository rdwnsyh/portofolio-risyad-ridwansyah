export const experience = {
  slug: "// experience",
  num: "02",
  label: "Pengalaman",
  title: "Pengalaman",
  accent: "Kerja",
  sub: "Tiga magang industri — software quality assurance, fullstack development, dan web development.",
  endNote: "tiga pengalaman, satu standar:",
  endAccent: "siap produksi",
  items: [
    {
      role: "Software Quality Assurance Intern",
      company: "PT Primalogic Global Teknologi",
      initials: "PG",
      period: "Mar 2026 – Jun 2026",
      description:
        "Menguji modul Administrator, Akuntansi, dan Keanggotaan sistem Dana Pensiun PT Pupuk Kaltim dengan Black-box Testing dan Vendor Integration Testing (VIT). Berfokus pada alur Defect Tracking dan Bug Life Cycle, kolaborasi bersama tim backend mengidentifikasi serta menyelesaikan 102 bug (resolution rate 84%) dan menekan eror kritis sebelum handover ke klien.",
      mainTech: [
        "Black-box Testing",
        "Vendor Integration Testing",
        "Defect Tracking",
        "Bug Life Cycle",
      ],
    },
    {
      role: "Fullstack Developer Intern",
      company: "Museum Geologi Bandung",
      initials: "MG",
      period: "Jun 2024 – Des 2024",
      description:
        "Merancang sistem manajemen koleksi KaGeo untuk mentransformasi pencatatan manual museum menjadi platform digital tersentralisasi. Terintegrasi dengan REST API Kementerian ESDM serta CAS Single Sign-On (SSO), dilanjutkan optimasi backend hingga berhasil deploy ke production.",
      mainTech: [
        "Laravel",
        "React.js",
        "Tailwind CSS",
        "PostgreSQL",
        "REST API",
        "CAS SSO",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Balai Besar Survei & Pemetaan Geologi Kelautan",
      initials: "BB",
      period: "Jun 2022 – Sep 2022",
      description:
        "Mendukung digitalisasi internal dengan mengembangkan dua aplikasi web operasional untuk manajemen rapat dan akses peta riset, dengan perancangan basis data terstruktur untuk menjaga keandalan server-side dan mengoptimalkan alur kerja staf.",
      mainTech: ["Laravel", "Bootstrap", "MySQL"],
    },
  ],
} as const;

export type ExperienceData = typeof experience;
