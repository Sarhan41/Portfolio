import React from "react";

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
          placeholder="What's your good name?"
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
