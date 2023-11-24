"use client";
import { slideIn } from "@/constants/motion";
import { motion } from "framer-motion";
import Hero from "./Hero";
import PinAnimation from "./PinAnimation";

const HeroWrapper = () => {
  return (
    <section className="relative w-full mx-auto h-screen ">
      <motion.div
        className="relative w-full mx-auto h-screen "
        variants={slideIn("left", "spring", 0.1, 1)}
        initial={"hidden"}
        whileInView={"show"}
      >
        <Hero />
      </motion.div>

      <PinAnimation />
    </section>
  );
};

export default HeroWrapper;
