import React from "react";
import { BsFillCameraVideoFill, BsEyeFill, BsGithub } from "react-icons/bs";
const Portfolio = ({ projectData }) => {
  return (
    <section
      className="bg-slate-300 max-md:h-[156rem] dark:bg-bg_dark dark:text-whiteFont"
      id="portfolio"
    >
      <div>
        <h1 className="text-4xl  text-center pt-4 font-medium ">
          My Creative Portfolio...
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-8 my-4 py-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="dark:bg-bg_dark bg-white gap-3 w-[20rem] rounded-md p-4 flex flex-col justify-center items-center shadow-lg dark:shadow-blue-500/50 hover:bg-yellow-50"
          >
            <div>
              <img
                className="h-[10rem] w-[20rem] rounded-md "
                src={project.image}
              ></img>
            </div>
            <div className="w-72 gap-3 flex flex-col">
              <h3 className="text-center font-bold text-2xl">{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <span className="text-yellow-500 font-semibold">
                  Tech Stack:{" "}
                </span>
                {project.techstack}
              </p>
            </div>
            <div className="flex gap-24">
              <a href="#">
                <BsFillCameraVideoFill
                  size={30}
                  className="hover:text-yellow-400"
                />
              </a>
              <a href={project.demo} target="_blank">
                <BsEyeFill size={32} className="hover:text-yellow-400" />
              </a>
              <a href={project.github} target="_blank">
                <BsGithub size={26} className="hover:text-yellow-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
