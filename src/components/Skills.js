import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div>
        <h1 className="text-4xl text-center py-4 font-medium">
          My Technical Skills...
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/html.svg"></img>
          <p className="text-center font-semibold font-arial">HTML</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/css.svg"></img>
          <p className="text-center font-semibold font-arial">CSS</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/bootstrap.svg"></img>
          <p className="text-center font-semibold font-arial">Bootstrap</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/tailwind-css.svg"></img>
          <p className="text-center font-semibold font-arial">Tailwind</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/javascript.svg"></img>
          <p className="text-center font-semibold font-arial">JavaScript</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/react.svg"></img>
          <p className="text-center font-semibold font-arial">React</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/git.svg"></img>
          <p className="text-center font-semibold font-arial">Git</p>
        </div>
        <div className="dark:text-darkFont dark:shadow-blue-500/50 bg-slate-200 hover:bg-white p-2 m-4 rounded-md shadow-lg">
          <img className="h-24 w-24" src="./image/node.png"></img>
          <p className="text-center font-semibold font-arial">Node</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
