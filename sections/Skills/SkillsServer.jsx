import { skillsBall } from "@/constants";
import BallCanvas from "./Ball";
import {  MotiondivLeft, MotiondivRight } from "./SkillsWrapper";

export const Text = () => {
  return (
    <>
      <p className="sectionSubText">Conquered</p>
      <h2 className="sectionHeadText">Technologies.</h2>
    </>
  );
};

export const Skills = () => {
  const RightSkill =  skillsBall.slice(0,7)
  const LeftSkill = skillsBall.slice(7)
  return (
    <>
      {RightSkill.map((ball, index) => (
        <MotiondivRight
          icon={ball.icon}
          name={ball.name}
          index={index}
          key={`${ball.name}-${index}`}
        />
      ))}
      {LeftSkill.map((ball, index) => (
        <MotiondivLeft
          icon={ball.icon}
          name={ball.name}
          index={index}
          key={`${ball.name}-${index}`}
        />
      ))}
    </>
  );
};

export const MainBall = ({ icon, name }) => (
  <>
      <BallCanvas icon={icon} />
    <h1
      className="block text-center text-lg font-semibold text-black-200 dark:text-light-200 mt-2" 
    >
      {name}
    </h1>
  </>
);
