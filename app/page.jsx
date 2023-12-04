import {
  Navbar,
  HeroWrapper,
  AboutWrapper,
  SkillsWrapper,
  ProjectsWrapper,
  ContactWrapper,
  DisplayBlocker,
} from "@/sections";

export default function Home() {
  return (
    <main className="relative z-0 h-full w-full">
      <DisplayBlocker />
      <section className="bg-cover bg-no-repeat bg-center  gradient-1    h-fit">
        <Navbar />
        <HeroWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2  h-fit ">
        <AboutWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-1   h-fit">
        <SkillsWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2 h-fit  ">
        <ProjectsWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center   gradient-1 h-fit">
        <ContactWrapper />
      </section>
    </main>
  );
}
