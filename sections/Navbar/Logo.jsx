import React from "react";
import Logosvg from "./Logosvg";

const Logo = () => {
  return (
    <div id="logo" className="flex ">
      <div className="items-center ">
        <Logosvg />
      </div>

      <h1 className="font-bold text-[18px] max-xs:hidden text-black dark:text-white">
        Sarhan
      </h1>
    </div>
  );
};

export default Logo;
