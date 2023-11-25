"use client";
import { useEffect, useState } from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`w-full flex paddingX py-2 top-0 fixed z-20 ${
        scroll ? "bg-[#f5da9b42] dark:bg-[#2d010166]" : "bg-transparent"
      }`}
    >
       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

      <Link
        href="/"
        scroll={false}
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <Logo />
      </Link>
      <div className="flex gap-16">
        {/* //
        //? Desktop Navigation
        */}
        <ul
          id="desktopnav"
          className="hidden sm:flex gap-10 md:gap-102xl:gap-16   list-none"
        >
          {NavLinks.map((link) => (
            <Link
              // scroll={true}
              href={link.url}
              key={link.name}
              className={` text-xl font-medium ${
                active === link.name
                  ? "dark:text-white-100 text-black-100"
                  : "text-[#32302a71] dark:text-[#ae83839a] "
              } `}
              onClick={() => setActive(link.name)}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <span>
          <FiSun
            onClick={toggleTheme}
            className="h-7 w-7 dark:block hidden dark:text-[#cccbcb] cursor-pointer"
          />
          <FiMoon
            onClick={toggleTheme}
            className=" h-7 w-7  block dark:hidden  cursor-pointer  "
          />
        </span>
      </div>
      {/* //
        //? Mobile Navigation
      */}
      <div id="mobilenav" className="sm:hidden block">
        <div onClick={() => settoggle(!toggle)} className="cursor-pointer">
          {" "}
          {toggle ? (
            <AiOutlineClose className="h-8 w-8 " />
          ) : (
            <BiMenuAltLeft className="h-8 w-8" />
          )}
        </div>
        <ul
          className={`
       ${toggle ? "flex absolute" : "hidden"}
       flex flex-col gap-2 p-6 Navmenu top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl list-none`}
        >
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              className={`cursor-pointer  font-medium ${
                active === link.name
                  ? "dark:text-white-100 text-black-100"
                  : "text-[#0a0a0a76] dark:text-[#000000]"
              } `}
              onClick={() => {
                setActive(link.name);
                settoggle(false);
              }}
            >
              {link.name}
            </Link>
          ))}{" "}
        </ul>
      </div>
       </div>
    </nav>
  );
};

export default Navbar;
