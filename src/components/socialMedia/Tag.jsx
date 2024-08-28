import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export default function Tag({ icon, text, color }) {
    return (
        <div className={`flex items-center py-1 px-2 ${color} text-white cursor-pointer gap-2 rounded-sm text-xl translate-x-[90px] hover:-translate-x-0 duration-500 ease-in-out`}>
            {icon}
            <span className="text-lg self-center">{text}</span>
        </div>
    );
}
