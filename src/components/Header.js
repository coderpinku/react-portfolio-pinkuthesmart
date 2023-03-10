import Typed from "react-typed"
export default function Header() {
    return (
        <section class="bg-slate-300 h-screen">
            <section class="flex font-sans items-center justify-center gap-24 m-auto py-32 max-md:flex-wrap-reverse ">
                <div class="text-center sm:text-left">
                    <p class="text-4xl font-semibold my-1 max-md:text-3xl">Hello, my name is </p>
                    <p class="text-8xl font-bold my-0 max-md:text-6xl">Pinku Kumar</p>
                    <span class="text-4xl my-6 font-semibold max-md:text-3xl">I am a </span>
                    <Typed
                        strings={['Front-end Developer']}
                        typeSpeed={200}
                        backSpeed={100}
                        loop
                        style={{ fontSize: '2rem', fontWeight: '700' }}

                    >
                    </Typed>
                    <br />
                    <a href="#"> <button class="text-2xl w-32 h-10 pb-3 rounded bg-yellow-400 font-semibold border-2 border-solid border-yellow-400 my-3 hover:bg-white">Resume</button> </a>
                </div>
                <div>
                    <img class="h-60 w-60 border-4 border-solid border-yellow-400 rounded-full mt-6 max-md:mt-4" src="/image/pic-design.png" ></img>
                </div>
            </section>
        </section>
    )
}