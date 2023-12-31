import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
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
        <About />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-1   min-h-screen">
        <Skills />
      </section>
      <section className="bg-cover bg-no-repeat bg-center  gradient-2 min-h-screen  ">
        <Projects />
      </section>
      <section className="bg-cover bg-no-repeat bg-center   gradient-1 min-h-screen">
        <Contact />
      </section>
    </main>
  );
}
