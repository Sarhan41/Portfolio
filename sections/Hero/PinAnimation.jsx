import React from "react";
import Pin from "./Pin";

const PinAnimation = () => {
  return (
    <div className="absolute max-xs:bottom-32 w-full flex justify-center bottom-16  items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 dark:border-secondary border-primary flex justify-center items-start p-2  mb-8 ">
          <Pin />
        </div>
      </a>
    </div>
  );
};

export default PinAnimation;
