import { MotionDiv, MotionSpan } from "@/constants/MotionElements";
import { fadeIn, slideIn } from "@/constants/motion";
import { BsTwitter } from "react-icons/bs";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import  Form from "./Form";

const Contact = () => {
 
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      <div className="flex-center flex-col">
        <MotionSpan
          variants={fadeIn("up", "spring", "", 0.75)}
          initial={"hidden"}
          whileInView={"show"}
          className="flex justify-around gap-12 max-xs:gap-6 mb-8"
        >
          {/* SocialMedia */}
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
        </MotionSpan>
        <MotionDiv
          variants={slideIn("left", "spring", 0.2, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className="w-full mx-auto p-8 md:max-w-xl rounded-2xl dark:bg-black-100  bg-secondary"
        >
          <p className="sectionSubText">Get IN TOUCH</p>
          <p className="sectionHeadText">Contact.</p>
          
          <Form />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
