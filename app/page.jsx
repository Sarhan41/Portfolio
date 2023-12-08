import {
  Navbar,
  Hero,
  AboutWrapper,
  SkillsWrapper,
  ProjectsWrapper,
  ContactWrapper,
  DisplayBlocker,
} from "@/sections";

export default function Home() {
  return (
    <main className="relative z-0 h-full w-full m-0 p-0">
      <DisplayBlocker />
      <section className="bg-cover bg-no-repeat bg-center  gradient-1    ">
        <Navbar />
        <Hero />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2  min-h-screen ">
        <AboutWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-1   min-h-screen">
        <SkillsWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2 min-h-screen  ">
        <ProjectsWrapper />
      </section>
      <section className="bg-cover bg-no-repeat bg-center   gradient-1 min-h-screen">
        <ContactWrapper />
      </section>
    </main>
  );
}
