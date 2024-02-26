import Typed from "react-typed";
export default function Header() {
  return (
    <section className="bg-slate-300 h-screen dark:bg-bg_dark" id="home">
      <section className="flex font-sans items-center justify-center gap-24 m-auto py-32 max-md:flex-wrap-reverse ">
        <div className="text-center sm:text-left">
          <p className="text-4xl font-semibold my-1 max-md:text-3xl">
            Hi, My name is
          </p>
          <p className="text-8xl font-bold my-0 max-md:text-6xl">Pinku Kumar</p>
          <span className="text-4xl my-6 font-semibold max-md:text-3xl">
            I am a{" "}
          </span>
          <Typed
            strings={["Front-end Developer"]}
            typeSpeed={200}
            backSpeed={100}
            loop
            style={{ fontSize: "2rem", fontWeight: "700" }}
          ></Typed>
          <br />
          <a href="#">
            {" "}
            <button className="dark:bg-blue-400 dark:border-blue-400 dark:text-darkFont dark:hover:bg-white 
            text-2xl w-32 h-10 pb-3 rounded bg-yellow-400 font-semibold 
            border-2 border-solid border-yellow-400 my-3 hover:bg-white">
              Resume
            </button>{" "}
          </a>
        </div>
        <div>
          <img
            className="h-60 w-60 border-8 shadow-[0_20px_80px_5px_rgba(0,0,0,0.3)]
             shadow-yellow-400 hover:shadow-red-400 border-solid border-yellow-400 
             rounded-full mt-6 max-md:mt-4 cursor-pointer
             dark:shadow-blue-500/50 dark:hover:shadow-yellow-500/50"
            src="/image/pic-design.png"
          ></img>
        </div>
      </section>
    </section>
  );
}
