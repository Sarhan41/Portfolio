import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { TypingText } from "../../constants/AnimatedText";

const Hero = () => {
  return (
    <div className="inset-0 top-[120px] flex  flex-row items-start gap-5 absolute paddingX mx-auto max-w-7xl  ">
      <div className="flex-center flex-col mt-5">
        <div className="h-5 w-5 rounded-full dark:bg-secondary   bg-primary"></div>
        <div className="sm:h-80 w-1 h-40 heroLine"></div>
      </div>
      {/* 
          //? Typogrophy
          */}
      <div>
        <h1 className="heroHeadText dark:text-white">
          Hi, I'm{" "}
          <span className="dark:text-secondary text-primary">Sarhan</span>
        </h1>
        <h3 className="font-mono ">
          <TypingText
            title="I'm a Frontend Developer"
            textStyles=" text-black-200 dark:text-light-200"
          />
        </h3>
        <p className="heroSubText mt-2 dark:text-light-200 text-black-200">
          I develop exceptional <br className="sm:block hidden" />
          user interfaces and web applications
        </p>
        <div className="flex items-center gap-4">
          <Link href="/#contact">
            <button className="mt-8 bg-tertiary dark:hover:bg-light-200 dark:hover:text-black-100  hover:bg-black-100 hover:text-light-200 inline-block rounded-lg font-extrabold text-2xl text-white py-2 px-4 border-none transition duration-300">
              Contact
            </button>
          </Link>
          <span className="flex">
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
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
