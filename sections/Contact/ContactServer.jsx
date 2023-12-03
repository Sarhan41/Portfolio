import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const Text = () => {
  return (
    <>
      <p className="sectionSubText">Get IN TOUCH</p>
      <p className="sectionHeadText">Contact.</p>
    </>
  );
};

const Form = ({
  name,
  email,
  message,
  isSubmitting,
  handleChange,
  handleSubmit,
  formRef,
  isEmailValid,
}) => {


  return (
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
          value={name}
          onChange={handleChange}
          className=" py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
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
          value={email}
          onChange={handleChange}
          className=" py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
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
          value={message}
          onChange={handleChange}
          className=" py-4 px-6 placeholder:text-slate-600 bg-light-gray text-black-200 rounded-lg outline-none border-none font-medium"
        />
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md  shadow-primary dark:shadow-secondary dark:hover:bg-light-200 dark:hover:text-black-100  hover:bg-black-100 hover:text-light-200 transition duration-300"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Form;

export const SocialMedia = () => (
  <>
    <a
      href="https://www.linkedin.com/in/sarhan-patel-20241c"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GrLinkedinOption className=" mt-8 ml-4 h-8 w-8 cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 dark:text-light-200 text-black-200" />
    </a>
    <a
      href="https://twitter.com/SarhanWebDev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsTwitter className=" mt-8 ml-4 h-8 w-8 cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 dark:text-light-200 text-black-200" />
    </a>
    <a
      href="mailto:sp.webdev2024@gmail.com?..."
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaEnvelope className=" mt-8 ml-4 h-8 w-8 cursor-pointer hover:text-red-400 dark:hover:text-red-400 dark:text-light-200 text-black-200" />
    </a>
    <a
      href="https://github.com/Sarhan41"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className=" mt-8 ml-4 h-8 w-8 cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 dark:text-light-200 text-black-200" />
    </a>
  </>
);
