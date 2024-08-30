import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import CloseButton from "../CloseButton";

export default function Projects() {
    return (
        <div className="fixed h-screen w-full  z-20 top-0 left-0 bg-opacity-30 flex justify-center items-center p-8  backdrop-blur-md">
            <div className="bg-slate-500 bg-opacity-80 h-full md:w-3/4 w-full relative p-8 flex flex-col justify-center items-center rounded-md animate-late-load-animate overflow-hidden">
                <CloseButton />
            </div>
        </div>
    );
}
