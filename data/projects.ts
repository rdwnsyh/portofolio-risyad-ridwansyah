export const projects = {
  slug: "// projects",
  num: "03",
  label: "Proyek Pilihan",
  title: "Proyek",
  accent: "Pilihan",
  sub: "Potongan lintas platform — dari proyek mandiri hingga aplikasi yang dipakai operasional sungguhan.",
  githubProfile: "https://github.com/rdwnsyh?tab=repositories",
  items: [
    {
      title: "Client Project Progress Tracker",
      year: "2026",
      short:
        "Sistem manajemen proyek full-stack untuk memantau progres proyek klien real-time — transparansi milestone dan pelaporan manajerial.",
      description:
        "Masalah yang dijawab: progres proyek klien sulit dipantau transparan dan laporan manajerial tersusun manual. Solusinya: platform full-stack dengan transparansi milestone, perhitungan progres otomatis, dan pelaporan manajerial profesional — lengkap dengan peran programmer yang mengunggah laporan tiap progres serta kolom komentar per work item.",
      role: "Full-stack Developer",
      tech: ["C#", ".NET", "JavaScript", "HTML/CSS"],
      github: "https://github.com/rdwnsyh/client-project-progress-tracker",
      demo: null,
      icon: "dashboard",
    },
    {
      title: "KaGeo — Sistem Koleksi Museum Geologi",
      year: "2024",
      short:
        "Platform digital tersentralisasi pengganti pencatatan manual koleksi museum — terintegrasi SSO & REST API kementerian.",
      description:
        "Dibangun saat magang sebagai Fullstack Developer Intern di Museum Geologi Bandung: mentransformasi pencatatan manual menjadi platform digital tersentralisasi dengan CAS Single Sign-On, REST API Kementerian ESDM, optimasi backend, hingga deploy ke production.",
      role: "Fullstack Developer Intern",
      tech: ["Laravel", "React.js", "PostgreSQL", "REST API"],
      github: "https://github.com/rdwnsyh/app_museum_geologi",
      demo: null,
      icon: "landmark",
    },
    {
      title: "FocusTalk — Smart Intervention System",
      year: "2025",
      short:
        "Aplikasi mobile edukasi penangkal distraksi belajar via system overlay — didukung API heuristic rule-based.",
      description:
        "Proyek tugas akhir: rancang bangun sistem smart-intervention dan kontrol aktivitas pengguna berbasis algoritma Heuristic Rule-Based untuk pembelajaran bahasa Inggris. Aplikasi mobile (Flutter) mendeteksi distraksi lewat system overlay window, ditenagai API backend (FastAPI) sebagai mesin aturan intervensi.",
      role: "Mobile & Backend Developer",
      tech: ["Flutter", "FastAPI", "Python", "Heuristic Rule-Based"],
      github: "https://github.com/rdwnsyh/focustalk_app",
      demo: null,
      icon: "smartphone",
      related: [
        {
          label: "Backend API",
          href: "https://github.com/rdwnsyh/be_api_focustalk",
        },
      ],
    },
    {
      title: "Cakrawala Muda Indonesia",
      year: "2025",
      short:
        "Web informasi kompetisi mahasiswa — landing page dan katalog lomba.",
      description:
        "Website informasi kompetisi mahasiswa: landing page publik plus pengelolaan konten informasi lomba agar mudah ditemukan dan diikuti.",
      role: "Web Developer",
      tech: ["Laravel", "PHP", "Blade"],
      github: "https://github.com/rdwnsyh/cakrawala_muda_indonesia",
      demo: null,
      icon: "trophy",
    },
    {
      title: "Berkah Expedisi",
      year: "2025",
      short:
        "Company profile dan sistem informasi jasa ekspedisi.",
      description:
        "Company profile sekaligus sistem informasi Berkah Expedisi: profil layanan, informasi operasional, dan pengelolaan konten perusahaan.",
      role: "Web Developer",
      tech: ["Laravel", "PHP", "Blade", "CSS"],
      github: "https://github.com/rdwnsyh/berkah-expedisi",
      demo: null,
      icon: "truck",
    },
    {
      title: "Layar Kita",
      year: "2023",
      short:
        "Website pencarian film favorit dengan live demo yang bisa langsung dicoba.",
      description:
        "Website untuk mencari film kesukaan: jelajahi katalog, cari judul, dan lihat detail film langsung dari browser.",
      role: "Frontend Developer",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/rdwnsyh/layar-kita",
      demo: "https://rdwnsyh.github.io/layar-kita",
      icon: "clapper",
    },
  ],
} as const;

export type ProjectsData = typeof projects;
export type ProjectItem = (typeof projects.items)[number];
