import { MotionDiv, MotionP, TiltCard } from "@/constants/MotionElements";
import { fadeIn, textVariant } from "@/constants/motion";
import React from "react";
import { projects } from "@/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <span className="hash-span" id="about">
        &nbsp;
      </span>
      <MotionDiv
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"show"}
      >
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </MotionDiv>
      <MotionP
        variants={fadeIn("", "", 0.1, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="mt-3 text-black-200 dark:text-light-200 text-[17px] max-w-3xl leading-[30px]"
      >
        Explore my projects to see the real-world application of my skills. I've
        described each project briefly, sharing links to code repositories and
        live demos. These examples showcase my ability to solve problems, work
        with different technologies, and effectively manage projects.
      </MotionP>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => (
  <MotionDiv
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    initial={"hidden"}
    whileInView={"show"}
  >
    <TiltCard className="bg-light-gray p-5 rounded-2xl sm:w-[360px] w-full">
   {/* image div */}
      <div className="relative w-full h-[230px] object-cover overflow-hidden">
        <Image
          height={230}
          width={500}
          src={image}
          alt="project_image"
          className="w-full h-full  rounded-2xl"
        />

        <div className="absolute inset-0 flex  justify-between m-3 card-img_hover">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src="/github.png"
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full text-white bg-white-100 flex justify-center items-center cursor-pointer "
          >
            <img
              src="/arrow.png"
              alt="live demo link"
              className="w-1/2 h-1/2 object-contain text-white "
            />
          </a>
        </div>
      </div>
     {/* typogrophy */}
      <div className="mt-5">
        <h3 className="text-black-200 font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-black-100 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </TiltCard>
  </MotionDiv>
);

export default Projects;
