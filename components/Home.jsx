import React from 'react'
import HeroImage from '../Assets/Hero image.png'
import { MdKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
      px-4 md:flex-row'>
        <div className='flex flex-col h-full justify-center'>
          <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Front-end Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 2 years of building and designing
            software UI/UX.
            Currently I love working on web based applications using
            technologies like React, Tailwind, NodeJS, and Figma.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={27}/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt='My' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home