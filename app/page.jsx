import {
  Navbar,
  HeroWrapper,
  AboutWrapper,
  SkillsWrapper,
  Projects,
  Contact,
  StarsCanvas,
} from "@/sections";

export default function Home() {
  return (
    <main className="relative z-0 ">
      <section className="bg-cover bg-no-repeat bg-center  gradient-1    ">
        <Navbar />
        <HeroWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2  min-h-screen ">
        <AboutWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-1  min-h-screen ">
        <SkillsWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2 h-screen  ">
        <Projects />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-1 h-screen">
        <Contact />
        <StarsCanvas />
      </section>
    </main>
  );
}