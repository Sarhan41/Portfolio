"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/constants/motion";
import { Text, Skills, MainBall } from "./SkillsServer";

const SkillsWrapper = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"show"}
      >
        <Text />
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        <Skills />
      </div>
    </>
  );
};

export const MotiondivRight = ({ icon, name, index }) => (
    <motion.div
      className="w-28 h-28"
      variants={fadeIn("right", "spring", index * 0.1)}
      initial={"hidden"}
      whileInView={"show"}
    >

      <MainBall  name={name} icon={icon} key={`${name}-${index}`}/>
    </motion.div>
);
export const MotiondivLeft = ({ icon, name, index }) => (
    <motion.div
      className="w-28 h-28"
      variants={fadeIn("left", "spring", index * 0.2)}
      initial={"hidden"}
      whileInView={"show"}
    >

      <MainBall  name={name} icon={icon} key={`${name}-${index}`}/>
    </motion.div>
);



export default SectionWrapper(SkillsWrapper, "skills");
