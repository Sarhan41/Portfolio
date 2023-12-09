import { aboutCards } from "@/constants";
import { MotionDiv, MotionP, TiltCard } from "@/constants/MotionElements";
import { fadeIn, textVariant } from "@/constants/motion";

const About = () => {
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="about">
        &nbsp;
      </span>
      <MotionDiv
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"show"}
      >
        <p className="sectionSubText ">Introduction</p>
        <h2 className="sectionHeadText ">Overview.</h2>
      </MotionDiv>
      <MotionP
        variants={fadeIn("", "", 0.1, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="mt-3 text-black-200 dark:text-light-200 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with experience in JavaScript, and expertise
        in frameworks like React, and Next.js. I'm a quick learner and a firm
        believer in deep work. For me learning is an infinite game. Spending 8
        hours in front of a laptop at home with self-discipline is second
        nature. I'm also an avid reader, finding joy in expanding my knowledge.
        Learning isn't just a task; it's my passion. Let's collaborate to bring
        your ideas to life!
      </MotionP>
      <div className="mt-20 flex flex-wrap gap-10">
        {aboutCards.map((about, index) => (
          <AboutCards
            key={`${about.title}+${index}`}
            index={index}
            {...about}
          />
        ))}
      </div>
    </section>
  );
};

export const AboutCards = ({ index, title, icon }) => (
  <TiltCard className="xs:w-[250px] w-full">
    <MotionDiv
      variants={fadeIn("right", "spring", index * 0.2)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      initial={"hidden"}
      whileInView={"show"}
    >
      <div className=" bg-light-gray rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black-200  text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </MotionDiv>
  </TiltCard>
);

export default About;
