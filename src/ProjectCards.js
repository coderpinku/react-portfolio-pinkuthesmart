import React from 'react'
import { BsFillCameraVideoFill, BsEyeFill, BsGithub } from "react-icons/bs"
const ProjectCards = (projectData) => {
  return (
    <section>

    <div class='flex justify-center'>

    <div class="bg-white gap-3 w-[20rem] h-auto rounded-md p-4 flex flex-col justify-center items-center shadow-lg hover:bg-yellow-50">
        <div>
            <img class="h-[10rem] w-[20rem] rounded-md " src={projectData.image}></img>
        </div>
        <div class="w-72 gap-3 flex flex-col">
            <h3 class="text-center font-bold text-2xl font-mono">{projectData.name}</h3>
            <p>
                {projectData.description}
            </p>
            <p>
                <span class="text-yellow-500 font-semibold">Tech Stack: </span>
                {projectData.techstack}
            </p>

        </div>
        <div class="flex gap-24">
            <a href='#'>
            <BsFillCameraVideoFill size={30} class="hover:text-yellow-400"/>
            </a>
            <a href='#'>
            <BsEyeFill size={32} class="hover:text-yellow-400"/>
            </a>
            <a href='#'>
            <BsGithub size={26} class="hover:text-yellow-400"/>
            </a>
        </div>

    </div>
    </div>
    </section>
  )
}

export default ProjectCards