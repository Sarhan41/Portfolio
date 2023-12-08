import { skillsBall } from "@/constants";
import { MotionDiv } from "@/constants/MotionElements";
import { fadeIn, textVariant } from "@/constants/motion";
import React from "react";
import BallCanvas from "./Ball";

const Skills = () => {
  const RightSkill = skillsBall.slice(0, 7);
  const LeftSkill = skillsBall.slice(7);
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="skills">
        &nbsp;
      </span>
      <MotionDiv
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"show"}
      >
        <p className="sectionSubText">Conquered</p>
        <h2 className="sectionHeadText">Technologies.</h2>
      </MotionDiv>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {RightSkill.map((ball, index) => (
          <MotionDiv
            className="w-28 h-28"
            variants={fadeIn("right", "spring", index * 0.1)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <BallCanvas icon={ball.icon} />
            <h1 className="block text-center text-lg font-semibold text-black-200 dark:text-light-200 mt-2">
              {ball.name}
            </h1>
          </MotionDiv>
        ))}
        {LeftSkill.map((ball, index) => (
          <MotionDiv
            className="w-28 h-28"
            variants={fadeIn("left", "spring", index * 0.1)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <BallCanvas icon={ball.icon} />
            <h1 className="block text-center text-lg font-semibold text-black-200 dark:text-light-200 mt-2">
              {ball.name}
            </h1>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Skills;
