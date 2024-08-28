import { Button, TextareaAutosize, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";

export default function Contact() {
    return (
        <div className="fixed h-screen w-full  z-20 top-0 left-0 bg-opacity-30 flex justify-center items-center p-8  backdrop-blur-lg">
            <div className="bg-white bg-opacity-80 h-full md:w-3/4 w-full relative p-8 flex flex-col justify-center items-center rounded-md">
                <Link to={"/"}>
                    <MdOutlineClose className="text-3xl absolute top-2 right-2" />
                </Link>
                <h1 className="text-3xl capitalize">Contact me</h1>
                <div className="w-full flex justify-center items-center">
                    <img
                        src="./contact.png"
                        alt="contact"
                        className="hidden lg:block w-1/2 "
                    />
                    <form className="border p-4 flex flex-col gap-4 w-full mt-4 rounded-lg max-w-sm">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="contact"
                            label="Contact no."
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="contact"
                            label="Message"
                            variant="outlined"
                            rows={5}
                            multiline
                        ></TextField>
                        <Button
                            variant="contained"
                            className="w-1/2 self-center"
                            endIcon={<IoSend />}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
