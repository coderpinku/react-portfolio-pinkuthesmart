import React from 'react'

const Contact = () => {
  return (
    <section className='bg-slate-300'>
      <div>
        <h1 class="text-4xl font-mono text-center py-4 font-bold mb-8">Chat with Me...</h1>
      </div>
      <div className='flex justify-around items-center max-md:flex-wrap'>
        <div class="min-w-1/2 ">
          <img class="max-md:w-72 max-md:h-72 max-md:mb-16 max-md:ml-6 max-md:pl-4 h-96 w-96 self-center ml-6" src="/image/contact.png"></img>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-around'>
            <a href='#'>
              <img className='h-[2rem] w-[2rem]' src='./image/linkedin.png'></img>
            </a>
            <a href='#'>
              <img className='h-[2rem] w-[2rem]' src='./image/github.png'></img>
            </a>
            <a href='#'>
              <img className='h-[2rem] w-[2rem]' src='./image/gmail.png'></img>
            </a>
          </div>
          <div>
            <form className='flex flex-col gap-4 ' action='./'>
              <input className='pl-4 w-96 h-[2.5rem]  max-md:w-80 rounded-md shadow-lg' type='email' placeholder="Email" />
              <input className='pl-4 w-96 h-[2.5rem]  max-md:w-80 rounded-md shadow-lg' type='text' placeholder="Full Name" />
              <textarea className='pl-4 w-96 h-[8rem] max-md:w-80 rounded-md shadow-lg' placeholder="Your Message" />
              <input className='pl-4 w-96 h-[2.5rem]  max-md:w-80 rounded-md bg-yellow-400 border-2 border-solid border-yellow-400 cursor-pointer hover:bg-white font-bold shadow-lg' type='submit' />

            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center font-semibold font-mono mt-14 pb-4 text-slate-600'>
        <h5 className='text-center'>Design and build by Pinku Kumar, 2022 &copy; All rights reserved. </h5>
      </div>
    </section>
  )
}

export default Contact