import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Body() {
    return (
        <div className="w-full h-screen flex md:flex-row-reverse md:gap-10 flex-col items-center justify-start pt-10  gap-10  md:justify-center">
            <div
                className="h-48 w-48 relative bg-black overflow-hidden cursor-pointer rounded-full before:duration-500
            before:content['']  before:absolute before:inset-x-10 before:-inset-y-2 before:bg-gradient-to-br  hover:before:-inset-1 before:from-red-600 before:to-blue-600 before:animate-spin-slow
            after:content[''] after:bg-black after:inset-y-1 after:inset-x-1 after:z-10 after:absolute after:rounded-full md:-translate-x-1/2 md:-translate-y-1/2
            "
            >
                <div className="absolute z-20 overflow-hidden inset-x-3 inset-y-3 bg-white rounded-full">
                    <img
                        src="./self.jpg"
                        alt="pranjal"
                        className="object-cover w-full h-full absolute rounded-full"
                    />
                </div>
            </div>
            <div className="md:text-left text-transparent  p-2 md:self-center bg-gradient-to-br from-gray-400 to-gray-100 bg-clip-text mr-20 md:-translate-x-1/2 md:-translate-y-2/3 translate-x-1/4">
                <h1 className="text-4xl">Pranjal Gain</h1>
                <p className="mt-3">MERN Stack Developer</p>
                <p>
                    <span className="text-white inline-block mr-1 translate-y-0.5">
                        <FaLocationDot />
                    </span>
                    Kolkata, West Bengal, India
                </p>
                <Link
                    className="bg-gradient-to-tr mt-4 from-purple-400 to-blue-700 text-white w-fit py-1 px-4 rounded-md cursor-pointer  text-center
                hover:scale-105 ease-in-out duration-200 relative group active:translate-y-1 block shadow-sm shadow-black"
                    to={"/about"}
                >
                    About me
                    <span className="absolute group-hover:inline-block ml-2 font-bold text-xl top-0 -right-1 h-full group-hover:translate-x-1 duration-300">
                        &rarr;
                    </span>
                </Link>
            </div>
        </div>
    );
}
