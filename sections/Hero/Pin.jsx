"use client"
import { motion } from "framer-motion"
const Pin = () => {
  return (
    <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-3 h-3 rounded-full dark:bg-secondary bg-primary mb-1"
      />
  )
}

export default Pin