import Typed from "react-typed";
export default function Header() {
  return (
    <section className="bg-slate-300 h-dvh dark:bg-bg_dark" id="home">
      <section className="flex font-sans items-center justify-center gap-24 m-auto py-24 max-md:flex-wrap-reverse ">
        <div className="text-center sm:text-left">
          <p className="text-3xl font-normal my-1 max-md:text-3xl">
            Hi, My name is
          </p>
          <p className="text-8xl font-medium my-0 max-md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500/50">Pinku Kumar</p>
          <span className="text-4xl my-6 font-semibold max-md:text-3xl">
            I am a{" "} 
          </span>
          <Typed
            strings={["Front-end Developer"]}
            typeSpeed={200}
            backSpeed={100}
            loop
            style={{ fontSize: "2rem", fontWeight: "700"}}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
            ></Typed><br/>
            <Typed
            strings={["Aspring a Full-stack Developer"]}
            style={{ fontSize: "1.5rem", fontWeight: "500" }}
            ></Typed>
          <br />
          
          <button className="relative inline-flex items-center justify-center p-0.5 mt-8
          overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 
          group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
          focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Resume
</span>
</button>
        </div>
        <div>
          <img
            className="h-auto w-[80%] border-8 shadow-[0_20px_80px_5px_rgba(0,0,0,0.3)]
             shadow-yellow-400 hover:shadow-red-400 border-solid border-yellow-400 
             rounded-full max-md:m-auto cursor-pointer 
             dark:shadow-blue-500/50 dark:hover:shadow-yellow-500/50"
            src="/image/pic-design.png"
          ></img>
        </div>
      </section>
    </section>
  );
}
