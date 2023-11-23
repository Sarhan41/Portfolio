import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div id="logo" className=" flex">
    <Image
      src="./logolight.svg"
      width={56}
      height={12}
      alt="Logo"
      className="dark:block hidden h-12"
    ></Image>
    <Image
      src="./logodark.svg"
      width={56}
      height={12}
      alt="logo"
      className="dark:hidden h-12  block "
    ></Image>

    <h1 className="font-bold text-[18px] max-xs:hidden">Sarhan</h1>
  </div>
  );
};

export default Logo;
