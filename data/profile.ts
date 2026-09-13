export const profile = {
  name: "Risyad Ridwansyah",
  firstName: "Risyad",
  lastName: "Ridwansyah",
  greeting: "halo, saya",
  roles: [
    "Web Developer",
    "Quality Assurance",
    "Backend Developer",
    "Fullstack Developer",
  ] as const,
  tagline:
    "Lulusan D3 Teknik Informatika yang berfokus pada pengembangan web modern, backend yang scalable, hingga pengujian kualitas perangkat lunak (QA) — menulis kode yang bersih, teruji, dan siap produksi.",
  status: "Available for full-time roles",
  github: "https://github.com/rdwnsyh",
  linkedin: "https://www.linkedin.com/in/risyad-ridwansyah/",
  email: "risyadridwansyah@gmail.com",
  cvPath: "/CV-Risyad-Ridwansyah.pdf",
  projectsAnchor: "#projects",
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { value: 3, suffix: "+", decimals: 0, label: "Magang Industri" },
  { value: 102, suffix: "", decimals: 0, label: "Bug Ditangani (SQA)" },
  { value: 84, suffix: "%", decimals: 0, label: "Bug Resolution Rate" },
  { value: 3.78, suffix: "", decimals: 2, label: "IPK D3 Informatika" },
] as const;

export type Profile = typeof profile;
