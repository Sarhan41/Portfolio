"use client";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import { AboutCardDetail } from "./AboutServer";

const AboutCardA = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    initial={"hidden"}
    whileInView={"show"}
  >
    <div className=" bg-light-gray rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <AboutCardDetail icon={icon} title={title} />
    </div>
  </motion.div>
);

export default AboutCardA;

