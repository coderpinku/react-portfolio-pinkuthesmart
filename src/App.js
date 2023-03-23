import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import projectData from "./components/projectData"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ProjectCards from "./ProjectCards";
import {  useState } from "react"

function App() {

  const projectElement = projectData.map((project) => {
    return <ProjectCards name={project.projectName} image={project.image} description={project.description} techstack={project.techstack} />

  })

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = ()=>{
    setDarkMode(preMode => !preMode)
  }
  return (
    <div class="scroll-smooth">
      <Navbar 
        darkMode = {darkMode}
        toggleDarkMode = {toggleDarkMode}
      />
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
