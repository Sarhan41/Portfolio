import { skillsBall } from "@/constants";
import BallCanvas from "./Ball";
import { Motiondiv } from "./SkillsWrapper";

export const Text = () => {
  return (
    <>
      <p className="sectionSubText">Conquered</p>
      <h2 className="sectionHeadText">Technologies.</h2>
    </>
  );
};

export const Skills = () => {
  return (
    <>
      {skillsBall.map((ball, index) => (
        <Motiondiv
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
