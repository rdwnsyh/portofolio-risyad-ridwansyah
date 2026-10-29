// Kamus Bahasa Indonesia — sumber kebenaran seluruh teks situs.
// Pasangannya: content/en.ts (wajib bentuknya sama persis).

export const idContent = {
  locale: "id" as "id" | "en",
  nav: {
    links: [
      { label: "Beranda", href: "#top" },
      { label: "Tentang", href: "#about" },
      { label: "Pengalaman", href: "#experience" },
      { label: "Proyek", href: "#projects" },
      { label: "Sertifikasi", href: "#certificates" },
      { label: "Pencapaian", href: "#achievements" },
      { label: "Keahlian", href: "#skills" },
      { label: "Kontak", href: "#contact" },
    ],
    homeAria: "Risyad Ridwansyah — kembali ke atas",
    menuOpen: "Buka menu navigasi",
    menuClose: "Tutup menu navigasi",
    languageLabel: "Pilih bahasa",
  },
  hero: {
    status: "Tersedia untuk full-time",
    greeting: "halo, saya",
    firstName: "Risyad",
    lastName: "Ridwansyah",
    roles: [
      "Web Developer",
      "Quality Assurance",
      "Backend Developer",
      "Fullstack Developer",
    ],
    tagline:
      "Lulusan D3 Teknik Informatika yang berfokus pada pengembangan web modern, backend yang scalable, hingga pengujian kualitas perangkat lunak (QA) — menulis kode yang bersih, teruji, dan siap produksi.",
    ctaProjects: "Lihat Proyek",
    ctaCV: "Unduh CV",
    cvFileName: "CV_Risyad_Ridwansyah.pdf",
    scrollAria: "Gulir ke bagian proyek",
    socialGithub: "GitHub Risyad Ridwansyah",
    socialLinkedin: "LinkedIn Risyad Ridwansyah",
    socialEmail: "Email Risyad Ridwansyah",
    sectionAria: "Perkenalan Risyad Ridwansyah",
  },
  stats: {
    sectionAria: "Statistik utama",
    items: [
      { value: 3, suffix: "+", decimals: 0, label: "Magang Industri" },
      { value: 2, suffix: "", decimals: 0, label: "Proyek & Pengabdian" },
      { value: 9, suffix: "", decimals: 0, label: "Kumpulan Teknologi" },
      {
        value: 6,
        suffix: "+",
        decimals: 0,
        label: "Total Project Yang Telah Diselesaikan",
      },
    ],
  },
  about: {
    slug: "// tentang",
    num: "01",
    label: "Tentang Saya",
    title: "Tentang",
    accent: "Saya",
    description:
      "Lulusan D3 Teknik Informatika dengan pengalaman magang industri di pengembangan dan pengujian perangkat lunak.",
    ledePre: "Saya mengubah kebutuhan operasional menjadi ",
    ledeEm1: "sistem yang stabil",
    ledeMid: " dan ",
    ledeEm2: "siap serah terima",
    ledePost: ".",
    paragraphs: [
      "Saya berpengalaman bekerja di lingkungan operasional nyata sebagai Fullstack Developer di Museum Geologi Bandung, membangun sistem manajemen koleksi yang terintegrasi dengan layanan single sign-on dan REST API kementerian. Sebelumnya saya juga mengembangkan aplikasi web operasional untuk manajemen rapat dan pemetaan riset di Balai Besar Survei dan Pemetaan Geologi Kelautan.",
      "Di sisi kualitas perangkat lunak, saya berpengalaman sebagai Software Quality Assurance di PT Primalogic Global Teknologi untuk sistem dana pensiun — mengelola defect tracking dan bug life cycle, mengeksekusi integration testing dan black-box testing, serta mengawal 102 temuan bug hingga 84% terselesaikan dan sistem stabil siap serah terima.",
    ],
    highlights: [
      {
        value: "3+",
        label: "Magang Industri",
        detail: "Fullstack, SQA, Web Developer",
      },
      {
        value: "9",
        label: "Kumpulan Teknologi",
        detail: "Web, QA, dan backend",
      },
      {
        value: "6+",
        label: "Total Project",
        detail: "Web, QA, dan backend",
      },
      {
        value: "2",
        label: "Proyek & Pengabdian",
        detail: "FocusTalk & pemateri bootcamp PKM",
      },
    ],
    focusPre: "Fokus saya:",
    focusText:
      "kualitas kode, sistem yang teruji, dan hasil kerja yang bisa dipertanggungjawabkan — dari pengembangan hingga serah terima.",
    ctaCV: "Unduh CV",
    ctaContact: "Hubungi Saya",
    pageExperience: "Lihat Pengalaman",
    pageProjects: "Lihat Proyek",
    portraitAlt: "Foto Risyad Ridwansyah",
    sectionAria: "Tentang Risyad Ridwansyah",
  },
  experience: {
    slug: "// pengalaman",
    num: "02",
    label: "Pengalaman",
    title: "Pengalaman",
    accent: "Kerja",
    sub: "Tiga magang industri — software quality assurance, fullstack development, dan web development.",
    endNote: "tiga pengalaman, satu standar:",
    endAccent: "siap produksi",
    pageProjects: "Lihat Proyek",
    pageContact: "Ajak Kerja Sama",
    items: [
      {
        role: "SQA (Software Quality Assurance) Intern",
        company:
          "PT Primalogic Global Teknologi · Dana Pensiun PT Pupuk Kalimantan Timur",
        initials: "PG",
        period: "Maret 2026 – Juni 2026",
        description:
          "Magang Software Quality Assurance pada sistem dana pensiun DP PKT — pengujian black-box dan integrasi vendor.",
        highlights: [
          "Memimpin tim 4 QA intern: melaporkan progres dan pencapaian tim kepada QA Lead setiap hari, serta mengoordinasikan dan mendelegasikan tugas yang diberikan QA Lead.",
          "Melaksanakan dan menyelesaikan Vendor Integration Testing (VIT) serta black-box testing pada sistem dana pensiun DP PKT, mencakup modul Administrator, Akuntansi, dan Keanggotaan.",
          "Mengelola defect sepanjang fase pengujian dalam Software Development Life Cycle (SDLC) menggunakan issue log yang diklasifikasikan berdasarkan prioritas dan severity, serta memverifikasi perbaikan bersama tim backend sebelum deployment ke production.",
          "Menangani 102 bug dengan tingkat penyelesaian 84%, mendukung sistem yang stabil untuk handover ke klien.",
        ],
        mainTech: [
          "Black-box Testing",
          "Vendor Integration Testing",
          "Defect Tracking",
          "Bug Life Cycle",
          "SDLC",
        ],
      },
      {
        role: "Fullstack Developer Intern",
        company: "Museum Geologi Bandung",
        initials: "MG",
        period: "Juni 2024 – Desember 2024",
        description:
          "KaGeo Collection Storage Management System — menggantikan pencatatan manual dengan basis data terpusat.",
        highlights: [
          "Memimpin tim teknis beranggotakan 3 developer dalam membangun sistem manajemen koleksi KaGeo dengan Laravel, React.js, Tailwind CSS, dan PostgreSQL, menggantikan pencatatan manual dengan basis data terpusat.",
          "Melaporkan progres pengembangan dan milestone kepada stakeholder Museum Geologi setiap tiga minggu.",
          "Mengarahkan para developer dalam menerapkan proses bisnis museum ke dalam sistem, serta merekomendasikan solusi proses bisnis kepada museum.",
          "Mengintegrasikan REST API Kementerian Energi dan Sumber Daya Mineral (ESDM), termasuk Single Sign-On (SSO) berbasis CAS, SIPEG untuk sinkronisasi data kepegawaian, dan layanan data wilayah.",
          "Menerapkan alur autentikasi dan otorisasi, serta meningkatkan stabilitas melalui debugging backend dan optimasi kinerja.",
          "Mendeploy aplikasi ke lingkungan hosting production untuk penggunaan staf internal.",
        ],
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
        company: "Balai Besar Survei dan Pemetaan Geologi Kelautan",
        initials: "BB",
        period: "Juni 2022 – September 2022",
        description:
          "Marine Research Information & Meeting Management System — dua aplikasi web responsif untuk kebutuhan internal.",
        highlights: [
          "Mengembangkan dua aplikasi web responsif dengan Laravel dan Bootstrap untuk manajemen rapat dan akses peta riset.",
          "Merancang basis data MySQL untuk penyimpanan dan pencarian data, serta menerapkan pengamanan dalam penanganan data.",
          "Membantu penyiapan jaringan dan konversi dokumen untuk upaya digitalisasi organisasi.",
        ],
        mainTech: ["Laravel", "Bootstrap", "MySQL"],
      },
    ],
  },
  projects: {
    slug: "// proyek",
    num: "03",
    label: "Proyek Pilihan",
    title: "Proyek",
    accent: "Pilihan",
    sub: "Potongan lintas platform — dari proyek mandiri hingga aplikasi yang dipakai operasional sungguhan.",
    githubProfile: "https://github.com/rdwnsyh?tab=repositories",
    viewAll: "Lihat semua di GitHub",
    cardDetails: "detail",
    cardAria: "Lihat detail",
    modalRole: "Peran",
    modalDemo: "Live Demo",
    modalRepo: "GitHub Repo",
    modalClose: "Tutup detail proyek",
    modalDismiss: "Tutup",
    pageContact: "Ajak Kerja Sama",
    pageSkills: "Jelajahi Skills",
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
        image: "/images/halaman dashboard EVM 1.png",
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
        image: "/images/Kageo.PNG",
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
        image: "/images/focustalk.jpg",
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
        image: "/images/cakrawala_muda_indonesia.png",
      },
      {
        title: "Berkah Expedisi",
        year: "2025",
        short: "Company profile dan sistem informasi jasa ekspedisi.",
        description:
          "Company profile sekaligus sistem informasi Berkah Expedisi: profil layanan, informasi operasional, dan pengelolaan konten perusahaan.",
        role: "Web Developer",
        tech: ["Laravel", "PHP", "Blade", "CSS"],
        github: "https://github.com/rdwnsyh/berkah-expedisi",
        demo: null,
        icon: "truck",
        image: "/images/berkah_expedisi.png",
      },
      {
        title: "BBSPGL — Aplikasi Web Operasional & Pemetaan Riset",
        year: "2022",
        short:
          "Dua aplikasi web operasional berbasis Laravel & Bootstrap untuk manajemen rapat dan aksesibilitas peta riset geologi kelautan.",
        description:
          "Dikembangkan saat magang sebagai Web Developer di Balai Besar Survei dan Pemetaan Geologi Kelautan (BBSPGL), Bandung: membangun dua aplikasi web operasional dan responsif berbasis Laravel dan Bootstrap untuk menyederhanakan manajemen rapat serta meningkatkan aksesibilitas peta riset bagi pengguna internal. Merancang basis data MySQL terstruktur untuk penyimpanan terorganisasi dan query yang andal, mengelola stabilitas operasional server-side dengan standar keamanan data, serta memfasilitasi alur digitalisasi organisasi.",
        role: "Web Developer Intern",
        tech: ["Laravel", "Bootstrap", "MySQL", "PHP"],
        github: "https://github.com/rdwnsyh",
        demo: null,
        icon: "compass",
        image: "/images/bbspgl.PNG",
      },
    ],
  },
  skills: {
    slug: "// keahlian",
    num: "07",
    label: "Keahlian",
    title: "Technical",
    accent: "Skills",
    tagline:
      "Perangkat yang saya pakai untuk membangun, mengintegrasikan, dan menguji perangkat lunak.",
    pageContact: "Hubungi Saya",
    pageProjects: "Lihat Proyek",
    categories: [
      {
        key: "languages",
        title: "Languages",
        icon: "code",
        items: [
          { name: "PHP", abbr: "PHP" },
          { name: "JavaScript", abbr: "JS" },
          { name: "TypeScript", abbr: "TS" },
          { name: "Python", abbr: "Py" },
          { name: "Dart", abbr: "Da" },
          { name: "C#", abbr: "C#" },
          { name: "HTML", abbr: "H5" },
          { name: "CSS", abbr: "C3" },
        ],
      },
      {
        key: "frameworks",
        title: "Frameworks & Libraries",
        icon: "layers",
        items: [
          { name: "Laravel", abbr: "La" },
          { name: "React.js", abbr: "Re" },
          { name: "Next.js", abbr: "Nx" },
          { name: "Flutter", abbr: "Fl" },
          { name: "FastAPI", abbr: "FA" },
          { name: ".NET", abbr: ".N" },
          { name: "Tailwind CSS", abbr: "Tw" },
          { name: "Bootstrap", abbr: "Bs" },
        ],
      },
      {
        key: "tools",
        title: "Tools & Databases",
        icon: "database",
        items: [
          { name: "PostgreSQL", abbr: "Pg" },
          { name: "MySQL", abbr: "My" },
          { name: "MongoDB", abbr: "Mo" },
          { name: "Git & GitHub", abbr: "Gt" },
          { name: "Vercel", abbr: "Ve" },
        ],
      },
      {
        key: "qa",
        title: "QA & Methodologies",
        icon: "shield",
        items: [
          { name: "Black-box Testing", abbr: "Bb" },
          { name: "Integration Testing", abbr: "IT" },
          { name: "VIT", abbr: "VI" },
          { name: "Defect Tracking", abbr: "Dt" },
          { name: "Bug Life Cycle", abbr: "Bl" },
        ],
      },
    ],
  },
  contact: {
    slug: "// kontak",
    num: "08",
    label: "Kontak",
    title: "Hubungi",
    accent: "Saya",
    tagline:
      "Punya proyek, peran full-time, atau sekadar ingin berdiskusi? Pesanmu langsung masuk ke email saya.",
    introTitle: "Mari terhubung",
    introDescription:
      "Terbuka untuk peran full-time Software Engineer / Web Developer serta kolaborasi proyek. Rata-rata saya membalas dalam 1–2 hari kerja.",
    location: "Bandung, Indonesia",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    contactVia: "Hubungi via",
    formName: "Nama",
    formNamePlaceholder: "Nama kamu",
    formEmail: "Email",
    formEmailPlaceholder: "nama@email.com",
    formMessage: "Pesan",
    formMessagePlaceholder: "Ceritakan proyek atau peran yang ditawarkan…",
    formSubmit: "Kirim Pesan",
    formNote:
      "Tanpa backend — tombol ini membuka aplikasi email dengan pesanmu sudah terisi rapi.",
    mailSubject: "Pesan portofolio dari",
    successTitle: "Pesan siap dikirim!",
    successTextPre:
      "Aplikasi email-mu seharusnya sudah terbuka dengan pesan terisi. Jika tidak, hubungi langsung ke",
    successAgain: "Kirim Lagi",
  },
  footer: {
    ctaLabel: "Siap berdiskusi untuk proyek Anda?",
    ctaTitle: "Ayo bangun sesuatu yang",
    ctaAccent: "berguna",
    ctaButton: "Kirim Pesan",
    ctaAria: "Hubungi Risyad via email untuk proyek",
    tagline:
      "Software Engineer yang merancang pengalaman web modern — bersih, teruji, dan siap produksi.",
    navHeading: "Navigasi",
    connectHeading: "Terhubung",
    logoAria: "Risyad Ridwansyah — kembali ke atas",
    builtWith: "Dibangun dengan Next.js & Tailwind CSS",
  },
  certificates: {
    slug: "Sertifikasi",
    num: "05",
    label: "Pencapaian",
    title: "Sertifikasi dan",
    accent: "Pelatihan",
    tagline:
      "Kumpulan sertifikasi, pelatihan, dan peran kepemimpinan yang mendukung perjalanan profesional.",
    items: [
      {
        title: "Sertifikat PKM 2025 — Workshop Laravel SMKN 2 Cimahi",
        issuer: "Universitas Logistik dan Bisnis Internasional (ULBI)",
        date: "17 – 18 September 2025",
        image: "/images/sertifikat/Sertifikat PKM 2025 Risyad.jpg",
        type: "image",
        description:
          "Kegiatan: menjadi instruktur/narasumber workshop bootcamp Laravel bagi 32 siswa jurusan RPL di SMKN 2 Cimahi, menyusun dan menyampaikan materi hands-on pengembangan aplikasi web. Output: peserta mampu membangun aplikasi web dasar dengan Laravel, dan kegiatan terdokumentasi sebagai luaran program Pengabdian Kepada Masyarakat ULBI.",
        competencies: [
          "Instruktur workshop Laravel",
          "Mengajar 32 siswa jurusan RPL",
          "Materi hands-on pengembangan web",
          "Komunikasi teknis",
        ],
      },
      {
        title: "Sertifikasi Intern Internship 2026",
        issuer: "Universitas Logistik dan Bisnis Internasional (ULBI)",
        date: "2026",
        image: "/images/sertifikat/sertifikat_internship_ulbi2026_risyad.jpg",
        type: "image",
        description:
          "Kegiatan: magang Software Quality Assurance di PT Primalogic Global Teknologi, menguji modul Administrator, Akuntansi, dan Keanggotaan sistem Dana Pensiun PT Pupuk Kaltim dengan black-box testing dan Vendor Integration Testing. Output: 102 bug teridentifikasi dengan resolution rate 84%, menekan eror kritis sebelum handover ke klien.",
        competencies: [
          "Black-box Testing",
          "Vendor Integration Testing",
          "Defect Tracking & Bug Life Cycle",
          "QA sistem Dana Pensiun",
        ],
      },
      {
        title: "BC400 – Introduction to the ABAP Workbench",
        issuer: "SAP",
        date: "—",
        image:
          "/images/sertifikat/sertifikat BC400 – Introduction to the ABAP Workbench_Risyad_Ridwansyah.jpeg",
        type: "image",
        description:
          "Kegiatan: pelatihan dasar SAP ABAP Workbench (BC400) — pengenalan editor, pengelolaan objek ABAP, dan debugging. Output: sertifikasi kompetensi dasar pemrograman ABAP sebagai bekal memahami sistem SAP.",
        competencies: [
          "Dasar SAP ABAP",
          "ABAP Workbench & editor",
          "Pengelolaan objek ABAP",
          "Debugging dasar",
        ],
      },
      {
        title: "Sertifikat PKL BBSPGL",
        issuer: "Balai Besar Survei dan Pemetaan Geologi Kelautan (BBSPGL)",
        date: "Juni – September 2022",
        image: "/images/sertifikat/sertif pkl bbspgl_Risyad Ridwansyah.jpeg",
        type: "image",
        description:
          "Kegiatan: PKL sebagai web developer intern, mengembangkan dua aplikasi web operasional (manajemen rapat dan akses peta riset) dengan Laravel, Bootstrap, dan MySQL. Output: dua aplikasi internal dengan basis data terstruktur yang mempercepat alur kerja staf.",
        competencies: [
          "Laravel, Bootstrap, MySQL",
          "Pengembangan 2 aplikasi web internal",
          "Perancangan basis data",
          "Digitalisasi alur kerja",
        ],
      },
      {
        title: "Magang Fullstack Developer – Museum Geologi (Matching Fund 2024)",
        issuer:
          "Museum Geologi Bandung (Afiliasi Kedaireka Kampus Merdeka & ULBI)",
        date: "Juli – Desember 2024 (6 bulan)",
        image: "/images/sertifikat/kedaireka_Risyad Ridwansyah.png",
        type: "image",
        description:
          "Kegiatan: memimpin 3 pengembang membangun sistem koleksi KaGeo dengan Laravel, React.js, Tailwind CSS, dan PostgreSQL, terintegrasi REST API Kementerian ESDM, CAS SSO, dan SIPEG. Output: pencatatan koleksi manual menjadi basis data terpusat, aplikasi lolos QA dan di-deploy ke server production internal, dengan pelaporan progres tiap tiga minggu ke stakeholder museum.",
        competencies: [
          "Technical lead 3 pengembang",
          "Laravel, React.js, Tailwind, PostgreSQL",
          "REST API ESDM, CAS SSO, SIPEG",
          "QA, optimasi kinerja & deployment",
        ],
      },
      {
        title: "Ketua Pelaksana Bootcamp Laravel 2025",
        issuer: "HIMATIF Universitas Logistik dan Bisnis Internasional (ULBI)",
        date: "24 & 31 Mei 2025",
        image:
          "/images/sertifikat/ketua pelaksana bootcamp laravel 2025_Risyad Ridwansyah.png",
        type: "image",
        description:
          "Kegiatan: memimpin perencanaan hingga eksekusi Laravel Bootcamp 2025, termasuk promosi, pendaftaran peserta, serta kesiapan modul dan ruangan. Output: acara berjalan sesuai jadwal dan anggaran dengan partisipasi aktif mahasiswa.",
        competencies: [
          "Manajemen proyek end-to-end",
          "Kepemimpinan & koordinasi divisi",
          "Manajemen waktu & anggaran",
          "Logistik acara",
        ],
      },
      {
        title: "Pemateri Bootcamp Laravel 2025",
        issuer: "HIMATIF Universitas Logistik dan Bisnis Internasional (ULBI)",
        date: "24 & 31 Mei 2025",
        image:
          "/images/sertifikat/pemateri bootcamp laravel 2025_Risyad Ridwansyah.png",
        type: "image",
        description:
          "Kegiatan: instruktur utama pelatihan To-Do List Laravel untuk 19 peserta, mencakup MVC, MySQL, autentikasi, CRUD Eloquent, dashboard Bootstrap + Blade, hingga deployment. Output: peserta berhasil membangun aplikasi To-Do List end-to-end.",
        competencies: [
          "Instruktur teknis",
          "Laravel, MVC, MySQL, Eloquent",
          "Autentikasi & Blade + Bootstrap",
          "Best practices & deployment",
        ],
      },
    ],
    view: "Lihat Sertifikat",
    close: "Tutup",
    details: "Detail Sertifikat",
    competencies: "Kompetensi yang Diperoleh",
    issuer: "Penyelenggara",
    date: "Tanggal",
  },
  achievements: {
    slug: "// pencapaian",
    num: "06",
    label: "Rekam Jejak",
    title: "Pencapaian &",
    accent: "Kontribusi",
    tagline:
      "Publikasi teknis, proyek berskala enterprise, dan kontribusi pendidikan digital yang memvalidasi kompetensi.",
    items: [
      {
        category: "Publikasi Buku Teknis",
        icon: "book",
        title:
          "Penulis Buku Ber-ISBN: Membangun Aplikasi To-Do-List Dari Nol",
        org: "PT. FAASLIB SERAMBI MEDIA",
        date: "30 Oktober 2025",
        link: "https://faaslibsmedia.com/Buku/Detail/Membangun-Aplikasi-To-Do-List-Dari-Nol",
        linkLabel: "Lihat Buku",
        description:
          "Menulis dan menerbitkan buku panduan praktis setebal 154 halaman (ISBN: 9786340453935) yang menjembatani teori dan praktik pengembangan web bagi pemula. Menggunakan framework Laravel, buku ini membedah studi kasus proyek nyata dari awal hingga akhir. Pencapaian ini memvalidasi penguasaan teknis tingkat lanjut pada ekosistem Laravel dan mendemonstrasikan kemampuan menyusun dokumentasi teknis terstruktur, sebuah kompetensi krusial bagi posisi Web Developer dan Quality Assurance.",
      },
      {
        category: "Proyek Skala Enterprise",
        icon: "building",
        title: "Penyelesaian Magang Kerja Penuh Waktu (Fullstack Developer)",
        org: "Museum Geologi Bandung",
        date: "6 Januari 2025",
        description:
          "Menyelesaikan program magang intensif selama 6 bulan dengan rekam jejak memimpin tim beranggotakan 3 pengembang. Berhasil merancang dan mendeploy Sistem Manajemen Penyimpanan Koleksi KaGeo menggunakan Laravel, React.js, dan PostgreSQL, serta mengeksekusi integrasi REST API berskala kementerian, termasuk Single Sign-On (SSO) CAS dan sinkronisasi data SIPEG. Pencapaian ini membuktikan ketahanan bekerja di lingkungan produksi nyata dan kemampuan memanajemen rilis perangkat lunak.",
      },
      {
        category: "Pengabdian Kepada Masyarakat",
        icon: "teaching",
        title: "Instruktur Utama Workshop Bootcamp Laravel (PKM)",
        org: "Universitas Logistik dan Bisnis Internasional (ULBI)",
        date: "18 September 2025",
        description:
          "Terpilih sebagai pemateri dan instruktur pada program Peningkatan Kompetensi Pemrograman Web bagi siswa Rekayasa Perangkat Lunak (RPL) di SMKN 2 Cimahi. Membimbing sesi hands-on secara langsung, mendemonstrasikan pemahaman mendalam terkait arsitektur Laravel, sekaligus melatih kemampuan komunikasi teknis (technical communication) yang sangat dibutuhkan untuk melakukan code review dan menjabarkan hasil testing (bug report) dalam tim pengembangan perangkat lunak.",
      },
      {
        category: "Publikasi Jurnal Ilmiah",
        icon: "journal",
        title:
          "Penulis Artikel Jurnal: Improving Web Programming Competence Through Laravel Bootcamp for Vocational High School Students",
        org: "MERPATI — Universitas Logistik dan Bisnis Internasional",
        date: "15 September 2025",
        link: "https://ejurnal.ulbi.ac.id/index.php/merpati/article/view/4520",
        linkLabel: "Baca Jurnal",
        description:
          "Berkontribusi sebagai penulis pada artikel pengabdian masyarakat yang diterbitkan di Jurnal MERPATI Vol. 7 No. 1 (2025) dengan DOI 10.36618/merpati.v7i1.4520. Artikel ini mengevaluasi bootcamp Laravel berbasis project-based learning bagi 40 siswa SMKN 2 Cimahi: skor rata-rata pre-test 46,25 meningkat menjadi 72,80 pada post-test, dengan 85% peserta memahami konsep MVC, 90% mengimplementasikan CRUD, dan 80% menguasai autentikasi. Pencapaian ini mendemonstrasikan kemampuan menulis ilmiah, analisis data evaluasi, dan dokumentasi teknis yang terukur.",
      },
    ],
    orgLabel: "Penerbit / Penyelenggara",
    dateLabel: "Tanggal",
  },
  shared: {
    name: "Risyad Ridwansyah",
    github: "https://github.com/rdwnsyh",
    linkedin: "https://www.linkedin.com/in/risyad-ridwansyah/",
    email: "risyadridwansyah@gmail.com",
    cvPath: "/CV_Risyad_Ridwansyah.pdf",
    projectsAnchor: "#projects",
  },
  theme: {
    toggle: "Ganti tema",
    dark: "Mode gelap",
    light: "Mode terang",
  },
};

export type SiteContent = typeof idContent;
