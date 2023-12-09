"use client";
import { useRef, useState } from "react";
import Alert from "./Alert";
import emailjs from "@emailjs/browser";


const Form = () => {
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
    <>
      {alert && (
        <Alert type={alert.type} text={alert.text} onClose={closeAlert} />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-8"
      >
        <label className="flex flex-col">
          <span className="dark:text-light-100 text-black-100 font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            placeholder="What's your good name?"
            value={form.name}
            onChange={handleChange}
            className="py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="dark:text-light-100 text-black-100 font-medium mb-4">
            Your email
          </span>
          <input
            type="email"
            name="email"
            placeholder="What's your web address?"
            value={form.email}
            onChange={handleChange}
            className="py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="dark:text-light-100 text-black-100 font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={7}
            name="message"
            placeholder="What you want to Say?"
            value={form.message}
            onChange={handleChange}
            className="py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary dark:shadow-secondary dark:hover:bg-light-200 dark:hover:text-black-100 hover:bg-black-100 hover:text-light-200 transition duration-300"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
};

export default Form;
