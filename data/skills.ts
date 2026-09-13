export const skills = {
  slug: "// skills",
  num: "04",
  label: "Keahlian",
  title: "Technical",
  accent: "Skills",
  tagline:
    "Perangkat yang saya pakai untuk membangun, mengintegrasikan, dan menguji perangkat lunak.",
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
} as const;

export type SkillsData = typeof skills;
