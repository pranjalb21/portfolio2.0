import React from "react";
import Tag from "./Tag";
import {
    FaFacebookSquare,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div className="fixed flex flex-col top-1/2 right-0 -translate-y-1/2 gap-1 ">
            <Tag icon={<FaFacebookSquare />} text="Facebook" color={`bg-blue-600`} />
            <Tag icon={<FaInstagram />} text="Instagram" color={`bg-gradient-to-tr from-[#fcb045] via-[#fd1d1d] to-[#833ab4]`} />
            <Tag icon={<FaGithub />} text="Github" color={`bg-black`} />
            <Tag icon={<FaLinkedin />} text="LinkedIn" color={`bg-blue-500`} />
        </div>
    );
}
