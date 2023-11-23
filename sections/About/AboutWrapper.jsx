"use client";
import { fadeIn, textVariant } from "@/constants/motion";
import { SectionWrapper } from "..";
import { motion } from "framer-motion";
import { AboutCardSection, Text, Text2 } from "./AboutServer";

const AboutWrapper = () => {
  return (
    <section>
      <motion.div
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"show"}
      >
        <Text />
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="mt-3 text-black-200 dark:text-light-200 text-[17px] max-w-3xl leading-[30px]"
      >
        <Text2 />
      </motion.p>
      <AboutCardSection />
    </section>
  );
};

export default SectionWrapper(AboutWrapper, "about");
