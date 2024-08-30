import React from "react";
import CloseButton from "../CloseButton";
import {
    SiExpress,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiTailwindcss,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import {
    FaCss3Alt,
    FaGitAlt,
    FaGitSquare,
    FaNode,
    FaReact,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { TbFileTypeSql } from "react-icons/tb";

const skills = [
    {
        name: `Javascript`,
        icon: <RiJavascriptFill />,
        textColor: `text-yellow-400`,
    },
    { name: `Git`, icon: <FaGitAlt />, textColor: `text-orange-600` },
    { name: `GitHub`, icon: <FaGithub />, textColor: `text-black` },
    { name: `HTML`, icon: <TiHtml5 />, textColor: `text-orange-500` },
    { name: `CSS`, icon: <FaCss3Alt />, textColor: `text-blue-400` },
    { name: `ReactJS`, icon: <FaReact />, textColor: `text-blue-400` },
    { name: `NodeJS`, icon: <FaNode />, textColor: `text-green-500` },
    { name: `ExpressJS`, icon: <SiExpress />, textColor: `text-black` },
    { name: `Tailwind`, icon: <SiTailwindcss />, textColor: `text-sky-400` },
    { name: `MongoDB`, icon: <SiMongodb />, textColor: `text-green-400` },
    { name: `SQL`, icon: <TbFileTypeSql />, textColor: `text-blue-400` },
    {
        name: `Microsoft SQL Server`,
        icon: <SiMicrosoftsqlserver />,
        textColor: `text-orange-600`,
    },
];
export default function About() {
    return (
        <div className="fixed h-screen w-full  z-20 top-0 left-0 bg-opacity-30 flex justify-center items-center p-8  backdrop-blur-md">
            <div className="bg-slate-500 bg-opacity-80 h-full md:w-3/4 w-full relative p-8 flex flex-col justify-center items-center rounded-md animate-late-load-animate overflow-y-auto md:flex-row-reverse scrollbar-thin scrollbar-track-rounded-lg scrollbar-corner-rounded-lg scrollbar-thumb-orange-700
            scrollbar-h-3">
                <CloseButton />
                <div className="w-1/2 md:w-1/3 box`">
                    <img src="./avatar.png" alt="avatar" className="object-cover" />
                </div>
                <div className="text-gray-300 md:self-start md:pt-10">
                    <h1 className="text-white">About me</h1>
                    <p>
                        I'm a software engineer at Trianz Digital Consulting PVT
                        LTD.
                    </p>
                    <p>
                        I work on Fullstack web app development using MERN stack
                        technologies.
                    </p>
                    <p>Below are the technologies that I use to work on:</p>
                    <div className="w-full flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="border  px-2 rounded-xl py-0.5 font-thin text-sm flex gap-1 items-center"
                            >
                                <span className={`${skill.textColor}`}>
                                    {skill.icon}
                                </span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
