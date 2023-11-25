"use client";
import { slideIn } from "@/constants/motion";
import SectionWrapper from "@/sections/SectionWrapper/SectionWrapper";
import { motion } from "framer-motion";
import  Form, { Text } from "./ContactServer";
import { useState } from "react";

const ContactWrapper = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(!isSubmitting);
  };
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="flex-[0.75]  p-8 rounded-2xl dark:bg-black-100 bg-secondary"
      >
        <Text />
        <Form
          name={form.name}
          email={form.email}
          message={form.message}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </motion.div>


    </div>
  );
};

export default SectionWrapper(ContactWrapper, "contact");