import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = (props) => {
  const [menuBar, setMenuBar] = useState(true);

  return (
    <header className="sticky top-0 bg-slate-300 flex items-center justify-between px-4 py-2 z-10 dark:bg-bg_dark h-[80px]">
      <div>
        <span className="text-[2rem] font-medium cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          &lt;#Pinkuthesmart/&gt;
        </span>
      </div>
      <div>
        <ul className="flex items-center px-15px list-none text-[1rem] font-medium space-x-12 uppercase max-md:hidden">
          <li>
            <a href="#home"> home</a>
          </li>
          <li>
            <a href="#about"> about</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#skills"> skills</a>
          </li>
          <li>
            <a href="#contact"> contact</a>
          </li>
          <div onClick={props.toggleDarkMode} className="cursor-pointer">
            {props.darkMode ? (
              <MdDarkMode size={25} />
            ) : (
              <MdLightMode size={25} />
            )}
          </div>
        </ul>
      </div>
      <span className="hidden max-md:block" onClick={() => setMenuBar(!menuBar)}>
        {menuBar ? <GiHamburgerMenu size={25} /> : <AiOutlineClose size={25} />}
      </span>
      <ul
        className={
          menuBar
          ? "ease-in-out duration-500 fixed left-[-100%] "
          : "fixed  left-0 top-0 w-[60%] h-full  bg-slate-200 ease-in-out duration-500 font-bold dark:bg-bg_dark"
        }
        >
        <li className="p-4">
          <a href="#home">Home</a>
        </li>
        <li className="p-4">
          <a href="#about">About</a>
        </li>
        <li className="p-4">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="p-4">
          <a href="#skills">Skills</a>
        </li>
        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
