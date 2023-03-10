import React from 'react'

const About = () => {
    return (
        <section>
            <div>
                <h1 class="text-5xl font-mono text-center mt-4 font-bold">WHo I am...</h1>
            </div>
            <div class="flex gap-12 text-xl font-mono max-md:flex-wrap">
                <div class="min-w-1/2 ">
                    <img class="max-md:w-80 max-md:ml-6 max-md:pl-4 h-full w-full self-center ml-6" src="/image/whoiam.png"></img>
                </div>
                <div class="px-24 max-md:px-1">

                    <ul class="list-disc text-[light-grey] mt-12 ml-5 max-md:mt-2">
                        <li class="mb-6">
                            My name is Pinku. I am from Bikaner(Rajasthan). I have completed BCA and M.Sc(Cyber security) &
                            I enjoy creating things that live on the internet.
                        </li>
                        <li class="mb-6">
                            I'm a passionate Front-end Developer with good attention to detail &
                            the ability to write efficient code.
                        </li>
                        <li>
                            I am aspiring Front-end developer with passion for building user-friendly website and applications.
                            I am always eager to learn new technology and techniques to improve my skills.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default About