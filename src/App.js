import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import projectData from "./components/projectData";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectCards from "./ProjectCards";
import { useState } from "react";

function App() {
  const projectElement = projectData.map((project) => {
    return (
      <ProjectCards
        name={project.projectName}
        image={project.image}
        description={project.description}
        techstack={project.techstack}
        demo={project.demo}
        github={project.github}
      />
    );
  });

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((preMode) => !preMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div class="scroll-smooth dark:bg-slate-800 dark:text-whiteFont ">
      <Navbar darkMode={darkMode} onClick={toggleDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <About />
      <div className="relative bottom-0">
        <Portfolio />
        <div className="flex flex-wrap justify-center items-center absolute top-[5rem] gap-4 right-0 max-md:pt-8">
          {projectElement}
        </div>
      </div>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
