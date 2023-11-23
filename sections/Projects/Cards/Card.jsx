"use client";

import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import CardServer from "./CardServer";


const Card = ({index , ...props}) => {
    return (
      <motion.div variants={fadeIn("up" , "spring" , index * 0.5, 0.75)} 
     initial={"hidden"} whileInView={"show"} >
        <CardServer {...props} />
      </motion.div>
    );
  };

export default Card;