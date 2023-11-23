import { aboutCards } from "@/constants";
import Tilt from "react-parallax-tilt";
import AboutCardA from "./AboutCardA";

export const Text = () => (
  <>
    <p className="sectionSubText ">Introduction</p>
    <h2 className="sectionHeadText ">Overview.</h2>
  </>
);

export const Text2 = () => (
  <>
    I'm a skilled web developer with experience in JavaScript, and expertise in
    frameworks like React, and Next.js. I'm a quick learner and a firm believer
    in deep work. For me learning is an infinite game. Spending 8 hours in front
    of a laptop at home with self-discipline is second nature. I'm also an avid
    reader, finding joy in expanding my knowledge. Learning isn't just a task;
    it's my passion. Let's collaborate to bring your ideas to life!
  </>
);

export const AboutCardSection = () => (
  <div className="mt-20 flex flex-wrap gap-10">
    {aboutCards.map((about, index) => (
      <AboutCards key={about.title} index={index} {...about} />
    ))}
  </div>
);

const AboutCards = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="xs:w-[250px] w-full"
  >
    <AboutCardA index={index} icon={icon} title={title} />
  </Tilt>
);

export const AboutCardDetail = ({ title, icon }) => (
  <>
    <img
      src={icon}
      alt="web-development"
      className="w-16 h-16 object-contain"
    />

    <h3 className="text-black-200  text-[20px] font-bold text-center">
      {title}
    </h3>
  </>
);
