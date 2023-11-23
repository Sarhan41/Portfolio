import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

const CardServer = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-light-gray p-5 rounded-2xl sm:w-[360px] w-full"
  >
    {/* 
//! Image div
*/}
    <div className="relative w-full h-[230px] object-cover overflow-hidden">
      <Image
        height={230}
        width={500}
        src={image}
        alt="project_image"
        className="w-full h-full  rounded-2xl"
      />

      <div className="absolute inset-0 flex  justify-between m-3 card-img_hover">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src="/github.png"
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div
          onClick={() => window.open(live_demo_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full text-white bg-white-100 flex justify-center items-center cursor-pointer "
        >
          <img
            src="/arrow.png"
            alt="live demo link"
            className="w-1/2 h-1/2 object-contain text-white "
          />
        </div>
      </div>
    </div>
{/* 
//! typogrophy div
*/}
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
  </Tilt>
);

export default CardServer;
