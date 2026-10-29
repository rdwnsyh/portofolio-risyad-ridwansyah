import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { StatsStrip } from "@/components/sections/StatsStrip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <Hero />
      <StatsStrip />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Achievements />
      <Skills />
      <Contact />
    </main>
  );
}
