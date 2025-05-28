import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import CloseButton from "../CloseButton";
import { FaDirections, FaRegFileCode } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Workasana",
        urllink: "https://tourmaline-parfait-029397.netlify.app",
        image: "https://res.cloudinary.com/dw0vujhhh/image/upload/v1748433834/workasana_vkintv.png",
        description:
            "This is a project management application where user can manage project managing related tasks.",
        codelink: "https://github.com/pranjalb21/workasana",
    },
    {
        id: 2,
        title: "Ecommerce",
        urllink: "https://major-project-1-frontend.vercel.app/",
        image: "https://res.cloudinary.com/dw0vujhhh/image/upload/v1748434080/ecom_sfhfkj.png",
        description:
            "This is an ecommerce application where user can see the list of products and order them.",
        codelink: "https://github.com/pranjalb21/major-project-1-frontend",
    },
];
export default function Projects() {
    return (
        <div className="fixed h-screen w-full  z-20 top-0 left-0 bg-opacity-30 flex justify-center items-center p-8  backdrop-blur-md">
            <div
                className="bg-slate-500 bg-opacity-80 h-full md:w-3/4 w-full relative p-8 flex flex-col justify-center items-center rounded-md animate-late-load-animate overflow-auto"
                style={{ overflow: "auto" }}
            >
                <CloseButton />
                <div
                    className="d-flex flex-column mt-5 mt-md-0 animate-late-load-animate"
                    style={{ marginTop: "1rem" }}
                >
                    <h2 className="fs-2 text-white">Projects</h2>
                    <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
                        {projects.map((project) => (
                            <div className="" key={project.id}>
                                <div
                                    className="card  mb-2"
                                    style={{ width: " 18rem", height: "20rem" }}
                                >
                                    <img
                                        src={project.image}
                                        className="card-img-top"
                                        alt={project.title}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                            {project.title}
                                        </h5>
                                        <p className="card-text">
                                            {project.description}
                                        </p>
                                        <div className="d-flex mt-auto">
                                            <Link
                                                to={project.urllink}
                                                target="_blank"
                                            >
                                                <button className="btn btn-outline-success">
                                                    <FaDirections className="fs-4" />
                                                </button>
                                            </Link>
                                            <Link
                                                to={project.codelink}
                                                target="_blank"
                                            >
                                                <button className="btn btn-outline-info ms-3">
                                                    <FaRegFileCode className="fs-4" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
