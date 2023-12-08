"use client";
import { fadeIn, slideIn } from "@/constants/motion";
import SectionWrapper from "@/sections/SectionWrapper/SectionWrapper";
import { motion } from "framer-motion";
import Form, { SocialMedia, Text } from "./ContactServer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const ContactWrapper = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const showAlert = (type, text) => {
    setAlert({ type, text });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const isEmailValid = form.email && form.email.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isEmailValid) {
      showAlert("danger", "Please enter a valid email.");
      setIsSubmitting(false);
      return;
    } else {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Sarhan",
            from_email: form.email,
            to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          () => {
            setIsSubmitting(false);
            showAlert(
              "success",
              "Thank you. I will get back to you as soon as possible."
            );

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setIsSubmitting(false);
            console.error(error);

            showAlert(
              "danger",
              "Sorry, something went wrong. Please try again."
            );
          }
        );
    }
  };

  return (
    <div className="flex-center flex-col">
      <motion.span
        variants={fadeIn("up", "spring", "", 0.75)}
        initial={"hidden"}
        whileInView={"show"}
        className="flex justify-around gap-12 max-xs:gap-6 mb-8"
      >
        <SocialMedia />
      </motion.span>
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="w-full mx-auto p-8 md:max-w-xl rounded-2xl dark:bg-black-100  bg-secondary"
      >
        <Text />
        {alert && (
          <Alert type={alert.type} text={alert.text} onClose={closeAlert} />
        )}
        <Form
          name={form.name}
          email={form.email}
          message={form.message}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formRef={formRef}
          isEmailValid={isEmailValid}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactWrapper, "contact");
