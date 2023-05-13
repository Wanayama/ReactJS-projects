import React from 'react'
import Laptop from '../Assets/laptop.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[460px] mx-auto my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     A quas quisquam dolorem quaerat facere culpa quasi 
                     maiores deleniti. At exercitationem unde soluta
                      adipisci, error odio cum nam similique laborum 
                      blanditiis?</p>
                      <button className='bg-[#00df9a] w-[200px] p-4 mt-6 rounded-md mx-auto md:mx-0 text-xl hover:text-white ease-in duration-100'>Get Started</button>
                      

            </div>
        </div>
    </div>
  )
}

export default Analytics