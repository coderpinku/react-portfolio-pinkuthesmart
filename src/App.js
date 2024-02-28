import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import projectData from "./components/projectData";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {
 

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);




  const toggleDarkMode = () => {
    setDarkMode((preMode) => !preMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="scroll-smooth dark:bg-bg_dark dark:text-whiteFont ">
      <Navbar darkMode={darkMode} onClick={toggleDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <About />
      <Portfolio projectData = {projectData}/>  
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
