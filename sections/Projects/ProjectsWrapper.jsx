"use client";
import { fadeIn, textVariant } from "@/constants/motion";
import SectionWrapper from "@/sections/SectionWrapper/SectionWrapper";
import { motion } from "framer-motion";
import { Text, Text2, TextDiv } from "./ProjectsServer";
import ProjectCards from "./Cards/ProjectCards";

const ProjectsWrapper = () => {
  return (
    <section>
      <motion.div
       variants={textVariant()}
       initial={"hidden"}
       whileInView={"show"}
      >
        <Text />
      </motion.div>
      <TextDiv />
      <ProjectCards />
   
    </section>
  );
};

export default SectionWrapper(ProjectsWrapper, "");

export const MotionP = () => (
  <motion.p
  variants={fadeIn("", "", 0.1, 1)}
   initial={"hidden"}
   whileInView={"show"}
   className="mt-3 text-black-200 dark:text-light-200 text-[17px] max-w-3xl leading-[30px]"
 >
<Text2 />
 </motion.p>
)