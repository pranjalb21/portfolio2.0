import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CloseButton() {
    return (
        <Link to={"/"}>
            <MdOutlineClose className="text-3xl absolute top-2 right-2 text-white hover:text-red-400" />
        </Link>
    );
}
