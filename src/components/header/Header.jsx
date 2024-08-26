import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="flex justify-between items-center px-10 py-3">
            <h1 className="text-4xl font-bold cursor-pointer text-slate-200 drop-shadow-lg hover:scale-105 ease-in duration-100">
                ᎮᎶ
            </h1>
            <ul className="hidden capitalize sm:flex gap-2 items-center text-slate-200">
                <li className="cursor-pointer p-1 relative after:content-[''] after:h-[2px] after:bg-white after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:ease-in-out after:duration-200 hover:text-white duration-100 ease-in-out">
                    Contact Me
                </li>
                <li className="cursor-pointer p-1 relative after:content-[''] after:h-[2px] after:bg-white after:w-0 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:ease-in-out after:duration-200 hover:text-white duration-100 ease-in-out">
                    Projects
                </li>
            </ul>
            <div className="sm:hidden text-slate-200 text-2xl cursor-pointer">
                {!showMenu && (
                    <GiHamburgerMenu
                        className=""
                        onClick={() => setShowMenu(!showMenu)}
                    />
                )}
            </div>
            {showMenu && (
                <div className="sm:hidden fixed w-full h-screen top-0 left-0 bg-opacity-50 text-red-50 bg-slate-500 z-10 flex items-start duration-200 ease-in-out">
                    <ul className="bg-purple-900 bg-opacity-50 ml-auto mt-5 rounded-md overflow-hidden">
                        <li className="py-2 px-4 text-left hover:bg-purple-700 cursor-pointer ease-in-out duration-150">
                            Contact me
                        </li>
                        <li className="py-2 px-4 text-left hover:bg-purple-700 cursor-pointer ease-in-out duration-150">
                            Projects
                        </li>
                    </ul>
                    <RiCloseLargeLine className="text-2xl mr-10 mt-5" onClick={()=>setShowMenu(!showMenu)} />
                </div>
            )}
        </header>
    );
}
