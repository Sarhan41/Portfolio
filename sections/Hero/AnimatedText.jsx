"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/constants/motion";
import { MotionP, MotionSpan } from "../../constants/MotionElements";

export const TypingText = ({ title, textStyles }) => (
  <MotionP variants={textContainer} className={`${textStyles}`}>
    {title.split("").map((letter, index) => (
      <MotionSpan variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </MotionSpan>
    ))}
  </MotionP>
);
