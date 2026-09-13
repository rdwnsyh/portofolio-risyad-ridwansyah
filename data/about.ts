export const about = {
  eyebrow: "Tentang Saya",
  title: "Mengubah kebutuhan operasional menjadi sistem yang stabil dan siap pakai",
  description:
    "Lulusan D3 Teknik Informatika dengan pengalaman magang industri di pengembangan dan pengujian perangkat lunak.",
  paragraphs: [
    "Saya berpengalaman bekerja di lingkungan operasional nyata sebagai Fullstack Developer di Museum Geologi Bandung, membangun sistem manajemen koleksi yang terintegrasi dengan layanan single sign-on dan REST API kementerian. Sebelumnya saya juga mengembangkan aplikasi web operasional untuk manajemen rapat dan pemetaan riset di Balai Besar Survei dan Pemetaan Geologi Kelautan.",
    "Di sisi kualitas perangkat lunak, saya berpengalaman sebagai Software Quality Assurance di PT Primalogic Global Teknologi untuk sistem dana pensiun — mengelola defect tracking dan bug life cycle, mengeksekusi integration testing dan black-box testing, serta mengawal 102 temuan bug hingga 84% terselesaikan dan sistem stabil siap serah terima.",
  ],
  experiences: [
    {
      role: "Fullstack Developer Intern",
      place: "Museum Geologi Bandung",
      detail:
        "Membangun sistem manajemen koleksi terintegrasi SSO dan REST API kementerian.",
    },
    {
      role: "Software Quality Assurance Intern",
      place: "PT Primalogic Global Teknologi",
      detail:
        "Defect tracking & bug life cycle untuk sistem dana pensiun — 102 bug, resolution rate 84%.",
    },
    {
      role: "Web Developer Intern",
      place: "Balai Besar Survei & Pemetaan Geologi Kelautan",
      detail:
        "Mengembangkan aplikasi web operasional manajemen rapat dan pemetaan riset.",
    },
  ],
  contributions: [
    {
      title: "Pengembang FocusTalk",
      detail:
        "Aplikasi mobile edukasi dengan mekanisme intervensi distraksi belajar berbasis aturan heuristik dan system overlay.",
    },
    {
      title: "Pemateri Bootcamp — Program PKM",
      detail:
        "Berbagi ilmu pengembangan web kepada siswa SMKN 2 Cimahi pada kegiatan Pengabdian Kepada Masyarakat.",
    },
  ],
  highlights: [
    {
      value: "3+",
      label: "Magang Industri",
      detail: "Fullstack, SQA, Web Developer",
    },
    {
      value: "84%",
      label: "Bug Resolution Rate",
      detail: "102 bug dikawal hingga siap serah terima",
    },
    {
      value: "3.78",
      label: "IPK / 4.00",
      detail: "D3 Teknik Informatika",
    },
    {
      value: "2",
      label: "Proyek & Pengabdian",
      detail: "FocusTalk & pemateri bootcamp PKM",
    },
  ],
} as const;

export type About = typeof about;
