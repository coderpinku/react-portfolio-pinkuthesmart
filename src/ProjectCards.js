import React from "react";
import { BsFillCameraVideoFill, BsEyeFill, BsGithub } from "react-icons/bs";
const ProjectCards = (projectData) => {
  return (
    <section>
      <div className="flex justify-center ">
        <div className="dark:bg-bg_dark bg-white gap-3 w-[20rem] h-auto rounded-md p-4 flex flex-col justify-center items-center shadow-lg dark:shadow-blue-500/50 hover:bg-yellow-50">
          <div>
            <img
              className="h-[10rem] w-[20rem] rounded-md "
              src={projectData.image}
            ></img>
          </div>
          <div className="w-72 gap-3 flex flex-col">
            <h3 className="text-center font-bold text-2xl">
              {projectData.name}
            </h3>
            <p>{projectData.description}</p>
            <p>
              <span className="text-yellow-500 font-semibold">Tech Stack: </span>
              {projectData.techstack}
            </p>
          </div>
          <div className="flex gap-24">
              <a href="#">
              <BsFillCameraVideoFill size={30} className="hover:text-yellow-400"/>
            </a>
            <a href={projectData.demo} target="_blank">
              <BsEyeFill size={32} className="hover:text-yellow-400" />
            </a>
            <a href={projectData.github} target="_blank">
              <BsGithub size={26} className="hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
