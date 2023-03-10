import React from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <header class="sticky top-0 bg-slate-300 flex items-center justify-between px-4 py-2  ">
            <div>
                <span class="text-2xl font-semibold cursor-pointer">&lt;#streetCoder/&gt;</span>
            </div>
            <div>
                <ul class="flex items-center px-15px list-none text-lg font-semibold space-x-12 uppercase max-md:hidden">
                    <li><a href='#'> home</a></li>
                    <li><a href='#'> about</a></li>
                    <li><a href='#'> portfolio</a></li>
                    <li><a href='#'> skills</a></li>
                    <li><a href='#'> contact</a></li>


                    <div onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}

                    </div>
                </ul>
            </div>
            <span class="hidden max-md:block" onClick={() => setMenuBar(!menuBar)}>
                {menuBar ? <GiHamburgerMenu size={25} /> : <AiOutlineClose size={25} />}
            </span>
            <ul className={menuBar ? 'ease-in-out duration-500 fixed left-[-100%]' : 'fixed  left-0 top-0 w-[60%] h-full  bg-slate-200 ease-in-out duration-500 font-bold'}>
                <li className='p-4'><a href='#'>Home</a></li>
                <li className='p-4'><a href='#'>about</a></li>
                <li className='p-4'><a href='#'>portfolio</a></li>
                <li className='p-4'><a href='#'>skills</a></li>
                <li className='p-4'><a href='#'>Contact</a></li>
            </ul>
        </header>

    )
}

export default Navbar